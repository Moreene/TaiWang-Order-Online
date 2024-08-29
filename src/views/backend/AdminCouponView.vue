<template>
  <VueLoading v-model:active="isLoading" loader="bars" color="#ff9900" />
  <div class="container py-144">
    <h2 class="fw-bold mb-32">優惠列表</h2>
    <div class="text-end mb-24">
      <button type="button" class="btn btn-primary text-light" @click.prevent="openModal('new', item)">
        建立新優惠 <i class="bi bi-plus"></i>
      </button>
    </div>
    <div class="table-responsive mb-16">
      <table class="table align-middle">
        <thead class="text-nowrap">
          <tr class="text-nowrap text-center border-dark">
            <th width="120">
              優惠名稱
            </th>
            <th width="120">
              優惠代碼
            </th>
            <th width="120">
              優惠%數
            </th>
            <th width="120">
              到期日
            </th>
            <th width="120">
              到期時間
            </th>
            <th width="100">
              是否啟用
            </th>
            <th width="120">
              編輯
            </th>
            <th width="120">
              刪除
            </th>
          </tr>
        </thead>
        <tbody class="text-nowrap text-center">
          <tr v-for="(item, idx) in coupons" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.code }}</td>
            <td>{{ item.percent }}</td>
            <td>{{ dueDate[idx] }}</td>
            <td>{{ dueTime[idx] }}</td>
            <td>
              <div class="form-check form-switch d-flex justify-content-center">
                <input class="form-check-input" type="checkbox" role="switch" style="height: 20px;"
                  v-model="item.is_enabled" @change="toggleSwitch(item)">
              </div>
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
  </div>
  <!-- 優惠券 -->
  <CouponModalComponent ref="modal" :temp-coupon="tempCoupon" :is-new="isNew" @clear-input="clearInput" @close-modal="closeModal" @update="getCoupons" />
  <!-- 刪除優惠券 -->
  <DelCouponModalComponent ref="delModal" :temp-coupon="tempCoupon" @clear-input="clearInput" @close-modal="closeModal" @update="getCoupons" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import CouponModalComponent from '@/components/CouponModalComponent.vue';
import DelCouponModalComponent from '@/components/DelCouponModalComponent.vue';

import Modal from 'bootstrap/js/dist/modal';

import { sweetalert } from '@/methods/sweetalert';
import { formatDate, formatTime } from '@/methods/date';

const { VITE_API, VITE_APIPATH } = import.meta.env;
const coupons = ref([]);
const tempCoupon = ref({});
const pagination = ref({});
const isNew = ref(false);
const isLoading = ref(false);

function getCoupons(page = 1) {
  isLoading.value = true;
  axios.get(`${VITE_API}/api/${VITE_APIPATH}/admin/coupons?page=${page}`)
    .then(res => {
      pagination.value = res.data.pagination;
      const apiData = res.data.coupons;
      coupons.value = apiData.map(item => ({
        ...item,
        is_enabled: item.is_enabled === 1 ? true : false,
      }));
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
        is_enabled: newState ? 1 : 0
      };
      axios.put(`${VITE_API}/api/${VITE_APIPATH}/admin/coupon/${item.id}`, { "data": requestData })
        .then(() => {
          swalWithBootstrapButtons.fire({
            title: `已更新 ${item.title} 的啟用狀態`,
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
        })
        .catch(() => {
          console.log(err);
          sweetalert('error', '更新啟用狀態失敗');
        });
    } else {
      item.is_enabled = originState;
    };
  });
};

const modal = ref(null);
const delModal = ref(null);
function openModal(status, item) {
  if (status === 'new') {
    tempCoupon.value = {};
    isNew.value = true;
    modal.value.couponModal.value.show();
  } else if (status === 'edit') {
    tempCoupon.value = { ...item };
    isNew.value = false;
    modal.value.couponModal.value.show();
  }
  else if (status === 'delete') {
    tempCoupon.value = { ...item };
    isNew.value = false;
    delModal.value.delCouponModal.value.show();
  };
};

function clearInput() {
  tempCoupon.value = { due_date: 0 };
  modal.value.resetForm();
};

function closeModal(){
  modal.value.couponModal.value.hide();
  delModal.value.delCouponModal.value.hide();
};

const dueDate = computed(() => {
  return coupons.value.map(item => {
    return formatDate(item.due_date);
  });
});

const dueTime = computed(() => {
  return coupons.value.map(item => {
    return formatTime(item.due_date);
  });
});

onMounted(() => {
  getCoupons();
  modal.value.couponModal.value = new Modal(modal.value.couponModal, {
    keyboard: false,
  });
  delModal.value.delCouponModal.value = new Modal(delModal.value.delCouponModal, {
    keyboard: false,
  });
});

</script>