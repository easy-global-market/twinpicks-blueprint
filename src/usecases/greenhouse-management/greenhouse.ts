import { StellioTemplate } from 'src/interfaces';
import { entityType as greenhouseTableType } from './greenhouseTable';

const entityType = 'Greenhouse';
const entityTypeTitle = 'Serre';

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
    temperature: {
        type: 'Property',
        value: 20,
        unitCode: 'CEL',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Température', canSelfInit: true },
        },
    },
    humidity: {
        type: 'Property',
        value: 50,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Humidité', canSelfInit: true },
        },
    },
    pressure: {
        type: 'Property',
        value: 50,
        unitCode: 'PAL',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Pression', canSelfInit: true },
        },
    },
    hasGreenHouseTable: {
        type: 'Relationship',
        object: `urn:ngsi-ld:${greenhouseTableType}:Template`,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: `Sélectionner les tables faisant partie de cette ${entityType}`,
                friendlyAttributeName: 'Tables',
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
            description: `Représentation digitale d'une serre`,
        },
    },
};

export default template;
