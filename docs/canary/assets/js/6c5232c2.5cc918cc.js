"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8599],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=l,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(b,r(r({ref:t},u),{},{components:a})):n.createElement(b,r({ref:t},u))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const i={sidebar_position:2},r="Data Dictionary",o={unversionedId:"sql-syntax/statements/metadata/data-dictionary",id:"sql-syntax/statements/metadata/data-dictionary",title:"Data Dictionary",description:"In GlueSQL, there are predefined tables, also known as Data Dictionary tables, which store metadata about the database objects like tables, columns, and indexes. These tables can be queried like any other table in the database, and they provide useful information about the database schema.",source:"@site/docs/sql-syntax/statements/metadata/data-dictionary.md",sourceDirName:"sql-syntax/statements/metadata",slug:"/sql-syntax/statements/metadata/data-dictionary",permalink:"/docs/canary/docs/sql-syntax/statements/metadata/data-dictionary",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sqlSyntaxSidebar",previous:{title:"SHOW TABLES",permalink:"/docs/canary/docs/sql-syntax/statements/metadata/show-tables"},next:{title:"Data types",permalink:"/docs/canary/docs/category/data-types"}},s={},d=[{value:"GLUE_TABLES",id:"glue_tables",level:2},{value:"GLUE_TABLE_COLUMNS",id:"glue_table_columns",level:2},{value:"GLUE_INDEXES",id:"glue_indexes",level:2},{value:"Examples",id:"examples",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"data-dictionary"},"Data Dictionary"),(0,l.kt)("p",null,"In GlueSQL, there are predefined tables, also known as Data Dictionary tables, which store metadata about the database objects like tables, columns, and indexes. These tables can be queried like any other table in the database, and they provide useful information about the database schema."),(0,l.kt)("p",null,"The Data Dictionary tables in GlueSQL include:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"GLUE_TABLES")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"GLUE_TABLE_COLUMNS")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"GLUE_INDEXES"))),(0,l.kt)("p",null,"Please note that the columns provided in these tables are the default columns. Storage implementations may provide additional information in these tables."),(0,l.kt)("h2",{id:"glue_tables"},"GLUE_TABLES"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"GLUE_TABLES")," table contains a list of all tables in the database."),(0,l.kt)("p",null,"Columns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TABLE_NAME"),": The name of the table.")),(0,l.kt)("h2",{id:"glue_table_columns"},"GLUE_TABLE_COLUMNS"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"GLUE_TABLE_COLUMNS")," table contains information about the columns in each table."),(0,l.kt)("p",null,"Columns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TABLE_NAME"),": The name of the table that the column belongs to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"COLUMN_NAME"),": The name of the column."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"COLUMN_ID"),": The column's unique identifier.")),(0,l.kt)("h2",{id:"glue_indexes"},"GLUE_INDEXES"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"GLUE_INDEXES")," table contains information about the indexes defined in the database."),(0,l.kt)("p",null,"Columns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TABLE_NAME"),": The name of the table that the index belongs to."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INDEX_NAME"),": The name of the index."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ORDER"),': The order in which the index is sorted (e.g., "ASC", "DESC", or "BOTH").'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EXPRESSION"),': The expression used for the indexed column (e.g., "id" or "id + 2").'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UNIQUENESS"),": A boolean value indicating whether the index enforces uniqueness.")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"To query the ",(0,l.kt)("inlineCode",{parentName:"p"},"GLUE_TABLES")," table and get a list of all tables in the database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM GLUE_TABLES;\n")),(0,l.kt)("p",null,"To query the ",(0,l.kt)("inlineCode",{parentName:"p"},"GLUE_TABLE_COLUMNS")," table and get information about the columns in each table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM GLUE_TABLE_COLUMNS;\n")),(0,l.kt)("p",null,"To query the ",(0,l.kt)("inlineCode",{parentName:"p"},"GLUE_INDEXES")," table and get information about the indexes defined in the database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM GLUE_INDEXES;\n")))}c.isMDXComponent=!0}}]);