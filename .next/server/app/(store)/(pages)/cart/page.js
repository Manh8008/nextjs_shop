(()=>{var e={};e.id=638,e.ids=[638],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9457:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>o,routeModule:()=>m,tree:()=>d}),r(8292),r(8223),r(5866);var a=r(3191),s=r(8716),n=r(7922),i=r.n(n),c=r(5231),l={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>c[e]);r.d(t,l);let d=["",{children:["(store)",{children:["(pages)",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8292)),"E:\\fe_fw2\\duAn\\frontend\\app\\(store)\\(pages)\\cart\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8223)),"E:\\fe_fw2\\duAn\\frontend\\app\\(store)\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],o=["E:\\fe_fw2\\duAn\\frontend\\app\\(store)\\(pages)\\cart\\page.js"],u="/(store)/(pages)/cart/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(store)/(pages)/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7776:(e,t,r)=>{Promise.resolve().then(r.bind(r,7274))},7274:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var a=r(326),s=r(7577),n=r(5842),i=r(6226),c=r(9947),l=r(434);let d=function(){return a.jsx("section",{className:"bread-crumb",children:a.jsx("div",{className:"cart-container",children:(0,a.jsxs)("ul",{className:"breadcrumb",children:[(0,a.jsxs)("li",{className:"breadcrumb-item",children:[a.jsx("a",{className:"breadcrumb-item__link",href:"",children:"Trang chủ"}),a.jsx("span",{className:"breadcrumb-icon",children:a.jsx("i",{className:"fa-solid fa-angle-right"})})]}),a.jsx("li",{className:"breadcrumb-item",children:a.jsx("a",{className:"breadcrumb-item__link",href:"",children:"Giỏ h\xe0ng"})})]})})})},o=function({children:e,totalAmount:t}){return(0,a.jsxs)("div",{className:"main-container",children:[a.jsx(d,{}),a.jsx("div",{className:"cart-container",children:(0,a.jsxs)("div",{className:"cart",children:[(0,a.jsxs)("div",{className:"cart-header",children:[a.jsx("span",{children:"Th\xf4ng tin sản phẩm"}),a.jsx("span",{children:"Đơn gi\xe1"}),a.jsx("span",{children:"Số lượng"}),a.jsx("span",{children:"Th\xe0nh tiền"})]}),(0,a.jsxs)("div",{className:"cart-body",children:[e,(0,a.jsxs)("div",{className:"cart-footer",children:[(0,a.jsxs)(l.default,{href:"/products",className:"cart-footer__return",children:[a.jsx("i",{className:"fa-solid fa-arrow-left"})," Tiếp tục mua h\xe0ng"]}),(0,a.jsxs)("div",{className:"cart-footer__sub-total",children:[(0,a.jsxs)("div",{className:"cart-footer__head",children:[a.jsx("span",{className:"cart-footer__head-title",children:"Tổng tiền:"}),a.jsx("span",{className:"cart-price",children:t.toLocaleString("vi-VN",{style:"currency",currency:"VND"})})]}),a.jsx(l.default,{href:"/checkout",className:"btn-checkout",children:"Thanh to\xe1n"})]})]})]})]})})]})},u=function(){let e=(0,n.I0)(),t=(0,n.v9)(e=>e.cart?.items),r=(0,s.useMemo)(()=>t||[],[t]),l=(t,r)=>{e((0,c.h2)({_id:t,size:r}))},d=t=>{t.quantity>1&&e((0,c.a3)({_id:t._id,quantity:t.quantity-1,size:t.size}))},u=t=>{e((0,c.a3)({_id:t._id,quantity:t.quantity+1,size:t.size}))},p=t=>{e((0,c.a3)({_id:item._id,quantity:parseInt(t.target.value),size:item.size}))},m=(0,s.useMemo)(()=>r.reduce((e,t)=>e+t.price*t.quantity,0),[r]);return a.jsx(o,{totalAmount:m,children:r.map(e=>(0,a.jsxs)("div",{className:"cart-product",children:[a.jsx("a",{href:"",className:"cart-product-img",children:a.jsx(i.default,{width:500,height:98,src:`http://localhost:5000/images/${e.image}`,alt:e.name})}),(0,a.jsxs)("div",{className:"cart-product-info",children:[(0,a.jsxs)("div",{className:"cart-product-wapper",children:[a.jsx("a",{href:"",className:"cart-product-name",children:e.name}),(0,a.jsxs)("a",{href:"",className:"cart-product-size",children:["Size: ",e.size]}),a.jsx("button",{onClick:()=>l(e._id,e.size),style:{color:"red"},children:"X\xf3a"})]}),a.jsx("div",{className:"cart-product-price grid-cart",children:(0,a.jsxs)("span",{className:"cart-price",children:[e.price.toLocaleString()," VND"]})}),(0,a.jsxs)("div",{className:"cart-product-quantity grid-cart",children:[a.jsx("a",{onClick:()=>d(e),className:"price-quantity price-quantity-minus",children:"-"}),a.jsx("input",{className:"price-quantity-input",min:"1",type:"number",value:e.quantity,onChange:p}),a.jsx("a",{onClick:()=>u(e),className:"price-quantity price-quantity-plus",children:"+"})]}),a.jsx("div",{className:"cart-product-price grid-cart",children:(0,a.jsxs)("span",{className:"cart-price",children:[(e.price*e.quantity).toLocaleString()," VND"]})})]})]},e._id))})}},6226:(e,t,r)=>{"use strict";r.d(t,{default:()=>s.a});var a=r(9029),s=r.n(a)},9029:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return c}});let a=r(1174),s=r(3078),n=r(2481),i=a._(r(6820));function c(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=n.Image},8292:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var a=r(8570);let s=(0,a.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\app\(store)\(pages)\cart\Cart.js`),{__esModule:n,$$typeof:i}=s;s.default;let c=(0,a.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\app\(store)\(pages)\cart\Cart.js#default`)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[819,758,481,405],()=>r(9457));module.exports=a})();