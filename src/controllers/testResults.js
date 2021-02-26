import response from '../helpers/response';
import {calcScores, normalizeTestResults, getTestResultsChart, updateSpreadsheet} from '../helpers/scores';
import knex from '../config/db/knexInstance';
const fetch = require('node-fetch');


function saveResults(normalizedScores, name, email, response_id, referer) {
  const [planning, execution, communication, learning, agency, awareness, estimations] = normalizedScores;
  const submitted_at = Math.round(Date.now() / 1000);
  const results = [
    {
      "name": name,
      "email": email,
      "planning": planning,
      "execution": execution,
      "communication": communication,
      "learning": learning,
      "agency": agency,
      "awareness": awareness,
      "estimations": estimations,
      "response_id": response_id,
      "referer": referer,
      "submitted_at": submitted_at
    }
  ]
  knex('results').insert(results).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err });
}



exports.getResults = function(req, res) {
  const form_id = process.env.FORM_ID;
  const token = process.env.TF_API_TOKEN;

  console.log("form_id", form_id)
  console.log("token", token)

  const response_id = req.body.response_id;
  const url = `https://api.typeform.com/forms/${form_id}/responses?`;
  const urlParams = new URLSearchParams({
    included_response_ids: response_id,
  })

  const config = {
  	//credentials: 'include',
  	mode: 'cors',
  	headers: {
  		'Authorization': "Bearer " + token,
  		//"Access-Control-Allow-Headers": "Authorization",
  		"Access-Control-Allow-Origin": "*"
  	},
  }

  fetch(url + urlParams.toString(), config).then((resp) => {
  	console.log("resp", resp)
  	resp.json().then(async (data) => {
  		console.log("data", data)
  		if (data.items.length === 0) {
  			return response.sendBadRequest(res, "No answers found");
  		}
		console.log("data.items[0]", data.items[0]);

      const answers = data["items"][0]["answers"];
  		const scores = calcScores(answers);
      const name = answers[0]["text"];
      const email = answers[36]["text"];
      const response_id = data["items"][0]["response_id"];
      const referer = data["items"][0]["metadata"]["referer"];

  		console.log("scores", scores);
  		const normalizedScores = normalizeTestResults(scores);
  		let [planning, execution, communication, learning, agency, awareness, estimations] = normalizedScores;
  		console.log("normalized [planning, execution, communication, learning, agency, awareness, estimations]",  [planning, execution, communication, learning, agency, awareness, estimations]);
      saveResults(normalizedScores, name, email, response_id, referer);
      updateSpreadsheet(planning, execution, communication, learning, agency, awareness, estimations, name, email, response_id);
  		const resultsChart = await getTestResultsChart(normalizedScores);
  		res.json({ resultsChart: resultsChart });
  	})
  }).catch((err) => {
  	console.log("err", err)
  	response.sendBadRequest(res, err);
  })
};

