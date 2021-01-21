import express from 'express';

import testResults from '../controllers/testResults';

const routes  = express.Router({ mergeParams: true });

routes.route('/get-test-results')
  .post(testResults.getResults);

module.exports = routes;
