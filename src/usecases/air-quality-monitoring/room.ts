import { StellioTemplate } from 'src/interfaces';

export const RoomTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Room:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Nom de la pièce',
            },
        },
    },
    isContainedIn: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Building:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: 'Relationship to a Building',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    temperature: {
        type: 'Property',
        value: 0,
        unitCode: 'CEL',
        observedAt: new Date().toISOString(),
        description: {
            type: 'Property',
            value: 'Placeholder',
            jsonSchema: {
                type: 'Property',
                value: { schemaType: 'string', title: 'Description' },
            },
        },
        observedBy: {
            type: 'Relationship',
            object: 'urn:ngsi-ld:Device:Template',
            jsonSchema: {
                type: 'Property',
                value: {
                    schemaType: 'string',
                    format: 'uri',
                    title: 'Relationship to a Device',
                    minimum: 1,
                    maximum: 1,
                },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: 'Jeux de données de température',
                minItems: 1,
                items: {
                    schemaType: 'integer',
                    title: 'Température',
                    canSelfInit: true,
                },
            },
        },
    },
    temperatureB: {
        type: 'Property',
        value: 0,
        unitCode: 'CEL',
        observedAt: new Date().toISOString(),
        observedBy: {
            type: 'Relationship',
            object: 'urn:ngsi-ld:Device:Template',
            jsonSchema: {
                type: 'Property',
                value: {
                    schemaType: 'string',
                    format: 'uri',
                    title: 'Relationship to a Device',
                    minimum: 1,
                    maximum: 1,
                },
            },
        },
        jsonSchema: {
            type: 'Property',
            value:  {
                    schemaType: 'integer',
                    title: 'Température',
                    canSelfInit: true,
                },
        },
    },
    humidity: {
        type: 'Property',
        value: 1,
        unitCode: 'P1',
        observedAt: new Date().toISOString(),
        description: {
            type: 'Property',
            value: 'Placeholder',
            jsonSchema: {
                type: 'Property',
                value: { schemaType: 'string', title: 'Description' },
            },
        },
        observedBy: {
            type: 'Relationship',
            object: 'urn:ngsi-ld:Device:Template',
            jsonSchema: {
                type: 'Property',
                value: {
                    schemaType: 'string',
                    format: 'uri',
                    title: 'Relationship to a Device',
                    minimum: 1,
                    maximum: 1,
                },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: "Jeux de données d'humidité",
                minItems: 1,
                items: {
                    schemaType: 'integer',
                    title: 'Humidité',
                    canSelfInit: true,
                },
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Room',
            title: 'Pièce',
            minimum: 1,
            required: ['name', 'isContainedIn', 'temperature', 'humidity'],
            description: 'Jumeau numérique de la pièce au sein du bâtiment, et où se situe le capteur',
        },
    },
};
