import{a as m}from"./axios-G2rPRu76.js";import{_ as u,R as p,h as _,o as f,c as h,b as e,f as i,v as l,i as g,j as b,e as x}from"./index-OkXrY8Pc.js";import{t as d}from"./sweetalert-FRUwQA8X.js";var w={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:v}=w,k={components:{RouterLink:p},data(){return{user:{username:"",password:""}}},methods:{login(){m.post(`${v}/admin/signin`,this.user).then(s=>{const{token:t,expired:a}=s.data;document.cookie=`myToken=${t}; expires=${new Date(a)};`,this.user={username:"",password:""},d("top","success",s.data.message),setTimeout(()=>this.$router.push("/admin"),1500)}).catch(s=>{d("top","error",s.response.data.message)})}}},P={class:"bg-primary vh-100 d-flex justify-content-center align-items-center"},V={class:"w-lg-50 w-xl-25 bg-white rounded-1 p-32"},I=e("div",{class:"text-center mb-24"},[e("h2",{class:"d-inline-block bg-dark text-white text-center p-16"},"泰汪泰式料理")],-1),T=e("h3",{class:"h4 text-center mb-16"},"後台登入",-1),A={class:"form-floating mb-16"},E=e("label",{for:"floatingInput"},"帳號",-1),y={class:"form-floating mb-32"},R=e("label",{for:"floatingPassword"},"密碼",-1);function B(s,t,a,L,n,r){const c=_("RouterLink");return f(),h("div",P,[e("div",V,[I,T,e("div",A,[i(e("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"xxx@mail.com","onUpdate:modelValue":t[0]||(t[0]=o=>n.user.username=o)},null,512),[[l,n.user.username]]),E]),e("div",y,[i(e("input",{type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=o=>n.user.password=o)},null,512),[[l,n.user.password]]),R]),e("button",{type:"button",class:"btn btn-dark btn-lg w-100 mb-16",onClick:t[2]||(t[2]=(...o)=>r.login&&r.login(...o))},"登入"),g(c,{to:"/",class:"btn btn-outline-gray btn-lg w-100"},{default:b(()=>[x("回到前台")]),_:1})])])}const C=u(k,[["render",B]]);export{C as default};
