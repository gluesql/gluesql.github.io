"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||l;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:5},o="Deleting Data",i={unversionedId:"ast-builder/deleting-data",id:"ast-builder/deleting-data",title:"Deleting Data",description:"In this section, we will discuss how to delete data from a table using GlueSQL.",source:"@site/docs/ast-builder/deleting-data.md",sourceDirName:"ast-builder",slug:"/ast-builder/deleting-data",permalink:"/docs/ast-builder/deleting-data",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"astBuilderSidebar",previous:{title:"Updating Data",permalink:"/docs/ast-builder/updating-data"}},d={},c=[{value:"Delete with Filter",id:"delete-with-filter",level:2},{value:"Delete All Rows",id:"delete-all-rows",level:2}],s={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deleting-data"},"Deleting Data"),(0,a.kt)("p",null,"In this section, we will discuss how to delete data from a table using GlueSQL."),(0,a.kt)("h2",{id:"delete-with-filter"},"Delete with Filter"),(0,a.kt)("p",null,"To delete specific rows from a table, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," method on a table object, followed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," method to provide a condition that the rows must meet. You can then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," method to apply the changes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Foo")\n    .delete()\n    .filter(col("flag").eq(false))\n    .execute(glue)\n    .await;\nlet expected = Ok(Payload::Delete(1));\ntest(actual, expected);\n')),(0,a.kt)("p",null,"This code deletes the rows in the table ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo")," where the ",(0,a.kt)("inlineCode",{parentName:"p"},"flag")," column value is false."),(0,a.kt)("h2",{id:"delete-all-rows"},"Delete All Rows"),(0,a.kt)("p",null,"To delete all rows from a table, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," method on a table object, followed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Foo").delete().execute(glue).await;\nlet expected = Ok(Payload::Delete(2));\ntest(actual, expected);\n')),(0,a.kt)("p",null,"This code deletes all rows from the table ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo"),"."))}p.isMDXComponent=!0}}]);