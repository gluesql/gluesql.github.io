"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7096],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=r,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||l;return t?a.createElement(y,i(i({ref:n},c),{},{components:t})):a.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},933:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(8168),r=(t(6540),t(5680));const l={},i="TRIM",o={unversionedId:"sql-syntax/functions/text/trim",id:"sql-syntax/functions/text/trim",title:"TRIM",description:"The TRIM function in SQL is used to remove leading, trailing, or both leading and trailing unwanted characters (often whitespace) from a string.",source:"@site/docs/sql-syntax/functions/text/trim.md",sourceDirName:"sql-syntax/functions/text",slug:"/sql-syntax/functions/text/trim",permalink:"/docs/dev/sql-syntax/functions/text/trim",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"SUBSTR",permalink:"/docs/dev/sql-syntax/functions/text/substr"},next:{title:"UPPER",permalink:"/docs/dev/sql-syntax/functions/text/upper"}},s={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"trim"},"TRIM"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"TRIM")," function in SQL is used to remove leading, trailing, or both leading and trailing unwanted characters (often whitespace) from a string."),(0,r.yg)("h2",{id:"syntax"},"Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"TRIM([LEADING | TRAILING | BOTH] [removal_string] FROM target_string)\n")),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"LEADING"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"TRAILING"),", or ",(0,r.yg)("inlineCode",{parentName:"p"},"BOTH")," is not specified, ",(0,r.yg)("inlineCode",{parentName:"p"},"TRIM")," function will remove both leading and trailing spaces."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("p",null,"Here we are creating a table named ",(0,r.yg)("inlineCode",{parentName:"p"},"Item")," with a default value for the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," column. The default value is obtained by concatenating two strings. The first string is the result of trimming leading 'a' from 'aabc' and the second string is the result of trimming spaces from '   good  '."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Item (\n    name TEXT DEFAULT TRIM(LEADING 'a' FROM 'aabc') || TRIM('   good  ')\n)\n")),(0,r.yg)("p",null,"We insert some data into the ",(0,r.yg)("inlineCode",{parentName:"p"},"Item")," table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO Item VALUES\n    ('      Left blank'),\n    ('Right blank     '),\n    ('     Blank!     '),\n    ('Not Blank');\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"TRIM")," function is used in a ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT")," statement to remove leading and trailing spaces from the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," column in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Item")," table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT TRIM(name) FROM Item;\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"TRIM")," function can also be used with ",(0,r.yg)("inlineCode",{parentName:"p"},"NULL")," values. If the value is ",(0,r.yg)("inlineCode",{parentName:"p"},"NULL"),", the ",(0,r.yg)("inlineCode",{parentName:"p"},"TRIM")," function will return ",(0,r.yg)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE NullName (name TEXT NULL);\nINSERT INTO NullName VALUES (NULL);\nSELECT TRIM(name) AS test FROM NullName;\n")),(0,r.yg)("p",null,"You can also specify a specific character to remove from the string. The following example removes 'xyz' from the string:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE Test (name TEXT);\nINSERT INTO Test VALUES\n        ('     blank     '), \n        ('xxxyzblankxyzxx'), \n        ('xxxyzblank     '),\n        ('     blankxyzxx'),\n        ('  xyzblankxyzxx'),\n        ('xxxyzblankxyz  ');\nSELECT TRIM(BOTH 'xyz' FROM name) FROM Test;\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"LEADING")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"TRAILING")," keywords can be used to remove characters from the beginning or the end of the string, respectively:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT TRIM(LEADING 'xyz' FROM name) FROM Test;\nSELECT TRIM(TRAILING 'xyz' FROM name) FROM Test;\n")),(0,r.yg)("p",null,"You can also nest ",(0,r.yg)("inlineCode",{parentName:"p"},"TRIM")," functions:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT TRIM(BOTH TRIM(BOTH ' potato ')) AS Case1;\n")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"TRIM")," function requires string values. If you try to use it with a non-string value, an error will occur:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT TRIM('1' FROM 1) AS test FROM Test;\n")))}m.isMDXComponent=!0}}]);