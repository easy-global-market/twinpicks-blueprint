import Building from './building';
import GreenouseTable from './greenhouseTable';
import ReferenceSoilArea from './referenceSoilArea';

import { generateBlueprintFile } from '../../utils';

const blueprint = [Building, GreenouseTable, ReferenceSoilArea];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
