import { StellioTemplate } from 'src/interfaces';

export const WeatherInformationTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:WeatherInformation:Template',
    type: 'Template',
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'WeatherInformation',
            title: 'Information Météo',
            description: "Rassemble les informations météo d'un champ d'opération",
            minimum: 1,
            canEntityBeCreated: false,
        },
    },
};
