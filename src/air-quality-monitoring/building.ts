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
                title: 'Nom du bâtiment',
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
                title: 'Où se situe le bâtiment',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Building',
            title: 'Bâtiment',
            required: ['name', 'location'],
            minimum: 1,
        },
    },
};
