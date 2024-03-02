"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3386],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var o=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(r),g=n,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||i;return r?o.createElement(f,s(s({ref:t},c),{},{components:r})):o.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:n,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=r(8168),n=(r(6540),r(5680));const i={sidebar_position:1},s="Introduction",a={unversionedId:"storages/intro",id:"storages/intro",title:"Introduction",description:"GlueSQL is not only suitable for use as a conventional database, but one of its key features is the ability for anyone to easily adapt SQL and the AST Builder to their desired file or storage system. This adaptability is achieved through the following topics covered in this section:",source:"@site/docs/storages/intro.md",sourceDirName:"storages",slug:"/storages/intro",permalink:"/docs/dev/storages/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"autoSidebar",previous:{title:"Unique Identifier",permalink:"/docs/dev/ast-builder/functions/others/unique-identifier"},next:{title:"Memory Storage",permalink:"/docs/dev/storages/supported-storages/memory-storage"}},l={},u=[{value:"Supported Storages",id:"supported-storages",level:2},{value:"Developing Custom Storages",id:"developing-custom-storages",level:2},{value:"Exploring the Storages Section",id:"exploring-the-storages-section",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,o.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"GlueSQL is not only suitable for use as a conventional database, but one of its key features is the ability for anyone to easily adapt SQL and the AST Builder to their desired file or storage system. This adaptability is achieved through the following topics covered in this section:"),(0,n.yg)("h2",{id:"supported-storages"},"Supported Storages"),(0,n.yg)("p",null,"GlueSQL provides a variety of reference storages out of the box, ranging from simple in-memory storage to key-value databases, log file-based storage like JSON & JSONL, and even Web Storage and IndexedDB supported by web browsers."),(0,n.yg)("h2",{id:"developing-custom-storages"},"Developing Custom Storages"),(0,n.yg)("p",null,"GlueSQL offers an easy-to-understand and implement interface for custom storage development. By implementing the corresponding interface, developers can have SQL and the AST Builder automatically support their custom storage. "),(0,n.yg)("p",null,"Verification of custom storage implementation is also straightforward using GlueSQL's test-suite, which allows developers to easily test their implementation and fix any issues found during the process. With a line coverage of nearly 99% in the GlueSQL project's core code, custom storage developers can complete the development and verification process simply by passing all the test-suite cases."),(0,n.yg)("h2",{id:"exploring-the-storages-section"},"Exploring the Storages Section"),(0,n.yg)("p",null,"In the Storages section, you will find detailed information about the reference storages currently supported by GlueSQL, as well as guidelines for developing custom storages and what needs to be done to implement them."),(0,n.yg)("p",null,"Together, these resources make it easy to utilize and adapt GlueSQL for a variety of storage systems."))}d.isMDXComponent=!0}}]);