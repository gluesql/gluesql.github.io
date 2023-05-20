"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(n),c=l,y=d["".concat(s,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:5},o="ALTER TABLE",i={unversionedId:"sql-syntax/statements/data-definition/alter-table",id:"sql-syntax/statements/data-definition/alter-table",title:"ALTER TABLE",description:"The ALTER TABLE statement is an SQL command used to modify the structure of an existing table in a database. This operation is useful when you need to add, remove, or modify columns or constraints in a table. In this document, we'll explain the syntax and usage of the ALTER TABLE statement, including the RENAME, ADD COLUMN, and DROP COLUMN clauses.",source:"@site/docs/sql-syntax/statements/data-definition/alter-table.md",sourceDirName:"sql-syntax/statements/data-definition",slug:"/sql-syntax/statements/data-definition/alter-table",permalink:"/docs/dev/sql-syntax/statements/data-definition/alter-table",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sqlSyntaxSidebar",previous:{title:"DROP INDEX",permalink:"/docs/dev/sql-syntax/statements/data-definition/drop-index"},next:{title:"INSERT",permalink:"/docs/dev/sql-syntax/statements/data-manipulation/insert"}},s={},m=[{value:"Syntax",id:"syntax",level:2},{value:"RENAME",id:"rename",level:3},{value:"ADD COLUMN",id:"add-column",level:3},{value:"DROP COLUMN",id:"drop-column",level:3},{value:"Examples",id:"examples",level:2},{value:"Summary",id:"summary",level:2}],p={toc:m},d="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"alter-table"},"ALTER TABLE"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," statement is an SQL command used to modify the structure of an existing table in a database. This operation is useful when you need to add, remove, or modify columns or constraints in a table. In this document, we'll explain the syntax and usage of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," statement, including the ",(0,l.kt)("inlineCode",{parentName:"p"},"RENAME"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ADD COLUMN"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"DROP COLUMN")," clauses."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,"The basic syntax for the ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," statement is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name action;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"table_name"),": The name of the table you want to alter."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"action"),": The action you want to perform on the table, such as renaming the table, adding a new column, or dropping an existing column.")),(0,l.kt)("h3",{id:"rename"},"RENAME"),(0,l.kt)("p",null,"To rename a table or a column, use the following syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name RENAME [TO new_table_name | COLUMN column_name TO new_column_name];\n")),(0,l.kt)("h3",{id:"add-column"},"ADD COLUMN"),(0,l.kt)("p",null,"To add a new column to a table, use the following syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name ADD COLUMN column_name datatype [DEFAULT default_value] [NOT NULL] [UNIQUE];\n")),(0,l.kt)("h3",{id:"drop-column"},"DROP COLUMN"),(0,l.kt)("p",null,"To drop an existing column from a table, use the following syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name DROP COLUMN column_name;\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Renaming a table:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE employees RENAME TO staff;\n")),(0,l.kt)("p",null,"This command will rename the ",(0,l.kt)("inlineCode",{parentName:"p"},"employees")," table to ",(0,l.kt)("inlineCode",{parentName:"p"},"staff"),"."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Renaming a column:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE employees RENAME COLUMN first_name TO given_name;\n")),(0,l.kt)("p",null,"This command will rename the ",(0,l.kt)("inlineCode",{parentName:"p"},"first_name")," column to ",(0,l.kt)("inlineCode",{parentName:"p"},"given_name")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"employees")," table."),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Adding a new column:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE employees ADD COLUMN department TEXT;\n")),(0,l.kt)("p",null,"This command will add a new ",(0,l.kt)("inlineCode",{parentName:"p"},"department")," column with the ",(0,l.kt)("inlineCode",{parentName:"p"},"TEXT")," datatype to the ",(0,l.kt)("inlineCode",{parentName:"p"},"employees")," table."),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Adding a new column with a default value:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE employees ADD COLUMN active BOOLEAN DEFAULT true;\n")),(0,l.kt)("p",null,"This command will add a new ",(0,l.kt)("inlineCode",{parentName:"p"},"active")," column with the ",(0,l.kt)("inlineCode",{parentName:"p"},"BOOLEAN")," datatype and a default value of ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"employees")," table."),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Dropping a column:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE employees DROP COLUMN department;\n")),(0,l.kt)("p",null,"This command will remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"department")," column from the ",(0,l.kt)("inlineCode",{parentName:"p"},"employees")," table."),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," statement is an essential SQL command that allows you to modify the structure of an existing table in a database. It supports renaming tables and columns, adding new columns with optional default values and constraints, and dropping existing columns. By understanding the ",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," syntax, you can efficiently manage your database schema and make necessary changes to your tables as your data requirements evolve."))}u.isMDXComponent=!0}}]);