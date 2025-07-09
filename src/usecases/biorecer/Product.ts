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
                title: '(If Processor or Manufacturer) Specify the percentage (%) of the total dry mass of the residue or by-product that is reused',
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
    sewageSludgeProducedSentForValorisation: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q5',
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Sewage Sludge Produced Sent For Valorisation',
                title: '(If Sewage Sludge) Specify the total amount or total weight of Sewage Sludge produced  by the wastewater treatment process(es) (disclosed and undisclosed) that is sent for valorisation i.e. anaerobic digestion (in kg of dry mass)',
            },
        },
    },
    sewageSludgeProducedNotSentForValorisation: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q6',
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Sewage Sludge Produced Not Sent For Valorisation',
                title: '(If Sewage Sludge) Specify the total amount or total weight of Sewage Sludge produced by the wastewater treatment process(es) (disclosed and undisclosed) that is NOT sent for valorisation i.e. landfill (in kg of dry mass)',
            },
        },
    },
    sewageAmountOfCodRemoved: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q7',
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Total weight of COD removed',
                title: '(If Sewage Sludge) Specify the total amount or total weight of COD removed by the wastewater treatment process(es) that produced the total (disclosed and undisclosed) mass of sewage sludge (in kg of dry mass)',
            },
        },
    },
    sewageVolumeTreated: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q8',
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Total volume of wastewater treated',
                title: '(If Sewage Sludge) Specify the total amount or total volume of wastewater treated by the wastewater treatment process(es) that produced the total (disclosed and undisclosed) mass of sewage sludge (in kg of dry mass)',
            },
        },
    },
    afpwOrganicMassFraction: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q9',
        },
        type: 'Property',
        value: 1,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Organic mass fraction',
                title: '(If Agro-food Processing Waste) What is the organic mass fraction of this waste stream from the processed food biomass (in %)?',
            },
        },
    },
    afpwCertifiedOrganicMassFraction: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q10',
        },
        type: 'Property',
        value: 1,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Certified Organic mass fraction',
                title: '(If Agro-food Processing Waste) What fraction of the organic mass fraction provided in the previous question is certified as renewable (in %)?',
            },
        },
    },
    afpwFractionFromBatchChanges: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q11',
        },
        type: 'Property',
        value: 1,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Fraction from batch changes',
                title: '(If Agro-food Processing Waste) What fraction of the waste is from batch changes and/or productions ends (in %)?',
            },
        },
    },
    afoetwSentForValorisation: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q12',
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Onsite Effluent sent for valorisation',
                title: '(If Agro-food Onsite Effluent Treatment Waste) Specify the total amount or total weight of Onsite Effluent Treatment Waste produced (disclosed and undisclosed) that is sent for valorisation i.e. anaerobic digestion (in kg of dry mass)?',
            },
        },
    },
    afoetwNotSentForValorisation: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q13',
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Onsite Effluent not sent for valorisation',
                title: '(If Agro-food Onsite Effluent Treatment Waste) Specify the total amount or total weight of Onsite Effluent Treatment Waste produced (disclosed and undisclosed) that is NOT sent for valorisation i.e. landfill (in kg of dry mass)',
            },
        },
    },
    afoetwMassOfBodRemoved: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q14',
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass of BOD removed by Onsite Effluent',
                title: '(If Agro-food Onsite Effluent Treatment Waste) What mass of BOD removed by the Onsite Effluent Treatment process?',
            },
        },
    },
    ofmswBiodegradableFraction: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q15',
        },
        type: 'Property',
        value: 1,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Biodegradable fraction of the OFMSW',
                title: '(If OFMSW) What is the organic, biodegradable fraction of the OFMSW (in %)?',
            },
        },
    },
    ofmswSentForValorisation: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q16',
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'OFMSW sent for valorisation',
                title: '(If OFMSW) Specify the total amount or total weight of OFMSW produced (disclosed and undisclosed) that is sent for valorisation i.e. anaerobic digestion (in kg of dry mass)?',
            },
        },
    },
    ofmswNotSentForValorisation: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q17',
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'OFMSW not sent for valorisation',
                title: '(If OFMSW) Specify the total amount or total weight of OFMSW produced (disclosed and undisclosed) that is NOT sent for valorisation i.e. landfill (in kg of dry mass)',
            },
        },
    },
    ofmswProductionRate: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q18',
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'OFMSW production rate',
                title: '(If OFMSW) Specify the production rate of the disclosed and undisclosed OFMSW by the respective treatment plant(s) (in kg/capita.year)',
            },
        },
    },
    ofmswProductionTarget: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q19',
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'OFMSW production target',
                title: '(If OFMSW) Specify the OFMSW production target of the region (in kg/capita.year)',
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
