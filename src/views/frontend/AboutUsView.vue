<template>
  <BannerComponent>關於我們 / About Us</BannerComponent>
  <div class="container">
    <ul class="py-72 py-lg-90">
      <li class="row row-cols-1 row-cols-lg-2 gy-48 gy-lg-0 mb-48 mb-lg-64">
        <div class="col">
          <img
            src="https://images.unsplash.com/photo-1428895009712-de9e58a18409?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="主廚" style="width: 100%;" class="rounded-1">
        </div>
        <div class="col align-self-center">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <h2 class="fw-bold mb-32">泰汪故事</h2>
              <p class="fs-6 mb-4">泰汪成立於2024/1/18，位於八里一禹，</p>
              <p class="fs-6 mb-32">由愛吃泰式的老闆向泰餐大廚David Thompson 學習廚藝後回台成立。</p>
              <p class="fs-6 mb-32">泰汪想傳遞真正道地的泰國味道，更透過嚴選食材、瞭解農夫的種植理念，傳遞泰國菜的細緻。</p>
              <p class="fs-6 mb-0">：「我們只做最傳統的泰國味道。」</p>
            </div>
          </div>
        </div>
      </li>
      <li class="row row-cols-1 row-cols-lg-2 flex-lg-row-reverse gy-48 gy-lg-0 mb-48 mb-lg-64">
        <div class="col">
          <img
            src="https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD"
            alt="香料" style="width: 100%;" class="rounded-1">
        </div>
        <div class="col align-self-center">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <h2 class="fw-bold mb-32">美味秘訣</h2>
              <p class="fs-6 mb-32">泰式料理充滿酸、甜、鹹、辣各種味道與觸感，其實苦味元素也相當重要。</p>
              <p class="fs-6 mb-32">
                重點特色是大量的芬芳香氣，來自包含檸檬草、香茅、南薑、泰國青檸、各種香草葉、新鮮椰奶，以及各式各樣的發酵海鮮食品，像是魚露、蝦醬和發酵魚醬等。</p>
              <p class="fs-6 mb-0">這，就是美味的基本配方！</p>
            </div>
          </div>
        </div>
      </li>
      <li class="row row-cols-1 row-cols-lg-2 gy-48 gy-lg-0">
        <div class="col">
          <img
            src="https://images.unsplash.com/photo-1586969593928-1c87c1f9c2ef?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="廚具" style="width: 100%;" class="rounded-1">
        </div>
        <div class="col align-self-center">
          <div class="row justify-content-center">
            <div class="col-lg-11">
              <h2 class="fw-bold mb-32">光顧泰汪</h2>
              <p class="fs-6 mb-4">泰汪剛發跡，目前尚未開放內用區，</p>
              <p class="fs-6 mb-32">餐點僅提供線上/電話訂餐，可自取或選擇外送服務。</p>
              <p class="fs-6 mb-4">期待我們繼續茁壯，提供更好的餐點品質，</p>
              <p class="fs-6 mb-32">也期待開放內用的那一天，會是高朋滿座。</p>
              <p class="fs-6 mb-0">請大家多多支持我們，「選擇泰汪，越吃越旺！」</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';

export default {
  components: {
    BannerComponent,
  },
}
</script>

<style scoped>
img {
  height: 380px;
}
</style>