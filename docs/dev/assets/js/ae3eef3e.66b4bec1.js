"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},l="LN",i={unversionedId:"sql-syntax/functions/math/ln",id:"sql-syntax/functions/math/ln",title:"LN",description:"The LN function is used to calculate the natural logarithm (base e) of a number. It takes a single FLOAT or INTEGER argument and returns a FLOAT value representing the natural logarithm of the given number.",source:"@site/docs/sql-syntax/functions/math/ln.md",sourceDirName:"sql-syntax/functions/math",slug:"/sql-syntax/functions/math/ln",permalink:"/docs/dev/docs/sql-syntax/functions/math/ln",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sqlSyntaxSidebar",previous:{title:"LCM",permalink:"/docs/dev/docs/sql-syntax/functions/math/lcm"},next:{title:"LOG",permalink:"/docs/dev/docs/sql-syntax/functions/math/log"}},s={},u=[{value:"Example",id:"example",level:2},{value:"Errors",id:"errors",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ln"},"LN"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LN")," function is used to calculate the natural logarithm (base ",(0,a.kt)("inlineCode",{parentName:"p"},"e"),") of a number. It takes a single FLOAT or INTEGER argument and returns a FLOAT value representing the natural logarithm of the given number."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"The following example demonstrates the usage of the ",(0,a.kt)("inlineCode",{parentName:"p"},"LN")," function in a SQL query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE SingleItem (id INTEGER DEFAULT LN(10));\n\nINSERT INTO SingleItem VALUES (0);\n\nSELECT\n    LN(64.0) as ln1,\n    LN(0.04) as ln2\nFROM SingleItem;\n")),(0,a.kt)("p",null,"This will return the following result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ln1     | ln2\n--------+-------------------\n4.1589  | -3.2189\n")),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If the argument is not of FLOAT or INTEGER type, a ",(0,a.kt)("inlineCode",{parentName:"li"},"FunctionRequiresFloatValue")," error will be raised."),(0,a.kt)("li",{parentName:"ol"},"If the number of arguments provided to the function is not equal to 1, a ",(0,a.kt)("inlineCode",{parentName:"li"},"FunctionArgsLengthNotMatching")," error will be raised.")))}m.isMDXComponent=!0}}]);