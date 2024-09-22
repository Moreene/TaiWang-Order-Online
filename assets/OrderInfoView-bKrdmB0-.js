import{u as N}from"./useCartStore-KlgxLiAS.js";import{P as L}from"./ProgessBarComponent-YZullXDh.js";import{L as R}from"./LoadingComponent-tQTno5Zf.js";import{t as x}from"./sweetalert-wF95ZFT_.js";import{u as B,Z as O,i as w,s as $,j,G as q,k as p,o as b,c as f,l,b as s,x as M,a as e,F as y,r as D,e as d,t as h,d as F,m as V,n as i}from"./index-jpjlqHC5.js";import{a as z}from"./axios-G2rPRu76.js";var H={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Z={class:"bg-wave"},G={class:"container"},J={class:"col-lg-10 mx-auto pb-72"},K={class:"row justify-content-between gy-48 gy-lg-0"},Q={class:"col-lg-6"},W={class:"table-responsive"},X={class:"table table-borderless mb-0"},Y=e("thead",{class:"border-bottom border-dark border-top-0 border-start-0 border-end-0 border-2 text-nowrap"},[e("tr",{class:"text-center"},[e("th",{scope:"col",class:"bg-wave",style:{width:"100px"}},"示意圖"),e("th",{scope:"col",class:"bg-wave"},"餐點名稱"),e("th",{scope:"col",class:"bg-wave"},"餐點數量"),e("th",{scope:"col",class:"bg-wave"},"單價")])],-1),ee={class:"text-center text-nowrap"},se={scope:"row",class:"fw-normal bg-wave"},te=["src","alt"],oe={class:"bg-wave"},ae={class:"bg-wave"},le={class:"bg-wave"},re={class:"text-notoSans"},ne={class:"text-end fw-bold fs-5 mt-16 mb-0"},de=e("span",{class:"me-8"},"總計：",-1),ce={class:"text-notoSans"},ie={key:0,class:"text-end fw-bold text-danger"},me={class:"col-lg-5"},ue={class:"border border-gray bg-white rounded-2 p-20"},_e=e("h2",{class:"h4 text-center fw-bold mb-24"},"訂購資訊",-1),pe={class:"mb-16"},be=e("label",{for:"name",class:"form-label"},[d("姓名 "),e("span",{class:"text-danger"},"*")],-1),fe={class:"mb-16"},he=e("label",{for:"tel",class:"form-label"},[d("手機 "),e("span",{class:"text-danger"},"*")],-1),ve={class:"mb-16"},ge=e("label",{for:"email",class:"form-label"},[d("Email "),e("span",{class:"text-danger"},"*")],-1),xe={class:"mb-16"},we=e("label",{for:"address",class:"form-label"},[d("地址 "),e("span",{class:"text-danger"},"*")],-1),ye={class:"mb-24"},Ve=e("label",{for:"備註",class:"form-label"},"備註",-1),ke={class:"d-flex justify-content-between"},Ie=["disabled"],Ne={__name:"OrderInfoView",setup(Te){const{VITE_API:k,VITE_APIPATH:I}=H,T=B(),a=O({user:{name:"",email:"",tel:"",address:""},message:""}),v=w(null),m=w(!0),g=N(),{getCart:E}=g;function P(r){return/^(09)[0-9]{8}$/.test(r)?!0:"請輸入 09 開頭的手機號碼"}function S(){z.post(`${k}/api/${I}/order`,{data:a}).then(r=>{const{orderId:t}=r.data;x("top","success","訂單已成立"),localStorage.removeItem("pickUp"),setTimeout(()=>{E(),T.push(`/payment/${t}`)},1500)}).catch(()=>{x("top","error","表單送出失敗")})}const{cart:u}=$(g),U=j(()=>{const{user:r}=a;return!r.name||!r.email||!r.tel||!r.address});return q(()=>{localStorage.getItem("pickUp")==="自取"&&(a.user.address="自取",v.value.$el.setAttribute("readonly","readonly"))}),setTimeout(()=>m.value=!1,400),(r,t)=>{const c=p("v-field"),_=p("error-message"),A=p("RouterLink"),C=p("v-form");return b(),f(y,null,[l(R,{active:s(m),"onUpdate:active":t[0]||(t[0]=o=>M(m)?m.value=o:null)},null,8,["active"]),e("div",Z,[e("div",G,[e("div",J,[l(L),e("div",K,[e("div",Q,[e("div",W,[e("table",X,[Y,e("tbody",ee,[(b(!0),f(y,null,D(s(u).carts,o=>(b(),f("tr",{key:o.id,class:"align-middle border-bottom border-dark"},[e("th",se,[e("img",{src:o.product.imageUrl,alt:o.product.title,style:{width:"100px",height:"100px"}},null,8,te)]),e("td",oe,h(o.product.title),1),e("td",ae,h(o.qty),1),e("td",le,[d("NT$ "),e("span",re,h(o.product.price),1)])]))),128))])])]),e("p",ne,[de,d("NT$ "),e("span",ce,h(Math.round(s(u).final_total)),1)]),s(u).final_total!==s(u).total?(b(),f("p",ie,"(已使用優惠代碼)")):F("",!0)]),e("div",me,[e("div",ue,[_e,l(C,{onSubmit:S},{default:V(({errors:o})=>[e("div",pe,[be,l(c,{id:"name",name:"姓名",type:"text",class:i(["form-control border-gray",{"is-invalid":o.姓名}]),modelValue:s(a).user.name,"onUpdate:modelValue":t[1]||(t[1]=n=>s(a).user.name=n),placeholder:"請輸入姓名",rules:"required"},null,8,["modelValue","class"]),l(_,{name:"姓名",class:"invalid-feedback fw-bold"})]),e("div",fe,[he,l(c,{id:"tel",name:"手機",type:"tel",class:i(["form-control border-gray",{"is-invalid":o.手機}]),modelValue:s(a).user.tel,"onUpdate:modelValue":t[2]||(t[2]=n=>s(a).user.tel=n),placeholder:"請輸入手機號碼",rules:P},null,8,["modelValue","class"]),l(_,{name:"手機",class:"invalid-feedback fw-bold"})]),e("div",ve,[ge,l(c,{id:"email",name:"email",type:"email",class:i(["form-control border-gray",{"is-invalid":o.email}]),modelValue:s(a).user.email,"onUpdate:modelValue":t[3]||(t[3]=n=>s(a).user.email=n),placeholder:"請輸入 Email",rules:"email|required"},null,8,["modelValue","class"]),l(_,{name:"email",class:"invalid-feedback fw-bold"})]),e("div",xe,[we,l(c,{id:"address",name:"地址",type:"text",class:i(["form-control border-gray",{"is-invalid":o.地址}]),modelValue:s(a).user.address,"onUpdate:modelValue":t[4]||(t[4]=n=>s(a).user.address=n),placeholder:"請輸入地址",rules:"required",ref_key:"address",ref:v},null,8,["modelValue","class"]),l(_,{name:"地址",class:"invalid-feedback fw-bold"})]),e("div",ye,[Ve,l(c,{as:"textarea",id:"備註",name:"備註",class:i(["form-control border-gray",{"is-invalid":o.備註}]),modelValue:s(a).message,"onUpdate:modelValue":t[5]||(t[5]=n=>s(a).message=n),style:{height:"150px"}},null,8,["modelValue","class"])]),e("div",ke,[l(A,{to:"/cart",class:"btn btn-outline-dark"},{default:V(()=>[d("回上一頁")]),_:1}),e("button",{type:"submit",class:"btn btn-primary text-white",disabled:s(U)},"送出訂單",8,Ie)])]),_:1})])])])])])])],64)}}};export{Ne as default};
