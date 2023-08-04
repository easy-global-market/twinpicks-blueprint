import { StellioTemplate } from 'interfaces';

export const FieldTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:Field:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: "Nom du champ d'opération" },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'Field',
            title: "Champ d'opération",
            minimum: 1,
            required: ['name'],
            description:
                "Représentation très haut niveau de la zone d'opération (peut regrouper plusieurs grandes zones d'irrigation)",
        },
    },
};
