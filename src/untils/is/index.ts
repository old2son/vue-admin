const toString = Object.prototype.toString;

/**
 * @description: 判断值是否未某个类型
 */
export function is(val: unknown, type: string) {
	return toString.call(val) == `[object ${type}]`;
}

/**
 * @description:  是否为函数
 */
export function isFunction<T = Function>(val: unknown): val is T {
    return is(val, 'Function');
}

/**
 * @description:  是否已定义
 */
export const isDef = <T = unknown>(val?: T): val is T => {
    return typeof val !== 'undefined';
}

export const isUnDef = <T = unknown>(val?: T): val is T => {
    return !isDef(val);
}

/**
 * @description:  是否为对象
 */
export const isObject = (val: any): val is Record<any, any> => {
    return val !== null && is(val, 'Object');
}

/**
 * @description:  是否为时间
 */
export function isDate(val: unknown): val is Date{
    return is(val, 'Date');
}

/**
 * @description:  是否为数值
 */
export function isNumber(val: unknown): val is number {
    return is(val, 'Number');
}

/**
 * @description:  是否为isAsyncFunction
 */
export function isAsyncFunction<T = any>(val: unknown): val is Promise<T> {
    return is(val, 'AsyncFunction');
}

/**
 * @description:  是否为promise
 */
// exprot function 
