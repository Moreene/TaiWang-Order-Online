<template>
    <div class="tab-pane show active" role="tabpanel" :aria-labelledby="category + '-tab'" tabindex="0" :id="category">
        <div class="row gy-48 mb-48">
            <template v-if="matchProducts.length">
                <div class="col-md-4 col-lg-3 mb-48" v-for="item in matchProducts" :key="item.id">
                    <ProductsCardComponent :item="item"/>
                </div>
                <PaginationComponent :products="matchProducts" @update-products="updateProducts"/>
            </template>
            <template v-else-if="keyWord !== '' && !matchProducts.length">
                <p class="mb-0 fs-6 text-center">抱歉，沒有符合「 {{ keyWord }} 」的餐點唷！</p>
            </template>
            <template v-else>
                <div class="col-md-4 col-lg-3 mb-48" v-for="item in sliceProducts" :key="item.id">
                    <ProductsCardComponent :item="item"/>
                </div>
                <PaginationComponent :products="data" @update-products="updateProducts"/>
            </template>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import productStore from '@/stores/productStore.js';
import ProductsCardComponent from '@/components/ProductsCardComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

export default {
    props: ['category', 'matchProducts', 'keyWord'],
    components: {
        ProductsCardComponent,
        PaginationComponent
    },
    data() {
        return {
            sliceProducts: [],
        }
    },
    methods: {
        updateProducts(data) {
            this.sliceProducts = data;
        },
    },
    computed: {
        ...mapState(productStore, ['products']),
        data() {
            switch (this.category) {
                case 'recommendation':
                    return this.products.filter(item => item.recommendation);
                case 'salad':
                    return this.products.filter(item => item.category === '開胃涼拌');
                case 'meat':
                    return this.products.filter(item => item.category === '大口吃肉');
                case 'vegetable':
                    return this.products.filter(item => item.category === '大口吃菜');
                case 'seafood':
                    return this.products.filter(item => item.category === '泰鮮海鮮');
                case 'rice':
                    return this.products.filter(item => item.category === '來一點飯');
                case 'drink':
                    return this.products.filter(item => item.category === '冰涼泰飲');
                case 'dessert':
                    return this.products.filter(item => item.category === '泰式甜點');
            }
        },
    },
}
</script>