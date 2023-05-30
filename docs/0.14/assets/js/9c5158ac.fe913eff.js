"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,b=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Basic Arithmetic",l={unversionedId:"ast-builder/functions/math/basic-arithmetic",id:"ast-builder/functions/math/basic-arithmetic",title:"Basic Arithmetic",description:"GlueSQL provides a number of basic arithmetic operations such as absolute value (abs), division (divide), modulo (modulo), greatest common divisor (gcd), and least common multiple (lcm).",source:"@site/docs/ast-builder/functions/math/basic-arithmetic.md",sourceDirName:"ast-builder/functions/math",slug:"/ast-builder/functions/math/basic-arithmetic",permalink:"/docs/0.14/ast-builder/functions/math/basic-arithmetic",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Trimming",permalink:"/docs/0.14/ast-builder/functions/text/trimming"},next:{title:"Conversion",permalink:"/docs/0.14/ast-builder/functions/math/conversion"}},u={},c=[{value:"Absolute Value - ABS",id:"absolute-value---abs",level:2},{value:"Division - DIV",id:"division---div",level:2},{value:"Modulo - MOD",id:"modulo---mod",level:2},{value:"Greatest Common Divisor - GCD",id:"greatest-common-divisor---gcd",level:2},{value:"Least Common Multiple - LCM",id:"least-common-multiple---lcm",level:2}],s={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-arithmetic"},"Basic Arithmetic"),(0,a.kt)("p",null,"GlueSQL provides a number of basic arithmetic operations such as absolute value (abs), division (divide), modulo (modulo), greatest common divisor (gcd), and least common multiple (lcm)."),(0,a.kt)("p",null,"For this tutorial, we assume there's a table named ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," with columns ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,a.kt)("h2",{id:"absolute-value---abs"},"Absolute Value - ABS"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"abs")," function returns the absolute value of a number."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = values(vec!["0, 0", "1, -3", "2, 4", "3, -29"])\n    .alias_as("number")\n    .select()\n    .project("column1")\n    .project(abs("column2"))  // Takes the absolute value of column2\n    .project(col("column2").abs())  // Takes the absolute value of column2\n    .execute(glue)\n    .await;\n')),(0,a.kt)("h2",{id:"division---div"},"Division - DIV"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"divide")," function divides one number by another."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Number")\n    .select()\n    .project("id")\n    .project(divide("number", 3))  // Divides the number by 3\n    .project(divide(col("number"), 3))  // Divides the number by 3\n    .execute(glue)\n    .await;\n')),(0,a.kt)("h2",{id:"modulo---mod"},"Modulo - MOD"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"modulo")," function returns the remainder of one number divided by another."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Number")\n    .select()\n    .project("id")\n    .project(modulo("number", 4))  // Gets the remainder of number divided by 4\n    .project(modulo(col("number"), 4))  // Gets the remainder of number divided by 4\n    .execute(glue)\n    .await;\n')),(0,a.kt)("h2",{id:"greatest-common-divisor---gcd"},"Greatest Common Divisor - GCD"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"gcd")," function returns the greatest common divisor of two numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Number")\n    .select()\n    .project("id")\n    .project(gcd("number", 12))  // Gets the GCD of number and 12\n    .project(gcd(col("number"), 12))  // Gets the GCD of number and 12\n    .execute(glue)\n    .await;\n')),(0,a.kt)("h2",{id:"least-common-multiple---lcm"},"Least Common Multiple - LCM"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"lcm")," function returns the least common multiple of two numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Number")\n    .select()\n    .project("id")\n    .project(lcm("number", 3))  // Gets the LCM of number and 3\n    .project(lcm(col("number"), 3))  // Gets the LCM of number and 3\n    .execute(glue)\n    .await;\n')))}d.isMDXComponent=!0}}]);