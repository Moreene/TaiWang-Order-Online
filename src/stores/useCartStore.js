import { toast } from '@/methods/sweetalert';

const { VITE_API, VITE_APIPATH } = import.meta.env;

export const useCartStore = defineStore('cartStore', () => {
  const cart = ref([]);

  // 取得所有購物車
  function getCart() {
    axios.get(`${VITE_API}/api/${VITE_APIPATH}/cart`)
      .then(res => {
        cart.value = res.data.data;
      })
      .catch(err => {
        console.log(err);
      });
  };
  // 單一品項加入購物車
  function addCart(id, qty = 1) {
    const cart = {
      qty,
      "product_id": id
    };
    axios.post(`${VITE_API}/api/${VITE_APIPATH}/cart`, { "data": cart })
      .then(res => {
        toast('top', 'success', res.data.message);
        getCart();
      })
      .catch(() => {
        toast('top', 'warning', `加入購物車失敗`);
      });
  };

  // 刪除單一品項
  function deleteItem(item) {
    const itemName = item.product.title
    axios.delete(`${VITE_API}/api/${VITE_APIPATH}/cart/${item.id}`)
      .then(() => {
        toast('top', 'warning', `已刪除 "${itemName}"`);
        getCart();
      })
      .catch(() => {
        toast('top', 'warning', `刪除 "${itemName}" 失敗`);
      });
  };

  // 透過 + 修改購物車數量
  function increaseCartNum(item) {
    item.qty++;
    const cart = {
      "product_id": item.product_id,
      "qty": item.qty
    };
    axios.put(`${VITE_API}/api/${VITE_APIPATH}/cart/${item.id}`, { "data": cart })
      .then(() => {
        toast('top', 'success', `已更新 ${item.product.title} 的數量`);
        getCart();
      })
      .catch(() => {
        item.qty--;
        toast('top', 'warning', `更新 ${item.product.title} 的數量失敗`);
      });
  };

  // 透過 - 修改購物車數量
  function decreaseCartNum(item) {
    item.qty--;
    const cart = {
      "product_id": item.product_id,
      "qty": item.qty
    };
    axios.put(`${VITE_API}/api/${VITE_APIPATH}/cart/${item.id}`, { "data": cart })
      .then(() => {
        toast('top', 'success', `已更新 ${item.product.title} 的數量`);
        getCart();
      })
      .catch(() => {
        item.qty++;
        toast('top', 'warning', `更新 ${item.product.title} 的數量失敗`);
      });
  };
  return { cart, getCart, addCart, deleteItem, increaseCartNum, decreaseCartNum };
});