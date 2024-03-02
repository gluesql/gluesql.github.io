"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4972],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,y=u["".concat(s,".").concat(m)]||u[m]||g[m]||l;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(8168),a=(t(6540),t(5680));const l={},i="INITCAP",o={unversionedId:"sql-syntax/functions/text/initcap",id:"sql-syntax/functions/text/initcap",title:"INITCAP",description:"The INITCAP function in SQL is used to capitalize the first letter of each word in a string and convert the rest of the characters to lowercase.",source:"@site/docs/sql-syntax/functions/text/initcap.md",sourceDirName:"sql-syntax/functions/text",slug:"/sql-syntax/functions/text/initcap",permalink:"/docs/dev/sql-syntax/functions/text/initcap",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"FIND_IDX",permalink:"/docs/dev/sql-syntax/functions/text/find-idx"},next:{title:"LEFT",permalink:"/docs/dev/sql-syntax/functions/text/left"}},s={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"initcap"},"INITCAP"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"INITCAP")," function in SQL is used to capitalize the first letter of each word in a string and convert the rest of the characters to lowercase."),(0,a.yg)("h2",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,"The syntax for the ",(0,a.yg)("inlineCode",{parentName:"p"},"INITCAP")," function in SQL is:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"INITCAP( string )\n")),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"string"),": The input string on which the capitalization will be applied.")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Let's consider a few examples to understand how to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"INITCAP")," function."),(0,a.yg)("p",null,"Create a table named ",(0,a.yg)("inlineCode",{parentName:"p"},"Item")," with a column ",(0,a.yg)("inlineCode",{parentName:"p"},"name"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Item (\n    name TEXT DEFAULT 'abcd',\n);\n")),(0,a.yg)("p",null,"Insert some data into the ",(0,a.yg)("inlineCode",{parentName:"p"},"Item")," table:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Item VALUES\n('h/i jk'),\n(NULL),\n('H/I JK');\n")),(0,a.yg)("p",null,"Select rows where the ",(0,a.yg)("inlineCode",{parentName:"p"},"INITCAP(name)")," is equal to 'H/I Jk':"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM Item WHERE INITCAP(name) = 'H/I Jk';\n")),(0,a.yg)("p",null,"This will return the rows with 'h/i jk' and 'H/I JK', as both have the same result after applying the ",(0,a.yg)("inlineCode",{parentName:"p"},"INITCAP")," function."),(0,a.yg)("p",null,"Apply the ",(0,a.yg)("inlineCode",{parentName:"p"},"INITCAP")," function to the ",(0,a.yg)("inlineCode",{parentName:"p"},"name")," column and return the result:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT INITCAP(name) FROM Item;\n")),(0,a.yg)("p",null,"This will return 'H/I Jk', NULL, and 'H/I Jk' for the three rows, respectively."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"INITCAP")," function expects a string value as the input. If a non-string value is passed as the input, it will throw an error:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT INITCAP(1) FROM Item;\n")),(0,a.yg)("p",null,"This will throw an error because the ",(0,a.yg)("inlineCode",{parentName:"p"},"INITCAP")," function expects a string value as the input."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"INITCAP")," function expects a single argument. If no arguments are provided, it will throw an error:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT INITCAP() FROM Item;\n")),(0,a.yg)("p",null,"This will throw an error because the ",(0,a.yg)("inlineCode",{parentName:"p"},"INITCAP")," function expects a single argument."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"INITCAP")," function does not support named arguments. If a named argument is provided, it will throw an error:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT INITCAP(a => 2) FROM Item;\n")),(0,a.yg)("p",null,"This will throw an error because the ",(0,a.yg)("inlineCode",{parentName:"p"},"INITCAP")," function does not support named arguments."))}g.isMDXComponent=!0}}]);