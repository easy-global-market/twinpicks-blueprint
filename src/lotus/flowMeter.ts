import { StellioTemplate } from 'interfaces';

export const FlowMeter: StellioTemplate = {
    id: 'urn:ngsi-ld:FlowMeter:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Name of the FlowMeter',
            },
        },
    },
    flowRate: {
        type: 'Property',
        value: 10,
        unitCode: 'G51',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Flow rate', canSelfInit: true },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'FlowMeter',
            title: 'Flow Meter',
            required: ['name'],
            minimum: 1,
            description: 'Digital twin of the Flow Meter',
        },
    },
};
