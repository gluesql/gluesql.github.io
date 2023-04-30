"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6760],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(a),m=l,h=s["".concat(u,".").concat(m)]||s[m]||c[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8697:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:4},i="Updating Data",o={unversionedId:"ast-builder/updating-data",id:"ast-builder/updating-data",title:"Updating Data",description:"In this section, we will discuss how to update data in a table using GlueSQL.",source:"@site/docs/ast-builder/updating-data.md",sourceDirName:"ast-builder",slug:"/ast-builder/updating-data",permalink:"/docs/dev/docs/ast-builder/updating-data",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"astBuilderSidebar",previous:{title:"Inserting Data",permalink:"/docs/dev/docs/ast-builder/inserting-data"},next:{title:"Deleting Data",permalink:"/docs/dev/docs/ast-builder/deleting-data"}},u={},d=[{value:"Basic Update",id:"basic-update",level:2},{value:"Update with Multiple Columns",id:"update-with-multiple-columns",level:2},{value:"Update with Filter",id:"update-with-filter",level:2}],p={toc:d},s="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"updating-data"},"Updating Data"),(0,l.kt)("p",null,"In this section, we will discuss how to update data in a table using GlueSQL."),(0,l.kt)("h2",{id:"basic-update"},"Basic Update"),(0,l.kt)("p",null,"To update data in a table, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"update")," method on a table object, followed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," method to specify the column and the new value. You can then use the ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," method to apply the changes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Foo")\n    .update()\n    .set("score", col("score").div(10))\n    .execute(glue)\n    .await;\nlet expected = Ok(Payload::Update(3));\ntest(actual, expected);\n')),(0,l.kt)("p",null,"This code updates all rows in the table ",(0,l.kt)("inlineCode",{parentName:"p"},"Foo"),", dividing the ",(0,l.kt)("inlineCode",{parentName:"p"},"score")," column value by 10."),(0,l.kt)("h2",{id:"update-with-multiple-columns"},"Update with Multiple Columns"),(0,l.kt)("p",null,"To update multiple columns, you can chain multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"set")," methods with the desired column names and new values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Foo")\n    .update()\n    .set("score", "score * 2 + 5")\n    .set("flag", col("flag").negate())\n    .execute(glue)\n    .await;\nlet expected = Ok(Payload::Update(3));\ntest(actual, expected);\n')),(0,l.kt)("p",null,"This code updates all rows in the table ",(0,l.kt)("inlineCode",{parentName:"p"},"Foo"),", applying the following changes:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"score")," column value is multiplied by 2 and 5 is added."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"flag")," column value is negated (i.e., true becomes false and false becomes true).")),(0,l.kt)("h2",{id:"update-with-filter"},"Update with Filter"),(0,l.kt)("p",null,"If you want to update only specific rows, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"filter")," method to provide a condition that the rows must meet."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Foo")\n    .update()\n    .set("score", "score * 2 + 5")\n    .set("flag", col("flag").negate())\n    .filter(col("score").lte(30))\n    .execute(glue)\n    .await;\nlet expected = Ok(Payload::Update(2));\ntest(actual, expected);\n')),(0,l.kt)("p",null,"This code updates the rows in the table ",(0,l.kt)("inlineCode",{parentName:"p"},"Foo")," where the ",(0,l.kt)("inlineCode",{parentName:"p"},"score")," column value is less than or equal to 30. The ",(0,l.kt)("inlineCode",{parentName:"p"},"score")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"flag")," column values are updated as described in the previous example."))}c.isMDXComponent=!0}}]);