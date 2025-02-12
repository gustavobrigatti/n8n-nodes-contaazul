import type { INodeProperties } from 'n8n-workflow';

export const contractOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contract'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Contract Create',
				value: 'create',
				description: 'Create a contract',
				action: 'Create a contract',
			},
		],
		default: 'create',
	},
];

export const contractCreate: INodeProperties[] = [
	{
		displayName: 'Access Token',
		name: 'accessToken',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['contract'],
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
				resource: ['contract'],
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
				resource: ['contract'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['contract'],
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
				resource: ['contract'],
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
				resource: ['contract'],
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
				resource: ['contract'],
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
				resource: ['contract'],
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
				resource: ['contract'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Due Day',
		name: 'due_day',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['contract'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Duration',
		name: 'duration',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['contract'],
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
				resource: ['contract'],
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
				resource: ['contract'],
				operation: ['create'],
			},
		},
	},
];
