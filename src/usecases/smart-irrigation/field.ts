import { StellioTemplate } from 'src/interfaces';

export const FieldTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Field:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: "Nom de la zone d'opération", friendlyAttributeName: 'Nom' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Field',
            title: "Zone d'opération",
            minimum: 1,
            required: ['name'],
            description:
                "Une zone de plus haut niveau dans la gestion de l'irrigation. Peut-être typiquement le niveau de la ville, d'un service ou d'un quartier. La hiérarchie des zones est : Zone d'opération > Zone d'irrigation > Zone de gestion",
        },
    },
};
