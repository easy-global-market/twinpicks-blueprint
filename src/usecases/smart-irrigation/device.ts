import { StellioTemplate } from 'src/interfaces';

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
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Lora SNR', canSelfInit: true },
        },
    },
    rssi: {
        type: 'Property',
        value: 0,
        unitCode: 'DBM',
        observedAt: new Date().toISOString(),
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'RSSI', canSelfInit: true },
        },
    },
    batteryVoltage: {
        type: 'Property',
        value: 100,
        unitCode: 'V',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Niveau de batterie', canSelfInit: true },
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
                    canSelfInit: true,
                },
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Device',
            title: 'Capteur ou Espion',
            required: ['name', 'description'],
            minimum: 1,
            description:
                "Jumeau numérique du capteur qui récupère les données d'humidité. Ou l'objet espion qui observe l'état (ouvert/fermé) des vannes",
        },
    },
};
