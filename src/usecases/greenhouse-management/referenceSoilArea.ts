import { StellioTemplate } from 'src/interfaces';

export const entityType = 'ReferenceSoilArea';

const template: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Nom du sol de référence juste autour du capteur',
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
    soilTemperature: {
        type: 'Property',
        value: 20,
        unitCode: 'CEL',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Température du sol', canSelfInit: true },
        },
    },
    volumetricMoisture: {
        type: 'Property',
        value: 50,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Humidité volumétrique', canSelfInit: true },
        },
    },
    pressure: {
        type: 'Property',
        value: 50,
        unitCode: 'A97',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Pression', canSelfInit: true },
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
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'ReferenceSoilArea',
            title: 'Sol de référence pour le capteur',
            minimum: 1,
            required: ['name', 'location'],
            description: 'Représentation de la zone de sol à proximité du capteur dans une table.',
        },
    },
};

export default template;
