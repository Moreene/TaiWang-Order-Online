<template>
  <div id="delCouponModal" ref="delCouponModal" class="modal fade" tabindex="-1" aria-labelledby="delCouponModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delCouponModalLabel" class="modal-title">
            <span><i class="bi bi-exclamation-circle"></i> {{ tempCoupon.title }}</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="$emit('clearInput')"></button>
        </div>
        <div class="modal-body text-center p-24">
          <span class="fs-5">是否要刪除 "{{ tempCoupon.title }}" 優惠券 ？</span>
        </div>
        <div class="modal-footer border-0 justify-content-center">
          <button type="button" class="btn btn-outline-danger w-25" data-bs-dismiss="modal"
            @click="$emit('clearInput')">
            取消
          </button>
          <button type="button" class="btn btn-danger w-25" @click="delProduct">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { sweetalert } from '@/methods/sweetalert';

const { VITE_API, VITE_APIPATH } = import.meta.env;
const props = defineProps(['tempCoupon']);
const emit = defineEmits(['update', 'clearInput','closeModal']);
const delCouponModal = ref(null);

function delProduct() {
  axios.delete(`${VITE_API}/api/${VITE_APIPATH}/admin/coupon/${props.tempCoupon.id}`)
    .then(res => {
      sweetalert('success', res.data.message);
      emit('update');
      emit('closeModal');
    })
    .catch(err => {
      console.log(err)
      sweetalert('error', err.response.data.message);
    });
};

defineExpose({
  delCouponModal,
});
</script>