"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:3},i="LIMIT & OFFSET",o={unversionedId:"sql-syntax/statements/querying/limit",id:"sql-syntax/statements/querying/limit",title:"LIMIT & OFFSET",description:"LIMIT and OFFSET are SQL clauses that allow you to control the number of rows returned by a SELECT statement. They are particularly useful when you need to paginate or retrieve a specific portion of the result set.",source:"@site/docs/sql-syntax/statements/querying/limit.md",sourceDirName:"sql-syntax/statements/querying",slug:"/sql-syntax/statements/querying/limit",permalink:"/docs/0.14/sql-syntax/statements/querying/limit",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"autoSidebar",previous:{title:"JOIN",permalink:"/docs/0.14/sql-syntax/statements/querying/join"},next:{title:"Aggregation",permalink:"/docs/0.14/sql-syntax/statements/querying/aggregation"}},s={},u=[{value:"LIMIT",id:"limit",level:2},{value:"OFFSET",id:"offset",level:2},{value:"Examples",id:"examples",level:2},{value:"Using LIMIT",id:"using-limit",level:3},{value:"Using LIMIT and OFFSET",id:"using-limit-and-offset",level:3},{value:"Using OFFSET without LIMIT",id:"using-offset-without-limit",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"limit--offset"},"LIMIT & OFFSET"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," are SQL clauses that allow you to control the number of rows returned by a ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," statement. They are particularly useful when you need to paginate or retrieve a specific portion of the result set."),(0,a.kt)("h2",{id:"limit"},"LIMIT"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," clause restricts the number of rows returned by a query. The syntax for using ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT columns FROM table_name\nLIMIT number_of_rows;\n")),(0,a.kt)("h2",{id:"offset"},"OFFSET"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," clause is used in combination with ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," to skip a specific number of rows before starting to return the rows. The syntax for using ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT columns FROM table_name\nLIMIT number_of_rows\nOFFSET number_of_rows_to_skip;\n")),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," without ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT columns FROM table_name\nOFFSET number_of_rows_to_skip;\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Consider the following ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")," table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Test (\n    id INTEGER\n);\n")),(0,a.kt)("p",null,"With the following records:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Test VALUES (1), (2), (3), (4), (5), (6), (7), (8);\n")),(0,a.kt)("h3",{id:"using-limit"},"Using LIMIT"),(0,a.kt)("p",null,"Retrieve the first 3 rows from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")," table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Test LIMIT 3;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"id\n---\n1\n2\n3\n")),(0,a.kt)("h3",{id:"using-limit-and-offset"},"Using LIMIT and OFFSET"),(0,a.kt)("p",null,"Retrieve the next 4 rows after the first 3 rows from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")," table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Test LIMIT 4 OFFSET 3;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"id\n---\n4\n5\n6\n7\n")),(0,a.kt)("h3",{id:"using-offset-without-limit"},"Using OFFSET without LIMIT"),(0,a.kt)("p",null,"Retrieve all rows after the first 2 rows from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Test")," table:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Test OFFSET 2;\n")),(0,a.kt)("p",null,"Result:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"id\n---\n3\n4\n5\n6\n7\n8\n")))}m.isMDXComponent=!0}}]);