import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class CreateSale implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Conta Azul - Create Sale',
		name: 'createSales',
		icon: 'file:ContaAzul.svg',
		group: ['Conta Azul'],
		version: 1,
		subtitle: 'Cria venda',
		description: 'Cria venda na Conta Azul',
		defaults: {
			name: 'Create Sale',
		},
		// eslint-disable-next-line n8n-nodes-base/node-class-description-inputs-wrong-regular-node
		inputs: [NodeConnectionType.Main],
		// eslint-disable-next-line n8n-nodes-base/node-class-description-outputs-wrong
		outputs: [NodeConnectionType.Main],
		requestDefaults: {
			baseURL: 'https://api.contaazul.com/v1/sales',
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
				seller_id: '={{ $parameter["seller_id"] }}',
				products: '={{ JSON.parse($parameter["products"] || "[]") }}',
				services: '={{ JSON.parse($parameter["services"] || "[]") }}',
				discount: {
					measure_unit: '={{ $parameter["discount_measure_unit"] }}',
					rate: '={{ $parameter["discount_rate"] }}',
				},
				payment: {
					type: '={{ $parameter["payment_type"] }}',
					method: '={{ $parameter["payment_method"] }}',
					installments: '={{ JSON.parse($parameter["installments"] || "[]") }}',
					financial_account_id: '={{ $parameter["financial_account_id"] }}',
				},
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
				type: 'options',
				options: [
					{ name: 'PENDING', value: 'PENDING' },
					{ name: 'COMMITTED', value: 'COMMITTED' },
				],
				default: 'PENDING',
			},
			{
				displayName: 'Customer ID',
				name: 'customer_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Seller ID',
				name: 'seller_id',
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
				displayName: 'Payment Type',
				name: 'payment_type',
				type: 'options',
				options: [
					{ name: 'CASH', value: 'CASH' },
					{ name: 'TIMES', value: 'TIMES' },
				],
				default: 'CASH',
			},
			{
				displayName: 'Payment Method',
				name: 'payment_method',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Installments',
				name: 'installments',
				type: 'json',
				default: '[]',
			},
			{
				displayName: 'Financial Account ID',
				name: 'financial_account_id',
				type: 'string',
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
