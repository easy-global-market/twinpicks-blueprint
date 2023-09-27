import { StellioTemplate } from 'src/interfaces';

export const AIVisionSensorTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Device:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Nom du capteur de vision AI',
            },
        },
    },
    peopleCountAll: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Nombre total de personnes', canSelfInit: false },
        },
    },
    peopleCountMax: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Nombre maximal de personnes', canSelfInit: false },
        },
    },
    regionCount: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Nombre de régions', canSelfInit: false },
        },
    },
    protocolVersion: {
        type: 'Property',
        value: 1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Version du protocole', canSelfInit: true },
        },
    },
    hardwareVersion: {
        type: 'Property',
        value: '',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Version du matériel', canSelfInit: false },
        },
    },
    softwareVersion: {
        type: 'Property',
        value: '',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Version du logiciel', canSelfInit: false },
        },
    },
    serialNumber: {
        type: 'Property',
        value: '',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Numéro de série', canSelfInit: false },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'AIVisionSensor',
            title: 'Capteur de Vision AI',
            required: ['name'],
            minimum: 1,
            description: "Capteur de vision IA pour la surveillance de l'occupation et de l'utilisation de l'espace.",
        },
    },
};
