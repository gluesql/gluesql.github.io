"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},i="INET",o={unversionedId:"sql-syntax/data-types/inet",id:"sql-syntax/data-types/inet",title:"INET",description:"The INET data type in SQL is used to store IPv4 and IPv6 addresses. These addresses can be compared, filtered, and sorted using standard SQL operations.",source:"@site/docs/sql-syntax/data-types/inet.md",sourceDirName:"sql-syntax/data-types",slug:"/sql-syntax/data-types/inet",permalink:"/docs/sql-syntax/data-types/inet",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sqlSyntaxSidebar",previous:{title:"BYTEA",permalink:"/docs/sql-syntax/data-types/bytea"},next:{title:"UUID",permalink:"/docs/sql-syntax/data-types/uuid"}},s={},u=[{value:"Creating a table with an INET column",id:"creating-a-table-with-an-inet-column",level:2},{value:"Inserting data into the INET column",id:"inserting-data-into-the-inet-column",level:2},{value:"Querying data from the INET column",id:"querying-data-from-the-inet-column",level:2},{value:"Filtering data using the INET column",id:"filtering-data-using-the-inet-column",level:2},{value:"Querying for specific IP addresses",id:"querying-for-specific-ip-addresses",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inet"},"INET"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"INET")," data type in SQL is used to store IPv4 and IPv6 addresses. These addresses can be compared, filtered, and sorted using standard SQL operations."),(0,a.kt)("p",null,"Here's an example of how to create a table, insert data, and query data using the ",(0,a.kt)("inlineCode",{parentName:"p"},"INET")," data type:"),(0,a.kt)("h2",{id:"creating-a-table-with-an-inet-column"},"Creating a table with an INET column"),(0,a.kt)("p",null,"To create a table with an INET column, use the following SQL syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE computer (ip INET);\n")),(0,a.kt)("h2",{id:"inserting-data-into-the-inet-column"},"Inserting data into the INET column"),(0,a.kt)("p",null,"To insert data into the INET column, provide the IP addresses as strings or integers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO computer VALUES\n    ('::1'),\n    ('127.0.0.1'),\n    ('0.0.0.0'),\n    (4294967295),\n    (9876543210);\n")),(0,a.kt)("h2",{id:"querying-data-from-the-inet-column"},"Querying data from the INET column"),(0,a.kt)("p",null,"To query data from the INET column, use standard SQL syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM computer;\n")),(0,a.kt)("p",null,"This query will return the following result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ip\n-----------------\n::1\n127.0.0.1\n0.0.0.0\n255.255.255.255\n::2:4cb0:16ea\n")),(0,a.kt)("h2",{id:"filtering-data-using-the-inet-column"},"Filtering data using the INET column"),(0,a.kt)("p",null,"You can filter data using the INET column with standard SQL operators:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM computer WHERE ip > '127.0.0.1';\n")),(0,a.kt)("p",null,"This query will return the following result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ip\n-----------------\n::1\n255.255.255.255\n::2:4cb0:16ea\n")),(0,a.kt)("h2",{id:"querying-for-specific-ip-addresses"},"Querying for specific IP addresses"),(0,a.kt)("p",null,"To query for specific IP addresses, use the following syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM computer WHERE ip = '127.0.0.1';\n")),(0,a.kt)("p",null,"This query will return the following result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ip\n---------\n127.0.0.1\n")))}d.isMDXComponent=!0}}]);