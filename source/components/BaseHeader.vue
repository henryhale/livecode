<script setup>
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
	MenubarSub,
	MenubarSubTrigger,
	MenubarSubContent,
} from './ui/menubar'
import BaseLogo from './BaseLogo.vue'
import IconButton from './IconButton.vue'
import { ArrowUpRightIcon, PanelLeftIcon, PanelRightIcon, Columns2Icon, Rows2Icon } from 'lucide-vue-next'
import { useAppStore } from '@/store'
import { useFullscreen } from '@/helpers/fullscreen'
import { onMounted, onBeforeUnmount } from 'vue'

const fullscreen = useFullscreen()
const store = useAppStore()

const switchView = (v) => store.layout = v
const newTab = () => window.open(window.location.href)
const closeTab = () => window.close()
const reloadTab = () => window.location.reload()

function newTabHandler(ev) {
	if (ev.key?.toLowerCase() === 'n' && ev.ctrlKey && ev.altKey) {
		newTab()
	}
}

onMounted(() => {
	document.addEventListener('keydown', newTabHandler, false)
})

onBeforeUnmount(() => {
	document.removeEventListener('keydown', newTabHandler)
})

</script>

<template>
	<div class="flex border-b">
		<BaseLogo />
		<Menubar class="flex-grow rounded-none border-none">
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem @click="store.saveSession()">
						Save <MenubarShortcut>Ctrl+S</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem @click="newTab()">
						New Window <MenubarShortcut>Ctrl+Alt+N</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem @click="closeTab()">
						Close <MenubarShortcut>Ctrl+W</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>View</MenubarTrigger>
				<MenubarContent>
					<MenubarSub>
						<MenubarSubTrigger>Layout</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem @click="switchView('left')">Editor - only</MenubarItem>
							<MenubarItem @click="switchView('right')">Preview - only</MenubarItem>
							<MenubarItem @click="switchView('column')">Column View</MenubarItem>
							<MenubarItem @click="switchView('row')" class="hidden sm:flex">Row View</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarItem @click="reloadTab()">
						Reload <MenubarShortcut>Ctrl+R</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem @click="fullscreen.toggle()">
						Toggle Fullscreen <MenubarShortcut>F11</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Help</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<a class="flex-grow" target="_blank" href="https://github.com/henryhale/livecode/issues">Report
							Issue</a>
						<ArrowUpRightIcon class="size-4 opacity-40" />
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						<a class="flex-grow" target="_blank"
							href="https://github.com/henryhale/livecode/blob/main/LICENSE.md">View
							License</a>
						<ArrowUpRightIcon class="size-4 opacity-40" />
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						<a class="flex-grow" target="_blank"
							href="https://github.com/henryhale/livecode#readme">About</a>
						<ArrowUpRightIcon class="size-4 opacity-40" />
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
		<div class="space-x-2 flex items-center">
			<IconButton text="Editor" :mobile="true" :active="store.layout === 'left'"
				@trigger="() => store.layout = 'left'">
				<PanelLeftIcon />
			</IconButton>
			<IconButton text="Column view" :mobile="false" :active="store.layout === 'column'"
				@trigger="() => store.layout = 'column'">
				<Columns2Icon />
			</IconButton>
			<IconButton text="Row view" :mobile="true" :active="store.layout === 'row'"
				@trigger="() => store.layout = 'row'">
				<Rows2Icon />
			</IconButton>
			<IconButton text="Preview" :mobile="true" :active="store.layout === 'right'"
				@trigger="() => store.layout = 'right'">
				<PanelRightIcon />
			</IconButton>
		</div>
	</div>
</template>