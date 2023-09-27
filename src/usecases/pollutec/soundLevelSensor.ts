import { StellioTemplate } from 'src/interfaces';

export const SoundLevelSensorTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Device:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Nom du capteur de niveau sonore',
            },
        },
    },
    battery: {
        type: 'Property',
        value: 100,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Niveau de batterie', canSelfInit: true },
        },
    },
    la: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'La', canSelfInit: true },
        },
    },
    laeq: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Laeq', canSelfInit: true },
        },
    },
    lamax: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Lamax', canSelfInit: true },
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
            schemaType: 'SoundLevelSensor',
            title: 'Capteur de niveau sonore',
            required: ['name'],
            description: 'Capteur de niveau sonore pour l’acquisition d’une large gamme de niveaux de bruit.',
        },
    },
};
