"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4887],{5680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>c});var t=a(6540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=t.createContext({}),m=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=m(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(a),y=l,c=d["".concat(s,".").concat(y)]||d[y]||u[y]||r;return a?t.createElement(c,o(o({ref:n},p),{},{components:a})):t.createElement(c,o({ref:n},p))}));function c(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=a[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},9326:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var t=a(8168),l=(a(6540),a(5680));const r={sidebar_position:5},o="ALTER TABLE",i={unversionedId:"sql-syntax/statements/data-definition/alter-table",id:"sql-syntax/statements/data-definition/alter-table",title:"ALTER TABLE",description:"The ALTER TABLE statement is an SQL command used to modify the structure of an existing table in a database. This operation is useful when you need to add, remove, or modify columns or constraints in a table. In this document, we'll explain the syntax and usage of the ALTER TABLE statement, including the RENAME, ADD COLUMN, and DROP COLUMN clauses.",source:"@site/docs/sql-syntax/statements/data-definition/alter-table.md",sourceDirName:"sql-syntax/statements/data-definition",slug:"/sql-syntax/statements/data-definition/alter-table",permalink:"/docs/dev/sql-syntax/statements/data-definition/alter-table",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"autoSidebar",previous:{title:"DROP INDEX",permalink:"/docs/dev/sql-syntax/statements/data-definition/drop-index"},next:{title:"INSERT",permalink:"/docs/dev/sql-syntax/statements/data-manipulation/insert"}},s={},m=[{value:"Syntax",id:"syntax",level:2},{value:"RENAME",id:"rename",level:3},{value:"ADD COLUMN",id:"add-column",level:3},{value:"DROP COLUMN",id:"drop-column",level:3},{value:"Examples",id:"examples",level:2},{value:"Summary",id:"summary",level:2}],p={toc:m},d="wrapper";function u(e){let{components:n,...a}=e;return(0,l.yg)(d,(0,t.A)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"alter-table"},"ALTER TABLE"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"ALTER TABLE")," statement is an SQL command used to modify the structure of an existing table in a database. This operation is useful when you need to add, remove, or modify columns or constraints in a table. In this document, we'll explain the syntax and usage of the ",(0,l.yg)("inlineCode",{parentName:"p"},"ALTER TABLE")," statement, including the ",(0,l.yg)("inlineCode",{parentName:"p"},"RENAME"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"ADD COLUMN"),", and ",(0,l.yg)("inlineCode",{parentName:"p"},"DROP COLUMN")," clauses."),(0,l.yg)("h2",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,"The basic syntax for the ",(0,l.yg)("inlineCode",{parentName:"p"},"ALTER TABLE")," statement is as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name action;\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"table_name"),": The name of the table you want to alter."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"action"),": The action you want to perform on the table, such as renaming the table, adding a new column, or dropping an existing column.")),(0,l.yg)("h3",{id:"rename"},"RENAME"),(0,l.yg)("p",null,"To rename a table or a column, use the following syntax:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name RENAME [TO new_table_name | COLUMN column_name TO new_column_name];\n")),(0,l.yg)("h3",{id:"add-column"},"ADD COLUMN"),(0,l.yg)("p",null,"To add a new column to a table, use the following syntax:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name ADD COLUMN column_name datatype [DEFAULT default_value] [NOT NULL] [UNIQUE];\n")),(0,l.yg)("h3",{id:"drop-column"},"DROP COLUMN"),(0,l.yg)("p",null,"To drop an existing column from a table, use the following syntax:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE table_name DROP COLUMN column_name;\n")),(0,l.yg)("h2",{id:"examples"},"Examples"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"Renaming a table:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE employees RENAME TO staff;\n")),(0,l.yg)("p",null,"This command will rename the ",(0,l.yg)("inlineCode",{parentName:"p"},"employees")," table to ",(0,l.yg)("inlineCode",{parentName:"p"},"staff"),"."),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"Renaming a column:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE employees RENAME COLUMN first_name TO given_name;\n")),(0,l.yg)("p",null,"This command will rename the ",(0,l.yg)("inlineCode",{parentName:"p"},"first_name")," column to ",(0,l.yg)("inlineCode",{parentName:"p"},"given_name")," in the ",(0,l.yg)("inlineCode",{parentName:"p"},"employees")," table."),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"Adding a new column:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE employees ADD COLUMN department TEXT;\n")),(0,l.yg)("p",null,"This command will add a new ",(0,l.yg)("inlineCode",{parentName:"p"},"department")," column with the ",(0,l.yg)("inlineCode",{parentName:"p"},"TEXT")," datatype to the ",(0,l.yg)("inlineCode",{parentName:"p"},"employees")," table."),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"Adding a new column with a default value:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE employees ADD COLUMN active BOOLEAN DEFAULT true;\n")),(0,l.yg)("p",null,"This command will add a new ",(0,l.yg)("inlineCode",{parentName:"p"},"active")," column with the ",(0,l.yg)("inlineCode",{parentName:"p"},"BOOLEAN")," datatype and a default value of ",(0,l.yg)("inlineCode",{parentName:"p"},"true")," to the ",(0,l.yg)("inlineCode",{parentName:"p"},"employees")," table."),(0,l.yg)("ol",{start:5},(0,l.yg)("li",{parentName:"ol"},"Dropping a column:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE employees DROP COLUMN department;\n")),(0,l.yg)("p",null,"This command will remove the ",(0,l.yg)("inlineCode",{parentName:"p"},"department")," column from the ",(0,l.yg)("inlineCode",{parentName:"p"},"employees")," table."),(0,l.yg)("h2",{id:"summary"},"Summary"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"ALTER TABLE")," statement is an essential SQL command that allows you to modify the structure of an existing table in a database. It supports renaming tables and columns, adding new columns with optional default values and constraints, and dropping existing columns. By understanding the ",(0,l.yg)("inlineCode",{parentName:"p"},"ALTER TABLE")," syntax, you can efficiently manage your database schema and make necessary changes to your tables as your data requirements evolve."))}u.isMDXComponent=!0}}]);