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
    volumetricMoistureFieldCapacity: {
        type: 'Property',
        value: 0.27,
        unitCode: 'H60',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: "vM_FC : Valeur d'humidité volumetrique à capacité au champ",
                friendlyAttributeName: 'Humidité volumetrique à capacité au champ',
                canSelfInit: true,
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
                schemaType: 'integer',
                title: "vM_PWP : Valeur d'humidité volumetrique au point de fletrissement",
                friendlyAttributeName: 'Humidité volumetrique au point de fletrissement',
                canSelfInit: true,
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
                schemaType: 'integer',
                title: "vM_SAT : Valeur d'humidité volumetrique à saturation",
                friendlyAttributeName: 'Humidité volumetrique à saturation',
                canSelfInit: true,
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
                title: 'Kc : Coefficient de culture',
                friendlyAttributeName: 'Coefficient de culture',
                canSelfInit: true,
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
                title: 'CN2 : Coefficient de ruissellement',
                friendlyAttributeName: 'Coefficient de ruissellement',
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
                title: 'Z : Profondeur du sol',
                friendlyAttributeName: 'Profondeur du sol',
                canSelfInit: true,
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
                schemaType: 'integer',
                title: "SWCON : Quantité d'eau perdue par percolation en 1 jour par rapport à la quantité d'eau qui excède la capacité au champs",
                friendlyAttributeName: 'SWCON',
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
            required: [
                'name',
                'location',
                'volumetricMoistureFieldCapacity',
                'volumetricMoisturePermanentWiltingPoint',
                'volumetricMoistureSaturation',
                'cropCoefficient',
                'runoffCurveNumber',
                'soilDepth',
                'swcon',
            ],
            description:
                'Représentation de la zone de sol à proximité du capteur. Sert de référence pour les données des zones de gestion alentours',
        },
    },
};
