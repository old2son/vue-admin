import { createStore } from 'vuex';
import { DEFAULT_PRIMARY } from '@/config/config';
import { GlobalState, ThemeConfigProps, AssemblySizeType } from './interface';

interface paramValue {
	userInfo?: any;
	assemblySize?: AssemblySizeType;
	language?: string;
	themeConfig?: ThemeConfigProps;
}

const basicModule = {
	namespaced: true,
	state: <GlobalState>{
		// token
		token: '',
		// userInfo
		userInfo: '',
		// element组件大小
		assemblySize: 'default',
		// language
		language: '',
		// themeConfig
		themeConfig: {
			// 当前页面是否全屏
			maximize: false,
			// 布局切换 ==>  纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns
			layout: 'vertical',
			// 默认 primary 主题颜色
			primary: DEFAULT_PRIMARY,
			// 深色模式
			isDark: false,
			// 灰色模式
			isGrey: false,
			// 色弱模式
			isWeak: false,
			// 折叠菜单
			isCollapse: false,
			// 面包屑导航
			breadcrumb: true,
			// 面包屑导航图标
			breadcrumbIcon: true,
			// 标签页
			tabs: true,
			// 标签页图标
			tabsIcon: true,
			// 页脚
			footer: true,
		},
	},
	getters: {},
	mutations: {
		setToken(state: any, token: paramValue) {
			state.token = token;
		},
		setUserInfo(state: any, userInfo: paramValue) {
			state.userInfo = userInfo;
		},
		setAssemblySizeSize(state: any, assemblySize: paramValue) {
			state.assemblySize = assemblySize;
		},
		updateLanguage(state: any, language: paramValue) {
			state.language = language;
		},
		setThemeConfig(state: any, themeConfig: paramValue) {
			state.themeConfig = themeConfig;
		},
	},
	actions: {
		setTokenAsync({ commit }: any) {
			commit('setToken');
		},
		setUserInfoAsync({ commit }: any) {
			commit('setUserInfo');
		},
		setAssemblySizeSizeAsync({ commit }: any, assemblySize: any) {
			commit('setAssemblySizeSize', assemblySize);
		},
		updateLanguageAsync({ commit }: any) {
			commit('updateLanguage');
		},
		setThemeConfigAsync({ commit }: any) {
			commit('setThemeConfig');
		},
	},
	modules: {},
};

export const store = createStore({
	state: <GlobalState>{},
	getters: {
		getModuleState: (state) => (name: string) => {	// 方法传参访问
			return state[name];
		}
	},
	mutations: {},
	actions: {},
	modules: {
		basicModule,
	},
});

