// import knex from './knexInstance';
const GoogleSpreadsheet = require('google-spreadsheet')
var knexInstance = require('./knexInstance');



function transparentize(color, opacity) {
	var Color = Chart.helpers.color;
	var alpha = opacity === undefined ? 0.5 : 1 - opacity;
	return Color(color).alpha(alpha).rgbString();
}


exports.saveResults = function(normalizedScores, name, email, response_id, referer) {
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
  knexInstance('results').insert(results).then(() => console.log("data inserted"))
    .catch((err) => { console.log(err); throw err });
}



exports.normalizeTestResults = function(resultsArray) {
	let [planning, execution, communication, learning, agency, awareness, estimations] = resultsArray;
	
	const max_planning = 159.5;
	const min_planning = -15;

	const max_execution = 122;
	const min_execution = -25;

	const max_communication = 105;
	const min_communication = -23;

	const max_learning = 78;
	const min_learning = -11;

	const max_agency = 201;
	const min_agency = -28;

	const max_awareness = 156;
	const min_awareness = -19;

	const max_estimations = 71;
	const min_estimations = -13;

	const planning_normalized = Math.round(100*(planning-min_planning)/max_planning);
	const execution_normalized = Math.round(100*(execution-min_execution)/max_execution);
	const communication_normalized = Math.round(100*(communication-min_communication)/max_communication);
	const learning_normalized = Math.round(100*(learning-min_learning)/max_learning);
	const agency_normalized = Math.round(100*(agency-min_agency)/max_agency);
	const awareness_normalized = Math.round(100*(awareness-min_awareness)/max_awareness);
	const estimations_normalized = Math.round(100*(estimations-min_estimations)/max_estimations);

	return [planning_normalized, execution_normalized, communication_normalized, learning_normalized, 
	agency_normalized, awareness_normalized, estimations_normalized]
}


exports.calcScores = function(answers) {
	console.log("answers", answers);
	let [planning, execution, communication, learning, agency, awareness, estimations] = [0, 0, 0, 0, 0, 0, 0];

	const mockedAnswer = { 
		field:
	      { id: ''},
	    type: 'choice',
	    choice: 
	      { id: '', 
	        label: '' } 
	}

	if (answers[1].choice.id === "DWKyOsVeEoZE") {
		for (let i=0; i<4; i++) {
			answers.splice(2, 0, mockedAnswer);
		}
		console.log("answers after cycle", answers);
	} else {
		answers.splice(6, 0, mockedAnswer);
	}

	if (answers[17].choices.ids.includes("pCBAysBorEvE")) {
		answers.splice(18, 0, mockedAnswer);
	}


	let planning_1;
	if (answers[1].choice.id == "Zkcyzjho0xDc") {
		planning_1 = 3;
		planning += planning_1;
		execution += 1;
		learning += 1;
		awareness += 6;
	} else if (answers[1].choice.id == "ZWaaVbkqnO5q") {
		planning_1 = 3;
		planning += planning_1;
		execution += 1;
		learning += 1;
		awareness += 6;
	}  else if (answers[1].choice.id == "t04AoDXfj1UC") {
		planning_1 = 1;
		planning += planning_1;
		execution += 1;
		awareness += 6;
	}  else if (answers[1].choice.id == "LLu6oeYgHgsA") {
		planning_1 = 1;
		planning += planning_1;
		execution += 1;
		awareness += 6;
	}  else if (answers[1].choice.id == "DWKyOsVeEoZE") {
		planning_1 = -3;
		planning += planning_1;
		execution += 1;
	}
	planning += planning_1;

	let planning_4;
	if (answers[1].choice.id !== "DWKyOsVeEoZE") {
		let planning_2;
		if (answers[2].choice.id == "DdZVCnyQCMf0") {
			planning_2 = 3;
			execution += 10;
			agency += 2;
		} else if (answers[2].choice.id == "RUJgZvn7HHAr") {
			planning_2 = 2;
			execution += 8;
			agency += 2;
			estimations += 2;
		}  else if (answers[2].choice.id == "T8mtIq1QnRV4") {
			planning_2 = -1;
			execution += 3;
			learning += 1;
			agency += 2;
		}  else if (answers[2].choice.id == "2an7uBsMdQoE") {
			planning_2 = -3;
			execution -= 1;
		}
		planning += planning_2;

		if (answers[3].choice.id == "3lI8N1okry8Q") {
			planning += planning_2*0.3;
			awareness += 2;
		} else if (answers[3].choice.id == "4ZGyjSM7iLw0") {
			planning += planning_2*0.8;
			awareness += 2;
		}  else if (answers[3].choice.id == "7GX4HGrXFXHR") {
			planning += planning_2*1.2;
			awareness += 2;
		}  else if (answers[3].choice.id == "qbz0Nu58WYzf") {
			planning += planning_2*2;
		}

		if (answers[4].choice.id == "4G1IswrlK8DW") {
			planning_4 = 1;
			planning += planning_4;
			execution += 1;
		} else if (answers[4].choice.id == "mpIWsdEGX0Sq") {
			planning_4 = 4;
			planning += planning_4;
			execution += 4;
			agency += 2;
		}  else if (answers[4].choice.id == "3HGMc7ZCwbQu") {
			planning_4 = 10;
			planning += planning_4;
			execution += 10;
			learning += 1;
			agency += 2;
		}  else if (answers[4].choice.id == "J5LW8gLRzmbn") {
			planning_4 = 15;
			planning += planning_4;
			execution += 15;
			learning += 1;
			agency += 2;
		}
		planning += planning_4;


		if (answers[5].choice.id == "wivZk5ZtRd5T") {
			learning -= 2;
		} else if (answers[5].choice.id == "8NzXRTppA3ed") {
			planning += 3;
			agency += 3;
			estimations += 2;
		}  else if (answers[5].choice.id == "WYzK5qX4LMel") {
			planning -= 2;
			learning += 1;
			agency += 2;
		}  else if (answers[5].choice.id == "71QYrxvDBZ0g") {
			planning += 3;
			execution -= 2;
			agency -= 4;
		}
	}

	if (answers[1].choice.id === "DWKyOsVeEoZE") {
		if (answers[6].choice.id == "AvnTLO0a6dhP") {
			planning += 1*planning_1;
			awareness += 2;
		} else if (answers[6].choice.id == "X8V600e3yS2I") {
			planning += 30;
			execution += 10;
		}  else if (answers[6].choice.id == "xADV5bkgQtom") {
			planning += 50;
			execution += 15;
			awareness += 2;
		}
	} else {
		let planning_7 = 0;
		if (answers[7].choices.ids.includes("YGcSE2eplNuG")) {
			planning_7 += 2;
			execution += 2;
		}
		if (answers[7].choices.ids.includes("SmQZpTwyF7Eo")) {
			planning_7 += 1;
		}
		if (answers[7].choices.ids.includes("oViWGTEf8TUJ")) {
			planning_7 += 2;
			agency -= 2;
			estimations += 3;
		}
		if (answers[7].choices.ids.includes("iqlJNwXUIqT0")) {
			planning_7 += 1;
		}
		if (answers[7].choices.ids.includes("ZrqsCKl9UMxV")) {
			planning_7 += 1;
			learning -= 4;
			agency -= 4;
		}
		planning += ((planning_7) * planning_4) / 10;
	}



	if (answers[8].choice.id == "CQntvyDouIae") {
		planning -= 4;
		agency += 2;
	} else if (answers[8].choice.id == "lwxcNYLlqiy1") {
		planning -= 2;
		agency += 4;
	}  else if (answers[8].choice.id == "lfhVnbMD8gOQ") {
		planning += 1;
		agency += 8;
	}  else if (answers[8].choice.id == "xJfQYwqizygK") {
		planning += 3;
		agency += 10;
	}  else if (answers[8].choice.id == "G2nIFPU6QlbL") {
		planning += 10;
		agency += 16;
	}  else if (answers[8].choice.id == "w76BefCwZkYe") {
		planning +=  14;
		agency += 24;
	}


	if (answers[9].choice.id == "PTEAAzzOtZ8g") {
		planning += 10;
		agency += 16;
		awareness += 2;
	} else if (answers[9].choice.id == "HisXin8zfWkU") {
		planning += 9;
		agency += 12;
		awareness += 2;
	}  else if (answers[9].choice.id == "Zh6iPHBG38uR") {
		planning += 6;
		agency += 7;
	}  else if (answers[9].choice.id == "wORNG1NAAjSn") {
		planning += 4;
		agency += 3;
	}  else if (answers[9].choice.id == "XiWBNHKC19aN") {
		planning += 1;
		agency -= 2;
	}


	if (answers[10].choice.id == "4ZkDC7qzqvP0") {
		planning += 10;
		execution += 2;
		agency += 16;
		awareness += 3;
	} else if (answers[10].choice.id == "6HWnKSLIHMML") {
		planning += 4;
	}  else if (answers[10].choice.id == "eyJVZwrf7CYi") {
		planning += 6;
		agency += 6;
		awareness += 3;
	}  else if (answers[10].choice.id == "Oe2rq7fikhlO") {
		planning += 2;
		awareness += 3;
	}


	if (answers[11].choice.id == "ROhYZqRR8coo") {
		planning += 4;
		execution += 14;
		agency += 6;
		estimations += 2;
	} else if (answers[11].choice.id == "DiPX40QNpI61") {
		execution += 7;
		agency += 2;
	}  else if (answers[11].choice.id == "vMMkzwT3xzaz") {
		execution += 1;
		agency -= 2;
		estimations += 2;
	}


	if (answers[12].choices.ids.includes("A3mm3Rk0M31A")) {
		planning += 10;
		execution += 2;
		agency += 2;
		estimations += 4;
	}
	if (answers[12].choices.ids.includes("5Ld0gOX76Ibq")) {
		planning += 1;
		execution += 8;
		agency += 6;
		awareness += 4;
	}
	if (answers[12].choices.ids.includes("jyoYuSRxIbgp")) {
		planning += 1;
		execution += 2;
		agency += 2;
		awareness += 3;
	}
	if (answers[12].choices.ids.includes("hNGgNGlTgMId")) {
		planning += 1;
		execution += 2;
		communication += 5;
		agency += 2;
		awareness += 4;
	}
	if (answers[12].choices.ids.includes("OktxycGYlpYk")) {
		planning += 4;
		execution += 2;
		communication += 1;
		learning += 8;
		agency += 6;
		awareness += 3;
		estimations += 2;
	}


	if (answers[13].choices.ids.includes("ZIOz25cFqhfD")) {
		planning -= 4;
		execution -= 2;
		agency -= 4;
		awareness += 2;
		estimations -= 4;
	}
	if (answers[13].choices.ids.includes("FqcswomwDosn")) {
		planning -= 2;
		execution -= 1;
		agency += 4;
		awareness += 4;
	}
	if (answers[13].choices.ids.includes("EzgRM8iDsgIK")) {
		planning -= 2;
		execution -= 1;
		agency += 8;
	}
	if (answers[13].choices.ids.includes("xeNluP5Flvcu")) {
		agency += 14;
		awareness += 1;
	}
	if (answers[13].choices.ids.includes("qv5kJBb83STf")) {
		execution -= 5;
		agency -= 8;
		awareness -= 4;
	}


	if (answers[14].choice.id == "bmXKhr4vqISx") {
		execution -= 10;
		agency -= 4;
		awareness -= 4;
	} else if (answers[14].choice.id == "1rTAblfyp3MH") {
		execution -= 3;
		agency -= 2;
		awareness -= 1;
	}  else if (answers[14].choice.id == "JC5XkzC29ewS") {
		planning += 1;
		execution += 1;
		learning += 6;
		agency += 4;
		awareness += 4;
	}  else if (answers[14].choice.id == "JmyaIyPWAApx") {
		planning += 1;
		execution += 2;
		agency += 2;
		awareness += 4;
		estimations -= 2;
	}  else if (answers[14].choice.id == "PAPB0wcZbHu2") {
		planning += 1;
		execution += 4;
		agency += 8;
		awareness += 8;
	}


	if (answers[15].choice.id == "ISUItTZ36VjS") {
		execution += 10;
		learning += 2;
		agency += 3;
		awareness += 2;
	} else if (answers[15].choice.id == "h2SqwBC3LPWf") {
		execution += 10;
		learning += 6;
		agency += 3;
		awareness += 2;
	}  else if (answers[15].choice.id == "52d4OQcfqQOa") {
		execution += 4;
		agency += 1;
		awareness += 2;
	}  else if (answers[15].choice.id == "mWD8vMXgT6u4") {
		execution += 2;
		awareness += 2;
	}  else if (answers[15].choice.id == "5zbxxHACki9e") {
		execution += 4;
		communication += 10;
		agency += 2;
		awareness += 2;
	}  else if (answers[15].choice.id == "pkHfBnKCZ8Dm") {
		execution += 4;
		communication += 7;
		agency += 1;
		awareness += 2;
	}  else if (answers[15].choice.id == "3WPI7QpviRoi") {
		execution += 3;
		learning += 4;
		agency += 3;
		awareness += 2;
	}  else if (answers[15].choice.id == "oHMnHMAdmT8q") {
		communication += 2;
	}  else if (answers[15].choice.id == "fmCkOixok3KO") {
		execution -= 1;
		communication += 1;
	}


	let execution_16;
	if (answers[16].choice.id == "xUC7D6hEeO6S") {
		execution_16 = 4;
		agency += 2;
		awareness += 8;
	} else if (answers[16].choice.id == "LPyAu7zhDXQP") {
		execution_16 = 2;
		learning += 2;
		awareness += 6;
	}  else if (answers[16].choice.id == "rQ5iAEAjtqbj") {
		execution_16 = -1;
		learning += 2;
		awareness += 4;
	}  else if (answers[16].choice.id == "zuCqTnEdC5rN") {
	}
	execution += execution_16;



	if (answers[17].choices.ids.includes("nvkzfhpwNroh")) {
		planning += 1;
		execution += 2;
		agency += 4;
		awareness += 4;
	}
	if (answers[17].choices.ids.includes("kVbtmSOwZoLs")) {
		planning += 1;
		execution += 2;
		agency += 4;
		awareness += 4;
	}
	if (answers[17].choices.ids.includes("rpZGh6LzEies")) {
		planning += 1;
		execution += 2;
		agency += 4;
		awareness += 4;
	}
	if (answers[17].choices.ids.includes("aw62dZhItu2n")) {
		planning += 1;
		execution += 2;
		agency += 4;
		awareness += 4;
	}
	if (answers[17].choices.ids.includes("IcM9GhQAEhp8")) {
		planning += 1;
		execution += 2;
		communication += 8;
		agency += 4;
		awareness += 4;
	}
	if (answers[17].choices.ids.includes("pCBAysBorEvE")) {
		execution -= 2;
	}


	if (!answers[17].choices.ids.includes("pCBAysBorEvE")) {
		if (answers[18].choice.id == "CcbZPmvlpu8Z") {
			execution += 0.5*execution_16;
			agency -= 4;
			awareness -= 4;
		} else if (answers[18].choice.id == "gQxOAgy6fItp") {
			planning -= 2;
			execution += 0.4*execution_16;
			awareness += 2;
		}  else if (answers[18].choice.id == "CDjJAQ1aDPh3") {
			planning += 2;
			execution += 2*execution_16;
			awareness += 2;
		}  else if (answers[18].choice.id == "lQAhF98IxEgI") {
			planning += 3;
			execution += 1*execution_16;
		}
	}


	if (answers[19].choice.id == "mge3WkMvRwlR") {
		execution += 5;
		communication += 6;
		learning += 6;
		agency += 4;
		awareness += 12;
	} else if (answers[19].choice.id == "PLAFBM1nTiai") {
		execution += 3;
		communication += 7;
		awareness += 8;
	}  else if (answers[19].choice.id == "ZuC35N0IsBF9") {
		execution += 1;
		awareness += 4;
	}  else if (answers[19].choice.id == "LTxXmf9WGdiP") {
		execution -= 10;
	}


	let communication_20, agency_20;
	if (answers[20].choice.id == "x1xxZ678yhrC") {
		communication_20 = -1;
		agency_20 = 4;
	} else if (answers[20].choice.id == "K41dBW7ZU5Jh") {
		communication_20 = 1;
		agency_20 = 3;
	}  else if (answers[20].choice.id == "dwptETiwv0e9") {
		communication_20 = 8;
		agency_20 = 2;
	}
	communication += communication_20;
	agency += agency_20;


	if (answers[21].choice.id == "FGMtCrhLaxNn") {
		communication += communication_20*3;
		agency += agency_20*4;
	} else if (answers[21].choice.id == "EeKXkhNCWYWQ") {
		communication += communication_20*1;
		agency += agency_20*1;
	}  else if (answers[21].choice.id == "Jsm6ExcsA8oF") {
		communication += communication_20*2;
		agency += agency_20*2;
	}


	if (answers[22].choice.id == "JWqVlvjob3ZG") {
		execution += 2;
		communication += 10;
		agency += 7;
		awareness += 4;
	} else if (answers[22].choice.id == "t2NytmK2JY3v") {
		communication -= 7;
	}  else if (answers[22].choice.id == "685ROZ3CfG2a") {
		communication -= 4;
	}  else if (answers[22].choice.id == "nVHIPnndEXAF") {
		execution -= 1;
		communication -= 6;
	}


	if (answers[23].choice.id == "FN1q6iEO7kbk") {
		communication += 2;
		agency += 8;
		awareness += 4;
	} else if (answers[23].choice.id == "MfUJyOwUWWkd") {
		communication += 8;
		agency += 8;
		awareness += 4;
	}  else if (answers[23].choice.id == "XNqgAvpHSSWa") {
		communication += 1;
	}  else if (answers[23].choice.id == "P0QFFHhJMas8") {
		planning -= 1;
		execution -= 1;
		communication -= 6;
		agency -= 4;
	}


	let communication_24;
	if (answers[24].choice.id == "Ct35iVhim4Wd") {
		communication_24 = 2;
		agency += 8;
		awareness += 4;
	} else if (answers[24].choice.id == "3KcL5z6n2jqb") {
		communication_24 = 3;
		agency += 2;
	}  else if (answers[24].choice.id == "NZgE6xypnKP1") {
		communication_24 = 4;
		learning += 2;
		agency += 4;
	}
	communication += communication_24;


	if (answers[25].choice.id == "t2fsfIACazag") {
		communication += 2*communication_24;
		learning += 8;
		agency += 6;	
	} else if (answers[25].choice.id == "10x52ytHSM9R") {
		communication += 4*communication_24;
		agency += 2;
	}  else if (answers[25].choice.id == "UyZSATVV5F4j") {
		communication += 1*communication_24;
	}


	if (answers[26].choice.id == "HACR0SCo0gl1") {
		learning -= 7;
		awareness -= 2;
	} else if (answers[26].choice.id == "084ioeMz9Ern") {
		learning += 8;
		agency += 2;
	}  else if (answers[26].choice.id == "7ezx8PsmUjg5") {
		communication += 4;
		learning += 6;
		agency += 2;
	}  else if (answers[26].choice.id == "fpRzhzBdDUqg") {
		learning += 10;
		agency += 2;
	}


	if (answers[27].choice.id == "3BBVlihmWVl9") {
		learning += 2;
	} else if (answers[27].choice.id == "ymneHjV4ApjG") {
		learning += 2;
		agency += 2;
	}  else if (answers[27].choice.id == "LIj7MJ14r9WR") {
		learning += 6;
		agency += 2;
	}  else if (answers[27].choice.id == "Sp8c7KTRrCWX") {
		learning += 3;
		agency += 2;
	}


	if (answers[28].choice.id == "K9WbKWgxP8Vi") {
		planning += 2;
		execution += 1;
		learning += 8;
		awareness += 12;
		estimations += 8;
	} else if (answers[28].choice.id == "m0wW39oFbCLr") {
		planning += 1;
		learning += 3;
		awareness += 5;
		estimations += 4;
	}  else if (answers[28].choice.id == "JrfnhHbriAuE") {
	}


	if (answers[29].choice.id == "IfnmBJA8R5qh") {
		awareness -= 3;
	} else if (answers[29].choice.id == "YL7Tt2k8iWuB") {
		learning += 2;
		awareness += 2;
	}  else if (answers[29].choice.id == "IL4a6XbY6xMl") {
		learning += 6;
		agency += 2;
		awareness += 8;
	}  else if (answers[29].choice.id == "1WHBmZgQTY2j") {
		learning += 4;
		agency += 2;
		awareness += 7;
	}


	if (answers[30].choice.id == "zQ0Hpe6QyVbh") {
		awareness -= 8;
	} else if (answers[30].choice.id == "RQ8RMgVGuJi6") {
		estimations += 2;
	}  else if (answers[30].choice.id == "IDgSPsYfeaQy") {
		execution += 1;
		awareness += 8;
		estimations += 2;
	}


	if (answers[32].choice.id == "x0nFZAhuwtpT") {
		planning += 1;
		execution += 2;
		awareness += 12;
		estimations += 14;
	} else if (answers[32].choice.id == "JEWy328uIhtg") {
		execution += 1;
		awareness += 6;
		estimations += 4;
	}  else if (answers[32].choice.id == "xxZLQLbRiuX6") {
	}


	if (answers[34].choice.id == "laBiWzaUZjaC") {
		planning += 1;
		execution += 2;
		learning += 6;
		awareness += 12;
		estimations += 20;
	} else if (answers[34].choice.id == "BtMp1neFZxWz") {
		execution += 1;
		learning += 3;
		estimations += 8;
	}  else if (answers[34].choice.id == "2s9rghPVzYij") {
		awareness -= 4;
		estimations -= 3;
	}


	if (answers[35].choice.id == "97DkVBtz0PJr") {
		estimations += 4;
	} else if (answers[35].choice.id == "Krrysm9KT4c7") {
		planning += 1;
		estimations += 12;
	}  else if (answers[35].choice.id == "iFbYkUdBWKmP") {
		estimations -= 4;
	}  else if (answers[35].choice.id == "2a9XZeanOjGS") {
	}


	return [planning, execution, communication, learning, agency, 
	awareness, estimations];

}


exports.updateSpreadsheet = function(planning, execution, communication, learning, agency, 
	awareness, estimations, name, email, response_id) {
    // var creds = require('./credentials.json');
    //const creds = {"installed":{"client_id":"513845486574-3gsb866q6km9gf7ob4hee3ik4ssv7ekn.apps.googleusercontent.com","project_id":"polinas-default--1614231540531","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"_9vcKxJR8hqzIQ9oGGF5Kqir","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}}
    //console.log(creds)
    const GOOGLE_SPREADSHEET_ID = "1ypE-FluTsGWnkcpDnKTNFDhQqhmJhp4q3pH3-pdt21Y";

    const creds = {
	  "type": "service_account",
	  "project_id": "auint-306021",
	  "private_key_id": "ced0090d3a0c71723344753653dbd63ade9d3cc8",
	  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCZeb8Nua2jYIJj\nFDYq3QLOHGPMeXM4DVBhAAVBGhETXfFje2D4UFfv3np1viFI8qkj3v02sxBNFN5/\nXuDYbPLIHjth2zd9LJyLOvMBzUbKk+1hKNdvJ12Td/joLXMy4FCOHNj7g+UXYDqE\nxjekKj8OwIJvj7tezuITBOvrZaLkWdEeeVzyCCmJIZvbexM0Y6UM4eM8xD4uNwhd\n7e3I3H5SDlBbUj7JtGQkgJYTtBEb/0h3mjESW7JFC22x0QHeumteZGq3DZCZg+jQ\nbbesGwUt5E9kkg20zngKJo3ZvEvnIvSufDkKx00907GsAfz323vrt+QDODTw0qGg\nB8kMbOSjAgMBAAECggEAGHofxoccp9KpCOHnf6+O684AUVNJ/8sJIjyYGe7CgWsO\nqAs8hxh9OzQpe2TO4deoXSBfvwe7llI5PWl62lmJ4PEIDyPLYOsqrlPrqhe8mMC9\n76x4AMdvolN/KZGyGTpIRASwIHDuf8C+TysJIxAFIuEAtzKJCLuzDPh7IyhVsdhX\n8EODNsrKmLgpBwkpl8jxDoF6BLVp+uU24ObqoOoykoAltao2gjavhvoA4A2umkq/\n8kuz2dlrWxUm8UnPw0m6F1E56qMiqWFELStW1tScyxXc+QjmkEkPVNRZwW+6syFP\ngy6VWTnJmPmKMP8paTs2DSNR6y+d3vqr7CRXlyEYQQKBgQDR335mFDziPRfGV0gv\n7yLvDQfuA5HRyPQS147D7hCOd4waDdRSG4CTnj5tqDKB8ZVrj9NFwr7uR5xgA24F\nk+ES5uKvsLIyNT8diS16y8Bgm8G3xiaZ8mwyr8AsMN4x/uS3RL1AD9Pth0eKvUV7\nazNxKpnvf+g4e+NXKbM9PjrsYwKBgQC7NQzAImr8GcHS9MpVjMQa4JTv9xn4nrVG\nfHYbsJvBoJDxfMS5XtRgqcBeELs1+QHuYj6DOozipG+YgqlJNnrJdkdIFbEpreYs\niBUPtDQRc50VAbpQ0wcQ57N3LnmF++LJDrJdyLFYqkDAeKQcE08sD0rKmRClpyS0\nDM1CkLj6wQKBgQCwnqYv394xAvrsFu4QMO60QMIoouZnpvcImFF0P/e8/YxxLKw/\nARgeovCktgTzaEy3/YzuS2sE+kz2XEyN8xpaHuYstsXwDPF1uMkGa0wVwV6wethn\nfCVkLpXKWsHTT1BJj1a4/9j5L3ycnJZJvDjJhvGPJZRXXKNA6j4GT0WlQwKBgAXL\nAnX/mqfqdCD/CjPTg04BnRo/30HeR2XC/DSnJmq7eUC/x6ak1JWZKya+Bc0Jw5GI\n4L5W1X098WYaxPpLAUmyq0oDwdO0WecO3vf5b5MKrNW1k/pkTVesk9UgTwpiXQYz\nujlEuJgxzIcoNIvZ3R1T69CRI/68SVp4+vEQYWkBAoGAfl19KaQUy56IAPMC4Oyf\nV3A4DjsCOTRRe+lk6xKPT9rt3Oyn6woYKYz8MTQoZVH5A0BBUYytwYj7k4Tj/kmh\nqObzSF5g8hTKzrLz7JbstOhawumwVRWtkBYNkQ53tblal2P3Cb/zE7vZ6gLFxCjI\nPEK+cVMy4MO1iGOjX1RX9zc=\n-----END PRIVATE KEY-----\n",
	  "client_email": "sv-acc-1@auint-306021.iam.gserviceaccount.com",
	  "client_id": "110639070284917553233",
	  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
	  "token_uri": "https://oauth2.googleapis.com/token",
	  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/sv-acc-1%40auint-306021.iam.gserviceaccount.com"
	}

	var doc = new GoogleSpreadsheet(GOOGLE_SPREADSHEET_ID);
    doc.useServiceAccountAuth(creds, function (err) {
      if (err) console.log(err);
      doc.getInfo(function (err, info) {
        console.log('Loaded doc: ' + info.title + ' by ' + info.author.email);
        let sheet = info.worksheets[0];
        console.log('sheet #1: ' + sheet.title + ' ' + sheet.rowCount + 'x' + sheet.colCount);

        var newrow = {
            planning, execution, communication, learning, agency, 
            awareness, estimations, name, email, response_id
        };
        console.log("newrow", newrow);
        sheet.addRow(newrow, function( err, rows ){
            if (err) console.log(err);
            console.log(rows);

          });
      })
    })
}