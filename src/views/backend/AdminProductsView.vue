<template>
  <VueLoading v-model:active="isLoading" loader="bars" color="#ff9900" />
  <div class="container py-144">
    <h2 class="fw-bold mb-32">餐點列表</h2>
    <div class="text-end mb-24">
      <button type="button" class="btn btn-primary text-light" @click="openModal('new')">
        建立新餐點 <i class="bi bi-plus"></i>
      </button>
    </div>
    <div class="table-responsive mb-16">
      <table class="table align-middle">
        <thead class="text-nowrap">
          <tr class="text-nowrap text-center border-dark">
            <th width="120">
              商品照
            </th>
            <th width="120">
              分類
            </th>
            <th width="120">
              餐點名稱
            </th>
            <th width="120">
              原價
            </th>
            <th width="120">
              售價
            </th>
            <th width="100">
              是否啟用
            </th>
            <th width="120">
              編輯圖片
            </th>
            <th width="120">
              編輯內容
            </th>
            <th width="120">
              刪除
            </th>
          </tr>
        </thead>
        <tbody class="text-nowrap text-center">
          <tr v-for="item in products" :key="item.id">
            <td><img :src="item.imageUrl" :alt="item.title" style="width: 160px; height: 120px;"></td>
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.origin_price }}</td>
            <td>{{ item.price }}</td>
            <td>
              <div class="form-check form-switch d-flex justify-content-center">
                <input class="form-check-input" type="checkbox" role="switch" style="height: 20px;"
                  v-model="item.is_enabled" @change="toggleSwitch(item)">
              </div>
            </td>
            <td>
              <a href="#" class="link-dark-blue" @click.prevent="openModal('images', item)">
                <i class="bi bi-image fs-5"></i></a>
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
    <AdminPaginationComponent :pagination="pagination" @emit-pages="getProduct" />
    <!-- 編輯圖片 -->
    <ImagesModalComponent ref="imageModal" :temp-product="tempProduct" @clear-input="clearImgInput" @close-modal="closeModal"
      @update="getProduct" />
    <!-- 新增/編輯餐點 -->
    <ProductModalComponent ref="modal" :temp-product="tempProduct" :is-new="isNew" @clear-input="clearInput" @close-modal="closeModal"
      @update="getProduct" />
    <!-- 刪除餐點 -->
    <DelProductModalComponent ref="delModal" :temp-product="tempProduct" @clear-input="clearInput" @close-modal="closeModal"
      @update="getProduct" />
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';
import ImagesModalComponent from '@/components/ImagesModalComponent.vue';
import ProductModalComponent from '@/components/ProductModalComponent.vue';
import DelProductModalComponent from '@/components/DelProductModalComponent.vue';
import AdminPaginationComponent from '@/components/AdminPaginationComponent.vue';
import Modal from 'bootstrap/js/dist/modal';
import { sweetalert } from '@/methods/sweetalert';

const { VITE_API, VITE_APIPATH } = import.meta.env;
const products = ref([]);
const pagination = ref({});
const tempProduct = ref({
  imagesUrl: []
});
const isNew = ref(false);
const isLoading = ref(false);

function getProduct(page = 1) {
  isLoading.value = true;
  axios.get(`${VITE_API}/api/${VITE_APIPATH}/admin/products?page=${page}`)
    .then(res => {
      const apiData = res.data.products;
      products.value = apiData.map(product => ({
        ...product,
        hot: product.hot === 1 ? true : false,
        recommendation: product.recommendation === 1 ? true : false,
        is_enabled: product.is_enabled === 1 ? true : false,
      }));
      pagination.value = res.data.pagination;
      isLoading.value = false;
    })
    .catch(err => {
      isLoading.value = false;
      sweetalert('error', err.response.data.message);
    });
};

function toggleSwitch(item) {
  const originState = !item.is_enabled;
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-secondary text-light",
      cancelButton: "btn btn-outline-secondary me-16"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: `是否要更新啟用狀態？`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "是, 我要更新",
    cancelButtonText: "我再想想",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      const newState = !originState;
      const requestData = {
        ...item,
        hot: item.hot === true ? 1 : 0,
        recommendation: item.recommendation === true ? 1 : 0,
        is_enabled: newState ? 1 : 0
      };
      axios.put(`${VITE_API}/api/${VITE_APIPATH}/admin/product/${item.id}`, { "data": requestData })
        .then(() => {
          swalWithBootstrapButtons.fire({
            title: `已更新 ${item.title} 的啟用狀態`,
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
        })
        .catch(() => {
          sweetalert('error', '更新啟用狀態失敗');
        });
    } else {
      item.is_enabled = originState;
    };
  });
};

const imageModal = ref(null);
const modal = ref(null);
const delModal = ref(null);
function openModal(status, item) {
  if (status === 'new') {
    tempProduct.value = {};
    isNew.value = true;
    modal.value.productModal.value.show();
  } else if (status === 'edit') {
    tempProduct.value = { ...item };
    isNew.value = false;
    modal.value.productModal.value.show();
  } else if (status === 'images') {
    tempProduct.value = { ...item };
    isNew.value = false;
    imageModal.value.imageModal.value.show();
  }
  else if (status === 'delete') {
    tempProduct.value = { ...item };
    isNew.value = false;
    delModal.value.delProductModal.value.show();
  };
};

function clearInput() {
  tempProduct.value = {
    imagesUrl: []
  };
  modal.value.resetForm();
};

function clearImgInput() {
  tempProduct.value = {
    imagesUrl: []
  };
  modal.value.resetForm();
  imageModal.value.resetForm();
};

function closeModal() {
  modal.value.productModal.value.hide();
  delModal.value.delProductModal.value.hide();
  imageModal.value.imageModal.value.hide();
};

onMounted(() => {
  modal.value.productModal.value = new Modal(modal.value.productModal, {
    keyboard: false,
  });
  delModal.value.delProductModal.value = new Modal(delModal.value.delProductModal, {
    keyboard: false,
  });
  imageModal.value.imageModal.value = new Modal(imageModal.value.imageModal, {
    keyboard: false,
  });
  getProduct();
});
</script>