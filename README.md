# How to use

1. If you don't have it, install node (https://github.com/nvm-sh/nvm or for windows https://github.com/coreybutler/nvm-windows) and use version at least 16+
1. Clone repository
1. Do `npm install`
1. Do your changes to the blueprint in `/src/usecases/[USECASE_TYPE]`
1. Then use this command `npx tsc` to transpile the code
1. cd to `/dist/usecases/[USECASE_TYPE]`
1. Use this command `node ./index.js` to generate the final blueprint
1. Find the json output of final blueprint in `/src/usecases/[USECASE_TYPE]/blueprint.md` file
1. Make a merge request with your changes.
1. After it's approved and merged, create a corresponding UseCaseConfig entity which will hold the blueprint attribute

    ```js
    POST "/ngsi-ld/v1/entities"
    ```
    With the following body:
    ```json
    {
        "id": "urn:ngsi-ld:UseCaseConfig:[USECASE_TYPE]",
        "type": "UseCaseConfig",
        "name": {
            "type": "Property",
            "value": "[USECASE_TYPE_NAME]"
        },
        "description": {
            "type": "Property",
            "value": "[USECASE_TYPE_DESCRIPTION]"
        },
        "blueprint": {
            "type": "JsonProperty",
            "json": "[COPY_PASTE_THE_JSON_OUTPUT_HERE]"
        },
        "contextString": {
            "type": "Property",
            "value": "[LINK_OF_THE_USECASE_TYPE]"
        },
        "imageSource": {
            "type": "Property",
            "value": "cityIcon"
        },
        "specificAccessPolicy": {
            "type": "Property",
            "value": "AUTH_READ"
        }
    }
    ```

1. If you just need to update the blueprint, don't forget to commit your changes and update the UseCaseConfig entity:
    ```js
    PATCH "/ngsi-ld/v1/entities/urn:ngsi-ld:UseCaseConfig:[USECASE_TYPE]"
    ```
    With the following body:
    ```json
    {
        "blueprint": {
            "type": "JsonProperty",
            "json": "[COPY_PASTE_THE_JSON_OUTPUT_HERE]"
        }
    }

1. That's it! Twin Picks' users will be able to create a new use case based on this Blueprint. 
