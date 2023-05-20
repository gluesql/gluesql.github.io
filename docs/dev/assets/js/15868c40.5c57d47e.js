"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,m=c["".concat(l,".").concat(d)]||c[d]||f[d]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={},s="POSITION",a={unversionedId:"sql-syntax/functions/text/position",id:"sql-syntax/functions/text/position",title:"POSITION",description:"The POSITION function in SQL is used to find the position of a substring in a string. The position of the first occurrence of the substring is returned. If the substring is not found, this function returns 0.",source:"@site/docs/sql-syntax/functions/text/position.md",sourceDirName:"sql-syntax/functions/text",slug:"/sql-syntax/functions/text/position",permalink:"/docs/dev/sql-syntax/functions/text/position",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sqlSyntaxSidebar",previous:{title:"LTRIM",permalink:"/docs/dev/sql-syntax/functions/text/ltrim"},next:{title:"REPEAT",permalink:"/docs/dev/sql-syntax/functions/text/repeat"}},l={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Errors",id:"errors",level:2},{value:"Examples",id:"examples",level:2}],p={toc:u},c="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"position"},"POSITION"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"POSITION")," function in SQL is used to find the position of a substring in a string. The position of the first occurrence of the substring is returned. If the substring is not found, this function returns 0."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"POSITION(substring IN string)\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"substring"),": The substring to search for."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string"),": The string in which to search.")),(0,i.kt)("h2",{id:"return-value"},"Return Value"),(0,i.kt)("p",null,"The function returns an integer representing the position of the first occurrence of the substring in the string, starting from 1. If the substring is not found, the function returns 0."),(0,i.kt)("h2",{id:"errors"},"Errors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If either ",(0,i.kt)("inlineCode",{parentName:"li"},"substring")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," are not string values, a ",(0,i.kt)("inlineCode",{parentName:"li"},"ValueError::NonStringParameterInPosition")," error will be returned.")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Consider a table ",(0,i.kt)("inlineCode",{parentName:"p"},"Food")," created and filled with the following data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Food (\n    name TEXT\n);\nINSERT INTO Food VALUES ('pork');\nINSERT INTO Food VALUES ('burger');\n")),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"POSITION")," function to find the position of a substring within the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT POSITION('e' IN name) AS test FROM Food;\n")),(0,i.kt)("p",null,"This will return:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0\n5\n")),(0,i.kt)("p",null,"The first 'e' in 'burger' is at position 5, so the function returns 5 for 'burger'. There is no 'e' in 'pork', so the function returns 0 for 'pork'."))}f.isMDXComponent=!0}}]);