<script setup>
import {
	Tabs,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";
import CodeMirror from "./CodeMirror.vue";
import { useAppStore } from "@/store";

const store = useAppStore();

const update = (file, data) => {
	store.code[file] = data;
};

const tabs = [
	["html", "index.html"],
	["css", "style.css"],
	["js", "main.js"],
];
</script>

<template>
	<div class="flex flex-col h-full">
		<Tabs default-value="html" v-model="store.tab">
			<TabsList class="w-full">
				<TabsTrigger v-for="tab in tabs" :key="tab[0]" :value="tab[0]">
					<span class="uppercase sm:hidden">{{ tab[0] }}</span>
					<span class="hidden sm:inline">{{ tab[1] }}</span>
				</TabsTrigger>
			</TabsList>
		</Tabs>
		<div class="flex-grow overflow-y-auto">
			<CodeMirror v-for="tab in tabs" :key="tab[0]" :class="store.tab !== tab[0] ? 'hidden' : ''" :file="tab[1]"
				:content="store.code[tab[0]]" :lang="tab[0]" @change="(d) => update(tab[0], d)" />
		</div>
	</div>
</template>
