<script setup>
import Navbar from '@/components/Navbar.vue'
import { RouterView } from 'vue-router';
</script>

<template>
    <Navbar />
    <!-- RouterView is similar to outlet in React, which changes based on routerpath -->
    <RouterView/>
</template>
