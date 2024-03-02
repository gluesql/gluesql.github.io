"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7433],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(o,".").concat(d)]||p[d]||g[d]||l;return n?r.createElement(y,c(c({ref:t},s),{},{components:n})):r.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<l;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const l={},c="Character Conversion",i={unversionedId:"ast-builder/functions/text/character-conversion",id:"ast-builder/functions/text/character-conversion",title:"Character Conversion",description:"The AST Builder API in GlueSQL allows you to execute ascii and chr functions for character conversion.",source:"@site/docs/ast-builder/functions/text/character-conversion.md",sourceDirName:"ast-builder/functions/text",slug:"/ast-builder/functions/text/character-conversion",permalink:"/docs/dev/ast-builder/functions/text/character-conversion",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Case Conversion",permalink:"/docs/dev/ast-builder/functions/text/case-conversion"},next:{title:"Padding",permalink:"/docs/dev/ast-builder/functions/text/padding"}},o={},u=[{value:"ascii",id:"ascii",level:2},{value:"chr",id:"chr",level:2},{value:"Examples",id:"examples",level:2}],s={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"character-conversion"},"Character Conversion"),(0,a.yg)("p",null,"The AST Builder API in GlueSQL allows you to execute ",(0,a.yg)("inlineCode",{parentName:"p"},"ascii")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"chr")," functions for character conversion."),(0,a.yg)("h2",{id:"ascii"},"ascii"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ascii")," returns the ASCII value for the specific character."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"ascii<'a, T: Into<ExprNode<'a>>>(expr: T) -> ExprNode<'a>\n")),(0,a.yg)("h2",{id:"chr"},"chr"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"chr")," returns the character based on the ASCII code."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"chr<'a, T: Into<ExprNode<'a>>>(expr: T) -> ExprNode<'a>\n")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("p",null,"In these examples, the ASCII and CHR functions should return matching values."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'use {\n    gluesql_core::{ast_builder::{function as f, *}}\n};\n\nvalues(vec![\n    vec![f::ascii("\'\\t\'"), f::chr(9)],\n    vec![f::ascii("\'\\n\'"), f::chr(10)],\n    vec![f::ascii("\'\\r\'"), f::chr(13)],\n    vec![f::ascii("\' \'"), f::chr(32)],\n    vec![f::ascii("\'!\'"), f::chr(33)],\n    vec![f::ascii("\'\\"\'"), f::chr(34)],\n    vec![f::ascii("\'#\'"), f::chr(35)],\n    vec![f::ascii("\'$\'"), f::chr(36)],\n    vec![f::ascii("\'%\'"), f::chr(37)],\n    vec![f::ascii("\'&\'"), f::chr(38)],\n    vec![f::ascii("\'\'\'\'"), f::chr(39)],\n    vec![f::ascii("\',\'"), f::chr(44)],\n])\n.alias_as("Sub")\n.select()\n.project("column1 AS ascii")\n.project("column2 AS char")\n.execute(glue)\n.await;\n')),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"ascii"),(0,a.yg)("th",{parentName:"tr",align:null},"char"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"9"),(0,a.yg)("td",{parentName:"tr",align:null},"\\t")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"10"),(0,a.yg)("td",{parentName:"tr",align:null},"\\n")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"13"),(0,a.yg)("td",{parentName:"tr",align:null},"\\r")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"32"),(0,a.yg)("td",{parentName:"tr",align:null},'" "')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"33"),(0,a.yg)("td",{parentName:"tr",align:null},"!")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"34"),(0,a.yg)("td",{parentName:"tr",align:null},'"')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"35"),(0,a.yg)("td",{parentName:"tr",align:null},"#")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"36"),(0,a.yg)("td",{parentName:"tr",align:null},"$")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"37"),(0,a.yg)("td",{parentName:"tr",align:null},"%")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"38"),(0,a.yg)("td",{parentName:"tr",align:null},"&")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"39"),(0,a.yg)("td",{parentName:"tr",align:null},"'")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"44"),(0,a.yg)("td",{parentName:"tr",align:null},",")))))}g.isMDXComponent=!0}}]);