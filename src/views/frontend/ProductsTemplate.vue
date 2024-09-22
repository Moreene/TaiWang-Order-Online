<template>
  <div class="tab-pane show active" role="tabpanel" :aria-labelledby="category + '-tab'" tabindex="0" :id="category">
    <div class="row gy-48 mb-48">
      <template v-if="matchProducts.length">
        <div class="col-md-4 col-lg-3 mb-48" v-for="item in matchProducts" :key="item.id">
          <ProductsCardComponent :item="item" />
        </div>
        <PaginationComponent :products="matchProducts" @update-products="updateProducts" />
      </template>
      <template v-else-if="keyWord !== '' && !matchProducts.length">
        <p class="mb-0 fs-6 text-center">抱歉，沒有符合「 {{ keyWord }} 」的餐點唷！</p>
      </template>
      <template v-else>
        <div class="col-md-4 col-lg-3 mb-48" v-for="item in sliceProducts" :key="item.id">
          <ProductsCardComponent :item="item" />
        </div>
        <PaginationComponent :products="data" @update-products="updateProducts" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/useProductStore.js';
import ProductsCardComponent from '@/components/ProductsCardComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

const props = defineProps(['category', 'matchProducts', 'keyWord']);
const sliceProducts = ref([]);

function updateProducts(data) {
  sliceProducts.value = data;
};

const productStore = useProductStore();
const { products } = storeToRefs(productStore);
const data = computed(() => {
  switch (props.category) {
    case 'recommendation':
      return products.value.filter(item => item.recommendation);
    case 'salad':
      return products.value.filter(item => item.category === '開胃涼拌');
    case 'meat':
      return products.value.filter(item => item.category === '大口吃肉');
    case 'vegetable':
      return products.value.filter(item => item.category === '大口吃菜');
    case 'seafood':
      return products.value.filter(item => item.category === '泰鮮海鮮');
    case 'rice':
      return products.value.filter(item => item.category === '來一點飯');
    case 'drink':
      return products.value.filter(item => item.category === '冰涼泰飲');
    case 'dessert':
      return products.value.filter(item => item.category === '泰式甜點');
  };
});
</script>
