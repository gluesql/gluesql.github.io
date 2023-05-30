"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},l="GET_Y",i={unversionedId:"sql-syntax/functions/geometry/get-y",id:"sql-syntax/functions/geometry/get-y",title:"GET_Y",description:"The GET_Y function returns the y-coordinate of a given POINT data type. It takes one POINT data type argument and returns a FLOAT value representing the y-coordinate.",source:"@site/docs/sql-syntax/functions/geometry/get-y.md",sourceDirName:"sql-syntax/functions/geometry",slug:"/sql-syntax/functions/geometry/get-y",permalink:"/docs/0.14/sql-syntax/functions/geometry/get-y",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"GET_X",permalink:"/docs/0.14/sql-syntax/functions/geometry/get-x"},next:{title:"POINT",permalink:"/docs/0.14/sql-syntax/functions/geometry/point"}},p={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Get the Y-coordinate from a point",id:"example-1-get-the-y-coordinate-from-a-point",level:3},{value:"Example 2: Get the Y-coordinate from a point using CAST",id:"example-2-get-the-y-coordinate-from-a-point-using-cast",level:3},{value:"Example 3: Get the Y-coordinate from a point using POINT function",id:"example-3-get-the-y-coordinate-from-a-point-using-point-function",level:3},{value:"Errors",id:"errors",level:2}],s={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get_y"},"GET_Y"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GET_Y")," function returns the y-coordinate of a given ",(0,r.kt)("inlineCode",{parentName:"p"},"POINT")," data type. It takes one ",(0,r.kt)("inlineCode",{parentName:"p"},"POINT")," data type argument and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"FLOAT")," value representing the y-coordinate."),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GET_Y(point)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"point"),": The geographical coordinate of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Point")," from which the Y-coordinate will be extracted.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Consider the following table ",(0,r.kt)("inlineCode",{parentName:"p"},"PointGroup"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE PointGroup (\n    point_field POINT\n);\n")),(0,r.kt)("p",null,"With the following data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO PointGroup VALUES (POINT(0.3134, 0.156));\n")),(0,r.kt)("h3",{id:"example-1-get-the-y-coordinate-from-a-point"},"Example 1: Get the Y-coordinate from a point"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT GET_Y(point_field) AS point_field FROM PointGroup;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"point_field"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.156")))),(0,r.kt)("h3",{id:"example-2-get-the-y-coordinate-from-a-point-using-cast"},"Example 2: Get the Y-coordinate from a point using CAST"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT GET_Y(CAST('POINT(0.1 -0.2)' AS POINT)) AS ptx;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ptx"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-0.2")))),(0,r.kt)("h3",{id:"example-3-get-the-y-coordinate-from-a-point-using-point-function"},"Example 3: Get the Y-coordinate from a point using POINT function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT GET_Y(POINT(0.1, -0.2)) AS ptx;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ptx"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-0.2")))),(0,r.kt)("h2",{id:"errors"},"Errors"),(0,r.kt)("p",null,"If the argument is not of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Point"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"FunctionRequiresPointValue")," error will be thrown."))}m.isMDXComponent=!0}}]);