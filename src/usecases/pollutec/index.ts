import { AccelerometerTemplate } from './accelerometer';
import { AIVisionSensorTemplate } from './aiVisionSensor';
import { IndoorAmbienceSensorTemplate } from './indoorAmbienceSensor';
import { LoRaControllerTemplate } from './loraController';
import { ModbusControllerTemplate } from './modbusController';
import { PowerSocketTemplate } from './powerSocket';
import { SmartLightControllerTemplate } from './smartLightController';
import { SoundLevelSensorTemplate } from './soundLevelSensor';
import { UltrasonicDistanceSensorTemplate } from './ultrasonicDistanceSensor';

import { generateBlueprintFile } from '../../utils';

const blueprint = [
    AccelerometerTemplate,
    AIVisionSensorTemplate,
    IndoorAmbienceSensorTemplate,
    LoRaControllerTemplate,
    ModbusControllerTemplate,
    PowerSocketTemplate,
    SmartLightControllerTemplate,
    SoundLevelSensorTemplate,
    UltrasonicDistanceSensorTemplate,
];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
