"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="JOIN",l={unversionedId:"sql-syntax/statements/querying/join",id:"sql-syntax/statements/querying/join",title:"JOIN",description:"GlueSQL supports two types of JOIN operations:",source:"@site/docs/sql-syntax/statements/querying/join.md",sourceDirName:"sql-syntax/statements/querying",slug:"/sql-syntax/statements/querying/join",permalink:"/docs/sql-syntax/statements/querying/join",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sqlSyntaxSidebar",previous:{title:"WHERE",permalink:"/docs/sql-syntax/statements/querying/where"},next:{title:"LIMIT & OFFSET",permalink:"/docs/sql-syntax/statements/querying/limit"}},s={},p=[{value:"(INNER) JOIN",id:"inner-join",level:2},{value:"LEFT (OUTER) JOIN",id:"left-outer-join",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"join"},"JOIN"),(0,a.kt)("p",null,"GlueSQL supports two types of JOIN operations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(INNER) JOIN"),(0,a.kt)("li",{parentName:"ul"},"LEFT (OUTER) JOIN")),(0,a.kt)("p",null,"Please note that ",(0,a.kt)("inlineCode",{parentName:"p"},"FULL OUTER JOIN")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RIGHT JOIN")," are currently not supported."),(0,a.kt)("h2",{id:"inner-join"},"(INNER) JOIN"),(0,a.kt)("p",null,"An INNER JOIN combines rows from two tables based on a specified condition. Rows that do not satisfy the condition are excluded from the result."),(0,a.kt)("p",null,"Here's an example using the provided test code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Item INNER JOIN Player ON Player.id = Item.player_id WHERE Player.id = 1;\n")),(0,a.kt)("p",null,"This query retrieves all rows from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Player")," tables where the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Player")," table matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"player_id")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," table, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Player.id")," is equal to 1."),(0,a.kt)("h2",{id:"left-outer-join"},"LEFT (OUTER) JOIN"),(0,a.kt)("p",null,"A LEFT JOIN (also known as LEFT OUTER JOIN) combines rows from two tables based on a specified condition. For each row in the left table that does not have a matching row in the right table, the result will contain NULL values."),(0,a.kt)("p",null,"Here's an example using the provided test code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Item LEFT JOIN Player ON Player.id = Item.player_id WHERE quantity = 1;\n")),(0,a.kt)("p",null,"This query retrieves all rows from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," table and any matching rows from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Player")," table where the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Player")," table matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"player_id")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," table. If there's no match, NULL values are returned for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Player")," table columns. The result is then filtered by the ",(0,a.kt)("inlineCode",{parentName:"p"},"quantity")," column in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Item")," table with a value of 1."),(0,a.kt)("p",null,"Remember to replace the table names, column names, and data types as needed for your specific use case."))}d.isMDXComponent=!0}}]);