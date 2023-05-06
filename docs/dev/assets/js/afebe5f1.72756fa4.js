"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},l="LOG10",i={unversionedId:"sql-syntax/functions/math/log10",id:"sql-syntax/functions/math/log10",title:"LOG10",description:"The LOG10 function is used to calculate the base-10 logarithm of a number. It takes a single FLOAT or INTEGER argument and returns a FLOAT value representing the base-10 logarithm of the given number.",source:"@site/docs/sql-syntax/functions/math/log10.md",sourceDirName:"sql-syntax/functions/math",slug:"/sql-syntax/functions/math/log10",permalink:"/docs/dev/docs/sql-syntax/functions/math/log10",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sqlSyntaxSidebar",previous:{title:"LOG",permalink:"/docs/dev/docs/sql-syntax/functions/math/log"},next:{title:"LOG2",permalink:"/docs/dev/docs/sql-syntax/functions/math/log2"}},s={},c=[{value:"Example",id:"example",level:2},{value:"Errors",id:"errors",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"log10"},"LOG10"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LOG10")," function is used to calculate the base-10 logarithm of a number. It takes a single FLOAT or INTEGER argument and returns a FLOAT value representing the base-10 logarithm of the given number."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The following example demonstrates the usage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOG10")," function in a SQL query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE SingleItem (id INTEGER DEFAULT LOG10(100));\n\nINSERT INTO SingleItem VALUES (0);\n\nSELECT\n    LOG10(64.0) as log10_1,\n    LOG10(0.04) as log10_2\nFROM SingleItem;\n")),(0,o.kt)("p",null,"This will return the following result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"log10_1 | log10_2\n--------+-------------------\n1.8062  | -1.3979\n")),(0,o.kt)("h2",{id:"errors"},"Errors"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the argument is not of FLOAT or INTEGER type, a ",(0,o.kt)("inlineCode",{parentName:"li"},"FunctionRequiresFloatValue")," error will be raised."),(0,o.kt)("li",{parentName:"ol"},"If the number of arguments provided to the function is not equal to 1, a ",(0,o.kt)("inlineCode",{parentName:"li"},"FunctionArgsLengthNotMatching")," error will be raised.")))}m.isMDXComponent=!0}}]);