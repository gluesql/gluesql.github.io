"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8242],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(t),g=a,m=p["".concat(c,".").concat(g)]||p[g]||y[g]||o;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5833:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=t(8168),a=(t(6540),t(5680));const o={},l="CONCAT",s={unversionedId:"sql-syntax/functions/text/concat",id:"sql-syntax/functions/text/concat",title:"CONCAT",description:"The CONCAT function in SQL concatenates two or more strings into one string.",source:"@site/docs/sql-syntax/functions/text/concat.md",sourceDirName:"sql-syntax/functions/text",slug:"/sql-syntax/functions/text/concat",permalink:"/docs/dev/sql-syntax/functions/text/concat",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"CONCAT_WS",permalink:"/docs/dev/sql-syntax/functions/text/concat-ws"},next:{title:"FIND_IDX",permalink:"/docs/dev/sql-syntax/functions/text/find-idx"}},c={},i=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:i},p="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"concat"},"CONCAT"),(0,a.yg)("p",null,"The CONCAT function in SQL concatenates two or more strings into one string."),(0,a.yg)("h2",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,"The syntax for the CONCAT function in SQL is:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CONCAT ( string1, string2, ..., stringN )\n")),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"string1"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"string2"),", ..., ",(0,a.yg)("inlineCode",{parentName:"li"},"stringN"),": These are the strings that you wish to concatenate together. ")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Let's consider a few examples to understand how to use the CONCAT function."),(0,a.yg)("p",null,"To concatenate two strings:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT('ab', 'cd') AS myconcat;\n")),(0,a.yg)("p",null,"This will return ",(0,a.yg)("inlineCode",{parentName:"p"},"'abcd'"),"."),(0,a.yg)("p",null,"You can also concatenate more than two strings:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT('ab', 'cd', 'ef') AS myconcat;\n")),(0,a.yg)("p",null,"This will return ",(0,a.yg)("inlineCode",{parentName:"p"},"'abcdef'"),"."),(0,a.yg)("p",null,"If any string in the CONCAT function is NULL, the function will return NULL:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT('ab', 'cd', NULL, 'ef') AS myconcat;\n")),(0,a.yg)("p",null,"This will return NULL."),(0,a.yg)("p",null,"The CONCAT function can also take non-string arguments:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT(123, 456, 3.14) AS myconcat;\n")),(0,a.yg)("p",null,"This will return ",(0,a.yg)("inlineCode",{parentName:"p"},"'1234563.14'"),". In this case, the integers and float values are implicitly converted to strings before concatenation."),(0,a.yg)("p",null,"However, the CONCAT function expects at least one argument. If no arguments are passed to the CONCAT function, it will throw an error:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT CONCAT() AS myconcat;\n")),(0,a.yg)("p",null,"This will throw an error because the CONCAT function expects at least one argument."))}y.isMDXComponent=!0}}]);