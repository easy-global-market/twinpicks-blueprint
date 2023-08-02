import { StellioTemplate } from 'interfaces';

export const FieldTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Field:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Field name' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Field',
            title: 'Entity number limits',
            minimum: 1,
            required: ['name'],
        },
    },
};
