import{_,R as h,h as u,o as f,c as v,b as t,i as a,j as l,F as g,e as r}from"./index-OkXrY8Pc.js";import{a as d}from"./axios-G2rPRu76.js";import{s as m,S as k}from"./sweetalert-FRUwQA8X.js";var x={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:p}=x,y={components:{RouterLink:h},methods:{checkLogin(){d.post(`${p}/api/user/check`).then(e=>{this.isShow=!0}).catch(e=>{m("error","您沒有權限進入!"),this.$router.push("/adminLogin")})},hideNavbar(){const e=this.$refs.collapse;e!=null&&e.classList.contains("show")&&e.classList.remove("show")},logout(){const e=k.mixin({customClass:{confirmButton:"btn btn-primary text-light",cancelButton:"btn btn-outline-danger me-16"},buttonsStyling:!1});e.fire({title:"即將登出後台!",icon:"warning",showCancelButton:!0,cancelButtonText:"不要登出",confirmButtonText:"是，我要登出",reverseButtons:!0}).then(o=>{o.isConfirmed&&(e.fire({title:"即將登出!",icon:"success",timer:2e3}),setTimeout(()=>{d.post(`${p}/logout`).then(c=>{document.cookie="myToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;",this.$router.push("/adminLogin")}).catch(c=>{m("error",c.response.data.message)})},500))})}},mounted(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");d.defaults.headers.common.Authorization=e,this.checkLogin()}},T={class:"navbar navbar-expand-md bg-dark py-16 fixed-top","data-bs-theme":"dark"},w={class:"container"},B=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),C={class:"navbar-nav me-auto mb-0"},L={class:"nav-item"},S=t("i",{class:"bi bi-box-arrow-in-left"},null,-1),V={class:"nav-item"},A=t("i",{class:"bi bi-clipboard"},null,-1),E={class:"nav-item"},R=t("i",{class:"bi bi-box-seam"},null,-1),I={class:"nav-item"},P=t("i",{class:"bi bi-copy"},null,-1);function N(e,o,c,$,O,s){const i=u("RouterLink"),b=u("RouterView");return f(),v(g,null,[t("nav",T,[t("div",w,[B,t("button",{type:"button",class:"btn btn-outline-light fs-6 d-md-none",onClick:o[0]||(o[0]=(...n)=>s.logout&&s.logout(...n))},"登出"),t("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",ref:"collapse",onClick:o[1]||(o[1]=(...n)=>s.hideNavbar&&s.hideNavbar(...n))},[t("ul",C,[t("li",L,[a(i,{to:"/",class:"nav-link py-16 py-md-0 ps-0 fs-6"},{default:l(()=>[S,r(" 回到前台 ")]),_:1})]),t("li",V,[a(i,{to:"/admin/products",class:"nav-link py-16 py-md-0 fs-6"},{default:l(()=>[A,r(" 餐點列表 ")]),_:1})]),t("li",E,[a(i,{to:"/admin/orders",class:"nav-link py-16 py-md-0 fs-6"},{default:l(()=>[R,r(" 訂單列表 ")]),_:1})]),t("li",I,[a(i,{to:"/admin/coupon",class:"nav-link py-16 py-md-0 fs-6"},{default:l(()=>[P,r(" 優惠列表 ")]),_:1})])])],512),t("button",{type:"button",class:"btn btn-outline-light fs-6 d-none d-md-block",onClick:o[2]||(o[2]=(...n)=>s.logout&&s.logout(...n))},"登出")])]),a(b)],64)}const F=_(y,[["render",N]]);export{F as default};
