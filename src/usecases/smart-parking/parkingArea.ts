import { StellioTemplate } from 'src/interfaces';

const entityType = 'ParkingArea';
const entityTypeTitle = 'Parking';

const template: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: `Le nom du ${entityTypeTitle}`, friendlyAttributeName: 'Name' },
        },
    },
    location: {
        type: 'GeoProperty',
        value: {
            type: 'Polygon',
            coordinates: [],
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: `Où se situe le ${entityTypeTitle}?`,
                friendlyAttributeName: 'Location',
            },
        },
    },
    hasParkingSpace: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:ParkingSpace:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: `Attribuer les places contenues dans ce ${entityTypeTitle}`,
                friendlyAttributeName: 'Places de parking',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: entityTypeTitle,
            minimum: 1,
            required: ['name', 'location', 'hasParkingSpace'],
            description: `Le parking qui contient les places`,
        },
    },
};

export default template;
