import ParkingSpot from './parkingSpot';

import { generateBlueprintFile } from '../../utils';

const blueprint = [ParkingSpot];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
