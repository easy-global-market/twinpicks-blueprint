import { StellioTemplate } from 'src/interfaces';

export const SmartLightControllerTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Device:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Nom du contrôleur de lumière intelligent',
            },
        },
    },

    switch1: {
        type: 'Property',
        value: 'off',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Interrupteur 1', canSelfInit: true },
        },
    },
    switch2: {
        type: 'Property',
        value: 'off',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Interrupteur 2', canSelfInit: true },
        },
    },
    switch3: {
        type: 'Property',
        value: 'off',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Interrupteur 3', canSelfInit: true },
        },
    },
    switch4: {
        type: 'Property',
        value: 'off',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Interrupteur 4', canSelfInit: true },
        },
    },
    switch5: {
        type: 'Property',
        value: 'off',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Interrupteur 5', canSelfInit: true },
        },
    },
    switch6: {
        type: 'Property',
        value: 'off',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Interrupteur 6', canSelfInit: true },
        },
    },
    switch7: {
        type: 'Property',
        value: 'off',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Interrupteur 7', canSelfInit: true },
        },
    },
    switch8: {
        type: 'Property',
        value: 'off',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Interrupteur 8', canSelfInit: true },
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
            schemaType: 'SmartLightController',
            title: 'Contrôleur de lumière intelligent',
            required: ['name'],
            description:
                'Contrôleur de lumière intelligent pour la surveillance et le contrôle des lumières localement ou à distance.',
        },
    },
};
