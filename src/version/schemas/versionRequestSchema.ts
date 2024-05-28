import { Joi, Segments } from 'celebrate';

export interface VersionQuerySchema {
	someBooleanParam?: boolean;
	someNumberParam?: number;
}

export const versionQuerySchema = Joi.object<VersionQuerySchema>().keys({
	someBooleanParam: Joi.boolean(),
	someNumberParam: Joi.number(),
});

export default {
	[Segments.QUERY]: versionQuerySchema,
};
