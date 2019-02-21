import * as crypto from 'crypto-js';

export function resolve(path, obj) {
	return path.split('.').reduce((prev, curr) => {
		return prev ? prev[curr] : undefined
	}, obj || self)
}
