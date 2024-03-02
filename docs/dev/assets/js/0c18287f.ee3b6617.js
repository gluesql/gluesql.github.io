"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2758],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(6540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),y=l,d=u["".concat(i,".").concat(y)]||u[y]||m[y]||r;return t?a.createElement(d,p(p({ref:n},c),{},{components:t})):a.createElement(d,p({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[u]="string"==typeof e?e:l,p[1]=o;for(var s=2;s<r;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(8168),l=(t(6540),t(5680));const r={},p="APPEND",o={unversionedId:"sql-syntax/functions/list-map/append",id:"sql-syntax/functions/list-map/append",title:"APPEND",description:"The APPEND function in SQL is used to append an element to a list.",source:"@site/docs/sql-syntax/functions/list-map/append.md",sourceDirName:"sql-syntax/functions/list-map",slug:"/sql-syntax/functions/list-map/append",permalink:"/docs/dev/sql-syntax/functions/list-map/append",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"TO_TIMESTAMP",permalink:"/docs/dev/sql-syntax/functions/datetime/to-timestamp"},next:{title:"CONCAT",permalink:"/docs/dev/sql-syntax/functions/list-map/concat"}},i={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"append"},"APPEND"),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"APPEND")," function in SQL is used to append an element to a list."),(0,l.yg)("h2",{id:"syntax"},"Syntax"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"APPEND(list, element)\n")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"list"),": The list to which you want to append the element."),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"element"),": The element that you want to append to the list.")),(0,l.yg)("h2",{id:"examples"},"Examples"),(0,l.yg)("p",null,"First, create a table named ",(0,l.yg)("inlineCode",{parentName:"p"},"Append")," with columns for the list, an integer element, and a text element:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Append (\n    id INTEGER,\n    items LIST,\n    element INTEGER,\n    element2 TEXT\n);\n")),(0,l.yg)("p",null,"Insert some data into the ",(0,l.yg)("inlineCode",{parentName:"p"},"Append")," table:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Append VALUES\n(1, '[1, 2, 3]', 4, 'Foo');\n")),(0,l.yg)("p",null,"Use the ",(0,l.yg)("inlineCode",{parentName:"p"},"APPEND")," function to append the integer element to the list:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT APPEND(items, element) AS myappend FROM Append;\n")),(0,l.yg)("p",null,"Use the ",(0,l.yg)("inlineCode",{parentName:"p"},"APPEND")," function to append the text element to the list:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT APPEND(items, element2) AS myappend FROM Append;\n")),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"APPEND")," function requires a list as the first parameter. If you try to use it with a non-list value, an error will occur:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT APPEND(element, element2) AS myappend FROM Append;\n")),(0,l.yg)("p",null,"You can also use the ",(0,l.yg)("inlineCode",{parentName:"p"},"APPEND")," function when inserting data into a table. First, create a table named ",(0,l.yg)("inlineCode",{parentName:"p"},"Foo")," with a column for the list:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Foo (\n    elements LIST\n);\n")),(0,l.yg)("p",null,"Then, insert data into the ",(0,l.yg)("inlineCode",{parentName:"p"},"Foo")," table using the ",(0,l.yg)("inlineCode",{parentName:"p"},"APPEND")," function:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Foo VALUES (APPEND(CAST('[1, 2, 3]' AS LIST), 4));\n")),(0,l.yg)("p",null,"Finally, retrieve the list from the ",(0,l.yg)("inlineCode",{parentName:"p"},"Foo")," table:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT elements AS myappend FROM Foo;\n")))}m.isMDXComponent=!0}}]);