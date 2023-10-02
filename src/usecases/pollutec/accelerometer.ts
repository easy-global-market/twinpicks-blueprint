import { StellioTemplate } from 'src/interfaces';

export const AccelerometerTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Accelerometer:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: "Nom de l'accéléromètre",
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
    angleX: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Angle X', canSelfInit: true },
        },
    },
    angleY: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Angle Y', canSelfInit: true },
        },
    },
    angleZ: {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Angle Z', canSelfInit: true },
        },
    },
    thresholdX: {
        type: 'Property',
        value: 'normal',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Seuil X', canSelfInit: true },
        },
    },
    thresholdY: {
        type: 'Property',
        value: 'normal',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Seuil Y', canSelfInit: true },
        },
    },
    thresholdZ: {
        type: 'Property',
        value: 'normal',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Seuil Z', canSelfInit: true },
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
            value: { schemaType: 'string', title: 'Version du materiel' },
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
            value: { schemaType: 'string', title: 'Etat', canSelfInit: true },
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
            schemaType: 'Accelerometer',
            title: 'Accéléromètre',
            required: ['name'],
            minimum: 1,
            description:
                "Capteur d'inclinaison pour la mesure d'angle et le mouvement d'actifs basé sur un accéléromètre 3 axes.",
        },
    },
};
