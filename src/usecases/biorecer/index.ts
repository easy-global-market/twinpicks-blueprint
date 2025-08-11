import corporation from './Corporation';
import processType from './ProcessType';
import product from './Product';
import productionSystem from './ProductionSystem';
import standard from './Standard';
import storage from './Storage';
import transformation from './Transformation';
import transporter from './Transporter';
import travel from './Travel';
import criteria from './Criteria';
import certification from './Certification';

import { generateBlueprintFile } from '../../utils';

const blueprint = [
    product,
    productionSystem,
    corporation,
    storage,
    transporter,
    travel,
    transformation,
    certification,
    standard,
    processType,
    criteria,
];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
