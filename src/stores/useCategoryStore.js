export const useCategoryStore = defineStore('category', () => {
  const categories = ref([
    { name: '主廚推薦', path: 'recommendation', imageUrl: 'https://images.deliveryhero.io/image/fd-tw/LH/z5gv-listing.jpg' },
    { name: '開胃涼拌', path: 'salad', imageUrl: 'https://images.unsplash.com/photo-1650394248408-4434b41630bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=950&q=80' },
    { name: '大口吃肉', path: 'meat', imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwY3Vycnl8ZW58MHx8MHx8fDA%3D' },
    { name: '大口吃菜', path: 'vegetable', imageUrl: 'https://www.thermos.com.tw/Upload/RECICONT/20/00000020.jpg' },
    { name: '泰鮮海鮮', path: 'seafood', imageUrl: 'https://images.unsplash.com/photo-1518732751612-2c0787ff5684?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVtb24lMjBmaXNofGVufDB8fDB8fHww' },
    { name: '來一點飯', path: 'rice', imageUrl: 'https://images.unsplash.com/photo-1613758235256-43a7bdc21d82?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: '冰涼泰飲', path: 'drink', imageUrl: 'https://images.unsplash.com/photo-1625535927032-dd38fdf54f84?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: '泰式甜點', path: 'dessert', imageUrl: 'https://images.unsplash.com/photo-1515467837915-15c4777ba46a?q=80&w=950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ]);
  return { categories };
});