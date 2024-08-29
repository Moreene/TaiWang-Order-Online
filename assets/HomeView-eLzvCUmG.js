import{_ as L,s as _,i as V,k as C,o as i,c as r,l as a,b as v,x as M,a as t,m as f,F as h,r as I,q as m,e as u,t as N,p as R,g as $}from"./index-WXTl0fys.js";import{u as j}from"./useProductStore-cZnrYjLq.js";import{u as B}from"./useCategoryStore-z1zrTGzc.js";import{S as E}from"./SwiperComponent-hMs5Inw2.js";import{L as z}from"./LoadingComponent-WMBPQsFW.js";import"./axios-G2rPRu76.js";import"./useCartStore-_lpLLSn2.js";import"./sweetalert-7F7hic-m.js";const p=o=>(R("data-v-5ef03959"),o=o(),$(),o),F={class:"banner bg-repeat-no bg-size-cover d-flex justify-content-center align-items-center"},H={class:"banner-box rounded-4 d-flex justify-content-center align-items-center"},O={class:"text-center"},P=m('<h2 class="fw-800" data-v-5ef03959>泰式美味線上點</h2><h2 class="fw-800 mb-24" data-v-5ef03959>選擇泰汪，越吃越旺！</h2><h3 class="text-notoSans text-danger fs-5 mb-32" data-v-5ef03959><i class="bi bi-balloon fs-5 text-danger" data-v-5ef03959></i> 線上訂餐，再享85折優惠 <i class="bi bi-balloon fs-5 text-danger" data-v-5ef03959></i></h3>',3),T={class:"container"},U={class:"py-72"},q=p(()=>t("h3",{class:"text-center fw-bold mb-16"},"暢銷餐點",-1)),D={class:"text-center"},A=m('<div class="bg-wave py-72" data-v-5ef03959><div class="container" data-v-5ef03959><h3 class="text-center fw-bold mb-32" data-v-5ef03959>訂購需知</h3><div class="row gy-48 gy-lg-0" data-v-5ef03959><div class="col-md-6 col-lg-3" data-v-5ef03959><div class="card h-100 rounded-1 border-gray p-20" data-v-5ef03959><h4 class="fs-6 fw-800 text-notoSans" data-v-5ef03959>慶祝開幕，全館免運費</h4><p class="text-notoSans" data-v-5ef03959>截至2024/12/31止，全館免運費，限制距離在15km以內才提供外送服務。</p><p class="text-notoSans" data-v-5ef03959>※ 外送路況多變，抵達時間可能會提前或延後15~20分鐘，還請體諒外送人員辛勞，謝謝您！</p></div></div><div class="col-md-6 col-lg-3" data-v-5ef03959><div class="card h-100 rounded-1 border-gray p-20" data-v-5ef03959><h4 class="fs-6 fw-800 text-notoSans" data-v-5ef03959>最低消費說明</h4><p class="text-notoSans" data-v-5ef03959>外送服務最低消費 500 元，才享有外送服務，請特別留意！</p><p class="text-notoSans" data-v-5ef03959>※ 以優惠折扣後金額計算</p></div></div><div class="col-md-6 col-lg-3" data-v-5ef03959><div class="card h-100 rounded-1 border-gray p-20" data-v-5ef03959><h4 class="fs-6 fw-800 text-notoSans" data-v-5ef03959>下單注意事項</h4><p class="text-notoSans" data-v-5ef03959>線上下單僅接收信用卡付款，無取貨付款的選項。</p><p class="text-notoSans" data-v-5ef03959>訂單送出後，恕無法取消或修改，下單前請務必確認餐點內容、自取或是外送服務。</p></div></div><div class="col-md-6 col-lg-3" data-v-5ef03959><div class="card h-100 rounded-1 border-gray p-20" data-v-5ef03959><h4 class="fs-6 fw-800 text-notoSans" data-v-5ef03959>其他說明</h4><p class="text-notoSans" data-v-5ef03959>總金額 2500 元 (含) 以上之大型訂單，請至少提前兩天直接來電訂購唷。</p></div></div></div></div></div>',1),G={class:"container"},J={class:"py-72"},K=p(()=>t("h3",{class:"text-center fw-bold mb-32"},"美味分類",-1)),Q={class:"row gy-48"},W={class:"d-flex flex-column align-items-center"},X={class:"position-relative tasty-wrapper"},Y=p(()=>t("div",{class:"tasty-overlay position-absolute w-100 h-100 top-0 start-0 z-1"},null,-1)),Z={class:"position-absolute w-100 top-50 translate-middle-y"},tt={class:"d-flex justify-content-end"},st={class:"tasty-text bg-danger fs-5 fs-lg-4 fw-bold text-light text-notoSans text-align-start py-12 ps-8"},et=["src","alt"],at={__name:"HomeView",setup(o){const g=j(),x=B(),{sellProducts:b,isLoading:c}=_(g),{categories:y}=_(x),l=V([]);function S(n){l.value.forEach((d,e)=>{e!==n&&d.$el.classList.add("hovered")})}function w(){l.value.forEach(n=>{n.$el.classList.remove("hovered")})}return(n,d)=>{const e=C("RouterLink");return i(),r(h,null,[a(z,{active:v(c),"onUpdate:active":d[0]||(d[0]=s=>M(c)?c.value=s:null)},null,8,["active"]),t("div",F,[t("div",H,[t("div",O,[P,a(e,{to:"/products",type:"button",class:"btn btn-secondary link-light text-notoSans px-52 py-8"},{default:f(()=>[u(" 立即訂餐 ")]),_:1})])])]),t("div",T,[t("div",U,[q,a(E,{products:v(b),class:"mb-48"},null,8,["products"]),t("div",D,[a(e,{to:"/categories/recommendation",class:"btn btn-secondary link-light text-notoSans px-52 py-8"},{default:f(()=>[u(" 查看更多")]),_:1})])])]),A,t("div",G,[t("div",J,[K,t("div",Q,[(i(!0),r(h,null,I(v(y),(s,k)=>(i(),r("div",{key:s.name,class:"col-6 col-md-3"},[t("div",W,[a(e,{to:`/categories/${s.path}`,ref_for:!0,ref_key:"tastyLinks",ref:l,onMouseover:ot=>S(k),onMouseout:w},{default:f(()=>[t("div",X,[Y,t("div",Z,[t("div",tt,[t("div",st,N(s.name),1)])]),t("img",{src:s.imageUrl,alt:s.name,class:"w-100 h-100"},null,8,et)])]),_:2},1032,["to","onMouseover"])])]))),128))])])])],64)}}},pt=L(at,[["__scopeId","data-v-5ef03959"]]);export{pt as default};
