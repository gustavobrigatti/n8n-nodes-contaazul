import type { INodeProperties } from 'n8n-workflow';

export const customerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['customer'],
			},
		},
		// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
		options: [
			{
				name: 'Customers',
				value: 'list',
				description: 'Retrieve a list of customers',
				action: 'Get all customers',
			},
			{
				name: 'Customer Create',
				value: 'create',
				description: 'Create a customer',
				action: 'Create a customer',
			},
		],
		default: 'list',
	},
];

export const customers: INodeProperties[] = [
	{
		displayName: 'Access Token',
		name: 'accessToken',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['list'],
			},
		},
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
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['list'],
			},
		},
	},
];

export const customerCreate: INodeProperties[] = [
	{
		displayName: 'Access Token',
		name: 'accessToken',
		type: 'string',
		typeOptions: { password: true },
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Customer Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Company Name',
		name: 'company_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Business Phone',
		name: 'business_phone',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Mobile Phone',
		name: 'mobile_phone',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Person Type',
		name: 'person_type',
		type: 'options',
		options: [
			{ name: 'Natural (Pessoa Física)', value: 'NATURAL' },
			{ name: 'Legal (Pessoa Jurídica)', value: 'LEGAL' },
		],
		default: 'NATURAL',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Document (CPF/CNPJ)',
		name: 'document',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Identity Document (RG)',
		name: 'identity_document',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'State Registration Number',
		name: 'state_registration_number',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'State Registration Type',
		name: 'state_registration_type',
		type: 'options',
		options: [
			{ name: 'No Contributor', value: 'NO_CONTRIBUTOR' },
			{ name: 'Contributor', value: 'CONTRIBUTOR' },
			{ name: 'Immune Contributor', value: 'IMMUNE_CONTRIBUTOR' },
		],
		default: 'NO_CONTRIBUTOR',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'City Registration Number',
		name: 'city_registration_number',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Date of Birth',
		name: 'date_of_birth',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
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
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Contacts',
		name: 'contacts',
		type: 'json',
		default: '[]',
		placeholder: '[{"name": "John", "business_phone": "9999-9999", "email": "john@example.com", "job_title": "Manager"}]',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'ZIP Code',
		name: 'zip_code',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Street',
		name: 'street',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Complement',
		name: 'complement',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Neighborhood',
		name: 'neighborhood',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
	},
];
