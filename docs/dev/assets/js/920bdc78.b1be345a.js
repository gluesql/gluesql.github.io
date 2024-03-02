"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[666],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),f=i,y=c["".concat(s,".").concat(f)]||c[f]||p[f]||o;return t?r.createElement(y,a(a({ref:n},u),{},{components:t})):r.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(8168),i=(t(6540),t(5680));const o={},a="DIV",l={unversionedId:"sql-syntax/functions/math/div",id:"sql-syntax/functions/math/div",title:"DIV",description:"The DIV function is used to perform integer division. It takes two arguments (a dividend and a divisor) and returns the integer quotient of the division operation. Both dividend and divisor can be FLOAT or INTEGER type. The return type of the function is INTEGER.",source:"@site/docs/sql-syntax/functions/math/div.md",sourceDirName:"sql-syntax/functions/math",slug:"/sql-syntax/functions/math/div",permalink:"/docs/dev/sql-syntax/functions/math/div",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"DEGREES",permalink:"/docs/dev/sql-syntax/functions/math/degrees"},next:{title:"EXP",permalink:"/docs/dev/sql-syntax/functions/math/exp"}},s={},d=[{value:"Example",id:"example",level:2},{value:"Errors",id:"errors",level:2}],u={toc:d},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"div"},"DIV"),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"DIV")," function is used to perform integer division. It takes two arguments (a dividend and a divisor) and returns the integer quotient of the division operation. Both dividend and divisor can be FLOAT or INTEGER type. The return type of the function is INTEGER."),(0,i.yg)("h2",{id:"example"},"Example"),(0,i.yg)("p",null,"The following example demonstrates the usage of the ",(0,i.yg)("inlineCode",{parentName:"p"},"DIV")," function in a SQL query:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE FloatDiv (\n    dividend FLOAT DEFAULT DIV(30, 11),\n    divisor FLOAT DEFAULT DIV(3, 2)\n);\n\nINSERT INTO FloatDiv (dividend, divisor) VALUES (12.0, 3.0), (12.34, 56.78), (-12.3, 4.0);\n\nSELECT DIV(dividend, divisor) FROM FloatDiv;\n")),(0,i.yg)("p",null,"This will return the following result:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"DIV(dividend, divisor)\n4\n0\n-4\n")),(0,i.yg)("h2",{id:"errors"},"Errors"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"If the divisor is zero, a ",(0,i.yg)("inlineCode",{parentName:"li"},"DivisorShouldNotBeZero")," error will be raised."),(0,i.yg)("li",{parentName:"ol"},"If either of the arguments is not of FLOAT or INTEGER type, a ",(0,i.yg)("inlineCode",{parentName:"li"},"FunctionRequiresFloatOrIntegerValue")," error will be raised."),(0,i.yg)("li",{parentName:"ol"},"If the number of arguments provided to the function is not equal to 2, a ",(0,i.yg)("inlineCode",{parentName:"li"},"FunctionArgsLengthNotMatching")," error will be raised.")))}p.isMDXComponent=!0}}]);