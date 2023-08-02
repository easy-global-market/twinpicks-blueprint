import { StellioTemplate } from 'interfaces';

export const DeviceTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Device:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom du Device' },
        },
    },
    description: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Description du Device' },
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
                value: { schemaType: 'string', title: 'Mesure de loraSNR' },
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
                value: { schemaType: 'integer', title: 'Mesure de rssi' },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'RSSI' },
        },
    },
    batteryVoltage: {
        type: 'Property',
        value: 100,
        unitCode: 'V',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Niveau de batterie' },
        },
    },
    internalTemperature: {
        type: 'Property',
        value: 1,
        unitCode: 'CEL',
        observedAt: new Date().toISOString(),
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Temperature interne' },
        },
    },
    internalHumidity: {
        type: 'Property',
        value: 50,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Humidité interne' },
        },
    },
    zoneActivation: {
        type: 'Property',
        value: 1,
        unitCode: 'MIN',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: "Liste de zones d'activation",
                minItems: 1,
                items: {
                    schemaType: 'integer',
                    title: 'Temps/durée (en minutes)',
                },
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Device',
            title: 'Entity number limit',
            required: ['name', 'description', 'lorasnr', 'rssi', 'batteryVoltage'],
            minimum: 1,
        },
    },
};
