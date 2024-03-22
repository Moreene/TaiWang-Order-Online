import{a as I}from"./axios-G2rPRu76.js";import{_ as T,m as V,a as N,h as b,o as d,c,i as h,b as t,F as m,t as i,d as g,n as P,r as L,e as a,j as v,w as k,f as p,S as y,v as x,p as A,g as M}from"./index-2DlEdAsa.js";import{c as C}from"./cartStore-0k4cYq4O.js";import{P as j}from"./ProgessBarComponent-h94xWhdb.js";import{L as B}from"./LoadingComponent-3EffH8_S.js";import{t as u}from"./sweetalert-GvVK4oxz.js";const E="/TaiWang-Order-Online/empety-cart.png";var U={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:O,VITE_APIPATH:R}=U,q={components:{ProgessBarComponent:j,LoadingComponent:B},data(){return{coupon:"",delivery:"自取",isLoading:!0}},computed:{...V(C,["cart"])},methods:{...N(C,["deleteItem","increaseCartNum","decreaseCartNum","getCart"]),useCoupon(){const s={code:this.coupon};I.post(`${O}/api/${R}/coupon`,{data:s}).then(()=>{u("top","success","已成功使用優惠代碼"),this.getCart(),this.coupon=""}).catch(()=>{u("top","error","優惠代碼使用失敗"),this.coupon=""})},goCheckout(){localStorage.setItem("pickUp",this.delivery),this.$router.push("/orderInfo")},copyCode(s){const n=this.$refs.code.innerText;navigator.clipboard.writeText(n).then(()=>{s.target.blur(),u("top","success","已成功複製優惠代碼")}).catch(()=>{u("top","error","複製優惠代碼失敗")})}},watch:{"cart.final_total":{handler(s){typeof s<"u"&&Math.round(s)<500&&(this.delivery="自取")},immediate:!0}},created(){setTimeout(()=>this.isLoading=!1,400)}},o=s=>(A("data-v-6d438d10"),s=s(),M(),s),D={class:"bg-wave"},z={class:"container"},F={class:"col-lg-10 mx-auto"},H={class:"mb-48"},J={key:0,class:"h5 bg-gray text-light ps-12 py-16 mb-0"},W={class:"table table-borderless mb-0"},K=o(()=>t("thead",{class:"border-bottom border-dark text-nowrap"},[t("tr",{class:"text-center"},[t("th",{scope:"col",style:{width:"180px"}},"示意圖"),t("th",{scope:"col"},"餐點名稱"),t("th",{scope:"col"},"單價"),t("th",{scope:"col",style:{width:"250px"}},"數量"),t("th",{scope:"col",class:"d-none d-md-block"},"小計"),t("th",{scope:"col"},"刪除")])],-1)),Q={class:"text-center text-nowrap"},Z={scope:"row",class:"fw-normal"},G=["src","alt"],X={class:"text-notoSans"},Y={class:"d-flex justify-content-center"},$={class:"input-group w-75 d-flex align-items-end"},tt=["onClick","disabled"],et=o(()=>t("i",{class:"bi bi-dash"},null,-1)),st=[et],ot=["onUpdate:modelValue"],nt=["onClick"],at=o(()=>t("i",{class:"bi bi-plus"},null,-1)),lt=[at],dt={class:"d-none d-md-table-cell"},ct={class:"text-notoSans"},it=["onClick"],rt=o(()=>t("i",{class:"bi bi-trash fs-5 link-gray"},null,-1)),pt=[rt],_t={class:"border border-dark border-top-0 bg-white p-12"},ht={class:"d-flex justify-content-between"},ut=o(()=>t("i",{class:"bi bi-arrow-right"},null,-1)),bt=o(()=>t("span",{class:"text-notoSans d-inline-block p-6 bg-danger text-white me-6"},"優惠促銷",-1)),mt={class:"text-notoSans"},yt={ref:"code"},ft={class:"row gy-48 gy-md-0 pb-72"},gt={class:"col-md-7"},vt=o(()=>t("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"取餐方式",-1)),kt={class:"border border-dark bg-white"},xt={class:"ps-12 py-16"},Ct={class:"form-check form-check-inline"},wt=o(()=>t("label",{class:"form-check-label",for:"pickup"},"自取",-1)),St={class:"form-check form-check-inline"},It=["disabled"],Tt=o(()=>t("label",{class:"form-check-label",for:"delivery"},[a("外送 "),t("span",{class:"text-gray"},"(折扣後滿500元)")],-1)),Vt={class:"border border-dark border-top-0 bg-white"},Nt=o(()=>t("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"送貨及付款方式",-1)),Pt={class:"ps-12 py-16"},Lt={class:"mb-16"},At=o(()=>t("label",{for:"送貨方式",class:"form-label"},"送貨方式",-1)),Mt={key:0,type:"text",id:"送貨方式",class:"form-control w-75",value:"自取",disabled:""},jt={key:1,type:"text",id:"送貨方式",class:"form-control w-75",value:"泰汪小蜜蜂",disabled:""},Bt=o(()=>t("div",null,[t("label",{for:"付款方式",class:"form-label"},"付款方式"),t("input",{type:"text",id:"付款方式",class:"form-control w-75",value:"信用卡 (支援VISA、JCB、Master)",disabled:""})],-1)),Et={class:"col-md-5"},Ut={class:"h-100 border border-dark bg-white"},Ot=o(()=>t("h2",{class:"h5 bg-gray text-light ps-12 py-16 mb-0"},"訂單資訊",-1)),Rt={class:"border-bottom border-dark px-12 py-16"},qt={class:"d-flex justify-content-between"},Dt=o(()=>t("p",null,"小計：",-1)),zt={class:"text-notoSans"},Ft=o(()=>t("div",{class:"d-flex justify-content-between"},[t("p",null,"運費："),t("p",null,[a("NT$ "),t("span",{class:"text-notoSans"},"0")])],-1)),Ht=o(()=>t("p",{class:"mb-8"},"優惠代碼",-1)),Jt={class:"d-flex"},Wt=["disabled"],Kt={class:"px-12 py-24 pb-md-0"},Qt={class:"d-flex justify-content-between"},Zt=o(()=>t("p",{class:"fw-bold"},"合計：",-1)),Gt={class:"fw-bold"},Xt={class:"text-notoSans"},Yt={key:0,class:"text-danger ms-4"},$t={key:1,class:"pb-72 text-center"},te=o(()=>t("h2",{class:"mb-16"},"Oops,目前購物車內沒有東西唷！",-1)),ee={class:"mb-32"},se=o(()=>t("img",{src:E,class:"empety-cart",alt:"空購物車"},null,-1));function oe(s,n,ne,ae,l,r){const w=b("LoadingComponent"),S=b("ProgessBarComponent"),f=b("RouterLink");return d(),c(m,null,[h(w,{active:l.isLoading,"onUpdate:active":n[0]||(n[0]=e=>l.isLoading=e)},null,8,["active"]),t("div",D,[t("div",z,[t("div",F,[h(S),s.cart.carts&&s.cart.carts.length?(d(),c(m,{key:0},[t("div",H,[s.cart.carts?(d(),c("h2",J,"購物車 ( "+i(s.cart.carts.length)+" ) ",1)):g("",!0),t("div",{class:P(["table-responsive border border-dark",{"fixed-height":s.cart.carts&&s.cart.carts.length>3}])},[t("table",W,[K,t("tbody",Q,[(d(!0),c(m,null,L(s.cart.carts,e=>(d(),c("tr",{key:e.id,class:"align-middle border-bottom"},[t("th",Z,[t("img",{src:e.product.imageUrl,alt:e.product.title,class:"food-img"},null,8,G)]),t("td",null,i(e.product.title),1),t("td",null,[a("NT$ "),t("span",X,i(e.product.price),1)]),t("td",null,[t("div",Y,[t("div",$,[t("button",{class:"btn btn-secondary text-light d-flex justify-content-center align-items-center d-none d-md-block",type:"button",onClick:_=>s.decreaseCartNum(e),disabled:e.qty===1},st,8,tt),p(t("input",{type:"text",class:"form-control text-center p-0 py-md-6 px-md-12",min:"1","onUpdate:modelValue":_=>e.qty=_,readonly:""},null,8,ot),[[x,e.qty,void 0,{number:!0}]]),t("button",{class:"btn btn-secondary text-light d-flex justify-content-center align-items-center d-none d-md-block",type:"button",onClick:_=>s.increaseCartNum(e)},lt,8,nt)])])]),t("td",dt,[a("NT$ "),t("span",ct,i(e.qty*e.product.price),1)]),t("td",null,[t("a",{href:"#",onClick:k(_=>s.deleteItem(e),["prevent"])},pt,8,it)])]))),128))])])],2),t("div",_t,[t("p",ht,[a("更多精彩優惠等著您使用！ "),h(f,{to:"/products",class:"link-gold"},{default:v(()=>[a("繼續購物 "),ut]),_:1})]),bt,t("span",mt,[a("輸入「 "),t("span",yt,"tai6666",512),a(" 」優惠代碼再享 85 折 ﹙"),t("a",{href:"#",class:"link-danger",onClick:n[1]||(n[1]=k(e=>r.copyCode(e),["prevent"]))},"點我複製"),a("﹚")])])]),t("div",ft,[t("div",gt,[vt,t("div",kt,[t("div",xt,[t("div",Ct,[Math.round(s.cart.final_total)<500?p((d(),c("input",{key:0,class:"form-check-input border-gray",type:"radio",name:"取餐方式",id:"pickup",value:"自取","onUpdate:modelValue":n[2]||(n[2]=e=>l.delivery=e),checked:""},null,512)),[[y,l.delivery]]):p((d(),c("input",{key:1,class:"form-check-input border-gray",type:"radio",name:"取餐方式",id:"pickup",value:"自取","onUpdate:modelValue":n[3]||(n[3]=e=>l.delivery=e)},null,512)),[[y,l.delivery]]),wt]),t("div",St,[p(t("input",{class:"form-check-input border-gray",type:"radio",name:"取餐方式",id:"delivery",value:"外送","onUpdate:modelValue":n[4]||(n[4]=e=>l.delivery=e),disabled:Math.round(s.cart.final_total)<500},null,8,It),[[y,l.delivery]]),Tt])])]),t("div",Vt,[Nt,t("div",Pt,[t("div",Lt,[At,l.delivery==="自取"||Math.round(s.cart.final_total)<500?(d(),c("input",Mt)):(d(),c("input",jt))]),Bt])])]),t("div",Et,[t("div",Ut,[Ot,t("div",Rt,[t("div",qt,[Dt,t("p",null,[a("NT$ "),t("span",zt,i(s.cart.total),1)])]),Ft,Ht,t("div",Jt,[p(t("input",{type:"text",class:"form-control w-50 border-gray","onUpdate:modelValue":n[5]||(n[5]=e=>l.coupon=e)},null,512),[[x,l.coupon]]),t("button",{class:"btn btn-secondary text-light ms-8",type:"button",disabled:l.coupon==="",onClick:n[6]||(n[6]=(...e)=>r.useCoupon&&r.useCoupon(...e))},"套用",8,Wt)])]),t("div",Kt,[t("div",Qt,[Zt,t("p",Gt,[a("NT$ "),t("span",Xt,i(Math.round(s.cart.final_total)),1),s.cart.final_total!==s.cart.total?(d(),c("span",Yt,"(已使用優惠)")):g("",!0)])]),t("button",{type:"button",class:"btn btn-primary text-white w-100",onClick:n[7]||(n[7]=(...e)=>r.goCheckout&&r.goCheckout(...e))},"下一步")])])])])],64)):(d(),c("div",$t,[te,t("h2",ee,[a("快去"),h(f,{to:"/products",class:"link-secondary border-bottom border-secondary"},{default:v(()=>[a("選購")]),_:1}),a(" 想吃餐點吧")]),se]))])])])],64)}const _e=T(q,[["render",oe],["__scopeId","data-v-6d438d10"]]);export{_e as default};
