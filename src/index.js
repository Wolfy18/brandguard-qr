// Import SCSS entry file so that webpack picks up changes
import './index.scss';
// import 'bakrypt-invoice/dist/bakrypt-invoice';
import * as ReactDOM from 'react-dom';
import renderTransactionModal from './components/transactionModal';
import renderLaunchpadModal from './components/launchpadModal';
import showSpinner from './components/spinner';
import BakryptApiInterface from './api/interfaces';

const setData = (asset, tx) => {
	let inputs = [
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
		let input = document.querySelector(`#${i}`);
		if (input) {
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
					input.value = asset.metadata;
					break;
				default:
					break;
			}
		}

		return i;
	});
};

const init = () => {
	// Render Modal if section exists
	const wrapper = document.querySelector('#blockchain_product_data');

	if (!wrapper) return;

	const token = wrapper.querySelector('.btn-action').dataset.token;
	const testnet = wrapper.querySelector('.btn-action').attributes.testnet;

	const mintModalContainer = wrapper
		.querySelector('.btn-action')
		.querySelector('.mint');
	if (mintModalContainer) {
		const modal = document.createElement('div');
		const initial =
			'[{"blockchain":"ada","name":"first token","asset_name":"","image":"ipfs://QmevPofBhZ7jPNdbbSSa5wfL68eL5roWRwuMFaCvtWeSRf","media_type":"","description":"","files":[],"attrs":{},"amount":1,"royalties":"this is the wallet","royalties_rate":"2"},{"blockchain":"ada","name":"second token","asset_name":"","image":"ipfs://QmVnzJMU91QCdgfg4CgRpUZzcwjwywLdUhVAh6RjVEZmvg","media_type":"","description":"","files":[],"attrs":{},"amount":1},{"blockchain":"ada","name":"third token","asset_name":"","image":"ipfs://QmbFU9gtgqfFLcTy4VfBQ4KNMrBMEghVSRXdfNYmcwMbDH","media_type":"","description":"","files":[],"attrs":{},"amount":1}]';
		ReactDOM.render(
			renderLaunchpadModal(token, initial, (response) => {
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
				}
			}),
			modal
		);
		mintModalContainer.appendChild(modal);
	}

	const helper = new BakryptApiInterface(
		testnet ? `https://testnet.bakrypt.io` : `https://bakrypt.io`,
		token
	);

	const syncAsset = async (e) => {
		e.preventDefault();

		const blockchainDataWrapper = document.querySelector(
			'#blockchain_product_data'
		);
		const spinner = document.createElement('div');
		spinner.id = 'spinner';

		ReactDOM.render(showSpinner(), spinner);
		blockchainDataWrapper.appendChild(spinner);

		const tokenUuid = document.querySelector('#bk_token_uuid').value;
		const asset = await helper.getAsset(tokenUuid);

		let tx;
		// Get transaction if the transaction is not found within the asset.
		if (asset.transaction && !asset.transaction.uuid) {
			tx = await helper.getTransaction(asset.transaction);
		} else {
			tx = asset.transaction;
		}

		setData(asset, tx);

		blockchainDataWrapper.removeChild(spinner);
	};

	// Sync Btn
	const syncBtn = document.querySelector('#sync-asset-btn');
	if (syncBtn) {
		syncBtn.removeEventListener('click', syncAsset);
		syncBtn.addEventListener('click', syncAsset);
	}

	const viewTransaction = async () => {
		const blockchainDataWrapper = document.querySelector(
			'#blockchain_product_data'
		);
		const spinner = document.createElement('div');
		spinner.id = 'spinner';

		ReactDOM.render(showSpinner(), spinner);
		blockchainDataWrapper.appendChild(spinner);

		const tokenUuid = document.querySelector('#bk_token_transaction').value;
		const tx = await helper.getTransaction(tokenUuid);

		blockchainDataWrapper.removeChild(spinner);

		return tx;
	};

	const transactionModalContainer = wrapper
		.querySelector('.btn-action')
		.querySelector('.view-transaction');
	if (transactionModalContainer) {
		const modal = document.createElement('div');
		ReactDOM.render(renderTransactionModal(viewTransaction, []), modal);
		transactionModalContainer.appendChild(modal);
	}
};

window.removeEventListener('load', init, true);
window.addEventListener('load', init, true);

console.log('new version v.1');
