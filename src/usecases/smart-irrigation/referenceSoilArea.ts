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
    volumetricMoistureFieldCapacity: {
        type: 'Property',
        value: 0.27,
        unitCode: 'H60',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'float',
                title: "vM_FC",
                friendlyAttributeName: "vM_FC : Valeur d'humidité volumetrique à capacité au champ",
            },
        },
    },
    volumetricMoisturePermanentWiltingPoint: {
        type: 'Property',
        value: 0.12,
        unitCode: 'H60',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'float',
                title: "vM_PWP",
                friendlyAttributeName: "vM_PWP : Valeur d'humidité volumetrique au point de fletrissement",
            },
        },
    },
    volumetricMoistureSaturation: {
        type: 'Property',
        value: 0.37,
        unitCode: 'H60',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'float',
                title: "vM_SAT",
                friendlyAttributeName: "vM_SAT : Valeur d'humidité volumetrique à saturation",
            },
        },
    },
    cropCoefficient: {
        type: 'Property',
        value: 1,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: "Kc",
                friendlyAttributeName: "Kc : Coefficient de culture",
            },
        },
    },
    runoffCurveNumber: {
        type: 'Property',
        value: 75,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: "CN2",
                friendlyAttributeName: "CN2 : Coefficient de ruissellement",
                canSelfInit: true,
            },
        },
    },
    soilDepth: {
        type: 'Property',
        value: 350,
        unitCode: 'MMT',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: "Z",
                friendlyAttributeName: "Z : Profondeur du sol",
            },
        },
    },
    swcon: {
        type: 'Property',
        value: 0.5,
        unitCode: 'H93',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'float',
                title: "SWCON",
                friendlyAttributeName: "SWCON : Quantité d'eau perdue par percolation en 1 jour par rapport à la quantité d'eau qui excède la capacité au champs",
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
