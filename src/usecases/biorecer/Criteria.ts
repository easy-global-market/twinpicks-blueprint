import { StellioTemplate } from 'src/interfaces';

const entityType = 'Criteria';
const entityTypeTitle = 'Criteria';

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
    level: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                enum: ['Basic', 'Advance'],
                title: `Criteria level`,
                friendlyAttributeName: 'Criteria level',
            },
        },
    },
    pillar: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                enum: ['Environmental', 'Economic', 'Social'],
                title: `Pillar`,
                friendlyAttributeName: 'Pillar',
            },
        },
    },
    requirement: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: `Requirement text content`, friendlyAttributeName: 'Requirement' },
        },
    },
    noAnswer: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: `"No" Answer`, friendlyAttributeName: '"No" Answer' },
        },
    },
    notApplicableAnswer: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: `"N/A" Answer`, friendlyAttributeName: '"N/A" Answer' },
        },
    },
    yesAnswer: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: `"Yes" Answer`, friendlyAttributeName: '"Yes" Answer' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: entityTypeTitle,
            minimum: 0,
            required: ['name'],
            description: `The ${entityTypeTitle} also known as "Requirement" of the BitAdvisor, are used for companies self evaluation`,
        },
    },
};

export default template;
