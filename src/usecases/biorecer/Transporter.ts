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
                enum: ['By truck', 'By plane', 'By boat'],
                title: `What's the transport mode for this ${entityTypeTitle}?`,
                friendlyAttributeName: 'Transport mode',
            },
        },
    },
    hasTravel: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Travel:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: `Travels`,
                friendlyAttributeName: 'Travels',
                minItems: 1,
                items: {
                    type: 'Relationship',
                    object: 'urn:ngsi-ld:Travel:Template',
                    jsonSchema: {
                        type: 'Property',
                        value: {
                            schemaType: 'string',
                            format: `uri`,
                            title: `Select a Travel`,
                        },
                    },
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
