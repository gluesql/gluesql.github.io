"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5906],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),g=n,f=p["".concat(l,".").concat(g)]||p[g]||d[g]||s;return o?r.createElement(f,a(a({ref:t},u),{},{components:o})):r.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<s;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},8633:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const s={sidebar_position:1},a="Introduction",i={unversionedId:"storages/intro",id:"storages/intro",title:"Introduction",description:"GlueSQL is not only suitable for use as a conventional database, but one of its key features is the ability for anyone to easily adapt SQL and the AST Builder to their desired file or storage system. This adaptability is achieved through the following topics covered in this section:",source:"@site/docs/storages/intro.md",sourceDirName:"storages",slug:"/storages/intro",permalink:"/docs/dev/docs/storages/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"customStorageSidebar",next:{title:"Memory Storage",permalink:"/docs/dev/docs/storages/supported-storages/memory-storage"}},l={},c=[{value:"Supported Storages",id:"supported-storages",level:2},{value:"Developing Custom Storages",id:"developing-custom-storages",level:2},{value:"Exploring the Storages Section",id:"exploring-the-storages-section",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"GlueSQL is not only suitable for use as a conventional database, but one of its key features is the ability for anyone to easily adapt SQL and the AST Builder to their desired file or storage system. This adaptability is achieved through the following topics covered in this section:"),(0,n.kt)("h2",{id:"supported-storages"},"Supported Storages"),(0,n.kt)("p",null,"GlueSQL provides a variety of reference storages out of the box, ranging from simple in-memory storage to key-value databases, log file-based storage like JSON & JSONL, and even Web Storage and IndexedDB supported by web browsers."),(0,n.kt)("h2",{id:"developing-custom-storages"},"Developing Custom Storages"),(0,n.kt)("p",null,"GlueSQL offers an easy-to-understand and implement interface for custom storage development. By implementing the corresponding interface, developers can have SQL and the AST Builder automatically support their custom storage. "),(0,n.kt)("p",null,"Verification of custom storage implementation is also straightforward using GlueSQL's test-suite, which allows developers to easily test their implementation and fix any issues found during the process. With a line coverage of nearly 99% in the GlueSQL project's core code, custom storage developers can complete the development and verification process simply by passing all the test-suite cases."),(0,n.kt)("h2",{id:"exploring-the-storages-section"},"Exploring the Storages Section"),(0,n.kt)("p",null,"In the Storages section, you will find detailed information about the reference storages currently supported by GlueSQL, as well as guidelines for developing custom storages and what needs to be done to implement them."),(0,n.kt)("p",null,"Together, these resources make it easy to utilize and adapt GlueSQL for a variety of storage systems."))}d.isMDXComponent=!0}}]);