import { EtablissementScolaireTemplate } from './etablissementScolaire';
import { SecteurScolaireTemplate } from './secteurScolaire';

import { generateBlueprintFile } from '../../utils';

const blueprint = [SecteurScolaireTemplate, EtablissementScolaireTemplate];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
