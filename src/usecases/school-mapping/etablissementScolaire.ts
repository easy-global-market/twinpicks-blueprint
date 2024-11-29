import { StellioTemplate } from 'src/interfaces';

export const EtablissementScolaireTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:EtablissementScolaire:Template',
    type: 'Template',
    appellation_officielle: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: "Appellation officielle",
            },
        },
    },
    nature_uai: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: "Nature",
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
                title: "Où se situe l'établissement scolaire",
            },
        },
    },
    est_dans_secteur: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:EtablissementScolaire:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: "Secteur scolaire auquel appartient l'établissement",
                minimum: 1,
                maximum: 1,
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'EtablissementScolaire',
            title: 'Établissement scolaire',
            required: ['appellation_officielle', 'nature_uai', 'location'],
            minimum: 1,
            description: "Jumeau numérique de l'établissement scolaire d'où proviennent les données",
        },
    },
};
