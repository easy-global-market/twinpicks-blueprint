import { StellioTemplate } from 'interfaces';

export const PressureGauge: StellioTemplate = {
    id: 'urn:ngsi-ld:PressureGauge:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Name of the Pressure Gauge',
            },
        },
    },
    pressure: {
        type: 'Property',
        value: 0.1,
        unitCode: 'BAR',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Pressure', canSelfInit: true },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'PressureGauge',
            title: 'Pressure Gauge',
            required: ['name'],
            minimum: 1,
            description: 'Pressure gauge entity dedicated to the pressure within the pipes',
        },
    },
};
