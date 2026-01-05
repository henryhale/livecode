<script setup>
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "./ui/tooltip";
import { Button } from "./ui/button";

defineProps(["text", "active", "mobile"]);

const emit = defineEmits(["trigger"]);
</script>

<template>
    <TooltipProvider :delay-duration="0">
        <Tooltip>
            <TooltipTrigger>
                <Button
                    variant="ghost"
                    size="icon"
                    @click="emit('trigger')"
                    :class="[
                        active ? 'text-blue-600' : 'text-muted-foreground',
                        mobile ? '' : 'hidden sm:inline-flex'
                    ]"
                >
                    <slot></slot>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{{ text }}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>
