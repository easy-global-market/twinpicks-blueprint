import { StellioTemplate } from 'src/interfaces';

export const LotusSensor: StellioTemplate = {
    id: 'urn:ngsi-ld:LotusSensor:Template',
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Name of the Lotus Sensor',
            },
        },
    },
    description: {
        type: 'Property',
        value: 'Digital twin of the Lotus sensor which is composed of 25 micro sensors measuring the conductivity and the temperature of the water',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Short description',
                canSelfInit: true,
            },
        },
    },
    chipId: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Chip ID',
            },
        },
    },
    afeFirmwareVersion: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'AFE firmware version',
            },
        },
    },
    R11: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R', canSelfInit: true },
        },
    },
    R12: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R', canSelfInit: true },
        },
    },
    R13: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R', canSelfInit: true },
        },
    },
    R14: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R', canSelfInit: true },
        },
    },
    R21: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R', canSelfInit: true },
        },
    },
    R22: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R', canSelfInit: true },
        },
    },
    R23: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R', canSelfInit: true },
        },
    },
    R24: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R', canSelfInit: true },
        },
    },
    R31: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R', canSelfInit: true },
        },
    },
    R32: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R', canSelfInit: true },
        },
    },
    R34: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R', canSelfInit: true },
        },
    },
    T1: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'T', canSelfInit: true },
        },
    },
    T2: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'T', canSelfInit: true },
        },
    },
    C1: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'C', canSelfInit: true },
        },
    },
    R_amplitude: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R_amplitude'},
        },
    },
    R_signal: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R_signal',},
        },
    },
    R_frequency: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'R_frequency'},
        },
    },
    T_amplitude: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'T_amplitude'},
        },
    },
    T_signal: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'T_signal'},
        },
    },
    T_frequency: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'T_frequency'},
        },
    },
    C_amplitude: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'C_amplitude'},
        },
    },
    C_signal: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'C_signal'},
        },
    },
    C_frequency: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'C_frequency'},
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'LotusSensor',
            title: 'Lotus Sensor',
            required: ['name'],
            minimum: 1,
            description:
                'Digital twin of the Lotus sensor which is composed of 25 micro sensors measuring the conductivity and the temperature of the water',
        },
    },
};
