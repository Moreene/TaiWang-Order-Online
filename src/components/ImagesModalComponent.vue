<template>
    <div id="imageModal" ref="imageModal" class="modal fade" tabindex="-1" aria-labelledby="imageModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content border-0">
                <div class="modal-header bg-dark-blue text-white">
                    <h5 id="imageModalLabel" class="modal-title">
                        編輯圖片
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        @click="clearInput"></button>
                </div>
                <v-form ref="form" v-slot="{ errors }" @submit="updateProduct">
                    <div class="modal-body p-24">
                        <div class="row justify-content-evenly gy-48 gy-xl-0">
                            <div class="col-xl-5">
                                <div class="bg-dark-blue p-32 rounded-1">
                                    <div class="input-group mb-16">
                                        <input type="file" class="form-control" aria-label="Upload"
                                            name="file-to-upload" @change="uploadImg($event)" ref="fileInput">
                                    </div>
                                    <p class="text-white mb-8">複製圖片網址</p>
                                    <div class="input-group mb-16">
                                        <input type="text" class="form-control" v-model="url" ref="imgUrl">
                                        <button class="btn btn-gray" type="button" @click="copyUrl"><i class="bi bi-copy"></i></button>
                                    </div>
                                    <p class="text-white mb-8">圖片預覽</p>
                                    <img :src="url" alt="圖片預覽" style="width: 100%;height: 200px;" v-if="url">
                                    <img src="https://fakeimg.pl/377x250/" alt="圖片區" style="width: 100%;height: 250px;" v-else>
                                </div>
                            </div>
                            <div class="col-xl-5">
                                <div class="mb-8">
                                    <div class="mb-16">
                                        <label for="imageUrl" class="form-label">新增主圖</label>
                                        <v-field id="imageUrl" name="主圖連結" type="text" class="form-control"
                                            v-model="product.imageUrl" :class="{ 'is-invalid': errors['主圖連結'] }"
                                            placeholder="請輸入圖片連結" rules="required"></v-field>
                                        <error-message name="主圖連結" class="invalid-feedback"></error-message>
                                    </div>
                                    <!-- <img class="modal-img w-100" :src="product.imageUrl" alt="主圖"
                                        v-if="product.imageUrl"> -->
                                </div>
                                <!-- 如果product.imagesUrl不為空，顯示以下資訊 -->
                                <div class="mb-8" v-if="product.imagesUrl">
                                    <div class="mb-16" v-for="(item, idx) in product.imagesUrl" :key="'img' + idx">
                                        <label :for="'imageURL' + (idx + 1)" class="form-label">副圖{{ idx + 1 }}</label>
                                        <v-field :id="'imageURL' + (idx + 1)" :name="'副圖' + (idx + 1)" type="text"
                                            class="form-control" v-model="product.imagesUrl[idx]"
                                            :class="{ 'is-invalid': errors['副圖' + (idx + 1)] }" placeholder="請輸入副圖連結"
                                            rules="required"></v-field>
                                        <error-message :name="'副圖' + (idx + 1)"
                                            class="invalid-feedback"></error-message>
                                        <!-- v-if="item.length"：檢查目前item（圖像 URL）的屬性是否為真
                                        - 如果item是undefined或空字串，則條件計算結果為假，則不渲染影像 -->
                                        <!-- <img class="modal-img w-100" v-if="item.length" :src="item"> -->
                                    </div>
                                    <!-- 若陣列為空或最後一個元素為真，則顯示「新增圖片」按鈕；否則，顯示“刪除圖片”按鈕 -->
                                    <div v-if="!product.imagesUrl.length || product.imagesUrl.at(-1).trim()">
                                        <button class="btn btn-outline-primary btn-sm d-block w-100"
                                            @click="product.imagesUrl.push('')">
                                            新增圖片
                                        </button>
                                    </div>
                                    <div v-else>
                                        <button class="btn btn-outline-danger btn-sm d-block w-100"
                                            @click="product.imagesUrl.pop()">
                                            刪除圖片
                                        </button>
                                    </div>
                                </div>
                                <!-- 如果product.imagesUrl為空，則顯示此按鈕，允許新增第一張圖像。 -->
                                <!-- product.imagesUrl=['']替換了數組引用 -->
                                <div v-else>
                                    <button class="btn btn-outline-primary btn-sm d-block w-100"
                                        @click="product.imagesUrl = [product.imageUrl, '']">
                                        新增圖片
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-dark-blue w-25" data-bs-dismiss="modal"
                            @click="clearInput">
                            取消
                        </button>
                        <button type="submit" class="btn btn-dark-blue w-25">
                            確認
                        </button>
                    </div>
                </v-form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Modal from 'bootstrap/js/dist/modal';

import { sweetalert } from '@/methods/sweetalert';

const { VITE_API, VITE_APIPATH } = import.meta.env;

export default {
    props: ['tempProduct'],
    data() {
        return {
            imageModal: null,
            product: {},
            url: '',
        }
    },
    methods: {
        uploadImg(event) {
            const file = event.target.files[0];
            const formData = new FormData();
            formData.append("file-to-upload", file);
            axios.post(`${VITE_API}/api/${VITE_APIPATH}/admin/upload`, formData)
                .then(res => {
                    this.url = res.data.imageUrl;
                    this.$refs.fileInput.value = '';
                })
                .catch(err => {
                    sweetalert('error','圖片上傳失敗');
                });
        },
        copyUrl(){
            navigator.clipboard.writeText(this.$refs.imgUrl.value)
                .then(res => {
                    sweetalert('success','已複製圖片Url');
                })
                .catch(err => {
                    sweetalert('error','複製圖片Url失敗');
                });
        },
        updateProduct() {
            const updateData = {
                ...this.product,
                imageUrl: this.product.imageUrl,
                imagesUrl: this.product.imagesUrl,
                hot: this.product.hot === true ? 1 : 0,
                recommendation: this.product.recommendation === true ? 1 : 0,
                is_enabled: this.product.is_enabled === true ? 1 : 0,
            };
            axios.put(`${VITE_API}/api/${VITE_APIPATH}/admin/product/${updateData.id}`, { data: updateData })
                .then(res => {
                    sweetalert('success', res.data.message);
                    this.$emit('update');
                    this.clearInput();
                    this.imageModal.hide();
                }).catch(err => {
                    sweetalert('error', err.response.data.message);
                });
        },
        clearInput() {
            this.url = '';
            this.$emit('clearInput')
        },
        resetForm() {
            this.$refs.form.resetForm();
        },
    },
    watch: {
        tempProduct() {
            this.product = this.tempProduct;
        },
    },
    mounted() {
        this.imageModal = new Modal(this.$refs.imageModal, {
            keyboard: false,
            backdrop: 'static',
        });
    },
}
</script>