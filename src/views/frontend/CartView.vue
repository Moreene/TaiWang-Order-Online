<template>
  <LoadingComponent v-model:active="isLoading" />
  <div class="bg-wave">
    <div class="container">
      <div class="col-lg-10 mx-auto">
        <ProgessBarComponent />
        <!-- 購物車 -->
        <template v-if="cart.carts && cart.carts.length">
          <div class="mb-48">
            <h2 class="h5 bg-gray text-light ps-12 py-16 mb-0" v-if="cart.carts">購物車 ( {{ cart.carts.length }} )
            </h2>
            <div class="table-responsive border border-dark"
              :class="{ 'fixed-height': cart.carts && cart.carts.length > 3 }">
              <table class="table table-borderless mb-0">
                <thead class="border-bottom border-dark text-nowrap">
                  <tr class="text-center">
                    <th scope="col" style="width: 180px;">示意圖</th>
                    <th scope="col">餐點名稱</th>
                    <th scope="col">單價</th>
                    <th scope="col" style="width: 250px;">數量</th>
                    <th scope="col" class="d-none d-md-block">小計</th>
                    <th scope="col">刪除</th>
                  </tr>
                </thead>
                <tbody class="text-center text-nowrap">
                  <template v-for="item in cart.carts" :key="item.id">
                    <tr class="align-middle border-bottom">
                      <th scope="row" class="fw-normal">
                        <img :src="item.product.imageUrl" :alt="item.product.title" class="food-img">
                      </th>
                      <td>{{ item.product.title }}</td>
                      <td>NT$ <span class="text-notoSans">{{ item.product.price }}</span></td>
                      <td>
                        <div class="d-flex justify-content-center">
                          <div class="input-group w-75 d-flex align-items-end">
                            <button
                              class="btn btn-secondary text-light d-flex justify-content-center align-items-center d-none d-md-block"
                              type="button" @click="decreaseCartNum(item)" :disabled="item.qty === 1"><i
                                class="bi bi-dash"></i></button>
                            <input type="text" class="form-control text-center p-0 py-md-6 px-md-12" min="1"
                              v-model.number="item.qty" readonly>
                            <button
                              class="btn btn-secondary text-light d-flex justify-content-center align-items-center d-none d-md-block"
                              type="button" @click="increaseCartNum(item)"><i class="bi bi-plus"></i></button>
                          </div>
                        </div>
                      </td>
                      <td class="d-none d-md-table-cell">NT$ <span class="text-notoSans">
                          {{ item.qty * item.product.price }}</span></td>
                      <td>
                        <a href="#" @click.prevent="deleteItem(item)"><i class="bi bi-trash fs-5 link-gray"></i></a>
                      </td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
            <div class="border border-dark border-top-0 bg-white p-12">
              <p class="d-flex justify-content-between">更多精彩優惠等著您使用！
                <RouterLink to="/products" class="link-gold">繼續購物 <i class="bi bi-arrow-right"></i>
                </RouterLink>
              </p>
              <span class="text-notoSans d-inline-block p-6 bg-danger text-white me-6">優惠促銷</span>
              <span class="text-notoSans">輸入「 <span ref="code">tai6666</span> 」優惠代碼再享 85 折
                ﹙<a href="#" class="link-danger" @click.prevent="copyCode($event)">點我複製</a>﹚</span>
            </div>
          </div>
          <div class="row gy-48 gy-md-0 pb-72">
            <!-- 取餐方式 -->
            <div class="col-md-7">
              <h2 class="h5 bg-gray text-light ps-12 py-16 mb-0">取餐方式</h2>
              <div class="border border-dark bg-white">
                <div class="ps-12 py-16">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input border-gray" type="radio" name="取餐方式" id="pickup" value="自取"
                      v-model="delivery" checked v-if="Math.round(cart.final_total) < 500">
                    <input class="form-check-input border-gray" type="radio" name="取餐方式" id="pickup" value="自取"
                      v-model="delivery" v-else>
                    <label class="form-check-label" for="pickup">自取</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input border-gray" type="radio" name="取餐方式" id="delivery" value="外送"
                      v-model="delivery" :disabled="Math.round(cart.final_total) < 500">
                    <label class="form-check-label" for="delivery">外送 <span class="text-gray">(折扣後滿500元)</span></label>
                  </div>
                </div>
              </div>
              <div class="border border-dark border-top-0 bg-white">
                <h2 class="h5 bg-gray text-light ps-12 py-16 mb-0">送貨及付款方式</h2>
                <div class="ps-12 py-16">
                  <div class="mb-16">
                    <label for="送貨方式" class="form-label">送貨方式</label>
                    <input type="text" id="送貨方式" class="form-control w-75" value="自取" disabled
                      v-if="delivery === '自取' || Math.round(cart.final_total) < 500">
                    <input type="text" id="送貨方式" class="form-control w-75" value="泰汪小蜜蜂" disabled v-else>
                  </div>
                  <div>
                    <label for="付款方式" class="form-label">付款方式</label>
                    <input type="text" id="付款方式" class="form-control w-75" value="信用卡 (支援VISA、JCB、Master)" disabled>
                  </div>
                </div>
              </div>
            </div>
            <!-- 訂單資訊 -->
            <div class="col-md-5">
              <div class="h-100 border border-dark bg-white">
                <h2 class="h5 bg-gray text-light ps-12 py-16 mb-0">訂單資訊</h2>
                <div class="border-bottom border-dark px-12 py-16">
                  <div class="d-flex justify-content-between">
                    <p>小計：</p>
                    <p>NT$ <span class="text-notoSans">{{ cart.total }}</span></p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p>運費：</p>
                    <p>NT$ <span class="text-notoSans">0</span></p>
                  </div>
                  <p class="mb-8">優惠代碼</p>
                  <div class="d-flex">
                    <input type="text" class="form-control w-50 border-gray" v-model="coupon">
                    <button class="btn btn-secondary text-light ms-8" type="button" :disabled="coupon === ''"
                      @click="useCoupon">套用</button>
                  </div>
                </div>
                <div class="px-12 py-24 pb-md-0">
                  <div class="d-flex justify-content-between">
                    <p class="fw-bold">合計：</p>
                    <p class="fw-bold">NT$ <span class="text-notoSans">{{ Math.round(cart.final_total) }}</span><span
                        class="text-danger ms-4" v-if="cart.final_total !== cart.total">(已使用優惠)</span></p>
                  </div>
                  <button type="button" class="btn btn-primary text-white w-100" @click="goCheckout">下一步</button>
                </div>
              </div>
            </div>
          </div>
        </template>
        <!-- 購物車為空 -->
        <div class="pb-72 text-center" v-else>
          <h2 class="mb-16">Oops,目前購物車內沒有東西唷！</h2>
          <h2 class="mb-32">快去<RouterLink to="/products" class="link-secondary border-bottom border-secondary">選購
            </RouterLink>
            想吃餐點吧</h2>
          <img src="/empety-cart.png" class="empety-cart" alt="空購物車">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';
import { useCartStore } from '@/stores/useCartStore.js';
import ProgessBarComponent from '@/components/ProgessBarComponent.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import { toast } from '@/methods/sweetalert';

const { VITE_API, VITE_APIPATH } = import.meta.env;
const router = useRouter();
const coupon = ref('');
const delivery = ref('自取');
const isLoading = ref(true);
const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
const { increaseCartNum, decreaseCartNum, getCart } = cartStore;

function deleteItem(item) {
  const itemName = item.product.title;
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-secondary text-light",
      cancelButton: "btn btn-outline-secondary me-16"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: `是否要刪除 ${itemName} ？`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "是, 我要刪除",
    cancelButtonText: "我再想想",
    reverseButtons: true
  }).then(result => {
    if (result.isConfirmed) {
      axios.delete(`${VITE_API}/api/${VITE_APIPATH}/cart/${item.id}`)
        .then(() => {
          toast('top', 'warning', `已刪除 "${itemName}"`);
          getCart();
        })
        .catch(err => {
          console.log(err);
        });
    };
  });
};

function useCoupon() {
  const code = {
    "code": coupon.value,
  };
  axios.post(`${VITE_API}/api/${VITE_APIPATH}/coupon`, { "data": code })
    .then(() => {
      toast('top', 'success', '已成功使用優惠代碼');
      getCart();
      coupon.value = '';
    })
    .catch(() => {
      toast('top', 'error', '優惠代碼使用失敗');
      coupon.value = '';
    });
};

function goCheckout() {
  localStorage.setItem('pickUp', delivery.value);
  router.push('/orderInfo');
};

const code = ref(null);
function copyCode(e) {
  const textNode = code.value.innerText;
  navigator.clipboard.writeText(textNode)
    .then(() => {
      e.target.blur();
      toast('top', 'success', '已成功複製優惠代碼');
    })
    .catch(() => {
      toast('top', 'error', '複製優惠代碼失敗');
    });
};

watch(
  () => cart.value.final_total, // 监听 cart.final_total
  (newVal) => {
    if (typeof newVal !== 'undefined') {
      if (Math.round(newVal) < 500) {
        delivery.value = '自取'; // 设置 delivery 的值
      };
    };
  },
  { immediate: true }
);

setTimeout(() => isLoading.value = false, 400);
</script>

<style lang="scss" scoped>
@import '@/assets/all.scss';

.food-img {
  width: 140px;
  height: 120px;

  @include pad {
    width: 100%;
  }
}

.fixed-height {
  height: 455px;
  overflow-y: auto;
}

.empety-cart {
  width: 250px;
  height: 250px;
  animation-name: swing;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  @include pad {
    width: 350px;
    height: 350px;
  }
}

@keyframes swing {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>