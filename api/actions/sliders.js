import fs from 'fs';
import json from '../json/sliders.json';
import { jsonPath, jsonExt } from '../utils/constants.js';

export default function Sliders(req, params) {
	const res = params.length === 1 && json[params[0]] ? { id: params[0], ...json[params[0]] } : json;

	if (req.method === 'GET') {
	  return new Promise((resolve) => {
	    resolve(res);
	  });
	}

	if (req.method === 'POST') {
		const { user, birthday, alias = '' } = req.body;
		let id = Date.now();
		while (json[id]) {
			id++;
		}
		json[id] = {
			...req.body,
			created: Date.now(),
			updated: Date.now(),
			public: false,
		}

		return new Promise((resolve) => {
			fs.writeFile(jsonPath + 'sliders' + jsonExt, JSON.stringify(json), error => {
				const data = {};
			  if (error) {
			  	resolve({ error });
			  } else {
					fs.appendFile(jsonPath + id + jsonExt, '{}', error => {
					  if (error) {
					  	resolve({ error });
					  } else {
					  	resolve({ id });
					  }
					});
			  }
			});
	  });
	}
}