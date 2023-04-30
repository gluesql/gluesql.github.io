"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="FLOAT",l={unversionedId:"sql-syntax/data-types/float",id:"sql-syntax/data-types/float",title:"FLOAT",description:"The FLOAT data type in SQL is used to store floating-point numbers. In GlueSQL, the FLOAT data type represents a 64-bit floating-point number, providing the ability to store numbers with decimal values and a wide range of magnitude.",source:"@site/docs/sql-syntax/data-types/float.md",sourceDirName:"sql-syntax/data-types",slug:"/sql-syntax/data-types/float",permalink:"/docs/canary/docs/sql-syntax/data-types/float",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sqlSyntaxSidebar",previous:{title:"Integer Types",permalink:"/docs/canary/docs/sql-syntax/data-types/integers"},next:{title:"TEXT",permalink:"/docs/canary/docs/sql-syntax/data-types/text"}},s={},c=[{value:"Creating a table with a FLOAT column",id:"creating-a-table-with-a-float-column",level:2},{value:"Inserting data into the FLOAT column",id:"inserting-data-into-the-float-column",level:2},{value:"Querying data from the FLOAT column",id:"querying-data-from-the-float-column",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"float"},"FLOAT"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FLOAT")," data type in SQL is used to store floating-point numbers. In GlueSQL, the FLOAT data type represents a 64-bit floating-point number, providing the ability to store numbers with decimal values and a wide range of magnitude."),(0,r.kt)("p",null,"Here's an example of how to create a table, insert data, and query data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"FLOAT")," data type:"),(0,r.kt)("h2",{id:"creating-a-table-with-a-float-column"},"Creating a table with a FLOAT column"),(0,r.kt)("p",null,"To create a table with a FLOAT column, use the following SQL syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE product_prices (product_name TEXT, price FLOAT);\n")),(0,r.kt)("h2",{id:"inserting-data-into-the-float-column"},"Inserting data into the FLOAT column"),(0,r.kt)("p",null,"To insert data into the FLOAT column, provide the floating-point values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO product_prices (product_name, price) VALUES\n    ('Product A', 19.99),\n    ('Product B', 39.49),\n    ('Product C', 12.75);\n")),(0,r.kt)("h2",{id:"querying-data-from-the-float-column"},"Querying data from the FLOAT column"),(0,r.kt)("p",null,"To query data from the FLOAT column, use standard SQL syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT product_name, price FROM product_prices;\n")),(0,r.kt)("p",null,"This query will return the following result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"product_name | price\n-------------|-------\nProduct A    | 19.99\nProduct B    | 39.49\nProduct C    | 12.75\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FLOAT")," data type is essential for handling numeric data with decimal values and various magnitudes. By understanding the basics of the FLOAT data type and its use cases, you can effectively use it in your database designs and operations, ensuring that your applications can handle a wide range of numerical values with precision."))}d.isMDXComponent=!0}}]);