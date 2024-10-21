import { StellioTemplate } from 'src/interfaces';

export const LorawanConfig: StellioTemplate = {
    id: 'urn:ngsi-ld:LorawanConfig:Template',
    type: 'Template',
    devEUI: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Dev EUI',
                canBeEdited: false,
                pattern: '^[A-Z0-9]+$',
                minLength: 16,
                maxLength: 16,
            },
            pattern: {
                languageMap: {
                    en: 'Only uppercase letters and numbers allowed',
                    fr: 'Seules les lettres majuscules et les chiffres sont autorisés',
                },
            },
            minLength: {
                languageMap: {
                    en: 'Must have 16 chars',
                    fr: 'Doit contenir 16 caractères',
                },
            },
            maxLength: {
                languageMap: {
                    en: 'Must have 16 chars',
                    fr: 'Doit contenir 16 caractères',
                },
            },
        },
    },
    appEUI: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'App EUI',
                canBeEdited: false,
                pattern: '^[A-Z0-9]+$',
                minLength: 16,
                maxLength: 16,
            },
            pattern: {
                languageMap: {
                    en: 'Only uppercase letters and numbers allowed',
                    fr: 'Seules les lettres majuscules et les chiffres sont autorisés',
                },
            },
            minLength: {
                languageMap: {
                    en: 'Must have 16 chars',
                    fr: 'Doit contenir 16 caractères',
                },
            },
            maxLength: {
                languageMap: {
                    en: 'Must have 16 chars',
                    fr: 'Doit contenir 16 caractères',
                },
            },
        },
    },
    appKey: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'App Key',
                canBeEdited: false,
                pattern: '^[a-zA-Z0-9]+$',
                minLength: 32,
                maxLength: 32,
            },
            pattern: {
                languageMap: {
                    en: 'Only letters and numbers allowed',
                    fr: 'Seules les lettres et les chiffres sont autorisés',
                },
            },
            minLength: {
                languageMap: {
                    en: 'Must have 32 chars',
                    fr: 'Doit contenir 32 caractères',
                },
            },
            maxLength: {
                languageMap: {
                    en: 'Must have 32 chars',
                    fr: 'Doit contenir 32 caractères',
                },
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'LorawanConfig',
            title: 'LoRaWAN Config',
            description: "The definition of LoRaWAN device's properties",
            required: ['devEUI', 'appEUI', 'appKey'],
            identifier: 'devEUI',
        },
    },
};
