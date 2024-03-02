"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9251],{5680:(e,t,l)=>{l.d(t,{xA:()=>h,yg:()=>c});var a=l(6540);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function g(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function n(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):g(g({},t),e)),l},h=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,h=n(e,["components","mdxType","originalType","parentName"]),s=p(l),o=r,c=s["".concat(u,".").concat(o)]||s[o]||m[o]||i;return l?a.createElement(c,g(g({ref:t},h),{},{components:l})):a.createElement(c,g({ref:t},h))}));function c(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=l.length,g=new Array(i);g[0]=o;var n={};for(var u in t)hasOwnProperty.call(t,u)&&(n[u]=t[u]);n.originalType=e,n[s]="string"==typeof e?e:r,g[1]=n;for(var p=2;p<i;p++)g[p]=l[p];return a.createElement.apply(null,g)}return a.createElement.apply(null,l)}o.displayName="MDXCreateElement"},3112:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>g,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>p});var a=l(8168),r=(l(6540),l(5680));const i={title:"Release v0.15",description:"Release Note - v0.15",slug:"release-v0.15",authors:[{name:"Taehoon Moon",title:"Creator of GlueSQL",url:"https://github.com/panarch",image_url:"https://github.com/panarch.png"}],tags:["v0.15","release-note"]},g=void 0,n={permalink:"/docs/dev/blog/release-v0.15",source:"@site/blog/2023-11-18-release-v0.15.md",title:"Release v0.15",description:"Release Note - v0.15",date:"2023-11-18T00:00:00.000Z",formattedDate:"November 18, 2023",tags:[{label:"v0.15",permalink:"/docs/dev/blog/tags/v-0-15"},{label:"release-note",permalink:"/docs/dev/blog/tags/release-note"}],readingTime:5.93,hasTruncateMarker:!1,authors:[{name:"Taehoon Moon",title:"Creator of GlueSQL",url:"https://github.com/panarch",image_url:"https://github.com/panarch.png",imageURL:"https://github.com/panarch.png"}],frontMatter:{title:"Release v0.15",description:"Release Note - v0.15",slug:"release-v0.15",authors:[{name:"Taehoon Moon",title:"Creator of GlueSQL",url:"https://github.com/panarch",image_url:"https://github.com/panarch.png",imageURL:"https://github.com/panarch.png"}],tags:["v0.15","release-note"]},nextItem:{title:"GlueSQL - Revolutionizing Databases by Unifying Query Interfaces",permalink:"/docs/dev/blog/revolutionizing-databases-by-unifying-query-interfaces"}},u={authorsImageUrls:[void 0]},p=[{value:"\ud83c\udf0a Breaking Changes",id:"-breaking-changes",level:2},{value:"\ud83c\udf40 Python Support",id:"-python-support",level:3},{value:"Code Samples",id:"code-samples",level:4},{value:"\ud83c\udf40 Redis Storage",id:"-redis-storage",level:3},{value:"\ud83c\udf40 CSV Storage",id:"-csv-storage",level:3},{value:"\ud83c\udf40 More operators and functions",id:"-more-operators-and-functions",level:3},{value:"\ud83d\ude80 Features",id:"-features",level:2},{value:"\ud83c\udf1f Improvements",id:"-improvements",level:2},{value:"\ud83d\udc1b Bug Fixes",id:"-bug-fixes",level:2},{value:"\ud83d\udc4f New Contributors",id:"-new-contributors",level:2}],h={toc:p},s="wrapper";function m(e){let{components:t,...l}=e;return(0,r.yg)(s,(0,a.A)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"-breaking-changes"},"\ud83c\udf0a Breaking Changes"),(0,r.yg)("h3",{id:"-python-support"},"\ud83c\udf40 Python Support"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://pypi.org/project/gluesql/"},"https://pypi.org/project/gluesql/"))),(0,r.yg)("h4",{id:"code-samples"},"Code Samples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'from gluesql import Glue, MemoryStorage\nfrom tabulate import tabulate\n\ndb = Glue(MemoryStorage())\n\nsql = """\n    SELECT\n    u.name as user,\n    d.name as device\n    FROM User u\n    JOIN Device d ON u.id = d.userId\n""".strip().replace(\n    "    ", ""\n)\n\nresult = db.query(sql)\nrows = result[0].get("rows")\nprint(f"\\n[Query]\\n{sql}")\nprint(tabulate(rows, headers="keys", showindex=True, tablefmt="simple_outline"))\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"feat: Implement Python Binding ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/jopemachine"},"@jopemachine")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1357"},"#1357"),")")),(0,r.yg)("h3",{id:"-redis-storage"},"\ud83c\udf40 Redis Storage"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Feature: redis storage ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gurugio"},"@gurugio")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1396"},"#1396"),")")),(0,r.yg)("h3",{id:"-csv-storage"},"\ud83c\udf40 CSV Storage"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add CsvStorage support to CLI \\& Rust package ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1437"},"#1437"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement CSV Storage, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1280"},"#1280"),")")),(0,r.yg)("h3",{id:"-more-operators-and-functions"},"\ud83c\udf40 More operators and functions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"feat: add index","_","by node ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/seonghun-dev"},"@seonghun-dev")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1355"},"#1355"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement DEDUP function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/jinlee0"},"@jinlee0")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1430"},"#1430"),")"),(0,r.yg)("li",{parentName:"ul"},"Bitwise Shift Right Operator Implementation ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/2-NOW"},"@2-NOW")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1394"},"#1394"),")"),(0,r.yg)("li",{parentName:"ul"},"feat: implement ast","_","builder for values function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/tgsong827"},"@tgsong827")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1375"},"#1375"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement ",(0,r.yg)("inlineCode",{parentName:"li"},"ADD_MONTH")," function  ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/kite707"},"@kite707")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1341"},"#1341"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement ",(0,r.yg)("inlineCode",{parentName:"li"},"SPLICE")," function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/jinlee0"},"@jinlee0")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1371"},"#1371"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement ",(0,r.yg)("inlineCode",{parentName:"li"},"SLICE")," function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Kwontaehwon"},"@Kwontaehwon")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1340"},"#1340"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement entries in ast builder ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/2-NOW"},"@2-NOW")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1364"},"#1364"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement GREATEST function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/TheMan1697"},"@TheMan1697")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1312"},"#1312"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement bitwise-not operator (~) in ast builder ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gurugio"},"@gurugio")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1366"},"#1366"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement COALESCE function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/cake-monotone"},"@cake-monotone")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1333"},"#1333"),")"),(0,r.yg)("li",{parentName:"ul"},"feat: Implement select without table function in ast","_","builder ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ding-co"},"@ding-co")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1365"},"#1365"),")"),(0,r.yg)("li",{parentName:"ul"},"Add ExprWithAliasNode to ast builder ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/julia-ing"},"@julia-ing")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1359"},"#1359"),")"),(0,r.yg)("li",{parentName:"ul"},"feat: Implement take function in ast","_","builder ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ding-co"},"@ding-co")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1346"},"#1346"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement last","_","day function in ast","_","builder ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/cjy13753"},"@cjy13753")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1344"},"#1344"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement LAST","_","DAY function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1315"},"#1315")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/cjy13753"},"@cjy13753")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1323"},"#1323"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement ast","_","builder for is","_","empty function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/julia-ing"},"@julia-ing")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1337"},"#1337"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement ",(0,r.yg)("inlineCode",{parentName:"li"},"ast_builder")," for skip function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/cl-kim"},"@cl-kim")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1334"},"#1334"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement ENTRIES function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/2-NOW"},"@2-NOW")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1315"},"#1315"),")"),(0,r.yg)("li",{parentName:"ul"},"Feature/operator bit not ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gurugio"},"@gurugio")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1321"},"#1321"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement Skip function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/cl-kim"},"@cl-kim")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1325"},"#1325"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement VALUES function for Map type ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/tgsong827"},"@tgsong827")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1288"},"#1288"),")"),(0,r.yg)("li",{parentName:"ul"},"Feat: impl bitwise-and operation ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/jinlee0"},"@jinlee0")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1281"},"#1281"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement BIT","_","SHIFT","_","LEFT operation ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/codernineteen"},"@codernineteen")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1286"},"#1286"),")"),(0,r.yg)("li",{parentName:"ul"},"implement ",(0,r.yg)("inlineCode",{parentName:"li"},"SORT")," function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Jaehui-Lee"},"@Jaehui-Lee")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1300"},"#1300"),")"),(0,r.yg)("li",{parentName:"ul"},"feat: Implement ",(0,r.yg)("inlineCode",{parentName:"li"},"LENGTH")," function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/jopemachine"},"@jopemachine")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1298"},"#1298"),")"),(0,r.yg)("li",{parentName:"ul"},"[Function]"," Implement TAKE function  ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ding-co"},"@ding-co")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1283"},"#1283"),")"),(0,r.yg)("li",{parentName:"ul"},"feat: implement ",(0,r.yg)("inlineCode",{parentName:"li"},"ast_builder")," for replace function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ChobobDev"},"@ChobobDev")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1275"},"#1275"),")"),(0,r.yg)("li",{parentName:"ul"},"feat: implement IS","_","EMPTY function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/julia-ing"},"@julia-ing")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1282"},"#1282"),")"),(0,r.yg)("li",{parentName:"ul"},"[Function]"," Implement REPLACE function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ChobobDev"},"@ChobobDev")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1266"},"#1266"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement MD5 Function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/seonghun-dev"},"@seonghun-dev")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1242"},"#1242"),")"),(0,r.yg)("li",{parentName:"ul"},"[AST Builder]"," Implement ascii, chr function in ast ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/seonghun-dev"},"@seonghun-dev")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1244"},"#1244"),")"),(0,r.yg)("li",{parentName:"ul"},"[AST Builder]"," Implement Geometic Point Type and Geometric Function in AST Builder ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/seonghun-dev"},"@seonghun-dev")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1222"},"#1222"),")")),(0,r.yg)("h2",{id:"-features"},"\ud83d\ude80 Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"feat: implement ",(0,r.yg)("inlineCode",{parentName:"li"},"select")," iterator utility function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ever0de"},"@ever0de")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1429"},"#1429"),")")),(0,r.yg)("h2",{id:"-improvements"},"\ud83c\udf1f Improvements"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Fix parsing of BigDecimal literals with zero fraction part as floats, not integer ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/zmrdltl"},"@zmrdltl")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1416"},"#1416"),")"),(0,r.yg)("li",{parentName:"ul"},"Update docs/ast-builder padding.md code block lang keyword, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1436"},"#1436"),")"),(0,r.yg)("li",{parentName:"ul"},"Support StoreMut trait to Optional  ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/seonghun-dev"},"@seonghun-dev")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1435"},"#1435"),")"),(0,r.yg)("li",{parentName:"ul"},"docs: write docmentation for padding ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/devgony"},"@devgony")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1434"},"#1434"),")"),(0,r.yg)("li",{parentName:"ul"},"test: add test cases for astb-padding ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/devgony"},"@devgony")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1433"},"#1433"),")"),(0,r.yg)("li",{parentName:"ul"},"Upgrade to chrono v0.4.31 and adjust millisecond value in Timestamp Creation ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/zmrdltl"},"@zmrdltl")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1427"},"#1427"),")"),(0,r.yg)("li",{parentName:"ul"},"Remove unnecessary comments in evalaute/function.rs ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1431"},"#1431"),")"),(0,r.yg)("li",{parentName:"ul"},"write docmentation for character","_","conversion ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/devgony"},"@devgony")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1428"},"#1428"),")"),(0,r.yg)("li",{parentName:"ul"},"docs: Add ",(0,r.yg)("inlineCode",{parentName:"li"},"SLICE")," function doc ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/fregataa"},"@fregataa")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1425"},"#1425"),")"),(0,r.yg)("li",{parentName:"ul"},"test: add cases to character","_","conversion ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/devgony"},"@devgony")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1424"},"#1424"),")"),(0,r.yg)("li",{parentName:"ul"},"docs:Add doc about SPLICE function ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/jinlee0"},"@jinlee0")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1423"},"#1423"),")"),(0,r.yg)("li",{parentName:"ul"},"Change store RowIter type from Iterator to Stream ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1419"},"#1419"),")"),(0,r.yg)("li",{parentName:"ul"},"Reflect Deprecation of ",(0,r.yg)("inlineCode",{parentName:"li"},"from_utc")," in Crate ",(0,r.yg)("inlineCode",{parentName:"li"},"chrono")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/zmrdltl"},"@zmrdltl")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1415"},"#1415"),")"),(0,r.yg)("li",{parentName:"ul"},"Remove eval","_","to","_","{int|float..} macro uses in core/../evaluate/function.rs, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1361"},"#1361"),")"),(0,r.yg)("li",{parentName:"ul"},"test: write example for ast builder ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/daengdaengLee"},"@daengdaengLee")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1259"},"#1259"),")"),(0,r.yg)("li",{parentName:"ul"},"Fix merge conflict in data/value/mod.rs ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1406"},"#1406"),")"),(0,r.yg)("li",{parentName:"ul"},"chore: implement ",(0,r.yg)("inlineCode",{parentName:"li"},"ConvertError"),", ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ever0de"},"@ever0de")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1401"},"#1401"),")"),(0,r.yg)("li",{parentName:"ul"},"refactor: remove implementation of from Value trait for Evaluated ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/tgsong827"},"@tgsong827")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1399"},"#1399"),")"),(0,r.yg)("li",{parentName:"ul"},"refactor: update function module's namespacing in ast","_","builder ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/tgsong827"},"@tgsong827")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1398"},"#1398"),")"),(0,r.yg)("li",{parentName:"ul"},"chore: remove ",(0,r.yg)("inlineCode",{parentName:"li"},"Result")," from ",(0,r.yg)("inlineCode",{parentName:"li"},"ast_builder::transaction")," return type ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ever0de"},"@ever0de")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1404"},"#1404"),")"),(0,r.yg)("li",{parentName:"ul"},"chore: bump rust version to 1.72 ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ever0de"},"@ever0de")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1388"},"#1388"),")"),(0,r.yg)("li",{parentName:"ul"},"chore: add example of convert from payload to custom struct ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ever0de"},"@ever0de")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1379"},"#1379"),")"),(0,r.yg)("li",{parentName:"ul"},"Update Chrono version to 0.4.26, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1374"},"#1374"),")"),(0,r.yg)("li",{parentName:"ul"},"Update test-suite Tester::run to return Payload, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1373"},"#1373"),")"),(0,r.yg)("li",{parentName:"ul"},"Remove .unwrap() uses in test-suite/ test codes, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1372"},"#1372"),")"),(0,r.yg)("li",{parentName:"ul"},"Replace run!, test! and count! macros in test-suite to Tester methods, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1368"},"#1368"),")"),(0,r.yg)("li",{parentName:"ul"},"Update coverage.yml gh-action to ignore await only lines, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1370"},"#1370"),")"),(0,r.yg)("li",{parentName:"ul"},"Apply pretty","_","assertions::assert","_","eq! to core/ ast","_","builder unit tests ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1369"},"#1369"),")"),(0,r.yg)("li",{parentName:"ul"},"Simplify value evaluate cmp with literal ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1353"},"#1353"),")"),(0,r.yg)("li",{parentName:"ul"},"Update gh-action author assign - add zmrdltl to reviewers ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1342"},"#1342"),")"),(0,r.yg)("li",{parentName:"ul"},"Refactor GCD and LCM functions ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/cake-monotone"},"@cake-monotone")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1331"},"#1331"),")"),(0,r.yg)("li",{parentName:"ul"},"Refactor write","_","rows ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/devgony"},"@devgony")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1319"},"#1319"),")"),(0,r.yg)("li",{parentName:"ul"},"Js pkg wasm pack build not to generate readme and packagejson ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1327"},"#1327"),")"),(0,r.yg)("li",{parentName:"ul"},"Update pkg/javascript dist directories to use dist","_","web/ and dist","_","node\u2026 ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1326"},"#1326"),")"),(0,r.yg)("li",{parentName:"ul"},"Upgrade bigdecimal to 0.4.1, sqlparser to 0.36.1 ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/jinlee0"},"@jinlee0")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1322"},"#1322"),")"),(0,r.yg)("li",{parentName:"ul"},"Update wasm-pack-action version to 0.4.0, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1316"},"#1316"),")"),(0,r.yg)("li",{parentName:"ul"},"Update JavaScript package load","_","indexeddb method to get namespace as a\u2026 ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1320"},"#1320"),")"),(0,r.yg)("li",{parentName:"ul"},"Upgrade sqlparser-rs version to 0.35, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1292"},"#1292"),")"),(0,r.yg)("li",{parentName:"ul"},"Remove unused error variant in JsonStorage ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1278"},"#1278"),")"),(0,r.yg)("li",{parentName:"ul"},"Implement CAST text literal or value to MAP or LIST, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1267"},"#1267"),")"),(0,r.yg)("li",{parentName:"ul"},"Simplity JsonStorage Store::fetch","_","all","_","schemas codes, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1264"},"#1264"),")"),(0,r.yg)("li",{parentName:"ul"},"Change console.log in gluesql.js -> console.debug ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/parkma99"},"@parkma99")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1256"},"#1256"),")"),(0,r.yg)("li",{parentName:"ul"},"Replace ",(0,r.yg)("inlineCode",{parentName:"li"},"actions-rs/toolchain")," with ",(0,r.yg)("inlineCode",{parentName:"li"},"dtolnay/rust-toolchain")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/jongwooo"},"@jongwooo")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1251"},"#1251"),")"),(0,r.yg)("li",{parentName:"ul"},"ci: Automatically assign a PR to its author ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/rapsealk"},"@rapsealk")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1253"},"#1253"),")"),(0,r.yg)("li",{parentName:"ul"},"Remove sync methods in core/ Glue struct, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1247"},"#1247"),")"),(0,r.yg)("li",{parentName:"ul"},"Remove test function in test-suite tester, ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1246"},"#1246"),")"),(0,r.yg)("li",{parentName:"ul"},"fix: allow interval cast-related functions to accept only literals instead of evaluations ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ever0de"},"@ever0de")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1238"},"#1238"),")"),(0,r.yg)("li",{parentName:"ul"},"Split custom Partial{Eq|Ord} impl of Value \\& Literal into evaluate","_","{eq|cmp} ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1233"},"#1233"),")"),(0,r.yg)("li",{parentName:"ul"},"Improve example codes formatting ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/jopemachine"},"@jopemachine")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1235"},"#1235"),")"),(0,r.yg)("li",{parentName:"ul"},"feat: fmt list and map ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/Mehrbod2002"},"@Mehrbod2002")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1226"},"#1226"),")"),(0,r.yg)("li",{parentName:"ul"},"Update README.md - add blog article links ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1232"},"#1232"),")"),(0,r.yg)("li",{parentName:"ul"},"Write the blog article - revolutionizing databases by unifying the qu\u2026 ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1231"},"#1231"),")"),(0,r.yg)("li",{parentName:"ul"},"Write the blog article - test driven documentation ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1229"},"#1229"),")"),(0,r.yg)("li",{parentName:"ul"},"Write the blog article - breaking the boundary between sql and nosql \u2026 ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1228"},"#1228"),")"),(0,r.yg)("li",{parentName:"ul"},"Add test and doc for ast-builder::statements::querying::data-aggregation ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/devgony"},"@devgony")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1224"},"#1224"),")")),(0,r.yg)("h2",{id:"-bug-fixes"},"\ud83d\udc1b Bug Fixes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"fix: Literal comparison with BinaryOperator ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ding-co"},"@ding-co")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1397"},"#1397"),")"),(0,r.yg)("li",{parentName:"ul"},"fix: update Key.cmp to compare a type with other type ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/tgsong827"},"@tgsong827")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1367"},"#1367"),")"),(0,r.yg)("li",{parentName:"ul"},"Fix Value::evaluate","_","cmp","_","with","_","literal between Decimal and Literal::Num\u2026 ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1352"},"#1352"),")"),(0,r.yg)("li",{parentName:"ul"},"Fix spool on ",(0,r.yg)("inlineCode",{parentName:"li"},"tabular off")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"SelectMap")," ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/devgony"},"@devgony")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1314"},"#1314"),")"),(0,r.yg)("li",{parentName:"ul"},"Update auto-assign-action to be triggered on PR open from fork repos ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1313"},"#1313"),")"),(0,r.yg)("li",{parentName:"ul"},"Fix Scala Subquery should contain only 1 column ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/ChobobDev"},"@ChobobDev")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1284"},"#1284"),")"),(0,r.yg)("li",{parentName:"ul"},"Wrap config path by quotes in auto-author-assign.yml ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1258"},"#1258"),")"),(0,r.yg)("li",{parentName:"ul"},"Apply word-wrap to docs/ article h1 ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1230"},"#1230"),")"),(0,r.yg)("li",{parentName:"ul"},"Fix docusaurus.config.js themeConfig handler ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/panarch"},"@panarch")," (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1225"},"#1225"),")")),(0,r.yg)("h2",{id:"-new-contributors"},"\ud83d\udc4f New Contributors"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/Mehrbod2002"},"@Mehrbod2002")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1226"},"https://github.com/gluesql/gluesql/pull/1226")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/jopemachine"},"@jopemachine")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1235"},"https://github.com/gluesql/gluesql/pull/1235")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/rapsealk"},"@rapsealk")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1253"},"https://github.com/gluesql/gluesql/pull/1253")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/parkma99"},"@parkma99")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1256"},"https://github.com/gluesql/gluesql/pull/1256")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/julia-ing"},"@julia-ing")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1282"},"https://github.com/gluesql/gluesql/pull/1282")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/ding-co"},"@ding-co")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1283"},"https://github.com/gluesql/gluesql/pull/1283")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/Jaehui-Lee"},"@Jaehui-Lee")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1300"},"https://github.com/gluesql/gluesql/pull/1300")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/jinlee0"},"@jinlee0")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1322"},"https://github.com/gluesql/gluesql/pull/1322")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/codernineteen"},"@codernineteen")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1286"},"https://github.com/gluesql/gluesql/pull/1286")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/tgsong827"},"@tgsong827")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1288"},"https://github.com/gluesql/gluesql/pull/1288")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cl-kim"},"@cl-kim")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1325"},"https://github.com/gluesql/gluesql/pull/1325")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/gurugio"},"@gurugio")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1321"},"https://github.com/gluesql/gluesql/pull/1321")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/2-NOW"},"@2-NOW")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1315"},"https://github.com/gluesql/gluesql/pull/1315")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cake-monotone"},"@cake-monotone")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1331"},"https://github.com/gluesql/gluesql/pull/1331")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/cjy13753"},"@cjy13753")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1323"},"https://github.com/gluesql/gluesql/pull/1323")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/TheMan1697"},"@TheMan1697")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1312"},"https://github.com/gluesql/gluesql/pull/1312")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/Kwontaehwon"},"@Kwontaehwon")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1340"},"https://github.com/gluesql/gluesql/pull/1340")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/kite707"},"@kite707")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1341"},"https://github.com/gluesql/gluesql/pull/1341")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/daengdaengLee"},"@daengdaengLee")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1259"},"https://github.com/gluesql/gluesql/pull/1259")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://github.com/fregataa"},"@fregataa")," made their first contribution in ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/gluesql/gluesql/pull/1425"},"https://github.com/gluesql/gluesql/pull/1425"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Full Changelog"),": ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/gluesql/gluesql/compare/v0.14.0...v0.15.0"},"https://github.com/gluesql/gluesql/compare/v0.14.0...v0.15.0")))}m.isMDXComponent=!0}}]);