"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=l,c=m["".concat(u,".").concat(k)]||m[k]||s[k]||r;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:2},i="UPDATE",o={unversionedId:"sql-syntax/statements/data-manipulation/update",id:"sql-syntax/statements/data-manipulation/update",title:"UPDATE",description:"The UPDATE statement is used to modify existing records in a table. You can update one or more columns with new values, or even use subqueries to update values based on other tables.",source:"@site/docs/sql-syntax/statements/data-manipulation/update.md",sourceDirName:"sql-syntax/statements/data-manipulation",slug:"/sql-syntax/statements/data-manipulation/update",permalink:"/docs/dev/docs/sql-syntax/statements/data-manipulation/update",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sqlSyntaxSidebar",previous:{title:"INSERT",permalink:"/docs/dev/docs/sql-syntax/statements/data-manipulation/insert"},next:{title:"DELETE",permalink:"/docs/dev/docs/sql-syntax/statements/data-manipulation/delete"}},u={},p=[{value:"Basic UPDATE Syntax",id:"basic-update-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Updating a Single Column",id:"updating-a-single-column",level:3},{value:"Updating with a Condition",id:"updating-with-a-condition",level:3},{value:"Updating with a Subquery",id:"updating-with-a-subquery",level:3},{value:"Updating Based on the Result of Another Query",id:"updating-based-on-the-result-of-another-query",level:3},{value:"Not Supported Features",id:"not-supported-features",level:2}],d={toc:p},m="wrapper";function s(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"update"},"UPDATE"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE")," statement is used to modify existing records in a table. You can update one or more columns with new values, or even use subqueries to update values based on other tables."),(0,l.kt)("h2",{id:"basic-update-syntax"},"Basic UPDATE Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE table_name\nSET column1 = value1, column2 = value2, ...\nWHERE condition;\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"updating-a-single-column"},"Updating a Single Column"),(0,l.kt)("p",null,"Consider the following ",(0,l.kt)("inlineCode",{parentName:"p"},"TableA"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"num"),(0,l.kt)("th",{parentName:"tr",align:null},"num2"),(0,l.kt)("th",{parentName:"tr",align:null},"name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Hello")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"World")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"Great")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"Job")))),(0,l.kt)("p",null,"To update the ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," column for all rows in ",(0,l.kt)("inlineCode",{parentName:"p"},"TableA"),", you can use the following query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE TableA SET id = 2;\n")),(0,l.kt)("p",null,"The resulting ",(0,l.kt)("inlineCode",{parentName:"p"},"TableA")," would look like this:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"num"),(0,l.kt)("th",{parentName:"tr",align:null},"num2"),(0,l.kt)("th",{parentName:"tr",align:null},"name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Hello")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"World")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"Great")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"Job")))),(0,l.kt)("h3",{id:"updating-with-a-condition"},"Updating with a Condition"),(0,l.kt)("p",null,"If you want to update only specific rows that meet a certain condition, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," clause. For example, to update the ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," column only for the row with ",(0,l.kt)("inlineCode",{parentName:"p"},"num = 9"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE TableA SET id = 4 WHERE num = 9;\n")),(0,l.kt)("h3",{id:"updating-with-a-subquery"},"Updating with a Subquery"),(0,l.kt)("p",null,"You can also use a subquery in the ",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE")," statement to update a column based on other table's values. For example, to update the ",(0,l.kt)("inlineCode",{parentName:"p"},"num2")," column in ",(0,l.kt)("inlineCode",{parentName:"p"},"TableA")," with the ",(0,l.kt)("inlineCode",{parentName:"p"},"rank")," column value from ",(0,l.kt)("inlineCode",{parentName:"p"},"TableB")," where the ",(0,l.kt)("inlineCode",{parentName:"p"},"num")," column values match, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"num = 7"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE TableA SET num2 = (SELECT rank FROM TableB WHERE num = TableA.num) WHERE num = 7;\n")),(0,l.kt)("h3",{id:"updating-based-on-the-result-of-another-query"},"Updating Based on the Result of Another Query"),(0,l.kt)("p",null,"You can update a column based on the result of another query. For example, to update the ",(0,l.kt)("inlineCode",{parentName:"p"},"num2")," column in ",(0,l.kt)("inlineCode",{parentName:"p"},"TableA")," with the ",(0,l.kt)("inlineCode",{parentName:"p"},"rank")," column value from ",(0,l.kt)("inlineCode",{parentName:"p"},"TableB")," where the ",(0,l.kt)("inlineCode",{parentName:"p"},"num")," column values match, and the ",(0,l.kt)("inlineCode",{parentName:"p"},"num")," is the minimum ",(0,l.kt)("inlineCode",{parentName:"p"},"num")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"TableA"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE TableA SET num2 = (SELECT rank FROM TableB WHERE num = TableA.num) WHERE num = (SELECT MIN(num) FROM TableA);\n")),(0,l.kt)("h2",{id:"not-supported-features"},"Not Supported Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using ",(0,l.kt)("inlineCode",{parentName:"li"},"JOIN")," in an ",(0,l.kt)("inlineCode",{parentName:"li"},"UPDATE")," statement is not supported."),(0,l.kt)("li",{parentName:"ul"},"Updating a table using compound identifiers (e.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"ErrTestTable.id = 1"),") is not supported."),(0,l.kt)("li",{parentName:"ul"},"Updating a non-existent table will result in a ",(0,l.kt)("inlineCode",{parentName:"li"},"TableNotFound")," error."),(0,l.kt)("li",{parentName:"ul"},"Updating a non-existent column will result in a ",(0,l.kt)("inlineCode",{parentName:"li"},"ColumnNotFound")," error.")))}s.isMDXComponent=!0}}]);