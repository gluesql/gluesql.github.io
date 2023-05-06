"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(n),g=l,d=m["".concat(u,".").concat(g)]||m[g]||c[g]||r;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:l,s[1]=i;for(var o=2;o<r;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const r={},s="ABS",i={unversionedId:"sql-syntax/functions/math/abs",id:"sql-syntax/functions/math/abs",title:"ABS",description:"The ABS function is used to calculate the absolute value of a number. It takes a single numeric argument and returns the absolute value of that number. The argument can be an integer, decimal, or float value.",source:"@site/docs/sql-syntax/functions/math/abs.md",sourceDirName:"sql-syntax/functions/math",slug:"/sql-syntax/functions/math/abs",permalink:"/docs/dev/docs/sql-syntax/functions/math/abs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sqlSyntaxSidebar",previous:{title:"UPPER",permalink:"/docs/dev/docs/sql-syntax/functions/text/upper"},next:{title:"ACOS",permalink:"/docs/dev/docs/sql-syntax/functions/math/acos"}},u={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Using ABS with integer values",id:"example-1-using-abs-with-integer-values",level:3},{value:"Example 2: Using ABS with float values",id:"example-2-using-abs-with-float-values",level:3},{value:"Example 3: Using ABS with table columns",id:"example-3-using-abs-with-table-columns",level:3},{value:"Example 4: Using ABS with NULL values",id:"example-4-using-abs-with-null-values",level:3},{value:"Errors",id:"errors",level:2},{value:"Example 5: Using ABS with non-numeric values",id:"example-5-using-abs-with-non-numeric-values",level:3},{value:"Example 6: Using ABS with multiple arguments",id:"example-6-using-abs-with-multiple-arguments",level:3}],p={toc:o},m="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"abs"},"ABS"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ABS")," function is used to calculate the absolute value of a number. It takes a single numeric argument and returns the absolute value of that number. The argument can be an integer, decimal, or float value."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ABS(value)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value"),": A numeric expression for which the absolute value is to be calculated.")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"Let's consider a table named ",(0,l.kt)("inlineCode",{parentName:"p"},"SingleItem")," with the following schema:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE SingleItem (id INTEGER, int8 INT8, dec DECIMAL);\n")),(0,l.kt)("p",null,"Insert a row into the ",(0,l.kt)("inlineCode",{parentName:"p"},"SingleItem")," table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO SingleItem VALUES (0, -1, -2);\n")),(0,l.kt)("h3",{id:"example-1-using-abs-with-integer-values"},"Example 1: Using ABS with integer values"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ABS(1) AS ABS1, \n       ABS(-1) AS ABS2, \n       ABS(+1) AS ABS3 \nFROM SingleItem;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," ABS1 | ABS2 | ABS3 \n------+------+------\n    1 |    1 |    1 \n")),(0,l.kt)("h3",{id:"example-2-using-abs-with-float-values"},"Example 2: Using ABS with float values"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ABS(1.0) AS ABS1, \n       ABS(-1.0) AS ABS2, \n       ABS(+1.0) AS ABS3 \nFROM SingleItem;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," ABS1 | ABS2 | ABS3 \n------+------+------\n  1.0 |  1.0 |  1.0 \n")),(0,l.kt)("h3",{id:"example-3-using-abs-with-table-columns"},"Example 3: Using ABS with table columns"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ABS(id) AS ABS1, \n       ABS(int8) AS ABS2, \n       ABS(dec) AS ABS3 \nFROM SingleItem;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," ABS1 | ABS2 | ABS3 \n------+------+------\n    0 |    1 |    2 \n")),(0,l.kt)("h3",{id:"example-4-using-abs-with-null-values"},"Example 4: Using ABS with NULL values"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ABS(NULL) AS ABS FROM SingleItem;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  ABS  \n-------\n (null)\n")),(0,l.kt)("h2",{id:"errors"},"Errors"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ABS")," function requires a numeric value as its argument. Using non-numeric values or more than one argument will result in an error."),(0,l.kt)("h3",{id:"example-5-using-abs-with-non-numeric-values"},"Example 5: Using ABS with non-numeric values"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ABS('string') AS ABS FROM SingleItem;\n")),(0,l.kt)("p",null,"Error: Function requires a numeric value."),(0,l.kt)("h3",{id:"example-6-using-abs-with-multiple-arguments"},"Example 6: Using ABS with multiple arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ABS('string', 'string2') AS ABS FROM SingleItem;\n")),(0,l.kt)("p",null,"Error: Function expects 1 argument, but 2 were provided."))}c.isMDXComponent=!0}}]);