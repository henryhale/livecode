<script setup>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseView from "@/components/BaseView.vue";
import AppPreview from "@/components/AppPreview.vue";
import AppEditor from "@/components/AppEditor.vue";
import Toaster from "@/components/ui/toast/Toaster.vue";
</script>

<template>
    <BaseHeader />
    <BaseView>
        <template #left>
            <AppEditor />
        </template>
        <template #right>
            <AppPreview />
        </template>
    </BaseView>
    <Toaster />
</template>
