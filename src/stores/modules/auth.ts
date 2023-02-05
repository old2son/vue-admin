import { createStore } from 'vuex';

export const AuthStore = createStore({
	state: {
        // 当前页面的 router name，用来做按钮权限筛选
        routeName: '',
        // 按钮权限列表
        authButtonList: {},
        // 菜单权限列表
        authMenuList: [],
    },
	getters: {
        // 按钮权限列表
        authButtonListGet: (state) => {
            state.authButtonList;
        },
        // 后端返回的菜单列表 ==> 这里没有经过任何处理
        authMenuListGet: (state) => {
            state.authMenuList;
        },
        // 后端返回的菜单列表 ==> 左侧菜单栏渲染，需要去除 isHide == true
        showMenuListGet: () => {
            // decodeURI
        },
        
    },
	mutations: {},
	actions: {},
	modules: {},
});