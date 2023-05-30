"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="Current Date and Time",c={unversionedId:"ast-builder/functions/date-&-time/current-date-and-time",id:"ast-builder/functions/date-&-time/current-date-and-time",title:"Current Date and Time",description:"GlueSQL provides a function to get the current date and time: now.",source:"@site/docs/ast-builder/functions/date-&-time/current-date-and-time.md",sourceDirName:"ast-builder/functions/date-&-time",slug:"/ast-builder/functions/date-&-time/current-date-and-time",permalink:"/docs/0.14/ast-builder/functions/date-&-time/current-date-and-time",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Conversion",permalink:"/docs/0.14/ast-builder/functions/date-&-time/conversion"},next:{title:"Date and Time Extraction",permalink:"/docs/0.14/ast-builder/functions/date-&-time/date-and-time-extraction"}},u={},l=[{value:"Now - now",id:"now---now",level:2}],s={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"current-date-and-time"},"Current Date and Time"),(0,a.kt)("p",null,"GlueSQL provides a function to get the current date and time: ",(0,a.kt)("inlineCode",{parentName:"p"},"now"),"."),(0,a.kt)("h2",{id:"now---now"},"Now - now"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"now")," function returns the current date and time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Record")\n    .select()\n    .filter(col("time_stamp").gt(now()))  // select rows where "time_stamp" is later than current time\n    .project("id, time_stamp")\n    .execute(glue)\n    .await;\n')),(0,a.kt)("p",null,"In the above example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," method uses ",(0,a.kt)("inlineCode",{parentName:"p"},"now"),' to select rows where the "time_stamp" column is later than the current time.'),(0,a.kt)("p",null,"When inserting data into a table, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"now")," function to record the current time:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Record")\n    .insert()\n    .values(vec![\n        "1, \'2022-12-23T05:30:11.164932863\'",\n        "2, NOW()",  // Inserts the current time\n        "3, \'9999-12-31T23:59:40.364832862\'",\n    ])\n    .execute(glue)\n    .await;\n')),(0,a.kt)("p",null,'In the example above, the "time_stamp" column for the row with id 2 is set to the current time at the moment of insertion.'))}p.isMDXComponent=!0}}]);