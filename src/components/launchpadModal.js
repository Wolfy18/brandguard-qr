import { Button, Modal } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import 'bakrypt-launchpad/dist/bakrypt-launchpad';

const LaunchpadModal = ({ accessToken, getter, callback }) => {
	const [isOpen, setOpen] = useState(false);
	const modalRef = useRef();
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	useEffect(() => {
		const modal = modalRef.current;
		if (!modal) return;

		const initial = getter();

		const launchpad = document.createElement('bakrypt-launchpad');
		Object.assign(launchpad, {
			accessToken: accessToken,
			initial: initial,
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

function renderLaunchpadModal(token, getter, listener) {
	return (
		<LaunchpadModal
			accessToken={token}
			getter={getter}
			callback={listener}
		/>
	);
}

export default renderLaunchpadModal;
