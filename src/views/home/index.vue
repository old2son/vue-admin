<template>
	<h1>首页</h1>
	<div>{{ assemblySize || 0 }}</div>
	<div>{{ count.count || 0 }}</div>

	<div @click="changeb">大</div>
	<div @click="changeS">小</div>
	<div @click="changeD">默认</div>

</template>

<script lange="ts" setup>
import { store }  from '@/stores';
import { computed, reactive } from 'vue';
const count = reactive({ count: 0 });
const assemblySize = computed(() => store.getters.getModuleState('basicModule').assemblySize);

const changeb = () => {
	count.count++;
	store.dispatch('basicModule/setAssemblySizeSizeAsync', 'large');
};
const changeS = () => {
	count.count++;
	store.dispatch('basicModule/setAssemblySizeSizeAsync', 'small');
};
const changeD = () => {
	count.count++;
	store.dispatch('basicModule/setAssemblySizeSizeAsync', 'default');
};
</script>

<style scoped></style>
