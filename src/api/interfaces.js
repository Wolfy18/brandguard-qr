import {
	retrieveAsset,
	retrieveTransaction,
	uploadAttachment,
} from './helpers';

class BakryptApiInterface {
	constructor(uri, token) {
		this.token = token;
		this.uri = uri;
	}

	getTransaction(id) {
		return retrieveTransaction({
			id: id,
			uri: this.uri,
			token: this.token,
		});
	}

	getAsset(id) {
		return retrieveAsset({
			id: id,
			uri: this.uri,
			token: this.token,
		});
	}

	postAttachment(file) {
		return uploadAttachment({
			file: file,
			uri: this.uri,
			token: this.token,
		});
	}
}

export default BakryptApiInterface;
