"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9327],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),y=r,m=c["".concat(s,".").concat(y)]||c[y]||g[y]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(8168),r=(n(6540),n(5680));const i={sidebar_position:4},o="Aggregation",l={unversionedId:"sql-syntax/statements/querying/aggregation",id:"sql-syntax/statements/querying/aggregation",title:"Aggregation",description:"GlueSQL supports several aggregate functions to perform calculations on a set of values. Below is a list of supported aggregate functions along with a brief explanation of each:",source:"@site/docs/sql-syntax/statements/querying/aggregation.md",sourceDirName:"sql-syntax/statements/querying",slug:"/sql-syntax/statements/querying/aggregation",permalink:"/docs/dev/sql-syntax/statements/querying/aggregation",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"autoSidebar",previous:{title:"LIMIT & OFFSET",permalink:"/docs/dev/sql-syntax/statements/querying/limit"},next:{title:"Schemaless Data",permalink:"/docs/dev/sql-syntax/statements/querying/schemaless"}},s={},u=[{value:"GROUP BY",id:"group-by",level:2},{value:"HAVING",id:"having",level:2}],p={toc:u},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"aggregation"},"Aggregation"),(0,r.yg)("p",null,"GlueSQL supports several aggregate functions to perform calculations on a set of values. Below is a list of supported aggregate functions along with a brief explanation of each:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"COUNT"),": Counts the number of non-NULL values in the specified column."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"AVG"),": Calculates the average of non-NULL values in the specified column."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SUM"),": Calculates the sum of non-NULL values in the specified column."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MAX"),": Returns the maximum value in the specified column."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MIN"),": Returns the minimum value in the specified column."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"STDEV"),": Calculates the population standard deviation of non-NULL values in the specified column."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"VARIANCE"),": Calculates the population variance of non-NULL values in the specified column.")),(0,r.yg)("p",null,"In addition to the aggregate functions, you can use ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUP BY")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"HAVING")," clauses to group and filter the results based on specific conditions."),(0,r.yg)("h2",{id:"group-by"},"GROUP BY"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUP BY")," clause is used to group rows with the same values in specified columns into a set of summary rows. It is often used with aggregate functions to perform calculations on each group of rows."),(0,r.yg)("p",null,"Here's an example that groups the items by ",(0,r.yg)("inlineCode",{parentName:"p"},"city")," and calculates the sum of ",(0,r.yg)("inlineCode",{parentName:"p"},"quantity")," and the count of items for each city:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT SUM(quantity), COUNT(*), city FROM Item GROUP BY city;\n")),(0,r.yg)("h2",{id:"having"},"HAVING"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"HAVING")," clause is used to filter the results of a ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUP BY")," query based on a condition that applies to the summary rows. It is similar to the ",(0,r.yg)("inlineCode",{parentName:"p"},"WHERE")," clause but operates on the results of the grouping."),(0,r.yg)("p",null,"Here's an example that groups the items by ",(0,r.yg)("inlineCode",{parentName:"p"},"city")," and calculates the sum of ",(0,r.yg)("inlineCode",{parentName:"p"},"quantity")," and the count of items for each city, but only includes cities with a count greater than 1:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT SUM(quantity), COUNT(*), city FROM Item GROUP BY city HAVING COUNT(*) > 1;\n")),(0,r.yg)("p",null,"In the examples provided, you can see the usage of ",(0,r.yg)("inlineCode",{parentName:"p"},"GROUP BY")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"HAVING")," clauses in combination with aggregate functions to retrieve data from the ",(0,r.yg)("inlineCode",{parentName:"p"},"Item")," table."))}g.isMDXComponent=!0}}]);