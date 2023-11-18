"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},l="GENERATE_UUID",o={unversionedId:"sql-syntax/functions/others/generate-uuid",id:"sql-syntax/functions/others/generate-uuid",title:"GENERATE_UUID",description:"The GENERATE_UUID function is an SQL function provided by GlueSQL that generates a new UUID (Universally Unique Identifier) using the version 4 UUID algorithm. A UUID is a 128-bit value used to uniquely identify items in various computing systems. Version 4 UUIDs are randomly generated and have 122 bits of randomness, which ensures a very low probability of collisions.",source:"@site/docs/sql-syntax/functions/others/generate-uuid.md",sourceDirName:"sql-syntax/functions/others",slug:"/sql-syntax/functions/others/generate-uuid",permalink:"/docs/0.15/sql-syntax/functions/others/generate-uuid",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"CAST",permalink:"/docs/0.15/sql-syntax/functions/others/cast"},next:{title:"IFNULL",permalink:"/docs/0.15/sql-syntax/functions/others/ifnull"}},s={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Usage",id:"usage",level:2},{value:"Creating a table with a UUID column",id:"creating-a-table-with-a-uuid-column",level:3},{value:"Inserting data with a UUID column",id:"inserting-data-with-a-uuid-column",level:3},{value:"Selecting data with a UUID column",id:"selecting-data-with-a-uuid-column",level:3},{value:"Error Handling",id:"error-handling",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generate_uuid"},"GENERATE_UUID"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function is an SQL function provided by GlueSQL that generates a new UUID (Universally Unique Identifier) using the version 4 UUID algorithm. A UUID is a 128-bit value used to uniquely identify items in various computing systems. Version 4 UUIDs are randomly generated and have 122 bits of randomness, which ensures a very low probability of collisions."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GENERATE_UUID()\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"creating-a-table-with-a-uuid-column"},"Creating a table with a UUID column"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function as the default value for a UUID column in a table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE SingleItem (id UUID DEFAULT GENERATE_UUID());\n")),(0,r.kt)("p",null,"This SQL statement creates a table called ",(0,r.kt)("inlineCode",{parentName:"p"},"SingleItem")," with a column named ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of data type ",(0,r.kt)("inlineCode",{parentName:"p"},"UUID"),". The default value for the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," column is generated using the ",(0,r.kt)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function."),(0,r.kt)("h3",{id:"inserting-data-with-a-uuid-column"},"Inserting data with a UUID column"),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function directly when inserting data into a table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO SingleItem VALUES (GENERATE_UUID());\n")),(0,r.kt)("p",null,"This SQL statement inserts a new row into the ",(0,r.kt)("inlineCode",{parentName:"p"},"SingleItem")," table with a UUID value generated using the ",(0,r.kt)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function."),(0,r.kt)("h3",{id:"selecting-data-with-a-uuid-column"},"Selecting data with a UUID column"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function in a SELECT statement to generate UUIDs on the fly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT GENERATE_UUID() as uuid FROM SingleItem;\n")),(0,r.kt)("p",null,"This SQL statement selects a new UUID for each row in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SingleItem")," table."),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function does not accept any arguments. If you provide any arguments to the function, an error will be raised."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT generate_uuid(0) as uuid FROM SingleItem;\n")),(0,r.kt)("p",null,"This SQL statement will result in an error, as the ",(0,r.kt)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function does not accept any arguments."))}p.isMDXComponent=!0}}]);