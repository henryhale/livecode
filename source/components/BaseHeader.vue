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
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip'
import BaseLogo from './BaseLogo.vue'
import { Button } from './ui/button'
import SplitView from './icons/SplitView.vue'
import SideView from './icons/SideView.vue'
import { useAppStore } from '@/store'
import { useFullscreen } from '@/helpers/fullscreen';

const fullscreen = useFullscreen()
const store = useAppStore()

const switchView = (v) => store.layout = v
const newTab = () => window.open(window.location.href)
const closeTab = () => window.close()
const reloadTab = () => window.location.reload()

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
						<MenubarItem @click="switchView('split')" class="hidden sm:inline-block">Split View
						</MenubarItem>
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
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Button variant="ghost" size="icon" @click="store.layout = 'left'">
						<SideView />
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Editor</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Button variant="ghost" size="icon" @click="store.layout = 'split'" class="hidden sm:flex">
						<SplitView />
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Split view</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>
					<Button variant="ghost" size="icon" @click="store.layout = 'right'">
						<SideView class="rotate-180" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Preview</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	</Menubar>
</template>