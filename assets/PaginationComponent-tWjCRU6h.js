import{_ as P,o as l,c as d,a as e,t as x,e as $,w as u,b as t,i as C,j as y,C as S,n as k,d as w,F as N,r as T}from"./index-jpjlqHC5.js";import{u as B}from"./useProductStore-FSFNROgg.js";import{u as D}from"./useCartStore-KlgxLiAS.js";const V={class:"card-img-wrapper w-100 rounded-top overflow-hidden"},j=["src","alt"],z={class:"py-16"},F={class:"fs-6 text-center"},M={class:"text-center text-danger fw-bold fs-6 mb-20"},E={class:"text-notoSans"},I={class:"text-center"},L={__name:"ProductsCardComponent",props:["item"],setup(n){const p=B(),{getProduct:v}=p,f=D(),{addCart:g}=f;return(r,i)=>(l(),d("a",{href:"#",class:"card w-75 w-md-100 mx-auto",onClick:i[1]||(i[1]=u(s=>t(v)(n.item.id),["prevent"]))},[e("div",V,[e("img",{src:n.item.imageUrl,class:"w-100 h-100 rounded-top",alt:n.item.title},null,8,j)]),e("div",z,[e("h2",F,x(n.item.title),1),e("p",M,[$("NT$ "),e("span",E,x(n.item.price),1)]),e("div",I,[e("button",{type:"button",class:"btn btn-primary link-light px-44",onClick:i[0]||(i[0]=u(s=>t(g)(n.item.id),["prevent","stop"]))},"加入購物車")])])]))}},O=P(L,[["__scopeId","data-v-b463b0ee"]]),U={"aria-label":"Page navigation",class:"my-4 d-flex justify-content-center"},q={class:"pagination"},A=["onClick"],Q={__name:"PaginationComponent",props:["products"],emits:["updateProducts"],setup(n,{expose:p,emit:v}){const f=n,g=v,r=C([]),i=C(12),s=C(0),m=y(()=>Math.ceil(r.value.length/i.value));function _(){const o=[];for(let a=0;a<m.value;a++)o[a]=r.value.slice(i.value*a,i.value*(a+1));g("updateProducts",o[s.value])}function h(o){o>=0&&o<m.value&&(s.value=o,window.scrollTo(0,0),_())}function b(){s.value=0,_()}return S(()=>f.products,o=>{r.value=o,_()},{immediate:!0}),p({resetPage:b}),(o,a)=>(l(),d("nav",U,[e("ul",q,[t(r).length>12?(l(),d("li",{key:0,class:k(["page-item",{disabled:t(s)===0}])},[e("a",{class:"page-link",href:"#",onClick:a[0]||(a[0]=u(c=>h(t(s)-1),["prevent"]))},"«")],2)):w("",!0),(l(!0),d(N,null,T(t(m),c=>(l(),d("li",{class:k(["page-item",{active:c===t(s)+1}]),key:c},[e("a",{class:"page-link",href:"#",onClick:u(G=>h(c-1),["prevent"])},x(c),9,A)],2))),128)),t(r).length>12?(l(),d("li",{key:1,class:k(["page-item",{disabled:t(s)===t(m)-1}])},[e("a",{class:"page-link",href:"#",onClick:a[1]||(a[1]=u(c=>h(t(s)+1),["prevent"]))},"»")],2)):w("",!0)])]))}};export{O as P,Q as _};