"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>E});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,E=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(E,o(o({ref:t},p),{},{components:n})):a.createElement(E,o({ref:t},p))}));function E(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3},o="DELETE",s={unversionedId:"sql-syntax/statements/data-manipulation/delete",id:"sql-syntax/statements/data-manipulation/delete",title:"DELETE",description:"The DELETE statement is used to remove records from a table. You can delete a single row, multiple rows, or all rows at once based on specific conditions.",source:"@site/docs/sql-syntax/statements/data-manipulation/delete.md",sourceDirName:"sql-syntax/statements/data-manipulation",slug:"/sql-syntax/statements/data-manipulation/delete",permalink:"/docs/dev/docs/sql-syntax/statements/data-manipulation/delete",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sqlSyntaxSidebar",previous:{title:"UPDATE",permalink:"/docs/dev/docs/sql-syntax/statements/data-manipulation/update"},next:{title:"Transaction",permalink:"/docs/dev/docs/sql-syntax/statements/transaction"}},i={},c=[{value:"Basic DELETE Syntax",id:"basic-delete-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Deleting Records with a WHERE Clause",id:"deleting-records-with-a-where-clause",level:3},{value:"Deleting All Records",id:"deleting-all-records",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"delete"},"DELETE"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," statement is used to remove records from a table. You can delete a single row, multiple rows, or all rows at once based on specific conditions."),(0,r.kt)("h2",{id:"basic-delete-syntax"},"Basic DELETE Syntax"),(0,r.kt)("p",null,"To delete records from a table, use the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM table_name\nWHERE condition;\n")),(0,r.kt)("p",null,"If you want to delete all records from a table, you can omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM table_name;\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Consider the following ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Foo (\n    id INTEGER PRIMARY KEY,\n    score INTEGER,\n    flag BOOLEAN\n);\n")),(0,r.kt)("p",null,"With the following records:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Foo VALUES\n    (1, 100, TRUE),\n    (2, 300, FALSE),\n    (3, 700, TRUE);\n")),(0,r.kt)("h3",{id:"deleting-records-with-a-where-clause"},"Deleting Records with a WHERE Clause"),(0,r.kt)("p",null,"To delete records that meet a specific condition, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM Foo WHERE flag = FALSE;\n")),(0,r.kt)("p",null,"After executing the above query, the remaining records in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," table will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"id | score | flag\n---+-------+------\n1  | 100   | true\n3  | 700   | true\n")),(0,r.kt)("h3",{id:"deleting-all-records"},"Deleting All Records"),(0,r.kt)("p",null,"To delete all records from a table, omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM Foo;\n")),(0,r.kt)("p",null,"After executing the above query, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," table will be empty:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"id | score | flag\n(no rows)\n")))}u.isMDXComponent=!0}}]);