import{a as b}from"./axios-G2rPRu76.js";import{s as _,S}from"./sweetalert-GvVK4oxz.js";import{M as y,A as B}from"./AdminPaginationComponent-m3xaEitt.js";import{f as T,a as x}from"./date-8u4Ux2E5.js";import{_ as I,h as m,o as h,c as C,b as e,t as u,i as l,j as D,n as f,e as E,w,F as P,r as L,J as U,d as O,f as N,T as j}from"./index-2DlEdAsa.js";var q={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:M,VITE_APIPATH:V}=q,R={props:["tempCoupon","isNew"],data(){return{couponModal:null,coupon:{},date:"",time:"",uid:0}},methods:{minPercent(t){return t?t<1?"優惠%數需大於 1 ":!0:"優惠%數 為必填"},createUid(){const t=this.date+" "+this.time;this.uid=Date.parse(t)},updateCoupon(){this.createUid();const t={...this.coupon,is_enabled:this.coupon.is_enabled?1:0,due_date:this.uid};let o=`${M}/api/${V}/admin/coupon/${t.id}`,i="put";this.isNew&&(o=`${M}/api/${V}/admin/coupon`,i="post"),b[i](o,{data:t}).then(d=>{_("success",d.data.message),this.$emit("update"),this.$emit("clearInput"),this.couponModal.hide()}).catch(d=>{_("error",d.response.data.message)})},resetForm(){this.$refs.form.resetForm()}},watch:{tempCoupon:{handler(t){this.date=T(t.due_date),this.time=x(t.due_date),this.coupon=t},deep:!0}},mounted(){this.couponModal=new y(this.$refs.couponModal,{keyboard:!1,backdrop:"static"})}},z={id:"couponModal",ref:"couponModal",class:"modal fade",tabindex:"-1","aria-labelledby":"couponModalLabel","aria-hidden":"true"},F={class:"modal-dialog modal-dialog-centered modal-lg"},H={class:"modal-content border-0"},J={class:"modal-header bg-primary text-white"},W={id:"couponModalLabel",class:"modal-title"},K={class:"modal-body"},Q={class:"row"},Z={class:"col-md-6"},G={class:"mb-16"},X=e("label",{for:"title",class:"form-label"},"優惠名稱",-1),Y={class:"mb-16"},ee=e("label",{for:"code",class:"form-label"},"優惠代碼",-1),te={class:"mb-16"},oe=e("label",{for:"percent",class:"form-label"},"優惠%數",-1),ne={class:"col-md-6"},se={class:"mb-16"},ae=e("label",{for:"date",class:"form-label"},"到期日",-1),le=e("label",{for:"time",class:"form-label"},"到期時間",-1),ie={class:"modal-footer"},de=e("button",{type:"submit",class:"btn btn-primary text-white w-25"}," 確認 ",-1);function re(t,o,i,d,n,a){const r=m("v-field"),p=m("error-message"),g=m("v-form");return h(),C("div",z,[e("div",F,[e("div",H,[e("div",J,[e("h5",W,u(n.coupon.title?n.coupon.title:"建立優惠券"),1),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:o[0]||(o[0]=c=>t.$emit("clearInput"))})]),l(g,{ref:"form",onSubmit:a.updateCoupon},{default:D(({errors:c})=>[e("div",K,[e("div",Q,[e("div",Z,[e("div",G,[X,l(r,{id:"title",name:"優惠名稱",type:"text",class:f(["form-control",{"is-invalid":c.優惠名稱}]),modelValue:n.coupon.title,"onUpdate:modelValue":o[1]||(o[1]=s=>n.coupon.title=s),placeholder:"請輸入優惠名稱",rules:"required"},null,8,["modelValue","class"]),l(p,{name:"優惠名稱",class:"invalid-feedback"})]),e("div",Y,[ee,l(r,{id:"code",name:"優惠代碼",type:"text",class:f(["form-control",{"is-invalid":c.優惠代碼}]),modelValue:n.coupon.code,"onUpdate:modelValue":o[2]||(o[2]=s=>n.coupon.code=s),placeholder:"請輸入優惠代碼",rules:"required"},null,8,["modelValue","class"]),l(p,{name:"優惠代碼",class:"invalid-feedback"})]),e("div",te,[oe,l(r,{id:"percent",name:"優惠%數",type:"number",class:f(["form-control",{"is-invalid":c["優惠%數"]}]),modelValue:n.coupon.percent,"onUpdate:modelValue":o[3]||(o[3]=s=>n.coupon.percent=s),modelModifiers:{number:!0},placeholder:"請輸入優惠%數",rules:a.minPercent},null,8,["modelValue","class","rules"]),l(p,{name:"優惠%數",class:"invalid-feedback"})])]),e("div",ne,[e("div",se,[ae,l(r,{id:"date",name:"到期日",type:"date",class:f(["form-control",{"is-invalid":c.到期日}]),modelValue:n.date,"onUpdate:modelValue":o[4]||(o[4]=s=>n.date=s),rules:"required"},null,8,["modelValue","class"]),l(p,{name:"到期日",class:"invalid-feedback"})]),e("div",null,[le,l(r,{id:"time",name:"到期時間",type:"time",class:f(["form-control",{"is-invalid":c.到期時間}]),modelValue:n.time,"onUpdate:modelValue":o[5]||(o[5]=s=>n.time=s),rules:"required"},null,8,["modelValue","class"]),l(p,{name:"到期時間",class:"invalid-feedback"})])])])]),e("div",ie,[e("button",{type:"button",class:"btn btn-outline-primary w-25","data-bs-dismiss":"modal",onClick:o[6]||(o[6]=s=>t.$emit("clearInput"))}," 取消 "),de])]),_:1},8,["onSubmit"])])])],512)}const ce=I(R,[["render",re]]);var ue={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:pe,VITE_APIPATH:me}=ue,he={props:["tempCoupon"],data(){return{delCouponModal:null}},methods:{delProduct(){b.delete(`${pe}/api/${me}/admin/coupon/${this.tempCoupon.id}`).then(t=>{_("success",t.data.message),this.$emit("update"),this.$emit("clearInput"),this.delCouponModal.hide()}).catch(t=>{_("error",t.response.data.message)})}},mounted(){this.delCouponModal=new y(this.$refs.delCouponModal,{keyboard:!1,backdrop:"static"})}},_e={id:"delCouponModal",ref:"delCouponModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delCouponModalLabel","aria-hidden":"true"},fe={class:"modal-dialog modal-dialog-centered"},be={class:"modal-content border-0"},Ce={class:"modal-header bg-danger text-white"},ve={id:"delCouponModalLabel",class:"modal-title"},ge=e("i",{class:"bi bi-exclamation-circle"},null,-1),we={class:"modal-body text-center p-24"},Ie={class:"fs-5"},$e={class:"modal-footer border-0 justify-content-center"};function Pe(t,o,i,d,n,a){return h(),C("div",_e,[e("div",fe,[e("div",be,[e("div",Ce,[e("h5",ve,[e("span",null,[ge,E(" "+u(i.tempCoupon.title),1)])]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:o[0]||(o[0]=r=>t.$emit("clearInput"))})]),e("div",we,[e("span",Ie,'是否要刪除 "'+u(i.tempCoupon.title)+'" 優惠券 ？',1)]),e("div",$e,[e("button",{type:"button",class:"btn btn-outline-danger w-25","data-bs-dismiss":"modal",onClick:o[1]||(o[1]=r=>t.$emit("clearInput"))}," 取消 "),e("button",{type:"button",class:"btn btn-danger w-25",onClick:o[2]||(o[2]=(...r)=>a.delProduct&&a.delProduct(...r))}," 確認 ")])])])],512)}const Me=I(he,[["render",Pe]]);var Ve={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:A,VITE_APIPATH:k}=Ve,Ae={components:{CouponModalComponent:ce,DelCouponModalComponent:Me,AdminPaginationComponent:B},data(){return{coupons:[],tempCoupon:{},pagination:{},isNew:!1,isLoading:!1}},methods:{getCoupons(t=1){this.isLoading=!0,b.get(`${A}/api/${k}/admin/coupons?page=${t}`).then(o=>{this.pagination=o.data.pagination;const i=o.data.coupons;this.coupons=i.map(d=>({...d,is_enabled:d.is_enabled===1})),this.isLoading=!1}).catch(o=>{this.isLoading=!1,_("error",o.response.data.message)})},toggleSwitch(t){const o=!t.is_enabled,i=S.mixin({customClass:{confirmButton:"btn btn-secondary text-light",cancelButton:"btn btn-outline-secondary me-16"},buttonsStyling:!1});i.fire({title:"是否要更新啟用狀態？",icon:"warning",showCancelButton:!0,confirmButtonText:"是, 我要更新",cancelButtonText:"我再想想",reverseButtons:!0}).then(d=>{if(d.isConfirmed){const a={...t,is_enabled:!o?1:0};b.put(`${A}/api/${k}/admin/coupon/${t.id}`,{data:a}).then(()=>{i.fire({title:`已更新 ${t.title} 的啟用狀態`,icon:"success",showConfirmButton:!1,timer:2e3})}).catch(()=>{_("error","更新啟用狀態失敗")})}else t.is_enabled=o})},openModal(t,o){t==="new"?(this.tempCoupon={},this.isNew=!0,this.$refs.modal.couponModal.show()):t==="edit"?(this.tempCoupon={...o},this.isNew=!1,this.$refs.modal.couponModal.show()):t==="delete"&&(this.tempCoupon={...o},this.isNew=!1,this.$refs.delModal.delCouponModal.show())},clearInput(){this.tempCoupon={due_date:0},this.$refs.modal.resetForm()}},computed:{dueDate(){return this.coupons.map(t=>T(t.due_date))},dueTime(){return this.coupons.map(t=>x(t.due_date))}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");b.defaults.headers.common.Authorization=t,this.getCoupons()}},ke={class:"container py-144"},ye=e("h2",{class:"fw-bold mb-32"},"優惠列表",-1),Te={class:"text-end mb-24"},xe=e("i",{class:"bi bi-plus"},null,-1),Ee={class:"table-responsive mb-16"},Se={class:"table align-middle"},Be=e("thead",{class:"text-nowrap"},[e("tr",{class:"text-nowrap text-center border-dark"},[e("th",{width:"120"}," 優惠名稱 "),e("th",{width:"120"}," 優惠代碼 "),e("th",{width:"120"}," 優惠%數 "),e("th",{width:"120"}," 到期日 "),e("th",{width:"120"}," 到期時間 "),e("th",{width:"100"}," 是否啟用 "),e("th",{width:"120"}," 編輯 "),e("th",{width:"120"}," 刪除 ")])],-1),De={class:"text-nowrap text-center"},Le={class:"form-check form-switch d-flex justify-content-center"},Ue=["onUpdate:modelValue","onChange"],Oe=["onClick"],Ne=e("i",{class:"bi bi-pencil-square fs-5"},null,-1),je=[Ne],qe=["onClick"],Re=e("i",{class:"bi bi-trash3 fs-5"},null,-1),ze=[Re];function Fe(t,o,i,d,n,a){const r=m("VueLoading"),p=m("AdminPaginationComponent"),g=m("CouponModalComponent"),c=m("DelCouponModalComponent");return h(),C(P,null,[l(r,{active:n.isLoading,"onUpdate:active":o[0]||(o[0]=s=>n.isLoading=s),loader:"bars",color:"#ff9900"},null,8,["active"]),e("div",ke,[ye,e("div",Te,[e("button",{type:"button",class:"btn btn-primary text-light",onClick:o[1]||(o[1]=w(s=>a.openModal("new",t.item),["prevent"]))},[E(" 建立新優惠 "),xe])]),e("div",Ee,[e("table",Se,[Be,e("tbody",De,[(h(!0),C(P,null,L(n.coupons,(s,$)=>(h(),C("tr",{key:s.id},[e("td",null,u(s.title),1),e("td",null,u(s.code),1),e("td",null,u(s.percent),1),e("td",null,u(a.dueDate[$]),1),e("td",null,u(a.dueTime[$]),1),e("td",null,[e("div",Le,[N(e("input",{class:"form-check-input",type:"checkbox",role:"switch",style:{height:"20px"},"onUpdate:modelValue":v=>s.is_enabled=v,onChange:v=>a.toggleSwitch(s)},null,40,Ue),[[j,s.is_enabled]])])]),e("td",null,[e("a",{href:"#",class:"link-primary",onClick:w(v=>a.openModal("edit",s),["prevent"])},je,8,Oe)]),e("td",null,[e("a",{href:"#",class:"link-danger",onClick:w(v=>a.openModal("delete",s),["prevent"])},ze,8,qe)])]))),128))])])])]),n.pagination.total_pages>1?(h(),U(p,{key:0,pagination:n.pagination,onEmitPages:a.getCoupons},null,8,["pagination","onEmitPages"])):O("",!0),l(g,{ref:"modal","temp-coupon":n.tempCoupon,"is-new":n.isNew,onClearInput:a.clearInput,onUpdate:a.getCoupons},null,8,["temp-coupon","is-new","onClearInput","onUpdate"]),l(c,{ref:"delModal","temp-coupon":n.tempCoupon,onClearInput:a.clearInput,onUpdate:a.getCoupons},null,8,["temp-coupon","onClearInput","onUpdate"])],64)}const Ze=I(Ae,[["render",Fe]]);export{Ze as default};