"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(f,u(u({ref:t},s),{},{components:n})):a.createElement(f,u({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,u[1]=l;for(var d=2;d<i;d++)u[d]=n[d];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},u="UUID",l={unversionedId:"sql-syntax/data-types/uuid",id:"sql-syntax/data-types/uuid",title:"UUID",description:"The UUID data type in SQL is used to store universally unique identifiers (UUIDs). These identifiers can be compared, filtered, and sorted using standard SQL operations.",source:"@site/docs/sql-syntax/data-types/uuid.md",sourceDirName:"sql-syntax/data-types",slug:"/sql-syntax/data-types/uuid",permalink:"/docs/dev/sql-syntax/data-types/uuid",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"INET",permalink:"/docs/dev/sql-syntax/data-types/inet"},next:{title:"ASCII",permalink:"/docs/dev/sql-syntax/functions/text/ascii"}},o={},d=[{value:"Creating a table with a UUID column",id:"creating-a-table-with-a-uuid-column",level:2},{value:"Inserting data into the UUID column",id:"inserting-data-into-the-uuid-column",level:2},{value:"Generating a random UUID",id:"generating-a-random-uuid",level:2},{value:"Querying data from the UUID column",id:"querying-data-from-the-uuid-column",level:2},{value:"Filtering and manipulating data using the UUID column",id:"filtering-and-manipulating-data-using-the-uuid-column",level:2}],s={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uuid"},"UUID"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"UUID")," data type in SQL is used to store universally unique identifiers (UUIDs). These identifiers can be compared, filtered, and sorted using standard SQL operations."),(0,r.kt)("p",null,"Here's an example of how to create a table, insert data, and query data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"UUID")," data type:"),(0,r.kt)("h2",{id:"creating-a-table-with-a-uuid-column"},"Creating a table with a UUID column"),(0,r.kt)("p",null,"To create a table with a UUID column, use the following SQL syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE UUID (uuid_field UUID);\n")),(0,r.kt)("h2",{id:"inserting-data-into-the-uuid-column"},"Inserting data into the UUID column"),(0,r.kt)("p",null,"To insert data into the UUID column, provide the UUIDs as strings or in the format ",(0,r.kt)("inlineCode",{parentName:"p"},"X'<hexadecimal_value>'"),". You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"urn:uuid:")," prefix. Note that providing a UUID as a plain number is not supported and will result in an error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO UUID VALUES\n    (X'936DA01F9ABD4d9d80C702AF85C822A8'),\n    ('550e8400-e29b-41d4-a716-446655440000'),\n    ('urn:uuid:F9168C5E-CEB2-4faa-B6BF-329BF39FA1E4');\n")),(0,r.kt)("h2",{id:"generating-a-random-uuid"},"Generating a random UUID"),(0,r.kt)("p",null,"To generate a random UUID (version 4), use the ",(0,r.kt)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO UUID (uuid_field) VALUES (GENERATE_UUID());\n")),(0,r.kt)("h2",{id:"querying-data-from-the-uuid-column"},"Querying data from the UUID column"),(0,r.kt)("p",null,"To query data from the UUID column, use standard SQL syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT uuid_field FROM UUID;\n")),(0,r.kt)("p",null,"This query will return the following result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"uuid_field\n------------------------------------\n936DA01F-9ABD-4D9D-80C7-02AF85C822A8\n550E8400-E29B-41D4-A716-446655440000\nF9168C5E-CEB2-4FAA-B6BF-329BF39FA1E4\n")),(0,r.kt)("h2",{id:"filtering-and-manipulating-data-using-the-uuid-column"},"Filtering and manipulating data using the UUID column"),(0,r.kt)("p",null,"You can filter, update, and delete data using the UUID column with standard SQL operations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Filtering\nSELECT uuid_field FROM UUID WHERE uuid_field = '550e8400-e29b-41d4-a716-446655440000';\n\n-- Updating\nUPDATE UUID SET uuid_field = 'urn:uuid:F9168C5E-CEB2-4faa-B6BF-329BF39FA1E4' WHERE uuid_field = '550e8400-e29b-41d4-a716-446655440000';\n\n-- Deleting\nDELETE FROM UUID WHERE uuid_field = '550e8400-e29b-41d4-a716-446655440000';\n")))}c.isMDXComponent=!0}}]);