import{_ as q,u as D,i as v,s as W,C as z,k as F,o as d,c as i,l as g,b as e,x as h,a as t,F as k,t as u,d as V,n as H,r as J,e as l,m as $,w as N,f as b,Y as w,v as M,p as K,g as Q}from"./index-jpjlqHC5.js";import{t as m,S as Y}from"./sweetalert-wF95ZFT_.js";import{u as Z}from"./useCartStore-KlgxLiAS.js";import{P as G}from"./ProgessBarComponent-YZullXDh.js";import{L as X}from"./LoadingComponent-tQTno5Zf.js";import{a as P}from"./axios-G2rPRu76.js";const tt="/TaiWang-Order-Online/empety-cart.png";var st={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const o=f=>(K("data-v-ac8943c0"),f=f(),Q(),f),et={class:"bg-wave"},ot={class:"container"},nt={class:"col-lg-10 mx-auto"},at={class:"mb-48"},lt={key:0,class:"h5 bg-gray text-light ps-12 py-16 mb-0"},ct={class:"table table-borderless mb-0"},dt=o(()=>t("thead",{class:"border-bottom border-dark text-nowrap"},[t("tr",{class:"text-center"},[t("th",{scope:"col",style:{width:"180px"}},"示意圖"),t("th",{scope:"col"},"餐點名稱"),t("th",{scope:"col"},"單價"),t("th",{scope:"col",style:{width:"250px"}},"數量"),t("th",{scope:"col",class:"d-none d-md-block"},"小計"),t("th",{scope:"col"},"刪除")])],-1)),it={class:"text-center text-nowrap"},rt={scope:"row",class:"fw-normal"},_t=["src","alt"],pt={class:"text-notoSans"},ut={class:"d-flex justify-content-center"},ht={class:"input-group w-75 d-flex align-items-end"},bt=["onClick","disabled"],mt=o(()=>t("i",{class:"bi bi-dash"},null,-1)),ft=[mt],yt=["onUpdate:modelValue"],vt=["onClick"],gt=o(()=>t("i",{class:"bi bi-plus"},null,-1)),xt=[gt],kt={class:"d-none d-md-table-cell"},wt={class:"text-notoSans"},Ct=["onClick"],St=o(()=>t("i",{class:"bi bi-trash fs-5 link-gray"},null,-1)),Tt=[St],Bt={class:"border border-dark border-top-0 bg-white p-12"},It={class:"d-flex justify-content-between"},Vt=o(()=>t("i",{class:"bi bi-arrow-right"},null,-1)),$t=o(()=>t("span",{class:"text-notoSans d-inline-block p-6 bg-danger text-white me-6"},"優惠促銷",-1)),Nt={class:"text-notoSans"},Mt={class:"row gy-48 gy-md-0 pb-72"},Pt={class:"col-md-7"},At=o(()=>t("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"取餐方式",-1)),Et={class:"border border-dark bg-white"},Ut={class:"ps-12 py-16"},jt={class:"form-check form-check-inline"},Rt=o(()=>t("label",{class:"form-check-label",for:"pickup"},"自取",-1)),Lt={class:"form-check form-check-inline"},Ot=["disabled"],qt=o(()=>t("label",{class:"form-check-label",for:"delivery"},[l("外送 "),t("span",{class:"text-gray"},"(折扣後滿500元)")],-1)),Dt={class:"border border-dark border-top-0 bg-white"},Wt=o(()=>t("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"送貨及付款方式",-1)),zt={class:"ps-12 py-16"},Ft={class:"mb-16"},Ht=o(()=>t("label",{for:"送貨方式",class:"form-label"},"送貨方式",-1)),Jt={key:0,type:"text",id:"送貨方式",class:"form-control w-75",value:"自取",disabled:""},Kt={key:1,type:"text",id:"送貨方式",class:"form-control w-75",value:"泰汪小蜜蜂",disabled:""},Qt=o(()=>t("div",null,[t("label",{for:"付款方式",class:"form-label"},"付款方式"),t("input",{type:"text",id:"付款方式",class:"form-control w-75",value:"信用卡 (支援VISA、JCB、Master)",disabled:""})],-1)),Yt={class:"col-md-5"},Zt={class:"h-100 border border-dark bg-white"},Gt=o(()=>t("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"訂單資訊",-1)),Xt={class:"border-bottom border-dark px-12 py-16"},ts={class:"d-flex justify-content-between"},ss=o(()=>t("p",null,"小計：",-1)),es={class:"text-notoSans"},os=o(()=>t("div",{class:"d-flex justify-content-between"},[t("p",null,"運費："),t("p",null,[l("NT$ "),t("span",{class:"text-notoSans"},"0")])],-1)),ns=o(()=>t("p",{class:"mb-8"},"優惠代碼",-1)),as={class:"d-flex"},ls=["disabled"],cs={class:"px-12 py-24 pb-md-0"},ds={class:"d-flex justify-content-between"},is=o(()=>t("p",{class:"fw-bold"},"合計：",-1)),rs={class:"fw-bold"},_s={class:"text-notoSans"},ps={key:0,class:"text-danger ms-4"},us={key:1,class:"pb-72 text-center"},hs=o(()=>t("h2",{class:"mb-16"},"Oops,目前購物車內沒有東西唷！",-1)),bs={class:"mb-32"},ms=o(()=>t("img",{src:tt,class:"empety-cart",alt:"空購物車"},null,-1)),fs={__name:"CartView",setup(f){const{VITE_API:C,VITE_APIPATH:S}=st,A=D(),_=v(""),c=v("自取"),y=v(!0),T=Z(),{cart:a}=W(T),{increaseCartNum:E,decreaseCartNum:U,getCart:B}=T;function j(r){const n=r.product.title;Y.mixin({customClass:{confirmButton:"btn btn-secondary text-light",cancelButton:"btn btn-outline-secondary me-16"},buttonsStyling:!1}).fire({title:`是否要刪除 ${n} ？`,icon:"warning",showCancelButton:!0,confirmButtonText:"是, 我要刪除",cancelButtonText:"我再想想",reverseButtons:!0}).then(s=>{s.isConfirmed&&P.delete(`${C}/api/${S}/cart/${r.id}`).then(()=>{m("top","warning",`已刪除 "${n}"`),B()}).catch(p=>{console.log(p)})})}function R(){const r={code:_.value};P.post(`${C}/api/${S}/coupon`,{data:r}).then(()=>{m("top","success","已成功使用優惠代碼"),B(),_.value=""}).catch(()=>{m("top","error","優惠代碼使用失敗"),_.value=""})}function L(){localStorage.setItem("pickUp",c.value),A.push("/orderInfo")}const I=v(null);function O(r){const n=I.value.innerText;navigator.clipboard.writeText(n).then(()=>{r.target.blur(),m("top","success","已成功複製優惠代碼")}).catch(()=>{m("top","error","複製優惠代碼失敗")})}return z(()=>a.value.final_total,r=>{typeof r<"u"&&Math.round(r)<500&&(c.value="自取")},{immediate:!0}),setTimeout(()=>y.value=!1,400),(r,n)=>{const x=F("RouterLink");return d(),i(k,null,[g(X,{active:e(y),"onUpdate:active":n[0]||(n[0]=s=>h(y)?y.value=s:null)},null,8,["active"]),t("div",et,[t("div",ot,[t("div",nt,[g(G),e(a).carts&&e(a).carts.length?(d(),i(k,{key:0},[t("div",at,[e(a).carts?(d(),i("h2",lt,"購物車 ( "+u(e(a).carts.length)+" ) ",1)):V("",!0),t("div",{class:H(["table-responsive border border-dark",{"fixed-height":e(a).carts&&e(a).carts.length>3}])},[t("table",ct,[dt,t("tbody",it,[(d(!0),i(k,null,J(e(a).carts,s=>(d(),i("tr",{key:s.id,class:"align-middle border-bottom"},[t("th",rt,[t("img",{src:s.product.imageUrl,alt:s.product.title,class:"food-img"},null,8,_t)]),t("td",null,u(s.product.title),1),t("td",null,[l("NT$ "),t("span",pt,u(s.product.price),1)]),t("td",null,[t("div",ut,[t("div",ht,[t("button",{class:"btn btn-secondary text-light d-flex justify-content-center align-items-center d-none d-md-block",type:"button",onClick:p=>e(U)(s),disabled:s.qty===1},ft,8,bt),b(t("input",{type:"text",class:"form-control text-center p-0 py-md-6 px-md-12",min:"1","onUpdate:modelValue":p=>s.qty=p,readonly:""},null,8,yt),[[M,s.qty,void 0,{number:!0}]]),t("button",{class:"btn btn-secondary text-light d-flex justify-content-center align-items-center d-none d-md-block",type:"button",onClick:p=>e(E)(s)},xt,8,vt)])])]),t("td",kt,[l("NT$ "),t("span",wt,u(s.qty*s.product.price),1)]),t("td",null,[t("a",{href:"#",onClick:N(p=>j(s),["prevent"])},Tt,8,Ct)])]))),128))])])],2),t("div",Bt,[t("p",It,[l("更多精彩優惠等著您使用！ "),g(x,{to:"/products",class:"link-gold"},{default:$(()=>[l("繼續購物 "),Vt]),_:1})]),$t,t("span",Nt,[l("輸入「 "),t("span",{ref_key:"code",ref:I},"tai6666",512),l(" 」優惠代碼再享 85 折 ﹙"),t("a",{href:"#",class:"link-danger",onClick:n[1]||(n[1]=N(s=>O(s),["prevent"]))},"點我複製"),l("﹚")])])]),t("div",Mt,[t("div",Pt,[At,t("div",Et,[t("div",Ut,[t("div",jt,[Math.round(e(a).final_total)<500?b((d(),i("input",{key:0,class:"form-check-input border-gray",type:"radio",name:"取餐方式",id:"pickup",value:"自取","onUpdate:modelValue":n[2]||(n[2]=s=>h(c)?c.value=s:null),checked:""},null,512)),[[w,e(c)]]):b((d(),i("input",{key:1,class:"form-check-input border-gray",type:"radio",name:"取餐方式",id:"pickup",value:"自取","onUpdate:modelValue":n[3]||(n[3]=s=>h(c)?c.value=s:null)},null,512)),[[w,e(c)]]),Rt]),t("div",Lt,[b(t("input",{class:"form-check-input border-gray",type:"radio",name:"取餐方式",id:"delivery",value:"外送","onUpdate:modelValue":n[4]||(n[4]=s=>h(c)?c.value=s:null),disabled:Math.round(e(a).final_total)<500},null,8,Ot),[[w,e(c)]]),qt])])]),t("div",Dt,[Wt,t("div",zt,[t("div",Ft,[Ht,e(c)==="自取"||Math.round(e(a).final_total)<500?(d(),i("input",Jt)):(d(),i("input",Kt))]),Qt])])]),t("div",Yt,[t("div",Zt,[Gt,t("div",Xt,[t("div",ts,[ss,t("p",null,[l("NT$ "),t("span",es,u(e(a).total),1)])]),os,ns,t("div",as,[b(t("input",{type:"text",class:"form-control w-50 border-gray","onUpdate:modelValue":n[5]||(n[5]=s=>h(_)?_.value=s:null)},null,512),[[M,e(_)]]),t("button",{class:"btn btn-secondary text-light ms-8",type:"button",disabled:e(_)==="",onClick:R},"套用",8,ls)])]),t("div",cs,[t("div",ds,[is,t("p",rs,[l("NT$ "),t("span",_s,u(Math.round(e(a).final_total)),1),e(a).final_total!==e(a).total?(d(),i("span",ps,"(已使用優惠)")):V("",!0)])]),t("button",{type:"button",class:"btn btn-primary text-white w-100",onClick:L},"下一步")])])])])],64)):(d(),i("div",us,[hs,t("h2",bs,[l("快去"),g(x,{to:"/products",class:"link-secondary border-bottom border-secondary"},{default:$(()=>[l("選購 ")]),_:1}),l(" 想吃餐點吧")]),ms]))])])])],64)}}},Cs=q(fs,[["__scopeId","data-v-ac8943c0"]]);export{Cs as default};