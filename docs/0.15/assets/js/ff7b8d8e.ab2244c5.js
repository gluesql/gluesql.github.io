"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>T});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),c=i,T=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(T,o(o({ref:t},p),{},{components:n})):a.createElement(T,o({ref:t},p))}));function T(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:8},o="TIME",l={unversionedId:"sql-syntax/data-types/time",id:"sql-syntax/data-types/time",title:"TIME",description:"In GlueSQL, the TIME data type is used to store time values in the format 'HHSS.SSS'. The code snippet provided demonstrates how to create a table with TIME columns, insert data into it, and perform various queries and operations on the data.",source:"@site/docs/sql-syntax/data-types/time.md",sourceDirName:"sql-syntax/data-types",slug:"/sql-syntax/data-types/time",permalink:"/docs/0.15/sql-syntax/data-types/time",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"autoSidebar",previous:{title:"TIMESTAMP",permalink:"/docs/0.15/sql-syntax/data-types/timestamp"},next:{title:"INTERVAL",permalink:"/docs/0.15/sql-syntax/data-types/interval"}},s={},m=[{value:"Creating a table with TIME columns",id:"creating-a-table-with-time-columns",level:2},{value:"Inserting data into a table with TIME columns",id:"inserting-data-into-a-table-with-time-columns",level:2},{value:"Querying data from a table with TIME columns",id:"querying-data-from-a-table-with-time-columns",level:2},{value:"Filtering data using TIME columns",id:"filtering-data-using-time-columns",level:2},{value:"Performing time arithmetic",id:"performing-time-arithmetic",level:2},{value:"Handling invalid time values",id:"handling-invalid-time-values",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"time"},"TIME"),(0,i.kt)("p",null,"In GlueSQL, the ",(0,i.kt)("inlineCode",{parentName:"p"},"TIME")," data type is used to store time values in the format 'HH:MM:SS.SSS'. The code snippet provided demonstrates how to create a table with ",(0,i.kt)("inlineCode",{parentName:"p"},"TIME")," columns, insert data into it, and perform various queries and operations on the data."),(0,i.kt)("h2",{id:"creating-a-table-with-time-columns"},"Creating a table with TIME columns"),(0,i.kt)("p",null,"To create a table with columns of type ",(0,i.kt)("inlineCode",{parentName:"p"},"TIME"),", use the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE TimeLog (\n    id INTEGER,\n    time1 TIME,\n    time2 TIME\n);\n")),(0,i.kt)("h2",{id:"inserting-data-into-a-table-with-time-columns"},"Inserting data into a table with TIME columns"),(0,i.kt)("p",null,"To insert data into a table with ",(0,i.kt)("inlineCode",{parentName:"p"},"TIME")," columns, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TimeLog VALUES\n    (1, '12:30:00', '13:31:01.123'),\n    (2, '9:2:1', 'AM 08:02:01.001'),\n    (3, 'PM 2:59', '9:00:00 AM');\n")),(0,i.kt)("h2",{id:"querying-data-from-a-table-with-time-columns"},"Querying data from a table with TIME columns"),(0,i.kt)("p",null,"To query data from a table with ",(0,i.kt)("inlineCode",{parentName:"p"},"TIME")," columns, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id, time1, time2 FROM TimeLog;\n")),(0,i.kt)("h2",{id:"filtering-data-using-time-columns"},"Filtering data using TIME columns"),(0,i.kt)("p",null,"You can use various comparison operators like ",(0,i.kt)("inlineCode",{parentName:"p"},">"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,i.kt)("inlineCode",{parentName:"p"},">="),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," to filter data based on ",(0,i.kt)("inlineCode",{parentName:"p"},"TIME")," columns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM TimeLog WHERE time1 > time2;\n\nSELECT * FROM TimeLog WHERE time1 <= time2;\n\nSELECT * FROM TimeLog WHERE time1 = TIME '14:59:00';\n\nSELECT * FROM TimeLog WHERE time1 < '1:00 PM';\n")),(0,i.kt)("h2",{id:"performing-time-arithmetic"},"Performing time arithmetic"),(0,i.kt)("p",null,"You can perform arithmetic operations on ",(0,i.kt)("inlineCode",{parentName:"p"},"TIME")," columns using ",(0,i.kt)("inlineCode",{parentName:"p"},"INTERVAL"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    id,\n    time1 - time2 AS time_sub,\n    time1 + INTERVAL '1' HOUR AS add,\n    time2 - INTERVAL '250' MINUTE AS sub\nFROM TimeLog;\n")),(0,i.kt)("p",null,"You can also add a ",(0,i.kt)("inlineCode",{parentName:"p"},"TIME")," column to a ",(0,i.kt)("inlineCode",{parentName:"p"},"DATE")," value to get a ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    id,\n    DATE '2021-01-05' + time2 AS timestamp\nFROM TimeLog LIMIT 1;\n")),(0,i.kt)("h2",{id:"handling-invalid-time-values"},"Handling invalid time values"),(0,i.kt)("p",null,"If you try to insert an invalid time value into a ",(0,i.kt)("inlineCode",{parentName:"p"},"TIME")," column, GlueSQL will return an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TimeLog VALUES (1, '12345-678', '20:05:01');\n")),(0,i.kt)("p",null,"This will result in an error similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"failed to parse time 12345-678\n")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In GlueSQL, the TIME data type is used to store time values in the format 'HH:MM:SS.SSS'. The provided code snippet demonstrates how to create a table with TIME columns, insert data into it, and perform various queries and operations on the data. GlueSQL supports arithmetic operations on TIME columns using INTERVAL, and you can also add a TIME column to a DATE value to get a TIMESTAMP result. Keep in mind that inserting invalid time values into a TIME column will result in an error."))}d.isMDXComponent=!0}}]);