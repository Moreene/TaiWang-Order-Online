import router from '@/router';

const { VITE_API, VITE_APIPATH } = import.meta.env;

export const useProductStore = defineStore('product', () => {
  const products = ref([]);
  const productDetail = ref({});
  const sellProducts = ref([]);
  const isLoading = ref(false);

  async function getProducts() {
    try {
      isLoading.value = true;
      const res = await axios.get(`${VITE_API}/api/${VITE_APIPATH}/products/all`);
      products.value = res.data.products;
      sellProducts.value = products.value.filter(item => item.hot);
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    };
  };

  async function getProduct(id) {
    try {
      isLoading.value = true;
      router.push(`/products/${id}`);
      const res = await axios.get(`${VITE_API}/api/${VITE_APIPATH}/product/${id}`);
      productDetail.value = res.data.product;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    };
  };
  return { products, productDetail, sellProducts, isLoading, getProducts, getProduct };
});