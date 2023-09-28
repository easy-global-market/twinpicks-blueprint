import { StellioTemplate } from 'src/interfaces';

export const ModbusControllerTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:ModbusController:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Nom du contrôleur Modbus',
            },
        },
    },
    soilTemperature: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Température du sol', canSelfInit: true },
        },
    },
    waterContent: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Teneur en eau', canSelfInit: true },
        },
    },
    soilType: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Type de sol', canSelfInit: true },
        },
    },
    pulseCounter: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Compteur d’impulsions', canSelfInit: true },
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
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Version du matériel' },
        },
    },
    softwareVersion: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Version du logiciel' },
        },
    },
    state: {
        type: 'Property',
        value: 'off',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'État', canSelfInit: true },
        },
    },
    classType: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Type de classe' },
        },
    },
    serialNumber: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Numéro de série' },
        },
    },
    analog1: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Analogique 1' },
        },
    },
    analog2: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Analogique 2' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'ModbusController',
            title: 'Contrôleur Modbus',
            required: ['name'],
            description:
                "Contrôleur multi-interface pour l'acquisition de données de divers capteurs tels que le capteur d'humidité et de température du sol.",
        },
    },
};
