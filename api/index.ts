import type { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

export default async (request: VercelRequest, response: VercelResponse) => {
	const { path } = request.query;

	const res = await fetch(`https://upload.thwiki.cc/avatars/${path}`);

	response.status(res.status);

	for (const [name, value] of res.headers) {
		response.setHeader(name, value);
	}

	response.send(await res.buffer());
};
