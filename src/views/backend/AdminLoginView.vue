<template>
    <div class="bg-primary vh-100 d-flex justify-content-center align-items-center">
        <div class="w-lg-50 w-xl-25 bg-white rounded-1 p-32">
            <div class="text-center mb-24">
                <h2 class="d-inline-block bg-dark text-white text-center p-16">泰汪泰式料理</h2>
            </div>
            <h3 class="h4 text-center mb-16">後台登入</h3>
            <v-form ref="form" v-slot="{ errors }" @submit="login">
                <div class="form-floating mb-16">
                    <v-field id="floatingInput" name="帳號" type="email" class="form-control" v-model="user.username"
                        :class="{ 'is-invalid': errors['帳號'] }" placeholder="xxx@mail.com" rules="required"></v-field>
                    <label for="floatingInput">帳號</label>
                    <error-message name="帳號" class="invalid-feedback fw-bold"></error-message>
                </div>
                <div class="form-floating mb-32">
                    <v-field id="floatingPassword" name="密碼" type="password" class="form-control"
                        v-model="user.password" :class="{ 'is-invalid': errors['密碼'] }" placeholder="Password"
                        rules="required"></v-field>
                    <label for="floatingPassword">密碼</label>
                    <error-message name="密碼" class="invalid-feedback fw-bold"></error-message>
                </div>
                <button type="submit" class="btn btn-dark btn-lg w-100 mb-16">登入</button>
                <RouterLink to="/" class="btn btn-outline-gray btn-lg w-100">回到前台</RouterLink>
            </v-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';
import { toast } from '@/methods/sweetalert';

const { VITE_API } = import.meta.env;

export default {
    components: { RouterLink },
    data() {
        return {
            user: {
                username: '',
                password: '',
            }
        };
    },
    methods: {
        login() {
            axios.post(`${VITE_API}/admin/signin`, this.user)
                .then(res => {
                    this.$refs.form.resetForm();
                    const { token, expired } = res.data;
                    document.cookie = `myToken=${token}; expires=${new Date(expired)};`;
                    this.user = {
                        username: '',
                        password: '',
                    },
                        toast('top', 'success', res.data.message);
                    setTimeout(() => this.$router.push('/admin'), 1500);
                })
                .catch(err => {
                    toast('top', 'error', err.response.data.message);
                });
        },
    },
}
</script>