<script setup>
import { defineProps } from 'vue'

defineProps({
    bg: {
        type: String,
        default: 'bg-gray-100',
    },
})
</script>

<template>
    <!-- putting all into backtick refers to JS -->
    <div :class="`${bg} p-6 rounded-lg shadow-md`">
        <!-- Slot in Vue is similar to children in React -->
        <slot></slot>
    </div>
</template>
