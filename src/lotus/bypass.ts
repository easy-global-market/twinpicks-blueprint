import { StellioTemplate } from 'interfaces';

export const Bypass: StellioTemplate = {
    id: 'urn:ngsi-ld:Bypass:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Name of the Bypass',
            },
        },
    },
    flowState: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Flow state',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Bypass',
            title: 'Bypass',
            required: ['name'],
            minimum: 1,
            description: 'Digital twin of the Bypass',
        },
    },
};
