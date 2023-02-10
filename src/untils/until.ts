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