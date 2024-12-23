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
import SplitView from './icons/SplitView.vue'
import SideView from './icons/SideView.vue'
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
	<Menubar class="rounded-none">
		<BaseLogo />
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
					<a target="_blank" href="https://github.com/henryhale/livecode/issues">Report Issue</a>
				</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>
					<a target="_blank" href="https://github.com/henryhale/livecode/blob/main/LICENSE.md">View
						License</a>
				</MenubarItem>
				<MenubarSeparator />
				<MenubarItem>
					<a target="_blank" href="https://github.com/henryhale/livecode#readme">About</a>
				</MenubarItem>
			</MenubarContent>
		</MenubarMenu>
		<div class="flex-grow"></div>
		<IconButton text="Editor" :mobile="true" :active="store.layout === 'left'"
			@trigger="() => store.layout = 'left'">
			<SideView />
		</IconButton>
		<IconButton text="Row view" :mobile="false" :active="store.layout === 'row'"
			@trigger="() => store.layout = 'row'">
			<SplitView />
		</IconButton>
		<IconButton text="Column view" :mobile="true" :active="store.layout === 'column'"
			@trigger="() => store.layout = 'column'">
			<SplitView class="rotate-90" />
		</IconButton>
		<IconButton text="Preview" :mobile="true" :active="store.layout === 'right'"
			@trigger="() => store.layout = 'right'">
			<SideView class="rotate-180" />
		</IconButton>
	</Menubar>
</template>