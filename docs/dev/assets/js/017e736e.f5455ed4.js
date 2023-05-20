"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),o=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=o(r),b=i,m=c["".concat(l,".").concat(b)]||c[b]||p[b]||n;return r?a.createElement(m,u(u({ref:t},d),{},{components:r})):a.createElement(m,u({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,u=new Array(n);u[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,u[1]=s;for(var o=2;o<n;o++)u[o]=r[o];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>o});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:3},u="Creating Derived Subqueries",s={unversionedId:"ast-builder/statements/querying/creating-derived-subqueries",id:"ast-builder/statements/querying/creating-derived-subqueries",title:"Creating Derived Subqueries",description:"This document covers the aliasas functionality of the AST Builder in the GlueSQL project. The aliasas method allows you to create a derived subquery, which is similar to subqueries in SQL. It gives you the ability to use the output of a query as a table to perform further queries.",source:"@site/docs/ast-builder/statements/querying/creating-derived-subqueries.md",sourceDirName:"ast-builder/statements/querying",slug:"/ast-builder/statements/querying/creating-derived-subqueries",permalink:"/docs/dev/ast-builder/statements/querying/creating-derived-subqueries",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"astBuilderSidebar",previous:{title:"Using Preloaded Data",permalink:"/docs/dev/ast-builder/statements/querying/using-preloaded-data"},next:{title:"Data Aggregation",permalink:"/docs/dev/ast-builder/statements/querying/data-aggregation"}},l={},o=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Derived Subquery with Filter",id:"derived-subquery-with-filter",level:3},{value:"Derived Subquery with Projection",id:"derived-subquery-with-projection",level:3},{value:"Derived Subquery with Join",id:"derived-subquery-with-join",level:3},{value:"Derived Subquery with Group By and Having",id:"derived-subquery-with-group-by-and-having",level:3},{value:"Derived Subquery with Order By",id:"derived-subquery-with-order-by",level:3},{value:"Derived Subquery with Offset and Limit",id:"derived-subquery-with-offset-and-limit",level:3}],d={toc:o},c="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-derived-subqueries"},"Creating Derived Subqueries"),(0,i.kt)("p",null,"This document covers the ",(0,i.kt)("inlineCode",{parentName:"p"},"alias_as")," functionality of the AST Builder in the GlueSQL project. The ",(0,i.kt)("inlineCode",{parentName:"p"},"alias_as")," method allows you to create a derived subquery, which is similar to subqueries in SQL. It gives you the ability to use the output of a query as a table to perform further queries."),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("p",null,"To use the ",(0,i.kt)("inlineCode",{parentName:"p"},"alias_as")," method, simply chain it to the end of a query builder method before executing the query. The derived subquery can then be used for further queries. Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .select()\n    .alias_as("Sub")\n    .select()\n    .execute(glue)\n    .await;\n')),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"alias_as")," method is used after the ",(0,i.kt)("inlineCode",{parentName:"p"},"select"),' method, creating a derived subquery named "Sub" that can be used in subsequent queries.'),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"The following examples demonstrate how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"alias_as")," method with various query operations. "),(0,i.kt)("h3",{id:"derived-subquery-with-filter"},"Derived Subquery with Filter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .select()\n    .filter("item_id = 300")\n    .alias_as("Sub")\n    .select()\n    .execute(glue)\n    .await;\n')),(0,i.kt)("h3",{id:"derived-subquery-with-projection"},"Derived Subquery with Projection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .select()\n    .project("item_id")\n    .alias_as("Sub")\n    .select()\n    .execute(glue)\n    .await;\n')),(0,i.kt)("h3",{id:"derived-subquery-with-join"},"Derived Subquery with Join"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .alias_as("i")\n    .select()\n    .join_as("Category", "c")\n    .on("c.category_id = i.category_id")\n    .alias_as("Sub")\n    .select()\n    .project("item_name")\n    .project("category_name")\n    .execute(glue)\n    .await;\n')),(0,i.kt)("h3",{id:"derived-subquery-with-group-by-and-having"},"Derived Subquery with Group By and Having"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Category")\n    .select()\n    .project("category_name")\n    .alias_as("Sub1")\n    .select()\n    .group_by("category_name")\n    .having("category_name = \'Meat\'")\n    .alias_as("Sub2")\n    .select()\n    .execute(glue)\n    .await;\n')),(0,i.kt)("h3",{id:"derived-subquery-with-order-by"},"Derived Subquery with Order By"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .select()\n    .order_by("price DESC")\n    .alias_as("Sub")\n    .select()\n    .execute(glue)\n    .await;\n')),(0,i.kt)("h3",{id:"derived-subquery-with-offset-and-limit"},"Derived Subquery with Offset and Limit"),(0,i.kt)("p",null,"This example shows how to create a derived subquery combined with both the ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"limit")," methods to control the range of rows returned:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .select()\n    .offset(3)\n    .limit(1)\n    .alias_as("Sub")\n    .select()\n    .execute(glue)\n    .await;\n')))}p.isMDXComponent=!0}}]);