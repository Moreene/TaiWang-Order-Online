import{_ as R,i as C,s as B,h as I,C as P,S as T,k as j,o as l,c as i,l as m,b as o,x as F,a as t,m as U,t as n,F as u,r as g,e as r,f as M,v as q,M as z,q as E,w as f,d as A,p as G,g as H}from"./index-WXTl0fys.js";import{u as J}from"./useProductStore-cZnrYjLq.js";import{u as K}from"./useCartStore-_lpLLSn2.js";import{S as O}from"./SwiperComponent-hMs5Inw2.js";import{L as Q}from"./LoadingComponent-WMBPQsFW.js";import"./axios-G2rPRu76.js";import"./sweetalert-7F7hic-m.js";const _=h=>(G("data-v-00653499"),h=h(),H(),h),W={class:"py-72 py-lg-90"},X={class:"container"},Y={"aria-label":"breadcrumb",class:"mb-24"},Z={class:"breadcrumb mb-0"},tt={class:"breadcrumb-item"},st={class:"breadcrumb-item"},et={class:"breadcrumb-item active","aria-current":"page"},ot={class:"row flex-column flex-lg-row gy-48 gy-lg-0 mb-48"},at={class:"col-lg-6"},lt=["src"],it={class:"d-flex"},nt=["onClick"],ct=["src"],dt={class:"col-lg-6"},rt={class:"fw-bold mb-24"},_t={class:"text-title d-inline-block position-relative z-1"},ut={class:"fs-6 text-notoSans mb-32"},ht={class:"text-notoSans text-gray mb-48 mb-lg-72"},pt={class:"text-notoSans text-gray"},vt={key:0,class:"text-notoSans text-gray"},bt={class:"fs-4 text-notoSans"},mt={class:"fs-7"},gt={class:"d-flex"},ft={class:"input-group w-50 me-24"},xt=["disabled"],yt=_(()=>t("i",{class:"bi bi-dash"},null,-1)),kt=[yt],wt=_(()=>t("i",{class:"bi bi-plus"},null,-1)),St=[wt],Ct={class:"bg-wave py-24 mb-48"},Ut={class:"container"},Vt={class:"row gy-32 gy-lg-0"},$t={class:"col-lg-4"},Dt=_(()=>t("h3",{class:"h5 fw-bold"},[t("i",{class:"bi bi-highlighter"}),r(" 注意事項")],-1)),Nt={class:"ps-28"},Lt={class:"text-notoSans mb-4"},Rt=_(()=>t("li",{class:"text-notoSans mb-4"},"請注意是否會對餐點的食材過敏，謝謝",-1)),Bt=E('<div class="col-lg-4" data-v-00653499><h3 class="h5 fw-bold" data-v-00653499><i class="bi bi-highlighter" data-v-00653499></i> 外送需知</h3><ul class="ps-28" data-v-00653499><li class="text-notoSans mb-4" data-v-00653499>截至2024/12/31止，每筆訂單皆免運費<br data-v-00653499>- 限制距離15km以內</li><li class="text-notoSans mb-4" data-v-00653499>最低消費滿 500 元，才享有外送服務</li><li class="text-notoSans mb-4" data-v-00653499>餐點現點現做，收到後請即時享用</li></ul></div><div class="col-lg-4" data-v-00653499><h3 class="h5 fw-bold" data-v-00653499><i class="bi bi-highlighter" data-v-00653499></i> 付款方式</h3><ul class="ps-28" data-v-00653499><li class="text-notoSans" data-v-00653499>線上訂餐僅接受信用卡線上付款</li></ul></div>',2),It={class:"container"},Pt=_(()=>t("h3",{class:"fw-bold mb-32 mb-lg-24"},[t("span",{class:"text-title d-inline-block position-relative z-1"},"還想要來點什麼嗎...")],-1)),Tt={key:1,class:"col-9 col-md-11 mx-auto"},jt={class:"row gy-48 gy-lg-0"},Ft=["onClick"],Mt=_(()=>t("div",{class:"card-img-top card-img-overlay position-absolute top-0 w-100 d-flex justify-content-center align-items-center"},[t("i",{class:"bi bi-search fs-1 text-light"})],-1)),qt=["src","alt"],zt={class:"card-body"},Et={class:"fs-5 text-center"},At={class:"text-center text-danger fw-bold fs-6 mb-20"},Gt={class:"text-notoSans"},Ht={class:"text-center"},Jt=["onClick"],Kt={__name:"ProductDetailView",setup(h){const c=C(1),p=C([]),x=J(),{getProduct:y,getProducts:V}=x,{products:k,productDetail:e,isLoading:b}=B(x),$=K(),{addCart:w}=$;V();const D=I();y(D.params.id);function N(v){e.value.imageUrl=e.value.imagesUrl[v]}function L(){p.value=k.value.filter(v=>v.category===e.value.category)}return P([k,e],()=>{L()}),T(()=>{c.value=1}),(v,a)=>{const S=j("RouterLink");return l(),i(u,null,[m(Q,{active:o(b),"onUpdate:active":a[0]||(a[0]=s=>F(b)?b.value=s:null)},null,8,["active"]),t("div",W,[t("div",X,[t("nav",Y,[t("ol",Z,[t("li",tt,[m(S,{to:"/",class:"link-gold"},{default:U(()=>[r("首頁")]),_:1})]),t("li",st,[m(S,{to:"/products",class:"link-gold"},{default:U(()=>[r("線上訂餐")]),_:1})]),t("li",et,n(o(e).category),1)])]),t("div",ot,[t("div",at,[t("img",{src:o(e).imageUrl,alt:"主圖",class:"w-100 main-img mb-24"},null,8,lt),t("div",it,[(l(!0),i(u,null,g(o(e).imagesUrl,(s,d)=>(l(),i("a",{key:d,href:"#",onClick:f(Ot=>N(d),["prevent"])},[t("img",{src:s,alt:"副圖",class:"sub-img me-16"},null,8,ct)],8,nt))),128))])]),t("div",dt,[t("h2",rt,[t("span",_t,n(o(e).title),1)]),t("p",ut,n(o(e).description),1),t("p",ht,[r("食材： "),(l(!0),i(u,null,g(o(e).ingredient,(s,d)=>(l(),i(u,{key:"食材"+d},[t("span",pt,n(s),1),d<o(e).ingredient.length-1?(l(),i("span",vt,"、")):A("",!0)],64))),128))]),t("p",bt,[r("NT$ "+n(o(e).price)+" ",1),t("span",mt,"/ "+n(o(e).unit),1)]),t("div",gt,[t("div",ft,[t("button",{class:"btn btn-dark text-light d-flex justify-content-center align-items-center w-25",type:"button",onClick:a[1]||(a[1]=s=>c.value--),disabled:c.value<=1},kt,8,xt),M(t("input",{type:"text",class:"form-control text-center",min:"1","onUpdate:modelValue":a[2]||(a[2]=s=>c.value=s),readonly:""},null,512),[[q,c.value,void 0,{number:!0}]]),t("button",{class:"btn btn-dark text-light d-flex justify-content-center align-items-center w-25",type:"button",onClick:a[3]||(a[3]=s=>c.value++)},St)]),t("button",{type:"button",class:"btn btn-outline-dark",onClick:a[4]||(a[4]=s=>o(w)(o(e).id,c.value))},"加入購物車")])])])]),t("div",Ct,[t("div",Ut,[t("div",Vt,[t("div",$t,[Dt,t("ul",Nt,[t("li",Lt,n(o(e).note),1),Rt])]),Bt])])]),t("div",It,[Pt,p.value.length>4?(l(),z(O,{key:0,products:p.value},null,8,["products"])):(l(),i("div",Tt,[t("div",jt,[(l(!0),i(u,null,g(p.value,s=>(l(),i("div",{class:"col-md-4 col-lg-3",key:s.id},[t("a",{href:"#",class:"card border-0",onClick:f(d=>o(y)(s.id),["prevent"])},[Mt,t("img",{src:s.imageUrl,class:"card-img-top card-img",alt:s.title},null,8,qt),t("div",zt,[t("h2",Et,n(s.title),1),t("p",At,[r("NT$ "),t("span",Gt,n(s.price),1)]),t("div",Ht,[t("button",{type:"button",class:"btn btn-primary link-light px-44",onClick:f(d=>o(w)(s.id),["prevent","stop"])},"加入購物車",8,Jt)])])],8,Ft)]))),128))])]))])])],64)}}},es=R(Kt,[["__scopeId","data-v-00653499"]]);export{es as default};
