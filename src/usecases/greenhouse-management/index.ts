import Building from './building';
import GreenouseTable from './greenhouseTable';

import { generateBlueprintFile } from '../../utils';

const blueprint = [Building, GreenouseTable];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
