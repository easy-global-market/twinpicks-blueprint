import { StellioTemplate } from 'src/interfaces';

export const ManagedZoneTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:ManagedZone:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom de la Zone de gestion', friendlyAttributeName: 'Nom' },
        },
    },
    description: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Description de la Zone de gestion',
                friendlyAttributeName: 'Description',
            },
        },
    },
    waterConsumption: {
        type: 'Property',
        value: 1,
        unitCode: 'L',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: "Consommation d'eau de la Managed Zone",
                friendlyAttributeName: "Consommation d'eau",
                canSelfInit: true,
            },
        },
    },
    belongsTo: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:IrrigationArea:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Zone d'irrigation à laquelle appartient la zone de gestion",
                friendlyAttributeName: 'Appartient à',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    controlledBy: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:ControlNode:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: 'Noeud de controle de la Zone de gestion',
                friendlyAttributeName: 'Controllée par',
                minimum: 0,
                maximum: 1,
            },
        },
    },
    surface: {
        type: 'Property',
        value: 1,
        unitCode: 'MTK',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Surface de la zone',
                title: 'Surface de la Zone de gestion',
            },
        },
    },
    hasReferenceSoilArea: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:ReferenceSoilArea:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: 'Capteur et sol de référence pour la zone de gestion',
                friendlyAttributeName: 'Zone de sol de référence',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    location: {
        type: 'GeoProperty',
        value: {
            type: 'Polygon',
            coordinates: [],
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: 'Dessiner la Zone de gestion sur la carte',
                friendlyAttributeName: 'Géolocalisation',
            },
        },
    },
    criticalThreshold: {
        type: 'Property',
        value: 0.6,
        unitCode: 'H93',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: "Seuil critique : proportion de quantité d'eau dans le sol au dessous de laquelle on ne veut surtout pas descendre",
                friendlyAttributeName: "Seuil critique",
            },
        },
    },
    saturationThreshold: {
        type: 'Property',
        value: 1.0,
        unitCode: 'H93',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: "Seuil de saturation : proportion de quantité d'eau dans le sol à ne pas dépasser",
                friendlyAttributeName: "Seuil de saturation",
            },
        },
    },
    comfortThreshold: {
        type: 'Property',
        value: 0.8,
        unitCode: 'H93',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: "Seuil de confort : proportion de quantité d'eau dans le sol au dessous de laquelle on essaie de ne pas descendre",
                friendlyAttributeName: "Seuil de confort",
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'ManagedZone',
            title: 'Zone de gestion',
            minimum: 1,
            required: ['name', 'hasReferenceSoilArea', 'location', 'belongsTo', 'criticalThreshold', 'saturationThreshold', 'comfortThreshold'],
            description:
                "Représentation géographique la plus petite, généralement de la taille d'un bout de jardin, précisément délimitée par un polygone",
        },
    },
};
