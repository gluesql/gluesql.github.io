"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6155],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:6},i="IndexedDB Storage",s={unversionedId:"storages/supported-storages/idb-storage",id:"storages/supported-storages/idb-storage",title:"IndexedDB Storage",description:"Introduction",source:"@site/docs/storages/supported-storages/idb-storage.md",sourceDirName:"storages/supported-storages",slug:"/storages/supported-storages/idb-storage",permalink:"/docs/0.15/storages/supported-storages/idb-storage",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"autoSidebar",previous:{title:"WebStorage (local & session)",permalink:"/docs/0.15/storages/supported-storages/web-storage"},next:{title:"Composite Storage",permalink:"/docs/0.15/storages/supported-storages/composite-storage"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Behind the Scenes",id:"behind-the-scenes",level:2},{value:"Compatibility and Use",id:"compatibility-and-use",level:2},{value:"Summary",id:"summary",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"indexeddb-storage"},"IndexedDB Storage"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"IndexedDB, now easily handled just like SQL with GlueSQL - this is truly magical! For those who have directly used IndexedDB before, it's well known that it's not the most intuitive type of database to interact with. Even the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"},"MDN IndexedDB introduction page")," acknowledges this complexity, stating:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: IndexedDB API is powerful, but may seem too complicated for simple cases. If you'd prefer a simple API, try libraries in See also section that make IndexedDB more programmer-friendly.")),(0,o.kt)("p",null,"In particular, version management in IndexedDB might be a somewhat unfamiliar concept for regular database users. But worry not, GlueSQL has innovatively handled these intricacies, freeing you from the need to grapple with such complexities. You can just use SQL, and everything will work as expected."),(0,o.kt)("h2",{id:"behind-the-scenes"},"Behind the Scenes"),(0,o.kt)("p",null,"When there are schema changes, like a CREATE TABLE query, GlueSQL increases the IndexedDB version and handles it internally. The data to be stored is also converted into a JSON format for storage. Thanks to this, you can easily check how GlueSQL is handling data by using the IndexedDB viewer in the web browser's developer console."),(0,o.kt)("h2",{id:"compatibility-and-use"},"Compatibility and Use"),(0,o.kt)("p",null,"Currently, only the ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"StoreMut")," traits are implemented and supported. You can use it in both JavaScript (Web) and Rust WebAssembly environments."),(0,o.kt)("p",null,"When using it in a web environment, just set the ENGINE to indexedDB in the CREATE TABLE query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Item (id INTEGER, name TEXT) ENGINE = indexedDB;\n")),(0,o.kt)("p",null,"Just by using it like this, GlueSQL will operate based on the IndexedDB storage."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In conclusion, if you are seeking for a way to interact with IndexedDB without the usual complexity, GlueSQL is a fantastic choice. It provides a clear, SQL-based approach to managing data, making IndexedDB much more accessible and user-friendly."))}p.isMDXComponent=!0}}]);