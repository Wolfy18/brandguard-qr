import { Button, Modal, Notice } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import BakBridge from 'bakbridge';
import 'bakbridge/dist/main.css';

const noticeStyles = { position: 'fixed', top: '5%', right: '5%' };

const TransactionModal = ({ config, getter, collection }) => {
	const { accessToken, testnet, open = false, showButton = true } = config;

	const [isOpen, setOpen] = useState(open);
	const [showNotice, setShowNotice] = useState(false);
	const [notice, setNotice] = useState('');
	const [noticeStatus, setNoticeStatus] = useState('');
	const modalRef = useRef();
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	useEffect(() => {
		(async () => {
			const modal = modalRef.current;
			if (!modal) return;

			// if (
			// 	modal
			// 		.querySelector('.components-modal__content')
			// 		.querySelector('bakrypt-invoice')
			// )
			// 	return;

			const transaction = await getter();

			const container = document.createElement('div');

			new BakBridge({
				bakToken: accessToken,
				container: container,
				showTransaction: true,
				transactionUuid: transaction,
				client: {
					baseUrl: testnet
						? 'https://testnet.bakrypt.io/v1/'
						: 'https://bakrypt.io/v1/',
				},
			});

			modal
				.querySelector('.components-modal__content')
				.appendChild(container);
			// const launchpad = document.createElement('bakrypt-launchpad');
			// Object.assign(launchpad, {
			// 	accessToken,
			// 	initial,
			// });

			// if (testnet) Object.assign(launchpad, { testnet: true });

			// launchpad.addEventListener('submit', (e) => {
			// 	callback(e.detail);
			// });

			// modal
			// 	.querySelector('.components-modal__content')
			// 	.appendChild(launchpad);

			// const invoice = document.createElement('bakrypt-invoice');
			// Object.assign(invoice, { transaction, collection, accessToken });

			// if (testnet) Object.assign(invoice, { testnet: true });

			// const showToastr = (event) => {
			// 	const [message, type] = event.detail;
			// 	setNotice(message);
			// 	setNoticeStatus(type);
			// 	setShowNotice(true);
			// };

			// invoice.addEventListener('notification', showToastr);

			// modal
			// 	.querySelector('.components-modal__content')
			// 	.appendChild(invoice);
		})();
	}, [isOpen, showNotice, collection, getter, accessToken, testnet]);
	return (
		<>
			{showButton && (
				<Button variant="secondary" onClick={openModal}>
					View Request
				</Button>
			)}

			{isOpen && (
				<Modal
					title="Review Transaction"
					onRequestClose={closeModal}
					isFullScreen={true}
					ref={modalRef}
					shouldCloseOnClickOutside={false}
					shouldCloseOnEsc={false}
				></Modal>
			)}

			{showNotice && (
				<Notice
					style={noticeStyles}
					isDismissible={true}
					status={noticeStatus}
					onDismiss={() => setShowNotice(false)}
				>
					<p>{String(notice)}</p>
				</Notice>
			)}
		</>
	);
};

function renderTransactionModal(config, getter, collection) {
	return (
		<TransactionModal
			config={config}
			getter={getter}
			collection={collection}
		/>
	);
}

export default renderTransactionModal;
