import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';	// 按需导入 API
import Components from 'unplugin-vue-components/vite';	// 按需导入vue组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'; // ElementPlus
import { resolve } from 'path'; // 路径

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
	const env = loadEnv(mode, process.cwd());

	return {
		root: './', // 入口文件位置，如index.html
		base: './', // 启动服务公共路径
		publicDir: resolve('public'), // 静态资源路径
		mode: 'development', // 指定mode，会覆盖掉serve和build默认的mode
		resolve: {
			alias: {
				'@': resolve('src'), // 简化引用路径，用@代替
			},
		},
		plugins: [
			vue(),
			AutoImport({
				resolvers: [ElementPlusResolver()],
			}),
			Components({
				resolvers: [ElementPlusResolver()],
			}),
		],
		server: {
			host: '0.0.0.0', // host: '127.0.0.1',
			port: env.VITE_PORT,
			cors: true,
			proxy: { //服务器代理
				'/api': {
					target: 'https://mock.mengxuegu.com/mock/640ede50fe77f949bc0d6bdf',
					changeOrigin: true, // 代理时，host默认浏览器的host，为true，host为target的值
					rewrite: (path) => path.replace(/^\/api/, '/admin'), // 重写url路径
				},
			},
		},
		build: {
			outDir: 'dist',
			minify: 'esbuild',
			sourcemap: true,
		},
	};

	// if (command === 'serve') { // dev 配置
	// 	return {
	// 		root: './', // 入口文件位置，如index.html
	// 		base: './', // 启动服务公共路径
	// 		publicDir: resolve('public'), // 静态资源路径
	// 		mode: 'development', // 指定mode，会覆盖掉serve和build默认的mode
	// 		resolve: {
	// 			alias: {
	// 				'@': resolve('src'), // 简化引用路径，用@代替
	// 			},
	// 		},
	// 		plugins: [
	// 			vue(),
	// 			AutoImport({
	// 				resolvers: [ElementPlusResolver()],
	// 			}),
	// 			Components({
	// 				resolvers: [ElementPlusResolver()],
	// 			}),
	// 		],
	// 		server: {
	// 			host: '0.0.0.0', // host: '127.0.0.1',
	// 			port: 81,
	// 			cors: true,
	// 			proxy: { //服务器代理
	// 				'/api': {
	// 					target: 'http://localhost:81', // target: 'http://192.168.1.2:81/',
	// 					changeOrigin: true, // 代理时，host默认浏览器的host，为true，host为target的值
	// 					rewrite: (path) => path.replace(/^\/api/, '/api'), // 重写url路径
	// 				},
	// 			},
	// 		},
	// 	};
	// } else {
	// 	// command === 'build'
	// 	return {
	// 		// build 独有配置
	// 		root: './',
	// 		base: './',
	// 		publicDir: resolve('public'),
	// 		mode: 'production',
	// 		resolve: {
	// 			alias: {
	// 				'@': resolve('src'), // 简化引用路径，用@代替
	// 			},
	// 		},
	// 		plugins: [
	// 			vue(),
	// 			AutoImport({
	// 				resolvers: [ElementPlusResolver()],
	// 			}),
	// 			Components({
	// 				resolvers: [ElementPlusResolver()],
	// 			}),
	// 		],
	// 		build: {
	// 			outDir: 'dist',
	// 			minify: 'esbuild',
	// 			sourcemap: false,
	// 		},
	// 	};
	// }
});
