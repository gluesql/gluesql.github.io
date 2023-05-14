"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="POINT",i={unversionedId:"sql-syntax/functions/geometry/point",id:"sql-syntax/functions/geometry/point",title:"POINT",description:"The POINT function creates a point value using the provided x and y coordinates. A point value represents a two-dimensional geometric point with a pair of floating-point numbers, often used for storing spatial data.",source:"@site/docs/sql-syntax/functions/geometry/point.md",sourceDirName:"sql-syntax/functions/geometry",slug:"/sql-syntax/functions/geometry/point",permalink:"/docs/dev/docs/sql-syntax/functions/geometry/point",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sqlSyntaxSidebar",previous:{title:"GET_Y",permalink:"/docs/dev/docs/sql-syntax/functions/geometry/get-y"},next:{title:"CAST",permalink:"/docs/dev/docs/sql-syntax/functions/others/cast"}},p={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"point"},"POINT"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"POINT")," function creates a point value using the provided x and y coordinates. A point value represents a two-dimensional geometric point with a pair of floating-point numbers, often used for storing spatial data."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"POINT(x, y)\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Create a table with a ",(0,a.kt)("inlineCode",{parentName:"p"},"POINT")," data type column:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Foo (point_field POINT);\n")),(0,a.kt)("p",null,"Insert a record with a point value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Foo VALUES (POINT(0.3134, 0.156));\n")),(0,a.kt)("p",null,"Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"point_field")," column:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT point_field AS point_field FROM Foo;\n")),(0,a.kt)("p",null,"Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"point_field")," column:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE Foo SET point_field = POINT(2.0, 1.0) WHERE point_field = POINT(0.3134, 0.156);\n")),(0,a.kt)("p",null,"Select the updated ",(0,a.kt)("inlineCode",{parentName:"p"},"point_field")," column:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT point_field AS point_field FROM Foo;\n")),(0,a.kt)("p",null,"Delete the record with the specified point value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM Foo WHERE point_field = POINT(2.0, 1.0);\n")),(0,a.kt)("p",null,"Casting a string to a ",(0,a.kt)("inlineCode",{parentName:"p"},"POINT"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CAST('POINT(-71.064544 42.28787)' AS POINT) AS pt;\n")))}d.isMDXComponent=!0}}]);