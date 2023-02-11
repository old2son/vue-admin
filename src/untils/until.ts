import { isArray } from '@/untils/is/'

/**
 * @description 获取localStorage
 * @param {String} key Storage名称
 * @return string
 */
export function loacalGet(key: string) {
    const value = window.localStorage.getItem(key);
    try {
        // return JSON.parse(window.localStorage.getItem(key) || '');
        return JSON.parse(window.localStorage.getItem(key) as string );
    }
    catch (error) {
        return value;
    }
}

/**
 * @description 存储localStorage
 * @param {String} key Storage名称
 * @param {Any} value Storage值
 * @return void
 */
export function localSet(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

/**
 * @description 清除localStorage
 * @param {String} key Storage名称
 * @return void
 */
export function localRemove() {
    window.localStorage.clear();
}

/**
 * @description 判断数据类型
 * @param {Any} val 需要判断类型的数据
 * @return string
 */
export function isType(val: any) {
    if (val === null) {
        return 'null';
    }

    if (typeof val !== 'object') {
        return typeof val;
    }
    else {
        return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
    }
}

/**
 * @description 生成唯一 uuid
 * @return string
 */
export function generateUUID() {
	if (typeof crypto === 'object') {
		if (typeof crypto.randomUUID === 'function') {
			return crypto.randomUUID();
		}
		if (typeof crypto.getRandomValues === 'function' && typeof Uint8Array === 'function') {
			const callback = (c: any) => {
				const num = Number(c);
				return (num ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))).toString(16);
			};
			return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, callback);
		}
	}
	let timestamp = new Date().getTime();
	let performanceNow = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		let random = Math.random() * 16;
		if (timestamp > 0) {
			random = (timestamp + random) % 16 | 0;
			timestamp = Math.floor(timestamp / 16);
		} else {
			random = (performanceNow + random) % 16 | 0;
			performanceNow = Math.floor(performanceNow / 16);
		}
		return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16);
	});
}