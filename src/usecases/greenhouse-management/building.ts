import { StellioTemplate } from 'src/interfaces';
import { buildingCategories } from '../air-quality-monitoring/building';

export const entityType = 'Building';

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
                title: 'Nom du bâtiment',
            },
        },
    },
    description: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Description du bâtiment',
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
                title: 'Où se situe le bâtiment',
            },
        },
    },
    category: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                enum: buildingCategories,
                title: `Sélectionner une categorie`,
                friendlyAttributeName: 'Categorie',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Bâtiment',
            required: ['name', 'location', 'category'],
            minimum: 1,
            description: "Représentation numérique du bâtiment d'où proviennent les données",
        },
    },
};

export default template;
