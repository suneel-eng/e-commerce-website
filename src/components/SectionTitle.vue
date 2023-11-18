<script setup lang="ts">
    const props = defineProps({
        title: {
            type: String,
            required: false,
            default: "Title"
        }
    });
</script>

<template>
    <div class="section-title py-5 position-relative">
            <div class="text-center">
                <span class="h1 px-3 text-center bg-white">{{  props.title }}</span>
            </div>
        </div>
</template>

<style scoped>
    .section-title{
        z-index: -1;
    }
    .section-title::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 1px;
        background-color: #FFC7D1;
        width: 100%;
        z-index: -1;
    }

</style>