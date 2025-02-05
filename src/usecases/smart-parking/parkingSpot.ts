import { StellioTemplate } from 'src/interfaces';

const entityType = 'ParkingSpot';
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
                title: `Nom de la ${entityTypeTitle}`,
                friendlyAttributeName: 'Nom',
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
                friendlyAttributeName: 'Localisation',
            },
        },
    },
    operatingRestrictions: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                enum: [
                    'Carpool Only',
                    'Commercial Vehicle Only',
                    'Free Parking',
                    'Bus Only',
                    'Bus Stop',
                    'Disabled Person Permit Only',
                    'Electric Vehicle Only',
                    'Government Vehicle Only',
                    'Loading Zone',
                    'Loading Zone Commercial',
                    'Media',
                    'Residential Permit Only',
                    'Snow Clearing Zone',
                    'Street Cleaning',
                    'Parking Time Limit',
                    'Taxi Only',
                    'Valet Only',
                    'No Parking',
                    'No Waiting',
                    'Temporary Parking',
                ],
                title: `Restrictions opérationnelles`,
                friendlyAttributeName: 'Restrictions opérationnelles',
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
            description: `Jumeau numérique d'une place de parking`,
        },
    },
};

export default template;
