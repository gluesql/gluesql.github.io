"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6251],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(i,".").concat(m)]||u[m]||y[m]||l;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(8168),r=(n(6540),n(5680));const l={},o="CONCAT",s={unversionedId:"sql-syntax/functions/list-map/concat",id:"sql-syntax/functions/list-map/concat",title:"CONCAT",description:"The CONCAT function is used to concatenate two or more list values together.",source:"@site/docs/sql-syntax/functions/list-map/concat.md",sourceDirName:"sql-syntax/functions/list-map",slug:"/sql-syntax/functions/list-map/concat",permalink:"/docs/dev/sql-syntax/functions/list-map/concat",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"APPEND",permalink:"/docs/dev/sql-syntax/functions/list-map/append"},next:{title:"PREPEND",permalink:"/docs/dev/sql-syntax/functions/list-map/prepend"}},i={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: CONCAT two lists",id:"example-1-concat-two-lists",level:3}],p={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"concat"},"CONCAT"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"CONCAT")," function is used to concatenate two or more list values together."),(0,r.yg)("h2",{id:"syntax"},"Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CONCAT(list_value1, list_value2, ...)\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Parameters:")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"list_value1"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"list_value2"),", ...: List values that will be concatenated.")),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("p",null,"Consider the following table ",(0,r.yg)("inlineCode",{parentName:"p"},"ListTypeConcat"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE ListTypeConcat (\n    id INTEGER,\n    items LIST,\n    items2 LIST\n);\n")),(0,r.yg)("p",null,"With the following data:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO ListTypeConcat VALUES\n    (1, \'[1, 2, 3]\', \'["one", "two", "three"]\');\n')),(0,r.yg)("h3",{id:"example-1-concat-two-lists"},"Example 1: CONCAT two lists"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT(items, items2) AS myconcat FROM ListTypeConcat;\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Result:")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"myconcat"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'[1, 2, 3, "one", "two", "three"]')))))}y.isMDXComponent=!0}}]);