<template>
  <div class="swiper-wrapper">
    <div class="col-9 col-md-11 mx-auto">
      <div class="swiper-container">
        <!-- 在 swipe 加載之前，先確定當中商品數據已經加載完成再渲染 swiper -->
        <template v-if="products.length > 0">
          <swiper :modules="modules" :navigation="navigation" :space-between="40" :loop="true"
            :autoplay="{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }"
            :breakpoints="swiperOptions.breakpoints" class="swiper p-16">
            <swiper-slide v-for="item in products" :key="item.id">
              <a href="#" class="card border-0 swiper-card" @click.prevent="getProduct(item.id)">
                <div
                  class="card-img-top swiper-img-overlay position-absolute top-0 w-100 d-flex justify-content-center align-items-center">
                  <i class="bi bi-search fs-1 text-light"></i>
                </div>
                <img :src="item.imageUrl" class="card-img-top swiper-img" :alt="item.title">
                <div class="card-body">
                  <h2 class="fs-5 text-center">{{ item.title }}</h2>
                  <p class="text-center fw-bold fs-6 mb-20">NT$ <span class="text-notoSans">
                      {{ item.price }}</span></p>
                  <div class="text-center">
                    <button type="button" class="btn btn-primary link-light px-44"
                      @click.prevent.stop="addCart(item.id)">加入購物車</button>
                  </div>
                </div>
              </a>
            </swiper-slide>
          </swiper>
        </template>
      </div>
    </div>
    <div class="swiper-button-prev"><i class="bi bi-arrow-left-circle-fill link-dark fs-2"></i></div>
    <div class="swiper-button-next"><i class="bi bi-arrow-right-circle-fill link-dark fs-2"></i></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '@/stores/useProductStore.js';
import { useCartStore } from '@/stores/useCartStore.js';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const props = defineProps(['products']);
const modules = ref([Navigation, Autoplay]);
const navigation = ref({
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
});
const swiperOptions = ref({
  breakpoints: {
    1200: {
      slidesPerView: 4
    },
    992: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    0: {
      slidesPerView: 1
    }
  }
});

const productStore = useProductStore();
const { getProducts, getProduct } = productStore;
const cartStore = useCartStore();
const { addCart } = cartStore;

onMounted(() => getProducts());
</script>

<style lang="scss" scoped>
.swiper {

  &-button-prev:after,
  &-button-next:after {
    content: '';
  }

  &-card {
    box-shadow: 5px 5px 10px rgba($color: #000000, $alpha: 0.2);

    &:hover {
      .swiper-img-overlay {
        opacity: 1;
        height: 150px;
      }
    }
  }

  &-img {
    height: 150px;

    &-overlay {
      background-color: rgba($color: #000000, $alpha: 0.5);
      opacity: 0;
    }
  }
}
</style>