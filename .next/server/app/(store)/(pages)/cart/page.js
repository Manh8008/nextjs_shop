(()=>{var e={};e.id=638,e.ids=[638],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9457:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>o,routeModule:()=>m,tree:()=>d}),t(8292),t(8223),t(5866);var s=t(3191),a=t(8716),n=t(7922),i=t.n(n),c=t(5231),l={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>c[e]);t.d(r,l);let d=["",{children:["(store)",{children:["(pages)",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,8292)),"E:\\fe_fw2\\duAn\\frontend\\app\\(store)\\(pages)\\cart\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,8223)),"E:\\fe_fw2\\duAn\\frontend\\app\\(store)\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],o=["E:\\fe_fw2\\duAn\\frontend\\app\\(store)\\(pages)\\cart\\page.js"],u="/(store)/(pages)/cart/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(store)/(pages)/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7776:(e,r,t)=>{Promise.resolve().then(t.bind(t,7274))},7274:(e,r,t)=>{"use strict";t.d(r,{default:()=>u});var s=t(326),a=t(7577),n=t(5842),i=t(6226),c=t(9947),l=t(434);let d=function(){return s.jsx("section",{className:"bread-crumb",children:s.jsx("div",{className:"cart-container",children:(0,s.jsxs)("ul",{className:"breadcrumb",children:[(0,s.jsxs)("li",{className:"breadcrumb-item",children:[s.jsx("a",{className:"breadcrumb-item__link",href:"",children:"Trang chủ"}),s.jsx("span",{className:"breadcrumb-icon",children:s.jsx("i",{className:"fa-solid fa-angle-right"})})]}),s.jsx("li",{className:"breadcrumb-item",children:s.jsx("a",{className:"breadcrumb-item__link",href:"",children:"Giỏ h\xe0ng"})})]})})})},o=function({children:e,totalAmount:r}){return(0,s.jsxs)("div",{className:"main-container",children:[s.jsx(d,{}),s.jsx("div",{className:"cart-container",children:(0,s.jsxs)("div",{className:"cart",children:[(0,s.jsxs)("div",{className:"cart-header",children:[s.jsx("span",{children:"Th\xf4ng tin sản phẩm"}),s.jsx("span",{children:"Đơn gi\xe1"}),s.jsx("span",{children:"Số lượng"}),s.jsx("span",{children:"Th\xe0nh tiền"})]}),(0,s.jsxs)("div",{className:"cart-body",children:[e,(0,s.jsxs)("div",{className:"cart-footer",children:[(0,s.jsxs)(l.default,{href:"/products",className:"cart-footer__return",children:[s.jsx("i",{className:"fa-solid fa-arrow-left"})," Tiếp tục mua h\xe0ng"]}),(0,s.jsxs)("div",{className:"cart-footer__sub-total",children:[(0,s.jsxs)("div",{className:"cart-footer__head",children:[s.jsx("span",{className:"cart-footer__head-title",children:"Tổng tiền:"}),s.jsx("span",{className:"cart-price",children:r.toLocaleString("vi-VN",{style:"currency",currency:"VND"})})]}),s.jsx(l.default,{href:"/checkout",className:"btn-checkout",children:"Thanh to\xe1n"})]})]})]})]})})]})},u=function(){let e=(0,n.I0)(),r=(0,n.v9)(e=>e.cart?.items),t=(0,a.useMemo)(()=>r||[],[r]),l=(r,t)=>{e((0,c.h2)({_id:r,size:t}))},d=r=>{r.quantity>1&&e((0,c.a3)({_id:r._id,quantity:r.quantity-1,size:r.size}))},u=r=>{e((0,c.a3)({_id:r._id,quantity:r.quantity+1,size:r.size}))},p=r=>{e((0,c.a3)({_id:item._id,quantity:parseInt(r.target.value),size:item.size}))},m=(0,a.useMemo)(()=>t.reduce((e,r)=>e+r.price*r.quantity,0),[t]);return s.jsx(o,{totalAmount:m,children:t.map(e=>(0,s.jsxs)("div",{className:"cart-product",children:[s.jsx("a",{href:"",className:"cart-product-img",children:s.jsx(i.default,{width:500,height:98,src:`http://localhost:5000/images/${e.image}`,alt:e.name})}),(0,s.jsxs)("div",{className:"cart-product-info",children:[(0,s.jsxs)("div",{className:"cart-product-wapper",children:[s.jsx("a",{href:"",className:"cart-product-name",children:e.name}),(0,s.jsxs)("a",{href:"",className:"cart-product-size",children:["Size: ",e.size]}),s.jsx("button",{onClick:()=>l(e._id,e.size),style:{color:"red"},children:"X\xf3a"})]}),s.jsx("div",{className:"cart-product-price grid-cart",children:(0,s.jsxs)("span",{className:"cart-price",children:[e.price.toLocaleString()," VND"]})}),(0,s.jsxs)("div",{className:"cart-product-quantity grid-cart",children:[s.jsx("a",{onClick:()=>d(e),className:"price-quantity price-quantity-minus",children:"-"}),s.jsx("input",{className:"price-quantity-input",min:"1",type:"number",value:e.quantity,onChange:p}),s.jsx("a",{onClick:()=>u(e),className:"price-quantity price-quantity-plus",children:"+"})]}),s.jsx("div",{className:"cart-product-price grid-cart",children:(0,s.jsxs)("span",{className:"cart-price",children:[(e.price*e.quantity).toLocaleString()," VND"]})})]})]},e._id))})}},8292:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(8570);let a=(0,s.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\app\(store)\(pages)\cart\Cart.js`),{__esModule:n,$$typeof:i}=a;a.default;let c=(0,s.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\app\(store)\(pages)\cart\Cart.js#default`)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[819,758,226,405],()=>t(9457));module.exports=s})();