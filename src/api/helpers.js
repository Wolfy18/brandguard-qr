const retrieveTransaction = async ({
	id = undefined,
	token = undefined,
	uri = '',
}) => {
	let transaction;
	let response;
	try {
		response = await fetch(`${uri}/v1/transactions/${id}/`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	} catch (error) {
		alert(error);
	}

	try {
		if (response && response.ok) {
			transaction = await response.json();
		}
	} catch (error) {
		alert(error);
	}

	return transaction;
};

const retrieveAsset = async ({
	id = undefined,
	token = undefined,
	uri = '',
}) => {
	let asset;
	let response;
	try {
		response = await fetch(`${uri}/v1/assets/${id}/`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	} catch (error) {
		alert(error);
	}

	try {
		if (response && response.ok) {
			asset = await response.json();
		}
	} catch (error) {
		alert(error);
	}

	return asset;
};

const uploadAttachment = async ({ file, token, uri }) => {
	const payload = new FormData();

	payload.set('file', file);
	let response;
	let attachment;
	try {
		response = await fetch(`${uri}/v1/files/`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: payload,
		});
	} catch (error) {
		alert(error);
	}

	try {
		attachment = await response.json();
	} catch (error) {
		alert(error);
	}

	return attachment;
};
export { retrieveTransaction, retrieveAsset, uploadAttachment };
