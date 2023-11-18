<script setup lang="ts">
    import Facebook from './icons/Facebook.vue';
    import Twitter from "./icons/Twitter.vue";
    import Instagram from "./icons/Instagram.vue";
    import Linkedin from './icons/Linkedin.vue';
    import Pinterest from "./icons/Pinterest.vue";
    import Location from "./icons/Location.vue";
    import Phone from './icons/Phone.vue';
    import Email from './icons/Email.vue';
</script>

<template>
    <div class="border-top">

        <div class="row mx-5 py-5 justify-content-between">
            <div class="col-4">
                <span class="d-block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries....</span>

                <div class="d-flex align-items-center mt-3 gap-2">
                    <div class="col-auto">
                        <Facebook/>
                    </div>
                    <div class="col-auto">
                        <Twitter/>
                    </div>
                    <div class="col-auto">
                        <Instagram/>
                    </div>
                    <div class="col-auto">
                        <Linkedin/>
                    </div>
                    <div class="col-auto">
                        <Pinterest/>
                    </div>
                </div>
            </div>

            <div class="col-auto">
                <span class="fs-5 d-block" style="color: #770015">ONLINE SHOPPING</span>

                <ul style="list-style-type: none;" class="p-0">
                    <li class="mt-3">
                        <a href="#" class="text-decoration-none text-dark">Men's T-Shirts</a>
                    </li>
                    <li class="mt-3">
                        <a href="#" class="text-decoration-none text-dark">Women's Wear</a>
                    </li>
                    <li class="mt-3">
                        <a href="#" class="text-decoration-none text-dark">Winter Collections</a>
                    </li>
                    <li class="mt-3">
                        <a href="#" class="text-decoration-none text-dark">Hooded T-Shirts</a>
                    </li>
                    <li class="mt-3">
                        <a href="#" class="text-decoration-none text-dark">Streetwear Collections</a>
                    </li>
                </ul>
            </div>

            <div class="col-auto">
                <span class="fs-5 d-block" style="color: #770015">CUSTOMER POLICIES</span>

                <ul style="list-style-type: none;" class="p-0">
                    <li class="mt-3">
                        <a href="#" class="text-decoration-none text-dark">About Us</a>
                    </li>
                    <li class="mt-3">
                        <a href="#" class="text-decoration-none text-dark">Terms & Conditions</a>
                    </li>
                    <li class="mt-3">
                        <a href="#" class="text-decoration-none text-dark">Shipping & Returns Policy</a>
                    </li>
                    <li class="mt-3">
                        <a href="#" class="text-decoration-none text-dark">Cancellation & Refund Policy</a>
                    </li>
                    <li class="mt-3">
                        <a href="#" class="text-decoration-none text-dark">Contact Us</a>
                    </li>
                </ul>
            </div>

            <div class="col-3">
                <span class="fs-5 d-block" style="color: #770015">STORE INFORMATION</span>

                <ul style="list-style-type: none;" class="p-0">
                    <li class="mt-3 row g-0 align-items-start gap-2">
                        <div class="col-auto mt-1">
                            <Location/>
                        </div>
                        <div class="col">
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                        </div>
                    </li>
                    <li class="mt-3 row g-0 align-items-center gap-2">
                        <div class="col-auto">
                            <Phone/>
                        </div>
                        <div class="col">
                            <span>Call Us: 1234567890</span>
                        </div>
                    </li>
                    <li class="mt-3 row g-0 align-items-center gap-2">
                        <div class="col-auto">
                            <Email/>
                        </div>
                        <div class="col">
                            <span>Email Us: info@yourmail.com</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="row align-items-center justify-content-center" id="footer-bottom">
            <div class="col-auto">
                <span class="text-light">©2022-23 Powered By dummy team</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
#footer-bottom {
    height: 68px;
    background-color: #20050A;
}
</style>