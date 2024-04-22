# How to use

1. If you don't have it, install node (https://github.com/nvm-sh/nvm or for windows https://github.com/coreybutler/nvm-windows)
1. Clone repository
1. Do `npm install`
1. Do your changes to the blueprint in `/src/usecases/[USECASE_TYPE]`
1. Then use this command `npx tsc` to transpile the code
1. cd to `/dist/usecases/[USECASE_TYPE]`
1. Use this command `node ./index.js` to generate the final blueprint
1. Find the json output of final blueprint in `/src/usecases/[USECASE_TYPE]/blueprint.md` file
1. Update the corresponding UseCaseConfig Entity blueprint attributes with the json output
1. Commit your changes

