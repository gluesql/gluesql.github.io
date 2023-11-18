"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>T});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,T=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(T,l(l({ref:t},c),{},{components:n})):a.createElement(T,l({ref:t},c))}));function T(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4},l="Transaction",s={unversionedId:"sql-syntax/statements/transaction",id:"sql-syntax/statements/transaction",title:"Transaction",description:"Transactions in SQL are a series of queries that are executed as a single unit of work. In GlueSQL, transactions help to ensure the consistency and integrity of the database. They follow the ACID properties: Atomicity, Consistency, Isolation, and Durability.",source:"@site/docs/sql-syntax/statements/transaction.md",sourceDirName:"sql-syntax/statements",slug:"/sql-syntax/statements/transaction",permalink:"/docs/0.15/sql-syntax/statements/transaction",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"autoSidebar",previous:{title:"DELETE",permalink:"/docs/0.15/sql-syntax/statements/data-manipulation/delete"},next:{title:"SHOW TABLES",permalink:"/docs/0.15/sql-syntax/statements/metadata/show-tables"}},i={},p=[{value:"BEGIN TRANSACTION",id:"begin-transaction",level:2},{value:"COMMIT TRANSACTION",id:"commit-transaction",level:2},{value:"ROLLBACK TRANSACTION",id:"rollback-transaction",level:2},{value:"Example",id:"example",level:2},{value:"Inserting Data",id:"inserting-data",level:3},{value:"Deleting Data",id:"deleting-data",level:3},{value:"Updating Data",id:"updating-data",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transaction"},"Transaction"),(0,r.kt)("p",null,"Transactions in SQL are a series of queries that are executed as a single unit of work. In GlueSQL, transactions help to ensure the consistency and integrity of the database. They follow the ACID properties: Atomicity, Consistency, Isolation, and Durability."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: In GlueSQL, transactions are an optional feature. Support for transactions depends on the storage engine being used. Currently, only ",(0,r.kt)("inlineCode",{parentName:"strong"},"SledStorage")," supports transactions, but there are plans to add support for other storage engines in the future. Transaction isolation levels may also vary depending on the storage engine. For example, the current transaction isolation level for ",(0,r.kt)("inlineCode",{parentName:"strong"},"SledStorage")," is SNAPSHOT ISOLATION.")),(0,r.kt)("h2",{id:"begin-transaction"},"BEGIN TRANSACTION"),(0,r.kt)("p",null,"To start a new transaction, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"BEGIN")," keyword:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BEGIN;\n")),(0,r.kt)("h2",{id:"commit-transaction"},"COMMIT TRANSACTION"),(0,r.kt)("p",null,"To permanently save the changes made during the transaction, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"COMMIT")," keyword:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"COMMIT;\n")),(0,r.kt)("h2",{id:"rollback-transaction"},"ROLLBACK TRANSACTION"),(0,r.kt)("p",null,"To undo the changes made during the transaction and revert the database to its state before the transaction started, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ROLLBACK")," keyword:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ROLLBACK;\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Consider the following table ",(0,r.kt)("inlineCode",{parentName:"p"},"TxTest")," with columns ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," (INTEGER) and ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," (TEXT):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE TxTest (\n    id INTEGER,\n    name TEXT\n);\n")),(0,r.kt)("p",null,"Insert sample data into the table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO TxTest VALUES\n    (1, 'Friday'),\n    (2, 'Phone');\n")),(0,r.kt)("h3",{id:"inserting-data"},"Inserting Data"),(0,r.kt)("p",null,"Start a new transaction and insert a new row:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\nINSERT INTO TxTest VALUES (3, 'New one');\n")),(0,r.kt)("p",null,"Rollback the transaction to undo the insertion:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ROLLBACK;\n")),(0,r.kt)("p",null,"Now, start a new transaction and insert a new row with different data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\nINSERT INTO TxTest VALUES (3, 'Vienna');\nCOMMIT;\n")),(0,r.kt)("h3",{id:"deleting-data"},"Deleting Data"),(0,r.kt)("p",null,"Start a new transaction and delete a row:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\nDELETE FROM TxTest WHERE id = 3;\nROLLBACK;\n")),(0,r.kt)("p",null,"The deletion will be undone due to the rollback. To permanently delete the row, commit the transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\nDELETE FROM TxTest WHERE id = 3;\nCOMMIT;\n")),(0,r.kt)("h3",{id:"updating-data"},"Updating Data"),(0,r.kt)("p",null,"Start a new transaction and update a row:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\nUPDATE TxTest SET name = 'Sunday' WHERE id = 1;\nROLLBACK;\n")),(0,r.kt)("p",null,"The update will be undone due to the rollback. To permanently update the row, commit the transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\nUPDATE TxTest SET name = 'Sunday' WHERE id = 1;\nCOMMIT;\n")))}u.isMDXComponent=!0}}]);