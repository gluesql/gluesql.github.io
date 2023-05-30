"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||h[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},i="ASCII",s={unversionedId:"sql-syntax/functions/text/ascii",id:"sql-syntax/functions/text/ascii",title:"ASCII",description:"The ASCII function in SQL returns the ASCII value for the first character of the specified string.",source:"@site/docs/sql-syntax/functions/text/ascii.md",sourceDirName:"sql-syntax/functions/text",slug:"/sql-syntax/functions/text/ascii",permalink:"/docs/0.14/sql-syntax/functions/text/ascii",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"UUID",permalink:"/docs/0.14/sql-syntax/data-types/uuid"},next:{title:"CHR",permalink:"/docs/0.14/sql-syntax/functions/text/chr"}},o={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ascii"},"ASCII"),(0,a.kt)("p",null,"The ASCII function in SQL returns the ASCII value for the first character of the specified string. "),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The syntax for the ASCII function in SQL is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ASCII ( single_character_text )\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"single_character_text"),": This is the string that the ASCII value should be returned for. It should be a single character string. ")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Let's consider a few examples to understand how to use the ASCII function."),(0,a.kt)("p",null,"To get the ASCII value of a character:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"VALUES(ASCII('A'));\n")),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"65"),", which is the ASCII value for 'A'."),(0,a.kt)("p",null,"Please note that the ASCII function expects a single character value. If a string with more than one character is passed, it will throw an error. For instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"VALUES(ASCII('AB'));\n")),(0,a.kt)("p",null,"This will throw an error because 'AB' contains more than one character."),(0,a.kt)("p",null,"You can also use the ASCII function in a SELECT statement. Consider the following table named 'Ascii':"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"id"),(0,a.kt)("th",{parentName:"tr",align:null},"text"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"'F'")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Ascii (\n    id INTEGER,\n    text TEXT\n);\nINSERT INTO Ascii VALUES (1, 'F');\n")),(0,a.kt)("p",null,"You can select the ASCII value of the 'text' column:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ASCII(text) AS ascii FROM Ascii;\n")),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"70"),", which is the ASCII value for 'F'."),(0,a.kt)("p",null,"The ASCII function can also take a string directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ASCII('a') AS ascii FROM Ascii;\n")),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"97"),", which is the ASCII value for 'a'."),(0,a.kt)("p",null,"If a non-ASCII character is passed to the function, it will throw an error. For instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ASCII('\u3131') AS ascii FROM Ascii;\n")),(0,a.kt)("p",null,"This will throw an error because '\u3131' is not an ASCII character."),(0,a.kt)("p",null,"If no argument is passed to the ASCII function, it will also throw an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ASCII() AS ascii FROM Ascii;\n")),(0,a.kt)("p",null,"This will throw an error because the ASCII function expects one argument."),(0,a.kt)("p",null,"Remember, the ASCII function expects a single character. If the column value contains more than one character, it will throw an error:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Ascii VALUES (1, 'Foo');\nSELECT ASCII(text) AS ascii FROM Ascii;\n")),(0,a.kt)("p",null,"This will throw an error because 'Foo' contains more than one character."))}h.isMDXComponent=!0}}]);