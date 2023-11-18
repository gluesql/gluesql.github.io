"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4538],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,l=m(t,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(f,o(o({ref:e},l),{},{components:n})):a.createElement(f,o({ref:e},l))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var m={};for(var c in e)hasOwnProperty.call(e,c)&&(m[c]=e[c]);m.originalType=t,m[p]="string"==typeof t?t:r,o[1]=m;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5730:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="Formatting",m={unversionedId:"ast-builder/functions/date-&-time/formatting",id:"ast-builder/functions/date-&-time/formatting",title:"Formatting",description:"In GlueSQL, you can format date, time, and timestamp values to a specific format using the format function.",source:"@site/docs/ast-builder/functions/date-&-time/formatting.md",sourceDirName:"ast-builder/functions/date-&-time",slug:"/ast-builder/functions/date-&-time/formatting",permalink:"/docs/dev/ast-builder/functions/date-&-time/formatting",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Date and Time Extraction",permalink:"/docs/dev/ast-builder/functions/date-&-time/date-and-time-extraction"},next:{title:"List and Map Concatenation",permalink:"/docs/dev/ast-builder/functions/list-&-map/list-and-map-concatenation"}},c={},s=[{value:"Formatting Date",id:"formatting-date",level:2},{value:"Formatting Time",id:"formatting-time",level:2},{value:"Formatting Timestamp",id:"formatting-timestamp",level:2}],l={toc:s},p="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"formatting"},"Formatting"),(0,r.kt)("p",null,"In GlueSQL, you can format date, time, and timestamp values to a specific format using the ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," function."),(0,r.kt)("p",null,"For this tutorial, we assume there's a table named ",(0,r.kt)("inlineCode",{parentName:"p"},"Visitor")," with columns ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"visit_date"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"visit_time"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"visit_timestamp"),"."),(0,r.kt)("h2",{id:"formatting-date"},"Formatting Date"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," function can be used to change the format of a date. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Visitor")\n    .select()\n    .project("name")\n    .project("visit_date")\n    .project(col("visit_date").format(text("%Y-%m")))  // Formats the visit_date to the year-month format\n    .project(format(col("visit_date"), text("%m")))  // Formats the visit_date to the month format\n    .execute(glue)\n    .await;\n')),(0,r.kt)("h2",{id:"formatting-time"},"Formatting Time"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," function can also be used to change the format of a time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Visitor")\n    .select()\n    .project("name")\n    .project("visit_time")\n    .project(col("visit_time").format(text("%H:%M:%S")))  // Formats the visit_time to the hour-minute-second format\n    .project(format(col("visit_time"), text("%M:%S")))  // Formats the visit_time to the minute-second format\n    .execute(glue)\n    .await;\n')),(0,r.kt)("h2",{id:"formatting-timestamp"},"Formatting Timestamp"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"format")," function can be used to change the format of a timestamp. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Visitor")\n    .select()\n    .project("name")\n    .project("visit_timestamp")\n    .project(col("visit_timestamp").format(text("%Y-%m-%d %H:%M:%S")))  // Formats the visit_timestamp to the year-month-date hour-minute-second format\n    .project(format(col("visit_timestamp"), text("%Y-%m-%d %H:%M:%S")))  // Formats the visit_timestamp to the year-month-date hour-minute-second format\n    .execute(glue)\n    .await;\n')))}u.isMDXComponent=!0}}]);