import { StellioTemplate } from 'src/interfaces';

export const entityType = 'KeyPerformanceIndicator';
const entityTypeTitle = 'Key Performance Indicator';

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
    description: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: `Description of the ${entityTypeTitle}`,
                friendlyAttributeName: 'Description',
            },
        },
    },
    kpiValue: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: `Value of the KPI. It can be of any type`,
                friendlyAttributeName: 'KPI value',
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
            description: `This is used as a norm or model to be used for evaluation.`,
        },
    },
};

export default template;
