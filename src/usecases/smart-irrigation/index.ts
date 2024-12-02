import { ControlNodeTemplate } from './controlNode';
import { FieldTemplate } from './field';
import { IrrigationAreaTemplate } from './irrigationArea';
import { ManagedZoneTemplate } from './managedZone';
import { ReferenceSoilAreaTemplate } from './referenceSoilArea';
import { WeatherInformationTemplate } from './weatherInformation';

import { generateBlueprintFile } from '../../utils';

const blueprint = [
    FieldTemplate,
    IrrigationAreaTemplate,
    ControlNodeTemplate,
    ReferenceSoilAreaTemplate,
    ManagedZoneTemplate,
    WeatherInformationTemplate,
];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
