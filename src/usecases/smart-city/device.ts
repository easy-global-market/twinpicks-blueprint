import { StellioTemplate } from 'src/interfaces';

export const DeviceTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Device:Template',
    type: 'Template',
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Device',
            title: 'Objet communicant',
            description: 'Récupère et communique les données',
            minimum: 1,
            canEntityBeCreated: false,
        },
    },
};
