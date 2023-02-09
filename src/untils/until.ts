import { isArray } from '@/untils/is/'
import { stringify } from 'querystring';

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
