import {
	INodeType,
	INodeTypeDescription,
	IExecuteFunctions,
	INodeExecutionData,
	NodeConnectionType,
	IDataObject,
	IHttpRequestMethods
} from 'n8n-workflow';
import {
	customerOperations,
	customers,
	customerCreate
} from './CustomerDescription';
import {
	saleOperations,
	saleCreate
} from './SaleDescription';
import {
	contractOperations,
	contractCreate
} from './ContractDescription';
import { ContaAzulApiRequest } from './GenericFunctions';

export class ContaAzul implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Conta Azul',
		name: 'contaAzul',
		icon: 'file:ContaAzul.svg',
		group: ['output'],
		version: 1,
		subtitle: 'Integration with Conta Azul system',
		description: 'Allows interaction with Conta Azul API',
		defaults: {
			name: 'Conta Azul',
		},
		// eslint-disable-next-line n8n-nodes-base/node-class-description-inputs-wrong-regular-node
		inputs: [NodeConnectionType.Main],
		// eslint-disable-next-line n8n-nodes-base/node-class-description-outputs-wrong
		outputs: [NodeConnectionType.Main],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Customer',
						value: 'customer',
						description:
							'Customer CRUD',
					},
					{
						name: 'Contract',
						value: 'contract',
						description:
							'Contract CRUD',
					},
					{
						name: 'Sale',
						value: 'sale',
						description:
							'Sale CRUD',
					}
				],
				default: 'customer',
			},

			...customerOperations,
			...customers,
			...customerCreate,

			...saleOperations,
			...saleCreate,

			...contractOperations,
			...contractCreate
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		let responseData;
		let accessToken =  this.getNodeParameter('accessToken', 0) as string;
		let qs: IDataObject;

		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);

		for (let i = 0; i < length; i++) {
			let endpoint = '';
			let method: IHttpRequestMethods = 'GET';
			let body: IDataObject = {};
			qs = {};

			if (resource === 'customer'){
				switch (operation) {
					case 'list':
						qs.document = this.getNodeParameter('document', i) as number;
						endpoint = `https://api.contaazul.com/v1/customers`;
						break;
					case 'create':
						endpoint = `https://api.contaazul.com/v1/customers`;
						method = 'POST';
						body = {
							name: this.getNodeParameter('name', i) as string,
							company_name: this.getNodeParameter('company_name', i) as string,
							email: this.getNodeParameter('email', i) as string,
							business_phone: this.getNodeParameter('business_phone', i) as string,
							mobile_phone: this.getNodeParameter('mobile_phone', i) as string,
							person_type: this.getNodeParameter('person_type', i) as string,
							document: this.getNodeParameter('document', i) as string,
							identity_document: this.getNodeParameter('identity_document', i) as string,
							state_registration_number: this.getNodeParameter('state_registration_number', i) as string,
							state_registration_type: this.getNodeParameter('state_registration_type', i) as string,
							city_registration_number: this.getNodeParameter('city_registration_number', i) as string,
							date_of_birth: this.getNodeParameter('date_of_birth', i) as string,
							notes: this.getNodeParameter('notes', i) as string,
							contacts: JSON.parse(this.getNodeParameter('contacts', i) as string || '[]'),
							address: {
								zip_code: this.getNodeParameter('zip_code', i) as string,
								street: this.getNodeParameter('street', i) as string,
								number: this.getNodeParameter('number', i) as string,
								complement: this.getNodeParameter('complement', i) as string,
								neighborhood: this.getNodeParameter('neighborhood', i) as string,
							},
						};
						break;
					default:
						// eslint-disable-next-line n8n-nodes-base/node-execute-block-wrong-error-thrown
						throw new Error(`Unsupported resource: ${resource}`);
				}
			}else if (resource === 'sale'){
				switch (operation) {
					case 'create':
						endpoint = `https://api.contaazul.com/v1/sales`;
						method = 'POST';
						body = {
							number: this.getNodeParameter('number', i) as number,
							emission: this.getNodeParameter('emission', i) as string,
							status: this.getNodeParameter('status', i) as string,
							customer_id: this.getNodeParameter('customer_id', i) as string,
							seller_id: this.getNodeParameter('seller_id', i) as string,
							products: JSON.parse(this.getNodeParameter('products', i) as string || '[]'),
							services: JSON.parse(this.getNodeParameter('services', i) as string || '[]'),
							discount: {
								measure_unit: this.getNodeParameter('discount_measure_unit', i) as string,
								rate: this.getNodeParameter('discount_rate', i) as number,
							},
							payment: {
								type: this.getNodeParameter('payment_type', i) as string,
								method: this.getNodeParameter('payment_method', i) as string,
								installments: JSON.parse(this.getNodeParameter('installments', i) as string || '[]'),
								financial_account_id: this.getNodeParameter('financial_account_id', i) as string,
							},
							notes: this.getNodeParameter('notes', i) as string,
							shipping_cost: this.getNodeParameter('shipping_cost', i) as number,
						};
						break;
					default:
						// eslint-disable-next-line n8n-nodes-base/node-execute-block-wrong-error-thrown
						throw new Error(`Unsupported resource: ${resource}`);
				}
			}else if (resource === 'contract'){
				switch (operation) {
					case 'create':
						endpoint = `https://api.contaazul.com/v1/contracts`;
						method = 'POST';
						body = {
							number: this.getNodeParameter('number', i) as number,
							emission: this.getNodeParameter('emission', i) as string,
							status: this.getNodeParameter('status', i) as string,
							customer_id: this.getNodeParameter('customer_id', i) as string,
							products: JSON.parse(this.getNodeParameter('products', i) as string || '[]'),
							services: JSON.parse(this.getNodeParameter('services', i) as string || '[]'),
							discount: {
								measure_unit: this.getNodeParameter('discount_measure_unit', i) as string,
								rate: this.getNodeParameter('discount_rate', i) as number,
							},
							due_day: this.getNodeParameter('due_day', i) as number,
							duration: this.getNodeParameter('duration', i) as number,
							notes: this.getNodeParameter('notes', i) as string,
							shipping_cost: this.getNodeParameter('shipping_cost', i) as number,
						};
						break;
					default:
						// eslint-disable-next-line n8n-nodes-base/node-execute-block-wrong-error-thrown
						throw new Error(`Unsupported resource: ${resource}`);
				}
			}

			try {
				responseData = await ContaAzulApiRequest.call(this, endpoint, method, body, accessToken, qs);

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData as IDataObject[]),
					{ itemData: { item: i } },
				);

				returnData.push(...executionData);
			} catch (error) {
				// eslint-disable-next-line n8n-nodes-base/node-execute-block-wrong-error-thrown
				throw new Error(`API Request failed: ${error.message}`);
			}
		}

		return [returnData];
	}
}
