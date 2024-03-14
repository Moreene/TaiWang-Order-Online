import { defineStore } from 'pinia';
import axios from 'axios';
import router from '../router';

const { VITE_API, VITE_APIPATH } = import.meta.env;

export default defineStore('productStore', {
    state: () => ({
        products: [],
        productDetail: {},
        sellProducts: [],
        isLoading: false,
    }),
    actions: {
        async getProducts() {
            try {
                this.isLoading = true;
                const res = await axios.get(`${VITE_API}/api/${VITE_APIPATH}/products/all`);
                this.products = res.data.products;
                this.sellProducts = this.products.filter(item => item.hot);
            } catch (error) {
                console.log(err);
            } finally {
                this.isLoading = false;
            };
        },
        async getProduct(id) {
            try {
                this.isLoading = true;
                router.push(`/products/${id}`);
                const res = await axios.get(`${VITE_API}/api/${VITE_APIPATH}/product/${id}`);
                this.productDetail = res.data.product;
            } catch (error) {
                console.log(err);
            } finally {
                this.isLoading = false;
            };
        },
    },
});