"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2047],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=r,g=c["".concat(o,".").concat(d)]||c[d]||u[d]||l;return t?n.createElement(g,s(s({ref:a},m),{},{components:t})):n.createElement(g,s({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9576:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const l={title:"Schemaless Data",sidebar_position:5},s="Querying Schemaless Data",i={unversionedId:"sql-syntax/statements/querying/schemaless",id:"sql-syntax/statements/querying/schemaless",title:"Schemaless Data",description:"GlueSQL is an SQL database that provides a unique feature: it allows you to work with schemaless data, similar to NoSQL databases. Please note this point in the documentation.",source:"@site/docs/sql-syntax/statements/querying/schemaless.md",sourceDirName:"sql-syntax/statements/querying",slug:"/sql-syntax/statements/querying/schemaless",permalink:"/docs/dev/sql-syntax/statements/querying/schemaless",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Schemaless Data",sidebar_position:5},sidebar:"autoSidebar",previous:{title:"Aggregation",permalink:"/docs/dev/sql-syntax/statements/querying/aggregation"},next:{title:"CREATE TABLE",permalink:"/docs/dev/sql-syntax/statements/data-definition/create-table"}},o={},p=[{value:"Creating a Schemaless Table",id:"creating-a-schemaless-table",level:2},{value:"Example SQL Queries",id:"example-sql-queries",level:2},{value:"Creating Tables",id:"creating-tables",level:3},{value:"Inserting Data",id:"inserting-data",level:3},{value:"Selecting Data",id:"selecting-data",level:3},{value:"Updating Data",id:"updating-data",level:3},{value:"Selecting with Aliases and Joins",id:"selecting-with-aliases-and-joins",level:3},{value:"Notable Exception Cases",id:"notable-exception-cases",level:2},{value:"Inserting Invalid Data",id:"inserting-invalid-data",level:3},{value:"Selecting Invalid Data",id:"selecting-invalid-data",level:3}],m={toc:p},c="wrapper";function u(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"querying-schemaless-data"},"Querying Schemaless Data"),(0,r.kt)("p",null,"GlueSQL is an SQL database that provides a unique feature: it allows you to work with schemaless data, similar to NoSQL databases. Please note this point in the documentation."),(0,r.kt)("h2",{id:"creating-a-schemaless-table"},"Creating a Schemaless Table"),(0,r.kt)("p",null,"To create a schemaless table, you don't need to specify columns when creating the table. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Sample;\n")),(0,r.kt)("p",null,"This creates a schemaless table. You can now insert data freely into each row, like a NoSQL database. Nested data is also supported."),(0,r.kt)("h2",{id:"example-sql-queries"},"Example SQL Queries"),(0,r.kt)("p",null,"Here are some example SQL queries that demonstrate how to use GlueSQL with schemaless data:"),(0,r.kt)("h3",{id:"creating-tables"},"Creating Tables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Player;\nCREATE TABLE Item;\n")),(0,r.kt)("h3",{id:"inserting-data"},"Inserting Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO Player VALUES (\'{"id": 1001, "name": "Beam", "flag": 1}\'), (\'{"id": 1002, "name": "Seo"}\');\nINSERT INTO Item VALUES (\'{"id": 100, "name": "Test 001", "dex": 324, "rare": false, "obj": {"cost": 3000}}\'), (\'{"id": 200}\');\n')),(0,r.kt)("h3",{id:"selecting-data"},"Selecting Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, dex, rare FROM Item WHERE id = 100;\nSELECT name, dex, rare FROM Item;\nSELECT * FROM Item;\n")),(0,r.kt)("h3",{id:"updating-data"},"Updating Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM Item WHERE id > 100;\nUPDATE Item SET id = id + 1, rare = NOT rare;\nUPDATE Item SET new_field = 'Hello';\n")),(0,r.kt)("h3",{id:"selecting-with-aliases-and-joins"},"Selecting with Aliases and Joins"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    Player.id AS player_id,\n    Player.name AS player_name,\n    Item.obj['cost'] AS item_cost\nFROM Item\nJOIN Player\nWHERE flag IS NOT NULL;\n")),(0,r.kt)("h2",{id:"notable-exception-cases"},"Notable Exception Cases"),(0,r.kt)("p",null,"Here are some example SQL queries that will raise errors, along with explanations of the issues:"),(0,r.kt)("h3",{id:"inserting-invalid-data"},"Inserting Invalid Data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inserting multiple values for a schemaless row:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Item VALUES ('{\"a\": 10}', '{\"b\": true}');\n")),(0,r.kt)("p",{parentName:"li"},"Schemaless rows accept only single values.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inserting data from a SELECT statement:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Item SELECT id, name FROM Item LIMIT 1;\n")),(0,r.kt)("p",{parentName:"li"},"Schemaless rows cannot be inserted using a SELECT statement.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inserting a JSON array:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Item VALUES ('[1, 2, 3]');\n")),(0,r.kt)("p",{parentName:"li"},"Only JSON objects are allowed for schemaless rows.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inserting a boolean value:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Item VALUES (true);\n")),(0,r.kt)("p",{parentName:"li"},"Text literals are required for schemaless rows.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inserting an expression result:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Item VALUES (CAST(1 AS INTEGER) + 4);\n")),(0,r.kt)("p",{parentName:"li"},"Map or string values are required for schemaless rows.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inserting data from a SELECT statement with LIMIT:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Item SELECT id FROM Item LIMIT 1;\n")),(0,r.kt)("p",{parentName:"li"},"Map type values are required for schemaless rows."))),(0,r.kt)("h3",{id:"selecting-invalid-data"},"Selecting Invalid Data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using IN with a schemaless subquery:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id FROM Item WHERE id IN (SELECT * FROM Item);\n")),(0,r.kt)("p",{parentName:"li"},"Schemaless projections are not allowed for IN subqueries.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using a comparison with a schemaless subquery:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id FROM Item WHERE id = (SELECT * FROM Item LIMIT 1);\n")),(0,r.kt)("p",{parentName:"li"},"Schemaless projections are not allowed for subqueries."))))}u.isMDXComponent=!0}}]);