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