(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5577],{7172:function(a,e,s){Promise.resolve().then(s.bind(s,184))},184:function(a,e,s){"use strict";s.r(e);var i=s(7437),c=s(7138),t=s(2265),r=s(1444),n=s(1085);e.default=function(){let a=(0,r.v9)(a=>{var e;return null===(e=a.cart)||void 0===e?void 0:e.items})||[],e=(0,r.I0)(),s=(a,s)=>{e((0,n.h2)({_id:a,size:s}))},l=a=>{a.quantity>1&&e((0,n.a3)({_id:a._id,quantity:a.quantity-1,size:a.size}))},d=a=>{e((0,n.a3)({_id:a._id,quantity:a.quantity+1,size:a.size}))},u=(0,t.useMemo)(()=>a.reduce((a,e)=>a+e.price*e.quantity,0),[a]);return(0,i.jsxs)("div",{className:"main-container",children:[(0,i.jsx)("section",{className:"bread-crumb",children:(0,i.jsx)("div",{className:"cart-container",children:(0,i.jsxs)("ul",{className:"breadcrumb",children:[(0,i.jsxs)("li",{className:"breadcrumb-item",children:[(0,i.jsx)("a",{className:"breadcrumb-item__link",href:"",children:"Trang chủ"}),(0,i.jsx)("span",{className:"breadcrumb-icon",children:(0,i.jsx)("i",{className:"fa-solid fa-angle-right"})})]}),(0,i.jsx)("li",{className:"breadcrumb-item",children:(0,i.jsx)("a",{className:"breadcrumb-item__link",href:"",children:"Giỏ h\xe0ng"})})]})})}),(0,i.jsx)("div",{className:"cart-container",children:(0,i.jsxs)("div",{className:"cart",children:[(0,i.jsxs)("div",{className:"cart-header",children:[(0,i.jsx)("span",{children:"Th\xf4ng tin sản phẩm"}),(0,i.jsx)("span",{children:"Đơn gi\xe1"}),(0,i.jsx)("span",{children:"Số lượng"}),(0,i.jsx)("span",{children:"Th\xe0nh tiền"})]}),(0,i.jsxs)("div",{className:"cart-body",children:[a.map(a=>(0,i.jsxs)("div",{className:"cart-product",children:[(0,i.jsx)("a",{href:"",className:"cart-product-img",children:(0,i.jsx)("img",{className:"",src:"".concat("http://localhost:5000/images","/").concat(a.image),alt:"Product 1"})}),(0,i.jsxs)("div",{className:"cart-product-info",children:[(0,i.jsxs)("div",{className:"cart-product-wapper",children:[(0,i.jsx)("a",{href:"",className:"cart-product-name",children:a.name}),(0,i.jsxs)("a",{href:"",className:"cart-product-size",children:["Size: ",a.size]}),(0,i.jsx)("button",{onClick:()=>s(a._id,a.size),style:{color:"red"},children:"X\xf3a"})]}),(0,i.jsx)("div",{className:"cart-product-price grid-cart",children:(0,i.jsxs)("span",{className:"cart-price",children:[a.price.toLocaleString()," VND"]})}),(0,i.jsxs)("div",{className:"cart-product-quantity grid-cart",children:[(0,i.jsx)("a",{onClick:()=>l(a),className:"price-quantity price-quantity-minus",children:"-"}),(0,i.jsx)("input",{className:"price-quantity-input",min:"1",type:"number",value:a.quantity,onChange:s=>e((0,n.a3)({_id:a._id,quantity:parseInt(s.target.value),size:a.size}))}),(0,i.jsx)("a",{onClick:()=>d(a),className:"price-quantity price-quantity-plus",children:"+"})]}),(0,i.jsx)("div",{className:"cart-product-price grid-cart",children:(0,i.jsxs)("span",{className:"cart-price",children:[(a.price*a.quantity).toLocaleString()," VND"]})})]})]},a._id)),(0,i.jsxs)("div",{className:"cart-footer",children:[(0,i.jsxs)(c.default,{href:"/products",className:"cart-footer__return",children:[(0,i.jsx)("i",{className:"fa-solid fa-arrow-left"})," Tiếp tục mua h\xe0ng"]}),(0,i.jsxs)("div",{className:"cart-footer__sub-total",children:[(0,i.jsxs)("div",{className:"cart-footer__head",children:[(0,i.jsx)("span",{className:"cart-footer__head-title",children:"Tổng tiền:"}),(0,i.jsx)("span",{className:"cart-price",children:u.toLocaleString("vi-VN",{style:"currency",currency:"VND"})})]}),(0,i.jsx)(c.default,{href:"/checkout",className:"btn-checkout",children:"Thanh to\xe1n"})]})]})]})]})})]})}},1085:function(a,e,s){"use strict";s.d(e,{LL:function(){return n},Xq:function(){return c},a3:function(){return r},h2:function(){return t}});let i=(0,s(1116).oM)({name:"cart",initialState:{items:[]},reducers:{addToCart:(a,e)=>{let{item:s,_id:i,size:c,quantity:t}=e.payload,r=Number(t);(isNaN(r)||r<1)&&(r=1);let n=a.items.find(a=>a._id===i&&a.size===c);n?n.quantity+=r:a.items.push({...s,size:c,quantity:r})},removeFromCart:(a,e)=>{let{_id:s,size:i}=e.payload;a.items=a.items.filter(a=>a._id!==s||a.size!==i)},updateCartItemQuantity:(a,e)=>{let{_id:s,size:i,quantity:c}=e.payload,t=a.items.find(a=>a._id===s&&a.size===i);t&&(t.quantity=c)},clearCart:a=>{a.items=[]}}}),{addToCart:c,removeFromCart:t,updateCartItemQuantity:r,clearCart:n}=i.actions;e.ZP=i}},function(a){a.O(0,[7138,1444,1116,2971,7023,1744],function(){return a(a.s=7172)}),_N_E=a.O()}]);