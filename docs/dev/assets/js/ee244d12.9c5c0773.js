"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Fetching Data from Storage",l={unversionedId:"ast-builder/statements/querying/fetching-data-from-storage",id:"ast-builder/statements/querying/fetching-data-from-storage",title:"Fetching Data from Storage",description:"The AST Builder provides a powerful and flexible way to query data from your tables, similar to SQL's SELECT statement. This guide will show you how to use the AST Builder's table(\"foo\").select() method to perform various query types, including filtering, joining, grouping, ordering, and pagination.",source:"@site/docs/ast-builder/statements/querying/fetching-data-from-storage.md",sourceDirName:"ast-builder/statements/querying",slug:"/ast-builder/statements/querying/fetching-data-from-storage",permalink:"/docs/dev/ast-builder/statements/querying/fetching-data-from-storage",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"astBuilderSidebar",previous:{title:"Introduction",permalink:"/docs/dev/ast-builder/intro"},next:{title:"Using Preloaded Data",permalink:"/docs/dev/ast-builder/statements/querying/using-preloaded-data"}},s={},u=[{value:"Basic SELECT",id:"basic-select",level:2},{value:"Filtering (WHERE)",id:"filtering-where",level:2},{value:"Joining Tables",id:"joining-tables",level:2},{value:"Grouping and Aggregating (GROUP BY, HAVING)",id:"grouping-and-aggregating-group-by-having",level:2},{value:"Sorting Results (ORDER BY)",id:"sorting-results-order-by",level:2},{value:"Pagination (OFFSET, LIMIT)",id:"pagination-offset-limit",level:2}],c={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fetching-data-from-storage"},"Fetching Data from Storage"),(0,a.kt)("p",null,"The AST Builder provides a powerful and flexible way to query data from your tables, similar to SQL's SELECT statement. This guide will show you how to use the AST Builder's ",(0,a.kt)("inlineCode",{parentName:"p"},'table("foo").select()')," method to perform various query types, including filtering, joining, grouping, ordering, and pagination."),(0,a.kt)("h2",{id:"basic-select"},"Basic SELECT"),(0,a.kt)("p",null,"To perform a basic SELECT query using the AST Builder, simply call the ",(0,a.kt)("inlineCode",{parentName:"p"},"select()")," method on a table object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Category").select().execute(glue).await;\n')),(0,a.kt)("h2",{id:"filtering-where"},"Filtering (WHERE)"),(0,a.kt)("p",null,"To filter the results of a SELECT query, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"filter()")," method, providing a condition as a string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Category")\n    .select()\n    .filter("name = \'Meat\'")\n    .execute(glue)\n    .await;\n')),(0,a.kt)("h2",{id:"joining-tables"},"Joining Tables"),(0,a.kt)("p",null,"You can join tables using the ",(0,a.kt)("inlineCode",{parentName:"p"},"join()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"join_as()")," methods. The following example demonstrates an INNER JOIN:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .alias_as("i")\n    .select()\n    .join_as("Category", "c")\n    .on("c.id = i.category_id")\n    .filter("c.name = \'Fruit\' OR c.name = \'Meat\'")\n    .project("i.name AS item")\n    .project("c.name AS category")\n    .execute(glue)\n    .await;\n')),(0,a.kt)("p",null,"For LEFT OUTER JOIN, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"left_join()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Category")\n    .select()\n    .left_join("Item")\n    .on(col("Category.id")\n        .eq(col("Item.category_id"))\n        .and(col("price").gt(50)))\n    .project(vec![\n        "Category.name AS category",\n        "Item.name AS item",\n        "price",\n    ])\n    .execute(glue)\n    .await;\n')),(0,a.kt)("h2",{id:"grouping-and-aggregating-group-by-having"},"Grouping and Aggregating (GROUP BY, HAVING)"),(0,a.kt)("p",null,"To group the results of a SELECT query, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"group_by()")," method. You can also filter the groups using the ",(0,a.kt)("inlineCode",{parentName:"p"},"having()")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .select()\n    .join("Category")\n    .on(col("Category.id").eq("Item.category_id"))\n    .group_by("Item.category_id")\n    .having("SUM(Item.price) > 80")\n    .project("Category.name AS category")\n    .project("SUM(Item.price) AS sum_price")\n    .execute(glue)\n    .await;\n')),(0,a.kt)("h2",{id:"sorting-results-order-by"},"Sorting Results (ORDER BY)"),(0,a.kt)("p",null,"To sort the results of a SELECT query, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"order_by()")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .select()\n    .project("name, price")\n    .order_by("price DESC")\n    .execute(glue)\n    .await;\n')),(0,a.kt)("h2",{id:"pagination-offset-limit"},"Pagination (OFFSET, LIMIT)"),(0,a.kt)("p",null,"You can paginate the results of a SELECT query using the ",(0,a.kt)("inlineCode",{parentName:"p"},"offset()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"limit()")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .select()\n    .project("name, price")\n    .order_by("price DESC")\n    .offset(1)\n    .limit(2)\n    .execute(glue)\n    .await;\n')))}g.isMDXComponent=!0}}]);