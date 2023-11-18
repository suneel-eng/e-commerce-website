<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
</script>

<template>
  <main class="w-100">
    <section class="mx-5 py-5">
      <div class="row">
        <div class="col-auto">
          <div class="product-preview">
            <img src="../assets/images/product.webp" class="w-100 h-100" alt="product-preview">
          </div>
          <div class="product-preview mt-2">
            <img src="../assets/images/product.webp" class="w-100 h-100" alt="product-preview">
          </div>
          <div class="product-preview mt-2">
            <img src="../assets/images/product.webp" class="w-100 h-100" alt="product-preview">
          </div>
          <div class="product-preview mt-2">
            <img src="../assets/images/product.webp" class="w-100 h-100" alt="product-preview">
          </div>
        </div>
        <div class="col-auto product-image">
          <img src="../assets/images/product.webp" class="w-100 h-100" alt="product">
        </div>

        <div class="col">
          <h1 class="fs-1" style="color: #770015">Men Henley Neck Full Sleeve Red Wine</h1>

          <p class="small w-75">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not only five centuries....</p>

          <span class="fs-4">&#8377;300</span>
          <span class="fs-5 ms-1 text-danger text-decoration-line-through">&#8377;1299</span>

          <span class="d-block mt-3">Available Sizes</span>

          <div class="d-flex align-items-center justify-content-start gap-2 mt-3">
            <button class="product-size d-block col-auto p-0 m-0 border bg-transparent fw-500">S</button>
            <button class="product-size d-block col-auto p-0 m-0 border bg-transparent fw-500">M</button>
            <button class="product-size d-block col-auto p-0 m-0 border bg-transparent fw-500">L</button>
            <button class="product-size d-block col-auto p-0 m-0 border bg-transparent fw-500">XL</button>
            <button class="product-size d-block col-auto p-0 m-0 border bg-transparent fw-500">XXL</button>
          </div>

          <div class="mt-3">
            <button
            @click="cartStore.addItemToCart"
            class="p-0 m-0 border-0 text-white py-2 px-4" style="background-color: rgba(119, 0, 21, 1);">ADD TO CART</button>

            <button class="p-0 m-0 ms-3 border-0 text-white py-2 px-4" style="background-color: rgba(119, 0, 21, 1);">ADD TO WISHLIST</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.product-image {
  width: 264px;
  height: 412px;
}

.product-preview {
  width: 52px;
  height: 80px;
}

.product-size {
  width: 36px;
  height: 36px;
}
</style>
