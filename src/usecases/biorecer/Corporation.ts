import { StellioTemplate } from 'src/interfaces';

const entityType = 'Corporation';
const entityTypeTitle = 'Corporation';

const template: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: `Name of the ${entityTypeTitle}`, friendlyAttributeName: 'Name' },
        },
    },
    location: {
        type: 'GeoProperty',
        value: {
            type: 'Point',
            coordinates: [],
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: `Where is located the ${entityTypeTitle}?`,
                friendlyAttributeName: 'Location',
            },
        },
    },
    hasProductionSystem: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:ProductionSystem:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: `This ${entityTypeTitle} owns which production system(s)?`,
                friendlyAttributeName: 'Production system(s) owned',
                minItems: 1,
                items: {
                    type: 'Relationship',
                    object: 'urn:ngsi-ld:ProductionSystem:Template',
                    jsonSchema: {
                        type: 'Property',
                        value: {
                            schemaType: 'string',
                            format: `uri`,
                            title: `Select a production system`,
                        },
                    },
                },
            },
        },
    },
    certifiedRenewableShare: {
        type: 'Property',
        value: 50,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Certified Renewable Share',
                title: 'What percentage (%) of your total land, production outputs, or activities is certified under a recognized sustainable renewability certification scheme?',
            },
        },
    },
    roleName: {
        type: 'Property',
        value: 'placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                enum: ['Primary Producer', 'Processor', 'Manufacturer', 'Waste Manager'],
                friendlyAttributeName: 'Role name',
                title: 'What is your role in the supply chain for the product you are assessing?',
            },
        },
    },
    hasTransporter: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Transporter:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: `Does this ${entityTypeTitle} owns Transporter(s)?`,
                friendlyAttributeName: 'Transporter(s) owned',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: entityTypeTitle,
            minimum: 0,
            required: ['name', 'hasProductionSystem'],
            description: `Digital twin for a ${entityTypeTitle} (or company) which owns the production systems`,
        },
    },
};

export default template;
