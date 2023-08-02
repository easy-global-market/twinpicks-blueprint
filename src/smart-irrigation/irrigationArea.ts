import { StellioTemplate } from 'interfaces';

export const IrrigationAreaTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:IrrigationArea:Template',
    type: 'Template',
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'IrrigationArea',
            title: 'Entity number limit',
            minimum: 1,
            maximum: 1,
            required: ['name', 'belongsTo', 'hasPart', 'location', 'hasActiveAnomaly'],
        },
    },
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom de IrrigationArea' },
        },
    },
    zoomLevel: {
        type: 'Property',
        value: 16,
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
                title: 'Relation vers un Field',
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
                title: 'Relation vers une ManagedZone',
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
                title: 'Relation vers une WeatherInformation',
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
