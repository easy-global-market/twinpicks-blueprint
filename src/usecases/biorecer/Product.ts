import { StellioTemplate } from 'src/interfaces';
import { entityType as KpiEntityType } from './KeyPerformanceIndicator';

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
                enum: ['Main Product', 'Residue or by-product', 'Raw material'],
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
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: `Specify the total amount or total weight (kg) in dry mass of the product`,
                friendlyAttributeName: 'Total amount',
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
    hasKpi: {
        type: 'Relationship',
        object: `urn:ngsi-ld:${KpiEntityType}:Template`,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: `Key performance indicator (or Circularity Indicator) of this ${entityTypeTitle}?`,
                friendlyAttributeName: 'Key performance indicator',
            },
        },
    },
    reusedFraction: {
        type: 'Property',
        value: 2,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Reused Fraction',
                title: '(If residue) Specify the percentage (%) of the total dry mass of the residue or by-product that is reused',
            },
        },
    },
    unavoidableResidueShare: {
        type: 'Property',
        value: 50,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Unavoidable Residue Share',
                title: '(If residue) Specify the percentage (%) of the total dry mass of the residue or by-product that is considered as unavoidable',
            },
        },
    },
    unavoidableContentOfByProduct: {
        type: 'Property',
        value: 50,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Unavoidable Content',
                title: '(If Processor or Manufacturer) Specify the percentage (%) of the total dry mass of by-product that is considered as unavoidable',
            },
        },
    },
    sustainableRemovalShare: {
        type: 'Property',
        value: 50,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Sustainable Removal Share',
                title: '(If residue) Please provide the percentage (%) of the sustainable removal rate for residues regarding your activity',
            },
        },
    },
    massOfResidueForFineChemicals: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass of residue for fine chemicals',
                title: '(If residue) Please provide the total dry mass (kg) of generated residue used as feedstock for pharmaceuticals or fine chemicals',
            },
        },
    },
    massOfResidueForFood: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass Of Residue For Food',
                title: '(If residue) Please provide the total dry mass (kg) of generated residue used for food or feed',
            },
        },
    },
    massOfResidueForBioplastics: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass Of Residue For Bioplastics',
                title: '(If residue) Please provide the total dry mass (kg) of generated residue used for bioplastics or polymers',
            },
        },
    },
    massOfResidueForBulkChemicals: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass Of Residue For Bulk Chemicals',
                title: '(If residue) Please provide the total dry mass (kg) of generated residue used for bulk chemicals or materials',
            },
        },
    },
    massOfResidueForEnergy: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass Of Residue For Energy',
                title: '(If residue) Please provide the total dry mass (kg) of generated residue used for energy, heat or fuel',
            },
        },
    },
    massOfLeftOnFieldResidue: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass Of Left On Field Residue',
                title: '(If residue) Please provide the total dry mass (kg) of generated residue left on field',
            },
        },
    },
    massOfLostResidue: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass Of Lost Residue',
                title: '(If residue) Please provide the total dry mass (kg) of generated residue being landfilled, burnt, lost, etc.',
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
