import response from '../helpers/response';



function calcScores(answers) {
	let planning, execution, communication, learning, agency, awareness, estimations = 0, 0, 0, 0, 0, 0, 0;
	
	let planning_1;
	if (answers[0].choice.id == "Zkcyzjho0xDc") {
		planning_1 = 3;
		planning += planning_1;
		execution += 1;
		learning += 1;
		awareness += 6;
	} else if (answers[0].choice.id == "ZWaaVbkqnO5q") {
		planning_1 = 3;
		planning += planning_1;
		execution += 1;
		learning += 1;
		awareness += 6;
	}  else if (answers[0].choice.id == "t04AoDXfj1UC") {
		planning_1 = 1;
		planning += planning_1;
		execution += 1;
		awareness += 6;
	}  else if (answers[0].choice.id == "LLu6oeYgHgsA") {
		planning_1 = 1;
		planning += planning_1;
		execution += 1;
		awareness += 6;
	}  else if (answers[0].choice.id == "DWKyOsVeEoZE") {
		planning_1 = -3;
		planning += planning_1;
		execution += 1;
	}
	planning += planning_1;


	let planning_2;
	if (answers[1].choice.id == "DdZVCnyQCMf0") {
		planning_2 = 3;
		execution += 10;
		agency += 2;
	} else if (answers[1].choice.id == "RUJgZvn7HHAr") {
		planning_2 = 2;
		execution += 8;
		agency += 2;
		estimations += 2;
	}  else if (answers[1].choice.id == "T8mtIq1QnRV4") {
		planning_2 = -1;
		execution += 3;
		learning += 1;
		agency += 2;
	}  else if (answers[1].choice.id == "2an7uBsMdQoE") {
		planning_2 = -3;
		execution -= 1;
	}
	planning += planning_2;


	if (answers[2].choice.id == "3lI8N1okry8Q") {
		planning += planning_2*0.3;
		awareness += 2;
	} else if (answers[2].choice.id == "4ZGyjSM7iLw0") {
		planning += planning_2*0.8;
		awareness += 2;
	}  else if (answers[2].choice.id == "7GX4HGrXFXHR") {
		planning += planning_2*1.2;
		awareness += 2;
	}  else if (answers[2].choice.id == "qbz0Nu58WYzf") {
		planning += planning_2*2;
	}

	if (answers[3].choice.id == "4G1IswrlK8DW") {
		planning += 1;
		execution += 1;
	} else if (answers[3].choice.id == "mpIWsdEGX0Sq") {
		planning += 4;
		execution += 4;
		agency += 2;
	}  else if (answers[3].choice.id == "3HGMc7ZCwbQu") {
		planning += 10;
		execution += 10;
		learning += 1;
		agency += 2;
	}  else if (answers[3].choice.id == "J5LW8gLRzmbn") {
		planning += 15;
		execution += 15;
		learning += 1;
		agency += 2;
	}


	if (answers[4].choice.id == "wivZk5ZtRd5T") {
		learning -= 2;
	} else if (answers[4].choice.id == "8NzXRTppA3ed") {
		planning += 3;
		agency += 3;
		estimations += 2;
	}  else if (answers[4].choice.id == "WYzK5qX4LMel") {
		planning -= 2;
		learning += 1;
		agency += 2;
	}  else if (answers[4].choice.id == "71QYrxvDBZ0g") {
		planning += 3;
		execution -= 2;
		agency -= 4;
	}


	if (answers[5].choice.id == "AvnTLO0a6dhP") {
		planning += 1*planning_1;
		awareness += 2;
	} else if (answers[5].choice.id == "X8V600e3yS2I") {
		planning += 30;
		execution += 10;
	}  else if (answers[5].choice.id == "xADV5bkgQtom") {
		planning += 50;
		execution += 15;
		awareness += 2;
	}







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

