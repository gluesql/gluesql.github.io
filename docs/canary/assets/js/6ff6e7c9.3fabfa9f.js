"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},N="mdxType",T={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),N=p(n),d=r,c=N["".concat(s,".").concat(d)]||N[d]||T[d]||i;return n?a.createElement(c,l(l({ref:t},u),{},{components:n})):a.createElement(c,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[N]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>T,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:9},l="INTERVAL",o={unversionedId:"sql-syntax/data-types/interval",id:"sql-syntax/data-types/interval",title:"INTERVAL",description:"The INTERVAL data type in GlueSQL is used to represent a period of time. In accordance with the ANSI SQL standard, several subtypes of INTERVAL can be used to represent different units of time, such as years, months, days, hours, minutes, and seconds. These subtypes are:",source:"@site/docs/sql-syntax/data-types/interval.md",sourceDirName:"sql-syntax/data-types",slug:"/sql-syntax/data-types/interval",permalink:"/docs/canary/docs/sql-syntax/data-types/interval",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"sqlSyntaxSidebar",previous:{title:"TIME",permalink:"/docs/canary/docs/sql-syntax/data-types/time"},next:{title:"LIST",permalink:"/docs/canary/docs/sql-syntax/data-types/list"}},s={},p=[{value:"Creating a Table with INTERVAL Columns",id:"creating-a-table-with-interval-columns",level:2},{value:"Inserting INTERVAL Values",id:"inserting-interval-values",level:2},{value:"INTERVAL Subtypes and Syntax",id:"interval-subtypes-and-syntax",level:2},{value:"Unsupported Conversions",id:"unsupported-conversions",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},N="wrapper";function T(e){let{components:t,...n}=e;return(0,r.kt)(N,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interval"},"INTERVAL"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL")," data type in GlueSQL is used to represent a period of time. In accordance with the ANSI SQL standard, several subtypes of ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL")," can be used to represent different units of time, such as years, months, days, hours, minutes, and seconds. These subtypes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YEAR"),(0,r.kt)("li",{parentName:"ul"},"YEAR TO MONTH"),(0,r.kt)("li",{parentName:"ul"},"MONTH"),(0,r.kt)("li",{parentName:"ul"},"DAY"),(0,r.kt)("li",{parentName:"ul"},"DAY TO HOUR"),(0,r.kt)("li",{parentName:"ul"},"DAY TO MINUTE"),(0,r.kt)("li",{parentName:"ul"},"DAY TO SECOND"),(0,r.kt)("li",{parentName:"ul"},"HOUR"),(0,r.kt)("li",{parentName:"ul"},"HOUR TO MINUTE"),(0,r.kt)("li",{parentName:"ul"},"HOUR TO SECOND"),(0,r.kt)("li",{parentName:"ul"},"MINUTE"),(0,r.kt)("li",{parentName:"ul"},"MINUTE TO SECOND"),(0,r.kt)("li",{parentName:"ul"},"SECOND")),(0,r.kt)("h2",{id:"creating-a-table-with-interval-columns"},"Creating a Table with INTERVAL Columns"),(0,r.kt)("p",null,"To create a table with ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL")," columns, simply use the ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL")," keyword for the data type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IntervalLog (\n    id INTEGER,\n    interval1 INTERVAL,\n    interval2 INTERVAL\n);\n")),(0,r.kt)("h2",{id:"inserting-interval-values"},"Inserting INTERVAL Values"),(0,r.kt)("p",null,"To insert ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL")," values into a table, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL")," keyword followed by a string literal representing the interval value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO IntervalLog VALUES\n    (1, INTERVAL '1-2' YEAR TO MONTH,         INTERVAL 30 MONTH),\n    (2, INTERVAL 12 DAY,                      INTERVAL '35' HOUR),\n    (3, INTERVAL '12' MINUTE,                 INTERVAL 300 SECOND),\n    (4, INTERVAL '-3 14' DAY TO HOUR,         INTERVAL '3 12:30' DAY TO MINUTE),\n    (5, INTERVAL '3 14:00:00' DAY TO SECOND,  INTERVAL '3 12:30:12.1324' DAY TO SECOND),\n    (6, INTERVAL '12:00' HOUR TO MINUTE,      INTERVAL '-12:30:12' HOUR TO SECOND),\n    (7, INTERVAL '-1000-11' YEAR TO MONTH,    INTERVAL '-30:11' MINUTE TO SECOND);\n")),(0,r.kt)("h2",{id:"interval-subtypes-and-syntax"},"INTERVAL Subtypes and Syntax"),(0,r.kt)("p",null,"Here are some examples of how to use different ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL")," subtypes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YEAR: ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERVAL '5' YEAR")),(0,r.kt)("li",{parentName:"ul"},"YEAR TO MONTH: ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERVAL '5-3' YEAR TO MONTH")),(0,r.kt)("li",{parentName:"ul"},"MONTH: ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERVAL '6' MONTH")),(0,r.kt)("li",{parentName:"ul"},"DAY: ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERVAL '7' DAY")),(0,r.kt)("li",{parentName:"ul"},"DAY TO HOUR: ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERVAL '2 12' DAY TO HOUR")),(0,r.kt)("li",{parentName:"ul"},"DAY TO MINUTE: ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERVAL '2 12:30' DAY TO MINUTE")),(0,r.kt)("li",{parentName:"ul"},"DAY TO SECOND: ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERVAL '2 12:30:45' DAY TO SECOND")),(0,r.kt)("li",{parentName:"ul"},"HOUR: ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERVAL '18' HOUR")),(0,r.kt)("li",{parentName:"ul"},"HOUR TO MINUTE: ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERVAL '18:30' HOUR TO MINUTE")),(0,r.kt)("li",{parentName:"ul"},"HOUR TO SECOND: ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERVAL '18:30:45' HOUR TO SECOND")),(0,r.kt)("li",{parentName:"ul"},"MINUTE: ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERVAL '45' MINUTE")),(0,r.kt)("li",{parentName:"ul"},"MINUTE TO SECOND: ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERVAL '45:30' MINUTE TO SECOND")),(0,r.kt)("li",{parentName:"ul"},"SECOND: ",(0,r.kt)("inlineCode",{parentName:"li"},"INTERVAL '30' SECOND"))),(0,r.kt)("h2",{id:"unsupported-conversions"},"Unsupported Conversions"),(0,r.kt)("p",null,"In GlueSQL, you cannot convert between different ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL")," subtypes, such as converting 1 MONTH to DAYS or converting YEAR TO MONTH to DAY TO SECOND. These conversions are not supported."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL")," data type is a powerful way to represent time periods in GlueSQL. By following the ANSI SQL standard, you can use a combination of subtypes to represent complex periods of time. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERVAL")," keyword when creating tables and inserting values to make the most of this data type."))}T.isMDXComponent=!0}}]);