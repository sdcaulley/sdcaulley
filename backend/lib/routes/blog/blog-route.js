const Blog = require('../../models/blog-schema.js');
const Tag = require('../../models/tag-schema.js');
const dbUtils = require('../../utilities/db-utils.js');
const ensureAuth = require('../../auth/ensure-auth.js');

async function blogCreate (ctx, next) {
	const tags = await Promise.all(
		ctx.request.body.tag.map(async tag => {
			const tagRes = await dbUtils.findOneDocument(Tag, { tag: tag });
			return tagRes[0]._id;
		})
	);

	const body = {
		title: ctx.request.body.title,
		content: ctx.request.body.content,
		image: ctx.request.body.image,
		tag: tags,
		category: ctx.request.body.category,
		date_created: new Date(),
		date_updated: new Date()
	};
	const blog = await dbUtils.makeNewDocument(Blog, body);

	if (blog) {
		ctx.response.body = {
			blog: {
				_id: blog._id,
				title: blog.title,
				content: blog.content,
				image: blog.image,
				tag: ctx.request.body.tag,
				category: blog.category,
				date_created: blog.date_created,
				date_updated: blog.date_updated
			}
		};
	}
	await next();
}

async function blogGet (ctx, next) {
	const blog = dbUtils.findAllDocuments(Blog);

	if (blog) {
		ctx.response.body = { blog };
	}

	await next();
}

async function blogUpdate (ctx, next) {
	const data = ctx.request.body;
	const payload = {
		date_updated: new Date()
	};

	if (data.title) {
		payload.title = data.title;
	}
	if (data.content) {
		payload.content = data.content;
	}
	if (data.image) {
		payload.image = data.image;
	}
	if (data.tag) {
		payload.tag = data.tag;
	}
	if (data.category) {
		payload.category = data.category;
	}

	const blog = await dbUtils.updateDocument(Blog, data._id, payload);
	const updatedBlog = await blog.save();

	ctx.response.body = {
		_id: updatedBlog._id,
		title: updatedBlog.title,
		content: updatedBlog.content,
		image: updatedBlog.image,
		tag: updatedBlog.tag,
		category: updatedBlog.category,
		date_created: updatedBlog.date_created,
		date_updated: updatedBlog.date_updated
	};

	await next();
}

async function blogDelete (ctx) {
	const id = await dbUtils.splitUrl(ctx.request.url);
	const confirm = await dbUtils.deleteDocument(Blog, id);

	if (confirm) {
		ctx.response.body = {
			message: 'The quote has been deleted'
		};
	}
}

module.exports = router => {
	router.get('/', ensureAuth, blogGet);
	router.post('/create', ensureAuth, blogCreate);
	router.patch('/update', ensureAuth, blogUpdate);
	router.delete('/:id', ensureAuth, blogDelete);
};
