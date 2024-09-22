<template>
  <VueLoading v-model:active="isLoading" loader="bars" color="#ff9900" />
  <div class="container py-144">
    <h2 class="fw-bold mb-32">訂單列表</h2>
    <div class="table-responsive mb-16">
      <table class="table align-middle">
        <thead class="text-nowrap">
          <tr class="text-nowrap text-center border-dark">
            <th>
              成立日期
            </th>
            <th width="300">
              訂單編號
            </th>
            <th>
              訂購人
            </th>
            <th>
              手機
            </th>
            <th>
              訂單內容
            </th>
            <th>
              總計
            </th>
            <th>
              付款
            </th>
            <th>
              編輯
            </th>
            <th>
              刪除
            </th>
          </tr>
        </thead>
        <tbody class="text-nowrap text-center">
          <tr v-for="(item, idx) in orders" :key="item.id">
            <td>{{ item.paid_date ? date[idx] : '未成立' }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.user.name }}</td>
            <td>{{ item.user.tel }}</td>
            <td>
              <ul class="ps-0 mb-0 list-unstyled text-center">
                <li v-for="product in item.products" :key="product.product_id">
                  {{ product.product.title }} * {{ product.qty }}
                </li>
              </ul>
            </td>
            <td>$ {{ Math.round(item.total) }}</td>
            <td>
              <span :class="{ 'text-danger': item.is_paid === false }">{{ item.is_paid ? '已付款' : '未付款' }}</span>
            </td>
            <td>
              <a href="#" class="link-primary" @click.prevent="openModal('edit', item)">
                <i class="bi bi-pencil-square fs-5"></i></a>
            </td>
            <td>
              <a href="#" class="link-danger" @click.prevent="openModal('delete', item)">
                <i class="bi bi-trash3 fs-5"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 分頁 -->
    <AdminPaginationComponent :pagination="pagination" @emit-pages="getOrders" v-if="pagination.total_pages > 1" />
    <!-- 編輯訂單 -->
    <OrderModalComponent ref="modal" :temp-order="tempOrder" @clear-input="clearInput"  @close-modal="closeModal" @update-order="getOrders" />
    <!-- 刪除訂單 -->
    <DelOrderModalComponent ref="delModal" :temp-order="tempOrder" @close-modal="closeModal" @update-order="getOrders" />
  </div>
</template>

<script setup>
import OrderModalComponent from '@/components/OrderModalComponent.vue';
import DelOrderModalComponent from '@/components/DelOrderModalComponent.vue';
import AdminPaginationComponent from '@/components/AdminPaginationComponent.vue';
import Modal from 'bootstrap/js/dist/modal';
import { formatDate } from '@/methods/date';
import { sweetalert } from '@/methods/sweetalert';

const { VITE_API, VITE_APIPATH } = import.meta.env;
const orders = ref([]);
const tempOrder = ref({});
const pagination = ref({});
const isLoading = ref(false);

function getOrders(page = 1) {
  isLoading.value = true;
  axios.get(`${VITE_API}/api/${VITE_APIPATH}/admin/orders?page=${page}`)
    .then(res => {
      orders.value = res.data.orders;
      pagination.value = res.data.pagination;
      isLoading.value = false;
    })
    .catch(err => {
      isLoading.value = false;
      sweetalert('error', err.response.data.message);
    });
};

const modal = ref(null);
const delModal = ref(null);
function openModal(status, item) {
  if (status === 'edit') {
    tempOrder.value = { ...item };
    modal.value.editOrderModal.value.show();
  } else if (status === 'delete') {
    tempOrder.value = { ...item };
    delModal.value.delOrderModal.value.show();
  };
};

function clearInput() {
  tempOrder.value = {};
  modal.value.resetForm();
};

function closeModal(){
  modal.value.editOrderModal.value.hide();
  delModal.value.delOrderModal.value.hide();
};


const date = computed(() => {
  return orders.value.map(item => {
    return formatDate(item.paid_date * 1000);
  });
});

onMounted(() => {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/, "$1",);
  axios.defaults.headers.common['Authorization'] = token;
  modal.value.editOrderModal.value = new Modal(modal.value.editOrderModal, {
    keyboard: false,
  });
  delModal.value.delOrderModal.value = new Modal(delModal.value.delOrderModal, {
    keyboard: false,
  });
  getOrders();
});
</script>