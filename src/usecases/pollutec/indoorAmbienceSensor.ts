import { StellioTemplate } from 'src/interfaces';

export const IndoorAmbienceSensorTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:IndoorAmbienceSensor:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: "Nom du capteur de surveillance d'ambiance intérieure",
            },
        },
    },
    battery: {
        type: 'Property',
        value: 100,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Niveau de batterie', canSelfInit: true },
        },
    },
    co2: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Niveau de CO2', canSelfInit: true },
        },
    },
    humidity: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Humidité', canSelfInit: true },
        },
    },
    lightLevel: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Niveau de lumière', canSelfInit: true },
        },
    },
    pressure: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Pression', canSelfInit: true },
        },
    },
    temperature: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Température', canSelfInit: true },
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
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'IndoorAmbienceSensor',
            title: "Capteur de Surveillance d'Ambiance Intérieure",
            required: ['name'],
            minimum: 1,
            description:
                "Capteur de surveillance d'ambiance intérieure pour la mesure de la température, de l'humidité, de la lumière, de la concentration de CO2 et de la pression barométrique.",
        },
    },
};
