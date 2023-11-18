<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';
</script>

<template>
    <Header/>
    <Sidebar/>
    <div style="margin-top: 136px;">
        <RouterView />
    </div>
    <Footer/>
</template>
