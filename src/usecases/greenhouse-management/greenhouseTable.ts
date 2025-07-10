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
    soilTemperature: {
        type: 'Property',
        value: 20,
        unitCode: 'CEL',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Température du sol', canSelfInit: true },
        },
    },
    volumetricMoisture: {
        type: 'Property',
        value: 50,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Humidité volumétrique', canSelfInit: true },
        },
    },
    soilElectricalConductivity: {
        type: 'Property',
        value: 50,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Conductivité électrique du sol', canSelfInit: true },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: entityTypeTitle,
            minimum: 1,
            required: ['name', 'location'],
            description: `Représentation digitale d'une table sous serre`,
        },
    },
};

export default template;
