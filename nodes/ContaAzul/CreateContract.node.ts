import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class CreateContract implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Conta Azul - Create Contract',
		name: 'createContract',
		icon: 'file:ContaAzul.svg',
		group: ['Conta Azul'],
		version: 1,
		subtitle: 'Cria contrato',
		description: 'Cria contrato no Conta Azul',
		defaults: {
			name: 'Create Contract',
		},
		// eslint-disable-next-line n8n-nodes-base/node-class-description-inputs-wrong-regular-node
		inputs: [NodeConnectionType.Main],
		// eslint-disable-next-line n8n-nodes-base/node-class-description-outputs-wrong
		outputs: [NodeConnectionType.Main],
		requestDefaults: {
			baseURL: 'https://api.contaazul.com/v1/contracts',
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: '={{ "Bearer " + $parameter["accessToken"] }}',
			},
			body: {
				number: '={{ $parameter["number"] }}',
				emission: '={{ $parameter["emission"] }}',
				status: '={{ $parameter["status"] }}',
				customer_id: '={{ $parameter["customer_id"] }}',
				products: '={{ JSON.parse($parameter["products"] || "[]") }}',
				services: '={{ JSON.parse($parameter["services"] || "[]") }}',
				discount: {
					measure_unit: '={{ $parameter["discount_measure_unit"] }}',
					rate: '={{ $parameter["discount_rate"] }}',
				},
				due_day: '={{ $parameter["due_day"] }}',
				duration: '={{ $parameter["duration"] }}',
				notes: '={{ $parameter["notes"] }}',
				shipping_cost: '={{ $parameter["shipping_cost"] }}',
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
				displayName: 'Number',
				name: 'number',
				type: 'number',
				default: '',
			},
			{
				displayName: 'Emission Date',
				name: 'emission',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Customer ID',
				name: 'customer_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Products',
				name: 'products',
				type: 'json',
				default: '[]',
			},
			{
				displayName: 'Services',
				name: 'services',
				type: 'json',
				default: '[]',
			},
			{
				displayName: 'Discount Measure Unit',
				name: 'discount_measure_unit',
				type: 'options',
				options: [
					{ name: 'VALUE', value: 'VALUE' },
					{ name: 'PERCENT', value: 'PERCENT' },
				],
				default: 'VALUE',
			},
			{
				displayName: 'Discount Rate',
				name: 'discount_rate',
				type: 'number',
				default: '',
			},
			{
				displayName: 'Due Day',
				name: 'due_day',
				type: 'number',
				default: '',
			},
			{
				displayName: 'Duration',
				name: 'duration',
				type: 'number',
				default: '',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Shipping Cost',
				name: 'shipping_cost',
				type: 'number',
				default: '',
			},
		],
	};
}
