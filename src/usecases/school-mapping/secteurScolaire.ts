import { StellioTemplate } from 'src/interfaces';

export const SecteurScolaireTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:SecteurScolaire:Template',
    type: 'Template',
    title: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Nom du secteur',
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
                title: "Où se situe le secteur scolaire",
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'SecteurScolaire',
            title: 'Secteur scolaire',
            minimum: 1,
            required: ['title', 'location'],
            description: 'Jumeau numérique du secteur scolaire',
        },
    },
};
