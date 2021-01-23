import response from '../helpers/response';
import calcScores from '../helpers/scores';

const fetch = require('node-fetch');


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
  	resp.json().then((data) => {
  		console.log("data", data)
  		if (data.items.length === 0) {
  			return response.sendBadRequest(res, "No answers found");
  		}
  		scores = calcScores(data.items[0].answers)
  		let [planning, execution, communication, learning, agency, awareness, estimations] = scores;
  		console.log(" [planning, execution, communication, learning, agency, awareness, estimations]",  [planning, execution, communication, learning, agency, awareness, estimations])

  	})
  }).catch((err) => {
  	console.log("err", err)
  	response.sendBadRequest(res, err);
  })

  res.json({ message: 'success' });
};

