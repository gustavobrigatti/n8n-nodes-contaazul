import type { INodeProperties } from 'n8n-workflow';

export const saleOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['sale'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Sale Create',
				value: 'create',
				description: 'Create a sale',
				action: 'Create a sale',
			},
		],
		default: 'create',
	},
];

export const saleCreate: INodeProperties[] = [
	{
		displayName: 'Access Token',
		name: 'accessToken',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Number',
		name: 'number',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Emission Date',
		name: 'emission',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
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
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Customer ID',
		name: 'customer_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Seller ID',
		name: 'seller_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Products',
		name: 'products',
		type: 'json',
		default: '[]',
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Services',
		name: 'services',
		type: 'json',
		default: '[]',
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
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
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Discount Rate',
		name: 'discount_rate',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
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
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Payment Method',
		name: 'payment_method',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Installments',
		name: 'installments',
		type: 'json',
		default: '[]',
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Financial Account ID',
		name: 'financial_account_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Notes',
		name: 'notes',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Shipping Cost',
		name: 'shipping_cost',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['sale'],
				operation: ['create'],
			},
		},
	},
];
