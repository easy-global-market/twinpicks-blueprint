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
                schemaType: 'string',
                format: 'uri',
                title: `Which Product is the subject of this Travel?`,
                friendlyAttributeName: 'Product carried',
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
