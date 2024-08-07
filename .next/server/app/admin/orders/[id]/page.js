(()=>{var e={};e.id=643,e.ids=[643],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9709:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>h,pages:()=>o,routeModule:()=>m,tree:()=>c}),a(6708),a(7446),a(5866);var r=a(3191),n=a(8716),t=a(7922),i=a.n(t),l=a(5231),d={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>l[e]);a.d(s,d);let c=["",{children:["admin",{children:["orders",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,6708)),"E:\\fe_fw2\\duAn\\frontend\\src\\app\\admin\\orders\\[id]\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,7446)),"E:\\fe_fw2\\duAn\\frontend\\src\\app\\admin\\layout.js"]}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"]}],o=["E:\\fe_fw2\\duAn\\frontend\\src\\app\\admin\\orders\\[id]\\page.js"],h="/admin/orders/[id]/page",x={require:a,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/admin/orders/[id]/page",pathname:"/admin/orders/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1462:(e,s,a)=>{Promise.resolve().then(a.bind(a,3169)),Promise.resolve().then(a.bind(a,1461))},3036:(e,s,a)=>{Promise.resolve().then(a.bind(a,9668))},9668:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var r=a(326);a(1241);var n=a(8069),t=a(7577);let i=function({params:e}){let[s,a]=(0,t.useState)(null),[i,l]=(0,t.useState)(""),d=e=>e?e.reduce((e,s)=>e+s.price*s.quantity,0):0,c=async s=>{s.preventDefault();try{let s=await fetch(`http://localhost:5000/orders/${e.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:i})});if(s.ok){let e=await s.json();a(e),(0,n.ID)("Trạng th\xe1i đơn h\xe0ng đ\xe3 được cập nhật !","success")}else alert("C\xf3 lỗi xảy ra khi cập nhật trạng th\xe1i đơn h\xe0ng.")}catch(e){console.error("Failed to update status:",e),alert("C\xf3 lỗi xảy ra khi cập nhật trạng th\xe1i đơn h\xe0ng.")}};return s?(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:"left",children:(0,r.jsxs)("h2",{className:"order-detail-title",children:["Chi tiết đơn h\xe0ng ",(0,r.jsxs)("span",{style:{color:"red"},children:["#",s._id]})]})}),(0,r.jsxs)("div",{className:"table-data",children:[(0,r.jsxs)("div",{className:"order",children:[(0,r.jsxs)("div",{className:"head",children:[r.jsx("h3",{children:"Sản phẩm đ\xe3 mua"}),r.jsx("i",{className:"bx bx-search"}),r.jsx("i",{className:"bx bx-filter"})]}),(0,r.jsxs)("table",{className:"order-table",children:[r.jsx("thead",{className:"order-table-header",children:(0,r.jsxs)("tr",{children:[r.jsx("th",{children:"STT"}),r.jsx("th",{colSpan:"2",children:"T\xean"}),r.jsx("th",{children:"Size"}),r.jsx("th",{children:"Gi\xe1 tiền"}),r.jsx("th",{children:"Số lượng"}),r.jsx("th",{children:"Th\xe0nh tiền"})]})}),r.jsx("tbody",{className:"order-table-body",children:s.cart&&s.cart.map((e,s)=>(0,r.jsxs)("tr",{className:"order-table-row",children:[r.jsx("td",{className:"order-table-cell",children:s+1}),r.jsx("td",{className:"order-table-cell",children:r.jsx("img",{src:`http://localhost:5000/images/${e.image}`,alt:e.name,className:"order-product-image"})}),r.jsx("td",{className:"order-table-cell",children:e.name}),r.jsx("td",{className:"order-table-cell",children:e.size}),(0,r.jsxs)("td",{className:"order-table-cell",children:[e.price.toLocaleString("vi-VN"),"đ"]}),r.jsx("td",{className:"order-table-cell",children:e.quantity}),(0,r.jsxs)("td",{className:"order-table-cell",children:[(e.price*e.quantity).toLocaleString("vi-VN"),"đ"]})]},e._id))})]})]}),(0,r.jsxs)("div",{className:"order-detail",children:[r.jsx("h2",{children:"T\xf3m tắt đơn h\xe0ng"}),(0,r.jsxs)("p",{className:"order-detail-info",children:["Ng\xe0y đặt h\xe0ng: ",new Date(s.createdAt).toLocaleDateString("vi-VN")]}),(0,r.jsxs)("p",{className:"order-detail-info",children:["Thời gian đặt h\xe0ng: ",new Date(s.createdAt).toLocaleTimeString("vi-VN")]}),(0,r.jsxs)("p",{className:"order-detail-info",children:["Tạm t\xednh: ",d(s.cart).toLocaleString("vi-VN"),"đ"]}),r.jsx("p",{className:"order-detail-info",children:"Ph\xed vận chuyển: 38.000đ"}),(0,r.jsxs)("p",{className:"order-total",children:["Tổng cộng: ",(0,r.jsxs)("span",{style:{color:"red"},children:[(d(s.cart)+38e3).toLocaleString("vi-VN"),"đ"]})]}),(0,r.jsxs)("div",{className:"order-detail-body",children:[r.jsx("h2",{children:"Chi tiết kh\xe1ch h\xe0ng v\xe0 đơn h\xe0ng"}),(0,r.jsxs)("p",{className:"order-detail-info",children:["T\xean kh\xe1ch h\xe0ng: ",s.username]}),(0,r.jsxs)("p",{className:"order-detail-info",children:["Số điện thoại: ",s.phone]}),(0,r.jsxs)("p",{className:"order-detail-info",children:["Phương thức thanh to\xe1n: ",s.paymentMethod&&"1"===s.paymentMethod?"Thanh to\xe1n khi nhận h\xe0ng":"Thanh to\xe1n Momo"]}),(0,r.jsxs)("div",{className:"flex",style:{display:"flex"},children:[r.jsx("p",{className:"order-detail-info",children:"Trạng th\xe1i đơn h\xe0ng:"}),(0,r.jsxs)("form",{onSubmit:c,className:"order-status-form",style:{marginTop:-8,marginLeft:12},children:[(0,r.jsxs)("select",{name:"status",id:"order-status",value:i,onChange:e=>{l(e.target.value)},children:[r.jsx("option",{value:"Pending",children:"Đang chờ xử l\xfd"}),r.jsx("option",{value:"Processing",children:"Đang xử l\xed"}),r.jsx("option",{value:"Paid",children:"Đ\xe3 thanh to\xe1n trước"}),r.jsx("option",{value:"Shipped",children:"Đ\xe3 vận chuyển"}),r.jsx("option",{value:"Delivered",children:"Đ\xe3 giao h\xe0ng"}),r.jsx("option",{value:"Canceled",children:"Đ\xe3 hủy"})]}),r.jsx("button",{type:"submit",className:"update-status-btn",children:"Cập nhật"})]})]})]})]})]})]}):r.jsx("p",{children:"Đang tải..."})}},3169:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var r=a(326),n=a(434),t=a(5047);let i=function(){let e=(0,t.usePathname)();return(0,r.jsxs)("section",{id:"sidebar",children:[(0,r.jsxs)(n.default,{href:"/admin",className:"brand",children:[r.jsx("i",{className:"bx bxs-smile"}),r.jsx("span",{className:"text",children:"Admin"})]}),(0,r.jsxs)("ul",{className:"side-menu top",children:[r.jsx("li",{className:`${"/admin"===e?"active":""}`,children:(0,r.jsxs)(n.default,{href:"/admin",children:[r.jsx("i",{className:"bx bxs-dashboard"}),r.jsx("span",{className:"text",children:"Dashboard"})]})}),r.jsx("li",{className:`${"/admin/orders"===e?"active":""}`,children:(0,r.jsxs)(n.default,{href:"/admin/orders",children:[r.jsx("i",{className:"bx bx-abacus"}),r.jsx("span",{className:"text",children:"Đơn h\xe0ng"})]})}),r.jsx("li",{className:`${"/admin/products"===e?"active":""}`,children:(0,r.jsxs)(n.default,{href:"/admin/products",children:[r.jsx("i",{className:"bx bxs-shopping-bag-alt"}),r.jsx("span",{className:"text",children:"Sản phẩm"})]})}),r.jsx("li",{className:`${"/admin/categories"===e?"active":""}`,children:(0,r.jsxs)(n.default,{href:"/admin/categories",children:[r.jsx("i",{className:"bx bx-list-ul"}),r.jsx("span",{className:"text",children:"Danh mục"})]})}),r.jsx("li",{className:`${"/admin/members"===e?"active":""}`,children:(0,r.jsxs)(n.default,{href:"/admin/members",children:[r.jsx("i",{className:"bx bxs-group"}),r.jsx("span",{className:"text",children:"Team"})]})})]}),r.jsx("ul",{className:"side-menu",children:r.jsx("li",{children:(0,r.jsxs)(n.default,{href:"/",children:[r.jsx("i",{className:"bx bxs-store"}),r.jsx("span",{className:"text",children:"Cửa h\xe0ng"})]})})})]})}},7446:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>m,metadata:()=>x});var r=a(9510);a(8083);var n=a(8570);let t=(0,n.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\components\admin\SidebarLeft.jsx`),{__esModule:i,$$typeof:l}=t;t.default;let d=(0,n.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\components\admin\SidebarLeft.jsx#default`),c=function(){return(0,r.jsxs)("nav",{children:[r.jsx("i",{className:"bx bx-menu"}),r.jsx("a",{href:"#",className:"nav-link",children:"Categories"}),r.jsx("form",{action:"#",children:(0,r.jsxs)("div",{className:"form-input",children:[r.jsx("input",{type:"search",placeholder:"Search..."}),r.jsx("button",{type:"submit",className:"search-btn",children:r.jsx("i",{className:"bx bx-search"})})]})}),r.jsx("input",{type:"checkbox",id:"switch-mode",hidden:!0}),r.jsx("label",{htmlFor:"switch-mode",className:"switch-mode"}),(0,r.jsxs)("a",{href:"#",className:"notification",children:[r.jsx("i",{className:"bx bxs-bell"}),r.jsx("span",{className:"num",children:"8"})]}),r.jsx("a",{href:"login.html",className:"profile",children:r.jsx("img",{src:"#"})})]})},o=function(){return(0,r.jsxs)("div",{className:"head-title",children:[r.jsx("div",{className:"left",children:(0,r.jsxs)("ul",{className:"breadcrumb",children:[r.jsx("li",{children:r.jsx("a",{href:"#",children:"Trang chủ"})}),r.jsx("li",{children:r.jsx("i",{className:"bx bx-chevron-right"})}),r.jsx("li",{children:r.jsx("a",{className:"active",href:"#",children:"Home"})})]})}),(0,r.jsxs)("a",{href:"#",className:"btn-download",children:[r.jsx("i",{className:"bx bxs-cloud-download"}),r.jsx("span",{className:"text",children:"Download PDF"})]})]})};var h=a(7883);let x={title:"Admin",description:"Đ\xe2y l\xe0 trang quản trị"};function m({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[r.jsx("link",{href:"https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css",rel:"stylesheet"}),r.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"})]}),r.jsx("body",{suppressHydrationWarning:!0,children:(0,r.jsxs)(h.ZP,{children:[r.jsx(d,{}),(0,r.jsxs)("section",{id:"content",children:[r.jsx(c,{}),(0,r.jsxs)("main",{children:[r.jsx(o,{}),e]})]})]})})]})}},6708:(e,s,a)=>{"use strict";a.r(s),a.d(s,{$$typeof:()=>i,__esModule:()=>t,default:()=>l});var r=a(8570);let n=(0,r.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\app\admin\orders\[id]\page.js`),{__esModule:t,$$typeof:i}=n;n.default;let l=(0,r.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\app\admin\orders\[id]\page.js#default`)},8083:()=>{},1241:()=>{}};var s=require("../../../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),r=s.X(0,[819,758,901,328,944],()=>a(9709));module.exports=r})();