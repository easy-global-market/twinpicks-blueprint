import { StellioTemplate } from 'interfaces';

export const WeatherInformationTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:WeatherInformation:Template',
    type: 'Template',
    precipitation: {
        type: 'Property',
        value: 1,
        unitCode: 'MM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: 'Liste des sommes journalière de précipitation en millimètre',
                minItems: 1,
                items: {
                    schemaType: 'integer',
                    title: 'Somme des précipitations en millimètre',
                },
            },
        },
    },
    temperature: {
        type: 'Property',
        value: 10,
        unitCode: 'CEL',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: 'Liste des relevés journaliers de température',
                minItems: 1,
                items: {
                    schemaType: 'integer',
                    title: 'Valeur de la température',
                },
            },
        },
    },
    sensibleWeatherId: {
        type: 'Property',
        value: 61459,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: 'Liste des ids',
                minItems: 1,
                items: {
                    schemaType: 'integer',
                    title: 'Id du temps (utilisé pour les icônes)',
                },
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'WeatherInformation',
            title: 'Entity number limit',
            minimum: 1,
            required: ['temperature', 'precipitation'],
        },
    },
};
