"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,d=c["".concat(i,".").concat(f)]||c[f]||m[f]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},l="POWER",s={unversionedId:"sql-syntax/functions/math/power",id:"sql-syntax/functions/math/power",title:"POWER",description:"The POWER function is used to raise a number to the power of another number. It takes two arguments, the base and the exponent, both of which must be of the FLOAT type. The result will also be of the FLOAT type.",source:"@site/docs/sql-syntax/functions/math/power.md",sourceDirName:"sql-syntax/functions/math",slug:"/sql-syntax/functions/math/power",permalink:"/docs/0.14/sql-syntax/functions/math/power",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"PI",permalink:"/docs/0.14/sql-syntax/functions/math/pi"},next:{title:"RADIANS",permalink:"/docs/0.14/sql-syntax/functions/math/radians"}},i={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Error Cases",id:"error-cases",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"power"},"POWER"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"POWER")," function is used to raise a number to the power of another number. It takes two arguments, the base and the exponent, both of which must be of the FLOAT type. The result will also be of the FLOAT type."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"POWER(base, exponent)\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("inlineCode",{parentName:"li"},"POWER")," function:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT POWER(2.0, 4) as power_1;\n-- Result: 16.0\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("inlineCode",{parentName:"li"},"POWER")," function with a decimal:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT POWER(0.07, 3) as power_2;\n-- Result: 0.000343\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Using the ",(0,a.kt)("inlineCode",{parentName:"li"},"POWER")," function with zero:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT POWER(0, 4) as power_with_zero;\n-- Result: 0.0\n\nSELECT POWER(3, 0) as power_to_zero;\n-- Result: 1.0\n")),(0,a.kt)("h2",{id:"error-cases"},"Error Cases"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"POWER")," function requires both arguments to be of FLOAT type:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT POWER('string', 'string') AS power;\n-- Error: FunctionRequiresFloatValue(\"POWER\")\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"POWER")," function requires the base to be of FLOAT type:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT POWER('string', 2.0) AS power;\n-- Error: FunctionRequiresFloatValue(\"POWER\")\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"POWER")," function requires the exponent to be of FLOAT type:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT POWER(2.0, 'string') AS power;\n-- Error: FunctionRequiresFloatValue(\"POWER\")\n")))}m.isMDXComponent=!0}}]);