import fs from 'fs';

export default function Slider(req, params) {
	const id = params[0] || false;
	if (!id) {
		return new Promise((resolve) => {
	    resolve({
	    	error: 'Slider with id "' + id + '" not found'
	    });
	  });
	}

	if (req.method === 'GET') {
	  return new Promise(resolve => {
	  	fs.readFile('api/json/' + id + '.json', 'utf8', (error, data) => {
			  if (error) {
			  	resolve({ error });
			  } else {
			  	const resp = JSON.parse(data);
			  	resolve({ ...resp });
			  }
			});
		});
	}

	if (req.method === 'POST') {
	
	}
}