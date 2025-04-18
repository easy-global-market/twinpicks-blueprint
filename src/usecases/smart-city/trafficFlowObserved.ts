import { StellioTemplate } from 'src/interfaces';

export const TrafficFlowObservedTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:TrafficFlowObserved:Template',
    type: 'Template',
    title: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    temporalResolution: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Résolution temporelle' },
        },
    },
    refRoad: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Road:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: 'Route dans laquelle le trafic est observé',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    location: {
        type: 'GeoProperty',
        value: {
            type: 'LineString',
            coordinates: [],
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: 'Dessiner et suivre la voie sur la carte',
                friendlyAttributeName: 'Géolocalisation',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'TrafficFlowObserved',
            title: 'Traffic automobile observé',
            required: ['title', 'temporalResolution', 'refRoad', 'location'],
            description: 'Station de mesure du trafic automobile',
            minimum: 1,
        },
    },
};
