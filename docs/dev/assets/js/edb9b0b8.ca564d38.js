"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4467],{5680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>y});var o=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},g=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,y=c["".concat(l,".").concat(d)]||c[d]||p[d]||a;return r?o.createElement(y,s(s({ref:t},g),{},{components:r})):o.createElement(y,s({ref:t},g))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(8168),n=(r(6540),r(5680));const a={sidebar_position:5},s="WebStorage (local & session)",i={unversionedId:"storages/supported-storages/web-storage",id:"storages/supported-storages/web-storage",title:"WebStorage (local & session)",description:"WebStorage - yes, the localStorage and sessionStorage you're familiar with. With GlueSQL, you can use SQL to interact with these storages!",source:"@site/docs/storages/supported-storages/web-storage.md",sourceDirName:"storages/supported-storages",slug:"/storages/supported-storages/web-storage",permalink:"/docs/dev/storages/supported-storages/web-storage",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"autoSidebar",previous:{title:"JSON Storage",permalink:"/docs/dev/storages/supported-storages/json-storage"},next:{title:"IndexedDB Storage",permalink:"/docs/dev/storages/supported-storages/idb-storage"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Things to keep in mind",id:"things-to-keep-in-mind",level:2},{value:"Summary",id:"summary",level:2}],g={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,o.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"webstorage-local--session"},"WebStorage (local & session)"),(0,n.yg)("p",null,"WebStorage - yes, the localStorage and sessionStorage you're familiar with. With GlueSQL, you can use SQL to interact with these storages!"),(0,n.yg)("p",null,"WebStorage serves as a data storage that supports READ & WRITE operations. As GlueSQL can be ported to any place where READ & WRITE are possible, it can utilize WebStorage as one of its storage systems."),(0,n.yg)("p",null,"WebStorage provides a very simple and easy-to-use interface. All you need to do is read and write data using a string key. If you need to manage more structured data, you can use GlueSQL."),(0,n.yg)("p",null,"WebStorage can be used in JavaScript (Web) environments and Rust WebAssembly environments."),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)("p",null,"The way to use it is no different from using other storages."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},"import { gluesql } from 'gluesql';\n\nasync function run() {\n    const db = await gluesql();\n\n    const result = await db.query(`\n        CREATE TABLE Foo (id INTEGER, name TEXT) ENGINE = localStorage;\n        INSERT INTO Foo VALUES (1, 'hello'), (2, 'world');\n        SELECT * FROM Foo;\n        CREATE TABLE Bar ENGINE = sessionStorage;\n        INSERT INTO Bar VALUES ('{ \"a\": \"schemaless\", \"b\": 1024 }');\n        SELECT * FROM Bar;\n    `);\n\n    console.log(result);\n}\n")),(0,n.yg)("p",null,"Simple, isn't it?"),(0,n.yg)("h2",{id:"things-to-keep-in-mind"},"Things to keep in mind"),(0,n.yg)("p",null,"In the case of WebStorage, depending on the web browser, there is usually a size constraint of about 10MB for data storage. Even when using GlueSQL, you should keep in mind that it is used within these restrictions."),(0,n.yg)("h2",{id:"summary"},"Summary"),(0,n.yg)("p",null,"To sum up, WebStorage is a handy feature that allows you to manipulate localStorage and sessionStorage with SQL in a browser environment. It's simple, easy to use, and can handle structured data which makes it an ideal choice for lightweight web applications."),(0,n.yg)("p",null,"However, due to storage limitations, it's not suitable for large-scale data handling. Remember to consider these limitations when choosing your storage options in GlueSQL. Even with these constraints, it serves as a great tool for managing and interacting with your browser's storage in a structured way using SQL."))}p.isMDXComponent=!0}}]);