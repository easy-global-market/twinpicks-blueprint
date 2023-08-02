import { JsonSchema } from 'interfaces/jsonSchema';
import { GeometryObject } from 'geojson';

interface EntityBaseProps {
	id: string;
	type: string;
	'@context'?: string[];
	createdAt?: string;
	modifiedAt?: string;
}

interface StellioRelationship {
	type: 'Relationship';
	object: string;
	datasetId?: string;
	[key: string]: StellioProp | string | undefined;
}

type StellioProp<T = any> = {
	[key: string]: StellioProp | string | T | undefined | StellioRelationship;
	type: 'Property';
	value: T;
	unitCode?: string;
	observedAt?: string;
	modifiedAt?: string;
	createdAt?: string;
	observedBy?: StellioRelationship;
};

type StellioGeoProp = {
	[key: string]: StellioProp | GeometryObject | string | undefined | StellioRelationship;
	type: 'GeoProperty';
	value: GeometryObject;
	unitCode?: string;
	observedAt?: string;
	modifiedAt?: string;
	createdAt?: string;
	observedBy?: StellioRelationship;
};

type StellioMultiAttribute<T = any> = {
	[key: string]: StellioProp | string | T | undefined | StellioRelationship;
	type: 'Property';
	value: T;
	datasetId: string;
};

type NgsildPossibleValue =
	| StellioProp<any>
	| StellioGeoProp
	| StellioRelationship
	| StellioRelationship[]
	| StellioMultiAttribute<any>[]
	| string[]
	| string
	| number
	| undefined;

type StellioTemplateProp = StellioProp & {
	jsonSchema: StellioProp<JsonSchema>;
};

type StellioTemplateRelationship = StellioRelationship & {
	jsonSchema: StellioProp<JsonSchema>;
};

export interface StellioTemplate extends EntityBaseProps {
	[key: string]: NgsildPossibleValue | StellioTemplateProp | StellioTemplateRelationship;
	jsonSchema: StellioProp<JsonSchema>;
}
