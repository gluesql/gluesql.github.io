"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},l="CALC_DISTANCE",i={unversionedId:"sql-syntax/functions/geometry/calc-distance",id:"sql-syntax/functions/geometry/calc-distance",title:"CALC_DISTANCE",description:"The CALC_DISTANCE function is used to calculate the Euclidean distance between two Point type geographical coordinates.",source:"@site/docs/sql-syntax/functions/geometry/calc-distance.md",sourceDirName:"sql-syntax/functions/geometry",slug:"/sql-syntax/functions/geometry/calc-distance",permalink:"/docs/dev/sql-syntax/functions/geometry/calc-distance",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:'SQL Function - "SPLICE"',permalink:"/docs/dev/sql-syntax/functions/list-map/splice"},next:{title:"GET_X",permalink:"/docs/dev/sql-syntax/functions/geometry/get-x"}},c={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Calculate the distance between two points",id:"example-1-calculate-the-distance-between-two-points",level:3},{value:"Errors",id:"errors",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"calc_distance"},"CALC_DISTANCE"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CALC_DISTANCE")," function is used to calculate the Euclidean distance between two ",(0,r.kt)("inlineCode",{parentName:"p"},"Point")," type geographical coordinates."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CALC_DISTANCE(point1, point2)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"point1"),": The first geographical coordinate of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Point"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"point2"),": The second geographical coordinate of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Point"),".")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Consider the following table ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Foo (\n    geo1 Point,\n    geo2 Point,\n    bar Float\n);\n")),(0,r.kt)("p",null,"With the following data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Foo VALUES (POINT(0.3134, 3.156), POINT(1.415, 3.231), 3);\n")),(0,r.kt)("h3",{id:"example-1-calculate-the-distance-between-two-points"},"Example 1: Calculate the distance between two points"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CALC_DISTANCE(geo1, geo2) AS georesult FROM Foo;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"georesult"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.104150152832485")))),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the number of arguments is not 2, a ",(0,r.kt)("inlineCode",{parentName:"li"},"FunctionArgsLengthNotMatching")," error will be thrown."),(0,r.kt)("li",{parentName:"ol"},"If any of the arguments are not of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Point"),", a ",(0,r.kt)("inlineCode",{parentName:"li"},"FunctionRequiresPointValue")," error will be thrown."),(0,r.kt)("li",{parentName:"ol"},"If any of the arguments are ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),", the result will be ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),".")))}d.isMDXComponent=!0}}]);