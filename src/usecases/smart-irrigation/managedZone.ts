import { StellioTemplate } from 'src/interfaces';

export const ManagedZoneTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:ManagedZone:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom de la Zone de gestion' },
        },
    },
    description: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Description de la Zone de gestion' },
        },
    },
    waterConsumption: {
        type: 'Property',
        value: 1,
        unitCode: 'L',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: "Consommation d'eau de la Managed Zone", canSelfInit: true },
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
            value: { schemaType: 'integer', title: 'Surface de la Zone de gestion' },
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
            value: { schemaType: 'object', title: 'Dessiner la Zone de gestion sur la carte' },
        },
    },
    hasActiveAnomay: {
        type: 'Property',
        value: false,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'boolean', title: 'Zone en anomalie' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'ManagedZone',
            title: 'Zone de gestion',
            minimum: 1,
            required: ['name', 'hasReferenceSoilArea', 'location', 'belongsTo'],
            description:
                "Représentation géographique la plus petite, généralement de la taille d'un bout de jardin, précisément délimitée par un polygone",
        },
    },
};
