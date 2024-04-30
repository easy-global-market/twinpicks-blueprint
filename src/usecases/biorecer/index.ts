import manufacturer from './Manufacturer';
import processType from './ProcessType';
import product from './Product';
import productionSystem from './ProductionSystem';
import standard from './Standard';
import storage from './Storage';
import transformation from './Transformation';
import transporter from './Transporter';

import { generateBlueprintFile } from '../../utils';
import { config } from '../../config';

const blueprint = [
    product,
    productionSystem,
    manufacturer,
    storage,
    transporter,
    transformation,
    standard,
    processType,
];
const stringifiedBlueprint = JSON.stringify(blueprint);

const SPECIFIC_USECASE_PATH = __dirname.split('dist\\')[1];
const from = `./${config.blueprintFileName}`;
const to = `../../../src/${SPECIFIC_USECASE_PATH}/${config.blueprintFileName}`;

generateBlueprintFile(stringifiedBlueprint, from, to);
