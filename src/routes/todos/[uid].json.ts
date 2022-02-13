import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

// PATCH /todos/:uid.json
export const patch: RequestHandler<Locals, FormData> = async (event) => {
	let formData: FormData = await event.request.formData();
	return api(event, `todos/${event.locals.userid}/${event.params.uid}`, {
		text: formData.has('text') ? formData.get('text').toString() : undefined,
		done: formData.has('done') ? !!formData.get('done') : undefined
	});
};

// DELETE /todos/:uid.json
export const del: RequestHandler<Locals> = async (event) => {
	return api(event, `todos/${event.locals.userid}/${event.params.uid}`);
};
