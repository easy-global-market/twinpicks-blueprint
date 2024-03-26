import { StellioTemplate } from 'src/interfaces';

export const ControlNodeTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:ControlNode:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom du noeud de controle', friendlyAttributeName: 'Nom' },
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
                friendlyAttributeName: 'Géolocalisation',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'ControlNode',
            title: 'Noeud de controle',
            minimum: 0,
            required: ['name', 'observedState', 'requestedState', 'location'],
            description: "Jumeau numérique d'un noeud de controle, il peut servir à ouvrir/fermer une vanne",
        },
    },
};
