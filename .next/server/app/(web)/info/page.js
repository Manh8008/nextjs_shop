(()=>{var e={};e.id=676,e.ids=[676],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5107:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>l.a,__next_app__:()=>h,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c}),a(3428),a(6402),a(5866);var r=a(3191),n=a(8716),t=a(7922),l=a.n(t),i=a(5231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);a.d(s,o);let c=["",{children:["(web)",{children:["info",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,3428)),"E:\\fe_fw2\\duAn\\frontend\\src\\app\\(web)\\info\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,6402)),"E:\\fe_fw2\\duAn\\frontend\\src\\app\\(web)\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"]}],d=["E:\\fe_fw2\\duAn\\frontend\\src\\app\\(web)\\info\\page.js"],m="/(web)/info/page",h={require:a,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/(web)/info/page",pathname:"/info",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1298:(e,s,a)=>{Promise.resolve().then(a.bind(a,6882))},6882:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>l});var r=a(326),n=a(434),t=a(7577);let l=()=>{let[e,s]=(0,t.useState)(null);return(0,t.useEffect)(()=>{(async()=>{try{let e=JSON.parse(localStorage.getItem("userInfo")).token,a=await fetch("http://localhost:5000/users/profile",{headers:{Authorization:`Bearer ${e}`}});if(!a.ok)throw Error("Lỗi xảy ra khi lấy th\xf4ng tin người d\xf9ng");let r=await a.json();console.log("User Data:",r),s(r)}catch(e){console.error("Fetch error:",e)}})()},[]),(0,r.jsxs)("div",{className:"main-container",children:[r.jsx("div",{className:"register-form grid wide",children:(0,r.jsxs)("div",{className:"grid__row",children:[r.jsx("div",{className:"c-2",children:(0,r.jsxs)("div",{className:"sub-action",children:[r.jsx("div",{className:"top-action",children:(0,r.jsxs)("div",{className:"order-sidemenu__user",style:{paddingBottom:20,marginTop:30},children:[r.jsx("div",{className:"order-sidemenu__user-avatar",children:r.jsx("img",{style:{width:"100%"},src:e?.avatar||"https://pubcdn.ivymoda.com/ivy2//images/v2/assets/user-avatar-placeholder.png",alt:""})}),r.jsx("div",{className:"order-sidemenu__user-name",children:r.jsx("p",{children:e?.username||"T\xean người d\xf9ng"})})]})}),(0,r.jsxs)("ul",{children:[r.jsx("li",{children:(0,r.jsxs)(n.default,{href:"/info",children:[r.jsx("i",{className:"fa-regular fa-user"}),"Th\xf4ng tin t\xe0i khoản"]})}),r.jsx("li",{children:(0,r.jsxs)("a",{href:"#",children:[r.jsx("i",{className:"fa-solid fa-rotate-right"}),"Quản l\xfd đơn h\xe0ng"]})}),r.jsx("li",{children:(0,r.jsxs)("a",{href:"#",children:[r.jsx("i",{className:"fa-solid fa-location-dot"}),"Sổ địa chỉ"]})}),r.jsx("li",{children:(0,r.jsxs)("a",{href:"#",children:[r.jsx("i",{className:"fa-regular fa-heart"}),"Sản phẩm y\xeau th\xedch"]})})]})]})}),r.jsx("div",{className:"c-10",children:r.jsx("form",{className:"form grid__row",id:"form-1",children:(0,r.jsxs)("div",{className:"c-12",children:[r.jsx("div",{className:"order-block__title",children:r.jsx("h2",{children:"T\xc0I KHOẢN CỦA T\xd4I"})}),r.jsx("p",{className:"alert alert-primary",children:'"V\xec ch\xednh s\xe1ch an to\xe0n thẻ, bạn kh\xf4ng thể thay đổi SĐT, Ng\xe0y sinh, Họ t\xean. Vui l\xf2ng li\xean hệ CSKH 0865587127 để được hỗ trợ"'}),(0,r.jsxs)("div",{className:"grid__row",children:[r.jsx("div",{className:"c-6",children:(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("label",{htmlFor:"username",className:"form-label",children:"T\xean t\xe0i khoản:"}),r.jsx("input",{id:"username",name:"username",type:"text",defaultValue:e?.username||"",placeholder:"Họ t\xean...",className:"form-control",disabled:!0}),r.jsx("span",{className:"form-message"})]})}),r.jsx("div",{className:"c-6",children:(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("label",{htmlFor:"email",className:"form-label",children:"Email:"}),r.jsx("input",{id:"email",name:"email",type:"text",defaultValue:e?.email||"",placeholder:"Email...",className:"form-control"}),r.jsx("span",{className:"form-message"})]})}),r.jsx("div",{className:"c-6",children:(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("label",{htmlFor:"dateOfBirth",className:"form-label",children:"Ng\xe0y sinh:"}),r.jsx("input",{id:"dateOfBirth",name:"dateOfBirth",type:"text",defaultValue:e?.dateOfBirth||"",className:"form-control",disabled:!0}),r.jsx("span",{className:"form-message"})]})}),r.jsx("div",{className:"c-6",children:(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("label",{htmlFor:"gender",className:"form-label",children:"Giới t\xednh:"}),(0,r.jsxs)("select",{id:"gender",name:"gender",className:"form-control",value:e?.gender||"",onChange:e=>setGender(e.target.value),children:[r.jsx("option",{value:"",children:"Chọn giới t\xednh"}),r.jsx("option",{value:"male",children:"Nam"}),r.jsx("option",{value:"female",children:"Nữ"}),r.jsx("option",{value:"other",children:"Kh\xe1c"})]}),r.jsx("span",{className:"form-message"})]})}),r.jsx("div",{className:"c-12",children:(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("label",{htmlFor:"address",className:"form-label",children:"Địa chỉ:"}),r.jsx("input",{id:"address",name:"address",type:"text",value:e?.address||"",onChange:e=>setAddress(e.target.value),placeholder:"Địa chỉ...",className:"form-control"}),r.jsx("span",{className:"form-message"})]})}),r.jsx("div",{className:"c-5",style:{marginLeft:23},children:(0,r.jsxs)("div",{className:"grid__row",children:[r.jsx("div",{className:"c-6",children:r.jsx("button",{className:"btn btn--large",type:"submit",children:"Cập nhật"})}),r.jsx("div",{className:"c-6",children:r.jsx(n.default,{href:"/changepass",className:"btn btn--large btn--outline btn-outline-hover",children:"Đổi mật khẩu"})})]})})]})]})})})]})}),r.jsx("div",{className:"site-bottom"})]})}},3428:(e,s,a)=>{"use strict";a.r(s),a.d(s,{$$typeof:()=>l,__esModule:()=>t,default:()=>i});var r=a(8570);let n=(0,r.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\app\(web)\info\page.js`),{__esModule:t,$$typeof:l}=n;n.default;let i=(0,r.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\app\(web)\info\page.js#default`)}};var s=require("../../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),r=s.X(0,[819,758,901,328,915,944,459],()=>a(5107));module.exports=r})();