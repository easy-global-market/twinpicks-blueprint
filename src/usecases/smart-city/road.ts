import { StellioTemplate } from 'src/interfaces';

export const RoadTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Road:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom de la voie', friendlyAttributeName: 'Nom de voie' },
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
            schemaType: 'Road',
            title: 'Route',
            required: ['name', 'location'],
            description: 'Représentation graphique de la voie sur une carte',
            minimum: 1,
        },
    },
};
