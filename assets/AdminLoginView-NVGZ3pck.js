import{t as u}from"./sweetalert-wF95ZFT_.js";import{i as _,u as x,k as n,o as k,c as V,a as e,l as t,m as f,n as p,b as l,e as P}from"./index-jpjlqHC5.js";import{a as I}from"./axios-G2rPRu76.js";var y={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const A={class:"bg-primary vh-100 d-flex justify-content-center align-items-center"},E={class:"w-lg-50 w-xl-25 bg-white rounded-1 p-32"},T=e("div",{class:"text-center mb-24"},[e("h2",{class:"d-inline-block bg-dark text-white text-center p-16"},"泰汪泰式料理")],-1),B=e("h3",{class:"h4 text-center mb-16"},"後台登入",-1),R={class:"form-floating mb-16"},L=e("label",{for:"floatingInput"},"帳號",-1),O={class:"form-floating mb-32"},S=e("label",{for:"floatingPassword"},"密碼",-1),C=e("button",{type:"submit",class:"btn btn-dark btn-lg w-100 mb-16"},"登入",-1),z={__name:"AdminLoginView",setup(D){const{VITE_API:b}=y,s=_({username:"",password:""}),d=_(null),g=x();function v(){I.post(`${b}/admin/signin`,s.value).then(r=>{d.value.resetForm();const{token:o,expired:a}=r.data;document.cookie=`myToken=${o}; expires=${new Date(a)};`,u("top","success",r.data.message),setTimeout(()=>g.push("/admin"),1500)}).catch(()=>{u("top","error","登入失敗")})}return(r,o)=>{const a=n("v-field"),c=n("error-message"),h=n("RouterLink"),w=n("v-form");return k(),V("div",A,[e("div",E,[T,B,t(w,{ref_key:"form",ref:d,onSubmit:v},{default:f(({errors:m})=>[e("div",R,[t(a,{id:"floatingInput",name:"帳號",type:"email",class:p(["form-control",{"is-invalid":m.帳號}]),modelValue:l(s).username,"onUpdate:modelValue":o[0]||(o[0]=i=>l(s).username=i),placeholder:"xxx@mail.com",rules:"required"},null,8,["modelValue","class"]),L,t(c,{name:"帳號",class:"invalid-feedback fw-bold"})]),e("div",O,[t(a,{id:"floatingPassword",name:"密碼",type:"password",class:p(["form-control",{"is-invalid":m.密碼}]),modelValue:l(s).password,"onUpdate:modelValue":o[1]||(o[1]=i=>l(s).password=i),placeholder:"Password",rules:"required"},null,8,["modelValue","class"]),S,t(c,{name:"密碼",class:"invalid-feedback fw-bold"})]),C,t(h,{to:"/",class:"btn btn-outline-gray btn-lg w-100"},{default:f(()=>[P("回到前台")]),_:1})]),_:1},512)])])}}};export{z as default};