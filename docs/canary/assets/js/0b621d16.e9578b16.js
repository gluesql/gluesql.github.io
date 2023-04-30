"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},o="DECIMAL",l={unversionedId:"sql-syntax/data-types/decimal",id:"sql-syntax/data-types/decimal",title:"DECIMAL",description:"The DECIMAL data type in SQL is used to store exact numeric values, making it suitable for financial calculations and other operations requiring a high level of precision without round-off errors. In GlueSQL, the DECIMAL data type is implemented using a pure Rust library, providing a 96-bit integer number, a scaling factor for specifying the decimal fraction, and a 1-bit sign.",source:"@site/docs/sql-syntax/data-types/decimal.md",sourceDirName:"sql-syntax/data-types",slug:"/sql-syntax/data-types/decimal",permalink:"/docs/sql-syntax/data-types/decimal",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sqlSyntaxSidebar",previous:{title:"TEXT",permalink:"/docs/sql-syntax/data-types/text"},next:{title:"DATE",permalink:"/docs/sql-syntax/data-types/date"}},s={},c=[{value:"Creating a table with a DECIMAL column",id:"creating-a-table-with-a-decimal-column",level:2},{value:"Inserting data into the DECIMAL column",id:"inserting-data-into-the-decimal-column",level:2},{value:"Querying data from the DECIMAL column",id:"querying-data-from-the-decimal-column",level:2},{value:"Truncating trailing zeros",id:"truncating-trailing-zeros",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decimal"},"DECIMAL"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DECIMAL")," data type in SQL is used to store exact numeric values, making it suitable for financial calculations and other operations requiring a high level of precision without round-off errors. In GlueSQL, the DECIMAL data type is implemented using a pure Rust library, providing a 96-bit integer number, a scaling factor for specifying the decimal fraction, and a 1-bit sign."),(0,r.kt)("p",null,"Here's an example of how to create a table, insert data, and query data using the ",(0,r.kt)("inlineCode",{parentName:"p"},"DECIMAL")," data type:"),(0,r.kt)("h2",{id:"creating-a-table-with-a-decimal-column"},"Creating a table with a DECIMAL column"),(0,r.kt)("p",null,"To create a table with a DECIMAL column, use the following SQL syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE financial_data (description TEXT, value DECIMAL);\n")),(0,r.kt)("h2",{id:"inserting-data-into-the-decimal-column"},"Inserting data into the DECIMAL column"),(0,r.kt)("p",null,"To insert data into the DECIMAL column, provide the exact numeric values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO financial_data (description, value) VALUES\n    ('Revenue', 15000.25),\n    ('Expense', 12000.75),\n    ('Profit', 2999.50);\n")),(0,r.kt)("h2",{id:"querying-data-from-the-decimal-column"},"Querying data from the DECIMAL column"),(0,r.kt)("p",null,"To query data from the DECIMAL column, use standard SQL syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT description, value FROM financial_data;\n")),(0,r.kt)("p",null,"This query will return the following result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"description | value\n------------|---------\nRevenue     | 15000.25\nExpense     | 12000.75\nProfit      |  2999.50\n")),(0,r.kt)("h2",{id:"truncating-trailing-zeros"},"Truncating trailing zeros"),(0,r.kt)("p",null,"In GlueSQL's DECIMAL implementation, trailing zeros are preserved in the binary representation and may be exposed when converting the value to a string. To truncate trailing zeros, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"normalize")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"round_dp")," functions in Rust."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DECIMAL")," data type is crucial for handling precise numeric values in SQL databases, especially in financial calculations and other applications requiring high accuracy without round-off errors. By understanding the basics of the DECIMAL data type and its use cases, you can effectively use it in your database designs and operations, ensuring that your applications can manage exact numeric values with precision."))}d.isMDXComponent=!0}}]);