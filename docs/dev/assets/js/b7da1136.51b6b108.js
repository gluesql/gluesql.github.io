"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4602],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=u(t),c=a,m=g["".concat(s,".").concat(c)]||g[c]||y[c]||l;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[g]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(8168),a=(t(6540),t(5680));const l={sidebar_position:3},i="LIMIT & OFFSET",o={unversionedId:"sql-syntax/statements/querying/limit",id:"sql-syntax/statements/querying/limit",title:"LIMIT & OFFSET",description:"LIMIT and OFFSET are SQL clauses that allow you to control the number of rows returned by a SELECT statement. They are particularly useful when you need to paginate or retrieve a specific portion of the result set.",source:"@site/docs/sql-syntax/statements/querying/limit.md",sourceDirName:"sql-syntax/statements/querying",slug:"/sql-syntax/statements/querying/limit",permalink:"/docs/dev/sql-syntax/statements/querying/limit",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"autoSidebar",previous:{title:"JOIN",permalink:"/docs/dev/sql-syntax/statements/querying/join"},next:{title:"Aggregation",permalink:"/docs/dev/sql-syntax/statements/querying/aggregation"}},s={},u=[{value:"LIMIT",id:"limit",level:2},{value:"OFFSET",id:"offset",level:2},{value:"Examples",id:"examples",level:2},{value:"Using LIMIT",id:"using-limit",level:3},{value:"Using LIMIT and OFFSET",id:"using-limit-and-offset",level:3},{value:"Using OFFSET without LIMIT",id:"using-offset-without-limit",level:3}],p={toc:u},g="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"limit--offset"},"LIMIT & OFFSET"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"LIMIT")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"OFFSET")," are SQL clauses that allow you to control the number of rows returned by a ",(0,a.yg)("inlineCode",{parentName:"p"},"SELECT")," statement. They are particularly useful when you need to paginate or retrieve a specific portion of the result set."),(0,a.yg)("h2",{id:"limit"},"LIMIT"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"LIMIT")," clause restricts the number of rows returned by a query. The syntax for using ",(0,a.yg)("inlineCode",{parentName:"p"},"LIMIT")," is:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT columns FROM table_name\nLIMIT number_of_rows;\n")),(0,a.yg)("h2",{id:"offset"},"OFFSET"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"OFFSET")," clause is used in combination with ",(0,a.yg)("inlineCode",{parentName:"p"},"LIMIT")," to skip a specific number of rows before starting to return the rows. The syntax for using ",(0,a.yg)("inlineCode",{parentName:"p"},"OFFSET")," is:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT columns FROM table_name\nLIMIT number_of_rows\nOFFSET number_of_rows_to_skip;\n")),(0,a.yg)("p",null,"You can also use ",(0,a.yg)("inlineCode",{parentName:"p"},"OFFSET")," without ",(0,a.yg)("inlineCode",{parentName:"p"},"LIMIT"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT columns FROM table_name\nOFFSET number_of_rows_to_skip;\n")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("p",null,"Consider the following ",(0,a.yg)("inlineCode",{parentName:"p"},"Test")," table:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Test (\n    id INTEGER\n);\n")),(0,a.yg)("p",null,"With the following records:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Test VALUES (1), (2), (3), (4), (5), (6), (7), (8);\n")),(0,a.yg)("h3",{id:"using-limit"},"Using LIMIT"),(0,a.yg)("p",null,"Retrieve the first 3 rows from the ",(0,a.yg)("inlineCode",{parentName:"p"},"Test")," table:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Test LIMIT 3;\n")),(0,a.yg)("p",null,"Result:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"id\n---\n1\n2\n3\n")),(0,a.yg)("h3",{id:"using-limit-and-offset"},"Using LIMIT and OFFSET"),(0,a.yg)("p",null,"Retrieve the next 4 rows after the first 3 rows from the ",(0,a.yg)("inlineCode",{parentName:"p"},"Test")," table:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Test LIMIT 4 OFFSET 3;\n")),(0,a.yg)("p",null,"Result:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"id\n---\n4\n5\n6\n7\n")),(0,a.yg)("h3",{id:"using-offset-without-limit"},"Using OFFSET without LIMIT"),(0,a.yg)("p",null,"Retrieve all rows after the first 2 rows from the ",(0,a.yg)("inlineCode",{parentName:"p"},"Test")," table:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Test OFFSET 2;\n")),(0,a.yg)("p",null,"Result:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"id\n---\n3\n4\n5\n6\n7\n8\n")))}y.isMDXComponent=!0}}]);