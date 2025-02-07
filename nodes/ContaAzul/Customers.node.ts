import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class Customers implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Conta Azul - Customers',
		name: 'customers',
		icon: 'file:ContaAzul.svg',
		group: ['Conta Azul'],
		version: 1,
		subtitle: 'Busca clientes',
		description: 'Busca clientes',
		defaults: {
			name: 'Costumers',
		},
		// eslint-disable-next-line n8n-nodes-base/node-class-description-inputs-wrong-regular-node
		inputs: [NodeConnectionType.Main],
		// eslint-disable-next-line n8n-nodes-base/node-class-description-outputs-wrong
		outputs: [NodeConnectionType.Main],
		requestDefaults: {
			baseURL: 'https://api.contaazul.com/v1/customers',
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Authorization': '={{ "Bearer " + $parameter["accessToken"] }}',
			},
		},
		properties: [
			{
				displayName: 'Access Token',
				name: 'accessToken',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				required: true,
			},
			{
				displayName: 'Customer Document',
				name: 'document',
				type: 'string',
				default: '',
				placeholder: 'Ex: 12345678900',
				description: 'Documento do cliente',
				routing: {
					request: {
						qs:{
							document: '={{$value}}'
						}
					}
				},
			},
		],
	};
}
