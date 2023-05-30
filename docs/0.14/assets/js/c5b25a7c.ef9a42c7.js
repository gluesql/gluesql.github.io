"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="CONCAT_WS",s={unversionedId:"sql-syntax/functions/text/concat-ws",id:"sql-syntax/functions/text/concat-ws",title:"CONCAT_WS",description:"The CONCAT_WS function in SQL concatenates two or more strings into one string with a separator.",source:"@site/docs/sql-syntax/functions/text/concat-ws.md",sourceDirName:"sql-syntax/functions/text",slug:"/sql-syntax/functions/text/concat-ws",permalink:"/docs/0.14/sql-syntax/functions/text/concat-ws",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"CHR",permalink:"/docs/0.14/sql-syntax/functions/text/chr"},next:{title:"CONCAT",permalink:"/docs/0.14/sql-syntax/functions/text/concat"}},i={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"concat_ws"},"CONCAT_WS"),(0,a.kt)("p",null,"The CONCAT_WS function in SQL concatenates two or more strings into one string with a separator. "),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The syntax for the CONCAT_WS function in SQL is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CONCAT_WS ( separator, string1, string2, ..., stringN )\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"separator"),": This is the string that will be placed between each string to be concatenated."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"string2"),", ..., ",(0,a.kt)("inlineCode",{parentName:"li"},"stringN"),": These are the strings that you wish to concatenate together. ")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Let's consider a few examples to understand how to use the CONCAT_WS function."),(0,a.kt)("p",null,"To concatenate strings with a comma separator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"VALUES(CONCAT_WS(',', 'AB', 'CD', 'EF'));\n")),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"'AB,CD,EF'"),"."),(0,a.kt)("p",null,"You can also concatenate more than two strings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT_WS('/', 'ab', 'cd', 'ef') AS myconcat;\n")),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"'ab/cd/ef'"),"."),(0,a.kt)("p",null,"The CONCAT_WS function will skip any NULL values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT_WS('', 'ab', 'cd', NULL, 'ef') AS myconcat;\n")),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"'abcdef'"),"."),(0,a.kt)("p",null,"The CONCAT_WS function can also take non-string arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT_WS('', 123, 456, 3.14) AS myconcat;\n")),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"'1234563.14'"),". In this case, the integers and float values are implicitly converted to strings before concatenation."),(0,a.kt)("p",null,"However, the CONCAT_WS function expects at least two arguments. If fewer than two arguments are passed to the CONCAT_WS function, it will throw an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT_WS() AS myconcat;\n")),(0,a.kt)("p",null,"This will throw an error because the CONCAT_WS function expects at least two arguments."))}m.isMDXComponent=!0}}]);