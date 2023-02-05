<template>
	<el-config-provider :locale="locale" :size="assemblySize" :button="config">
		<router-view></router-view>
	</el-config-provider>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
import { store } from '@/stores';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';

const language = ref('zh-cn');
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en));
const config = reactive({ autoInsertSpace: true });

// 配置全局组件大小
const assemblySize = computed(() => store.getters.getModuleState('basicModule').assemblySize);
</script>
