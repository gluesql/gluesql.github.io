"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7794],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>y});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),g=r,y=p["".concat(o,".").concat(g)]||p[g]||c[g]||i;return t?a.createElement(y,u(u({ref:n},s),{},{components:t})):a.createElement(y,u({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,u=new Array(i);u[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[p]="string"==typeof e?e:r,u[1]=l;for(var d=2;d<i;d++)u[d]=t[d];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(8168),r=(t(6540),t(5680));const i={},u="UUID",l={unversionedId:"sql-syntax/data-types/uuid",id:"sql-syntax/data-types/uuid",title:"UUID",description:"The UUID data type in SQL is used to store universally unique identifiers (UUIDs). These identifiers can be compared, filtered, and sorted using standard SQL operations.",source:"@site/docs/sql-syntax/data-types/uuid.md",sourceDirName:"sql-syntax/data-types",slug:"/sql-syntax/data-types/uuid",permalink:"/docs/dev/sql-syntax/data-types/uuid",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"INET",permalink:"/docs/dev/sql-syntax/data-types/inet"},next:{title:"ASCII",permalink:"/docs/dev/sql-syntax/functions/text/ascii"}},o={},d=[{value:"Creating a table with a UUID column",id:"creating-a-table-with-a-uuid-column",level:2},{value:"Inserting data into the UUID column",id:"inserting-data-into-the-uuid-column",level:2},{value:"Generating a random UUID",id:"generating-a-random-uuid",level:2},{value:"Querying data from the UUID column",id:"querying-data-from-the-uuid-column",level:2},{value:"Filtering and manipulating data using the UUID column",id:"filtering-and-manipulating-data-using-the-uuid-column",level:2}],s={toc:d},p="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"uuid"},"UUID"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"UUID")," data type in SQL is used to store universally unique identifiers (UUIDs). These identifiers can be compared, filtered, and sorted using standard SQL operations."),(0,r.yg)("p",null,"Here's an example of how to create a table, insert data, and query data using the ",(0,r.yg)("inlineCode",{parentName:"p"},"UUID")," data type:"),(0,r.yg)("h2",{id:"creating-a-table-with-a-uuid-column"},"Creating a table with a UUID column"),(0,r.yg)("p",null,"To create a table with a UUID column, use the following SQL syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE UUID (uuid_field UUID);\n")),(0,r.yg)("h2",{id:"inserting-data-into-the-uuid-column"},"Inserting data into the UUID column"),(0,r.yg)("p",null,"To insert data into the UUID column, provide the UUIDs as strings or in the format ",(0,r.yg)("inlineCode",{parentName:"p"},"X'<hexadecimal_value>'"),". You can also use the ",(0,r.yg)("inlineCode",{parentName:"p"},"urn:uuid:")," prefix. Note that providing a UUID as a plain number is not supported and will result in an error."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO UUID VALUES\n    (X'936DA01F9ABD4d9d80C702AF85C822A8'),\n    ('550e8400-e29b-41d4-a716-446655440000'),\n    ('urn:uuid:F9168C5E-CEB2-4faa-B6BF-329BF39FA1E4');\n")),(0,r.yg)("h2",{id:"generating-a-random-uuid"},"Generating a random UUID"),(0,r.yg)("p",null,"To generate a random UUID (version 4), use the ",(0,r.yg)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO UUID (uuid_field) VALUES (GENERATE_UUID());\n")),(0,r.yg)("h2",{id:"querying-data-from-the-uuid-column"},"Querying data from the UUID column"),(0,r.yg)("p",null,"To query data from the UUID column, use standard SQL syntax:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT uuid_field FROM UUID;\n")),(0,r.yg)("p",null,"This query will return the following result:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"uuid_field\n------------------------------------\n936DA01F-9ABD-4D9D-80C7-02AF85C822A8\n550E8400-E29B-41D4-A716-446655440000\nF9168C5E-CEB2-4FAA-B6BF-329BF39FA1E4\n")),(0,r.yg)("h2",{id:"filtering-and-manipulating-data-using-the-uuid-column"},"Filtering and manipulating data using the UUID column"),(0,r.yg)("p",null,"You can filter, update, and delete data using the UUID column with standard SQL operations:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- Filtering\nSELECT uuid_field FROM UUID WHERE uuid_field = '550e8400-e29b-41d4-a716-446655440000';\n\n-- Updating\nUPDATE UUID SET uuid_field = 'urn:uuid:F9168C5E-CEB2-4faa-B6BF-329BF39FA1E4' WHERE uuid_field = '550e8400-e29b-41d4-a716-446655440000';\n\n-- Deleting\nDELETE FROM UUID WHERE uuid_field = '550e8400-e29b-41d4-a716-446655440000';\n")))}c.isMDXComponent=!0}}]);