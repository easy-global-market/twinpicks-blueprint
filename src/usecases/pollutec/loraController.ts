import { StellioTemplate } from 'src/interfaces';

export const LoRaControllerTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Device:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Nom du contrôleur LoRa',
            },
        },
    },
    valve1: {
        type: 'Property',
        value: 'open',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'État de la vanne 1', canSelfInit: true },
        },
    },
    valve1Pulse: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Impulsion de la vanne 1', canSelfInit: true },
        },
    },
    valve2: {
        type: 'Property',
        value: 'open',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'État de la vanne 2', canSelfInit: true },
        },
    },
    valve2Pulse: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Impulsion de la vanne 2', canSelfInit: true },
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
        value: '',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Type de classe', canSelfInit: false },
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
            schemaType: 'LoRaController',
            title: 'Contrôleur LoRa',
            required: ['name'],
            minimum: 1,
            description: 'Contrôleur LoRa dédié à la commande des électro-aimants de verrouillage DC de la vanne',
        },
    },
};
