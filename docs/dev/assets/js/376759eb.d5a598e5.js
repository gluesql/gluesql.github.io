"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:5},o="Deleting Data",i={unversionedId:"ast-builder/statements/data-manipulation/deleting-data",id:"ast-builder/statements/data-manipulation/deleting-data",title:"Deleting Data",description:"In this section, we will discuss how to delete data from a table using GlueSQL.",source:"@site/docs/ast-builder/statements/data-manipulation/deleting-data.md",sourceDirName:"ast-builder/statements/data-manipulation",slug:"/ast-builder/statements/data-manipulation/deleting-data",permalink:"/docs/dev/docs/ast-builder/statements/data-manipulation/deleting-data",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"astBuilderSidebar",previous:{title:"Updating Data",permalink:"/docs/dev/docs/ast-builder/statements/data-manipulation/updating-data"},next:{title:"Conditional",permalink:"/docs/dev/docs/ast-builder/expressions/conditional"}},s={},d=[{value:"Delete with Filter",id:"delete-with-filter",level:2},{value:"Delete All Rows",id:"delete-all-rows",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deleting-data"},"Deleting Data"),(0,r.kt)("p",null,"In this section, we will discuss how to delete data from a table using GlueSQL."),(0,r.kt)("h2",{id:"delete-with-filter"},"Delete with Filter"),(0,r.kt)("p",null,"To delete specific rows from a table, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," method on a table object, followed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," method to provide a condition that the rows must meet. You can then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," method to apply the changes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Foo")\n    .delete()\n    .filter(col("flag").eq(false))\n    .execute(glue)\n    .await;\nlet expected = Ok(Payload::Delete(1));\ntest(actual, expected);\n')),(0,r.kt)("p",null,"This code deletes the rows in the table ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," where the ",(0,r.kt)("inlineCode",{parentName:"p"},"flag")," column value is false."),(0,r.kt)("h2",{id:"delete-all-rows"},"Delete All Rows"),(0,r.kt)("p",null,"To delete all rows from a table, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," method on a table object, followed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Foo").delete().execute(glue).await;\nlet expected = Ok(Payload::Delete(2));\ntest(actual, expected);\n')),(0,r.kt)("p",null,"This code deletes all rows from the table ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo"),"."))}p.isMDXComponent=!0}}]);