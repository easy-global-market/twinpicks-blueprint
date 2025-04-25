import { StellioTemplate } from 'src/interfaces';

const entityType = 'Travel';
const entityTypeTitle = 'Travel';

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
    subject: {
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
                    friendlyAttributeName: 'Destination',
                    listOfAllowedRelationships: [
                        'urn:ngsi-ld:Storage:Template',
                        'urn:ngsi-ld:ProductionSystem:Template',
                    ],
                },
            },
        },
        type: 'Relationship',
        object: 'urn:ngsi-ld:Product:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: `Which Products are subjects of this Travel?`,
                friendlyAttributeName: 'Products carried',
                items: {
                    type: 'Relationship',
                    object: 'urn:ngsi-ld:Product:Template',
                    jsonSchema: {
                        type: 'Property',
                        value: {
                            schemaType: 'string',
                            format: `uri`,
                            title: `Select a Product`,
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
            description: `The ${entityTypeTitle} of a Transporter. A new Travel is created for each movement. Each Travel has a single Product subject`,
        },
    },
};

export default template;
