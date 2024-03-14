<template>
    <div id="editOrderModal" ref="editOrderModal" class="modal fade" tabindex="-1" aria-labelledby="editOrderModalLabel"
        aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered modal-xl">
            <div class="modal-content border-0">
                <div class="modal-header bg-primary text-white">
                    <h5 id="editOrderModalLabel" class="modal-title">
                        <span>{{ order.id }}</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="$emit('clearInput')"></button>
                </div>
                <div class="modal-body">
                    <v-form ref="form" v-slot="{ errors }" @submit="updateOrder">
                        <h2 class="h5 fw-bold">訂單編號：<span class="d-block d-sm-inline">{{ order.id }}</span></h2>
                        <h2 class="h5 fw-bold">訂單日期：{{ date }}</h2>
                        <div class="row py-24">
                            <div class="col-lg-6">
                                <div class="row gy-16" v-if="order.user">
                                    <div class="col-md-6">
                                        <label for="people" class="form-label">訂購人</label>
                                        <input id="people" type="text" class="form-control" v-model="order.user.name"
                                            readonly>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="phone" class="form-label">手機</label>
                                        <input id="phone" type="tel" class="form-control" v-model="order.user.tel"
                                            readonly>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="mail" class="form-label">信箱</label>
                                        <input id="mail" type="email" class="form-control" v-model="order.user.email"
                                            readonly>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="address" class="form-label">地址</label>
                                        <v-field id="address" name="地址" type="text" class="form-control"
                                            v-model="order.user.address" :class="{ 'is-invalid': errors['地址'] }"
                                            rules="required"></v-field>
                                        <error-message name="地址" class="invalid-feedback"></error-message>
                                    </div>
                                    <div class="col-12">
                                        <label for="extarea">留言</label>
                                        <textarea class="form-control" id="extarea" style="height: 100px;"
                                            v-model="order.message"></textarea>
                                    </div>
                                    <div class="col-12" v-if="!order.is_paid">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" v-model="order.is_paid"
                                                id="check">
                                            <label class="form-check-label" for="check">
                                                已付款
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div v-if="order && order.products">
                                    訂購內容 ({{ Object.keys(order.products).length }})
                                </div>
                                <hr class="my-8">
                                <ol class="ps-16 py-8">
                                    <li v-for="item in order.products" :key="item.id">
                                        {{ item.product.title }} x {{ item.qty }}
                                    </li>
                                </ol>
                                <hr class="my-8">
                                <p>總金額：NT$ {{ Math.round(order.total) }}</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-primary w-20 me-16" data-bs-dismiss="modal"
                                @click="$emit('clearInput')">
                                取消
                            </button>
                            <button type="submit" class="btn btn-primary text-white w-20">
                                確認
                            </button>
                        </div>
                    </v-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Modal from 'bootstrap/js/dist/modal';

import { formatDate } from '@/methods/date';
import { sweetalert } from '@/methods/sweetalert';

const { VITE_API, VITE_APIPATH } = import.meta.env;

export default {
    props: ["tempOrder"],
    data() {
        return {
            order: {},
            editOrderModal: null,
        };
    },
    methods: {
        updateOrder() {
            axios.put(`${VITE_API}/api/${VITE_APIPATH}/admin/order/${this.tempOrder.id}`, { "data": this.order })
                .then(res => {
                    sweetalert('success', res.data.message);
                    this.$emit('updateOrder');
                    this.$emit('clearInput');
                    this.editOrderModal.hide();
                })
                .catch(err => {
                    sweetalert('error', err.response.data.message);
                });
        },
        resetForm() {
            this.$refs.form.resetForm();
        },
    },
    computed: {
        date() {
            return formatDate(this.order.paid_date * 1000);
        },
    },
    watch: {
        tempOrder() {
            this.order = JSON.parse(JSON.stringify(this.tempOrder));
        },
    },
    mounted() {
        this.editOrderModal = new Modal(this.$refs.editOrderModal, {
            keyboard: false,
            backdrop: 'static'
        });
    },
};
</script>