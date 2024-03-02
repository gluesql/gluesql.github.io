"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7814],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,y=d["".concat(s,".").concat(p)]||d[p]||g[p]||i;return t?a.createElement(y,l(l({ref:n},c),{},{components:t})):a.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=t(8168),r=(t(6540),t(5680));const i={},l="GENERATE_UUID",o={unversionedId:"sql-syntax/functions/others/generate-uuid",id:"sql-syntax/functions/others/generate-uuid",title:"GENERATE_UUID",description:"The GENERATE_UUID function is an SQL function provided by GlueSQL that generates a new UUID (Universally Unique Identifier) using the version 4 UUID algorithm. A UUID is a 128-bit value used to uniquely identify items in various computing systems. Version 4 UUIDs are randomly generated and have 122 bits of randomness, which ensures a very low probability of collisions.",source:"@site/docs/sql-syntax/functions/others/generate-uuid.md",sourceDirName:"sql-syntax/functions/others",slug:"/sql-syntax/functions/others/generate-uuid",permalink:"/docs/dev/sql-syntax/functions/others/generate-uuid",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"CAST",permalink:"/docs/dev/sql-syntax/functions/others/cast"},next:{title:"IFNULL",permalink:"/docs/dev/sql-syntax/functions/others/ifnull"}},s={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Usage",id:"usage",level:2},{value:"Creating a table with a UUID column",id:"creating-a-table-with-a-uuid-column",level:3},{value:"Inserting data with a UUID column",id:"inserting-data-with-a-uuid-column",level:3},{value:"Selecting data with a UUID column",id:"selecting-data-with-a-uuid-column",level:3},{value:"Error Handling",id:"error-handling",level:2}],c={toc:u},d="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"generate_uuid"},"GENERATE_UUID"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function is an SQL function provided by GlueSQL that generates a new UUID (Universally Unique Identifier) using the version 4 UUID algorithm. A UUID is a 128-bit value used to uniquely identify items in various computing systems. Version 4 UUIDs are randomly generated and have 122 bits of randomness, which ensures a very low probability of collisions."),(0,r.yg)("h2",{id:"syntax"},"Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GENERATE_UUID()\n")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("h3",{id:"creating-a-table-with-a-uuid-column"},"Creating a table with a UUID column"),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function as the default value for a UUID column in a table."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE SingleItem (id UUID DEFAULT GENERATE_UUID());\n")),(0,r.yg)("p",null,"This SQL statement creates a table called ",(0,r.yg)("inlineCode",{parentName:"p"},"SingleItem")," with a column named ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," of data type ",(0,r.yg)("inlineCode",{parentName:"p"},"UUID"),". The default value for the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," column is generated using the ",(0,r.yg)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function."),(0,r.yg)("h3",{id:"inserting-data-with-a-uuid-column"},"Inserting data with a UUID column"),(0,r.yg)("p",null,"You can also use the ",(0,r.yg)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function directly when inserting data into a table."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO SingleItem VALUES (GENERATE_UUID());\n")),(0,r.yg)("p",null,"This SQL statement inserts a new row into the ",(0,r.yg)("inlineCode",{parentName:"p"},"SingleItem")," table with a UUID value generated using the ",(0,r.yg)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function."),(0,r.yg)("h3",{id:"selecting-data-with-a-uuid-column"},"Selecting data with a UUID column"),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function in a SELECT statement to generate UUIDs on the fly."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT GENERATE_UUID() as uuid FROM SingleItem;\n")),(0,r.yg)("p",null,"This SQL statement selects a new UUID for each row in the ",(0,r.yg)("inlineCode",{parentName:"p"},"SingleItem")," table."),(0,r.yg)("h2",{id:"error-handling"},"Error Handling"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function does not accept any arguments. If you provide any arguments to the function, an error will be raised."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT generate_uuid(0) as uuid FROM SingleItem;\n")),(0,r.yg)("p",null,"This SQL statement will result in an error, as the ",(0,r.yg)("inlineCode",{parentName:"p"},"GENERATE_UUID")," function does not accept any arguments."))}g.isMDXComponent=!0}}]);