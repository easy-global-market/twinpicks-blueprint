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
    generatesOutputProduct: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Product:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                friendlyAttributeName: 'Generated Products',
                title: `What Products were generated as output by this ${entityTypeTitle}?`,
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
    usesInputProduct: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Product:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                friendlyAttributeName: 'Used Products',
                title: `What Products were used as input by this ${entityTypeTitle}?`,
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
    energyRequirements: {
        name: {
            type: 'Property',
            value: 'Placeholder',
            jsonSchema: {
                type: 'Property',
                value: { schemaType: 'string', title: `Energy name` },
            },
        },
        type: 'Property',
        value: 1,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                friendlyAttributeName: 'Energy requirements',
                title: `Energy requirements of a full cycle`,
                items: {
                    type: 'Property',
                    value: 1,
                    jsonSchema: {
                        type: 'Property',
                        value: {
                            schemaType: 'integer',
                            title: `Energy requirement`,
                            canSetUnitCode: true,
                        },
                    },
                },
            },
        },
    },
    chemicalRequirements: {
        name: {
            type: 'Property',
            value: 'Placeholder',
            jsonSchema: {
                type: 'Property',
                value: { schemaType: 'string', title: `Chemical name` },
            },
        },
        type: 'Property',
        value: 1,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                friendlyAttributeName: 'Chemical requirements',
                title: `Chemical requirements of a full cycle`,
                items: {
                    type: 'Property',
                    value: 1,
                    jsonSchema: {
                        type: 'Property',
                        value: {
                            schemaType: 'integer',
                            title: `Chemical requirement`,
                            canSetUnitCode: true,
                        },
                    },
                },
            },
        },
    },
    waterRequirements: {
        type: 'Property',
        value: 1,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: `Water requirements of a full cycle`,
                friendlyAttributeName: 'Water requirements',
                canSetUnitCode: true,
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
