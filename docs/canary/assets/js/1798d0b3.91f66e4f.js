"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4046],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),y=r,m=u["".concat(s,".").concat(y)]||u[y]||p[y]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},4872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={},i="BYTEA",l={unversionedId:"sql-syntax/data-types/bytea",id:"sql-syntax/data-types/bytea",title:"BYTEA",description:"The BYTEA data type in SQL is used to store binary data, such as images, audio files, or any other type of data that needs to be stored in its raw form. In GlueSQL, the BYTEA data type is represented as a sequence of bytes.",source:"@site/docs/sql-syntax/data-types/bytea.md",sourceDirName:"sql-syntax/data-types",slug:"/sql-syntax/data-types/bytea",permalink:"/docs/canary/docs/sql-syntax/data-types/bytea",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sqlSyntaxSidebar",previous:{title:"MAP",permalink:"/docs/canary/docs/sql-syntax/data-types/map"},next:{title:"INET",permalink:"/docs/canary/docs/sql-syntax/data-types/inet"}},s={},d=[{value:"Creating a table with a BYTEA column",id:"creating-a-table-with-a-bytea-column",level:2},{value:"Inserting data into the BYTEA column",id:"inserting-data-into-the-bytea-column",level:2},{value:"Querying data from the BYTEA column",id:"querying-data-from-the-bytea-column",level:2},{value:"Error handling",id:"error-handling",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bytea"},"BYTEA"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BYTEA")," data type in SQL is used to store binary data, such as images, audio files, or any other type of data that needs to be stored in its raw form. In GlueSQL, the BYTEA data type is represented as a sequence of bytes."),(0,r.kt)("p",null,"Here's an example of how to create a table, insert data, and query data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"BYTEA")," data type:"),(0,r.kt)("h2",{id:"creating-a-table-with-a-bytea-column"},"Creating a table with a BYTEA column"),(0,r.kt)("p",null,"To create a table with a BYTEA column, use the following SQL syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE binary_data (data BYTEA);\n")),(0,r.kt)("h2",{id:"inserting-data-into-the-bytea-column"},"Inserting data into the BYTEA column"),(0,r.kt)("p",null,"To insert data into the BYTEA column, provide the binary data in hexadecimal format using the ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," prefix:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO binary_data (data) VALUES\n    (X'123456'),\n    (X'ab0123'),\n    (X'936DA0');\n")),(0,r.kt)("p",null,"Please note that the hexadecimal string must have an even number of characters, or an error will be thrown."),(0,r.kt)("h2",{id:"querying-data-from-the-bytea-column"},"Querying data from the BYTEA column"),(0,r.kt)("p",null,"To query data from the BYTEA column, use standard SQL syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT data FROM binary_data;\n")),(0,r.kt)("p",null,"This query will return the following result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"data\n----------------\n123456\nab0123\n936DA0\n")),(0,r.kt)("h2",{id:"error-handling"},"Error handling"),(0,r.kt)("p",null,"When inserting data into the BYTEA column, you may encounter errors due to incompatible data types or incorrectly formatted hexadecimal strings. For example, inserting a regular integer or an odd-length hexadecimal string will result in an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO binary_data (data) VALUES (0);\n-- Error: Incompatible literal for data type BYTEA\n\nINSERT INTO binary_data (data) VALUES (X'123');\n-- Error: Failed to decode hexadecimal string\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BYTEA")," data type is essential for storing binary data in SQL databases. By understanding the basics of the BYTEA data type and its use cases, you can effectively use it in your database designs and operations, ensuring that your applications can manage binary data efficiently and securely."))}p.isMDXComponent=!0}}]);