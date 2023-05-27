"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,g=c["".concat(s,".").concat(f)]||c[f]||m[f]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},l="FLOOR",i={unversionedId:"sql-syntax/functions/math/floor",id:"sql-syntax/functions/math/floor",title:"FLOOR",description:"The FLOOR function is used to round a number down to the nearest integer value. It takes a single floating-point or integer value as its argument and returns a floating-point value.",source:"@site/docs/sql-syntax/functions/math/floor.md",sourceDirName:"sql-syntax/functions/math",slug:"/sql-syntax/functions/math/floor",permalink:"/docs/dev/sql-syntax/functions/math/floor",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"EXP",permalink:"/docs/dev/sql-syntax/functions/math/exp"},next:{title:"GCD",permalink:"/docs/dev/sql-syntax/functions/math/gcd"}},s={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Using FLOOR function",id:"example-1-using-floor-function",level:3},{value:"Errors",id:"errors",level:2},{value:"Example 2: Using FLOOR with a string argument",id:"example-2-using-floor-with-a-string-argument",level:3},{value:"Example 3: Using FLOOR with a boolean argument",id:"example-3-using-floor-with-a-boolean-argument",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"floor"},"FLOOR"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FLOOR")," function is used to round a number down to the nearest integer value. It takes a single floating-point or integer value as its argument and returns a floating-point value."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"FLOOR(value)\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Let's consider a table named ",(0,a.kt)("inlineCode",{parentName:"p"},"SingleItem")," with the following schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE SingleItem (id INTEGER);\n")),(0,a.kt)("p",null,"Insert a row into the ",(0,a.kt)("inlineCode",{parentName:"p"},"SingleItem")," table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO SingleItem VALUES (0);\n")),(0,a.kt)("h3",{id:"example-1-using-floor-function"},"Example 1: Using FLOOR function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\nFLOOR(0.3) as floor1,\nFLOOR(-0.8) as floor2,\nFLOOR(10) as floor3,\nFLOOR(6.87421) as floor4\nFROM SingleItem;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"floor1 | floor2 | floor3 | floor4\n-------+--------+--------+--------\n   0.0 |   -1.0 |   10.0 |    6.0\n")),(0,a.kt)("p",null,"Note that the returned values are floating-point numbers, even though they represent integer values."),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FLOOR")," function expects a floating-point or integer value as its argument. Providing any other type, such as a string or boolean, will result in an error."),(0,a.kt)("h3",{id:"example-2-using-floor-with-a-string-argument"},"Example 2: Using FLOOR with a string argument"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT FLOOR('string') AS floor FROM SingleItem;\n")),(0,a.kt)("p",null,"Error: Function requires a floating-point or integer value."),(0,a.kt)("h3",{id:"example-3-using-floor-with-a-boolean-argument"},"Example 3: Using FLOOR with a boolean argument"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT FLOOR(TRUE) AS floor FROM SingleItem;\n")),(0,a.kt)("p",null,"Error: Function requires a floating-point or integer value."))}m.isMDXComponent=!0}}]);