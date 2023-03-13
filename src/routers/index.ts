import { createRouter, createWebHashHistory } from 'vue-router';
import { LOGIN_URL, ROUTER_WHITE_LIST } from '@/config/config';
import { initDynamicRouter } from '@/routers/modules/dynamicRouter';
import { staticRouter, errorRouter } from '@/routers/modules/staticRouter';
import { store } from '@/stores';
// import {defineStore, createPinia } from 'pinia'
import NProgress from '@/config/nprogress';

// 引入 views 文件夹下所有 vue 文件（vite 读取方法）
// const modules = import.meta.glob("@/views/**/*.vue");

const router = createRouter({
	history: createWebHashHistory(),
	routes: [...staticRouter, ...errorRouter],
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
	console.log(to)
	console.log(from)
	const basicModule = store.getters.getModuleState('basicModule');

	// 1.NProgress 开始
	NProgress.start();

	// 2.动态设置标题
	// 待改

	// 3.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由并放行到登陆页
	if (to.path === LOGIN_URL) {
		if (basicModule.token) {
			return next(from.path);
		}
		resetRouter();
		return next();
	}

	// 4.判断访问页面是否在路由白名单地址中，如果存在直接放行
	// if (ROUTER_WHITE_LIST.includes(to.path)) {
	// 	return next();
	// }

	// 5.判断是否有 Token，没有重定向到 login
	// if (!basicModule.token) {
	// 	return next({ path: LOGIN_URL, replace: true });
	// }

	// {
	// 	"path": "/home/index",
	// 	"name": "home",
	// 	"component": "/home/index",
	// 	"meta": {
	// 		"icon": "HomeFilled",
	// 		"title": "首页",
	// 		"isLink": "",
	// 		"isHide": false,
	// 		"isFull": false,
	// 		"isAffix": true,
	// 		"isKeepAlive": true
	// 	}
	// }
	
	// 6.如果没有菜单列表，就重新请求菜单列表并添加动态路由
	if (ROUTER_WHITE_LIST.includes('/home/index')) {
		console.log('await initDynamicRouter();')
		await initDynamicRouter();
		return next();
	}

	// 7.正常访问页面
	next();
});

/**
 * @description 重置路由
 * */
export const resetRouter = () => {
	
	if (router.hasRoute('/abc')) {
		router.removeRoute('/abc');
	}
};

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
	NProgress.done();
});

/**
 * @description 路由跳转错误
 * */
router.onError((error) => {
	console.warn(console.warn('路由错误', error.message));
});



export default router;
