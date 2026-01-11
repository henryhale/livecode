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
    MenubarSubContent
} from "./ui/menubar";
import BaseLogo from "./BaseLogo.vue";
import IconButton from "./IconButton.vue";
import {
    ArrowUpRightIcon,
    PanelLeftIcon,
    PanelRightIcon,
    Columns2Icon,
    Rows2Icon
} from "lucide-vue-next";
import { useAppStore } from "@/store";
import { useFullscreen } from "@/helpers/fullscreen";
import { onMounted, onBeforeUnmount } from "vue";
import { exportAsPage, exportAsZip } from "@/helpers/code";
import { SunIcon } from "lucide-vue-next";
import { MoonIcon } from "lucide-vue-next";

const fullscreen = useFullscreen();
const store = useAppStore();

const switchTheme = (v) => (store.theme = v);
const switchView = (v) => (store.layout = v);
const newTab = () =>
    window.open(window.location.href + `?session=${Date.now().toString(32)}`);
const closeTab = () => window.close();
const reloadTab = () => window.location.reload();
const downloadAsPage = () => exportAsPage(store.code);
const downloadAsZip = () => exportAsZip(store.code);

function newTabHandler(ev) {
    if (ev.key?.toLowerCase() === "n" && ev.ctrlKey && ev.altKey) {
        newTab();
    }
}

onMounted(() => {
    document.addEventListener("keydown", newTabHandler, false);
});

onBeforeUnmount(() => {
    document.removeEventListener("keydown", newTabHandler);
});
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
                    <MenubarSub>
                        <MenubarSubTrigger>Export As</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem @click="downloadAsPage()"
                                >Single page (.html)</MenubarItem
                            >
                            <MenubarItem @click="downloadAsZip()"
                                >Zip (.zip)</MenubarItem
                            >
                        </MenubarSubContent>
                    </MenubarSub>
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
                        <MenubarSubTrigger>Theme</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem @click="switchTheme('light')">
                                Light
                                <MenubarShortcut>
                                    <SunIcon class="size-4" />
                                </MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem @click="switchTheme('dark')">
                                Dark
                                <MenubarShortcut>
                                    <MoonIcon class="size-4" />
                                </MenubarShortcut>
                            </MenubarItem>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSub>
                        <MenubarSubTrigger>Layout</MenubarSubTrigger>
                        <MenubarSubContent>
                            <MenubarItem @click="switchView('left')"
                                >Editor - only</MenubarItem
                            >
                            <MenubarItem @click="switchView('right')"
                                >Preview - only</MenubarItem
                            >
                            <MenubarItem @click="switchView('column')"
                                >Column View</MenubarItem
                            >
                            <MenubarItem
                                @click="switchView('row')"
                                class="hidden sm:flex"
                                >Row View</MenubarItem
                            >
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
                        <a
                            class="flex-grow"
                            target="_blank"
                            href="https://github.com/henryhale/livecode/issues"
                            >Report Issue</a
                        >
                        <ArrowUpRightIcon class="size-4 opacity-40" />
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        <a
                            class="flex-grow"
                            target="_blank"
                            href="https://github.com/henryhale/livecode/blob/main/LICENSE.md"
                            >View License</a
                        >
                        <ArrowUpRightIcon class="size-4 opacity-40" />
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                        <a
                            class="flex-grow"
                            target="_blank"
                            href="https://github.com/henryhale/livecode#readme"
                            >About</a
                        >
                        <ArrowUpRightIcon class="size-4 opacity-40" />
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
        <div class="space-x-2 flex items-center">
            <IconButton
                text="Editor"
                :mobile="true"
                :active="store.layout === 'left'"
                @trigger="() => (store.layout = 'left')"
            >
                <PanelLeftIcon />
            </IconButton>
            <IconButton
                text="Column view"
                :mobile="false"
                :active="store.layout === 'column'"
                @trigger="switchView('column')"
            >
                <Columns2Icon />
            </IconButton>
            <IconButton
                text="Row view"
                :mobile="true"
                :active="store.layout === 'row'"
                @trigger="switchView('row')"
            >
                <Rows2Icon />
            </IconButton>
            <IconButton
                text="Preview"
                :mobile="true"
                :active="store.layout === 'right'"
                @trigger="switchView('right')"
            >
                <PanelRightIcon />
            </IconButton>
        </div>
    </div>
</template>
