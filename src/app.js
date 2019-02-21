import express from 'express';
import bodyParser from 'body-parser';
const app = express();

// CONFIG
import {server} from './config/config';

// UTILS
import * as constants from './utils/constants';
import * as json from './utils/jsonHelper';

/* START ROUTES */
import router from './routes/api'

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api', router);
/* END ROUTES */

// ROUTE 404
app.use('*', (req, res) => {
	json.handleError(constants.CODE_404, res);
});

app.listen(server.port, () => {
	console.log("AccessDrive API listening on port: " + server.port);
});