import { StellioTemplate } from 'src/interfaces';

const entityType = 'Certification';
const entityTypeTitle = 'Certification';

const template: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                enum: [
                    'ISCC EU',
                    'ISCC PLUS',
                    'SBP',
                    'FSC',
                    'RSB',
                    'PEFC',
                    'MSC',
                    'ASC',
                    'Global GAP aquaculture',
                    'Better Biomass',
                ],
                friendlyAttributeName: 'Name',
                title: 'Select the certification scheme in the list',
                order: 1,
            },
        },
    },
    startDate: {
        type: 'Property',
        value: '2025-08-11T13:17:25.242Z',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'date',
                title: `Start date of the ${entityTypeTitle}?`,
                friendlyAttributeName: 'Start date',
                order: 2,
            },
        },
    },
    endDate: {
        type: 'Property',
        value: '2025-08-12T13:17:25.242Z',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'date',
                title: `End date of the ${entityTypeTitle}?`,
                friendlyAttributeName: 'End date',
                order: 3,
            },
        },
    },
    subjectProduct: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Product:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: `Subject products of this ${entityTypeTitle}`,
                friendlyAttributeName: 'Subject products',
                order: 4,
            },
        },
    },
    addOnCertificate: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: `Name of the add-on certificate (if applicable), in addition to the main certificate`,
                friendlyAttributeName: 'Name of the add-on certificate',
                order: 5,
            },
        },
    },
    urlToRelevantDocument: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: `URL to the relevant certification document or standard`,
                friendlyAttributeName: 'Document URL',
                order: 6,
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: entityTypeTitle,
            minimum: 0,
            required: ['name', 'startDate', 'endDate', 'subjectProduct'],
            description: `Store here the relevant ${entityTypeTitle} information for your products`,
        },
    },
};

export default template;
