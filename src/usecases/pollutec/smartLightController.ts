import { StellioTemplate } from 'src/interfaces';

export const SmartLightControllerTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:SmartLightController:Template',
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
    totalCurrent: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Puissance total', canSelfInit: true },
        },
    },
    powerFactor: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: "Facteur d'énergie", canSelfInit: true },
        },
    },
    activePower: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Energie active', canSelfInit: true },
        },
    },
    powerConsumption: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: "Consommation d'énergie", canSelfInit: true },
        },
    },
    voltage: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Voltage', canSelfInit: true },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'SmartLightController',
            title: 'Contrôleur de lumière',
            required: ['name'],
            description:
                "Contrôleur pour armoire d'éclairage permettant la surveillance et le contrôle des éclairages localement ou à distance.",
        },
    },
};
