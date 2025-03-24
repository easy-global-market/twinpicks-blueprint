import { StellioTemplate } from 'src/interfaces';

const entityType = 'KeyPerformanceIndicatorModel';
const entityTypeTitle = 'Model of Key Performance Indicator';

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
    aggregatedData: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: `Entity(ies) and attribute(s) aggregated by the KPI`,
                friendlyAttributeName: 'Aggregated Data',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: entityTypeTitle,
            minimum: 0,
            required: ['name', 'aggregatedData'],
            description: `The KPI model holds generic information about how to calculate A KPI.`,
        },
    },
};

export default template;
