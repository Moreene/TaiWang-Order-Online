<template>
  <div class="bg-light vh-100 d-flex justify-content-center align-items-center">
    <div class="container text-center">
      <h1 class="fw-bold mb-24 error-title">4 0 4</h1>
      <h1><i class="bi bi-exclamation-octagon fs-2"></i> 此頁面不存在，將在 {{ countdown }} 秒後導回首頁 <i
          class="bi bi-exclamation-octagon fs-2"></i> </h1>
    </div>
  </div>
</template>

<script setup>
const countdown = ref(5);
const router = useRouter();

function startCountdown() {
  const interval = setInterval(() => {
    countdown.value--;
    if (countdown.value === 0) {
      clearInterval(interval);
      router.push('/');
    }
  }, 1000);
};

startCountdown();
</script>

<style scoped>
.error-title {
  font-size: 120px;
}
</style>