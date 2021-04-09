import Chart from 'chart.js';
import { CanvasRenderingContext2D, CanvasPattern, CanvasGradient } from "canvas";
const { CanvasRenderService } = require('chartjs-node-canvas');
const GoogleSpreadsheet = require('google-spreadsheet')



global.CanvasRenderingContext2D = CanvasRenderingContext2D;
global.CanvasPattern = CanvasPattern;
global.CanvasGradient = CanvasGradient;

const width = 400; //px
const height = 400; //px
const canvasRenderService = new CanvasRenderService(width, height, (ChartJS) => { });


function transparentize(color, opacity) {
	var Color = Chart.helpers.color;
	var alpha = opacity === undefined ? 0.5 : 1 - opacity;
	return Color(color).alpha(alpha).rgbString();
}

exports.getTestResultsChart = async function(resultsArray) {
	const options = {
	    scale: {
	        angleLines: {
	            display: true
	        },
	        ticks: {
	            suggestedMin: 0,
	            suggestedMax: 100
	        }
	    },
	    legend: {
	      display: false,
	        labels: {
	          display: false
	        }
	    }
	};
    const configuration = {
	    type: 'radar',
	    data: {
		    labels: ['Планирование', 'Исполнение', 'Общение', 'Самообучение', 'Агентность', 'Осознанность', 'Оценки'],
		    datasets: [{
		    	label: '',
		        data: resultsArray,
		        backgroundColor: transparentize('#759eff'),
		        borderColor: '#759eff',
		        spanGaps: true
		    }]
	    },
	    options: options
    };
    const dataUrl = await canvasRenderService.renderToDataURL(configuration);
    return dataUrl;
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

	if (answers.has("01EWFVBMK4P8GFSCMYESCWMC4P")) {

		let planning_1;
		const choiceId = answers.get("01EWFVBMK4P8GFSCMYESCWMC4P").choice.id;
		if (choiceId == "Zkcyzjho0xDc") {
			planning_1 = 3;
			planning += planning_1;
			execution += 1;
			learning += 1;
			awareness += 6;
		} else if (choiceId == "ZWaaVbkqnO5q") {
			planning_1 = 3;
			planning += planning_1;
			execution += 1;
			learning += 1;
			awareness += 6;
		}  else if (choiceId == "t04AoDXfj1UC") {
			planning_1 = 1;
			planning += planning_1;
			execution += 1;
			awareness += 6;
		}  else if (choiceId == "LLu6oeYgHgsA") {
			planning_1 = 1;
			planning += planning_1;
			execution += 1;
			awareness += 6;
		}  else if (choiceId == "DWKyOsVeEoZE") {
			planning_1 = -3;
			planning += planning_1;
			execution += 1;
		}
		planning += planning_1;
	}


	let planning_4;
	if (answers.has("01EWFVBMK4P8GFSCMYESCWMC4P") && answers.get("01EWFVBMK4P8GFSCMYESCWMC4P").choice.id !== "DWKyOsVeEoZE") {

		let planning_2;
		if (answers.has("01EWFVBMNDJEXQZKJ1FPDZJ9KR")) {
			const choiceId = answers.get("01EWFVBMNDJEXQZKJ1FPDZJ9KR").choice.id;
			if (choiceId == "DdZVCnyQCMf0") {
				planning_2 = 3;
				execution += 10;
				agency += 2;
			} else if (choiceId == "RUJgZvn7HHAr") {
				planning_2 = 2;
				execution += 8;
				agency += 2;
				estimations += 2;
			}  else if (choiceId == "T8mtIq1QnRV4") {
				planning_2 = -1;
				execution += 3;
				learning += 1;
				agency += 2;
			}  else if (choiceId == "2an7uBsMdQoE") {
				planning_2 = -3;
				execution -= 1;
			}
			planning += planning_2;
		}


		if (answers.has("35d75188-0632-4180-8b18-bd01324667c5")) {
			const choiceId = answers.get("35d75188-0632-4180-8b18-bd01324667c5").choice.id;
			if (choiceId == "3lI8N1okry8Q") {
				planning += planning_2*0.3;
				awareness += 2;
			} else if (choiceId == "4ZGyjSM7iLw0") {
				planning += planning_2*0.8;
				awareness += 2;
			}  else if (choiceId == "7GX4HGrXFXHR") {
				planning += planning_2*1.2;
				awareness += 2;
			}  else if (choiceId == "qbz0Nu58WYzf") {
				planning += planning_2*2;
			}
		}

		if (answers.has("3d3a3e8e-8aca-40ac-b81d-466747ddd664")) {
			const choiceId = answers.get("3d3a3e8e-8aca-40ac-b81d-466747ddd664").choice.id;
			if (choiceId == "4G1IswrlK8DW") {
				planning_4 = 1;
				planning += planning_4;
				execution += 1;
			} else if (choiceId == "mpIWsdEGX0Sq") {
				planning_4 = 4;
				planning += planning_4;
				execution += 4;
				agency += 2;
			}  else if (choiceId == "3HGMc7ZCwbQu") {
				planning_4 = 10;
				planning += planning_4;
				execution += 10;
				learning += 1;
				agency += 2;
			}  else if (choiceId == "J5LW8gLRzmbn") {
				planning_4 = 15;
				planning += planning_4;
				execution += 15;
				learning += 1;
				agency += 2;
			}
			planning += planning_4;
		}


		if (answers.has("73360e83-bc62-4b6e-b644-ea0a52109085")) {
			const choiceId = answers.get("73360e83-bc62-4b6e-b644-ea0a52109085").choice.id;
			if (choiceId == "wivZk5ZtRd5T") {
				learning -= 2;
			} else if (choiceId == "8NzXRTppA3ed") {
				planning += 3;
				agency += 3;
				estimations += 2;
			}  else if (choiceId == "WYzK5qX4LMel") {
				planning -= 2;
				learning += 1;
				agency += 2;
			}  else if (choiceId == "71QYrxvDBZ0g") {
				planning += 3;
				execution -= 2;
				agency -= 4;
			}
		}
	}


	if (answers.has("ff4fdbb1-b076-4fc2-acda-a29d24b22675")) {
		const choiceId = answers.get("ff4fdbb1-b076-4fc2-acda-a29d24b22675").choice.id;
		if (choiceId == "AvnTLO0a6dhP") {
			planning += 1*planning_1;
			awareness += 2;
		} else if (choiceId == "X8V600e3yS2I") {
			planning += 30;
			execution += 10;
		}  else if (choiceId == "xADV5bkgQtom") {
			planning += 50;
			execution += 15;
			awareness += 2;
		}
	}



	if (answers.has("262d368e-e958-476a-87a0-910f37a722e4")) {
		const choicesIds = answers.get("262d368e-e958-476a-87a0-910f37a722e4").choices.ids;
		let planning_7 = 0;
		if (choicesIds.includes("YGcSE2eplNuG")) {
			planning_7 += 2;
			execution += 2;
		}
		if (choicesIds.includes("SmQZpTwyF7Eo")) {
			planning_7 += 1;
		}
		if (choicesIds.includes("oViWGTEf8TUJ")) {
			planning_7 += 2;
			agency -= 2;
			estimations += 3;
		}
		if (choicesIds.includes("iqlJNwXUIqT0")) {
			planning_7 += 1;
		}
		if (choicesIds.includes("ZrqsCKl9UMxV")) {
			planning_7 += 1;
			learning -= 4;
			agency -= 4;
		}
		planning += ((planning_7) * planning_4) / 10;
	}


	if (answers.has("380672f4-a786-4192-ac79-4d8b6d403e22")) {
		const choiceId = answers.get("380672f4-a786-4192-ac79-4d8b6d403e22").choice.id;
		if (choiceId == "CQntvyDouIae") {
			planning -= 4;
			agency += 2;
		} else if (choiceId == "lwxcNYLlqiy1") {
			planning -= 2;
			agency += 4;
		}  else if (choiceId == "lfhVnbMD8gOQ") {
			planning += 1;
			agency += 8;
		}  else if (choiceId == "xJfQYwqizygK") {
			planning += 3;
			agency += 10;
		}  else if (choiceId == "G2nIFPU6QlbL") {
			planning += 10;
			agency += 16;
		}  else if (choiceId == "w76BefCwZkYe") {
			planning +=  14;
			agency += 24;
		}
	}


	if (answers.has("ea808a67-b813-47f0-a5e6-8503d0904b84")) {
		const choiceId = answers.get("ea808a67-b813-47f0-a5e6-8503d0904b84").choice.id;
		if (choiceId == "PTEAAzzOtZ8g") {
			planning += 10;
			agency += 16;
			awareness += 2;
		} else if (choiceId == "HisXin8zfWkU") {
			planning += 9;
			agency += 12;
			awareness += 2;
		}  else if (choiceId == "Zh6iPHBG38uR") {
			planning += 6;
			agency += 7;
		}  else if (choiceId == "wORNG1NAAjSn") {
			planning += 4;
			agency += 3;
		}  else if (choiceId == "XiWBNHKC19aN") {
			planning += 1;
			agency -= 2;
		}
	}


	if (answers.has("a97e8bcb-7d07-4998-abe3-17120fff0add")) {
		const choiceId = answers.get("a97e8bcb-7d07-4998-abe3-17120fff0add").choice.id;
		if (choiceId == "4ZkDC7qzqvP0") {
			planning += 10;
			execution += 2;
			agency += 16;
			awareness += 3;
		} else if (choiceId == "6HWnKSLIHMML") {
			planning += 4;
		}  else if (choiceId == "eyJVZwrf7CYi") {
			planning += 6;
			agency += 6;
			awareness += 3;
		}  else if (choiceId == "Oe2rq7fikhlO") {
			planning += 2;
			awareness += 3;
		}
	}


	if (answers.has("11e8adbb-cfe1-43c0-acb6-6dd0c33fabb3")) {
		const choiceId = answers.get("11e8adbb-cfe1-43c0-acb6-6dd0c33fabb3").choice.id;
		if (choiceId == "ROhYZqRR8coo") {
			planning += 4;
			execution += 14;
			agency += 6;
			estimations += 2;
		} else if (choiceId == "DiPX40QNpI61") {
			execution += 7;
			agency += 2;
		}  else if (choiceId == "vMMkzwT3xzaz") {
			execution += 1;
			agency -= 2;
			estimations += 2;
		}
	}


	if (answers.has("0b6db72c-ff8f-428f-9f70-8f32dfa1493d")) {
		const choicesIds = answers.get("0b6db72c-ff8f-428f-9f70-8f32dfa1493d").choices.ids;
		if (choicesIds.includes("A3mm3Rk0M31A")) {
			planning += 10;
			execution += 2;
			agency += 2;
			estimations += 4;
		}
		if (choicesIds.includes("5Ld0gOX76Ibq")) {
			planning += 1;
			execution += 8;
			agency += 6;
			awareness += 4;
		}
		if (choicesIds.includes("jyoYuSRxIbgp")) {
			planning += 1;
			execution += 2;
			agency += 2;
			awareness += 3;
		}
		if (choicesIds.includes("hNGgNGlTgMId")) {
			planning += 1;
			execution += 2;
			communication += 5;
			agency += 2;
			awareness += 4;
		}
		if (choicesIds.includes("OktxycGYlpYk")) {
			planning += 4;
			execution += 2;
			communication += 1;
			learning += 8;
			agency += 6;
			awareness += 3;
			estimations += 2;
		}
	}


	if (answers.has("2172d7de-bda5-4fdf-ab76-09c4c3d2a23a")) {
		const choicesIds = answers.get("2172d7de-bda5-4fdf-ab76-09c4c3d2a23a").choices.ids;
		if (choicesIds.includes("ZIOz25cFqhfD")) {
			planning -= 4;
			execution -= 2;
			agency -= 4;
			awareness += 2;
			estimations -= 4;
		}
		if (choicesIds.includes("FqcswomwDosn")) {
			planning -= 2;
			execution -= 1;
			agency += 4;
			awareness += 4;
		}
		if (choicesIds.includes("EzgRM8iDsgIK")) {
			planning -= 2;
			execution -= 1;
			agency += 8;
		}
		if (choicesIds.includes("xeNluP5Flvcu")) {
			agency += 14;
			awareness += 1;
		}
		if (choicesIds.includes("qv5kJBb83STf")) {
			execution -= 5;
			agency -= 8;
			awareness -= 4;
		}
	}

	if (answers.has("9aa0229d-f583-461c-a588-385ea092c8d1")) {
		const choiceId = answers.get("9aa0229d-f583-461c-a588-385ea092c8d1").choice.id;
		if (choiceId == "bmXKhr4vqISx") {
			execution -= 10;
			agency -= 4;
			awareness -= 4;
		} else if (choiceId == "1rTAblfyp3MH") {
			execution -= 3;
			agency -= 2;
			awareness -= 1;
		}  else if (choiceId == "JC5XkzC29ewS") {
			planning += 1;
			execution += 1;
			learning += 6;
			agency += 4;
			awareness += 4;
		}  else if (choiceId == "JmyaIyPWAApx") {
			planning += 1;
			execution += 2;
			agency += 2;
			awareness += 4;
			estimations -= 2;
		}  else if (choiceId == "PAPB0wcZbHu2") {
			planning += 1;
			execution += 4;
			agency += 8;
			awareness += 8;
		}
	}


	if (answers.has("e5a06bc6-e607-40ae-846e-598268c034a3")) {
		const choiceId = answers.get("e5a06bc6-e607-40ae-846e-598268c034a3").choice.id;
		if (choiceId == "ISUItTZ36VjS") {
			execution += 10;
			learning += 2;
			agency += 3;
			awareness += 2;
		} else if (choiceId == "h2SqwBC3LPWf") {
			execution += 10;
			learning += 6;
			agency += 3;
			awareness += 2;
		}  else if (choiceId == "52d4OQcfqQOa") {
			execution += 4;
			agency += 1;
			awareness += 2;
		}  else if (choiceId == "mWD8vMXgT6u4") {
			execution += 2;
			awareness += 2;
		}  else if (choiceId == "5zbxxHACki9e") {
			execution += 4;
			communication += 10;
			agency += 2;
			awareness += 2;
		}  else if (choiceId == "pkHfBnKCZ8Dm") {
			execution += 4;
			communication += 7;
			agency += 1;
			awareness += 2;
		}  else if (choiceId == "3WPI7QpviRoi") {
			execution += 3;
			learning += 4;
			agency += 3;
			awareness += 2;
		}  else if (choiceId == "oHMnHMAdmT8q") {
			communication += 2;
		}  else if (choiceId == "fmCkOixok3KO") {
			execution -= 1;
			communication += 1;
		}
	}


	if (answers.has("6af16581-3e17-4d88-bc3c-a38df155eb10")) {
		const choiceId = answers.get("6af16581-3e17-4d88-bc3c-a38df155eb10").choice.id;
		let execution_16;
		if (choiceId == "xUC7D6hEeO6S") {
			execution_16 = 4;
			agency += 2;
			awareness += 8;
		} else if (choiceId == "LPyAu7zhDXQP") {
			execution_16 = 2;
			learning += 2;
			awareness += 6;
		}  else if (choiceId == "rQ5iAEAjtqbj") {
			execution_16 = -1;
			learning += 2;
			awareness += 4;
		}  else if (choiceId == "zuCqTnEdC5rN") {
		}
		execution += execution_16;
	}



	if (answers.has("284c2d17-3da4-4e8f-a3b0-6c63cf3058bf")) {
		const choicesIds = answers.get("284c2d17-3da4-4e8f-a3b0-6c63cf3058bf").choices.ids;
		if (choicesIds.includes("nvkzfhpwNroh")) {
			planning += 1;
			execution += 2;
			agency += 4;
			awareness += 4;
		}
		if (choicesIds.includes("kVbtmSOwZoLs")) {
			planning += 1;
			execution += 2;
			agency += 4;
			awareness += 4;
		}
		if (choicesIds.includes("rpZGh6LzEies")) {
			planning += 1;
			execution += 2;
			agency += 4;
			awareness += 4;
		}
		if (choicesIds.includes("aw62dZhItu2n")) {
			planning += 1;
			execution += 2;
			agency += 4;
			awareness += 4;
		}
		if (choicesIds.includes("IcM9GhQAEhp8")) {
			planning += 1;
			execution += 2;
			communication += 8;
			agency += 4;
			awareness += 4;
		}
		if (choicesIds.includes("pCBAysBorEvE")) {
			execution -= 2;
		}
	}


	if (answers.has("0cfea30e-c272-4cc4-963a-ff4737b9d557")) {
		const choiceId = answers.get("0cfea30e-c272-4cc4-963a-ff4737b9d557").choice.id;
		if (choiceId == "CcbZPmvlpu8Z") {
			execution += 0.5*execution_16;
			agency -= 4;
			awareness -= 4;
		} else if (choiceId == "gQxOAgy6fItp") {
			planning -= 2;
			execution += 0.4*execution_16;
			awareness += 2;
		}  else if (choiceId == "CDjJAQ1aDPh3") {
			planning += 2;
			execution += 2*execution_16;
			awareness += 2;
		}  else if (choiceId == "lQAhF98IxEgI") {
			planning += 3;
			execution += 1*execution_16;
		}
	}


	if (answers.has("c0e5cdd3-266e-43e4-80fc-0e716c77e240")) {
		const choiceId = answers.get("c0e5cdd3-266e-43e4-80fc-0e716c77e240").choice.id;
		if (choiceId == "mge3WkMvRwlR") {
			execution += 5;
			communication += 6;
			learning += 6;
			agency += 4;
			awareness += 12;
		} else if (choiceId == "PLAFBM1nTiai") {
			execution += 3;
			communication += 7;
			awareness += 8;
		}  else if (choiceId == "ZuC35N0IsBF9") {
			execution += 1;
			awareness += 4;
		}  else if (choiceId == "LTxXmf9WGdiP") {
			execution -= 10;
		}
	}


	if (answers.has("a8b61c2d-d4cd-4be3-bfa2-f304865c11b1")) {
		const choiceId = answers.get("a8b61c2d-d4cd-4be3-bfa2-f304865c11b1").choice.id;
		let communication_20, agency_20;
		if (choiceId == "x1xxZ678yhrC") {
			communication_20 = -1;
			agency_20 = 4;
		} else if (choiceId == "K41dBW7ZU5Jh") {
			communication_20 = 1;
			agency_20 = 3;
		}  else if (choiceId == "dwptETiwv0e9") {
			communication_20 = 8;
			agency_20 = 2;
		}
		communication += communication_20;
		agency += agency_20;
	}


	if (answers.has("609cd414-3038-44ed-adbd-b3cf5e527b68")) {
		const choiceId = answers.get("609cd414-3038-44ed-adbd-b3cf5e527b68").choice.id;
		if (choiceId == "FGMtCrhLaxNn") {
			communication += communication_20*3;
			agency += agency_20*4;
		} else if (choiceId == "EeKXkhNCWYWQ") {
			communication += communication_20*1;
			agency += agency_20*1;
		}  else if (choiceId == "Jsm6ExcsA8oF") {
			communication += communication_20*2;
			agency += agency_20*2;
		}
	}


	if (answers.has("b9fcb8d9-fa26-43b2-b367-4e4292fbe727")) {
		const choiceId = answers.get("b9fcb8d9-fa26-43b2-b367-4e4292fbe727").choice.id;
		if (choiceId == "JWqVlvjob3ZG") {
			execution += 2;
			communication += 10;
			agency += 7;
			awareness += 4;
		} else if (choiceId == "t2NytmK2JY3v") {
			communication -= 7;
		}  else if (choiceId == "685ROZ3CfG2a") {
			communication -= 4;
		}  else if (choiceId == "nVHIPnndEXAF") {
			execution -= 1;
			communication -= 6;
		}
	}


	if (answers.has("302d55a2-42ba-45d9-8551-6123c0bb1860")) {
		const choiceId = answers.get("302d55a2-42ba-45d9-8551-6123c0bb1860").choice.id;
		if (choiceId == "FN1q6iEO7kbk") {
			communication += 2;
			agency += 8;
			awareness += 4;
		} else if (choiceId == "MfUJyOwUWWkd") {
			communication += 8;
			agency += 8;
			awareness += 4;
		}  else if (choiceId == "XNqgAvpHSSWa") {
			communication += 1;
		}  else if (choiceId == "P0QFFHhJMas8") {
			planning -= 1;
			execution -= 1;
			communication -= 6;
			agency -= 4;
		}
	}


	if (answers.has("4fedac54-8a83-4140-b321-b60daeaf1cc6")) {
		const choiceId = answers.get("4fedac54-8a83-4140-b321-b60daeaf1cc6").choice.id;
		let communication_24;
		if (choiceId == "Ct35iVhim4Wd") {
			communication_24 = 2;
			agency += 8;
			awareness += 4;
		} else if (choiceId == "3KcL5z6n2jqb") {
			communication_24 = 3;
			agency += 2;
		}  else if (choiceId == "NZgE6xypnKP1") {
			communication_24 = 4;
			learning += 2;
			agency += 4;
		}
		communication += communication_24;
	}


	if (answers.has("80690574-cedf-44bf-9159-3b739cff0484")) {
		const choiceId = answers.get("80690574-cedf-44bf-9159-3b739cff0484").choice.id;
		if (choiceId == "t2fsfIACazag") {
			communication += 2*communication_24;
			learning += 8;
			agency += 6;	
		} else if (choiceId == "10x52ytHSM9R") {
			communication += 4*communication_24;
			agency += 2;
		}  else if (choiceId == "UyZSATVV5F4j") {
			communication += 1*communication_24;
		}
	}


	if (answers.has("5e5aa725-bba8-439c-9341-ac180d31c53f")) {
		const choiceId = answers.get("5e5aa725-bba8-439c-9341-ac180d31c53f").choice.id;
		if (choiceId == "HACR0SCo0gl1") {
			learning -= 7;
			awareness -= 2;
		} else if (choiceId == "084ioeMz9Ern") {
			learning += 8;
			agency += 2;
		}  else if (choiceId == "7ezx8PsmUjg5") {
			communication += 4;
			learning += 6;
			agency += 2;
		}  else if (choiceId == "fpRzhzBdDUqg") {
			learning += 10;
			agency += 2;
		}
	}


	if (answers.has("7bf942ce-ad40-43ad-bdb5-96c5c4ebff4a")) {
		const choiceId = answers.get("7bf942ce-ad40-43ad-bdb5-96c5c4ebff4a").choice.id;
		if (choiceId == "3BBVlihmWVl9") {
			learning += 2;
		} else if (choiceId == "ymneHjV4ApjG") {
			learning += 2;
			agency += 2;
		}  else if (choiceId == "LIj7MJ14r9WR") {
			learning += 6;
			agency += 2;
		}  else if (choiceId == "Sp8c7KTRrCWX") {
			learning += 3;
			agency += 2;
		}
	}


	if (answers.has("c42ec71c-621b-4384-87a0-f733e03ab2dc")) {
		const choiceId = answers.get("c42ec71c-621b-4384-87a0-f733e03ab2dc").choice.id;
		if (choiceId == "K9WbKWgxP8Vi") {
			planning += 2;
			execution += 1;
			learning += 8;
			awareness += 12;
			estimations += 8;
		} else if (choiceId == "m0wW39oFbCLr") {
			planning += 1;
			learning += 3;
			awareness += 5;
			estimations += 4;
		}  else if (choiceId == "JrfnhHbriAuE") {
		}
	}


	if (answers.has("1ccce458-afc6-4113-82fc-60b0710ab6c7")) {
		const choiceId = answers.get("1ccce458-afc6-4113-82fc-60b0710ab6c7").choice.id;
		if (choiceId == "IfnmBJA8R5qh") {
			awareness -= 3;
		} else if (choiceId == "YL7Tt2k8iWuB") {
			learning += 2;
			awareness += 2;
		}  else if (choiceId == "IL4a6XbY6xMl") {
			learning += 6;
			agency += 2;
			awareness += 8;
		}  else if (choiceId == "1WHBmZgQTY2j") {
			learning += 4;
			agency += 2;
			awareness += 7;
		}
	}


	if (answers.has("f18021e2-5915-400c-b38a-4e3adcd95d85")) {
		const choiceId = answers.get("f18021e2-5915-400c-b38a-4e3adcd95d85").choice.id;
		if (choiceId == "zQ0Hpe6QyVbh") {
			awareness -= 8;
		} else if (choiceId == "RQ8RMgVGuJi6") {
			estimations += 2;
		}  else if (choiceId == "IDgSPsYfeaQy") {
			execution += 1;
			awareness += 8;
			estimations += 2;
		}
	}


	if (answers.has("aa9ad862-d4e8-474c-bd1d-1d1d3af8e170")) {
		const choiceId = answers.get("aa9ad862-d4e8-474c-bd1d-1d1d3af8e170").choice.id;
		if (choiceId == "x0nFZAhuwtpT") {
			planning += 1;
			execution += 2;
			awareness += 12;
			estimations += 14;
		} else if (choiceId == "JEWy328uIhtg") {
			execution += 1;
			awareness += 6;
			estimations += 4;
		}  else if (choiceId == "xxZLQLbRiuX6") {
		}
	}


	if (answers.has("3cd3c7b8-9499-42c9-b6dc-452fc8b31c48")) {
		const choiceId = answers.get("3cd3c7b8-9499-42c9-b6dc-452fc8b31c48").choice.id;
		if (choiceId == "laBiWzaUZjaC") {
			planning += 1;
			execution += 2;
			learning += 6;
			awareness += 12;
			estimations += 20;
		} else if (choiceId == "BtMp1neFZxWz") {
			execution += 1;
			learning += 3;
			estimations += 8;
		}  else if (choiceId == "2s9rghPVzYij") {
			awareness -= 4;
			estimations -= 3;
		}
	}


	if (answers.has("42e29c2e-e552-47ed-960c-f0ee3a556d3b")) {
		const choiceId = answers.get("42e29c2e-e552-47ed-960c-f0ee3a556d3b").choice.id;
		if (choiceId == "97DkVBtz0PJr") {
			estimations += 4;
		} else if (choiceId == "Krrysm9KT4c7") {
			planning += 1;
			estimations += 12;
		}  else if (choiceId == "iFbYkUdBWKmP") {
			estimations -= 4;
		}  else if (choiceId == "2a9XZeanOjGS") {
		}
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

		const now = new Date();
		const date = now.getFullYear()+'.'+(now.getMonth()+1)+'.'+now.getDate();
		const time = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
        const nowString = date + ' '+ time;

        var newrow = {
            planning, execution, communication, learning, agency, 
            awareness, estimations, name, email, response_id, 
            time: nowString
        };
        console.log("newrow", newrow);
        sheet.addRow(newrow, function( err, rows ){
            if (err) console.log(err);
            console.log(rows);

          });
      })
    })
}