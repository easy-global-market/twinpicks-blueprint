import { BuildingTemplate } from './building';
import { RoadTemplate } from './road';

import { generateBlueprintFile } from '../../utils';

const blueprint = [BuildingTemplate, RoadTemplate];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);