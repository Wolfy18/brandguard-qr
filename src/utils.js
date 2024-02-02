import { createRoot } from 'react-dom';
import { Spinner } from '@wordpress/components';
import JSZip from 'jszip';

const injectSpinner = () => {
	const spinnerWrapper =
		document.querySelector('#blockchain_product_data') ||
		document.querySelector('#posts-filter');
	const spinner = document.createElement('div');
	spinner.id = 'spinner';

	const rootElement = createRoot(spinner);
	rootElement.render(<Spinner />);

	spinnerWrapper.appendChild(spinner);
};
const removeSpinner = () => {
	const spinnerWrapper =
		document.querySelector('#blockchain_product_data') ||
		document.querySelector('#posts-filter');
	const spinner = spinnerWrapper.querySelector('#spinner');
	spinnerWrapper.removeChild(spinner);
};

const getData = () => {
	const asset = {};

	const inputs = [
		'bk_token_uuid',
		'bk_token_policy',
		'bk_token_fingerprint',
		'bk_token_asset_name',
		'bk_token_image',
		'bk_token_name',
		'bk_token_amount',
		'bk_token_status',
		'bk_token_transaction',
		'bk_token_json',
		'bk_att_token_image',
		'bk_token_json',
	];

	inputs.map((i) => {
		const input = document.querySelector(`#${i}`);
		if (input) {
			// asset.set(i, input.value);
			asset[i] = input.value;
		}

		return i;
	});

	return asset;
};

const setData = (asset, tx) => {
	const inputs = [
		'bk_token_uuid',
		'bk_token_policy',
		'bk_token_fingerprint',
		'bk_token_asset_name',
		'bk_token_image',
		'bk_token_name',
		'bk_token_amount',
		'bk_token_status',
		'bk_token_transaction',
		'bk_token_json',
	];

	inputs.map((i) => {
		const input = document.querySelector(`#${i}`);
		if (input && asset) {
			switch (i) {
				case 'bk_token_uuid':
					input.value = asset.uuid;
					break;
				case 'bk_token_policy':
					input.value = tx.policy_id;
					break;
				case 'bk_token_fingerprint':
					input.value = asset.fingerprint;
					break;
				case 'bk_token_asset_name':
					input.value = asset.asset_name;
					break;
				case 'bk_token_name':
					input.value = asset.name;
					break;
				case 'bk_token_image':
					input.value = asset.image;
					break;
				case 'bk_token_amount':
					input.value = asset.amount;
					break;
				case 'bk_token_status':
					input.value = tx.status;
					break;
				case 'bk_token_transaction':
					input.value = tx.uuid;
					break;
				case 'bk_token_json':
					input.value = JSON.stringify(tx.metadata);
					break;
				default:
					break;
			}
		}

		return i;
	});
};

async function generateQRCodeAndDownloadAll(pairs) {
	try {
		const zip = new JSZip();

		// Function to generate QR code and add to the ZIP file
		async function generateAndAddToZip(pair) {
			const { fileName, text } = pair;

			const response = await fetch(
				`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
					text
				)}`
			);

			if (!response.ok) {
				throw new Error(`Failed to generate QR code for ${text}`);
			}

			const blob = await response.blob();
			zip.file(`${fileName}.png`, blob);
		}

		// Generate QR codes for each pair in the array
		await Promise.all(pairs.map(generateAndAddToZip));

		// Generate the ZIP file
		const zipBlob = await zip.generateAsync({ type: 'blob' });

		// Create a download link and trigger a click event
		const downloadLink = document.createElement('a');
		downloadLink.href = URL.createObjectURL(zipBlob);
		downloadLink.download = 'qrcodes.zip';

		// Append the link to the document
		document.body.appendChild(downloadLink);

		// Trigger a click event to start the download
		downloadLink.click();

		// Remove the link from the document
		document.body.removeChild(downloadLink);
	} catch (error) {
		console.error(error);
	}
}

export {
	injectSpinner,
	removeSpinner,
	getData,
	setData,
	generateQRCodeAndDownloadAll,
};
