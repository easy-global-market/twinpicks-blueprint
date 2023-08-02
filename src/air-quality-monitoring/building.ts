import { StellioTemplate } from 'interfaces';

export const BuildingTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Building:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Give a name to this building',
            },
        },
    },
    location: {
        type: 'GeoProperty',
        value: {
            type: 'Point',
            coordinates: [],
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: 'Where is the building located',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Building',
            title: 'Entity number limit',
            required: ['name', 'location'],
            minimum: 1,
        },
    },
};
