(()=>{var e={};e.id=3,e.ids=[3],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4635:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>x,pages:()=>o,routeModule:()=>m,tree:()=>c}),r(5834),r(7446),r(5866);var t=r(3191),a=r(8716),n=r(7922),i=r.n(n),l=r(5231),d={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);r.d(s,d);let c=["",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5834)),"E:\\fe_fw2\\duAn\\frontend\\src\\app\\admin\\page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,7446)),"E:\\fe_fw2\\duAn\\frontend\\src\\app\\admin\\layout.js"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],o=["E:\\fe_fw2\\duAn\\frontend\\src\\app\\admin\\page.js"],x="/admin/page",h={require:r,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/admin/page",pathname:"/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9909:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},1462:(e,s,r)=>{Promise.resolve().then(r.bind(r,3169)),Promise.resolve().then(r.bind(r,1461))},362:(e,s,r)=>{Promise.resolve().then(r.bind(r,8528))},8528:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>i});var t=r(326),a=r(7577);let n=function(){let[e,s]=(0,a.useState)(0),[r,n]=(0,a.useState)(0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("li",{children:[t.jsx("i",{className:"bx bxs-calendar-check"}),(0,t.jsxs)("span",{className:"text",children:[t.jsx("h3",{children:e}),t.jsx("p",{children:"Đơn h\xe0ng mới"})]})]}),(0,t.jsxs)("li",{children:[t.jsx("i",{className:"bx bxs-group"}),(0,t.jsxs)("span",{className:"text",children:[t.jsx("h3",{children:e}),t.jsx("p",{children:"Kh\xe1ch h\xe0ng"})]})]}),(0,t.jsxs)("li",{children:[t.jsx("i",{className:"bx bxs-dollar-circle"}),(0,t.jsxs)("span",{className:"text",children:[t.jsx("h3",{children:r.toLocaleString("vi-VN",{style:"currency",currency:"VND"})}),t.jsx("p",{children:"Tổng doanh thu"})]})]})]})},i=(0,r(9126).Z)(function(){let[e,s]=(0,a.useState)();return console.log(e),(0,t.jsxs)(t.Fragment,{children:[t.jsx("ul",{className:"box-info",children:t.jsx(n,{})}),t.jsx("div",{className:"table-data",children:(0,t.jsxs)("div",{className:"order",children:[(0,t.jsxs)("div",{className:"head",children:[t.jsx("h3",{children:"C\xe1c đơn gần đ\xe2y"}),t.jsx("i",{className:"bx bx-search"}),t.jsx("i",{className:"bx bx-filter"})]}),(0,t.jsxs)("table",{children:[t.jsx("thead",{children:(0,t.jsxs)("tr",{children:[t.jsx("th",{children:"T\xean"}),t.jsx("th",{children:"Ng\xe0y đặt h\xe0ng"}),t.jsx("th",{children:"Trạng th\xe1i"})]})}),t.jsx("tbody",{children:e&&e.map(e=>(0,t.jsxs)("tr",{children:[t.jsx("td",{children:t.jsx("p",{children:e.username})}),t.jsx("td",{children:new Date(e.updatedAt).toLocaleDateString()}),t.jsx("td",{children:t.jsx("span",{children:e.status})})]},e._id))})]})]})})]})})},3169:(e,s,r)=>{"use strict";r.d(s,{default:()=>i});var t=r(326),a=r(434),n=r(5047);let i=function(){let e=(0,n.usePathname)();return(0,t.jsxs)("section",{id:"sidebar",children:[(0,t.jsxs)(a.default,{href:"/admin",className:"brand",children:[t.jsx("i",{className:"bx bxs-smile"}),t.jsx("span",{className:"text",children:"Admin"})]}),(0,t.jsxs)("ul",{className:"side-menu top",children:[t.jsx("li",{className:`${"/admin"===e?"active":""}`,children:(0,t.jsxs)(a.default,{href:"/admin",children:[t.jsx("i",{className:"bx bxs-dashboard"}),t.jsx("span",{className:"text",children:"Dashboard"})]})}),t.jsx("li",{className:`${"/admin/orders"===e?"active":""}`,children:(0,t.jsxs)(a.default,{href:"/admin/orders",children:[t.jsx("i",{className:"bx bx-abacus"}),t.jsx("span",{className:"text",children:"Đơn h\xe0ng"})]})}),t.jsx("li",{className:`${"/admin/products"===e?"active":""}`,children:(0,t.jsxs)(a.default,{href:"/admin/products",children:[t.jsx("i",{className:"bx bxs-shopping-bag-alt"}),t.jsx("span",{className:"text",children:"Sản phẩm"})]})}),t.jsx("li",{className:`${"/admin/categories"===e?"active":""}`,children:(0,t.jsxs)(a.default,{href:"/admin/categories",children:[t.jsx("i",{className:"bx bx-list-ul"}),t.jsx("span",{className:"text",children:"Danh mục"})]})}),t.jsx("li",{className:`${"/admin/members"===e?"active":""}`,children:(0,t.jsxs)(a.default,{href:"/admin/members",children:[t.jsx("i",{className:"bx bxs-group"}),t.jsx("span",{className:"text",children:"Team"})]})})]}),t.jsx("ul",{className:"side-menu",children:t.jsx("li",{children:(0,t.jsxs)(a.default,{href:"/",children:[t.jsx("i",{className:"bx bxs-store"}),t.jsx("span",{className:"text",children:"Cửa h\xe0ng"})]})})})]})}},9126:(e,s,r)=>{"use strict";r.d(s,{Z:()=>l});var t=r(326),a=r(5047),n=r(7577),i=r(5842);let l=e=>s=>{let r=(0,a.useRouter)(),l=(0,i.v9)(e=>e.user.userInfo);return((0,n.useEffect)(()=>{l&&"admin"===l.role||r.push("/")},[l,r]),l&&"admin"===l.role)?t.jsx(e,{...s}):null}},1461:(e,s,r)=>{"use strict";r.d(s,{default:()=>j});var t=r(326),a=r(5842),n=r(2618),i=r(1549),l=r(1762),d=r(1908),c=r(4100),o=r(3118);let x={key:"root",storage:d.Z},h=(0,l.OJ)(x,c.ZP.reducer),m=(0,i.xC)({reducer:{cart:h,user:o.ZP},middleware:e=>e({serializableCheck:{ignoredActions:["persist/PERSIST","persist/REHYDRATE"]}})}),u=(0,l.p5)(m),j=function({children:e}){return t.jsx(a.zt,{store:m,children:t.jsx(n.r,{loading:null,persistor:u,children:e})})}},4100:(e,s,r)=>{"use strict";r.d(s,{LL:()=>l,Xq:()=>a,ZP:()=>d,a3:()=>i,h2:()=>n});let t=(0,r(1549).oM)({name:"cart",initialState:{items:[]},reducers:{addToCart:(e,s)=>{let{item:r,_id:t,size:a,quantity:n}=s.payload,i=Number(n);(isNaN(i)||i<1)&&(i=1);let l=e.items.find(e=>e._id===t&&e.size===a);l?l.quantity+=i:e.items.push({...r,size:a,quantity:i})},removeFromCart:(e,s)=>{let{_id:r,size:t}=s.payload;e.items=e.items.filter(e=>e._id!==r||e.size!==t)},updateCartItemQuantity:(e,s)=>{let{_id:r,size:t,quantity:a}=s.payload,n=e.items.find(e=>e._id===r&&e.size===t);n&&(n.quantity=a)},clearCart:e=>{e.items=[]}}}),{addToCart:a,removeFromCart:n,updateCartItemQuantity:i,clearCart:l}=t.actions,d=t},3118:(e,s,r)=>{"use strict";r.d(s,{ZP:()=>l,kS:()=>i,pH:()=>a});var t=r(1549);let a=(0,t.hg)("user/login",async(e,{rejectWithValue:s})=>{try{let r=await fetch("http://localhost:5000/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!r.ok){let e=await r.json();return s(e.message)}let t=await r.json();return localStorage.setItem("userInfo",JSON.stringify(t)),t}catch(e){return s(e.message)}}),n=(0,t.oM)({name:"user",initialState:{userInfo:null,loading:!1,error:null},reducers:{logout:e=>{e.userInfo=null,localStorage.removeItem("userInfo")}},extraReducers:e=>{e.addCase(a.pending,e=>{e.loading=!0,e.error=null}).addCase(a.fulfilled,(e,{payload:s})=>{console.log(s),e.loading=!1,e.userInfo=s}).addCase(a.rejected,(e,{payload:s})=>{e.loading=!1,e.error=s})}}),{logout:i}=n.actions,l=n.reducer},7446:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>m,metadata:()=>h});var t=r(9510);r(8083);var a=r(8570);let n=(0,a.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\components\admin\SidebarLeft.jsx`),{__esModule:i,$$typeof:l}=n;n.default;let d=(0,a.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\components\admin\SidebarLeft.jsx#default`),c=function(){return(0,t.jsxs)("nav",{children:[t.jsx("i",{className:"bx bx-menu"}),t.jsx("a",{href:"#",className:"nav-link",children:"Categories"}),t.jsx("form",{action:"#",children:(0,t.jsxs)("div",{className:"form-input",children:[t.jsx("input",{type:"search",placeholder:"Search..."}),t.jsx("button",{type:"submit",className:"search-btn",children:t.jsx("i",{className:"bx bx-search"})})]})}),t.jsx("input",{type:"checkbox",id:"switch-mode",hidden:!0}),t.jsx("label",{htmlFor:"switch-mode",className:"switch-mode"}),(0,t.jsxs)("a",{href:"#",className:"notification",children:[t.jsx("i",{className:"bx bxs-bell"}),t.jsx("span",{className:"num",children:"8"})]}),t.jsx("a",{href:"login.html",className:"profile",children:t.jsx("img",{src:"#"})})]})},o=function(){return(0,t.jsxs)("div",{className:"head-title",children:[t.jsx("div",{className:"left",children:(0,t.jsxs)("ul",{className:"breadcrumb",children:[t.jsx("li",{children:t.jsx("a",{href:"#",children:"Trang chủ"})}),t.jsx("li",{children:t.jsx("i",{className:"bx bx-chevron-right"})}),t.jsx("li",{children:t.jsx("a",{className:"active",href:"#",children:"Home"})})]})}),(0,t.jsxs)("a",{href:"#",className:"btn-download",children:[t.jsx("i",{className:"bx bxs-cloud-download"}),t.jsx("span",{className:"text",children:"Download PDF"})]})]})};var x=r(7883);let h={title:"Admin",description:"Đ\xe2y l\xe0 trang quản trị"};function m({children:e}){return(0,t.jsxs)("html",{lang:"en",children:[(0,t.jsxs)("head",{children:[t.jsx("link",{href:"https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css",rel:"stylesheet"}),t.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"})]}),t.jsx("body",{suppressHydrationWarning:!0,children:(0,t.jsxs)(x.ZP,{children:[t.jsx(d,{}),(0,t.jsxs)("section",{id:"content",children:[t.jsx(c,{}),(0,t.jsxs)("main",{children:[t.jsx(o,{}),e]})]})]})})]})}},5834:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var t=r(8570);let a=(0,t.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\app\admin\page.js`),{__esModule:n,$$typeof:i}=a;a.default;let l=(0,t.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\app\admin\page.js#default`)},7883:(e,s,r)=>{"use strict";r.d(s,{ZP:()=>l});var t=r(8570);let a=(0,t.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\redux\provider.js`),{__esModule:n,$$typeof:i}=a;a.default;let l=(0,t.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\redux\provider.js#default`)},8083:()=>{}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[819,758],()=>r(4635));module.exports=t})();