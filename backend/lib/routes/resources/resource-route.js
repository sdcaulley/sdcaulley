const Resource = require('../../models/resource-schema.js');
const dbUtils = require('../../utilities/db-utils.js');
const ensureAuth = require('../../auth/ensure-auth.js');

async function resourceCreate (ctx, next) {
	const resource = await dbUtils.makeNewDocument(Resource, ctx.request.body);

	if (resource) {
		ctx.response.body = {
			quote: {
				_id: resource._id,
				quote: resource.quote,
				author: resource.author,
				reference: resource.reference,
				category: resource.category
			}
		};
	}

	await next();
}

async function resourceFilter (ctx, next) {
	const category = dbUtils.splitUrl(ctx.request.url);

	const response = await dbUtils.findOneDocument(Resource, { category: category });

	if (response) {
		ctx.response.body = response;
	}

	await next();
}

async function resourceUpdate (ctx, next) {
	const data = ctx.request.body;
	const payload = {
		date_updated: new Date()
	};

	if (data.title) {
		payload.title = data.title;
	}
	if (data.kind) {
		payload.kind = data.kind;
	}
	if (data.image) {
		payload.image = data.image;
	}
	if (data.category) {
		payload.category = data.category;
	}
	if (data.url) {
		payload.url = data.url;
	}
	if (data.description) {
		payload.description = data.description;
	}

	const blog = await dbUtils.updateDocument(Resource, data._id, payload);
	const updatedResource = await blog.save();

	ctx.response.body = {
		_id: updatedResource._id,
		title: updatedResource.title,
		content: updatedResource.kind,
		image: updatedResource.image,
		tag: updatedResource.url,
		category: updatedResource.category,
		description: updatedResource.description,
		date_created: updatedResource.date_created,
		date_updated: updatedResource.date_updated
	};

	await next();
}

async function resourceDelete (ctx) {
	const id = await dbUtils.splitUrl(ctx.request.url);
	const confirm = await dbUtils.deleteDocument(Resource, id);

	if (confirm) {
		ctx.response.body = {
			message: 'The resource has been deleted'
		};
	}
}

module.exports = router => {
	router.get('/:category', resourceFilter);
	router.post('/create', ensureAuth, resourceCreate);
	router.patch('/update', ensureAuth, resourceUpdate);
	router.delete('/:id', ensureAuth, resourceDelete);
};
