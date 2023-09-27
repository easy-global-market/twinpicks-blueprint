import { StellioTemplate } from 'src/interfaces';

export const UltrasonicDistanceSensorTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Device:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Nom du capteur ultrasonique de distance',
            },
        },
    },
    distance: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Distance', canSelfInit: true },
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
            schemaType: 'UltrasonicDistanceSensor',
            title: 'Capteur ultrasonique de distance',
            required: ['name'],
            description:
                'Capteur ultrasonique de distance pour la détection de la distance ou du niveau des objets dans un environnement difficile.',
        },
    },
};
