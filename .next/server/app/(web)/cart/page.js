(()=>{var e={};e.id=577,e.ids=[577],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7858:(e,r,a)=>{"use strict";a.r(r),a.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>o,routeModule:()=>m,tree:()=>d}),a(1362),a(6402),a(5866);var s=a(3191),t=a(8716),n=a(7922),i=a.n(n),c=a(5231),l={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>c[e]);a.d(r,l);let d=["",{children:["(web)",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,1362)),"E:\\fe_fw2\\duAn\\frontend\\src\\app\\(web)\\cart\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,6402)),"E:\\fe_fw2\\duAn\\frontend\\src\\app\\(web)\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"]}],o=["E:\\fe_fw2\\duAn\\frontend\\src\\app\\(web)\\cart\\page.js"],u="/(web)/cart/page",p={require:a,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/(web)/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4082:(e,r,a)=>{Promise.resolve().then(a.bind(a,7773))},7773:(e,r,a)=>{"use strict";a.r(r),a.d(r,{default:()=>l});var s=a(326),t=a(434),n=a(7577),i=a(5842),c=a(4100);let l=function(){let e=(0,i.v9)(e=>e.cart?.items)||[],r=(0,i.I0)(),a=(e,a)=>{r((0,c.h2)({_id:e,size:a}))},l=e=>{e.quantity>1&&r((0,c.a3)({_id:e._id,quantity:e.quantity-1,size:e.size}))},d=e=>{r((0,c.a3)({_id:e._id,quantity:e.quantity+1,size:e.size}))},o=(0,n.useMemo)(()=>e.reduce((e,r)=>e+r.price*r.quantity,0),[e]);return(0,s.jsxs)("div",{className:"main-container",children:[s.jsx("section",{className:"bread-crumb",children:s.jsx("div",{className:"cart-container",children:(0,s.jsxs)("ul",{className:"breadcrumb",children:[(0,s.jsxs)("li",{className:"breadcrumb-item",children:[s.jsx("a",{className:"breadcrumb-item__link",href:"",children:"Trang chủ"}),s.jsx("span",{className:"breadcrumb-icon",children:s.jsx("i",{className:"fa-solid fa-angle-right"})})]}),s.jsx("li",{className:"breadcrumb-item",children:s.jsx("a",{className:"breadcrumb-item__link",href:"",children:"Giỏ h\xe0ng"})})]})})}),s.jsx("div",{className:"cart-container",children:(0,s.jsxs)("div",{className:"cart",children:[(0,s.jsxs)("div",{className:"cart-header",children:[s.jsx("span",{children:"Th\xf4ng tin sản phẩm"}),s.jsx("span",{children:"Đơn gi\xe1"}),s.jsx("span",{children:"Số lượng"}),s.jsx("span",{children:"Th\xe0nh tiền"})]}),(0,s.jsxs)("div",{className:"cart-body",children:[e.map(e=>(0,s.jsxs)("div",{className:"cart-product",children:[s.jsx("a",{href:"",className:"cart-product-img",children:s.jsx("img",{className:"",src:`http://localhost:5000/images/${e.image}`,alt:"Product 1"})}),(0,s.jsxs)("div",{className:"cart-product-info",children:[(0,s.jsxs)("div",{className:"cart-product-wapper",children:[s.jsx("a",{href:"",className:"cart-product-name",children:e.name}),(0,s.jsxs)("a",{href:"",className:"cart-product-size",children:["Size: ",e.size]}),s.jsx("button",{onClick:()=>a(e._id,e.size),style:{color:"red"},children:"X\xf3a"})]}),s.jsx("div",{className:"cart-product-price grid-cart",children:(0,s.jsxs)("span",{className:"cart-price",children:[e.price.toLocaleString()," VND"]})}),(0,s.jsxs)("div",{className:"cart-product-quantity grid-cart",children:[s.jsx("a",{onClick:()=>l(e),className:"price-quantity price-quantity-minus",children:"-"}),s.jsx("input",{className:"price-quantity-input",min:"1",type:"number",value:e.quantity,onChange:a=>r((0,c.a3)({_id:e._id,quantity:parseInt(a.target.value),size:e.size}))}),s.jsx("a",{onClick:()=>d(e),className:"price-quantity price-quantity-plus",children:"+"})]}),s.jsx("div",{className:"cart-product-price grid-cart",children:(0,s.jsxs)("span",{className:"cart-price",children:[(e.price*e.quantity).toLocaleString()," VND"]})})]})]},e._id)),(0,s.jsxs)("div",{className:"cart-footer",children:[(0,s.jsxs)(t.default,{href:"/products",className:"cart-footer__return",children:[s.jsx("i",{className:"fa-solid fa-arrow-left"})," Tiếp tục mua h\xe0ng"]}),(0,s.jsxs)("div",{className:"cart-footer__sub-total",children:[(0,s.jsxs)("div",{className:"cart-footer__head",children:[s.jsx("span",{className:"cart-footer__head-title",children:"Tổng tiền:"}),s.jsx("span",{className:"cart-price",children:o.toLocaleString("vi-VN",{style:"currency",currency:"VND"})})]}),s.jsx(t.default,{href:"/checkout",className:"btn-checkout",children:"Thanh to\xe1n"})]})]})]})]})})]})}},1362:(e,r,a)=>{"use strict";a.r(r),a.d(r,{$$typeof:()=>i,__esModule:()=>n,default:()=>c});var s=a(8570);let t=(0,s.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\app\(web)\cart\page.js`),{__esModule:n,$$typeof:i}=t;t.default;let c=(0,s.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\app\(web)\cart\page.js#default`)}};var r=require("../../../webpack-runtime.js");r.C(e);var a=e=>r(r.s=e),s=r.X(0,[819,758,901,328,915,944,459],()=>a(7858));module.exports=s})();