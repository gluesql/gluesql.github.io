"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return a?n.createElement(f,o(o({ref:t},m),{},{components:a})):n.createElement(f,o({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={},o="FORMAT",l={unversionedId:"sql-syntax/functions/datetime/format",id:"sql-syntax/functions/datetime/format",title:"FORMAT",description:"The FORMAT function in SQL is used to format date, time, and timestamp values into a specified format.",source:"@site/docs/sql-syntax/functions/datetime/format.md",sourceDirName:"sql-syntax/functions/datetime",slug:"/sql-syntax/functions/datetime/format",permalink:"/docs/dev/sql-syntax/functions/datetime/format",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sqlSyntaxSidebar",previous:{title:"EXTRACT",permalink:"/docs/dev/sql-syntax/functions/datetime/extract"},next:{title:"NOW",permalink:"/docs/dev/sql-syntax/functions/datetime/now"}},p={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Usage",id:"usage",level:2},{value:"Error Example",id:"error-example",level:2}],m={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"format"},"FORMAT"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT")," function in SQL is used to format date, time, and timestamp values into a specified format."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"FORMAT(value, format)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": The date, time, or timestamp value that is to be formatted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format"),": The format in which the value is to be displayed. This is a string that contains format specifiers, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"%Y")," for four-digit year, ",(0,r.kt)("inlineCode",{parentName:"li"},"%m")," for two-digit month, and so on.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Here are examples of how ",(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT")," can be used to display datetime components in various formats:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Formatting a ",(0,r.kt)("inlineCode",{parentName:"p"},"DATE")," value: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT FORMAT(DATE '2017-06-15','%Y-%m') AS date;\n")),(0,r.kt)("p",{parentName:"li"},"This returns ",(0,r.kt)("inlineCode",{parentName:"p"},'"2017-06"'),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Formatting a ",(0,r.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," value: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT FORMAT(TIMESTAMP '2015-09-05 23:56:04', '%Y-%m-%d %H:%M:%S') AS timestamp;\n")),(0,r.kt)("p",{parentName:"li"},"This returns ",(0,r.kt)("inlineCode",{parentName:"p"},'"2015-09-05 23:56:04"'),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Formatting a ",(0,r.kt)("inlineCode",{parentName:"p"},"TIME")," value: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT FORMAT(TIME '23:56:04','%H:%M') AS time;\n")),(0,r.kt)("p",{parentName:"li"},"This returns ",(0,r.kt)("inlineCode",{parentName:"p"},'"23:56"'),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Formatting different components of a ",(0,r.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," value separately: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \n    FORMAT(TIMESTAMP '2015-09-05 23:56:04', '%Y') AS year,\n    FORMAT(TIMESTAMP '2015-09-05 23:56:04', '%m') AS month,\n    FORMAT(TIMESTAMP '2015-09-05 23:56:04', '%d') AS day;\n")),(0,r.kt)("p",{parentName:"li"},"This returns:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"year | month | day\n-----+-------+-----\n2015 |    09 |  05\n")))),(0,r.kt)("p",null,"Please note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"FORMAT")," function only accepts date, time, or timestamp values. If you try to format a value with an incorrect type, you will encounter an error."),(0,r.kt)("h2",{id:"error-example"},"Error Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT FORMAT('2015-09-05 23:56:04', '%Y-%m-%d %H') AS timestamp;\n")),(0,r.kt)("p",null,"This will throw an error because the input value is a string, not a date, time, or timestamp value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'EvaluateError::UnsupportedExprForFormatFunction("2015-09-05 23:56:04".to_owned())\n')))}c.isMDXComponent=!0}}]);