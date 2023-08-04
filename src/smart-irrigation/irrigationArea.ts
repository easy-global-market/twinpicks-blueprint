import { StellioTemplate } from 'interfaces';

export const IrrigationAreaTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:IrrigationArea:Template',
    type: 'Template',
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'IrrigationArea',
            title: "Zone d'irrigation",
            minimum: 1,
            required: ['name', 'belongsTo', 'hasPart', 'location', 'hasActiveAnomaly', 'hasWeatherForecasted'],
            description:
                'Représentation géographique de taille intermédiaire qui regroupe en générale plusieurs petites zones controllées (ou zones en gestion)',
        },
    },
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: "Nom de la zone d'irrigation" },
        },
    },
    zoomLevel: {
        type: 'Property',
        value: 18,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: "Niveau de zoom sur la zone d'irrigation depuis la carte" },
        },
    },
    belongsTo: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Field:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Cette zone d'irrigation appartient à quel champ d'opération ?",
                minimum: 1,
                maximum: 1,
            },
        },
    },
    hasPart: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:ManagedZone:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Cette zone d'irrigation comprend quelle(s) zone(s) de gestion ?",
                minimum: 1,
            },
        },
    },
    hasWeatherForecasted: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:WeatherInformation:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Quelle est la Météo de référence pour cette zone d'irrigation ?",
                minimum: 1,
                maximum: 1,
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
            value: { schemaType: 'object', title: 'Où se situe la zone dirrigation ?' },
        },
    },
    hasActiveAnomaly: {
        type: 'Property',
        value: false,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'boolean', title: 'Zone en anomalie' },
        },
    },
};
