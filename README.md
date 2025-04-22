# How to create a new blueprint

1. If you don't have it, install node (https://github.com/nvm-sh/nvm or for windows https://github.com/coreybutler/nvm-windows) and use version at least 16+
1. Clone repository `git clone https://github.com/easy-global-market/twinpicks-blueprint.git`
1. Do `npm install`
1. Create a new directory in `/src/usecases/[NEW_USECASE_TYPE]`
    - Create a new file for each new defined entity type
    - Create a file named `index.ts` where each file/entity are imported to generate the blueprint. You can copy/paste the content from another existing `index.ts` file as an example.
1. Once ready, use this command `npx tsc` to transpile the code
1. cd to `/dist/usecases/[USECASE_TYPE]`
1. Use this command `node ./index.js` to generate the final blueprint
1. Find the json output of final blueprint in `/src/usecases/[USECASE_TYPE]/blueprint.json` file
1. Do a merge request with all your changes including the generated blueprint.json file.

# How to make a blueprint available into Twin·Picks
1. A context needs to be created with all the terms used in the blueprint. See https://github.com/easy-global-market/ngsild-api-data-models
1. Create a UseCaseConfig entity which holds the blueprint JsonProperty
    ```js
    POST "/ngsi-ld/v1/entities"
    ```
    With the following body (example from AirQuality):
    ```json
    {
        "id": "urn:ngsi-ld:UseCaseConfig:AirQuality",
        "type": "UseCaseConfig",
        "name": {
            "type": "Property",
            "value": "Air Quality"
        },
        "description": {
            "type": "Property",
            "value": "An air quality use case pre-configuration with its context and blueprints"
        },
        "imageSource": {
            "type": "Property",
            "value": "airIcon"
        },
        "contextString": {
            "type": "Property",
            "value": "https://easy-global-market.github.io/ngsild-api-data-models/airQuality/jsonld-contexts/airQuality-compound.jsonld"
        },
        "blueprint": {
            "type": "JsonProperty",
            "json": "[COPY_PASTE_THE_JSON_OUTPUT_HERE]"
        },
        "specificAccessPolicy": {
            "type": "Property",
            "value": "AUTH_READ"
        }
    }
    ```

1. That's it! Twin·Picks' users will be able to instantiate a new use case and create entities based on this Blueprint. 
1. Optional: add a `.env` file to simplify the process (see .env.example for variables definition). Then adapt the commands below depending on the use case directory name:
    - For 'smart-irrigation' blueprint generation:
        ```sh
        npx tsc && cd ./dist/usecases/smart-irrigation && node index.js && cd ../../..
        ```
    - For 'smart-irrigation' UseCaseConfig entity update:
        ```sh
        npx tsc && node --env-file=.env ./dist/utils/updateUseCaseConfig.js --directoryName=smart-irrigation
        ```