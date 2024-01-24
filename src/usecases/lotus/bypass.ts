import { StellioTemplate } from 'src/interfaces';

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
    cyclingDuration: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: 'Cycling Duration',
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
            description: 'Digital twin of the bypass structure',
        },
    },
};
