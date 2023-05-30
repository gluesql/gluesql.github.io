"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},l="PI",o={unversionedId:"sql-syntax/functions/math/pi",id:"sql-syntax/functions/math/pi",title:"PI",description:"The PI function is used to retrieve the mathematical constant \u03c0 (pi), which is approximately 3.141592653589793. The function takes no arguments.",source:"@site/docs/sql-syntax/functions/math/pi.md",sourceDirName:"sql-syntax/functions/math",slug:"/sql-syntax/functions/math/pi",permalink:"/docs/0.14/sql-syntax/functions/math/pi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"MOD",permalink:"/docs/0.14/sql-syntax/functions/math/mod"},next:{title:"POWER",permalink:"/docs/0.14/sql-syntax/functions/math/power"}},s={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Using PI function",id:"example-1-using-pi-function",level:3},{value:"Errors",id:"errors",level:2},{value:"Example 2: Using PI with an argument",id:"example-2-using-pi-with-an-argument",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pi"},"PI"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PI")," function is used to retrieve the mathematical constant \u03c0 (pi), which is approximately 3.141592653589793. The function takes no arguments."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"PI()\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Let's consider a table named ",(0,a.kt)("inlineCode",{parentName:"p"},"SingleItem")," with the following schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE SingleItem (id FLOAT);\n")),(0,a.kt)("p",null,"Insert a row into the ",(0,a.kt)("inlineCode",{parentName:"p"},"SingleItem")," table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO SingleItem VALUES (0);\n")),(0,a.kt)("h3",{id:"example-1-using-pi-function"},"Example 1: Using PI function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT PI() as pi FROM SingleItem;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        pi\n----------------\n3.141592653589793\n")),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PI")," function expects no arguments. Providing any arguments will result in an error."),(0,a.kt)("h3",{id:"example-2-using-pi-with-an-argument"},"Example 2: Using PI with an argument"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT PI(0) as pi FROM SingleItem;\n")),(0,a.kt)("p",null,"Error: Function expects 0 arguments, but 1 was provided."))}m.isMDXComponent=!0}}]);