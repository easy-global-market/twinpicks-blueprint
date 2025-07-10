import Greenhouse from './greenhouse';
import GreenouseTable from './greenhouseTable';

import { generateBlueprintFile } from '../../utils';

const blueprint = [GreenouseTable, Greenhouse];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
