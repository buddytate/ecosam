import * as constants from './constants';
import {resolve} from './utils';

const KEY = "MESSAGE_";

export function handleError(code, res) {
	let message = resolve(KEY + code, constants);
	res.status(code).json(formatJson(code, message, null));
}

export function sendResponse(code, datas, res) {
	let message = resolve(KEY + code, constants);
	res.status(code).json(formatJson(code, message, datas));
}

function formatJson(code, message, data) {
	let json = { code, message };
	if (data != null && data instanceof Array)
		json.datas = data;
	else if (data != null && data instanceof Object)
		json.data = data;
	return json;
}