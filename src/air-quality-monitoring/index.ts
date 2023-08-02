import { BuildingTemplate } from './building';
import { DeviceTemplate } from './device';
import { RoomTemplate } from './room';

const blueprint = [BuildingTemplate, DeviceTemplate, RoomTemplate];

const stringified = JSON.stringify(blueprint);

console.log(stringified);
console.log(`

------ End ------

Copy the stringified json above and use it to update the relevant blueprint attribute

`);
