import {calcScores, normalizeTestResults, getTestResultsChart} from './helpers';


const data = []



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
