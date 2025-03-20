import { StellioTemplate } from 'src/interfaces';

const entityType = 'Product';
const entityTypeTitle = 'Product';

const template: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: `Name of the ${entityTypeTitle}`, friendlyAttributeName: 'Name' },
        },
    },
    typeOfProduct: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                enum: ['Main Product', 'Residue or by-product'],
                title: `What is the type of the product?`,
                friendlyAttributeName: 'Type of product',
            },
        },
    },
    imageSrc: {
        type: 'Property',
        value: 'Image',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: `Path to the image`, friendlyAttributeName: 'Image' },
        },
    },
    mass: {
        type: 'Property',
        value: 1,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: `Amount of matter`,
                friendlyAttributeName: 'Amount of matter',
                canSetUnitCode: true,
            },
        },
    },
    isStoredIn: {
        type: 'Relationship',
        object: 'List:of:template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: `What's the last known storage location of this ${entityTypeTitle}?`,
                friendlyAttributeName: 'Last known storage location',
                listOfAllowedRelationships: ['urn:ngsi-ld:Storage:Template', 'urn:ngsi-ld:ProductionSystem:Template'],
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: entityTypeTitle,
            minimum: 1,
            required: ['name', 'typeOfProduct'],
            description: `This is a product. It can be anything, a raw material, a chemical, an object...`,
        },
    },
};

export default template;
