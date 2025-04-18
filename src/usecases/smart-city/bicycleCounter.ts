import { StellioTemplate } from 'src/interfaces';

export const BicycleCounterTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:BicycleCounter:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom du compteur' },
        },
    },
    direction: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Direction' },
        },
    },
    location: {
        type: 'GeoProperty',
        value: {
            type: 'LineString',
            coordinates: [],
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: 'Dessiner et suivre la voie sur la carte',
                friendlyAttributeName: 'Géolocalisation',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'BicycleCounter',
            title: 'Compteur de vélos',
            required: ['name', 'direction', 'location'],
            description: 'Station de comptage de vélos',
            minimum: 1,
        },
    },
};
