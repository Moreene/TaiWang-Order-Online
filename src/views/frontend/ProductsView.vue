<template>
  <LoadingComponent v-model:active="isLoading" />
  <BannerComponent>線上訂餐 / Menu</BannerComponent>
  <!-- 商品 -->
  <div class="container">
    <div class="py-72 py-lg-90">
      <!-- 導航列 -->
      <div class="d-flex flex-column flex-lg-row justify-content-lg-between mb-48">
        <ul class="nav nav-underline flex-nowrap text-nowrap overflow-x-auto mb-16 mb-lg-0" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link fs-6" id="all-tab" type="button" role="tab" aria-controls="all"
              data-bs-target="#all" aria-selected="true" @click="goTo('products', $event)"
              :class="{ 'active': $route.path === '/products' }">所有餐點</button>
          </li>
          <template v-for="item in categories" :key="item">
            <li class="nav-item" role="presentation">
              <button class="nav-link fs-6" :id="item.name + '-tab'" type="button" role="tab" :aria-controls="item.name"
                :data-bs-target="'#' + item.name" aria-selected="false" @click="goTo(item.path, $event)"
                :class="{ 'active': $route.path === `/categories/${item.path}` }">
                {{ item.name }}</button>
            </li>
          </template>
        </ul>
        <div class="w-75 w-md-50 w-lg-25 d-flex justify-content-lg-end">
          <div class="w-75">
            <input type="text" class="form-control rounded-0 border-top-0 border-start-0 border-end-0 "
              placeholder="請輸入關鍵字..." @input="getMatchProducts">
          </div>
        </div>
      </div>
      <!-- 內容顯示 -->
      <div class="tab-content">
        <!-- 所有餐點 -->
        <div class="tab-pane show" id="all" role="tabpanel" aria-labelledby="all-tab" tabindex="0"
          :class="{ 'active': $route.path === '/products' }">
          <div class="row gy-48">
            <template v-if="matchProducts.length">
              <div class="col-md-4 col-lg-3 mb-48" v-for="item in matchProducts" :key="item.id">
                <ProductsCardComponent :item="item" />
              </div>
              <PaginationComponent :products="matchProducts" @update-products="updateProducts" ref="pagination" />
            </template>
            <template v-else-if="keyWord !== '' && !matchProducts.length">
              <p class="mb-0 fs-6 text-center">抱歉，沒有符合「 {{ keyWord }} 」的餐點唷！</p>
            </template>
            <template v-else>
              <div class="col-md-4 col-lg-3 mb-48" v-for="item in sliceProducts" :key="item.id">
                <ProductsCardComponent :item="item" />
              </div>
              <PaginationComponent :products="products" @update-products="updateProducts" ref="pagination" />
            </template>
          </div>
        </div>
        <!-- 其他餐點 -->
        <RouterView :match-products="matchProducts" :key-word="keyWord" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/useProductStore.js';
import { useCategoryStore } from '@/stores/useCategoryStore.js';
import BannerComponent from '@/components/BannerComponent.vue';
import ProductsCardComponent from '@/components/ProductsCardComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import debounce from "lodash.debounce";

const sliceProducts = ref([]);
const keyWord = ref('');
const matchProducts = ref([]);

const productStore = useProductStore();
const { getProducts } = productStore;
const { products, isLoading } = storeToRefs(productStore);
getProducts();

const categoryStore = useCategoryStore();
const { categories } = storeToRefs(categoryStore);

function updateProducts(data) {
  sliceProducts.value = data;
};

const pagination = ref(null);
const router = useRouter();
function goTo(path, e) {
  e.target.blur(); // 修改路由時，取消nav-link殘留的focus樣式
  if (pagination.value) {
    pagination.value.resetPage();
  };
  if (path === 'products') {
    keyWord.value = '';
    matchProducts.value = [];
    router.push('/products');
  } else {
    keyWord.value = '';
    matchProducts.value = [];
    router.push(`/categories/${path}`);
  };
};

const getMatchProducts = debounce((e) => {
  keyWord.value = e.target.value;
  if (keyWord.value.trim() !== '') {
    matchProducts.value = products.value.filter(item => item.title.match(keyWord.value));
  } else {
    matchProducts.value = [];
  };
}, 800);

onUnmounted(() => getMatchProducts.cancel());
</script>