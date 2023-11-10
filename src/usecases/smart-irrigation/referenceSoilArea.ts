import { StellioTemplate } from 'src/interfaces';

export const ReferenceSoilAreaTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:ReferenceSoilArea:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Nom du sol de référence où se situe le capteur',
                friendlyAttributeName: 'Nom',
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
                title: 'Où se situe le capteur et sol de référence ?',
                friendlyAttributeName: 'Géolocalisation',
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
                    canSelfInit: true,
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
                    title: "Le capteur de données pour l'humidité",
                    minimum: 1,
                    maximum: 1,
                },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: "Sources de données d'humidité",
                friendlyAttributeName: "Sources de données d'humidité",
                minItems: 1,
                items: {
                    schemaType: 'integer',
                    title: 'Valeur humidité',
                    canSelfInit: true,
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
                    canSelfInit: true,
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
                    title: 'Le capteur de données pour la température',
                    minimum: 1,
                    maximum: 1,
                },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: 'Sources de données de température',
                friendlyAttributeName: 'Sources de données de température',
                minItems: 1,
                items: {
                    schemaType: 'integer',
                    title: 'Valeur de température',
                    canSelfInit: true,
                },
            },
        },
    },
    soilProperties: {
        type: 'Property',
        value: {
            "vM_FC": 0.27,
            "vM_PWP": 0.12,
            "vM_SAT": 0.37,
            "Z": 350,
            "SWCON": 0.5
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: 'Propriétés du sol',
                canSelfInit: true,
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'ReferenceSoilArea',
            title: 'Sol de référence pour le capteur',
            minimum: 1,
            required: ['name', 'location', 'soilTemperature', 'volumetricMoisture'],
            description:
                'Représentation de la zone de sol à proximité du capteur. Sert de référence pour les données des zones de gestion alentours',
        },
    },
};
