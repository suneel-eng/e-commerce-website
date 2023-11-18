<script setup lang="ts">
import CartFilled from './icons/CartFilled.vue';
import HeartFilled from './icons/HeartFilled.vue';
import ShareFilled from './icons/ShareFilled.vue';
import { useRouter } from 'vue-router';
import { useCartStore } from "@/stores/cart";
import { onMounted, onUpdated, ref } from "vue";

const router = useRouter();
const store = useCartStore();
const mouseHovered = ref(false);

function goToProductDetailsPage() {
    router.push({ name: "product" });
}

function addToCart() {
    store.addItemToCart();
}
</script>

<template>
    <div class="product" @click="goToProductDetailsPage">

        <div class="product-image position-relative" @mouseenter="mouseHovered = true" @mouseleave="mouseHovered = false">
            <img src="../assets/images/product.webp" class="w-100 h-100" alt="product">

            <div class="position-absolute w-100 h-100 product-hover-options overflow-hidden" v-show="mouseHovered">
                <Transition name="product-options">
                    <div class="w-100 h-100 d-flex align-items-center justify-content-center gap-3" v-if="mouseHovered">
                        <button
                        @click.stop="addToCart"
                        title="Add to cart"
                        class="border-0 rounded-circle bg-light d-flex align-items-center justify-content-center position-relative" style="width: 54px; height: 54px;">
                            <CartFilled/>
                        </button>
                        <button title="Add to favourites" class="border-0 rounded-circle bg-light d-flex align-items-center justify-content-center" style="width: 54px; height: 54px;">
                            <HeartFilled/>
                        </button>
                        <button title="Share product" class="border-0 rounded-circle bg-light d-flex align-items-center justify-content-center" style="width: 54px; height: 54px;">
                            <ShareFilled/>
                        </button>
                    </div>
                </Transition>
            </div>
        </div>

        <div class="w-75 m-auto mt-1 text-center">
            <span style="font-size: 14px;">Men Henley Neck Full Sleeve Red Wine</span>
        </div>

        <div class="d-flex align-items-center justify-content-center mt-1">
            <span class="fw-bold">&#8377;300</span>
            <span class="text-danger small text-decoration-line-through ms-1">&#8377;1299</span>
        </div>

        <div class="d-flex align-items-center justify-content-center gap-2 mt-3">
            <button class="product-size d-block col-auto p-0 m-0 border bg-transparent fw-500">S</button>
            <button class="product-size d-block col-auto p-0 m-0 border bg-transparent fw-500">M</button>
            <button class="product-size d-block col-auto p-0 m-0 border bg-transparent fw-500">L</button>
            <button class="product-size d-block col-auto p-0 m-0 border bg-transparent fw-500">XL</button>
            <button class="product-size d-block col-auto p-0 m-0 border bg-transparent fw-500">XXL</button>
        </div>

    </div>
</template>

<style scoped>
    .product {
        cursor: pointer;
    }
    .product-image {
        width: 264px;
        height: 412px;
        /* overflow: hidden; */
    }

    .product-size {
        width: 36px;
        height: 36px;
    }

    .product-hover-options {
        top: 0;
        left: 0;
        background: rgba(31, 31, 31, 0.30);
        backdrop-filter: blur(5px);
    }

    /* .product-image:hover .product-hover-options {
        display: block !important;
    } */

    .product-options-enter-from {
        transform: translateY(50%);
    }

    .product-options-enter-to {
        transform: translateY(0%);
    }

    .product-options-enter-active {
        transition: transform 100ms linear;
    }
</style>