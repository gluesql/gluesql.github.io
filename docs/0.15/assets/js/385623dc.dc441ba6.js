"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},i="RAND",l={unversionedId:"sql-syntax/functions/math/rand",id:"sql-syntax/functions/math/rand",title:"RAND",description:"The RAND function is used to generate a random float value between 0 (inclusive) and 1 (exclusive). The function takes an optional seed value, which must be of the FLOAT type. If a seed value is provided, the random number generator will be initialized with that seed, producing a deterministic sequence of random numbers.",source:"@site/docs/sql-syntax/functions/math/rand.md",sourceDirName:"sql-syntax/functions/math",slug:"/sql-syntax/functions/math/rand",permalink:"/docs/0.15/sql-syntax/functions/math/rand",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"RADIANS",permalink:"/docs/0.15/sql-syntax/functions/math/radians"},next:{title:"ROUND",permalink:"/docs/0.15/sql-syntax/functions/math/round"}},s={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Error Cases",id:"error-cases",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rand"},"RAND"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"RAND")," function is used to generate a random float value between 0 (inclusive) and 1 (exclusive). The function takes an optional seed value, which must be of the FLOAT type. If a seed value is provided, the random number generator will be initialized with that seed, producing a deterministic sequence of random numbers."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"RAND([seed])\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("inlineCode",{parentName:"li"},"RAND")," function without a seed:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT RAND() AS rand;\n-- Result: A random float between 0 and 1\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("inlineCode",{parentName:"li"},"RAND")," function with a seed:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT RAND(123) AS rand1, RAND(789.0) AS rand2;\n-- Result: 0.17325464426155657, 0.9635218234007941\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("inlineCode",{parentName:"li"},"RAND")," function with NULL:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT RAND(NULL) AS rand;\n-- Result: NULL\n")),(0,a.kt)("h2",{id:"error-cases"},"Error Cases"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"RAND")," function requires the argument to be of FLOAT type, if provided:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT RAND(\'string\') AS rand;\n-- Error: FunctionRequiresFloatValue("RAND")\n\nSELECT RAND(TRUE) AS rand;\n-- Error: FunctionRequiresFloatValue("RAND")\n\nSELECT RAND(FALSE) AS rand;\n-- Error: FunctionRequiresFloatValue("RAND")\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"RAND")," function takes at most one argument:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT RAND('string', 'string2') AS rand;\n-- Error: FunctionArgsLengthNotWithinRange(\"RAND\", 0, 1, 2)\n")))}d.isMDXComponent=!0}}]);