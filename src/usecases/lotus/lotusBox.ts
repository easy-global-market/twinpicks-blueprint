import { StellioTemplate } from 'src/interfaces';

export const LotusBox: StellioTemplate = {
    id: 'urn:ngsi-ld:LotusBox:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Name of the Lotus Box',
            },
        },
    },
    temperature: {
        type: 'Property',
        value: 10,
        unitCode: 'CEL',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Temperature', canSelfInit: true },
        },
    },
    humidity: {
        type: 'Property',
        value: 45,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Humidity', canSelfInit: true },
        },
    },
    batteryLevel: {
        type: 'Property',
        value: 95,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Battery level', canSelfInit: true },
        },
    },
    hardwareVersion: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Hardware version',
            },
        },
    },
    firmwareVersion: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Firmware version',
            },
        },
    },
    hasSensor: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:LotusSensor:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: 'Contains which Lotus Sensor ?',
                minimum: 1,
            },
        },
    },
    hasUltrasonicFlowMeter: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:UltraSonicFlowMeter:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: 'Contains which Ultrasonic Flow Meter ?',
                minimum: 1,
            },
        },
    },
    hasFlowMeter: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:FlowMeter:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: 'Contains which Flow Meter?',
                minimum: 1,
            },
        },
    },
    hasBypass: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Bypass:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: 'Contains which Bypass?',
                minimum: 1,
            },
        },
    },
    hasPressureGauge: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:PressureGauge:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: 'Contains which Pressure Gauge?',
                minimum: 1,
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'LotusBox',
            title: 'Lotus Box',
            required: ['name', 'hasSensor', 'hasUltrasonicFlowMeter', 'hasFlowMeter', 'hasBypass', 'hasPressureGauge'],
            minimum: 1,
            description: 'Digital twin of the main Lotus Box which contains all other components',
        },
    },
};
