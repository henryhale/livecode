<script setup>
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from './ui/resizable'
import { ref, watchEffect } from 'vue'
import { useAppStore } from '@/store'

const store = useAppStore()

const panelLeft = ref()
const panelRight = ref()

watchEffect(() => {
	const view = store.layout
	if (view === 'left') viewLeft()
	else if (view === 'right') viewRight()
	else splitView()
})

function splitView() {
	panelLeft.value?.expand()
	panelRight.value?.expand()
}

function viewLeft() {
	!panelRight.value?.isCollapsed && panelRight.value?.collapse()
}

function viewRight() {
	!panelLeft.value?.isCollapsed && panelLeft.value?.collapse()
}
</script>

<template>
	<ResizablePanelGroup id="demo-group-1" direction="horizontal" class="bg-yello-300 box">
		<ResizablePanel ref="panelLeft" id="demo-panel-1" :default-size="50" collapsible :collapsed-size="0"
			:min-size="35" class="overflow-y-auto">
			<slot name="left"></slot>
		</ResizablePanel>
		<ResizableHandle id="demo-handle-1" class="hover:w-1" />
		<ResizablePanel ref="panelRight" id="demo-panel-2" :default-size="50" collapsible :collapsed-size="0"
			:min-size="35" class="overflow-y-auto">
			<slot name="right"></slot>
		</ResizablePanel>
	</ResizablePanelGroup>
</template>

<style scoped>
.box {
	height: calc(100dvh - 40px) !important;
}
</style>