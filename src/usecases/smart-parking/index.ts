import ParkingArea from './parkingArea';
import ParkingSpace from './parkingSpace';

import { generateBlueprintFile } from '../../utils';

const blueprint = [ParkingSpace, ParkingArea];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
