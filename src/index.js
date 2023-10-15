// Import SCSS entry file so that webpack picks up changes
import './index.scss';
import * as ReactDOM from 'react-dom';
import Swal from 'sweetalert2';
import renderTransactionModal from './components/transactionModal';
import renderLaunchpadModal from './components/launchpadModal';
import BakryptApiInterface from './api/interfaces';
import client from './api/client';
import { injectSpinner, removeSpinner, getData, setData } from './utils';

jQuery(document).ready(function ($) {
	$('a#bk_token_image_media_manager').click(function (e) {
		e.preventDefault();
		var imageFrame;
		if (imageFrame) {
			imageFrame.open();
		}
		// Define imageFrame as wp.media object
		imageFrame = wp.media({
			title: 'Select Media',
			multiple: false,
			library: {
				type: 'image',
			},
		});
		imageFrame.on('close', function () {
			// On close, get selections and save to the hidden input
			// plus other AJAX stuff to refresh the image preview
			const selection = imageFrame.state().get('selection');
			const galleryIds = new Array();
			let idx = 0;
			selection.each(function (attachment) {
				galleryIds[idx] = attachment.id;
				idx++;
			});
			const ids = galleryIds.join(',');
			if (ids.length === 0) return true; //if closed withput selecting an image
			$('input#bk_att_token_image').val(ids);
			refreshImages(ids);
		});

		imageFrame.on('open', function () {
			// On open, get the id from the hidden input
			// and select the appropiate images in the media manager
			const selection = imageFrame.state().get('selection');
			const ids = $('input#bk_att_token_image').val().split(',');
			ids.forEach(function (id) {
				const attachment = wp.media.attachment(id);
				attachment.fetch();
				selection.add(attachment ? [attachment] : []);
			});
		});

		imageFrame.open();
	});
});

// Ajax request to refresh the image preview
function refreshImages(id) {
	const data = {
		action: 'product_token_get_image',
		id,
	};
	jQuery.get(ajaxurl, data, function (response) {
		if (response.success === true) {
			jQuery('#preview_bk_att_token_image').replaceWith(
				response.data.image
			);

			jQuery('#bk_att_token_image_ipfs').val(
				jQuery('#preview_bk_att_token_image').data('ipfs')
			);
		}
	});
}

const updateRecord = async () => {
	const id = document.querySelector('#product_id').value;
	const body = getData();
	injectSpinner();
	try {
		const data = await client.put(`products/${id}`, body);

		if (data.status !== 200) throw 'Unable to update product.';

		Swal.fire({
			title: 'Good!',
			text: data.responseJSON,
			icon: 'success',
		});
	} catch (error) {
		Swal.fire({
			title: 'Error',
			text: error,
			icon: 'error',
		});
	}
	removeSpinner();
};

const deleteRecord = async (e) => {
	e.preventDefault();

	Swal.fire({
		title: 'Are you sure?',
		text: "You won't be able to revert this!",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#d33',
		cancelButtonColor: '#c7c7c9',
		confirmButtonText: 'Yes, delete it!',
	}).then(async (result) => {
		/* Read more about isConfirmed, isDenied below */
		if (result.isConfirmed) {
			const id = document.querySelector('#product_id').value;

			injectSpinner();
			try {
				const data = await client.delete(`products/${id}`);

				if (data.status !== 200)
					throw 'Unable to delete token information.';

				Swal.fire({
					title: 'Good!',
					text: data.responseJSON,
					icon: 'The product was reset. The page will reload automatically.',
				});

				window.location.reload();
			} catch (error) {
				Swal.fire({
					title: 'Error',
					text: error,
					icon: 'error',
				});
			}
			removeSpinner();
		} else if (result.isDenied) {
			Swal.fire('Changes are not saved', '', 'info');
		}
	});
};

// Product List
jQuery(document).ready(function ($) {
	const loadForm = (initialData) => {
		$.ajax({
			url: ajaxurl,
			type: 'POST',
			data: {
				action: 'access_token_action',
			},
			success: (accessResp) => {
				const wrapper = document.querySelector('#posts-filter');

				if (!wrapper) return;

				const token = accessResp.data.access_token;
				const testnet = accessResp.testnet;

				const mintModalContainer = wrapper;

				const modal = document.createElement('div');

				const setInitial = () => {
					const data = initialData.map((i) => {
						return {
							asset_name: i.name,
							name: i.name,
							image: i.image,
							amount: 1,
							blockchain: 'ada',
							description: '',
						};
					});

					return JSON.stringify(data);
				};
				ReactDOM.render(
					renderLaunchpadModal(
						{
							accessToken: token,
							testnet,
							open: true,
							showButton: false,
						},
						setInitial,
						(response) => {
							if (response.collection && response.transaction) {
								// Update all records
								const updateRecords = response.collection.map(
									(i, idx) => {
										return { ...initialData[idx], ...i };
									}
								);

								$.ajax({
									url: ajaxurl,
									type: 'POST',
									data: {
										action: 'update_records_action',
										products: updateRecords,
									},
									success: () => {
										Swal.fire({
											title: 'Products were updated',
											icon: 'success',
											text: 'Visit any product for more information about the transaction',
										}).then(() => {
											window.location.reload();
										});
									},
									error: (xhr, status, error) => {
										// Handle AJAX error
										Swal.fire({
											title: 'Error',
											text: error.responseJSON.data,
											icon: 'error',
										});
									},
								});
							}
						}
					),
					modal
				);
				mintModalContainer.appendChild(modal);
			},
			error: (xhr, status, error) => {
				// Handle AJAX error
				Swal.fire({
					title: 'Error',
					text: error.responseJSON.data,
					icon: 'error',
				});
			},
		});
	};

	const startMinting = (selectedProducts) => {
		injectSpinner();

		Swal.fire({
			title: 'Prepping data',
			icon: 'info',
			timer: 6000,
			showConfirmButton: false,
			position: 'top-end', // Adjust position as needed
			toast: true, // Enables the toastr-style appearance
			showClass: {
				popup: 'swal2-noanimation',
				backdrop: 'swal2-noanimation',
			},
			hideClass: {
				popup: '',
				backdrop: '',
			},
			customClass: {
				popup: 'custom-toast-position',
				container: 'custom-toast-position-container',
				actions: 'custom-toast-position-actions',
			},
		});

		$.ajax({
			url: ajaxurl,
			type: 'POST',
			data: {
				action: 'mint_bulk_action',
				product_ids: selectedProducts,
			},
			success: (bulkResp) => {
				// Process the AJAX bulkResp
				const missingImgs = bulkResp.data.filter(
					(i) => i.image === '' || !i.image
				);
				if (missingImgs.length) {
					Swal.fire({
						title: 'Uploading Images to IPFS',
						icon: 'info',
						timer: 6000,
						showConfirmButton: false,
						position: 'top-end', // Adjust position as needed
						toast: true, // Enables the toastr-style appearance
						showClass: {
							popup: 'swal2-noanimation',
							backdrop: 'swal2-noanimation',
						},
						hideClass: {
							popup: '',
							backdrop: '',
						},
						customClass: {
							popup: 'custom-toast-position',
							container: 'custom-toast-position-container',
							actions: 'custom-toast-position-actions',
						},
					});
					$.ajax({
						url: ajaxurl,
						type: 'POST',
						data: {
							action: 'upload_ipfs_bulk_action',
							product_ids: missingImgs.map((i) => i.product_id),
						},
						success: (ipfsRes) => {
							removeSpinner();
							// Process the AJAX ipfsRes
							const collectionFinal = bulkResp.data.map((i) => {
								const elem = { ...i };

								if (
									ipfsRes.data
										.map((j) => j.product_id)
										.includes(i.product_id)
								) {
									elem.image = ipfsRes.data.filter(
										(j) => j.product_id === i.product_id
									)[0].image;
								}
								return elem;
							});

							loadForm(collectionFinal);
						},
						error: () => {
							Swal.fire({
								title: 'Error',
								text: 'Unable to start upload images',
								icon: 'error',
								timer: 6000,
								showConfirmButton: false,
								position: 'top-end', // Adjust position as needed
								toast: true, // Enables the toastr-style appearance
								showClass: {
									popup: 'swal2-noanimation',
									backdrop: 'swal2-noanimation',
								},
								hideClass: {
									popup: '',
									backdrop: '',
								},
							});
							removeSpinner();
							// Handle AJAX error
						},
					});
				} else {
					removeSpinner();
					loadForm(bulkResp.data);
				}
			},
			error: () => {
				removeSpinner();
				Swal.fire({
					title: 'Error',
					text: 'Unable to start minting process',
					icon: 'error',
					timer: 6000,
					showConfirmButton: false,
					position: 'top-end', // Adjust position as needed
					toast: true, // Enables the toastr-style appearance
					showClass: {
						popup: 'swal2-noanimation',
						backdrop: 'swal2-noanimation',
					},
					hideClass: {
						popup: '',
						backdrop: '',
					},
				});
			},
		});
	};

	// Mint bulk action
	$('#posts-filter').on('click', '#doaction', async (e) => {
		if ($('#bulk-action-selector-top').val() === 'mint') {
			e.preventDefault();
			const selectedProducts = []; // Get the selected product IDs

			// Iterate over each row in the WP-List-Table
			$('.wp-list-table tbody tr').each(function () {
				const checkbox = $(this).find('input[type="checkbox"]');

				// Check if the checkbox is selected
				if (checkbox.prop('checked')) {
					// Retrieve the product ID from the row data or attributes
					const productId = checkbox.val();

					// Store the selected product ID
					selectedProducts.push(productId);
				}
			});

			if (!selectedProducts.length) {
				Swal.fire({ title: 'Please select products', icon: 'info' });
				return;
			}

			// Add check for existing products in bak
			// if found then show alert
			Swal.fire({
				title: 'Are you sure?',
				text: 'This action is irreversible! Please note that any blockchain-related data will be overwritten',
				icon: 'question',
				showCancelButton: true,
				cancelButtonColor: '#c7c7c9',
				confirmButtonText: 'Yes, mint it!',
			}).then((result) => {
				/* Read more about isConfirmed, isDenied below */
				if (result.isConfirmed) {
					startMinting(selectedProducts);
				} else if (result.isDenied) {
					Swal.fire('Changes are not saved', '', 'info');
				}
			});
		}
	});
});

const init = async () => {
	// Render Modal if section exists
	const wrapper = document.querySelector('#blockchain_product_data');

	if (!wrapper) return;

	const accessToken = wrapper.querySelector('.btn-action').dataset.token;
	const testnet = wrapper.querySelector('.btn-action').attributes.testnet;

	const mintModalContainer = wrapper
		.querySelector('.btn-action')
		.querySelector('.mint');

	if (mintModalContainer) {
		const modal = document.createElement('div');

		const setInitial = () => {
			if (!document.querySelector('#bk_att_token_image_ipfs')) {
				return;
			}
			const initialName = document.querySelector('#title').value;
			const initialImage = document.querySelector(
				'#bk_att_token_image_ipfs'
			).value;

			const asset = {
				blockchain: 'ada',
				name: initialName,
				asset_name: initialName.replace(/\s/g, ''),
				image: initialImage,
				amount: 1,
				description: '',
			};

			return JSON.stringify([asset]);
		};

		ReactDOM.render(
			renderLaunchpadModal(
				{
					accessToken,
					testnet,
				},
				setInitial,
				(response) => {
					if (response.collection && response.transaction) {
						setData(response.collection[0], response.transaction);

						// Hide/show action btns
						wrapper
							.querySelector('.btn-action')
							.querySelectorAll('.form-field')
							.forEach((i) => (i.style.display = 'block'));
						wrapper
							.querySelector('.btn-action')
							.querySelector('.form-field.mint').style.display =
							'none';

						updateRecord();
					}
				}
			),
			modal
		);

		mintModalContainer.appendChild(modal);
	}

	const helper = new BakryptApiInterface(
		testnet ? `https://testnet.bakrypt.io` : `https://bakrypt.io`,
		accessToken
	);

	const syncAsset = async (e) => {
		e.preventDefault();

		injectSpinner();

		const tokenUuid = document.querySelector('#bk_token_uuid').value;
		const asset = await helper.getAsset(tokenUuid);

		// Valid asset
		if (!asset) {
			Swal.fire({
				title: 'Error',
				text: 'Unable to load asset from remote source.',
				icon: 'error',
			});

			removeSpinner();
			return;
		}

		let tx;
		// Get transaction if the transaction is not found within the asset.
		if (asset && asset.transaction && !asset.transaction.uuid) {
			tx = await helper.getTransaction(asset.transaction);
		} else if (asset && asset.transaction) {
			tx = asset.transaction;
		}

		setData(asset, tx);

		updateRecord();

		removeSpinner();
	};

	// Sync Btn
	const syncBtn = document.querySelector('#sync-asset-btn');
	if (syncBtn) {
		syncBtn.removeEventListener('click', syncAsset);
		syncBtn.addEventListener('click', syncAsset);
	}

	const viewTransaction = async () => {
		injectSpinner();

		const tokenUuid = document.querySelector('#bk_token_transaction').value;
		const tx = await helper.getTransaction(tokenUuid);

		removeSpinner();

		return tx;
	};

	const transactionModalContainer = wrapper
		.querySelector('.btn-action')
		.querySelector('.view-transaction');

	if (transactionModalContainer) {
		const modal = document.createElement('div');
		ReactDOM.render(
			renderTransactionModal(
				{
					accessToken,
					testnet,
				},
				viewTransaction,
				[]
			),
			modal
		);
		transactionModalContainer.appendChild(modal);
	}

	// Delete action
	wrapper
		.querySelector('#delete_token')
		.removeEventListener('click', deleteRecord);
	wrapper
		.querySelector('#delete_token')
		.addEventListener('click', deleteRecord);
};

window.removeEventListener('load', init, true);
window.addEventListener('load', init, true);
