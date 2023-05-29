"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),g=s(n),d=a,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[g]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i="Data Aggregation",u={unversionedId:"ast-builder/statements/querying/data-aggregation",id:"ast-builder/statements/querying/data-aggregation",title:"Data Aggregation",description:"The AST Builder API in GlueSQL allows you to construct SQL queries programmatically. This page provides an introduction to data aggregation using the AST Builder API.",source:"@site/docs/ast-builder/statements/querying/data-aggregation.md",sourceDirName:"ast-builder/statements/querying",slug:"/ast-builder/statements/querying/data-aggregation",permalink:"/docs/dev/ast-builder/statements/querying/data-aggregation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Creating Derived Subqueries",permalink:"/docs/dev/ast-builder/statements/querying/creating-derived-subqueries"},next:{title:"Data Injection",permalink:"/docs/dev/ast-builder/statements/querying/data-injection"}},l={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Grouping and Counting",id:"grouping-and-counting",level:2},{value:"Filtering Groups with HAVING",id:"filtering-groups-with-having",level:2}],c={toc:s},g="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-aggregation"},"Data Aggregation"),(0,a.kt)("p",null,"The AST Builder API in GlueSQL allows you to construct SQL queries programmatically. This page provides an introduction to data aggregation using the AST Builder API."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,'Before we explore data aggregation examples, let\'s set up a sample table called "User" with the following columns: "id" (INT), "name" (TEXT), and "age" (INT).'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE User (\n    id INT,\n    name TEXT,\n    age INT\n);\n")),(0,a.kt)("p",null,"We will use this table for the subsequent examples."),(0,a.kt)("h2",{id:"grouping-and-counting"},"Grouping and Counting"),(0,a.kt)("p",null,"To group records by a specific column and count the number of occurrences in each group, you can use the AST Builder's ",(0,a.kt)("inlineCode",{parentName:"p"},"group_by()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"project()")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'table("User")\n    .select()\n    .group_by("age")\n    .project("age, count(*)")\n    .execute(glue);\n')),(0,a.kt)("p",null,'The above code groups the records in the "User" table by the "age" column and returns the age value along with the count of occurrences in each group. The result would be:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"age | count(*)\n----|---------\n20  | 1\n30  | 2\n50  | 2\n")),(0,a.kt)("h2",{id:"filtering-groups-with-having"},"Filtering Groups with HAVING"),(0,a.kt)("p",null,"You can further filter the groups based on specific conditions using the ",(0,a.kt)("inlineCode",{parentName:"p"},"having()")," method. The ",(0,a.kt)("inlineCode",{parentName:"p"},"having()")," method allows you to apply conditions to the grouped data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'table("User")\n    .select()\n    .group_by("age")\n    .having("count(*) > 1")\n    .project("age, count(*)")\n    .execute(glue);\n')),(0,a.kt)("p",null,'The above code groups the records in the "User" table by the "age" column, but it only includes groups where the count of occurrences is greater than 1. The result would be:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"age | count(*)\n----|---------\n30  | 2\n50  | 2\n")),(0,a.kt)("p",null,"This concludes the introduction to data aggregation using the AST Builder API in GlueSQL. You can leverage these methods to perform various aggregations and analyze your data effectively."))}p.isMDXComponent=!0}}]);