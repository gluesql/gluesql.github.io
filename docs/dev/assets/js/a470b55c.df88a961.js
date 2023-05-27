"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6989],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={},l="CONCAT",s={unversionedId:"sql-syntax/functions/text/concat",id:"sql-syntax/functions/text/concat",title:"CONCAT",description:"The CONCAT function in SQL concatenates two or more strings into one string.",source:"@site/docs/sql-syntax/functions/text/concat.md",sourceDirName:"sql-syntax/functions/text",slug:"/sql-syntax/functions/text/concat",permalink:"/docs/dev/sql-syntax/functions/text/concat",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"CONCAT_WS",permalink:"/docs/dev/sql-syntax/functions/text/concat-ws"},next:{title:"FIND_IDX",permalink:"/docs/dev/sql-syntax/functions/text/find-idx"}},c={},i=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:i},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concat"},"CONCAT"),(0,a.kt)("p",null,"The CONCAT function in SQL concatenates two or more strings into one string."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The syntax for the CONCAT function in SQL is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CONCAT ( string1, string2, ..., stringN )\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"string2"),", ..., ",(0,a.kt)("inlineCode",{parentName:"li"},"stringN"),": These are the strings that you wish to concatenate together. ")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Let's consider a few examples to understand how to use the CONCAT function."),(0,a.kt)("p",null,"To concatenate two strings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT('ab', 'cd') AS myconcat;\n")),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"'abcd'"),"."),(0,a.kt)("p",null,"You can also concatenate more than two strings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT('ab', 'cd', 'ef') AS myconcat;\n")),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"'abcdef'"),"."),(0,a.kt)("p",null,"If any string in the CONCAT function is NULL, the function will return NULL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT('ab', 'cd', NULL, 'ef') AS myconcat;\n")),(0,a.kt)("p",null,"This will return NULL."),(0,a.kt)("p",null,"The CONCAT function can also take non-string arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT(123, 456, 3.14) AS myconcat;\n")),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"'1234563.14'"),". In this case, the integers and float values are implicitly converted to strings before concatenation."),(0,a.kt)("p",null,"However, the CONCAT function expects at least one argument. If no arguments are passed to the CONCAT function, it will throw an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT() AS myconcat;\n")),(0,a.kt)("p",null,"This will throw an error because the CONCAT function expects at least one argument."))}m.isMDXComponent=!0}}]);