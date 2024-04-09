import{a as v}from"./axios-G2rPRu76.js";import{s as h,S}from"./sweetalert-n2cD1G8m.js";import{M as k,A as B}from"./AdminPaginationComponent-37itcCt-.js";import{f as T,a as x}from"./date-8u4Ux2E5.js";import{_ as I,h as m,o as _,c as b,b as e,t as u,i as l,j as D,n as f,e as E,w,F as P,r as L,J as U,d as O,f as N,V as j}from"./index-cKTOsiM9.js";var q={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:M,VITE_APIPATH:V}=q,R={props:["tempCoupon","isNew"],data(){return{couponModal:null,coupon:{},date:"",time:"",uid:0}},methods:{minPercent(o){return o?o<1?"優惠%數需大於 1 ":!0:"優惠%數 為必填"},createUid(){const o=this.date+" "+this.time;this.uid=Date.parse(o)},updateCoupon(){this.createUid();const o={...this.coupon,is_enabled:this.coupon.is_enabled?1:0,due_date:this.uid};let t=`${M}/api/${V}/admin/coupon/${o.id}`,i="put";this.isNew&&(t=`${M}/api/${V}/admin/coupon`,i="post"),v[i](t,{data:o}).then(d=>{h("success",d.data.message),this.$emit("update"),this.$emit("clearInput"),this.couponModal.hide()}).catch(d=>{h("error",d.response.data.message)})},resetForm(){this.$refs.form.resetForm()}},watch:{tempCoupon:{handler(o){this.date=T(o.due_date),this.time=x(o.due_date),this.coupon=o},deep:!0}},mounted(){this.couponModal=new k(this.$refs.couponModal,{keyboard:!1,backdrop:"static"})}},F={id:"couponModal",ref:"couponModal",class:"modal fade",tabindex:"-1","aria-labelledby":"couponModalLabel","aria-hidden":"true"},H={class:"modal-dialog modal-dialog-centered modal-lg"},z={class:"modal-content border-0"},J={class:"modal-header bg-primary text-white"},W={id:"couponModalLabel",class:"modal-title"},K={class:"modal-body"},Q={class:"row"},Z={class:"col-md-6"},G={class:"mb-16"},X=e("label",{for:"title",class:"form-label"},"優惠名稱",-1),Y={class:"mb-16"},ee=e("label",{for:"code",class:"form-label"},"優惠代碼",-1),te={class:"mb-16"},oe=e("label",{for:"percent",class:"form-label"},"優惠%數",-1),ne={class:"col-md-6"},se={class:"mb-16"},ae=e("label",{for:"date",class:"form-label"},"到期日",-1),le=e("label",{for:"time",class:"form-label"},"到期時間",-1),ie={class:"modal-footer"},de=e("button",{type:"submit",class:"btn btn-primary text-white w-25"}," 確認 ",-1);function re(o,t,i,d,n,a){const r=m("v-field"),p=m("error-message"),g=m("v-form");return _(),b("div",F,[e("div",H,[e("div",z,[e("div",J,[e("h5",W,u(n.coupon.title?n.coupon.title:"建立優惠券"),1),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=c=>o.$emit("clearInput"))})]),l(g,{ref:"form",onSubmit:a.updateCoupon},{default:D(({errors:c})=>[e("div",K,[e("div",Q,[e("div",Z,[e("div",G,[X,l(r,{id:"title",name:"優惠名稱",type:"text",class:f(["form-control",{"is-invalid":c.優惠名稱}]),modelValue:n.coupon.title,"onUpdate:modelValue":t[1]||(t[1]=s=>n.coupon.title=s),placeholder:"請輸入優惠名稱",rules:"required"},null,8,["modelValue","class"]),l(p,{name:"優惠名稱",class:"invalid-feedback"})]),e("div",Y,[ee,l(r,{id:"code",name:"優惠代碼",type:"text",class:f(["form-control",{"is-invalid":c.優惠代碼}]),modelValue:n.coupon.code,"onUpdate:modelValue":t[2]||(t[2]=s=>n.coupon.code=s),placeholder:"請輸入優惠代碼",rules:"required"},null,8,["modelValue","class"]),l(p,{name:"優惠代碼",class:"invalid-feedback"})]),e("div",te,[oe,l(r,{id:"percent",name:"優惠%數",type:"number",class:f(["form-control",{"is-invalid":c["優惠%數"]}]),modelValue:n.coupon.percent,"onUpdate:modelValue":t[3]||(t[3]=s=>n.coupon.percent=s),modelModifiers:{number:!0},placeholder:"請輸入優惠%數",rules:a.minPercent},null,8,["modelValue","class","rules"]),l(p,{name:"優惠%數",class:"invalid-feedback"})])]),e("div",ne,[e("div",se,[ae,l(r,{id:"date",name:"到期日",type:"date",class:f(["form-control",{"is-invalid":c.到期日}]),modelValue:n.date,"onUpdate:modelValue":t[4]||(t[4]=s=>n.date=s),rules:"required"},null,8,["modelValue","class"]),l(p,{name:"到期日",class:"invalid-feedback"})]),e("div",null,[le,l(r,{id:"time",name:"到期時間",type:"time",class:f(["form-control",{"is-invalid":c.到期時間}]),modelValue:n.time,"onUpdate:modelValue":t[5]||(t[5]=s=>n.time=s),rules:"required"},null,8,["modelValue","class"]),l(p,{name:"到期時間",class:"invalid-feedback"})])])])]),e("div",ie,[e("button",{type:"button",class:"btn btn-outline-primary w-25","data-bs-dismiss":"modal",onClick:t[6]||(t[6]=s=>o.$emit("clearInput"))}," 取消 "),de])]),_:1},8,["onSubmit"])])])],512)}const ce=I(R,[["render",re]]);var ue={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:pe,VITE_APIPATH:me}=ue,_e={props:["tempCoupon"],data(){return{delCouponModal:null}},methods:{delProduct(){v.delete(`${pe}/api/${me}/admin/coupon/${this.tempCoupon.id}`).then(o=>{h("success",o.data.message),this.$emit("update"),this.$emit("clearInput"),this.delCouponModal.hide()}).catch(o=>{h("error",o.response.data.message)})}},mounted(){this.delCouponModal=new k(this.$refs.delCouponModal,{keyboard:!1,backdrop:"static"})}},he={id:"delCouponModal",ref:"delCouponModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delCouponModalLabel","aria-hidden":"true"},fe={class:"modal-dialog modal-dialog-centered"},be={class:"modal-content border-0"},Ce={class:"modal-header bg-danger text-white"},ve={id:"delCouponModalLabel",class:"modal-title"},ge=e("i",{class:"bi bi-exclamation-circle"},null,-1),we={class:"modal-body text-center p-24"},Ie={class:"fs-5"},$e={class:"modal-footer border-0 justify-content-center"};function Pe(o,t,i,d,n,a){return _(),b("div",he,[e("div",fe,[e("div",be,[e("div",Ce,[e("h5",ve,[e("span",null,[ge,E(" "+u(i.tempCoupon.title),1)])]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=r=>o.$emit("clearInput"))})]),e("div",we,[e("span",Ie,'是否要刪除 "'+u(i.tempCoupon.title)+'" 優惠券 ？',1)]),e("div",$e,[e("button",{type:"button",class:"btn btn-outline-danger w-25","data-bs-dismiss":"modal",onClick:t[1]||(t[1]=r=>o.$emit("clearInput"))}," 取消 "),e("button",{type:"button",class:"btn btn-danger w-25",onClick:t[2]||(t[2]=(...r)=>a.delProduct&&a.delProduct(...r))}," 確認 ")])])])],512)}const Me=I(_e,[["render",Pe]]);var Ve={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:A,VITE_APIPATH:y}=Ve,Ae={components:{CouponModalComponent:ce,DelCouponModalComponent:Me,AdminPaginationComponent:B},data(){return{coupons:[],tempCoupon:{},pagination:{},isNew:!1,isLoading:!1}},methods:{getCoupons(o=1){this.isLoading=!0,v.get(`${A}/api/${y}/admin/coupons?page=${o}`).then(t=>{this.pagination=t.data.pagination;const i=t.data.coupons;this.coupons=i.map(d=>({...d,is_enabled:d.is_enabled===1})),this.isLoading=!1}).catch(t=>{this.isLoading=!1,h("error",t.response.data.message)})},toggleSwitch(o){const t=!o.is_enabled,i=S.mixin({customClass:{confirmButton:"btn btn-secondary text-light",cancelButton:"btn btn-outline-secondary me-16"},buttonsStyling:!1});i.fire({title:"是否要更新啟用狀態？",icon:"warning",showCancelButton:!0,confirmButtonText:"是, 我要更新",cancelButtonText:"我再想想",reverseButtons:!0}).then(d=>{if(d.isConfirmed){const a={...o,is_enabled:!t?1:0};v.put(`${A}/api/${y}/admin/coupon/${o.id}`,{data:a}).then(()=>{i.fire({title:`已更新 ${o.title} 的啟用狀態`,icon:"success",showConfirmButton:!1,timer:2e3})}).catch(()=>{h("error","更新啟用狀態失敗")})}else o.is_enabled=t})},openModal(o,t){o==="new"?(this.tempCoupon={},this.isNew=!0,this.$refs.modal.couponModal.show()):o==="edit"?(this.tempCoupon={...t},this.isNew=!1,this.$refs.modal.couponModal.show()):o==="delete"&&(this.tempCoupon={...t},this.isNew=!1,this.$refs.delModal.delCouponModal.show())},clearInput(){this.tempCoupon={due_date:0},this.$refs.modal.resetForm()}},computed:{dueDate(){return this.coupons.map(o=>T(o.due_date))},dueTime(){return this.coupons.map(o=>x(o.due_date))}},mounted(){this.getCoupons()}},ye={class:"container py-144"},ke=e("h2",{class:"fw-bold mb-32"},"優惠列表",-1),Te={class:"text-end mb-24"},xe=e("i",{class:"bi bi-plus"},null,-1),Ee={class:"table-responsive mb-16"},Se={class:"table align-middle"},Be=e("thead",{class:"text-nowrap"},[e("tr",{class:"text-nowrap text-center border-dark"},[e("th",{width:"120"}," 優惠名稱 "),e("th",{width:"120"}," 優惠代碼 "),e("th",{width:"120"}," 優惠%數 "),e("th",{width:"120"}," 到期日 "),e("th",{width:"120"}," 到期時間 "),e("th",{width:"100"}," 是否啟用 "),e("th",{width:"120"}," 編輯 "),e("th",{width:"120"}," 刪除 ")])],-1),De={class:"text-nowrap text-center"},Le={class:"form-check form-switch d-flex justify-content-center"},Ue=["onUpdate:modelValue","onChange"],Oe=["onClick"],Ne=e("i",{class:"bi bi-pencil-square fs-5"},null,-1),je=[Ne],qe=["onClick"],Re=e("i",{class:"bi bi-trash3 fs-5"},null,-1),Fe=[Re];function He(o,t,i,d,n,a){const r=m("VueLoading"),p=m("AdminPaginationComponent"),g=m("CouponModalComponent"),c=m("DelCouponModalComponent");return _(),b(P,null,[l(r,{active:n.isLoading,"onUpdate:active":t[0]||(t[0]=s=>n.isLoading=s),loader:"bars",color:"#ff9900"},null,8,["active"]),e("div",ye,[ke,e("div",Te,[e("button",{type:"button",class:"btn btn-primary text-light",onClick:t[1]||(t[1]=w(s=>a.openModal("new",o.item),["prevent"]))},[E(" 建立新優惠 "),xe])]),e("div",Ee,[e("table",Se,[Be,e("tbody",De,[(_(!0),b(P,null,L(n.coupons,(s,$)=>(_(),b("tr",{key:s.id},[e("td",null,u(s.title),1),e("td",null,u(s.code),1),e("td",null,u(s.percent),1),e("td",null,u(a.dueDate[$]),1),e("td",null,u(a.dueTime[$]),1),e("td",null,[e("div",Le,[N(e("input",{class:"form-check-input",type:"checkbox",role:"switch",style:{height:"20px"},"onUpdate:modelValue":C=>s.is_enabled=C,onChange:C=>a.toggleSwitch(s)},null,40,Ue),[[j,s.is_enabled]])])]),e("td",null,[e("a",{href:"#",class:"link-primary",onClick:w(C=>a.openModal("edit",s),["prevent"])},je,8,Oe)]),e("td",null,[e("a",{href:"#",class:"link-danger",onClick:w(C=>a.openModal("delete",s),["prevent"])},Fe,8,qe)])]))),128))])])])]),n.pagination.total_pages>1?(_(),U(p,{key:0,pagination:n.pagination,onEmitPages:a.getCoupons},null,8,["pagination","onEmitPages"])):O("",!0),l(g,{ref:"modal","temp-coupon":n.tempCoupon,"is-new":n.isNew,onClearInput:a.clearInput,onUpdate:a.getCoupons},null,8,["temp-coupon","is-new","onClearInput","onUpdate"]),l(c,{ref:"delModal","temp-coupon":n.tempCoupon,onClearInput:a.clearInput,onUpdate:a.getCoupons},null,8,["temp-coupon","onClearInput","onUpdate"])],64)}const Ze=I(Ae,[["render",He]]);export{Ze as default};
