// import {calcScores, normalizeTestResults, getTestResultsChart, saveResults} from './helpers';
// import * as helpers from './helpers';
var helpers = require('./helpers');
const fetch = require('node-fetch');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv


const resp_id = argv.respId

async function main() {
	const api_token = "5Q3ce5nCVUeNPij4V3KsuXpGd8skNLAVjxZ2mpouSJuc"
	const form_id = "Edtmnimf"
	const url = `https://api.typeform.com/forms/${form_id}/responses?included_response_ids=${resp_id}`

	const headers={
		"Authorization": "Bearer " + api_token
	}

	let response = await fetch(url, {headers});

	console.log(response)

	let data = await response.json(); 


	/*
	fetch(url, {headers}).then((resp => {
	}))
	*/


	const answers = data["items"][0]["answers"];
	const scores = helpers.calcScores(answers);
	const name = answers[0]["text"];
	const email = answers[36]["text"];
	const response_id = data["items"][0]["response_id"];
	const referer = data["items"][0]["metadata"]["referer"];

	console.log("scores", scores);
	const normalizedScores = helpers.normalizeTestResults(scores);
	let [planning, execution, communication, learning, agency, awareness, estimations] = normalizedScores;
    helpers.updateSpreadsheet(planning, execution, communication, learning, agency, awareness, estimations, name, email, response_id);
	console.log("normalized [planning, execution, communication, learning, agency, awareness, estimations]",  [planning, execution, communication, learning, agency, awareness, estimations]);
	helpers.saveResults(normalizedScores, name, email, response_id, referer);
}

main()