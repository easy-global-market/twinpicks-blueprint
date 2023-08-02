import { StellioTemplate } from 'interfaces';

export const ControlNodeTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:ControlNode:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom du noeud de controle' },
        },
    },
    observedState: {
        type: 'Property',
        value: 1.0,
        unitCode: 'E50',
        observedBy: {
            type: 'Relationship',
            object: 'urn:ngsi-ld:Device:Template',
            jsonSchema: {
                type: 'Property',
                value: {
                    schemaType: 'string',
                    format: 'uri',
                    title: 'Est observé par un Device (ou Spy)',
                    minimum: 1,
                    maximum: 1,
                },
            },
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: 'Etat observé',
                maxItems: 1,
                items: {
                    schemaType: 'integer',
                    title: 'Valeur de etat observé',
                },
            },
        },
    },
    requestedState: {
        type: 'Property',
        value: 1,
        unitCode: 'E50',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Etat demandé' },
        },
    },
    valveObservedStatus: {
        type: 'Property',
        value: 'closed',
        unitCode: 'E50',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Etat de la vanne observé', enum: ['open', 'closed'] },
        },
    },
    valveRequestedStatus: {
        type: 'Property',
        value: 'closed',
        unitCode: 'E50',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Etat de la vanne demandé', enum: ['open', 'closed'] },
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
                title: 'Où se trouve la vanne de controle ?',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'ControlNode',
            title: 'Entity number limit',
            minimum: 0,
            required: ['name', 'observedState', 'requestedState', 'location'],
        },
    },
};
