import { StellioTemplate } from 'src/interfaces';

export const UltraSonicFlowMeter: StellioTemplate = {
    id: 'urn:ngsi-ld:UltraSonicFlowMeter:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Name of the Ultra Sonic Flow Meter',
            },
        },
    },
    flowRate: {
        type: 'Property',
        value: 10,
        unitCode: 'G51',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'Flow rate', canSelfInit: true },
        },
    },
    serialNumber: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Serial number',
            },
        },
    },
    modbusAddress: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Modbus Address',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'UltraSonicFlowMeter',
            title: 'Ultra Sonic Flow Meter',
            required: ['name'],
            minimum: 1,
            description: 'Ultrasonic flow meter entity which provides accurate data about the water flow',
        },
    },
};
