"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),f=l,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const i={},a='SQL Function - "SPLICE"',o={unversionedId:"sql-syntax/functions/list-map/splice",id:"sql-syntax/functions/list-map/splice",title:'SQL Function - "SPLICE"',description:'The "SPLICE" function in GlueSQL is used to modify elements in a list. It allows you to remove or replace elements in a list. The syntax for the "SPLICE" function is as follows:',source:"@site/docs/sql-syntax/functions/list-map/splice.md",sourceDirName:"sql-syntax/functions/list-map",slug:"/sql-syntax/functions/list-map/splice",permalink:"/docs/dev/sql-syntax/functions/list-map/splice",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"SLICE",permalink:"/docs/dev/sql-syntax/functions/list-map/slice"},next:{title:"CALC_DISTANCE",permalink:"/docs/dev/sql-syntax/functions/geometry/calc-distance"}},s={},c=[{value:"Example",id:"example",level:2},{value:"Error",id:"error",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sql-function---splice"},'SQL Function - "SPLICE"'),(0,l.kt)("p",null,'The "SPLICE" function in GlueSQL is used to modify elements in a list. It allows you to remove or replace elements in a list. The syntax for the "SPLICE" function is as follows:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SPLICE(list1, start_index, end_index [, list2])\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list1"),": The list you want to modify."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"start_index"),": The position at which you want to start the modification."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"end_index"),": The exclusive end position for the modification."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list2")," (optional): A list of elements to insert in place of the removed elements.")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,'We can use the "SPLICE" function to modify the list in various ways:'),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Remove elements from a list:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Remove elements at 1, 2 from the list '[1, 2, 3]'\nSELECT SPLICE(CAST('[1, 2, 3, 4, 5]' AS List), 1, 3) AS result;\n-- Output: '[1, 4, 5]'\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Replace elements in a list:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Replace elements at 1, 2, 3 with '[100, 99]' in the list '[1, 2, 3, 4, 5]'\nSELECT SPLICE(CAST('[1, 2, 3, 4, 5]' AS List), 1, 4, CAST('[100, 99]' AS List)) AS result;\n-- Output: '[1, 100, 99, 5]'\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"'start' is processed so that it is not less than 0 and 'end' is not greater than the length of the list.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT SPLICE(CAST('[1, 2, 3]' AS List), -1, 2, CAST('[100, 99]' AS List)) AS result;\n-- Output: '[100, 99, 3]'\n")),(0,l.kt)("h2",{id:"error"},"Error"),(0,l.kt)("p",null,'If you use the "SPLICE" function with invalid inputs, it will result in an error. For example:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"-- Using SPLICE on a non-list value will result in an error.\nSELECT SPLICE(3, 1, 2) AS result;\n-- EvaluateError::ListTypeRequired\n")))}m.isMDXComponent=!0}}]);