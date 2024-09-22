<template>
  <div id="delOrderModal" ref="delOrderModal" class="modal fade" tabindex="-1" aria-labelledby="delOrderModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delOrderModalLabel" class="modal-title">
            <span>{{ tempOrder.id }}</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center p-24">
          <span class="fs-5">是否要刪除 "{{ tempOrder.id }}" 訂單?</span>
        </div>
        <div class="modal-footer border-0 justify-content-center">
          <button type="button" class="btn btn-outline-danger w-25" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger w-25" @click="delProduct">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { sweetalert } from '@/methods/sweetalert';

const { VITE_API, VITE_APIPATH } = import.meta.env;
const props = defineProps(['tempOrder']);
const emit = defineEmits(['updateOrder','closeModal']);
const delOrderModal = ref(null);

function delProduct() {
  axios.delete(`${VITE_API}/api/${VITE_APIPATH}/admin/order/${props.tempOrder.id}`)
    .then((res) => {
      sweetalert('success', res.data.message);
      emit('updateOrder');
      emit('closeModal');
    })
    .catch((err) => {
      sweetalert('error', err.response.data.message);
    });
};

defineExpose({
  delOrderModal,
});
</script>