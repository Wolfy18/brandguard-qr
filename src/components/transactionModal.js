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
