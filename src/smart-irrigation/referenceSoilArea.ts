import { StellioTemplate } from 'interfaces';

export const ReferenceSoilAreaTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:ReferenceSoilArea:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Soil Area name' },
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
                title: 'Where is located the ReferenceSoilArea ?',
            },
        },
    },
    volumetricMoisture: {
        type: 'Property',
        value: 0,
        unitCode: 'P1',
        observedAt: new Date().toISOString(),
        depth: {
            type: 'Property',
            value: 15,
            unitCode: 'CM',
            jsonSchema: {
                type: 'Property',
                value: {
                    schemaType: 'integer',
                    title: 'Profondeur de la mesure',
                },
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
                    title: 'Relation vers un Device',
                    minimum: 1,
                    maximum: 1,
                },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: 'Liste de jeux de données humidité',
                minItems: 1,
                items: {
                    schemaType: 'integer',
                    title: 'Valeur humidité',
                },
            },
        },
    },
    soilTemperature: {
        type: 'Property',
        value: 0,
        unitCode: 'CEL',
        observedAt: new Date().toISOString(),
        depth: {
            type: 'Property',
            value: 30,
            unitCode: 'CM',
            jsonSchema: {
                type: 'Property',
                value: {
                    schemaType: 'integer',
                    title: 'Profondeur de la mesure',
                },
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
                    title: 'Relation vers un Device',
                    minimum: 1,
                    maximum: 1,
                },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: 'Liste de jeux de données de température',
                minItems: 1,
                items: {
                    schemaType: 'integer',
                    title: 'Valeur de température',
                },
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'ReferenceSoilArea',
            title: 'Entity number limit',
            minimum: 1,
            required: ['name', 'location', 'soilTemperature', 'volumetricMoisture'],
        },
    },
};
