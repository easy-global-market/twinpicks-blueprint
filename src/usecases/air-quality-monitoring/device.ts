import { StellioTemplate } from 'src/interfaces';

export const DeviceTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Device:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Nom du capteur',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Device',
            title: 'Capteur',
            required: ['name'],
            minimum: 1,
            description: "Jumeau numérique de l'objet physique, ou capteur, qui récupère des données",
        },
    },
};