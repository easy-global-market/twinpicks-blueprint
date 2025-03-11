import { StellioTemplate } from 'src/interfaces';

export const AirQualityObservedTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:AirQualityObserved:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: "Nom de l'entité",
            },
        },
    },
    description: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: "Description de l'entité",
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
                title: 'Où se situe les mesures',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'AirQualityObserved',
            title: "Qualité de l'air extérieur",
            minimum: 0,
            required: ['name', 'location'],
            description: "Jumeau numérique de l'observation de la qualité de l'air extérieur",
        },
    },
};