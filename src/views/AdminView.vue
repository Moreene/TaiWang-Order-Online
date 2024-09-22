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

<script setup>
import Swal from 'sweetalert2';
import { sweetalert } from '@/methods/sweetalert';

const { VITE_API } = import.meta.env;
const router = useRouter();
const isShow = ref(false);
const collapse = ref(null);

function checkLogin() {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
    axios.post(`${VITE_API}/api/user/check`, { api_token: token })
      .then(() => {
        isShow.value = true;
      })
      .catch(() => {
        sweetalert('error', '您沒有權限進入!');
        router.push('/adminLogin');
      });
  };
};

function hideNavbar() {
  const navbar = collapse.value;
  // 使用?.先確認 navbar 是否存在(避免切換回首頁時報錯)
  if (navbar?.classList.contains('show')) {
    navbar.classList.remove('show');
  };
};

function logout() {
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
  }).then((res) => {
    if (res.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "即將登出!",
        icon: "success",
        timer: 2000
      });
      setTimeout(() => {
        axios.post(`${VITE_API}/logout`)
          .then(() => {
            document.cookie = `myToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
            router.push('/adminLogin');
          })
          .catch(err => {
            sweetalert('error', err.response.data.message);
          });
      }, 500);
    };
  });
};

onMounted(() => checkLogin());
</script>