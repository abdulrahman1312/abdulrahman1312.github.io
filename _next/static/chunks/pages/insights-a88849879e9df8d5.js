(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[210],{8080:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/insights",function(){return n(3615)}])},3633:function(e,t,n){"use strict";var s=n(5893),r=n(4184),i=n.n(r),a=n(9315);t.Z=function(e){var t=e.children,n=e.font,r=void 0===n?"montserrat-semibold":n,o=e.tag,c=void 0===o?"h3":o,l=e.small,d=void 0!==l&&l,u=e.className,f=void 0===u?"":u,m=e.color,v=void 0===m?"secondary":m,x=i()("title-medium ".concat(r," text-").concat(v),{small:d});return(0,s.jsx)(c,{className:(0,a.Z)(x,f),children:t})}},563:function(e,t,n){"use strict";var s=n(5893),r=n(4184),i=n.n(r),a=n(9315);t.Z=function(e){var t=e.children,n=e.font,r=void 0===n?"montserrat-bold":n,o=e.tag,c=void 0===o?"h1":o,l=e.big,d=void 0!==l&&l,u=e.className,f=void 0===u?"":u,m=e.color,v=void 0===m?"secondary":m,x=i()("title-x-large ".concat(r," text-").concat(v),{big:d});return(0,s.jsx)(c,{className:(0,a.Z)(x,f),children:t})}},1772:function(e,t,n){"use strict";var s=n(5893),r=n(5741),i=n(9315),a=n(4226),o=n(5675),c=n(6463),l=n(8248),d=n(3633);t.Z=function(e){var t=e.post,n=e.className,u=void 0===n?"":n,f=(0,i.Z)("post",u);return(0,s.jsxs)(r.Z,{to:"/insights/".concat(t.fields.slug),className:f,children:[(0,s.jsx)(d.Z,{className:"mb-4",children:t.fields.title}),(0,s.jsx)(l.Z,{className:"mb-8",children:"".concat(t.fields.content.fields.author.fields.name," \xb7 ").concat(t.fields.content.fields.readingTime," min read")}),(0,s.jsxs)("div",{className:"relative w-full h-128 mb-12",children:[(0,s.jsx)(o.default,{src:(0,a.td)(t.fields.content.fields.featuredImage.fields.file.url),alt:t.fields.content.fields.featuredImage.fields.title,layout:"fill",className:"h-full w-full object-cover"}),(0,s.jsx)("div",{className:"bg-background-overlay absolute inset-0 overlay"})]}),(0,s.jsxs)("div",{className:"btn-arrow",children:[(0,s.jsx)(c.Z,{}),(0,s.jsx)("span",{className:"text-primary",children:"Read More"})]})]})}},108:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var s=n(5893),r=n(7294),i=n(5640),a=n(163),o=n(5131),c=function(e){var t=e.navbar,n=(0,r.useState)(!1),c=n[0],l=n[1],d=function(){l(window.scrollY>=100)};return(0,r.useEffect)((function(){return document.addEventListener("scroll",d),function(){document.removeEventListener("scroll",d)}}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{navbar:t}),(0,s.jsx)(o.u,{show:c,enter:"transform duration-500 transition ease-in-out",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transform duration-75 transition ease-in-out",leaveFrom:"opacity-100",leaveTo:"opacity-0",as:"div",className:"bg-white fixed w-full top-0 z-40 shadow",children:(0,s.jsx)(i.Z,{navbar:t})})]})},l=n(9031),d=n(9706),u=function(e){var t=e.children,n=e.navbar,r=e.footer;return(0,s.jsxs)("div",{id:"top",children:[(0,s.jsx)(c,{navbar:n}),(0,s.jsx)("main",{id:"site-body",children:t}),(0,s.jsx)(l.Z,{footer:r}),(0,s.jsx)(d.Z,{})]})}},3615:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return h},default:function(){return p}});var s=n(8520),r=n.n(s),i=n(5893),a=n(563),o=function(e){var t=e.className;return(0,i.jsx)("svg",{width:"18",height:"18",className:t,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7803 3.96967C12.0732 4.26256 12.0732 4.73744 11.7803 5.03033L7.81066 9L11.7803 12.9697C12.0732 13.2626 12.0732 13.7374 11.7803 14.0303C11.4874 14.3232 11.0126 14.3232 10.7197 14.0303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967L10.7197 3.96967C11.0126 3.67678 11.4874 3.67678 11.7803 3.96967Z",fill:"currentColor"})})})},c=function(e){var t=e.className;return(0,i.jsx)("svg",{width:"18",height:"18",className:t,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C12.0732 8.76256 12.0732 9.23744 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303Z",fill:"currentColor"})})},l=n(1772),d=n(108),u=n(122),f=n(7294);function m(e,t,n,s,r,i,a){try{var o=e[i](a),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(s,r)}var v=function(e,t){return t<e?1:Math.ceil(t/e)},x=function(e){var t=e.items,n=e.page,s=e.setPage;return(0,i.jsx)("div",{className:"flex flex-row items-center gap-x-6",children:Array.from({length:v(9,t)},(function(e,t){return t})).map((function(e){return(0,i.jsx)("button",{className:n===e?"border-b-2 border-primary font-bold":"",onClick:function(){return s(e)},children:e+1},e)}))})},h=!0,p=function(e){var t,n=e.initialInsights,s=e.content,h=(0,f.useState)(n.total),p=h[0],j=h[1],g=(0,f.useState)(n.items),b=g[0],w=g[1],N=(0,f.useState)(0),Z=N[0],y=N[1],C=(t=r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/posts?limit=".concat(9,"&skip=").concat(9*Z,"&locale=en-US"));case 2:if(!(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:n=e.sent,w(n.items),j(n.total),window.scrollTo({top:0});case 10:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(s,r){var i=t.apply(e,n);function a(e){m(i,s,r,a,o,"next",e)}function o(e){m(i,s,r,a,o,"throw",e)}a(void 0)}))});return(0,f.useEffect)((function(){C()}),[Z]),(0,i.jsx)(u.Z,{seo:s.fields.seo.fields,children:(0,i.jsx)(d.Z,{navbar:s.fields.navbar.fields,footer:s.fields.footer.fields,children:(0,i.jsxs)("div",{className:"wrap pt-24 md:pt-28",children:[(0,i.jsx)(a.Z,{className:"mb-16 md:mb-32",children:s.fields.title}),(0,i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-32 md:gap-x-16 mb-64",children:b.map((function(e){return(0,i.jsx)(l.Z,{post:e},e.fields.slug)}))}),(0,i.jsxs)("div",{className:"mt-42 mb-64 flex items-center justify-center gap-x-6",children:[Z>0&&(0,i.jsx)("button",{onClick:function(){return y(Z-1)},className:"cursor-pointer",children:(0,i.jsx)(o,{className:"text-secondary hover:text-black"})}),(0,i.jsx)(x,{items:p,page:Z,setPage:y}),Z<v(9,p)-1&&(0,i.jsx)("button",{onClick:function(){return y(Z+1)},className:"cursor-pointer",children:(0,i.jsx)(c,{className:"text-secondary hover:text-black"})})]})]})})})}}},function(e){e.O(0,[774,392,675,629,888,179],(function(){return t=8080,e(e.s=t);var t}));var t=e.O();_N_E=t}]);