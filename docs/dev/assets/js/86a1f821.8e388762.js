"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9992],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(a),p=l,h=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,r[1]=s;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},603:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(7462),l=(a(7294),a(3905));const i={sidebar_position:1},r="CREATE TABLE",s={unversionedId:"sql-syntax/statements/data-definition/create-table",id:"sql-syntax/statements/data-definition/create-table",title:"CREATE TABLE",description:"The CREATE TABLE statement is a fundamental SQL command used to create a new table in a database. Tables are the primary structure in databases, as they hold the data organized in rows and columns. In this document, we'll explain the syntax and usage of the CREATE TABLE statement, including the IF NOT EXISTS clause.",source:"@site/docs/sql-syntax/statements/data-definition/create-table.md",sourceDirName:"sql-syntax/statements/data-definition",slug:"/sql-syntax/statements/data-definition/create-table",permalink:"/docs/dev/docs/sql-syntax/statements/data-definition/create-table",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sqlSyntaxSidebar",previous:{title:"Schemaless Data",permalink:"/docs/dev/docs/sql-syntax/statements/querying/schemaless"},next:{title:"DROP TABLE",permalink:"/docs/dev/docs/sql-syntax/statements/data-definition/drop-table"}},o={},m=[{value:"Syntax",id:"syntax",level:2},{value:"CREATE TABLE AS SELECT (CTAS)",id:"create-table-as-select-ctas",level:2},{value:"Example",id:"example",level:2},{value:"Example with CTAS",id:"example-with-ctas",level:2},{value:"Constraints",id:"constraints",level:2},{value:"Summary",id:"summary",level:2}],c={toc:m},u="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-table"},"CREATE TABLE"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement is a fundamental SQL command used to create a new table in a database. Tables are the primary structure in databases, as they hold the data organized in rows and columns. In this document, we'll explain the syntax and usage of the ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement, including the ",(0,l.kt)("inlineCode",{parentName:"p"},"IF NOT EXISTS")," clause."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,"The basic syntax for the ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] table_name (\n    column1 datatype constraint,\n    column2 datatype constraint,\n    column3 datatype constraint,\n    ...\n);\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IF NOT EXISTS"),": This optional clause allows you to check if a table with the same name already exists in the database. If it exists, the command does nothing; otherwise, it creates a new table."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"table_name"),": The name of the table you want to create."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"column"),": Each column in the table is defined by its name, datatype, and optional constraints."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"datatype"),": The type of data that the column will store (e.g., INTEGER, TEXT, DATE, etc.)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"constraint"),": Optional constraints to enforce rules on the data stored in the column (e.g., PRIMARY KEY, NOT NULL, UNIQUE, etc.).")),(0,l.kt)("h2",{id:"create-table-as-select-ctas"},"CREATE TABLE AS SELECT (CTAS)"),(0,l.kt)("p",null,"You can also create a new table based on the result of a SELECT statement using the CTAS syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name AS SELECT * FROM other_table;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"table_name"),": The name of the new table to be created."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"other_table"),": The existing table from which the data will be selected.")),(0,l.kt)("p",null,"This command creates a new table with the same column structure as the source table and populates it with the data returned by the SELECT statement. The SELECT statement in this example uses the wildcard *, meaning that all columns from the source table will be included in the new table."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Let's create a simple table called ",(0,l.kt)("inlineCode",{parentName:"p"},"employees")," with the following columns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id"),": A unique identifier for each employee (integer, primary key)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"first_name"),": The employee's first name (text, not null)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"last_name"),": The employee's last name (text, not null)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"email"),": The employee's email address (text, unique)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hire_date"),": The date the employee was hired (date).")),(0,l.kt)("p",null,"The SQL statement to create this table, using the ",(0,l.kt)("inlineCode",{parentName:"p"},"IF NOT EXISTS")," clause, would look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS employees (\n    id INTEGER PRIMARY KEY,\n    first_name TEXT NOT NULL,\n    last_name TEXT NOT NULL,\n    email TEXT UNIQUE,\n    hire_date DATE\n);\n")),(0,l.kt)("h2",{id:"example-with-ctas"},"Example with CTAS"),(0,l.kt)("p",null,"Assuming there is an existing table named employees_backup, you can create a new table called employees_copy with the same structure and data using CTAS:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE employees_copy AS SELECT * FROM employees_backup;\n")),(0,l.kt)("h2",{id:"constraints"},"Constraints"),(0,l.kt)("p",null,"Constraints are rules that you can apply to columns in a table to control the data being stored. Some common constraints are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PRIMARY KEY"),": Uniquely identifies each row in the table."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NOT NULL"),": Ensures the column cannot store a NULL value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UNIQUE"),": Ensures all values in the column are unique."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DEFAULT"),": Sets a default value for the column when no value is specified.")),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement is an essential SQL command that allows you to create tables in a database. It requires a table name and one or more column definitions with their respective datatypes and optional constraints. The ",(0,l.kt)("inlineCode",{parentName:"p"},"IF NOT EXISTS")," clause can be used to prevent creating duplicate tables. By understanding the ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," syntax, you can define the structure of your tables and ensure the data stored in them is accurate and reliable."))}d.isMDXComponent=!0}}]);