<script setup lang="ts">
    import { useSidebarStore } from '@/stores/sidebar';

    const store = useSidebarStore();
</script>

<template>
    <Transition name="sidebar">
        <div v-if="store.isSidebarVisible" class="position-fixed vh-100 bg-light" id="sidebar">
        <ul class="p-0 menu-group">
            <li class="border-bottom">
                <button class="border-0 py-3 w-100">Filter Item 1</button>
            </li>
            <li class="border-bottom">
                <button class="border-0 py-3 w-100">Filter Item 2</button>
            </li>
            <li class="border-bottom">
                <button class="border-0 py-3 w-100">Filter Item 3</button>
            </li>
            <li class="border-bottom">
                <button class="border-0 py-3 w-100">Filter Item 4</button>
            </li>
            <li class="border-bottom">
                <button class="border-0 py-3 w-100">Filter Item 5</button>
            </li>
        </ul>
    </div>
    </Transition>
</template>

<style scoped>
    #sidebar {
        width: 300px;
        top: 0;
        left: 0;
        z-index: 100;
    }

    .menu-group {
        margin-top: 136px;
        list-style-type: none;
    }

    .sidebar-enter-from {
        transform: translateX(-300px);
    }

    .sidebar-enter-to {
        transform: translate(0);
    }

    .sidebar-leave-from {
        transform: translate(0);
    }

    .sidebar-leave-to {
        transform: translate(-300px);
    }

    .sidebar-enter-active, .sidebar-leave-active {
        transition: transform 200ms linear;
    }
</style>