import{_ as p,m as h,h as i,o as r,c as o,b as y,F as a,r as l,i as s,t as P}from"./index-4fXp9rp3.js";import{p as g}from"./productStore-6LBY5ngy.js";import{P as _,a as f}from"./PaginationComponent-Fs6--eXc.js";import"./axios-G2rPRu76.js";import"./cartStore-mle8UYZj.js";import"./sweetalert-vL_7v55_.js";const b={props:["category","matchProducts","keyWord"],components:{ProductsCardComponent:_,PaginationComponent:f},data(){return{sliceProducts:[]}},methods:{updateProducts(t){this.sliceProducts=t}},computed:{...h(g,["products"]),data(){switch(this.category){case"recommendation":return this.products.filter(t=>t.recommendation);case"salad":return this.products.filter(t=>t.category==="開胃涼拌");case"meat":return this.products.filter(t=>t.category==="大口吃肉");case"vegetable":return this.products.filter(t=>t.category==="大口吃菜");case"seafood":return this.products.filter(t=>t.category==="泰鮮海鮮");case"rice":return this.products.filter(t=>t.category==="來一點飯");case"drink":return this.products.filter(t=>t.category==="冰涼泰飲");case"dessert":return this.products.filter(t=>t.category==="泰式甜點")}}}},k=["aria-labelledby","id"],C={class:"row gy-48 mb-48"},v={key:1,class:"mb-0 fs-6 text-center"};function x(t,U,e,w,m,d){const n=i("ProductsCardComponent"),u=i("PaginationComponent");return r(),o("div",{class:"tab-pane show active",role:"tabpanel","aria-labelledby":e.category+"-tab",tabindex:"0",id:e.category},[y("div",C,[e.matchProducts.length?(r(),o(a,{key:0},[(r(!0),o(a,null,l(e.matchProducts,c=>(r(),o("div",{class:"col-md-4 col-lg-3 mb-48",key:c.id},[s(n,{item:c},null,8,["item"])]))),128)),s(u,{products:e.matchProducts,onUpdateProducts:d.updateProducts},null,8,["products","onUpdateProducts"])],64)):e.keyWord!==""&&!e.matchProducts.length?(r(),o("p",v,"抱歉，沒有符合「 "+P(e.keyWord)+" 」的餐點唷！",1)):(r(),o(a,{key:2},[(r(!0),o(a,null,l(m.sliceProducts,c=>(r(),o("div",{class:"col-md-4 col-lg-3 mb-48",key:c.id},[s(n,{item:c},null,8,["item"])]))),128)),s(u,{products:d.data,onUpdateProducts:d.updateProducts},null,8,["products","onUpdateProducts"])],64))])],8,k)}const D=p(b,[["render",x]]);export{D as default};