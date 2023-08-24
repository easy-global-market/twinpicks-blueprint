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
    afeId: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'AFE ID',
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
    cnt1a: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt1b: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt1c: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt1d: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt1e: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt1f: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt1g: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt1h: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt1i: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt1j: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt2a: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt2b: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt2c: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt2d: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt2e: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt2f: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt2g: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt2h: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt2i: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    cnt2j: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'CNT', canSelfInit: true },
        },
    },
    t1: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'T', canSelfInit: true },
        },
    },
    t2: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'T', canSelfInit: true },
        },
    },
    c1: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'T', canSelfInit: true },
        },
    },
    c2: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'T', canSelfInit: true },
        },
    },
    c3: {
        type: 'Property',
        value: 0.1,
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'integer', title: 'T', canSelfInit: true },
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
