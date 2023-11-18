"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6489],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,o(o({ref:e},d),{},{components:n})):r.createElement(m,o({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},174:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="TO_DATE",s={unversionedId:"sql-syntax/functions/datetime/to-date",id:"sql-syntax/functions/datetime/to-date",title:"TO_DATE",description:"The TO_DATE function in SQL is used to convert a string into a DATE. This function takes two arguments, the string to be converted and a format string that specifies the format of the input string.",source:"@site/docs/sql-syntax/functions/datetime/to-date.md",sourceDirName:"sql-syntax/functions/datetime",slug:"/sql-syntax/functions/datetime/to-date",permalink:"/docs/0.15/sql-syntax/functions/datetime/to-date",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"NOW",permalink:"/docs/0.15/sql-syntax/functions/datetime/now"},next:{title:"TO_TIME",permalink:"/docs/0.15/sql-syntax/functions/datetime/to-time"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Converting a string to a DATE",id:"converting-a-string-to-a-date",level:3},{value:"Converting a string to a DATE with a different format",id:"converting-a-string-to-a-date-with-a-different-format",level:3},{value:"Error Handling",id:"error-handling",level:2}],d={toc:c},u="wrapper";function p(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"to_date"},"TO_DATE"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TO_DATE")," function in SQL is used to convert a string into a DATE. This function takes two arguments, the string to be converted and a format string that specifies the format of the input string."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"TO_DATE(string, format)\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"converting-a-string-to-a-date"},"Converting a string to a DATE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"VALUES(TO_DATE('2017-06-15', '%Y-%m-%d'));\n")),(0,a.kt)("p",null,"In this example, the string '2017-06-15' is converted into a DATE using the format '%Y-%m-%d', where %Y is the four-digit year, %m is the two-digit month, and %d is the two-digit day."),(0,a.kt)("h3",{id:"converting-a-string-to-a-date-with-a-different-format"},"Converting a string to a DATE with a different format"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT TO_DATE('2017-jun-15','%Y-%b-%d') AS date;\n")),(0,a.kt)("p",null,"In this example, the string '2017-jun-15' is converted into a DATE using the format '%Y-%b-%d', where %Y is the four-digit year, %b is the abbreviated month name, and %d is the two-digit day."),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TO_DATE")," function requires a string value as its first argument. If a non-string value is provided, it will return an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT TO_DATE(DATE '2017-06-15','%Y-%m-%d') AS date;\n")),(0,a.kt)("p",null,"In this case, the DATE '2017-06-15' is not a string and will cause an error."),(0,a.kt)("p",null,"Additionally, if the format string does not match the format of the input string, an error will also be returned. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT TO_DATE('2015-09-05', '%Y-%m') AS date;\n")),(0,a.kt)("p",null,"In this case, the format string '%Y-%m' does not match the input string '2015-09-05', so an error will be returned."))}p.isMDXComponent=!0}}]);