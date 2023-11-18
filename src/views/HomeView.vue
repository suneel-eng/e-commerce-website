<script setup lang="ts">
import CategoryCard from "../components/CategoryCard.vue";
import SectionTitle from "../components/SectionTitle.vue";
import ProductCard from "../components/ProductCard.vue";
import CollectionCard from "@/components/CollectionCard.vue";
</script>

<template>
    <main class="w-100">

        <section>

            <div class="w-100">
                <img src="../assets/images/banner1.webp" alt="banner1" class="w-100 h-auto">
            </div>

            <div class="my-5 row align-items-center justify-content-center" style="gap: 30px;">
                <CategoryCard class="col-auto" v-for="num in 5" :key="num" />
            </div>

            <div class="my-5 row mx-5 g-4">
                <img src="../assets/images/image2.webp" alt="" class="col-5 flex-grow-1">
                <img src="../assets/images/image3.webp" alt="" class="col-5 flex-grow-1">
                <img src="../assets/images/image4.webp" alt="" class="col-3 flex-grow-1">
                <img src="../assets/images/image5.webp" alt="" class="col-3 flex-grow-1">
                <img src="../assets/images/image6.webp" alt="" class="col-3 flex-grow-1">
            </div>

        </section>

        <section class="mb-5 mx-5">

            <SectionTitle title="Trending T-Shirts" />

            <div class="row row-gap-5 justify-content-center">
                <ProductCard class="col-auto" v-for="num in 8" :key="num" />
            </div>

            <div class="mt-5 text-center">
                <button class="p-0 m-0 border-0 text-white py-2 px-4" style="background-color: rgba(119, 0, 21, 1);">VIEW
                    ALL</button>
            </div>

        </section>

        <section class="mb-5 mx-5">

            <SectionTitle title="Featured Products" />

            <div class="row row-gap-5 justify-content-center">
                <ProductCard class="col-auto" v-for="num in 8" :key="num" />
            </div>

            <div class="mt-5 text-center">
                <button class="p-0 m-0 border-0 text-white py-2 px-4" style="background-color: rgba(119, 0, 21, 1);">VIEW
                    ALL</button>
            </div>

        </section>

        <section>
            <img src="../assets/images/banner2.webp" alt="banner2" class="w-100 h-auto">
        </section>

        <section class="mb-5 mx-5">

            <SectionTitle title="New Products" />

            <div class="row row-gap-5 justify-content-center">
                <ProductCard class="col-auto" v-for="num in 4" :key="num" />
            </div>

            <div class="mt-5 text-center">
                <button class="p-0 m-0 border-0 text-white py-2 px-4" style="background-color: rgba(119, 0, 21, 1);">VIEW
                    ALL</button>
            </div>

        </section>

        <section class="mb-5 mx-5">

            <SectionTitle title="Best Selling Products" />

            <div class="row row-gap-5 justify-content-center">
                <ProductCard class="col-auto" v-for="num in 4" :key="num" />
            </div>

            <div class="mt-5 text-center">
                <button class="p-0 m-0 border-0 text-white py-2 px-4" style="background-color: rgba(119, 0, 21, 1);">VIEW
                    ALL</button>
            </div>

        </section>

        <section class="mx-5 my-5">
            <div class="row justify-content-center gap-3">
                <CollectionCard class="col-auto" v-for="num in 6" :key="num"/>
            </div>
        </section>

        <section>
            <img src="../assets/images/banner3.webp" alt="banner3" class="w-100 h-auto">
        </section>

        <section class="mx-5 my-5">
            <div class="row gap-4 mx-5">

                <div class="col py-5" style="background-color: #CCCEA7;">
                    <div class="row justify-content-center">
                        <img src="../assets/images/diamond.webp" alt="diamond" class="col-auto" width="172px" height="auto">
                    </div>
                    <div class="row justify-content-center mt-4">
                        <span class="col-auto fs-2">Hurry Up!</span>
                    </div>
                    <div class="row justify-content-center mt-4">
                        <span class="col-auto fs-1 fw-bold">85% OFF</span>
                    </div>
                    <div class="row justify-content-center mt-4">
                        <span class="col-auto fs-2">Sale</span>
                    </div>
                    <div class="row justify-content-center mt-4">
                        <button class="col-auto p-0 m-0 border bg-transparent py-2 px-4 text-light">SHOP NOW</button>
                    </div>
                </div>

                <div class="col py-5" style="background-color: #D6BEBE;">
                    <div class="row justify-content-center">
                        <img src="../assets/images/discount.webp" alt="diamond" class="col-auto" width="172px" height="auto">
                    </div>
                    <div class="row justify-content-center mt-4">
                        <span class="col-auto fs-2">Hurry Up!</span>
                    </div>
                    <div class="row justify-content-center mt-4">
                        <span class="col-auto fs-1 fw-bold">85% OFF</span>
                    </div>
                    <div class="row justify-content-center mt-4">
                        <span class="col-auto fs-2">Sale</span>
                    </div>
                    <div class="row justify-content-center mt-4">
                        <button class="col-auto p-0 m-0 border bg-transparent py-2 px-4 text-light">SHOP NOW</button>
                    </div>
                </div>

            </div>
        </section>

        <section>
            <div class="row align-items-center justify-content-center py-5 gap-5 position-relative policies" style="background-color: #F5F4F2;">
                <div class="col-auto text-center">
                    <img src="../assets/images/return.webp" alt="return" class="d-block m-auto">
                    <span class="d-block mt-3">7 Days Return</span>
                </div>
                <div class="col-auto">
                    <div class="vertical-divider"></div>
                </div>
                <div class="col-auto text-center">
                    <img src="../assets/images/quality.webp" alt="return" class="d-block m-auto">
                    <span class="d-block mt-3">Quality Products</span>
                </div>
                <div class="col-auto">
                    <div class="vertical-divider"></div>
                </div>
                <div class="col-auto text-center">
                    <img src="../assets/images/payment.webp" alt="return" class="d-block m-auto">
                    <span class="d-block mt-3">Safe Payment</span>
                </div>
                <div class="col-auto">
                    <div class="vertical-divider"></div>
                </div>
                <div class="col-auto text-center">
                    <img src="../assets/images/helpline.webp" alt="return" class="d-block m-auto">
                    <span class="d-block mt-3">24x7 Helpline</span>
                </div>
            </div>

            <div class="row py-5 my-5 w-75 m-auto subscribe">
                <div class="col">

                    <div class="row justify-content-center w-75 m-auto">
                        <span class="col-auto fs-1 text-light text-center">Subscribe to get updates on exciting offers & deals</span>
                    </div>

                    <form class="row w-50 m-auto g-0 mt-3">
                        <div class="col" style="background: rgba(255, 255, 255, 0.32);">
                            <input type="text" id="email-field" class="h-100 w-100 bg-transparent border-0 text-light px-3" placeholder="Enter your email" style="outline: none;">
                        </div>
                        <div class="col-auto">
                            <button class="p-0 m-0 border-0 bg-light px-4 py-3 fw-600" style="color: #770015">Subscribe</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>

    </main>
</template>

<style scoped>
    .policies {
        z-index: -1;
    }
    .policies::after, .policies::before {
        position: absolute;
        content: "";
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #770015;
    }
    .policies::before {
        bottom: -100px;
        left: -100px;
    }

    .policies::after {
        top: -100px;
        right: -100px;
    }

    .vertical-divider {
        width: 1px;
        background-color: #FFC7D1;
        height: 112px;
    }

    .subscribe {
        background: url(../assets/images/subscribe-bg.webp), linear-gradient(97.3deg, #AB001E -6.23%, #770015 105.09%);
    }

    #email-field::placeholder {
        color: #ffffff;
    }
</style>
