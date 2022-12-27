import { Button, Modal } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import '../launchpad/index';

const LaunchpadModal = ({ accessToken, collection, callback }) => {
	const [isOpen, setOpen] = useState(false);
	const modalRef = useRef();
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	useEffect(() => {
		const modal = modalRef.current;
		if (!modal) return;

		const launchpad = document.createElement('bakrypt-launchpad');
		Object.assign(launchpad, {
			accessToken: accessToken,
			initial: collection,
		});

		launchpad.addEventListener('submit', (e) => {
			callback(e.detail);
		});

		modal
			.querySelector('.components-modal__content')
			.appendChild(launchpad);
	}, [isOpen]);
	return (
		<>
			<Button variant="secondary" onClick={openModal}>
				Mint Token
			</Button>
			{isOpen && (
				<Modal
					title="Review Assets"
					onRequestClose={closeModal}
					isFullScreen={true}
					ref={modalRef}
					shouldCloseOnClickOutside={false}
					shouldCloseOnEsc={false}
				></Modal>
			)}
		</>
	);
};

function renderLaunchpadModal(token, data, listener) {
	return (
		<LaunchpadModal
			accessToken={token}
			collection={data}
			callback={listener}
		/>
	);
}

export default renderLaunchpadModal;
