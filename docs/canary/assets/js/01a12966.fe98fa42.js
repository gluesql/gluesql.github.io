"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),g=o,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="Node.js",s={unversionedId:"getting-started/nodejs",id:"getting-started/nodejs",title:"Node.js",description:"This guide will help you get started with GlueSQL in a Node.js project. First, install the gluesql package using npm by running the following command in your terminal:",source:"@site/docs/getting-started/nodejs.md",sourceDirName:"getting-started",slug:"/getting-started/nodejs",permalink:"/docs/getting-started/nodejs",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"gettingStartedSidebar",previous:{title:"JavaScript (Web Browser)",permalink:"/docs/getting-started/javascript-web"},next:{title:"Command-Line Interface",permalink:"/docs/getting-started/cli"}},l={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nodejs"},"Node.js"),(0,o.kt)("p",null,"This guide will help you get started with GlueSQL in a Node.js project. First, install the ",(0,o.kt)("inlineCode",{parentName:"p"},"gluesql")," package using npm by running the following command in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install gluesql\n")),(0,o.kt)("p",null,"Alternatively, you can add it as a dependency in your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "gluesql": "latest"\n  }\n}\n')),(0,o.kt)("p",null,"Please note that the Node.js version of GlueSQL currently supports only non-persistent memory storage."),(0,o.kt)("p",null,"Next, you can use GlueSQL in your Node.js project by following this simple example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { gluesql } = require('gluesql');\nconst db = gluesql();\n\nasync function run() {\n  await db.query(`\n    CREATE TABLE User (id INTEGER, name TEXT);\n    CREATE TABLE Device (name TEXT, userId INTEGER);\n    INSERT INTO User VALUES (1, 'glue'), (2, 'sticky'), (3, 'watt');\n    INSERT INTO Device VALUES ('Phone', 1), ('Mic', 1), ('Monitor', 3), ('Mouse', 2), ('Touchpad', 2);\n  `);\n\n  const sql = `\n    SELECT\n      u.name as user,\n      d.name as device\n    FROM User u\n    JOIN Device d ON u.id = d.userId\n  `;\n  const [{ rows }] = await db.query(sql);\n  console.table(rows);\n}\n\nrun();\n")),(0,o.kt)("p",null,"This example demonstrates how to create tables, insert data, and perform a join query using GlueSQL in Node.js."))}d.isMDXComponent=!0}}]);