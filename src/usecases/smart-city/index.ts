import { AirQualityObservedTemplate } from './airQualityObserved';
import { BicycleCounterTemplate } from './bicycleCounter';
import { BicycleFlowObservedTemplate } from './bicycleFlowObserved';
import { RoadTemplate } from './road';
import { TrafficFlowObservedTemplate } from './trafficFlowObserved';

import { generateBlueprintFile } from '../../utils';

const blueprint = [
    AirQualityObservedTemplate,
    BicycleCounterTemplate,
    BicycleFlowObservedTemplate,
    RoadTemplate, 
    TrafficFlowObservedTemplate
];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);