import { StellioTemplate } from 'src/interfaces';

const entityType = 'Transformation';
const entityTypeTitle = 'Transformation';

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
    usesStandard: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Standard:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: `Does this ${entityTypeTitle} has a standard?`,
                friendlyAttributeName: 'Standard',
            },
        },
    },
    hasReference: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:ProcessType:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: `Does ${entityTypeTitle} has a reference?`,
                friendlyAttributeName: 'Referenced process type',
            },
        },
    },
    processes: {
        type: 'Property',
        value: 'Prop holding relationships to products generated and used during the process',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                friendlyAttributeName: 'Processes',
                title: `Configure Generated and Used products`,
                minItems: 1,
                items: {
                    schemaType: 'string',
                    format: 'uri',
                    title: `Set products of a Process`,
                    friendlyAttributeName: 'Products of a Process',
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
            description: `This represents a process which takes products as inputs and gives other products as output.`,
        },
    },
};

export default template;
