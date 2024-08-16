<template>
  <BannerComponent>常見問題 / FAQ</BannerComponent>
  <div class="container">
    <div class="py-72 py-lg-90">
      <ul class="nav nav-pills mx-auto position-relative mb-48" id="pills-tab" role="tablist">
        <li class="line-wrapper position-absolute start-0"
          :class="{ 'transForm-first': activeTab === 'payment', 'transForm-middle': activeTab === 'delivery', 'transForm-last': activeTab === 'refund' }"
          ref="lineWrapper">
          <div class="position-absolute bg-primary start-0 end-0 bottom-0" style="height: 3px;"></div>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link fs-6 text-center position-relative px-16 px-md-64 active" href="#" id="payment-tab"
            data-bs-toggle="pill" data-bs-target="#payment" role="tab" aria-controls="payment" aria-selected="true"
            @click="goToTab('payment')">付款問題</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link fs-6 text-center position-relative px-16 px-md-64" href="#" id="delivery-tab"
            data-bs-toggle="pill" data-bs-target="#delivery" type="button" role="tab" aria-controls="delivery"
            aria-selected="false" @click="goToTab('delivery')">運送問題</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link fs-6 text-center position-relative px-16 px-md-64" href="#" id="refund-tab"
            data-bs-toggle="pill" data-bs-target="#refund" type="button" role="tab" aria-controls="refund"
            aria-selected="false" @click="goToTab('refund')">退款說明</a>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="payment" role="tabpanel" aria-labelledby="payment-tab" tabindex="0">
          <div class="col-lg-6 mx-auto">
            <h3 class="h4 fw-bold mb-24">付款方式有哪些？</h3>
            <p class="fs-6 mb-4">目前可使用的付款方式為線上刷卡或付現金。</p>
            <p class="fs-6 mb-48">線上訂餐一律使用線上付款，造成不便進請見諒！</p>
            <h3 class="h4 fw-bold mb-24">會開立發票嗎？</h3>
            <p class="fs-6 mb-0">我們一律開立紙本發票，將隨餐點提供。</p>
          </div>
        </div>
        <div class="tab-pane fade" id="delivery" role="tabpanel" aria-labelledby="delivery-tab" tabindex="0">
          <div class="col-lg-6 mx-auto">
            <h3 class="h4 fw-bold mb-24">運費是多少錢呢？</h3>
            <p class="fs-6 mb-4">截至2024/12/31止，訂單皆享免運費（限制距離15km以內）</p>
            <p class="fs-6 mb-48">若外送距離超過15km將不提供外送服務，請自行來店取餐。</p>
            <h3 class="h4 fw-bold mb-24">有配合的送餐單位嗎？</h3>
            <p class="fs-6 mb-48">目前皆是由店裡夥伴協助外送，尚無與其他外送業者合作。</p>
            <h3 class="h4 fw-bold mb-24">可以指定餐點送達時間嗎？</h3>
            <p class="fs-6 mb-4">很抱歉，目前無法指定送達時間，但可以備註告知希望收到餐點的時間。</p>
            <p class="fs-6 mb-16">通常在收到訂單後的30分鐘內會完成餐點製作，接著由夥伴送出餐點，依照距離、交通狀況等等因素，餐點抵達時間不一定。</p>
            <p class="fs-6 mb-0">※ 若有大筆訂單，可於前幾日直接來電告知，謝謝！</p>
          </div>
        </div>
        <div class="tab-pane fade" id="refund" role="tabpanel" aria-labelledby="refund-tab" tabindex="0">
          <div class="col-lg-6 mx-auto">
            <h3 class="h4 fw-bold mb-24">餐點訂購後可以取消退款嗎？</h3>
            <p class="fs-6 mb-4">在收到訂單後，廚房就會開始備餐，</p>
            <p class="fs-6 mb-4">若需要修改訂單或刪除訂單，請在下單後的15分鐘內來電告知。</p>
            <p class="fs-6 mb-4">若超時告知，餐點將依原訂單內容製作並不予取消及退款。</p>
            <p class="fs-6 mb-16">故請確認好餐點內容後再行下訂，謝謝。</p>
            <p class="fs-6 mb-0">※ 若為可歸責於餐廳因素，泰汪將線上刷退，款項將於3個工作日退回。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue';

export default {
  components: {
    BannerComponent,
  },
  data() {
    return {
      activeTab: 'payment',
    };
  },
  methods: {
    goToTab(tab) {
      this.activeTab = tab;
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/all.scss';

.nav {
  li {
    width: 33.3%;
  }

  @include pad {
    width: 660px;
  }

  &-link {
    color: $dark;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 3px;
      background-color: #ececec;
      left: 0;
      bottom: 0;
    }
  }

  &-pills .nav-link.active {
    color: $primary;
    background-color: transparent;
  }
}

.line-wrapper {
  width: 33.3%;
  top: 43px;
  z-index: 2;
  transition: .5s;
}

.transForm {
  &-first {
    transform: translateX(0px);
  }

  &-middle {
    transform: translateX(100%);
  }

  &-last {
    transform: translateX(200%);
  }
}
</style>