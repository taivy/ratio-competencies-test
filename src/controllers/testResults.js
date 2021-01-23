import response from '../helpers/response';

const fetch = require('node-fetch');



function calcScores(answers) {
	let [planning, execution, communication, learning, agency, awareness, estimations] = [0, 0, 0, 0, 0, 0, 0];
	
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


	let planning_4;
	if (answers[3].choice.id == "4G1IswrlK8DW") {
		planning_4 = 1;
		planning += planning_4;
		execution += 1;
	} else if (answers[3].choice.id == "mpIWsdEGX0Sq") {
		planning_4 = 4;
		planning += planning_4;
		execution += 4;
		agency += 2;
	}  else if (answers[3].choice.id == "3HGMc7ZCwbQu") {
		planning_4 = 10;
		planning += planning_4;
		execution += 10;
		learning += 1;
		agency += 2;
	}  else if (answers[3].choice.id == "J5LW8gLRzmbn") {
		planning_4 = 15;
		planning += planning_4;
		execution += 15;
		learning += 1;
		agency += 2;
	}
	planning += planning_4;


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


	let planning_7 = 0;
	if (answers[6].choices.ids.includes("YGcSE2eplNuG")) {
		planning_7 += 2;
		execution += 2;
	}
	if (answers[6].choices.ids.includes("SmQZpTwyF7Eo")) {
		planning_7 += 1;
	}
	if (answers[6].choices.ids.includes("oViWGTEf8TUJ")) {
		planning_7 += 2;
		agency -= 2;
		estimations += 3;
	}
	if (answers[6].choices.ids.includes("iqlJNwXUIqT0")) {
		planning_7 += 1;
	}
	if (answers[6].choices.ids.includes("ZrqsCKl9UMxV")) {
		planning_7 += 1;
		learning -= 4;
		agency -= 4;
	}
	planning += ((planning_7) * planning_4) / 10;


	if (answers[7].choice.id == "CQntvyDouIae") {
		planning -= 4;
		agency += 2;
	} else if (answers[7].choice.id == "lwxcNYLlqiy1") {
		planning -= 2;
		agency += 4;
	}  else if (answers[7].choice.id == "lfhVnbMD8gOQ") {
		planning += 1;
		agency += 8;
	}  else if (answers[7].choice.id == "xJfQYwqizygK") {
		planning += 3;
		agency += 10;
	}  else if (answers[7].choice.id == "G2nIFPU6QlbL") {
		planning += 10;
		agency += 16;
	}  else if (answers[7].choice.id == "w76BefCwZkYe") {
		planning +=  14;
		agency += 24;
	}


	if (answers[8].choice.id == "PTEAAzzOtZ8g") {
		planning += 10;
		agency += 16;
		awareness += 2;
	} else if (answers[8].choice.id == "HisXin8zfWkU") {
		planning += 9;
		agency += 12;
		awareness += 2;
	}  else if (answers[8].choice.id == "Zh6iPHBG38uR") {
		planning += 6;
		agency += 7;
	}  else if (answers[8].choice.id == "wORNG1NAAjSn") {
		planning += 4;
		agency += 3;
	}  else if (answers[8].choice.id == "XiWBNHKC19aN") {
		planning += 1;
		agency -= 2;
	}


	if (answers[9].choice.id == "4ZkDC7qzqvP0") {
		planning += 10;
		execution += 2;
		agency += 16;
		awareness += 3;
	} else if (answers[9].choice.id == "6HWnKSLIHMML") {
		planning += 4;
	}  else if (answers[9].choice.id == "eyJVZwrf7CYi") {
		planning += 6;
		agency += 6;
		awareness += 3;
	}  else if (answers[9].choice.id == "Oe2rq7fikhlO") {
		planning += 2;
		awareness += 3;
	}


	if (answers[10].choice.id == "ROhYZqRR8coo") {
		planning += 4;
		execution += 14;
		agency += 6;
		estimations += 2;
	} else if (answers[10].choice.id == "DiPX40QNpI61") {
		execution += 7;
		agency += 2;
	}  else if (answers[10].choice.id == "vMMkzwT3xzaz") {
		execution += 1;
		agency -= 2;
		estimations += 2;
	}


	if (answers[11].choices.ids.includes("A3mm3Rk0M31A")) {
		planning += 10;
		execution += 2;
		agency += 2;
		estimations += 4;
	}
	if (answers[11].choices.ids.includes("5Ld0gOX76Ibq")) {
		planning += 1;
		execution += 8;
		agency += 6;
		awareness += 4;
	}
	if (answers[11].choices.ids.includes("jyoYuSRxIbgp")) {
		planning += 1;
		execution += 2;
		agency += 2;
		awareness += 3;
	}
	if (answers[11].choices.ids.includes("hNGgNGlTgMId")) {
		planning += 1;
		execution += 2;
		communication += 5;
		agency += 2;
		awareness += 4;
	}
	if (answers[11].choices.ids.includes("OktxycGYlpYk")) {
		planning += 4;
		execution += 2;
		communication += 1;
		learning += 8;
		agency += 6;
		awareness += 3;
		estimations += 2;
	}


	if (answers[12].choices.ids.includes("x2fI5wjpmq4s")) {
		planning -= 4;
		execution -= 2;
		agency -= 4;
		awareness += 2;
		estimations -= 4;
	}
	if (answers[12].choices.ids.includes("wcCwSjyRWhpP")) {
		planning -= 2;
		execution -= 1;
		agency += 4;
		awareness += 4;
	}
	if (answers[12].choices.ids.includes("wsCOONlq3j6F")) {
		planning -= 2;
		execution -= 1;
		agency += 8;
	}
	if (answers[12].choices.ids.includes("2jeNi4tGKs3T")) {
		agency += 14;
		awareness += 1;
	}
	if (answers[12].choices.ids.includes("3Sd3niAMzfE5")) {
		execution -= 5;
		agency -= 8;
		awareness -= 4;
	}


	if (answers[13].choice.id == "bmXKhr4vqISx") {
		execution -= 10;
		agency -= 4;
		awareness -= 4;
	} else if (answers[13].choice.id == "1rTAblfyp3MH") {
		execution -= 3;
		agency -= 2;
		awareness -= 1;
	}  else if (answers[13].choice.id == "JC5XkzC29ewS") {
		planning += 1;
		execution += 1;
		learning += 6;
		agency += 4;
		awareness += 4;
	}  else if (answers[13].choice.id == "JmyaIyPWAApx") {
		planning += 1;
		execution += 2;
		agency += 2;
		awareness += 4;
		estimations -= 2;
	}  else if (answers[13].choice.id == "PAPB0wcZbHu2") {
		planning += 1;
		execution += 4;
		agency += 8;
		awareness += 8;
	}


	if (answers[14].choice.id == "ISUItTZ36VjS") {
		execution += 10;
		learning += 2;
		agency += 3;
		awareness += 2;
	} else if (answers[14].choice.id == "h2SqwBC3LPWf") {
		execution += 10;
		learning += 6;
		agency += 3;
		awareness += 2;
	}  else if (answers[14].choice.id == "52d4OQcfqQOa") {
		execution += 4;
		agency += 1;
		awareness += 2;
	}  else if (answers[14].choice.id == "mWD8vMXgT6u4") {
		execution += 2;
		awareness += 2;
	}  else if (answers[14].choice.id == "5zbxxHACki9e") {
		execution += 4;
		communication += 10;
		agency += 2;
		awareness += 2;
	}  else if (answers[14].choice.id == "pkHfBnKCZ8Dm") {
		execution += 4;
		communication += 7;
		agency += 1;
		awareness += 2;
	}  else if (answers[14].choice.id == "3WPI7QpviRoi") {
		execution += 3;
		learning += 4;
		agency += 3;
		awareness += 2;
	}  else if (answers[14].choice.id == "oHMnHMAdmT8q") {
		communication += 2;
	}  else if (answers[14].choice.id == "fmCkOixok3KO") {
		execution -= 1;
		communication += 1;
	}


	let execution_16;
	if (answers[15].choice.id == "xUC7D6hEeO6S") {
		execution_16 = 4;
		agency += 2;
		awareness += 8;
	} else if (answers[15].choice.id == "LPyAu7zhDXQP") {
		execution_16 = 2;
		learning += 2;
		awareness += 6;
	}  else if (answers[15].choice.id == "rQ5iAEAjtqbj") {
		execution_16 = -1;
		learning += 2;
		awareness += 4;
	}  else if (answers[15].choice.id == "zuCqTnEdC5rN") {
	}
	execution += execution_16;


	if (answers[16].choices.ids.includes("nvkzfhpwNroh")) {
		planning += 1;
		execution += 2;
		agency += 4;
		awareness += 4;
	}
	if (answers[16].choices.ids.includes("kVbtmSOwZoLs")) {
		planning += 1;
		execution += 2;
		agency += 4;
		awareness += 4;
	}
	if (answers[16].choices.ids.includes("rpZGh6LzEies")) {
		planning += 1;
		execution += 2;
		agency += 4;
		awareness += 4;
	}
	if (answers[16].choices.ids.includes("aw62dZhItu2n")) {
		planning += 1;
		execution += 2;
		agency += 4;
		awareness += 4;
	}
	if (answers[16].choices.ids.includes("IcM9GhQAEhp8")) {
		planning += 1;
		execution += 2;
		communication += 8;
		agency += 4;
		awareness += 4;
	}
	if (answers[16].choices.ids.includes("pCBAysBorEvE")) {
		execution -= 2;
	}


	if (answers[17].choice.id == "CcbZPmvlpu8Z") {
		execution += 0.5*execution_16;
		agency -= 4;
		awareness -= 4;
	} else if (answers[17].choice.id == "gQxOAgy6fItp") {
		planning -= 2;
		execution += 0.4*execution_16;
		awareness += 2;
	}  else if (answers[17].choice.id == "CDjJAQ1aDPh3") {
		planning += 2;
		execution += 2*execution_16;
		awareness += 2;
	}  else if (answers[17].choice.id == "lQAhF98IxEgI") {
		planning += 3;
		execution += 1*execution_16;
	}


	if (answers[18].choice.id == "mge3WkMvRwlR") {
		execution += 5;
		communication += 6;
		learning += 6;
		agency += 4;
		awareness += 12;
	} else if (answers[18].choice.id == "PLAFBM1nTiai") {
		execution += 3;
		communication += 7;
		awareness += 8;
	}  else if (answers[18].choice.id == "ZuC35N0IsBF9") {
		execution += 1;
		awareness += 4;
	}  else if (answers[18].choice.id == "LTxXmf9WGdiP") {
		execution -= 10;
	}


	let communication_20, agency_20;
	if (answers[19].choice.id == "x1xxZ678yhrC") {
		communication_20 = -1;
		agency_20 = 4;
	} else if (answers[19].choice.id == "K41dBW7ZU5Jh") {
		communication_20 = 1;
		agency_20 = 3;
	}  else if (answers[19].choice.id == "dwptETiwv0e9") {
		communication_20 = 8;
		agency_20 = 2;
	}
	communication += communication_20;
	agency += agency_20;


	if (answers[20].choice.id == "FGMtCrhLaxNn") {
		communication += communication_20*3;
		agency += agency_20*4;
	} else if (answers[20].choice.id == "EeKXkhNCWYWQ") {
		communication += communication_20*1;
		agency += agency_20*1;
	}  else if (answers[20].choice.id == "Jsm6ExcsA8oF") {
		communication += communication_20*2;
		agency += agency_20*2;
	}


	if (answers[21].choice.id == "JWqVlvjob3ZG") {
		execution += 2;
		communication += 10;
		agency += 7;
		awareness += 4;
	} else if (answers[21].choice.id == "t2NytmK2JY3v") {
		communication -= 7;
	}  else if (answers[21].choice.id == "685ROZ3CfG2a") {
		communication -= 4;
	}  else if (answers[21].choice.id == "nVHIPnndEXAF") {
		execution -= 1;
		communication -= 6;
	}


	if (answers[22].choice.id == "FN1q6iEO7kbk") {
		communication += 2;
		agency += 8;
		awareness += 4;
	} else if (answers[22].choice.id == "MfUJyOwUWWkd") {
		communication += 8;
		agency += 8;
		awareness += 4;
	}  else if (answers[22].choice.id == "XNqgAvpHSSWa") {
		communication += 1;
	}  else if (answers[22].choice.id == "P0QFFHhJMas8") {
		planning -= 1;
		execution -= 1;
		communication -= 6;
		agency -= 4;
	}


	let communication_24;
	if (answers[23].choice.id == "Ct35iVhim4Wd") {
		communication_24 = 2;
		agency += 8;
		awareness += 4;
	} else if (answers[23].choice.id == "3KcL5z6n2jqb") {
		communication_24 = 3;
		agency += 2;
	}  else if (answers[23].choice.id == "NZgE6xypnKP1") {
		communication_24 = 4;
		learning += 2;
		agency += 4;
	}
	communication += communication_24;


	if (answers[24].choice.id == "t2fsfIACazag") {
		communication += 2*communication_24;
		learning += 8;
		agency += 6;	
	} else if (answers[24].choice.id == "10x52ytHSM9R") {
		communication += 4*communication_24;
		agency += 2;
	}  else if (answers[24].choice.id == "UyZSATVV5F4j") {
		communication += 1*communication_24;
	}


	if (answers[25].choice.id == "HACR0SCo0gl1") {
		learning -= 7;
		awareness -= 2;
	} else if (answers[25].choice.id == "084ioeMz9Ern") {
		learning += 8;
		agency += 2;
	}  else if (answers[25].choice.id == "7ezx8PsmUjg5") {
		communication += 4;
		learning += 6;
		agency += 2;
	}  else if (answers[25].choice.id == "fpRzhzBdDUqg") {
		learning += 10;
		agency += 2;
	}


	if (answers[26].choice.id == "3BBVlihmWVl9") {
		learning += 2;
	} else if (answers[26].choice.id == "ymneHjV4ApjG") {
		learning += 2;
		agency += 2;
	}  else if (answers[26].choice.id == "LIj7MJ14r9WR") {
		learning += 6;
		agency += 2;
	}  else if (answers[26].choice.id == "Sp8c7KTRrCWX") {
		learning += 3;
		agency += 2;
	}


	if (answers[27].choice.id == "K9WbKWgxP8Vi") {
		planning += 2;
		execution += 1;
		learning += 8;
		awareness += 12;
		estimations += 8;
	} else if (answers[27].choice.id == "m0wW39oFbCLr") {
		planning += 1;
		learning += 3;
		awareness += 5;
		estimations += 4;
	}  else if (answers[27].choice.id == "JrfnhHbriAuE") {
	}


	if (answers[28].choice.id == "IfnmBJA8R5qh") {
		awareness -= 3;
	} else if (answers[28].choice.id == "YL7Tt2k8iWuB") {
		learning += 2;
		awareness += 2;
	}  else if (answers[28].choice.id == "IL4a6XbY6xMl") {
		learning += 6;
		agency += 2;
		awareness += 8;
	}  else if (answers[28].choice.id == "1WHBmZgQTY2j") {
		learning += 4;
		agency += 2;
		awareness += 7;
	}


	if (answers[29].choice.id == "zQ0Hpe6QyVbh") {
		awareness -= 8;
	} else if (answers[29].choice.id == "RQ8RMgVGuJi6") {
		estimations += 2;
	}  else if (answers[29].choice.id == "IDgSPsYfeaQy") {
		execution += 1;
		awareness += 8;
		estimations += 2;
	}


	if (answers[31].choice.id == "x0nFZAhuwtpT") {
		planning += 1;
		execution += 2;
		awareness += 12;
		estimations += 14;
	} else if (answers[31].choice.id == "JEWy328uIhtg") {
		execution += 1;
		awareness += 6;
		estimations += 4;
	}  else if (answers[31].choice.id == "xxZLQLbRiuX6") {
		awareness -= 4;
		estimations -= 3;
	}


	if (answers[34].choice.id == "97DkVBtz0PJr") {
		estimations += 4;
	} else if (answers[34].choice.id == "Krrysm9KT4c7") {
		planning += 1;
		estimations += 12;
	}  else if (answers[34].choice.id == "iFbYkUdBWKmP") {
		estimations -= 4;
	}  else if (answers[34].choice.id == "2a9XZeanOjGS") {
	}


	return planning, execution, communication, learning, agency, awareness, estimations;

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
  	resp.json().then((data) => {
  		console.log("data", data)
  		if (data.items.length === 0) {
  			return response.sendBadRequest(res, "No answers found");
  		}
  		scores = calcScores(data.items.answers)
  		let [planning, execution, communication, learning, agency, awareness, estimations] = scores;
  		console.log(" [planning, execution, communication, learning, agency, awareness, estimations]",  [planning, execution, communication, learning, agency, awareness, estimations])

  	})
  }).catch((err) => {
  	console.log("err", err)
  	response.sendBadRequest(res, err);
  })

  res.json({ message: 'success' });
};

