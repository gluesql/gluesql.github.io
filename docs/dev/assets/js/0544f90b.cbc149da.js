"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3},r="CREATE INDEX",s={unversionedId:"sql-syntax/statements/data-definition/create-index",id:"sql-syntax/statements/data-definition/create-index",title:"CREATE INDEX",description:"CREATE INDEX statement is used to create an index on one or more columns of a table. Indexes can improve query performance by allowing the database to quickly locate rows with specific column values. They can also be used with the ORDER BY clause to improve sorting performance. An index can be thought of as a data structure that maps the values of a specific column or columns to the corresponding rows in a table. This mapping allows the database to perform lookups and sorting operations more efficiently, as it does not have to scan the entire table.",source:"@site/docs/sql-syntax/statements/data-definition/create-index.md",sourceDirName:"sql-syntax/statements/data-definition",slug:"/sql-syntax/statements/data-definition/create-index",permalink:"/docs/dev/docs/sql-syntax/statements/data-definition/create-index",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sqlSyntaxSidebar",previous:{title:"DROP TABLE",permalink:"/docs/dev/docs/sql-syntax/statements/data-definition/drop-table"},next:{title:"DROP INDEX",permalink:"/docs/dev/docs/sql-syntax/statements/data-definition/drop-index"}},l={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Using Index with ORDER BY",id:"using-index-with-order-by",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-index"},"CREATE INDEX"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CREATE INDEX")," statement is used to create an index on one or more columns of a table. Indexes can improve query performance by allowing the database to quickly locate rows with specific column values. They can also be used with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause to improve sorting performance. An index can be thought of as a data structure that maps the values of a specific column or columns to the corresponding rows in a table. This mapping allows the database to perform lookups and sorting operations more efficiently, as it does not have to scan the entire table."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX index_name ON table_name (column_name_expression);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index_name"),": The name of the index. It is recommended to use a descriptive name that indicates the purpose of the index, such as the column(s) it is based on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table_name"),": The name of the table on which the index is to be created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"column_name_expression"),": The column name or expression on which the index is based. Only single column indexes are supported. If a column expression is used, it should be a simple arithmetic operation, such as addition or multiplication.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Consider the following table called ",(0,i.kt)("inlineCode",{parentName:"p"},"Students"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Students (\n    id INTEGER,\n    age INTEGER,\n    name TEXT\n);\n")),(0,i.kt)("p",null,"You can create an index on the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," column with the following statement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX idx_id ON Students (id);\n")),(0,i.kt)("p",null,"You can also create an index on a column expression, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"age * 2"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX idx_age ON Students (age * 2);\n")),(0,i.kt)("p",null,"Note that composite indexes (indexes on multiple columns) are not supported. These types of indexes can provide additional performance benefits in certain situations, but they also come with added complexity and increased storage requirements."),(0,i.kt)("h2",{id:"using-index-with-order-by"},"Using Index with ORDER BY"),(0,i.kt)("p",null,"Indexes can improve the performance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause. When an index exists on the column specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause, the database can use the index to sort the data more efficiently. This is because the index already provides a sorted view of the data, allowing the database to avoid the cost of sorting the entire table during query execution."),(0,i.kt)("p",null,"For example, if you have the following query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Students ORDER BY id ASC;\n")),(0,i.kt)("p",null,"The database can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"idx_id")," index created earlier to sort the data more quickly than without an index. Keep in mind that the performance gains from using an index with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause will depend on the size of the table, the distribution of the data, and the specific database implementation."))}u.isMDXComponent=!0}}]);