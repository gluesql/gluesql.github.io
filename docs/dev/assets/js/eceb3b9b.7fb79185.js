"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7436],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},457:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(8168),a=(t(6540),t(5680));const i={},l="PI",o={unversionedId:"sql-syntax/functions/math/pi",id:"sql-syntax/functions/math/pi",title:"PI",description:"The PI function is used to retrieve the mathematical constant \u03c0 (pi), which is approximately 3.141592653589793. The function takes no arguments.",source:"@site/docs/sql-syntax/functions/math/pi.md",sourceDirName:"sql-syntax/functions/math",slug:"/sql-syntax/functions/math/pi",permalink:"/docs/dev/sql-syntax/functions/math/pi",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"MOD",permalink:"/docs/dev/sql-syntax/functions/math/mod"},next:{title:"POWER",permalink:"/docs/dev/sql-syntax/functions/math/power"}},s={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Using PI function",id:"example-1-using-pi-function",level:3},{value:"Errors",id:"errors",level:2},{value:"Example 2: Using PI with an argument",id:"example-2-using-pi-with-an-argument",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"pi"},"PI"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"PI")," function is used to retrieve the mathematical constant \u03c0 (pi), which is approximately 3.141592653589793. The function takes no arguments."),(0,a.yg)("h2",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"PI()\n")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Let's consider a table named ",(0,a.yg)("inlineCode",{parentName:"p"},"SingleItem")," with the following schema:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE SingleItem (id FLOAT);\n")),(0,a.yg)("p",null,"Insert a row into the ",(0,a.yg)("inlineCode",{parentName:"p"},"SingleItem")," table:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO SingleItem VALUES (0);\n")),(0,a.yg)("h3",{id:"example-1-using-pi-function"},"Example 1: Using PI function"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT PI() as pi FROM SingleItem;\n")),(0,a.yg)("p",null,"Result:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"        pi\n----------------\n3.141592653589793\n")),(0,a.yg)("h2",{id:"errors"},"Errors"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"PI")," function expects no arguments. Providing any arguments will result in an error."),(0,a.yg)("h3",{id:"example-2-using-pi-with-an-argument"},"Example 2: Using PI with an argument"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT PI(0) as pi FROM SingleItem;\n")),(0,a.yg)("p",null,"Error: Function expects 0 arguments, but 1 was provided."))}m.isMDXComponent=!0}}]);