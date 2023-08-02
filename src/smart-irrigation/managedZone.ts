import { StellioTemplate } from 'interfaces';

export const ManagedZoneTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:ManagedZone:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom de la Managed Zone' },
        },
    },
    description: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Description de la Managed Zone' },
        },
    },
    waterConsumption: {
        type: 'Property',
        value: 1,
        unitCode: 'L',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: "Consommation d'eau de la Managed Zone" },
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
                title: 'Relation vers une IrrigationArea',
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
                title: 'Relation vers un noeud de controle',
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
            value: { schemaType: 'integer', title: 'Surface de la Managed Zone' },
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
                title: 'Relation vers une ReferenceSoilArea',
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
            value: { schemaType: 'object', title: 'Dessiner la ManagedZone sur la carte' },
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
            title: 'Entity number limit',
            minimum: 1,
            required: ['name', 'hasReferenceSoilArea', 'location'],
        },
    },
};
