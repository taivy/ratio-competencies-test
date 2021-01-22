import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

import routes from './routes';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());
app.use('/', routes);


const port = process.env.PORT || 9000;
app.listen(port);
console.log('Node + Express REST API server started on port: ' + port);

module.exports = app;
