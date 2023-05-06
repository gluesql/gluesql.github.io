"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3058],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,g=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return t?a.createElement(g,s(s({ref:n},c),{},{components:t})):a.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={},s="COS",i={unversionedId:"sql-syntax/functions/math/cos",id:"sql-syntax/functions/math/cos",title:"COS",description:"The COS function is used to calculate the cosine of a number. It takes a single numeric argument (angle in radians) and returns the cosine of that angle.",source:"@site/docs/sql-syntax/functions/math/cos.md",sourceDirName:"sql-syntax/functions/math",slug:"/sql-syntax/functions/math/cos",permalink:"/docs/dev/docs/sql-syntax/functions/math/cos",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sqlSyntaxSidebar",previous:{title:"CEIL",permalink:"/docs/dev/docs/sql-syntax/functions/math/ceil"},next:{title:"DEGREES",permalink:"/docs/dev/docs/sql-syntax/functions/math/degrees"}},o={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Using COS with float values",id:"example-1-using-cos-with-float-values",level:3},{value:"Example 2: Using COS with NULL values",id:"example-2-using-cos-with-null-values",level:3},{value:"Errors",id:"errors",level:2},{value:"Example 3: Using COS with non-numeric values",id:"example-3-using-cos-with-non-numeric-values",level:3},{value:"Example 4: Using COS with multiple arguments",id:"example-4-using-cos-with-multiple-arguments",level:3}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cos"},"COS"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"COS")," function is used to calculate the cosine of a number. It takes a single numeric argument (angle in radians) and returns the cosine of that angle."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"COS(value)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": A numeric expression (angle in radians) for which the cosine is to be calculated.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Let's consider a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"SingleItem")," with the following schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE SingleItem (id INTEGER);\n")),(0,r.kt)("p",null,"Insert a row into the ",(0,r.kt)("inlineCode",{parentName:"p"},"SingleItem")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO SingleItem VALUES (0);\n")),(0,r.kt)("h3",{id:"example-1-using-cos-with-float-values"},"Example 1: Using COS with float values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COS(0.5) AS cos1, COS(1) AS cos2 FROM SingleItem;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    cos1     |    cos2\n-------------+--------------\n 0.877582562 | 0.540302306\n")),(0,r.kt)("h3",{id:"example-2-using-cos-with-null-values"},"Example 2: Using COS with NULL values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COS(NULL) AS cos FROM SingleItem;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  cos\n-------\n (null)\n")),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"COS")," function requires a numeric value as its argument. Using non-numeric values or more than one argument will result in an error."),(0,r.kt)("h3",{id:"example-3-using-cos-with-non-numeric-values"},"Example 3: Using COS with non-numeric values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COS('string') AS cos FROM SingleItem;\n")),(0,r.kt)("p",null,"Error: Function requires a numeric value."),(0,r.kt)("h3",{id:"example-4-using-cos-with-multiple-arguments"},"Example 4: Using COS with multiple arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COS(1.0, 2.0) AS cos FROM SingleItem;\n")),(0,r.kt)("p",null,"Error: Function expects 1 argument, but 2 were provided."))}m.isMDXComponent=!0}}]);