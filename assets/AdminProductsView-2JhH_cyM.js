import{a as I}from"./axios-G2rPRu76.js";import{s as g,S as q}from"./sweetalert-GvVK4oxz.js";import{M as A,A as O}from"./AdminPaginationComponent-m3xaEitt.js";import{_ as M,h as v,o as d,c as r,b as e,i as n,j as w,f as x,v as F,n as h,F as k,r as y,t as _,T as $,p as N,g as R,e as D,w as U}from"./index-2DlEdAsa.js";var j={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:C,VITE_APIPATH:T}=j,z={props:["tempProduct"],data(){return{imageModal:null,product:{},url:""}},methods:{uploadImg(s){const t=s.target.files[0],p=new FormData;p.append("file-to-upload",t),I.post(`${C}/api/${T}/admin/upload`,p).then(b=>{this.url=b.data.imageUrl,this.$refs.fileInput.value=""}).catch(()=>{g("error","圖片上傳失敗")})},copyUrl(){navigator.clipboard.writeText(this.$refs.imgUrl.value).then(()=>{g("success","已複製圖片Url")}).catch(()=>{g("error","複製圖片Url失敗")})},updateProduct(){const s={...this.product,imageUrl:this.product.imageUrl,imagesUrl:this.product.imagesUrl,hot:this.product.hot===!0?1:0,recommendation:this.product.recommendation===!0?1:0,is_enabled:this.product.is_enabled===!0?1:0};I.put(`${C}/api/${T}/admin/product/${s.id}`,{data:s}).then(t=>{g("success",t.data.message),this.$emit("update"),this.clearInput(),this.imageModal.hide()}).catch(t=>{g("error",t.response.data.message)})},clearInput(){this.url="",this.$emit("clearInput")},resetForm(){this.$refs.form.resetForm()}},watch:{tempProduct(){this.product=this.tempProduct}},mounted(){this.imageModal=new A(this.$refs.imageModal,{keyboard:!1,backdrop:"static"})}},H={id:"imageModal",ref:"imageModal",class:"modal fade",tabindex:"-1","aria-labelledby":"imageModalLabel","aria-hidden":"true"},W={class:"modal-dialog modal-dialog-centered modal-xl"},J={class:"modal-content border-0"},K={class:"modal-header bg-dark-blue text-white"},Q=e("h5",{id:"imageModalLabel",class:"modal-title"}," 編輯圖片 ",-1),Z={class:"modal-body p-24"},G={class:"row justify-content-evenly gy-48 gy-xl-0"},X={class:"col-xl-5"},Y={class:"bg-dark-blue p-32 rounded-1"},ee={class:"input-group mb-16"},te=e("p",{class:"text-white mb-8"},"複製圖片網址",-1),oe={class:"input-group mb-16"},le=e("i",{class:"bi bi-copy"},null,-1),se=[le],ae=e("p",{class:"text-white mb-8"},"圖片預覽",-1),ne=["src"],ie={key:1,src:"https://fakeimg.pl/377x250/",alt:"圖片區",style:{width:"100%",height:"250px"}},de={class:"col-xl-5"},re={class:"mb-8"},ce={class:"mb-16"},ue=e("label",{for:"imageUrl",class:"form-label"},"新增主圖",-1),me={key:0,class:"mb-8"},pe=["for"],be={key:0},he={key:1},_e={key:1},fe={class:"modal-footer"},ge=e("button",{type:"submit",class:"btn btn-dark-blue w-25"}," 確認 ",-1);function ve(s,t,p,b,l,i){const c=v("v-field"),f=v("error-message"),V=v("v-form");return d(),r("div",H,[e("div",W,[e("div",J,[e("div",K,[Q,e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=(...m)=>i.clearInput&&i.clearInput(...m))})]),n(V,{ref:"form",onSubmit:i.updateProduct},{default:w(({errors:m})=>[e("div",Z,[e("div",G,[e("div",X,[e("div",Y,[e("div",ee,[e("input",{type:"file",class:"form-control","aria-label":"Upload",name:"file-to-upload",onChange:t[1]||(t[1]=o=>i.uploadImg(o)),ref:"fileInput"},null,544)]),te,e("div",oe,[x(e("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=o=>l.url=o),ref:"imgUrl"},null,512),[[F,l.url]]),e("button",{class:"btn btn-gray",type:"button",onClick:t[3]||(t[3]=(...o)=>i.copyUrl&&i.copyUrl(...o))},se)]),ae,l.url?(d(),r("img",{key:0,src:l.url,alt:"圖片預覽",style:{width:"100%",height:"200px"}},null,8,ne)):(d(),r("img",ie))])]),e("div",de,[e("div",re,[e("div",ce,[ue,n(c,{id:"imageUrl",name:"主圖連結",type:"text",class:h(["form-control",{"is-invalid":m.主圖連結}]),modelValue:l.product.imageUrl,"onUpdate:modelValue":t[4]||(t[4]=o=>l.product.imageUrl=o),placeholder:"請輸入圖片連結",rules:"required"},null,8,["modelValue","class"]),n(f,{name:"主圖連結",class:"invalid-feedback"})])]),l.product.imagesUrl?(d(),r("div",me,[(d(!0),r(k,null,y(l.product.imagesUrl,(o,a)=>(d(),r("div",{class:"mb-16",key:"img"+a},[e("label",{for:"imageURL"+(a+1),class:"form-label"},"副圖"+_(a+1),9,pe),n(c,{id:"imageURL"+(a+1),name:"副圖"+(a+1),type:"text",class:h(["form-control",{"is-invalid":m["副圖"+(a+1)]}]),modelValue:l.product.imagesUrl[a],"onUpdate:modelValue":P=>l.product.imagesUrl[a]=P,placeholder:"請輸入副圖連結",rules:"required"},null,8,["id","name","modelValue","onUpdate:modelValue","class"]),n(f,{name:"副圖"+(a+1),class:"invalid-feedback"},null,8,["name"])]))),128)),!l.product.imagesUrl.length||l.product.imagesUrl.at(-1).trim()?(d(),r("div",be,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[5]||(t[5]=o=>l.product.imagesUrl.push(""))}," 新增圖片 ")])):(d(),r("div",he,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm d-block w-100",onClick:t[6]||(t[6]=o=>l.product.imagesUrl.pop())}," 刪除圖片 ")]))])):(d(),r("div",_e,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[7]||(t[7]=o=>l.product.imagesUrl=[l.product.imageUrl,""])}," 新增圖片 ")]))])])]),e("div",fe,[e("button",{type:"button",class:"btn btn-outline-dark-blue w-25","data-bs-dismiss":"modal",onClick:t[8]||(t[8]=(...o)=>i.clearInput&&i.clearInput(...o))}," 取消 "),ge])]),_:1},8,["onSubmit"])])])],512)}const ke=M(z,[["render",ve]]);var ye={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:E,VITE_APIPATH:S}=ye,Pe={props:["tempProduct","isNew"],data(){return{productModal:null,ingredient:{meat:["雞肉","雞腿","豬肉","松阪豬","豬肋骨"],seafood:["白蝦","草蝦","蛤蜊","花枝","中卷","花枝漿","鱸魚"],vegetable:["辣椒","大蒜","薑"," 香茅","香菜","紅蔥頭","泰國茄子","檸檬","小番茄","草菇","蘑菇","乾檸檬葉","青木瓜","玉米筍","洋蔥","小黃瓜","青蔥","青椒","花椰菜","胡蘿蔔","紅甜椒","高麗菜","四季豆","空心菜","長豆","芋頭","地瓜","椰子","椰蓉肉","紅石榴","香蕉","紅毛丹","菠蘿蜜"],seasoning:["糖","魚露","泰國蠔油","乾蝦米","蝦膏","蝦醬","米酒","玉米粉","白胡椒粉","麵包粉","花生"],rice:["紅藜米","茉莉香米"],others:["椰奶","椰漿","牛奶","煉乳","淡奶","麵粉","鹹蛋","蛋","奶油","錫蘭紅茶茶葉","綠茶","泰國神童牌紅糖水","西米露"]},product:{}}},methods:{updateProduct(){const s={...this.product,hot:this.product.hot===!0?1:0,recommendation:this.product.recommendation===!0?1:0,is_enabled:this.product.is_enabled===!0?1:0};let t=`${E}/api/${S}/admin/product/${s.id}`,p="put";this.isNew&&(t=`${E}/api/${S}/admin/product`,p="post"),I[p](t,{data:s}).then(b=>{g("success",b.data.message),this.$emit("update"),this.$emit("clearInput"),this.productModal.hide()}).catch(b=>{g("error",b.response.data.message)})},resetForm(){this.$refs.form.resetForm()}},watch:{tempProduct(){this.product=this.tempProduct}},mounted(){this.productModal=new A(this.$refs.productModal,{keyboard:!1,backdrop:"static"})}},u=s=>(N("data-v-5d9bf8e7"),s=s(),R(),s),Ie={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},Ve={class:"modal-dialog modal-dialog-centered modal-xl"},we={class:"modal-content border-0"},xe={class:"modal-header bg-primary text-white"},Me={id:"productModalLabel",class:"modal-title"},Ue={class:"modal-body"},$e={class:"col-10 mx-auto"},Ae={class:"mb-16"},Ce=u(()=>e("label",{for:"title",class:"form-label"},"餐點名稱",-1)),Te={class:"row"},Ee={class:"col-md-6 mb-16"},Se=u(()=>e("label",{for:"select",class:"form-label"},"餐點分類",-1)),Le=u(()=>e("option",{value:"",disabled:"",selected:""},"請選擇餐點分類",-1)),Be=u(()=>e("option",{value:"開胃涼拌"},"開胃涼拌",-1)),De=u(()=>e("option",{value:"大口吃肉"},"大口吃肉",-1)),qe=u(()=>e("option",{value:"大口吃菜"},"大口吃菜",-1)),Oe=u(()=>e("option",{value:"泰鮮海鮮"},"泰鮮海鮮",-1)),Fe=u(()=>e("option",{value:"來一點飯"},"來一點飯",-1)),Ne=u(()=>e("option",{value:"冰涼泰飲"},"冰涼泰飲",-1)),Re=u(()=>e("option",{value:"泰式甜點"},"泰式甜點",-1)),je={class:"col-md-6 mb-16"},ze=u(()=>e("label",{for:"unit",class:"form-label"},"單位",-1)),He={class:"row"},We={class:"col-md-6 mb-16"},Je=u(()=>e("label",{for:"origin_price",class:"form-label"},"原價",-1)),Ke={class:"col-md-6 mb-16"},Qe=u(()=>e("label",{for:"price",class:"form-label"},"售價",-1)),Ze={class:"mb-16"},Ge=u(()=>e("label",{class:"form-label"},"餐點成分",-1)),Xe=u(()=>e("nav",null,[e("div",{class:"nav nav-tabs flex-nowrap",id:"nav-tab",role:"tablist"},[e("button",{class:"nav-link link-dark active",id:"meat-tab","data-bs-toggle":"tab","data-bs-target":"#meat",type:"button",role:"tab","aria-controls":"meat","aria-selected":"true"},"肉品"),e("button",{class:"nav-link link-dark",id:"seafood-tab","data-bs-toggle":"tab","data-bs-target":"#seafood",type:"button",role:"tab","aria-controls":"seafood","aria-selected":"false"},"海鮮"),e("button",{class:"nav-link link-dark",id:"vegetable-tab","data-bs-toggle":"tab","data-bs-target":"#vegetable",type:"button",role:"tab","aria-controls":"vegetable","aria-selected":"false"},"蔬果"),e("button",{class:"nav-link link-dark",id:"seasoning-tab","data-bs-toggle":"tab","data-bs-target":"#seasoning",type:"button",role:"tab","aria-controls":"seasoning","aria-selected":"false"},"調味"),e("button",{class:"nav-link link-dark",id:"rice-tab","data-bs-toggle":"tab","data-bs-target":"#rice",type:"button",role:"tab","aria-controls":"rice","aria-selected":"false"},"米飯"),e("button",{class:"nav-link link-dark",id:"others-tab","data-bs-toggle":"tab","data-bs-target":"#others",type:"button",role:"tab","aria-controls":"others","aria-selected":"false"},"其他")])],-1)),Ye={class:"tab-content",id:"nav-tabContent"},et={class:"tab-pane show active pt-16 px-16",id:"meat",role:"tabpanel","aria-labelledby":"meat-tab",tabindex:"0"},tt=["for"],ot={class:"tab-pane pt-16 px-16",id:"seafood",role:"tabpanel","aria-labelledby":"seafood-tab",tabindex:"0"},lt=["for"],st={class:"tab-pane pt-16 px-16",id:"vegetable",role:"tabpanel","aria-labelledby":"vegetable-tab",tabindex:"0"},at=["for"],nt={class:"tab-pane pt-16 px-16",id:"seasoning",role:"tabpanel","aria-labelledby":"seasoning-tab",tabindex:"0"},it=["for"],dt={class:"tab-pane pt-16 px-16",id:"rice",role:"tabpanel","aria-labelledby":"rice-tab",tabindex:"0"},rt=["for"],ct={class:"tab-pane pt-16 px-16",id:"others",role:"tabpanel","aria-labelledby":"others-tab",tabindex:"0"},ut=["for"],mt=u(()=>e("span",{class:"text-danger",style:{"font-size":"14px"}},"至少選擇一種食材",-1)),pt={class:"mb-16"},bt=u(()=>e("label",{for:"description",class:"form-label"},"餐點描述",-1)),ht={class:"mb-16"},_t=u(()=>e("label",{for:"note",class:"form-label"},"餐點備註",-1)),ft=u(()=>e("hr",null,null,-1)),gt={class:"row mb-16"},vt={class:"col-6"},kt={class:"form-check"},yt=u(()=>e("label",{class:"form-check-label",for:"hotFood"}," 暢銷餐點 ",-1)),Pt={class:"col-6"},It={class:"form-check"},Vt=u(()=>e("label",{class:"form-check-label",for:"recommendation"}," 主廚推薦 ",-1)),wt={class:"modal-footer"},xt=u(()=>e("button",{type:"submit",class:"btn btn-primary text-white w-20"}," 確認 ",-1));function Mt(s,t,p,b,l,i){const c=v("v-field"),f=v("error-message"),V=v("v-form");return d(),r("div",Ie,[e("div",Ve,[e("div",we,[e("div",xe,[e("h5",Me,[e("span",null,_(l.product.title?l.product.title:"新增餐點內容"),1)]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=m=>s.$emit("clearInput"))})]),n(V,{ref:"form",onSubmit:i.updateProduct},{default:w(({errors:m})=>[e("div",Ue,[e("div",$e,[e("div",Ae,[Ce,n(c,{id:"title",name:"餐點名稱",type:"text",class:h(["form-control",{"is-invalid":m.餐點名稱}]),modelValue:l.product.title,"onUpdate:modelValue":t[1]||(t[1]=o=>l.product.title=o),placeholder:"請輸入餐點名稱",rules:"required"},null,8,["modelValue","class"]),n(f,{name:"餐點名稱",class:"invalid-feedback"})]),e("div",Te,[e("div",Ee,[Se,n(c,{as:"select",id:"select",name:"餐點分類",class:h(["form-select",{"is-invalid":m.餐點分類}]),modelValue:l.product.category,"onUpdate:modelValue":t[2]||(t[2]=o=>l.product.category=o),rules:"required",placeholder:"請選擇餐點分類"},{default:w(()=>[Le,Be,De,qe,Oe,Fe,Ne,Re]),_:2},1032,["modelValue","class"]),n(f,{name:"餐點分類",class:"invalid-feedback"})]),e("div",je,[ze,n(c,{id:"unit",name:"單位",type:"text",class:h(["form-control",{"is-invalid":m.單位}]),modelValue:l.product.unit,"onUpdate:modelValue":t[3]||(t[3]=o=>l.product.unit=o),placeholder:"請輸入單位",rules:"required"},null,8,["modelValue","class"]),n(f,{name:"單位",class:"invalid-feedback"})])]),e("div",He,[e("div",We,[Je,n(c,{id:"origin_price",name:"原價",type:"number",min:"0",class:h(["form-control",{"is-invalid":m.原價}]),modelValue:l.product.origin_price,"onUpdate:modelValue":t[4]||(t[4]=o=>l.product.origin_price=o),modelModifiers:{number:!0},placeholder:"請輸入原價",rules:"required"},null,8,["modelValue","class"]),n(f,{name:"原價",class:"invalid-feedback"})]),e("div",Ke,[Qe,n(c,{id:"price",name:"售價",type:"number",min:"0",class:h(["form-control",{"is-invalid":m.售價}]),modelValue:l.product.price,"onUpdate:modelValue":t[5]||(t[5]=o=>l.product.price=o),modelModifiers:{number:!0},placeholder:"請輸入售價",rules:"required"},null,8,["modelValue","class"]),n(f,{name:"售價",class:"invalid-feedback"})])]),e("div",Ze,[Ge,Xe,e("div",Ye,[e("div",et,[(d(!0),r(k,null,y(l.ingredient.meat,o=>(d(),r("div",{class:"form-check form-check-inline",key:o},[n(c,{name:"ingredient",type:"checkbox",class:h(["form-check-input",{"is-invalid":m.ingredient}]),value:o,id:o,modelValue:l.product.ingredient,"onUpdate:modelValue":t[6]||(t[6]=a=>l.product.ingredient=a),rules:"required"},null,8,["value","id","modelValue","class"]),e("label",{class:"form-check-label",for:o},_(o),9,tt)]))),128))]),e("div",ot,[(d(!0),r(k,null,y(l.ingredient.seafood,o=>(d(),r("div",{class:"form-check form-check-inline",key:o},[n(c,{name:"ingredient",type:"checkbox",class:h(["form-check-input",{"is-invalid":m.ingredient}]),value:o,id:o,modelValue:l.product.ingredient,"onUpdate:modelValue":t[7]||(t[7]=a=>l.product.ingredient=a),rules:"required"},null,8,["value","id","modelValue","class"]),e("label",{class:"form-check-label",for:o},_(o),9,lt)]))),128))]),e("div",st,[(d(!0),r(k,null,y(l.ingredient.vegetable,o=>(d(),r("div",{class:"form-check form-check-inline",key:o},[n(c,{name:"ingredient",type:"checkbox",class:h(["form-check-input",{"is-invalid":m.ingredient}]),value:o,id:o,modelValue:l.product.ingredient,"onUpdate:modelValue":t[8]||(t[8]=a=>l.product.ingredient=a),rules:"required"},null,8,["value","id","modelValue","class"]),e("label",{class:"form-check-label",for:o},_(o),9,at)]))),128))]),e("div",nt,[(d(!0),r(k,null,y(l.ingredient.seasoning,o=>(d(),r("div",{class:"form-check form-check-inline",key:o},[n(c,{name:"ingredient",type:"checkbox",class:h(["form-check-input",{"is-invalid":m.ingredient}]),value:o,id:o,modelValue:l.product.ingredient,"onUpdate:modelValue":t[9]||(t[9]=a=>l.product.ingredient=a),rules:"required"},null,8,["value","id","modelValue","class"]),e("label",{class:"form-check-label",for:o},_(o),9,it)]))),128))]),e("div",dt,[(d(!0),r(k,null,y(l.ingredient.rice,o=>(d(),r("div",{class:"form-check form-check-inline",key:o},[n(c,{name:"ingredient",type:"checkbox",class:h(["form-check-input",{"is-invalid":m.ingredient}]),value:o,id:o,modelValue:l.product.ingredient,"onUpdate:modelValue":t[10]||(t[10]=a=>l.product.ingredient=a),rules:"required"},null,8,["value","id","modelValue","class"]),e("label",{class:"form-check-label",for:o},_(o),9,rt)]))),128))]),e("div",ct,[(d(!0),r(k,null,y(l.ingredient.others,o=>(d(),r("div",{class:"form-check form-check-inline",key:o},[n(c,{name:"ingredient",type:"checkbox",class:h(["form-check-input",{"is-invalid":m.ingredient}]),value:o,id:o,modelValue:l.product.ingredient,"onUpdate:modelValue":t[11]||(t[11]=a=>l.product.ingredient=a),rules:"required"},null,8,["value","id","modelValue","class"]),e("label",{class:"form-check-label",for:o},_(o),9,ut)]))),128))]),n(f,{name:"ingredient",class:"invalid-feedback"},{default:w(()=>[mt]),_:1})])]),e("div",pt,[bt,n(c,{as:"textarea",id:"description",name:"餐點描述",class:h(["form-control",{"is-invalid":m.餐點描述}]),modelValue:l.product.description,"onUpdate:modelValue":t[12]||(t[12]=o=>l.product.description=o),placeholder:"請輸入餐點描述",rules:"required"},null,8,["modelValue","class"]),n(f,{name:"餐點描述",class:"invalid-feedback"})]),e("div",ht,[_t,n(c,{id:"note",name:"餐點備註",type:"text",class:h(["form-control",{"is-invalid":m.餐點備註}]),modelValue:l.product.note,"onUpdate:modelValue":t[13]||(t[13]=o=>l.product.note=o),modelModifiers:{number:!0},placeholder:"請輸入餐點備註",rules:"required"},null,8,["modelValue","class"]),n(f,{name:"餐點備註",class:"invalid-feedback"})]),ft,e("div",gt,[e("div",vt,[e("div",kt,[x(e("input",{class:"form-check-input",type:"checkbox",value:"是",id:"hotFood","onUpdate:modelValue":t[14]||(t[14]=o=>l.product.hot=o)},null,512),[[$,l.product.hot]]),yt])]),e("div",Pt,[e("div",It,[x(e("input",{class:"form-check-input",type:"checkbox",value:"是",id:"recommendation","onUpdate:modelValue":t[15]||(t[15]=o=>l.product.recommendation=o)},null,512),[[$,l.product.recommendation]]),Vt])])])])]),e("div",wt,[e("button",{type:"button",class:"btn btn-outline-primary w-20 me-16","data-bs-dismiss":"modal",onClick:t[16]||(t[16]=o=>s.$emit("clearInput"))}," 取消 "),xt])]),_:1},8,["onSubmit"])])])],512)}const Ut=M(Pe,[["render",Mt],["__scopeId","data-v-5d9bf8e7"]]);var $t={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:At,VITE_APIPATH:Ct}=$t,Tt={props:["tempProduct"],data(){return{delProductModal:null}},methods:{delProduct(){I.delete(`${At}/api/${Ct}/admin/product/${this.tempProduct.id}`).then(s=>{g("success",s.data.message),this.$emit("update"),this.$emit("clearInput"),this.delProductModal.hide()}).catch(s=>{g("error",s.response.data.message)})}},mounted(){this.delProductModal=new A(this.$refs.delProductModal,{keyboard:!1,backdrop:"static"})}},Et={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},St={class:"modal-dialog modal-dialog-centered"},Lt={class:"modal-content border-0"},Bt={class:"modal-header bg-danger text-white"},Dt={id:"delProductModalLabel",class:"modal-title"},qt=e("i",{class:"bi bi-exclamation-circle"},null,-1),Ot={class:"modal-body text-center p-24"},Ft={class:"fs-5"},Nt={class:"modal-footer border-0 justify-content-center"};function Rt(s,t,p,b,l,i){return d(),r("div",Et,[e("div",St,[e("div",Lt,[e("div",Bt,[e("h5",Dt,[e("span",null,[qt,D(" "+_(p.tempProduct.title),1)])]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=c=>s.$emit("clearInput"))})]),e("div",Ot,[e("span",Ft,'是否要刪除 "'+_(p.tempProduct.title)+'" ？',1)]),e("div",Nt,[e("button",{type:"button",class:"btn btn-outline-danger w-25","data-bs-dismiss":"modal",onClick:t[1]||(t[1]=c=>s.$emit("clearInput"))}," 取消 "),e("button",{type:"button",class:"btn btn-danger w-25",onClick:t[2]||(t[2]=(...c)=>i.delProduct&&i.delProduct(...c))}," 確認 ")])])])],512)}const jt=M(Tt,[["render",Rt]]);var zt={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:L,VITE_APIPATH:B}=zt,Ht={components:{ImagesModalComponent:ke,ProductModalComponent:Ut,DelProductModalComponent:jt,AdminPaginationComponent:O},data(){return{products:[],pagination:{},tempProduct:{imagesUrl:[]},isNew:!1,isLoading:!1}},methods:{getProduct(s=1){this.isLoading=!0,I.get(`${L}/api/${B}/admin/products?page=${s}`).then(t=>{const p=t.data.products;this.products=p.map(b=>({...b,hot:b.hot===1,recommendation:b.recommendation===1,is_enabled:b.is_enabled===1})),this.pagination=t.data.pagination,this.isLoading=!1}).catch(t=>{this.isLoading=!1,g("error",t.response.data.message)})},toggleSwitch(s){const t=!s.is_enabled,p=q.mixin({customClass:{confirmButton:"btn btn-secondary text-light",cancelButton:"btn btn-outline-secondary me-16"},buttonsStyling:!1});p.fire({title:"是否要更新啟用狀態？",icon:"warning",showCancelButton:!0,confirmButtonText:"是, 我要更新",cancelButtonText:"我再想想",reverseButtons:!0}).then(b=>{if(b.isConfirmed){const l=!t,i={...s,hot:s.hot===!0?1:0,recommendation:s.recommendation===!0?1:0,is_enabled:l?1:0};I.put(`${L}/api/${B}/admin/product/${s.id}`,{data:i}).then(()=>{p.fire({title:`已更新 ${s.title} 的啟用狀態`,icon:"success",showConfirmButton:!1,timer:2e3})}).catch(()=>{g("error","更新啟用狀態失敗")})}else s.is_enabled=t})},openModal(s,t){s==="new"?(this.tempProduct={},this.isNew=!0,this.$refs.modal.productModal.show()):s==="edit"?(this.tempProduct={...t},this.isNew=!1,this.$refs.modal.productModal.show()):s==="images"?(this.tempProduct={...t},this.isNew=!1,this.$refs.imageModal.imageModal.show()):s==="delete"&&(this.tempProduct={...t},this.isNew=!1,this.$refs.delModal.delProductModal.show())},clearInput(){this.tempProduct={imagesUrl:[]},this.$refs.modal.resetForm()},clearImgInput(){this.tempProduct={imagesUrl:[]},this.$refs.modal.resetForm(),this.$refs.imageModal.resetForm()}},mounted(){const s=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");I.defaults.headers.common.Authorization=s,this.getProduct()}},Wt={class:"container py-144"},Jt=e("h2",{class:"fw-bold mb-32"},"餐點列表",-1),Kt={class:"text-end mb-24"},Qt=e("i",{class:"bi bi-plus"},null,-1),Zt={class:"table-responsive mb-16"},Gt={class:"table align-middle"},Xt=e("thead",{class:"text-nowrap"},[e("tr",{class:"text-nowrap text-center border-dark"},[e("th",{width:"120"}," 商品照 "),e("th",{width:"120"}," 分類 "),e("th",{width:"120"}," 餐點名稱 "),e("th",{width:"120"}," 原價 "),e("th",{width:"120"}," 售價 "),e("th",{width:"100"}," 是否啟用 "),e("th",{width:"120"}," 編輯圖片 "),e("th",{width:"120"}," 編輯內容 "),e("th",{width:"120"}," 刪除 ")])],-1),Yt={class:"text-nowrap text-center"},eo=["src","alt"],to={class:"form-check form-switch d-flex justify-content-center"},oo=["onUpdate:modelValue","onChange"],lo=["onClick"],so=e("i",{class:"bi bi-image fs-5"},null,-1),ao=[so],no=["onClick"],io=e("i",{class:"bi bi-pencil-square fs-5"},null,-1),ro=[io],co=["onClick"],uo=e("i",{class:"bi bi-trash3 fs-5"},null,-1),mo=[uo];function po(s,t,p,b,l,i){const c=v("VueLoading"),f=v("AdminPaginationComponent"),V=v("ImagesModalComponent"),m=v("ProductModalComponent"),o=v("DelProductModalComponent");return d(),r(k,null,[n(c,{active:l.isLoading,"onUpdate:active":t[0]||(t[0]=a=>l.isLoading=a),loader:"bars",color:"#ff9900"},null,8,["active"]),e("div",Wt,[Jt,e("div",Kt,[e("button",{type:"button",class:"btn btn-primary text-light",onClick:t[1]||(t[1]=a=>i.openModal("new"))},[D(" 建立新餐點 "),Qt])]),e("div",Zt,[e("table",Gt,[Xt,e("tbody",Yt,[(d(!0),r(k,null,y(l.products,a=>(d(),r("tr",{key:a.id},[e("td",null,[e("img",{src:a.imageUrl,alt:a.title,style:{width:"160px",height:"120px"}},null,8,eo)]),e("td",null,_(a.category),1),e("td",null,_(a.title),1),e("td",null,_(a.origin_price),1),e("td",null,_(a.price),1),e("td",null,[e("div",to,[x(e("input",{class:"form-check-input",type:"checkbox",role:"switch",style:{height:"20px"},"onUpdate:modelValue":P=>a.is_enabled=P,onChange:P=>i.toggleSwitch(a)},null,40,oo),[[$,a.is_enabled]])])]),e("td",null,[e("a",{href:"#",class:"link-dark-blue",onClick:U(P=>i.openModal("images",a),["prevent"])},ao,8,lo)]),e("td",null,[e("a",{href:"#",class:"link-primary",onClick:U(P=>i.openModal("edit",a),["prevent"])},ro,8,no)]),e("td",null,[e("a",{href:"#",class:"link-danger",onClick:U(P=>i.openModal("delete",a),["prevent"])},mo,8,co)])]))),128))])])]),n(f,{pagination:l.pagination,onEmitPages:i.getProduct},null,8,["pagination","onEmitPages"]),n(V,{ref:"imageModal","temp-product":l.tempProduct,onClearInput:i.clearImgInput,onUpdate:i.getProduct},null,8,["temp-product","onClearInput","onUpdate"]),n(m,{ref:"modal","temp-product":l.tempProduct,"is-new":l.isNew,onClearInput:i.clearInput,onUpdate:i.getProduct},null,8,["temp-product","is-new","onClearInput","onUpdate"]),n(o,{ref:"delModal","temp-product":l.tempProduct,onClearInput:i.clearInput,onUpdate:i.getProduct},null,8,["temp-product","onClearInput","onUpdate"])])],64)}const go=M(Ht,[["render",po]]);export{go as default};