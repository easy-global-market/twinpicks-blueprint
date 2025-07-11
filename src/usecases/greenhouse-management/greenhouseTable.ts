import { StellioTemplate } from 'src/interfaces';

export const entityType = 'GreenhouseTable';
const entityTypeTitle = 'Table sous serre';

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
                title: `Nom de la ${entityTypeTitle}`,
                friendlyAttributeName: 'Nom',
            },
        },
    },
    isContainedIn: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Building:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: 'Bâtiment auquel appartient la table',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    hasReferenceSoilArea: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:ReferenceSoilArea:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: 'Sélectionner le sol de référence autour du capteur',
                friendlyAttributeName: 'Zone de sol de référence',
                minimum: 1,
                maximum: 1,
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: entityTypeTitle,
            minimum: 1,
            required: ['name', 'location', 'isContainedIn'],
            description: `Représentation numérique d'une table sous serre`,
        },
    },
};

export default template;
