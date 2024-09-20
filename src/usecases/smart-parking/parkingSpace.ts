import { StellioTemplate } from 'src/interfaces';

const entityType = 'ParkingSpace';
const entityTypeTitle = 'Place de parking';

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
                title: `Nom de la ${entityTypeTitle} (ou autre identifiant)`,
                friendlyAttributeName: 'Name',
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
                title: `Pointer le centre de la ${entityTypeTitle}`,
                friendlyAttributeName: 'Location',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: entityTypeTitle,
            minimum: 1,
            required: ['name', 'location'],
            description: `Une place de parking`,
        },
    },
};

export default template;
