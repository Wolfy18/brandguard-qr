import { Button, Modal } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import BakBridge from 'bakbridge';
import 'bakbridge/dist/main.css';

const LaunchpadModal = ({ config, getter, callback }) => {
	const { accessToken, testnet, open = false, showButton = true } = config;

	const [bridge, setBridge] = useState();
	const [isOpen, setOpen] = useState(open);
	const modalRef = useRef();
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	useEffect(() => {
		const modal = modalRef.current;
		if (!modal) return;

		if (bridge) return;

		const initial = getter();

		const container = document.createElement('div');

		new BakBridge({
			bakToken: accessToken,
			container: container,
			initial: initial,
			client: {
				baseUrl: testnet
					? 'https://testnet.bakrypt.io/v1/'
					: 'https://bakrypt.io/v1/',
			},
			onSuccess: (transaction, collection) => {
				callback({ transaction, collection });
			},
		});

		modal
			.querySelector('.components-modal__content')
			.appendChild(container);
	}, [isOpen, accessToken, getter, testnet, callback]);
	return (
		<>
			{showButton && (
				<>
					<p style={{ maxWidth: '50%', marginTop: 0 }}>
						To begin minting your single token, simply click on the
						button below. If you have previously set a blockchain
						token image, the system will automatically load it into
						the form.
					</p>
					<Button variant="secondary" onClick={openModal}>
						Get started
					</Button>
				</>
			)}

			{isOpen && (
				<Modal
					title="Review Assets"
					onRequestClose={closeModal}
					ref={modalRef}
					shouldCloseOnClickOutside={false}
					shouldCloseOnEsc={false}
				></Modal>
			)}
		</>
	);
};

function renderLaunchpadModal(config, getter, callback) {
	return (
		<LaunchpadModal config={config} getter={getter} callback={callback} />
	);
}

export default renderLaunchpadModal;
