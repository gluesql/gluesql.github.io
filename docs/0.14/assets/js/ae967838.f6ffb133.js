"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4561],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<l;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4712:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},s="REVERSE",i={unversionedId:"sql-syntax/functions/text/reverse",id:"sql-syntax/functions/text/reverse",title:"REVERSE",description:"The REVERSE function in SQL is used to reverse a string.",source:"@site/docs/sql-syntax/functions/text/reverse.md",sourceDirName:"sql-syntax/functions/text",slug:"/sql-syntax/functions/text/reverse",permalink:"/docs/0.14/sql-syntax/functions/text/reverse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"REPEAT",permalink:"/docs/0.14/sql-syntax/functions/text/repeat"},next:{title:"RIGHT",permalink:"/docs/0.14/sql-syntax/functions/text/right"}},o={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Errors",id:"errors",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reverse"},"REVERSE"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"REVERSE")," function in SQL is used to reverse a string."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"REVERSE(string)\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": The string to be reversed.")),(0,a.kt)("h2",{id:"return-value"},"Return Value"),(0,a.kt)("p",null,"The function returns a string which is the reverse of the input string."),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("p",null,"If the parameter is not a string value, a ",(0,a.kt)("inlineCode",{parentName:"p"},"EvaluateError::FunctionRequiresStringValue")," error will be returned."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Consider a table ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," created and filled with the following data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Item (name TEXT);\nINSERT INTO Item VALUES ('Let''s meet');\n")),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"REVERSE")," function to reverse the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT REVERSE(name) AS test FROM Item;\n")),(0,a.kt)("p",null,"This will return:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"teem s'teL\n")),(0,a.kt)("p",null,"The 'Let''s meet' string is reversed as 'teem s'teL'."))}m.isMDXComponent=!0}}]);