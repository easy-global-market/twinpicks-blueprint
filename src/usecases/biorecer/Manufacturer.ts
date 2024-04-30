import { StellioTemplate } from 'src/interfaces';

const entityType = 'Manufacturer';
const entityTypeTitle = 'Manufacturer';

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
                schemaType: 'string',
                format: 'uri',
                title: `This ${entityTypeTitle} owns which production system(s)?`,
                friendlyAttributeName: 'Production system(s) owned',
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
                title: `This ${entityTypeTitle} owns which Transporter(s)?`,
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
