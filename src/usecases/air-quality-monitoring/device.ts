import { StellioTemplate } from 'src/interfaces';

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
                title: 'Nom du capteur',
            },
        },
    },
    loraSNR: {
        type: 'Property',
        value: 1,
        unitCode: '2N',
        observedAt: new Date().toISOString(),
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Lora SNR', canSelfInit: true },
        },
    },
    rssi: {
        type: 'Property',
        value: 1,
        unitCode: 'DBM',
        observedAt: new Date().toISOString(),
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'RSSI', canSelfInit: true },
        },
    },
    temperature: {
        type: 'Property',
        value: 1,
        unitCode: 'CEL',
        observedAt: new Date().toISOString(),
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Temperature', canSelfInit: true },
        },
    },
    humidity: {
        type: 'Property',
        value: 50,
        unitCode: 'P1',
        observedAt: new Date().toISOString(),
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Humidité', canSelfInit: true },
        },
    },
    batteryLevel: {
        type: 'Property',
        value: 1,
        unitCode: 'P1',
        observedAt: new Date().toISOString(),
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Niveau de batterie', canSelfInit: true },
        },
    },
    status: {
        type: 'Property',
        value: true,
        jsonSchema: {
            type: 'Property',
            value: {
                title: 'Statut',
                schemaType: 'boolean',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Device',
            title: 'Capteur',
            required: ['name'],
            minimum: 1,
            description: "Jumeau numérique de l'objet physique, ou capteur, qui récupère des données",
        },
    },
};
