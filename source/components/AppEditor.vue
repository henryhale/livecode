<script setup>
import { Button } from '@/components/ui/button';
import CodeMirror from "./CodeMirror.vue";
import { useAppStore } from "@/store";
import { ref } from 'vue'

const store = useAppStore();

const update = (file, data) => {
	store.code[file] = data;
};

const currentTab = ref('html')

const tabs = [
	["html", "index.html"],
	["css", "style.css"],
	["js", "main.js"],
];
</script>

<template>
	<div class="flex flex-col h-full relative">
		<div
			class="flex items-center flex-none pl-5 sm:pl-6 pr-4 lg:pr-6 border-b overflow-x-auto">
			<div class="flex">
				<Button 
					v-for="tab in tabs" :key="tab[0]"
					variant="ghost"
					@click="currentTab = tab[0]"
					:class="tab[0] === currentTab ? 'text-blue-500' : 'text-muted-foreground'"
					class="relative rounded-none text-sm leading-6 font-semibold">
					<span class="absolute bottom-0 inset-x-0 bg-blue-500 h-0.5 rounded-full transition-opacity duration-150" :class="{'opacity-0': tab[0] !== currentTab}"></span>
					<span class="uppercase sm:hidden">{{ tab[0] }}</span>
					<span class="hidden sm:inline">{{ tab[1] }}</span>
				</Button>
			</div>
		</div>
		<div class="flex-grow overflow-y-auto">
			<CodeMirror v-for="tab in tabs" :key="tab[0]" :class="currentTab !== tab[0] ? 'hidden' : ''" :file="tab[1]"
				:content="store.code[tab[0]]" :lang="tab[0]" @change="(d) => update(tab[0], d)" />
		</div>
	</div>
</template>
