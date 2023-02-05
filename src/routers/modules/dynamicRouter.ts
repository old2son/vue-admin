import router from '@/routers/index';
import { LOGIN_URL } from '@/config/config';
import { ElNotification } from 'element-plus';

// 引入 views 文件夹下所有 vue 文件（vite 读取方法）
const modules = import.meta.glob('@/views/**/*.vue');

/**
 * 初始化动态路由
 */
export const initDynamicRouter = async () => {
	try {
		if (modules.url) {
			ElNotification({
				title: '无权限访问',
				message: '当前账号无任何菜单权限，请联系系统管理员！',
				type: 'warning',
				duration: 3000,
			});
		}

	} 
	catch (error) {
		// 💢 当按钮 || 菜单请求出错时，重定向到登陆页
		router.replace(LOGIN_URL);
		return Promise.reject(error);
	}
};
