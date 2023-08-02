import { StellioTemplate } from 'interfaces';

export const RoomTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Room:Template',
    type: 'Template',
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
                title: 'List of temperature datasets',
                minItems: 1,
                items: {
                    schemaType: 'integer',
                    title: 'Temperature value',
                },
            },
        },
    },
    humidity: {
        type: 'Property',
        value: 50,
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
                title: 'List of humidity datasets',
                minItems: 1,
                items: {
                    schemaType: 'integer',
                    title: 'Humidity value',
                },
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Room',
            title: 'Entity number limit',
            minimum: 1,
            required: ['isContainedIn', 'temperature', 'humidity'],
        },
    },
};
