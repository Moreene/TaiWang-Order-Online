<template>
  <div class="py-72">
    <div class="col-md-8 col-xl-6 mx-auto">
      <ol class="d-flex justify-content-between w-lg-75 position-relative progess mx-auto">
        <li class="d-flex flex-column align-items-center progess-wrapper" ref="progessCart">
          <span
            class="d-inline-block bg-white fs-md-6 progess-box rounded-circle d-flex justify-content-center align-items-center mb-8 z-2">1</span>
          <span>購物車</span>
        </li>
        <li class="d-flex flex-column align-items-center progess-wrapper" ref="progessInfo">
          <span
            class="d-inline-block bg-white fs-md-6 progess-box rounded-circle d-flex justify-content-center align-items-center mb-8 z-2">2</span>
          <span>填寫資料</span>
        </li>
        <li class="d-flex flex-column align-items-center progess-wrapper" ref="progessPayment">
          <span
            class="d-inline-block bg-white fs-md-6 progess-box rounded-circle d-flex justify-content-center align-items-center mb-8 z-2">3</span>
          <span>付款確認</span>
        </li>
        <li class="d-flex flex-column align-items-center progess-wrapper" ref="progessOrder">
          <span
            class="d-inline-block bg-white fs-md-6 progess-box rounded-circle d-flex justify-content-center align-items-center mb-8 z-2">4</span>
          <span>訂單確認</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

const progessCart = ref(null);
const progessInfo = ref(null);
const progessPayment = ref(null);
const progessOrder = ref(null);

onMounted(() => {
  const path = route.path.split('/')[1];
  if (path === 'cart') {
    progessCart.value.classList.add('active');
  } else if (path === 'orderInfo') {
    progessInfo.value.classList.add('active');
  } else if (path === 'payment') {
    progessPayment.value.classList.add('active');
  } else if (path === 'orderChecked') {
    progessOrder.value.classList.add('active');
  };
});
</script>

<style lang="scss" scoped>
@import "@/assets/all.scss";

.progess {
  &-wrapper {
    color: $gray;
  }

  &-box {
    width: 32px;
    height: 32px;
    border: 1px solid $gray;

    @include pc-lg {
      width: 40px;
      height: 40px;
    }
  }

  &::after {
    position: absolute;
    content: '';
    width: 88%;
    height: 1px;
    top: 30%;
    left: 50%;
    background-color: $gray;
    transform: translate(-50%, -30%);
  }
}

.active {
  color: $secondary;

  .progess-box {
    border: 2px solid $secondary;
  }
}
</style>