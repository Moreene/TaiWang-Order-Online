import{u as b}from"./useProductStore-FSFNROgg.js";import{_ as n,P as i}from"./PaginationComponent-tWjCRU6h.js";import{i as h,s as p,j as P,o as a,c,a as k,F as s,r as m,l,t as x,b as y}from"./index-jpjlqHC5.js";import"./axios-G2rPRu76.js";import"./useCartStore-KlgxLiAS.js";import"./sweetalert-wF95ZFT_.js";const w=["aria-labelledby","id"],B={class:"row gy-48 mb-48"},S={key:1,class:"mb-0 fs-6 text-center"},j={__name:"ProductsTemplate",props:["category","matchProducts","keyWord"],setup(t){const f=t,u=h([]);function d(e){u.value=e}const g=b(),{products:r}=p(g),v=P(()=>{switch(f.category){case"recommendation":return r.value.filter(e=>e.recommendation);case"salad":return r.value.filter(e=>e.category==="開胃涼拌");case"meat":return r.value.filter(e=>e.category==="大口吃肉");case"vegetable":return r.value.filter(e=>e.category==="大口吃菜");case"seafood":return r.value.filter(e=>e.category==="泰鮮海鮮");case"rice":return r.value.filter(e=>e.category==="來一點飯");case"drink":return r.value.filter(e=>e.category==="冰涼泰飲");case"dessert":return r.value.filter(e=>e.category==="泰式甜點")}});return(e,W)=>(a(),c("div",{class:"tab-pane show active",role:"tabpanel","aria-labelledby":t.category+"-tab",tabindex:"0",id:t.category},[k("div",B,[t.matchProducts.length?(a(),c(s,{key:0},[(a(!0),c(s,null,m(t.matchProducts,o=>(a(),c("div",{class:"col-md-4 col-lg-3 mb-48",key:o.id},[l(i,{item:o},null,8,["item"])]))),128)),l(n,{products:t.matchProducts,onUpdateProducts:d},null,8,["products"])],64)):t.keyWord!==""&&!t.matchProducts.length?(a(),c("p",S,"抱歉，沒有符合「 "+x(t.keyWord)+" 」的餐點唷！",1)):(a(),c(s,{key:2},[(a(!0),c(s,null,m(y(u),o=>(a(),c("div",{class:"col-md-4 col-lg-3 mb-48",key:o.id},[l(i,{item:o},null,8,["item"])]))),128)),l(n,{products:y(v),onUpdateProducts:d},null,8,["products"])],64))])],8,w))}};export{j as default};
