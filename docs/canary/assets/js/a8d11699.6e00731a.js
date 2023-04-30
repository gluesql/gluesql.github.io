"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>T});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=i,T=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(T,l(l({ref:t},p),{},{components:n})):a.createElement(T,l({ref:t},p))}));function T(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:7},l="TIMESTAMP",o={unversionedId:"sql-syntax/data-types/timestamp",id:"sql-syntax/data-types/timestamp",title:"TIMESTAMP",description:"In GlueSQL, the TIMESTAMP data type is used to store date and time values in the format 'YYYY-MM-DD HHSS.SSSS'. Although timezone information can be included in the input string, GlueSQL stores all TIMESTAMP values in UTC, discarding the timezone information.",source:"@site/docs/sql-syntax/data-types/timestamp.md",sourceDirName:"sql-syntax/data-types",slug:"/sql-syntax/data-types/timestamp",permalink:"/docs/sql-syntax/data-types/timestamp",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sqlSyntaxSidebar",previous:{title:"DATE",permalink:"/docs/sql-syntax/data-types/date"},next:{title:"TIME",permalink:"/docs/sql-syntax/data-types/time"}},s={},m=[{value:"Creating a table with TIMESTAMP columns",id:"creating-a-table-with-timestamp-columns",level:2},{value:"Inserting data into a table with TIMESTAMP columns",id:"inserting-data-into-a-table-with-timestamp-columns",level:2},{value:"Querying data from a table with TIMESTAMP columns",id:"querying-data-from-a-table-with-timestamp-columns",level:2},{value:"Filtering data using TIMESTAMP columns",id:"filtering-data-using-timestamp-columns",level:2},{value:"Performing timestamp arithmetic",id:"performing-timestamp-arithmetic",level:2},{value:"Handling invalid timestamp values",id:"handling-invalid-timestamp-values",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"timestamp"},"TIMESTAMP"),(0,i.kt)("p",null,"In GlueSQL, the ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," data type is used to store date and time values in the format 'YYYY-MM-DD HH:MM:SS.SSSS'. Although timezone information can be included in the input string, GlueSQL stores all ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," values in UTC, discarding the timezone information."),(0,i.kt)("h2",{id:"creating-a-table-with-timestamp-columns"},"Creating a table with TIMESTAMP columns"),(0,i.kt)("p",null,"To create a table with columns of type ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP"),", use the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE TimestampLog (\n    id INTEGER,\n    t1 TIMESTAMP,\n    t2 TIMESTAMP\n);\n")),(0,i.kt)("h2",{id:"inserting-data-into-a-table-with-timestamp-columns"},"Inserting data into a table with TIMESTAMP columns"),(0,i.kt)("p",null,"To insert data into a table with ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," columns, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO")," statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TimestampLog VALUES\n    (1, '2020-06-11 11:23:11Z',           '2021-03-01'),\n    (2, '2020-09-30 12:00:00 -07:00',     '1989-01-01T00:01:00+09:00'),\n    (3, '2021-04-30T07:00:00.1234-17:00', '2021-05-01T09:00:00.1234+09:00');\n")),(0,i.kt)("p",null,"The input strings include timezone information, but GlueSQL will convert and store them as UTC timestamps."),(0,i.kt)("h2",{id:"querying-data-from-a-table-with-timestamp-columns"},"Querying data from a table with TIMESTAMP columns"),(0,i.kt)("p",null,"To query data from a table with ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," columns, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id, t1, t2 FROM TimestampLog;\n")),(0,i.kt)("h2",{id:"filtering-data-using-timestamp-columns"},"Filtering data using TIMESTAMP columns"),(0,i.kt)("p",null,"You can use various comparison operators like ",(0,i.kt)("inlineCode",{parentName:"p"},">"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,i.kt)("inlineCode",{parentName:"p"},">="),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," to filter data based on ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," columns:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM TimestampLog WHERE t1 > t2;\n\nSELECT * FROM TimestampLog WHERE t1 = t2;\n\nSELECT * FROM TimestampLog WHERE t1 = '2020-06-11T14:23:11+0300';\n\nSELECT * FROM TimestampLog WHERE t2 < TIMESTAMP '2000-01-01';\n")),(0,i.kt)("h2",{id:"performing-timestamp-arithmetic"},"Performing timestamp arithmetic"),(0,i.kt)("p",null,"You can perform arithmetic operations on ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," columns using ",(0,i.kt)("inlineCode",{parentName:"p"},"INTERVAL"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id, t1 - t2 AS timestamp_sub FROM TimestampLog;\n\nSELECT\n    id,\n    t1 - INTERVAL '1' DAY AS sub,\n    t2 + INTERVAL '1' MONTH AS add\nFROM TimestampLog;\n")),(0,i.kt)("h2",{id:"handling-invalid-timestamp-values"},"Handling invalid timestamp values"),(0,i.kt)("p",null,"If you try to insert an invalid timestamp value into a ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," column, GlueSQL will return an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TimestampLog VALUES (1, '12345-678', '2021-05-01');\n")),(0,i.kt)("p",null,"This will result in an error similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"failed to parse timestamp: 12345-678\n")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In GlueSQL, the TIMESTAMP data type allows you to store date and time values with precision up to milliseconds. The provided code snippet demonstrates how to create a table with TIMESTAMP columns, insert data into it, and perform various queries and operations on the data. When inserting a TIMESTAMP value, the timezone information is removed, and the data is stored in UTC. This ensures that all time values are consistent and can be easily converted to different time zones when needed."))}d.isMDXComponent=!0}}]);