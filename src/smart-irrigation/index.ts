import { ControlNodeTemplate } from './controlNode';
import { DeviceTemplate } from './device';
import { FieldTemplate } from './field';
import { IrrigationAreaTemplate } from './irrigationArea';
import { ManagedZoneTemplate } from './managedZone';
import { ReferenceSoilAreaTemplate } from './referenceSoilArea';
import { WeatherInformationTemplate } from './weatherInformation';

import { generateBlueprintFile } from './../../utils';
import { config } from '../../config';

const blueprint = [
    FieldTemplate,
    IrrigationAreaTemplate,
    DeviceTemplate,
    ControlNodeTemplate,
    ReferenceSoilAreaTemplate,
    ManagedZoneTemplate,
    WeatherInformationTemplate,
];
const stringifiedBlueprint = JSON.stringify(blueprint);

const SPECIFIC_USECASE_PATH = __dirname.split('dist\\')[1];
const from = `./${config.blueprintFileName}`;
const to = `../../../${SPECIFIC_USECASE_PATH}/${config.blueprintFileName}`;

generateBlueprintFile(stringifiedBlueprint, from, to);
