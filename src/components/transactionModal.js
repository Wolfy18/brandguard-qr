import { Button, Modal, Notice } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';

const noticeStyles = { position: 'fixed', top: '5%', right: '5%' };

const TransactionModal = ({ getter, collection }) => {
	const [isOpen, setOpen] = useState(false);
	const [showNotice, setShowNotice] = useState(false);
	const [notice, setNotice] = useState('');
	const [noticeStatus, setNoticeStatus] = useState('');
	const modalRef = useRef();
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	useEffect(() => {
		const modal = modalRef.current;
		if (!modal) return;

		if (
			modal
				.querySelector('.components-modal__content')
				.querySelector('bakrypt-invoice')
		)
			return;

		const transaction = getter;

		const invoice = document.createElement('bakrypt-invoice');
		Object.assign(invoice, { transaction, collection });

		const showToastr = (event) => {
			const [message, type] = event.detail;
			setNotice(message);
			setNoticeStatus(type);
			setShowNotice(true);
		};

		invoice.addEventListener('notification', showToastr);

		modal.querySelector('.components-modal__content').appendChild(invoice);
	}, [isOpen, showNotice, collection, getter]);
	return (
		<>
			<Button variant="secondary" onClick={openModal}>
				View Request
			</Button>
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
					onDismiss={(e) => setShowNotice(false)}
				>
					<p>{String(notice)}</p>
				</Notice>
			)}
		</>
	);
};

function renderTransactionModal(transactionGetter, collection) {
	return (
		<TransactionModal getter={transactionGetter} collection={collection} />
	);
}

export default renderTransactionModal;
