"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7669],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(t),d=r,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=t(7462),r=(t(7294),t(3905));const l={},i="SIN",s={unversionedId:"sql-syntax/functions/math/sin",id:"sql-syntax/functions/math/sin",title:"SIN",description:"The SIN function is used to calculate the sine of a number. It takes a single numeric argument (angle in radians) and returns the sine of that angle.",source:"@site/docs/sql-syntax/functions/math/sin.md",sourceDirName:"sql-syntax/functions/math",slug:"/sql-syntax/functions/math/sin",permalink:"/docs/dev/sql-syntax/functions/math/sin",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sqlSyntaxSidebar",previous:{title:"SIGN",permalink:"/docs/dev/sql-syntax/functions/math/sign"},next:{title:"SQRT",permalink:"/docs/dev/sql-syntax/functions/math/sqrt"}},u={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Using SIN with float values",id:"example-1-using-sin-with-float-values",level:3},{value:"Example 2: Using SIN with NULL values",id:"example-2-using-sin-with-null-values",level:3},{value:"Errors",id:"errors",level:2},{value:"Example 3: Using SIN with non-numeric values",id:"example-3-using-sin-with-non-numeric-values",level:3},{value:"Example 4: Using SIN with multiple arguments",id:"example-4-using-sin-with-multiple-arguments",level:3}],p={toc:o},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sin"},"SIN"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SIN")," function is used to calculate the sine of a number. It takes a single numeric argument (angle in radians) and returns the sine of that angle."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SIN(value)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": A numeric expression (angle in radians) for which the sine is to be calculated.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Let's consider a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"SingleItem")," with the following schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE SingleItem (id INTEGER);\n")),(0,r.kt)("p",null,"Insert a row into the ",(0,r.kt)("inlineCode",{parentName:"p"},"SingleItem")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO SingleItem VALUES (0);\n")),(0,r.kt)("h3",{id:"example-1-using-sin-with-float-values"},"Example 1: Using SIN with float values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT SIN(0.5) AS sin1, SIN(1) AS sin2 FROM SingleItem;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    sin1     |    sin2\n-------------+--------------\n 0.479425539 | 0.841470984\n")),(0,r.kt)("h3",{id:"example-2-using-sin-with-null-values"},"Example 2: Using SIN with NULL values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT SIN(NULL) AS sin FROM SingleItem;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  sin\n-------\n (null)\n")),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SIN")," function requires a numeric value as its argument. Using non-numeric values or more than one argument will result in an error."),(0,r.kt)("h3",{id:"example-3-using-sin-with-non-numeric-values"},"Example 3: Using SIN with non-numeric values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT SIN('string') AS sin FROM SingleItem;\n")),(0,r.kt)("p",null,"Error: Function requires a numeric value."),(0,r.kt)("h3",{id:"example-4-using-sin-with-multiple-arguments"},"Example 4: Using SIN with multiple arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT SIN(1.0, 2.0) AS sin FROM SingleItem;\n")),(0,r.kt)("p",null,"Error: Function expects 1 argument, but 2 were provided."))}m.isMDXComponent=!0}}]);