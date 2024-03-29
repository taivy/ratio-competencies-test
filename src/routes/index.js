import express from 'express';

import testResults from './testResults';
import response from '../helpers/response';


const routes = express.Router();

// routes.use(response.setHeadersForCORS);

routes.use('/', testResults);

routes.get('/', (req, res) => {
	res.status(200).json({ message: 'Ok' });
});

routes.use(function(req, res) {
	response.sendNotFound(res);
});

module.exports = routes;
