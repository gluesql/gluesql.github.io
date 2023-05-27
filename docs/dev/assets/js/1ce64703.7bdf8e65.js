"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3337],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=o,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},i="Rounding",l={unversionedId:"ast-builder/functions/math/rounding",id:"ast-builder/functions/math/rounding",title:"Rounding",description:"The AST (Abstract Syntax Tree) Builder in GlueSQL provides several mathematical functions, including round, ceil, and floor. These functions are used to perform rounding operations on floating-point numbers.",source:"@site/docs/ast-builder/functions/math/rounding.md",sourceDirName:"ast-builder/functions/math",slug:"/ast-builder/functions/math/rounding",permalink:"/docs/dev/ast-builder/functions/math/rounding",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Logarithmic and Exponential",permalink:"/docs/dev/ast-builder/functions/math/logarithmic-and-exponential"},next:{title:"Special Mathematical",permalink:"/docs/dev/ast-builder/functions/math/special-mathematical"}},u={},c=[{value:"Ceil Function",id:"ceil-function",level:2},{value:"Floor Function",id:"floor-function",level:2},{value:"Round Function",id:"round-function",level:2}],d={toc:c},p="wrapper";function s(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rounding"},"Rounding"),(0,o.kt)("p",null,"The AST (Abstract Syntax Tree) Builder in GlueSQL provides several mathematical functions, including ",(0,o.kt)("inlineCode",{parentName:"p"},"round"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ceil"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"floor"),". These functions are used to perform rounding operations on floating-point numbers."),(0,o.kt)("p",null,"For the sake of this tutorial, we'll assume there's a table named ",(0,o.kt)("inlineCode",{parentName:"p"},"Number")," with columns ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," (of type ",(0,o.kt)("inlineCode",{parentName:"p"},"INTEGER"),") and ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," (of type ",(0,o.kt)("inlineCode",{parentName:"p"},"FLOAT"),")."),(0,o.kt)("h2",{id:"ceil-function"},"Ceil Function"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ceil")," function rounds up the ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," to the nearest integer value that is greater than or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,o.kt)("p",null,"In GlueSQL, you can call this function in two ways. Both methods are shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Number")\n    .select()\n    .project("id")\n    .project(ceil("number"))  // Method 1: Using the ceil function directly\n    .project(col("number").ceil())  // Method 2: Calling the ceil method on a column\n    .execute(glue)\n    .await;\n')),(0,o.kt)("h2",{id:"floor-function"},"Floor Function"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"floor")," function rounds down the ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," to the nearest integer value that is less than or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,o.kt)("p",null,"Again, there are two ways to call this function in GlueSQL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Number")\n    .select()\n    .project("id")\n    .project(floor("number"))  // Method 1: Using the floor function directly\n    .project(col("number").floor())  // Method 2: Calling the floor method on a column\n    .execute(glue)\n    .await;\n')),(0,o.kt)("h2",{id:"round-function"},"Round Function"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"round")," function rounds the ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," to the nearest integer. If ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," is halfway between two integers, it rounds towards the nearest even number."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"round")," function can also be called in two ways, as demonstrated below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Number")\n    .select()\n    .project("id")\n    .project(round("number"))  // Method 1: Using the round function directly\n    .project(col("number").round())  // Method 2: Calling the round method on a column\n    .execute(glue)\n    .await;\n')))}s.isMDXComponent=!0}}]);