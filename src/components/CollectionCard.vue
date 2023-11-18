<template>
    <div class="collection-card position-relative">
        <img src="../assets/images/collection.webp" alt="collection" class="w-100 h-100">
        <div class="position-absolute collection-card__name py-3 d-flex align-items-center justify-content-center">
            <span class="text-light fw-600 fs-5">Streetwear collections</span>
        </div>
    </div>
</template>

<style scoped>
    .collection-card {
        width: 360px;
        height: 432px;
        background-color: #06B8A6;
        z-index: -1;
    }

    .collection-card__name {
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(111deg, rgba(255, 255, 255, 0.40) -8.95%, rgba(255, 255, 255, 0.01) 114%);
        backdrop-filter: blur(32px);
        z-index: 0;
    }
</style>