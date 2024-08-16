<template>
  <nav class="navbar navbar-expand-md bg-dark py-16 fixed-top" data-bs-theme="dark">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <button type="button" class="btn btn-outline-light fs-6 d-md-none" @click="logout">登出</button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="collapse" @click="hideNavbar">
        <ul class="navbar-nav me-auto mb-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link py-16 py-md-0 ps-0 fs-6">
              <i class="bi bi-box-arrow-in-left"></i> 回到前台
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/products" class="nav-link py-16 py-md-0 fs-6">
              <i class="bi bi-clipboard"></i> 餐點列表
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/orders" class="nav-link py-16 py-md-0 fs-6">
              <i class="bi bi-box-seam"></i> 訂單列表
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/coupon" class="nav-link py-16 py-md-0 fs-6">
              <i class="bi bi-copy"></i> 優惠列表
            </RouterLink>
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-outline-light fs-6 d-none d-md-block" @click="logout">登出</button>
    </div>
  </nav>
  <RouterView v-if="isShow" />
</template>

<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2';

import { sweetalert } from '@/methods/sweetalert';
const { VITE_API } = import.meta.env;

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
      if (token) {
        axios.defaults.headers.common['Authorization'] = token;
        axios.post(`${VITE_API}/api/user/check`, { api_token: token })
          .then(() => {
            this.isShow = true;
          })
          .catch(() => {
            sweetalert('error', '您沒有權限進入!');
            this.$router.push('/adminLogin');
          });
      };
    },
    hideNavbar() {
      const navbar = this.$refs.collapse;
      // 使用?.先確認 navbar 是否存在(避免切換回首頁時報錯)
      if (navbar?.classList.contains('show')) {
        navbar.classList.remove('show');
      };
    },
    logout() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-primary text-light",
          cancelButton: "btn btn-outline-danger me-16"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "即將登出後台!",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "不要登出",
        confirmButtonText: "是，我要登出",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "即將登出!",
            icon: "success",
            timer: 2000
          });
          setTimeout(() => {
            axios.post(`${VITE_API}/logout`)
              .then(() => {
                document.cookie = `myToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
                this.$router.push('/adminLogin');
              })
              .catch(err => {
                sweetalert('error', err.response.data.message);
              });
          }, 500);
        };
      });
    },
  },
  mounted() {
    this.checkLogin();
  },
}
</script>