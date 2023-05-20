"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="TO_TIME",s={unversionedId:"sql-syntax/functions/datetime/to-time",id:"sql-syntax/functions/datetime/to-time",title:"TO_TIME",description:"The TO_TIME function in SQL is used to convert a string into a TIME. This function takes two arguments, the string to be converted and a format string that specifies the format of the input string.",source:"@site/docs/sql-syntax/functions/datetime/to-time.md",sourceDirName:"sql-syntax/functions/datetime",slug:"/sql-syntax/functions/datetime/to-time",permalink:"/docs/dev/sql-syntax/functions/datetime/to-time",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sqlSyntaxSidebar",previous:{title:"TO_DATE",permalink:"/docs/dev/sql-syntax/functions/datetime/to-date"},next:{title:"TO_TIMESTAMP",permalink:"/docs/dev/sql-syntax/functions/datetime/to-timestamp"}},l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Converting a string to a TIME",id:"converting-a-string-to-a-time",level:3},{value:"Selecting a converted string to a TIME",id:"selecting-a-converted-string-to-a-time",level:3},{value:"Error Handling",id:"error-handling",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"to_time"},"TO_TIME"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TO_TIME")," function in SQL is used to convert a string into a TIME. This function takes two arguments, the string to be converted and a format string that specifies the format of the input string."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"TO_TIME(string, format)\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"converting-a-string-to-a-time"},"Converting a string to a TIME"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"VALUES(TO_TIME('23:56:04', '%H:%M:%S'));\n")),(0,a.kt)("p",null,"In this example, the string '23:56:04' is converted into a TIME using the format '%H:%M:%S', where %H is the two-digit hour, %M is the two-digit minute, and %S is the two-digit second."),(0,a.kt)("h3",{id:"selecting-a-converted-string-to-a-time"},"Selecting a converted string to a TIME"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT TO_TIME('23:56:04','%H:%M:%S') AS time;\n")),(0,a.kt)("p",null,"In this example, the string '23:56:04' is converted into a TIME using the format '%H:%M:%S' and selected as 'time'."),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TO_TIME")," function requires a string value as its first argument. If a non-string value is provided, it will return an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT TO_TIME(TIME '23:56:04','%H:%M:%S') AS time;\n")),(0,a.kt)("p",null,"In this case, the TIME '23:56:04' is not a string and will cause an error."),(0,a.kt)("p",null,"Additionally, if the format string does not match the format of the input string, an error will also be returned. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT TO_TIME('23:56', '%H:%M:%S') AS time;\n")),(0,a.kt)("p",null,"In this case, the format string '%H:%M:%S' does not match the input string '23:56', so an error will be returned."))}d.isMDXComponent=!0}}]);