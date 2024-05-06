import{M as i}from"./index-xXrOZefA.js";import{a as c}from"./axios-G2rPRu76.js";import{t as r}from"./sweetalert--JC6CFTx.js";var p={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_APIPATH:"taiwang",VITE_MAP:"AIzaSyB8xClOZxLQMzkbq6jjN2KlrBmFPPJkvEA",BASE_URL:"/TaiWang-Order-Online/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_API:o,VITE_APIPATH:e}=p,$=i("cartStore",{state:()=>({cart:[]}),actions:{getCart(){this.isLoading=!0,c.get(`${o}/api/${e}/cart`).then(t=>{this.cart=t.data.data}).catch(t=>{console.log(t)})},addCart(t,a=1){const s={qty:a,product_id:t};c.post(`${o}/api/${e}/cart`,{data:s}).then(d=>{r("top","success",d.data.message),this.getCart()}).catch(()=>{r("top","warning","加入購物車失敗")})},deleteItem(t){const a=t.product.title;c.delete(`${o}/api/${e}/cart/${t.id}`).then(()=>{r("top","warning",`已刪除 "${a}"`),this.getCart()}).catch(()=>{r("top","warning",`刪除 "${a}" 失敗`)})},increaseCartNum(t){t.qty++;const a={product_id:t.product_id,qty:t.qty};c.put(`${o}/api/${e}/cart/${t.id}`,{data:a}).then(()=>{r("top","success",`已更新 ${t.product.title} 的數量`),this.getCart()}).catch(()=>{t.qty--,r("top","warning",`更新 ${t.product.title} 的數量失敗`)})},decreaseCartNum(t){t.qty--;const a={product_id:t.product_id,qty:t.qty};c.put(`${o}/api/${e}/cart/${t.id}`,{data:a}).then(()=>{r("top","success",`已更新 ${t.product.title} 的數量`),this.getCart()}).catch(()=>{t.qty++,r("top","warning",`更新 ${t.product.title} 的數量失敗`)})}}});export{$ as c};
