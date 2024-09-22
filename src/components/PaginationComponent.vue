<template>
  <nav aria-label="Page navigation" class="my-4 d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item" :class="{ 'disabled': currentPage === 0 }" v-if="allData.length > 12">
        <a class="page-link" href="#" @click.prevent="goToPage(currentPage - 1)">&laquo;</a>
      </li>
      <li class="page-item" v-for="n in pageNum" :key="n" :class="{ 'active': n === currentPage + 1 }">
        <a class="page-link" href="#" @click.prevent="goToPage(n - 1)">{{ n }}</a>
      </li>
      <li class="page-item" :class="{ 'disabled': currentPage === pageNum - 1 }" v-if="allData.length > 12">
        <a class="page-link" href="#" @click.prevent="goToPage(currentPage + 1)">&raquo;</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps(['products']);
const emit = defineEmits(['updateProducts']);

const allData = ref([]);
const pageSize = ref(12);
const currentPage = ref(0);

const pageNum = computed(() => {
  return Math.ceil(allData.value.length / pageSize.value);
});

function updateShowData() {
  const totalPage = [];
  for (let i = 0; i < pageNum.value; i++) {
    totalPage[i] = allData.value.slice(pageSize.value * i, pageSize.value * (i + 1));
  }
  emit('updateProducts', totalPage[currentPage.value]);
};

function goToPage(targetPage) {
  // 檢查索引是否在正確範圍內
  if (targetPage >= 0 && targetPage < pageNum.value) {
    currentPage.value = targetPage;
    window.scrollTo(0, 0);
    updateShowData();
  };
};

function resetPage() {
  currentPage.value = 0;
  updateShowData();
};

// 監視路由變化，取得對應tab篩選後的最新商品資料
watch(() => props.products, (newVal) => {
  allData.value = newVal;
  updateShowData();
}, { immediate: true });

defineExpose({
  resetPage,
});
</script>
