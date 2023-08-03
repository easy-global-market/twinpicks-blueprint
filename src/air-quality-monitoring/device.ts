import { StellioTemplate } from 'interfaces';

export const DeviceTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Device:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Give a name to this building',
            },
        },
    },
    lorasnr: {
        type: 'Property',
        value: 0,
        unitCode: '2N',
        observedAt: new Date().toISOString(),
        description: {
            type: 'Property',
            value: 'Placeholder',
            jsonSchema: {
                type: 'Property',
                value: { schemaType: 'string', title: 'Measure of loraSNR' },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Lora SNR' },
        },
    },
    rssi: {
        type: 'Property',
        value: 0,
        unitCode: 'DBM',
        observedAt: new Date().toISOString(),
        description: {
            type: 'Property',
            value: 'Placeholder',
            jsonSchema: {
                type: 'Property',
                value: { schemaType: 'string', title: 'Measure of rssi' },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'RSSI' },
        },
    },
    temperature: {
        type: 'Property',
        value: 1,
        unitCode: 'CEL',
        observedAt: new Date().toISOString(),
        description: {
            type: 'Property',
            value: 'Placeholder',
            jsonSchema: {
                type: 'Property',
                value: { schemaType: 'string', title: 'Measure of temperature' },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Temperature' },
        },
    },
    humidity: {
        type: 'Property',
        value: 50,
        unitCode: 'P1',
        observedAt: new Date().toISOString(),
        description: {
            type: 'Property',
            value: 'Placeholder',
            jsonSchema: {
                type: 'Property',
                value: { schemaType: 'string', title: 'Measure of humidity' },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Humidity' },
        },
    },
    batteryLevel: {
        type: 'Property',
        value: 100,
        unitCode: 'P1',
        observedAt: new Date().toISOString(),
        description: {
            type: 'Property',
            value: 'Placeholder',
            jsonSchema: {
                type: 'Property',
                value: { schemaType: 'string', title: 'Measure of Battery level' },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Battery level' },
        },
    },
    status: {
        type: 'Property',
        value: 'Placeholder',
        observedAt: new Date().toISOString(),
        description: {
            type: 'Property',
            value: 'Placeholder',
            jsonSchema: {
                type: 'Property',
                value: { schemaType: 'string', title: 'Status of device on/off' },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: true,
            jsonSchema: {
                type: 'Property',
                value: {
                    title: 'Toggle status',
                    schemaType: 'boolean',
                    oneOf: [
                        {
                            title: 'On',
                            const: true,
                        },
                        {
                            title: 'Off',
                            const: false,
                        },
                    ],
                },
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Device',
            title: 'Entity number limit',
            required: ['lorasnr', 'rssi', 'batteryLevel'],
            minimum: 1,
        },
    },
};
