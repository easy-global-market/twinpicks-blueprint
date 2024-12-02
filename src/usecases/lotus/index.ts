import { LotusSensor } from './lotusSensor';
import { UltraSonicFlowMeter } from './ultraSonicFlowMeter';
import { FlowMeter } from './flowMeter';
import { Bypass } from './bypass';
import { PressureGauge } from './pressureGauge';
import { LotusBox } from './lotusBox';

import { generateBlueprintFile } from '../../utils';

const blueprint = [LotusSensor, UltraSonicFlowMeter, FlowMeter, Bypass, PressureGauge, LotusBox];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
