import {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
	IRequestOptions,
	NodeApiError
} from "n8n-workflow";

export async function ContaAzulApiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	endpoint: string,
	method: IHttpRequestMethods,
	body: any = {},
	accessToken: string,
	query?: IDataObject,
	uri?: string,
	option: IDataObject = {},
): Promise<any> {
	console.log('Request URL:', endpoint); // Adicione este log

	const options: IRequestOptions = {
		method,
		body,
		qs: query,
		uri: endpoint,
		json: true,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${accessToken}`,
		},
		...option,
	};

	if (Object.keys(option).length !== 0) {
		Object.assign(options, option);
	}

	if (Object.keys(body as IDataObject).length === 0) {
		delete options.body;
	}

	if (Object.keys(query || {}).length === 0) {
		delete options.qs;
	}

	try {
		return await this.helpers.request!(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}
