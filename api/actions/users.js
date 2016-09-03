import fs from 'fs';
import { whereEq } from 'ramda';
import json from '../json/users.json';
import { jsonPath, jsonExt } from '../utils/constants.js';

export default function Users(req, params) {

	if (req.method === 'GET') {
		const { query } = req;
		let resp = json;
		if (Object.keys(query).length !== 0) {
			resp = [];
			const eq = whereEq(query);
			json.map(user => {
				if (eq(user)) {
					resp.push(user);
				}
			});
		}

	  return new Promise(resolve => {
	  	resolve(resp);
		});
	}

	if (req.method === 'POST') {
	
	}
}