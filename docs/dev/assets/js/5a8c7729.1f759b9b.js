"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4667],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var a=t(6540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),o=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=o(t),c=l,y=g["".concat(u,".").concat(c)]||g[c]||m[c]||r;return t?a.createElement(y,i(i({ref:n},p),{},{components:t})):a.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[g]="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3672:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=t(8168),l=(t(6540),t(5680));const r={},i="ABS",s={unversionedId:"sql-syntax/functions/math/abs",id:"sql-syntax/functions/math/abs",title:"ABS",description:"The ABS function is used to calculate the absolute value of a number. It takes a single numeric argument and returns the absolute value of that number. The argument can be an integer, decimal, or float value.",source:"@site/docs/sql-syntax/functions/math/abs.md",sourceDirName:"sql-syntax/functions/math",slug:"/sql-syntax/functions/math/abs",permalink:"/docs/dev/sql-syntax/functions/math/abs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"UPPER",permalink:"/docs/dev/sql-syntax/functions/text/upper"},next:{title:"ACOS",permalink:"/docs/dev/sql-syntax/functions/math/acos"}},u={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Using ABS with integer values",id:"example-1-using-abs-with-integer-values",level:3},{value:"Example 2: Using ABS with float values",id:"example-2-using-abs-with-float-values",level:3},{value:"Example 3: Using ABS with table columns",id:"example-3-using-abs-with-table-columns",level:3},{value:"Example 4: Using ABS with NULL values",id:"example-4-using-abs-with-null-values",level:3},{value:"Errors",id:"errors",level:2},{value:"Example 5: Using ABS with non-numeric values",id:"example-5-using-abs-with-non-numeric-values",level:3},{value:"Example 6: Using ABS with multiple arguments",id:"example-6-using-abs-with-multiple-arguments",level:3}],p={toc:o},g="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(g,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"abs"},"ABS"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"ABS")," function is used to calculate the absolute value of a number. It takes a single numeric argument and returns the absolute value of that number. The argument can be an integer, decimal, or float value."),(0,l.yg)("h2",{id:"syntax"},"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ABS(value)\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"value"),": A numeric expression for which the absolute value is to be calculated.")),(0,l.yg)("h2",{id:"examples"},"Examples"),(0,l.yg)("p",null,"Let's consider a table named ",(0,l.yg)("inlineCode",{parentName:"p"},"SingleItem")," with the following schema:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE SingleItem (id INTEGER, int8 INT8, dec DECIMAL);\n")),(0,l.yg)("p",null,"Insert a row into the ",(0,l.yg)("inlineCode",{parentName:"p"},"SingleItem")," table:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO SingleItem VALUES (0, -1, -2);\n")),(0,l.yg)("h3",{id:"example-1-using-abs-with-integer-values"},"Example 1: Using ABS with integer values"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT ABS(1) AS ABS1, \n       ABS(-1) AS ABS2, \n       ABS(+1) AS ABS3 \nFROM SingleItem;\n")),(0,l.yg)("p",null,"Result:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"}," ABS1 | ABS2 | ABS3 \n------+------+------\n    1 |    1 |    1 \n")),(0,l.yg)("h3",{id:"example-2-using-abs-with-float-values"},"Example 2: Using ABS with float values"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT ABS(1.0) AS ABS1, \n       ABS(-1.0) AS ABS2, \n       ABS(+1.0) AS ABS3 \nFROM SingleItem;\n")),(0,l.yg)("p",null,"Result:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"}," ABS1 | ABS2 | ABS3 \n------+------+------\n  1.0 |  1.0 |  1.0 \n")),(0,l.yg)("h3",{id:"example-3-using-abs-with-table-columns"},"Example 3: Using ABS with table columns"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT ABS(id) AS ABS1, \n       ABS(int8) AS ABS2, \n       ABS(dec) AS ABS3 \nFROM SingleItem;\n")),(0,l.yg)("p",null,"Result:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"}," ABS1 | ABS2 | ABS3 \n------+------+------\n    0 |    1 |    2 \n")),(0,l.yg)("h3",{id:"example-4-using-abs-with-null-values"},"Example 4: Using ABS with NULL values"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT ABS(NULL) AS ABS FROM SingleItem;\n")),(0,l.yg)("p",null,"Result:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"  ABS  \n-------\n (null)\n")),(0,l.yg)("h2",{id:"errors"},"Errors"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"ABS")," function requires a numeric value as its argument. Using non-numeric values or more than one argument will result in an error."),(0,l.yg)("h3",{id:"example-5-using-abs-with-non-numeric-values"},"Example 5: Using ABS with non-numeric values"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT ABS('string') AS ABS FROM SingleItem;\n")),(0,l.yg)("p",null,"Error: Function requires a numeric value."),(0,l.yg)("h3",{id:"example-6-using-abs-with-multiple-arguments"},"Example 6: Using ABS with multiple arguments"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT ABS('string', 'string2') AS ABS FROM SingleItem;\n")),(0,l.yg)("p",null,"Error: Function expects 1 argument, but 2 were provided."))}m.isMDXComponent=!0}}]);