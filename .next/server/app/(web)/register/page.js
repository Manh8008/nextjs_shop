(()=>{var e={};e.id=334,e.ids=[334],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},491:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>l.a,__next_app__:()=>h,originalPathname:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c}),a(2511),a(6402),a(5866);var r=a(3191),t=a(8716),n=a(7922),l=a.n(n),i=a(5231),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);a.d(s,o);let c=["",{children:["(web)",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,2511)),"E:\\fe_fw2\\duAn\\frontend\\src\\app\\(web)\\register\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,6402)),"E:\\fe_fw2\\duAn\\frontend\\src\\app\\(web)\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"]}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,5866,23)),"next/dist/client/components/not-found-error"]}],d=["E:\\fe_fw2\\duAn\\frontend\\src\\app\\(web)\\register\\page.js"],m="/(web)/register/page",h={require:a,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:t.x.APP_PAGE,page:"/(web)/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4385:(e,s,a)=>{Promise.resolve().then(a.bind(a,603))},603:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var r=a(326),t=a(434),n=a(7577),l=a(5047);let i=()=>{let e=(0,l.useRouter)(),[s,a]=(0,n.useState)(""),[i,o]=(0,n.useState)(""),[c,d]=(0,n.useState)(""),[m,h]=(0,n.useState)(""),[u,p]=(0,n.useState)(""),[g,x]=(0,n.useState)(""),[f,j]=(0,n.useState)(""),[v,N]=(0,n.useState)(""),[b,w]=(0,n.useState)(""),[y,_]=(0,n.useState)(""),[k,S]=(0,n.useState)(!1),P=()=>u?s?i?/\S+@\S+\.\S+/.test(s)?!c||c.length<7||c.length>32?"Lỗi! Vui l\xf2ng nhập mật khẩu độ d\xe0i từ 7 tới 32 k\xfd tự":c!==m?"Lỗi! Mật khẩu kh\xf4ng khớp":f?g?k?null:"Lỗi! Vui l\xf2ng đồng \xfd với c\xe1c điều khoản của IVY moda.":"Lỗi! Vui l\xf2ng nhập Địa chỉ":"Lỗi! Vui l\xf2ng nhập Ng\xe0y sinh nhật":"Lỗi! Email kh\xf4ng hợp lệ":"Lỗi! Vui l\xf2ng nhập Số Điện thoại":"Lỗi! Vui l\xf2ng nhập Email":"Lỗi! Vui l\xf2ng nhập Họ T\xean",E=async a=>{a.preventDefault();let r=P();if(r){w(r);return}try{let a=await fetch("http://localhost:5000/users/register",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:i,email:s,password:c,username:u,address:g,dateOfBirth:f,gender:v})}),r=await a.json();console.log(r),a.ok?(_("Đăng k\xed th\xe0nh c\xf4ng"),e.push(`/verify/${r.userId}`)):w(r.error||"Lỗi! Email đ\xe3 c\xf3 người sử dụng rồi")}catch(e){w("Xin vui l\xf2ng nhập đầy đủ th\xf4ng tin!")}};return(0,r.jsxs)("div",{className:"main-container",children:[(0,r.jsxs)("div",{className:"register-form grid wide",children:[b&&r.jsx("p",{className:"alert alert-danger",children:b}),y&&r.jsx("p",{className:"alert alert-success",children:y}),(0,r.jsxs)("form",{onSubmit:E,className:"form grid__row",id:"form-1",children:[(0,r.jsxs)("div",{className:"c-6",children:[r.jsx("h3",{className:"heading",children:"Th\xf4ng tin kh\xe1ch h\xe0ng"}),(0,r.jsxs)("div",{className:"grid__row",children:[r.jsx("div",{className:"c-6",children:(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("label",{htmlFor:"username",className:"form-label",children:"T\xean t\xe0i khoản:"}),r.jsx("input",{value:u,onChange:e=>p(e.target.value),id:"username",name:"username",type:"text",placeholder:"Họ t\xean...",className:"form-control"}),r.jsx("span",{className:"form-message"})]})}),r.jsx("div",{className:"c-6",children:(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("label",{htmlFor:"email",className:"form-label",children:"Email:"}),r.jsx("input",{value:s,onChange:e=>a(e.target.value),id:"email",name:"email",type:"text",placeholder:"Email...",className:"form-control"}),r.jsx("span",{className:"form-message"})]})}),r.jsx("div",{className:"c-6",children:(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("label",{htmlFor:"dateOfBirth",className:"form-label",children:"Ng\xe0y sinh:"}),r.jsx("input",{value:f,onChange:e=>j(e.target.value),id:"dateOfBirth",name:"dateOfBirth",type:"date",placeholder:"Ng\xe0y sinh...",className:"form-control"}),r.jsx("span",{className:"form-message"})]})}),r.jsx("div",{className:"c-6",children:(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("label",{htmlFor:"gender",className:"form-label",children:"Giới t\xednh:"}),(0,r.jsxs)("select",{value:v,onChange:e=>N(e.target.value),id:"gender",name:"gender",className:"form-control",children:[r.jsx("option",{value:"",children:"Chọn giới t\xednh"}),r.jsx("option",{value:"male",children:"Nam"}),r.jsx("option",{value:"female",children:"Nữ"}),r.jsx("option",{value:"other",children:"Kh\xe1c"})]}),r.jsx("span",{className:"form-message"})]})}),r.jsx("div",{className:"c-12",children:(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("label",{htmlFor:"address",className:"form-label",children:"Địa chỉ:"}),r.jsx("input",{value:g,onChange:e=>x(e.target.value),id:"address",name:"address",type:"text",placeholder:"Địa chỉ...",className:"form-control"}),r.jsx("span",{className:"form-message"})]})}),r.jsx("div",{className:"c-12",children:(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("label",{htmlFor:"phone",className:"form-label",children:"Số điện thoại:"}),r.jsx("input",{value:i,onChange:e=>o(e.target.value),id:"phone",name:"phone",type:"text",placeholder:"Số điện thoại...",className:"form-control"}),r.jsx("span",{className:"form-message"})]})})]})]}),(0,r.jsxs)("div",{className:"c-6",children:[r.jsx("h3",{className:"heading",children:"Th\xf4ng tin mật khẩu"}),(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("label",{htmlFor:"password",className:"form-label",children:"Mật khẩu:"}),r.jsx("input",{value:c,onChange:e=>d(e.target.value),id:"password",name:"password",type:"password",placeholder:"Mật khẩu...",className:"form-control"}),r.jsx("span",{className:"form-message"})]}),(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("label",{htmlFor:"confirmPassword",className:"form-label",children:"Nhập lại mật khẩu:"}),r.jsx("input",{value:m,onChange:e=>h(e.target.value),id:"confirmPassword",name:"confirmPassword",type:"password",className:"form-control",placeholder:"Nhập lại mật khẩu..."}),r.jsx("span",{className:"form-message"})]}),(0,r.jsxs)("div",{className:"form-group col",children:[r.jsx("input",{value:k,onChange:e=>S(e.target.value),type:"checkbox",id:"terms",name:"terms"}),(0,r.jsxs)("label",{htmlFor:"terms",children:["Đồng \xfd với c\xe1c ",r.jsx(t.default,{href:"/terms",children:"điều khoản"})," của IVY"]})]}),(0,r.jsxs)("div",{className:"router-page-btn col",children:[r.jsx("button",{className:"form-submit",type:"submit",children:"Đăng k\xfd"}),r.jsx(t.default,{className:"turn-to-page-login",href:"/login",children:"Bạn đ\xe3 c\xf3 t\xe0i khoản ?"})]})]})]})]}),r.jsx("div",{className:"site-bottom"})]})}},2511:(e,s,a)=>{"use strict";a.r(s),a.d(s,{$$typeof:()=>l,__esModule:()=>n,default:()=>i});var r=a(8570);let t=(0,r.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\app\(web)\register\page.js`),{__esModule:n,$$typeof:l}=t;t.default;let i=(0,r.createProxy)(String.raw`E:\fe_fw2\duAn\frontend\src\app\(web)\register\page.js#default`)}};var s=require("../../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),r=s.X(0,[819,758,901,328,915,944,459],()=>a(491));module.exports=r})();