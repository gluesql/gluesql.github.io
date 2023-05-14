"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},o="Pattern Matching",i={unversionedId:"ast-builder/expressions/pattern-matching",id:"ast-builder/expressions/pattern-matching",title:"Pattern Matching",description:"Pattern matching is a crucial feature in SQL that allows you to match rows based on specific patterns in a column. GlueSQL provides 4 pattern matching operators: like, ilike, notlike, and notilike.",source:"@site/docs/ast-builder/expressions/pattern-matching.md",sourceDirName:"ast-builder/expressions",slug:"/ast-builder/expressions/pattern-matching",permalink:"/docs/dev/docs/ast-builder/expressions/pattern-matching",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"astBuilderSidebar",previous:{title:"Operator Based",permalink:"/docs/dev/docs/ast-builder/expressions/operator-based"},next:{title:"Value Checking",permalink:"/docs/dev/docs/ast-builder/expressions/value-checking"}},p={},s=[{value:"LIKE Operator",id:"like-operator",level:2},{value:"ILIKE Operator",id:"ilike-operator",level:2},{value:"NOT_LIKE Operator",id:"not_like-operator",level:2},{value:"NOT_ILIKE Operator",id:"not_ilike-operator",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pattern-matching"},"Pattern Matching"),(0,a.kt)("p",null,"Pattern matching is a crucial feature in SQL that allows you to match rows based on specific patterns in a column. GlueSQL provides 4 pattern matching operators: ",(0,a.kt)("inlineCode",{parentName:"p"},"like"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ilike"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"not_like"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"not_ilike"),". "),(0,a.kt)("p",null,"Here's how you can use these operators with two special characters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%"),": Matches any number of characters, including zero characters"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_"),": Matches exactly one character")),(0,a.kt)("h2",{id:"like-operator"},"LIKE Operator"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"like")," operator is used in a WHERE clause to search for a specified pattern in a column. "),(0,a.kt)("p",null,"Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Category")\n    .select()\n    .filter(\n        col("name")\n            .like(text("D%"))\n            .or(col("name").like(text("M___"))),\n    )\n    .execute(glue)\n    .await;\n')),(0,a.kt)("p",null,"In this example, the query will return all rows from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," table where the ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),' column starts with "D" or where the ',(0,a.kt)("inlineCode",{parentName:"p"},"name"),' is exactly four characters long and starts with "M".'),(0,a.kt)("h2",{id:"ilike-operator"},"ILIKE Operator"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ilike")," operator is used in a WHERE clause to search for a specified pattern in a column, regardless of case."),(0,a.kt)("p",null,"Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Category")\n    .select()\n    .filter(\n        col("name")\n            .ilike(text("D%"))\n            .or(col("name").ilike(text("M___"))),\n    )\n    .execute(glue)\n    .await;\n')),(0,a.kt)("p",null,"In this example, the query will return all rows from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," table where the ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),' column starts with "D" or "d", or where the ',(0,a.kt)("inlineCode",{parentName:"p"},"name"),' is exactly four characters long and starts with "M" or "m".'),(0,a.kt)("h2",{id:"not_like-operator"},"NOT_LIKE Operator"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"not_like")," operator is used in a WHERE clause to match rows that don't follow the specific pattern."),(0,a.kt)("p",null,"Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Category")\n    .select()\n    .filter(\n        col("name")\n            .not_like(text("D%"))\n            .and(col("name").not_like(text("M___"))),\n    )\n    .execute(glue)\n    .await;\n')),(0,a.kt)("p",null,"In this example, the query will return all rows from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," table where the ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),' column does not start with "D" and the ',(0,a.kt)("inlineCode",{parentName:"p"},"name"),' is not exactly four characters long and does not start with "M".'),(0,a.kt)("h2",{id:"not_ilike-operator"},"NOT_ILIKE Operator"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"not_ilike")," operator is used in a WHERE clause to match rows that don't follow the specific pattern, regardless of case."),(0,a.kt)("p",null,"Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Category")\n    .select()\n    .filter(\n        col("name")\n            .not_ilike(text("D%"))\n            .and(col("name").not_ilike(text("M___"))),\n    )\n    .execute(glue)\n    .await;\n')),(0,a.kt)("p",null,"In this example, the query will return all rows from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Category")," table where the ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),' column does not start with "D" or "d", and the ',(0,a.kt)("inlineCode",{parentName:"p"},"name"),' is not exactly four characters long and does not start with "M" or "m".'))}m.isMDXComponent=!0}}]);