import { StellioTemplate } from 'src/interfaces';

const entityType = 'Transporter';
const entityTypeTitle = 'Transporter';

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
    transportMode: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                enum: ['By land', 'By air', 'By sea'],
                title: `What's the transport mode for this ${entityTypeTitle}?`,
                friendlyAttributeName: 'Transport mode',
            },
        },
    },
    isCarrying: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Product:Template',
        from: {
            type: 'Relationship',
            object: 'urn:ngsi-ld:Storage:Template',
            jsonSchema: {
                type: 'Property',
                value: {
                    schemaType: 'string',
                    format: 'uri',
                    title: `What's its starting point?`,
                    friendlyAttributeName: 'Starting point',
                    listOfAllowedRelationships: [
                        'urn:ngsi-ld:Storage:Template',
                        'urn:ngsi-ld:ProductionSystem:Template',
                    ],
                },
            },
        },
        to: {
            type: 'Relationship',
            object: 'urn:ngsi-ld:Storage:Template',
            jsonSchema: {
                type: 'Property',
                value: {
                    schemaType: 'string',
                    format: 'uri',
                    title: `What's its destination?`,
                    friendlyAttributeName: 'Starting point',
                    listOfAllowedRelationships: [
                        'urn:ngsi-ld:Storage:Template',
                        'urn:ngsi-ld:ProductionSystem:Template',
                    ],
                },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: `Products carried`,
                friendlyAttributeName: 'Product carried',
                minItems: 1,
                items: {
                    schemaType: 'string',
                    format: 'uri',
                    title: `This ${entityTypeTitle} is carrying which product?`,
                    friendlyAttributeName: 'Product carried',
                    canSetObservedAt: true,
                },
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: entityTypeTitle,
            minimum: 0,
            required: ['name'],
            description: `The ${entityTypeTitle} of a product. It can be a truck, a boat, a plane...`,
        },
    },
};

export default template;
