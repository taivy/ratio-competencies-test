import response from '../helpers/response';



function calcScores(answers) {
	let planning, execution, communication, learning, agency, awareness, estimations = 0, 0, 0, 0, 0, 0, 0;
	

}


exports.getResults = function(req, res) {
  console.log("1!11!!1");
  console.log(req.body);

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
  		scores = calcScores(data.items.answers)


  	})
  }).catch((err) => {
  	console.log("err", err)
  })

  res.json({ message: 'success' });
};

