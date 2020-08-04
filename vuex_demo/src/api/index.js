import request from "./request";

// 请求商品列表的数据
export const reqProducts = () =>request('/api/products');

// 请求购物车中的商品数据
export  const reqShoppingCart = ()=>request('/api/shoppingCart');

// 请求结算商品的数据（成功或者失败）
export  const reqPayment = ()=>request('/api/payment');
