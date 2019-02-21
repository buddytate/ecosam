//import mongoose from 'mongoose';
//let Schema = mongoose.Schema;
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'REGION'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

export var user = {
	TableName: 'CUSTOMER_LIST',
	Item: {
		'CUSTOMER_ID' : {N: '001'},
		'CUSTOMER_NAME' : {S: 'Richard Roe'}
	}
};
