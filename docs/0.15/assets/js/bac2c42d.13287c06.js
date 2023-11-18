"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3},o="Inserting Data",s={unversionedId:"ast-builder/statements/data-manipulation/inserting-data",id:"ast-builder/statements/data-manipulation/inserting-data",title:"Inserting Data",description:"In this section, we will discuss how to insert data into a table using GlueSQL.",source:"@site/docs/ast-builder/statements/data-manipulation/inserting-data.md",sourceDirName:"ast-builder/statements/data-manipulation",slug:"/ast-builder/statements/data-manipulation/inserting-data",permalink:"/docs/0.15/ast-builder/statements/data-manipulation/inserting-data",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"autoSidebar",previous:{title:"Data Sorting and Limiting",permalink:"/docs/0.15/ast-builder/statements/querying/data-sorting-and-limiting"},next:{title:"Updating Data",permalink:"/docs/0.15/ast-builder/statements/data-manipulation/updating-data"}},l={},u=[{value:"Basic Insert",id:"basic-insert",level:2},{value:"Insert with Specified Columns",id:"insert-with-specified-columns",level:2},{value:"Insert from Source",id:"insert-from-source",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"inserting-data"},"Inserting Data"),(0,i.kt)("p",null,"In this section, we will discuss how to insert data into a table using GlueSQL."),(0,i.kt)("h2",{id:"basic-insert"},"Basic Insert"),(0,i.kt)("p",null,"To insert data into a table, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"insert")," method on a table object. You can then use the ",(0,i.kt)("inlineCode",{parentName:"p"},"values")," method to provide the values you want to insert."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Foo")\n    .insert()\n    .values(vec!["1, \'Fruit\', 0.1", "2, \'Meat\', 0.8"])\n    .execute(glue)\n    .await;\nlet expected = Ok(Payload::Insert(2));\ntest(actual, expected);\n')),(0,i.kt)("p",null,"This code inserts two rows into the table ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo"),". The first row has the values ",(0,i.kt)("inlineCode",{parentName:"p"},"1, 'Fruit', 0.1")," and the second row has the values ",(0,i.kt)("inlineCode",{parentName:"p"},"2, 'Meat', 0.8"),"."),(0,i.kt)("h2",{id:"insert-with-specified-columns"},"Insert with Specified Columns"),(0,i.kt)("p",null,"If you want to specify the columns to insert data into, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"columns")," method followed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"values")," method. The ",(0,i.kt)("inlineCode",{parentName:"p"},"values")," method should contain the data for the specified columns."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Foo")\n    .insert()\n    .columns("id, name")\n    .values(vec![vec![num(3), text("Drink")]])\n    .execute(glue)\n    .await;\nlet expected = Ok(Payload::Insert(1));\ntest(actual, expected);\n')),(0,i.kt)("p",null,"This code inserts a new row into the table ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo")," with the specified columns ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"rate")," column is not specified, so it will be set to its default value."),(0,i.kt)("h2",{id:"insert-from-source"},"Insert from Source"),(0,i.kt)("p",null,"You can also insert data into a table using a ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," statement as the source. To do this, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"as_select")," method followed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Bar")\n    .insert()\n    .as_select(table("Foo").select().project("id, name"))\n    .execute(glue)\n    .await;\nlet expected = Ok(Payload::Insert(3));\ntest(actual, expected);\n')),(0,i.kt)("p",null,"This code inserts data into the table ",(0,i.kt)("inlineCode",{parentName:"p"},"Bar")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," statement on the table ",(0,i.kt)("inlineCode",{parentName:"p"},"Foo"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"project")," method is used to specify the columns ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," as the source data."))}p.isMDXComponent=!0}}]);