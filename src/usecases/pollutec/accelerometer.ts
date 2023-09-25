import { StellioTemplate } from 'src/interfaces';

export const AccelerometerTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Device:Template',
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
        value: 1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: '', canSelfInit: true },
        },
    },
    angleY: {
        type: 'Property',
        value: 1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: '', canSelfInit: true },
        },
    },
    angleZ: {
        type: 'Property',
        value: 1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: '', canSelfInit: true },
        },
    },
    thresholdX: {
        type: 'Property',
        value: 'init',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: '', canSelfInit: true },
        },
    },
    thresholdY: {
        type: 'Property',
        value: 'init',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: '', canSelfInit: true },
        },
    },
    thresholdZ: {
        type: 'Property',
        value: 'init',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: '', canSelfInit: true },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Accelerometer',
            title: 'Accéléromètre',
            required: ['name'],
            minimum: 1,
            description: "Jumeau numérique de l'accélèromètre (EM310-TILT)",
        },
    },
};
