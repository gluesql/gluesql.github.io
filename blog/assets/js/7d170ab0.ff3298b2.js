"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[768],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),h=r,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||i;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3194:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={title:"Breaking the Boundary between SQL and NoSQL Databases",description:"Breaking the Boundary between SQL and NoSQL Databases",slug:"breaking-the-boundary-between-sql-and-nosql",authors:[{name:"Taehoon Moon",title:"Creator of GlueSQL",url:"https://github.com/panarch",image_url:"https://github.com/panarch.png"}],tags:["sql","database","nosql"]},s="Breaking the Boundary between SQL and NoSQL Databases",o={permalink:"/blog/breaking-the-boundary-between-sql-and-nosql",source:"@site/blog/2023-05-29-breaking-the-boundary.md",title:"Breaking the Boundary between SQL and NoSQL Databases",description:"Breaking the Boundary between SQL and NoSQL Databases",date:"2023-05-29T00:00:00.000Z",formattedDate:"May 29, 2023",tags:[{label:"sql",permalink:"/blog/tags/sql"},{label:"database",permalink:"/blog/tags/database"},{label:"nosql",permalink:"/blog/tags/nosql"}],readingTime:10.055,hasTruncateMarker:!1,authors:[{name:"Taehoon Moon",title:"Creator of GlueSQL",url:"https://github.com/panarch",image_url:"https://github.com/panarch.png",imageURL:"https://github.com/panarch.png"}],frontMatter:{title:"Breaking the Boundary between SQL and NoSQL Databases",description:"Breaking the Boundary between SQL and NoSQL Databases",slug:"breaking-the-boundary-between-sql-and-nosql",authors:[{name:"Taehoon Moon",title:"Creator of GlueSQL",url:"https://github.com/panarch",image_url:"https://github.com/panarch.png",imageURL:"https://github.com/panarch.png"}],tags:["sql","database","nosql"]},prevItem:{title:"Test-Driven Documentation - Automating User Manual Creation in GlueSQL",permalink:"/blog/test-driven-documentation"},nextItem:{title:"Release v0.14",permalink:"/blog/release-v0.14"}},l={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"The Interface Perspective: SQL &amp; AST Builder",id:"the-interface-perspective-sql--ast-builder",level:2},{value:"Structured &amp; Unstructured Data",id:"structured--unstructured-data",level:2},{value:"Decomposing Database Functionality: Breaking Down SQL and NoSQL Features",id:"decomposing-database-functionality-breaking-down-sql-and-nosql-features",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The divide between SQL and NoSQL databases has often presented challenges in database management. GlueSQL, a unique database maker library, aims to blur this boundary, providing a versatile tool for handling these two distinct types of databases."),(0,r.kt)("p",null,"In this article, we explore how GlueSQL navigates the features of SQL and NoSQL databases, offering an integrated solution that promotes flexibility and efficiency. With its ability to unify disparate database types, GlueSQL heralds a new age of adaptable database creation and management."),(0,r.kt)("h2",{id:"the-interface-perspective-sql--ast-builder"},"The Interface Perspective: SQL & AST Builder"),(0,r.kt)("p",null,"When we talk about SQL databases, it's almost a given that they support SQL - the standard query language. Although there are slight variations between databases, the convenience of using a similar SQL language across multiple databases cannot be overstated. However, from a software engineer's perspective, there's room for improvement. In most software development scenarios, a specific programming language is used. SQL is a separate language, which can cause friction when integrating it into your software. As a result, rather than using raw SQL, many developers employ query builders or ORMs to manipulate SQL conveniently using their preferred programming language. Although it's not efficient to generate SQL using a query builder and then parse it again in the database, it's a practical and effective choice."),(0,r.kt)("p",null,"On the other hand, NoSQL databases offer different mechanisms. Some of them have their own language similar to SQL, but most provide an interface library developed specifically for each programming language. While SQL databases rely on external query builder libraries to provide an interface for each programming language, NoSQL databases mostly develop and offer these libraries themselves. If we discount the convenience of SQL language, this is one of the major factors that make NoSQL databases more comfortable to use. Since query builder libraries supporting SQL databases often cater to multiple SQL databases, they are limited in fully supporting unique features of each database. NoSQL databases, on the other hand, can freely manage their interface libraries without these restrictions."),(0,r.kt)("p",null,"Providing a query interface for each programming language is not a fundamental difference between SQL and NoSQL, but we generally accept it implicitly."),(0,r.kt)("p",null,"Let's see what happens if we break down this boundary, using GlueSQL as an example. As you can see from the SQL postfix, GlueSQL supports SQL and can be classified as an SQL database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE Glue (id INTEGER, name TEXT);\n\nINSERT INTO Glue VALUES (1, "hello"), (2, "gluesql");\n\nSELECT * FROM Glue WHERE id = 1;\n')),(0,r.kt)("p",null,"However, GlueSQL also supports its own query builder, like a NoSQL database.\n(Currently, only Rust is supported, but we're working on adding support for other languages.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'table("Glue")\n    .create_table()\n    .add_column("id INTEGER")\n    .add_column("name TEXT")\n    .execute(glue)\n\ntable("Glue")\n    .insert()\n    .values(vec![\n        vec![num(1), text("hello")],\n        vec![num(2), text("gluesql")],\n    ])\n    .execute(glue)\n    .await;\n\ntable("Glue")\n    .select()\n    .filter(col("id").eq(1))\n    .execute(glue)\n    .await;\n')),(0,r.kt)("p",null,"Let's reconsider the implicit distinction between SQL and NoSQL. GlueSQL indeed supports SQL, but it also officially develops and offers its own query builder. This query builder is not a secondary tool for SQL. While most SQL query builder libraries ultimately generate SQL strings, GlueSQL's builder directly creates an AST (Abstract Structure Tree) that is used for execution within GlueSQL. Hence, we call it the AST Builder. This means SQL and the AST Builder are two equally supported interfaces in GlueSQL."),(0,r.kt)("p",null,"This also offers an additional advantage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'table("Glue")\n    .select()\n    // 1.\n    .filter(col("id").eq(1))\n    // 2.\n    .filter("id = 1")\n    .execute(glue)\n    .await;\n')),(0,r.kt)("p",null,"Because GlueSQL already supports SQL, not only can you use the custom interface in the AST Builder, but you can also use familiar SQL syntax in part. Whether you use ",(0,r.kt)("inlineCode",{parentName:"p"},'col("id").eq(1)')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"id = 1"'),", you can use it in the way you prefer. The AST Builder interface, although initially unfamiliar, allows a gradual migration similar to writing SQL for your convenience."),(0,r.kt)("p",null,"Thus, we've dismantled one of the implicit distinctions between SQL and NoSQL. However, it's more of an implicit differentiation than a fundamental one. There are more significant design differences that we'll explore next."),(0,r.kt)("h2",{id:"structured--unstructured-data"},"Structured & Unstructured Data"),(0,r.kt)("p",null,"In this section, we'll discuss how SQL and NoSQL handle data. SQL generally deals with structured data, and recently, it's been made to support semi-structured data as well. On the other hand, NoSQL supports schemaless, unstructured data. Then, we'll explain in detail how GlueSQL handles these two types of data. The last part of this section will provide a segue into the next section where we'll discuss the decomposition of database functions."),(0,r.kt)("p",null,"When talking about SQL databases, one aspect is usually considered together: SQL databases have a defined schema."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Foo (\n    id INTEGER,\n    name TEXT,\n    rate FLOAT NULL\n);\n")),(0,r.kt)("p",null,"However, these days, SQL databases tend to support semi-structured data types, such as LIST or JSON. But, supporting completely schemaless, unstructured data is a different matter. SQL databases typically require a minimum schema."),(0,r.kt)("p",null,"What about NoSQL databases? As NoSQL databases vary significantly, we can't make definitive statements. But let's consider a typical document database like MongoDB. Unlike SQL databases, it doesn't enforce a schema. Essentially, you can insert any form of data directly. Often, NoSQL databases support schemaless data, but they lack features that enforce a schema like SQL. They generally support structure via validation methods, rather than structured access."),(0,r.kt)("p",null,"Is there no choice but to distinguish between structured data and unstructured, schemaless data so clearly? GlueSQL is being developed with the goal of being adaptable in various environments. Being forced to choose regarding this schema constraint was quite inconvenient. We started pondering if we couldn't benefit from both aspects - supporting both schema and schemaless data simultaneously, and we eventually found the answer. Let's look at how GlueSQL currently solves this issue through familiar SQL examples."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Names (id INTEGER, name TEXT);\nINSERT INTO Names VALUES (1, 'glue'), (2, 'sql');\n")),(0,r.kt)("p",null,"You can create a regular table with a schema like this. But GlueSQL's choice for creating a schemaless table is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE Logs;\nINSERT INTO Logs VALUES\n    (\'{ "id": 1, "value": 30 }\'),\n    (\'{ "id": 2, "rate": 3.0, "list": [1, 2, 3] }\'),\n    (\'{ "id": 3, "rate": 5.0, "value": 100 }\');\n')),(0,r.kt)("p",null,"It creates a table without column definitions! If you do this, GlueSQL recognizes the table as schemaless and processes it internally."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id, rate, list[0] FROM Logs WHERE id = 2;\n")),(0,r.kt)("p",null,"Although the way to create the table was a bit special, using it isn't much different from the regular SQL SELECT statement. Not only can you differentiate between schema and schemaless when creating tables, but you can also use them interchangeably!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Names JOIN Logs ON Names.id = Logs.id;\n/*\n| id | list    | name | rate | value |\n|----|---------|------|------|-------|\n| 1  |         | glue |      | 30    |\n| 2  |[1, 2, 3]| sql  | 3    |       |\n*/\n")),(0,r.kt)("p",null,"Here's an example of querying data by INNER JOINing the Names table, which has a schema, and the Logs table, which is schemaless. GlueSQL has resolved this problem by allowing the internal execution layer to handle both vector-type data, for cases where each row has a defined schema, and map-type data for schemaless cases."),(0,r.kt)("p",null,"Thanks to this, the variety of storage that can be supported through GlueSQL has expanded significantly. If there were previously limitations to supporting NoSQL databases that support schemaless data, that is no longer the case. The reference storage where you can directly experience this schemaless data support is JSON Storage. It offers features that allow you to deal directly with unstructured data like JSON using GlueSQL."),(0,r.kt)("p",null,"If GlueSQL starts from the perspective of an SQL database and expands, by providing the AST Builder directly, it once blurs the boundary, and by supporting unstructured data simultaneously, it knocks down the boundary once more. How do you like it?"),(0,r.kt)("h2",{id:"decomposing-database-functionality-breaking-down-sql-and-nosql-features"},"Decomposing Database Functionality: Breaking Down SQL and NoSQL Features"),(0,r.kt)("p",null,"The distinction between SQL and NoSQL is not just about whether they support unstructured data. Of course, there are examples like unstructured data, which is mainly supported only in NoSQL, but in many cases, SQL databases tend to support more diverse and complex queries. NoSQL often gains other advantages in exchange for reducing the range of query support provided by SQL databases."),(0,r.kt)("p",null,'GlueSQL is ambitious. It has devised a rather interesting method to support all of this through SQL and the AST Builder, with the same interface. When we usually say SQL database, it implicitly assumes that a lot of features have been fully implemented. Create tables by specifying a schema, modify schemas with "alter table", support both clustered and non-clustered indexes, and support transactions. And there\'s so much more. But the functionality that is naturally supported in SQL databases may not be natural in other environments.'),(0,r.kt)("p",null,"Let's think about JSON Storage. GlueSQL's JSON Storage allows you to handle JSON, JSONL files using SQL and the AST Builder. This JSON Storage does not support atomic operations or transactions. Of course, it would be great if it did, but implementing and executing them would be a significant performance burden. In most cases, when you want to simply browse and handle JSONL files, the overhead caused by transactions can be an unnecessary burden. In this case, you want to handle JSON, JSONL files using SQL, but you don't necessarily need transactions."),(0,r.kt)("p",null,"To meet the requirements of these diverse environments, GlueSQL has separated the functionality of what we usually call an SQL database into multiple independent interfaces.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Store"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"StoreMut"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AlterTable"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Transaction"),", ..\nThese are just a few of the various storage interfaces that GlueSQL currently supports.\nThe way it works can be summarized like this:\nIf you implement ",(0,r.kt)("inlineCode",{parentName:"p"},"Store"),", you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),".\nAnd if you implement both ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"StoreMut"),", you can support quite a number of basic SQL statements including ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),".\nYou can manage tables with ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP TABLE"),", and handle data using ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," statements.\nIf you only need to retrieve data, you only need to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"Store"),".\nIf you want to support the ",(0,r.kt)("inlineCode",{parentName:"p"},"ALTER TABLE")," statement, you can additionally implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"AlterTable")," interface.\nThe Transaction interface works the same way.\nThe interesting part is that, except for Store and StoreMut, all other storage interfaces can be implemented independently. GlueSQL allows you to choose and implement only the features you need.\nAnd it's not just about providing interfaces. It also provides integration tests suitable for each situation to verify what you have implemented. You just need to implement the interface and import the corresponding test case for verification."),(0,r.kt)("p",null,"In addition to supporting both structured and unstructured data simultaneously, GlueSQL provides the ability to divide the functionality of a database into multiple independent features and selectively implement them. This allows GlueSQL to be ported to a wide variety of environments without any burden."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"GlueSQL, while serving as a database that provides its own reference storage, is fundamentally a library designed to simplify the creation of databases. One of the substantial challenges GlueSQL had to overcome in order to support a diverse array of environments was to address the distinctive features that separate conventional SQL databases from NoSQL databases. GlueSQL achieved this through several innovative approaches, managing to support both categories simultaneously despite their significantly different characteristics."),(0,r.kt)("p",null,"It offers support for SQL alongside an AST Builder, and accommodates both structured and unstructured data. Additionally, it decomposes database functionalities into multiple independent features, allowing each environment to selectively implement the functionalities it requires."),(0,r.kt)("p",null,"These unique attributes enable GlueSQL to live up to its 'Glue' prefix by facilitating effortless porting across various environments. While we have been developing it for several years, there is still much ground to cover. However, the fact that we are now able to introduce it publicly attests to our successful technological validation and completion of a demonstrable level of implementation."),(0,r.kt)("p",null,"Through GlueSQL, we hope to provide developers with a unified query interface that can be customized according to their needs, thereby enabling them to produce efficient products more effortlessly. There's a promising future ahead for GlueSQL, and we look forward to its contributions to the technology community."))}p.isMDXComponent=!0}}]);