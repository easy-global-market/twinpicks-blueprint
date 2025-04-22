import { StellioTemplate } from 'src/interfaces';

export const AirQualityObservedTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:AirQualityObserved:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom de la station' },
        },
    },
    title: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom complet de la station' },
        },
    },
    temporalResolution: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Résolution temporelle' },
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
            schemaType: 'AirQualityObserved',
            title: "Qualité de l'air",
            required: ['name', 'title', 'temporalResolution', 'location'],
            description: "Station de mesure de la qualité de l'air",
            minimum: 1,
        },
    },
};
