"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},l="NOW",o={unversionedId:"sql-syntax/functions/datetime/now",id:"sql-syntax/functions/datetime/now",title:"NOW",description:"The NOW() function in SQL returns the current date and time in UTC. You can use it to retrieve the current UTC timestamp, or as a default value for a TIMESTAMP column in a table.",source:"@site/docs/sql-syntax/functions/datetime/now.md",sourceDirName:"sql-syntax/functions/datetime",slug:"/sql-syntax/functions/datetime/now",permalink:"/docs/0.14/sql-syntax/functions/datetime/now",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"FORMAT",permalink:"/docs/0.14/sql-syntax/functions/datetime/format"},next:{title:"TO_DATE",permalink:"/docs/0.14/sql-syntax/functions/datetime/to-date"}},s={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Creating a table with a TIMESTAMP column and setting the default value to NOW()",id:"creating-a-table-with-a-timestamp-column-and-setting-the-default-value-to-now",level:3},{value:"Inserting data into the table",id:"inserting-data-into-the-table",level:3},{value:"Selecting rows where the timestamp is greater than the current timestamp",id:"selecting-rows-where-the-timestamp-is-greater-than-the-current-timestamp",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"now"},"NOW"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"NOW()")," function in SQL returns the current date and time in UTC. You can use it to retrieve the current UTC timestamp, or as a default value for a TIMESTAMP column in a table. "),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NOW()\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"creating-a-table-with-a-timestamp-column-and-setting-the-default-value-to-now"},"Creating a table with a TIMESTAMP column and setting the default value to NOW()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Item (time TIMESTAMP DEFAULT NOW());\n")),(0,r.kt)("p",null,"This creates a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," with a column ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," of the type TIMESTAMP. The default value for this column is the current UTC timestamp."),(0,r.kt)("h3",{id:"inserting-data-into-the-table"},"Inserting data into the table"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Item (time) VALUES\n    ('2021-10-13T06:42:40.364832862'),\n    ('9999-12-31T23:59:40.364832862');\n")),(0,r.kt)("p",null,"Here we're inserting two rows into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," table with specific timestamps."),(0,r.kt)("h3",{id:"selecting-rows-where-the-timestamp-is-greater-than-the-current-timestamp"},"Selecting rows where the timestamp is greater than the current timestamp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT time FROM Item WHERE time > NOW();\n")),(0,r.kt)("p",null,"This query selects the ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," column from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," table where the ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," is greater than the current UTC timestamp. In this case, the result will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"9999-12-31T23:59:40.364832862\n")))}p.isMDXComponent=!0}}]);