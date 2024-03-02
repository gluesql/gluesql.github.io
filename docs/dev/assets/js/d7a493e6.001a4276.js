"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5666],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},318:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(8168),a=(t(6540),t(5680));const o={},i="Case Conversion",c={unversionedId:"ast-builder/functions/text/case-conversion",id:"ast-builder/functions/text/case-conversion",title:"Case Conversion",description:"GlueSQL provides several text case conversion functions that allow you to convert text data to upper case, lower case or capitalize each word in a string.",source:"@site/docs/ast-builder/functions/text/case-conversion.md",sourceDirName:"ast-builder/functions/text",slug:"/ast-builder/functions/text/case-conversion",permalink:"/docs/dev/ast-builder/functions/text/case-conversion",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Value Checking",permalink:"/docs/dev/ast-builder/expressions/value-checking"},next:{title:"Character Conversion",permalink:"/docs/dev/ast-builder/functions/text/character-conversion"}},l={},s=[{value:"Upper Case Conversion - upper",id:"upper-case-conversion---upper",level:2},{value:"Lower Case Conversion - lower",id:"lower-case-conversion---lower",level:2},{value:"Initial Capital Case Conversion - initcap",id:"initial-capital-case-conversion---initcap",level:2}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"case-conversion"},"Case Conversion"),(0,a.yg)("p",null,"GlueSQL provides several text case conversion functions that allow you to convert text data to upper case, lower case or capitalize each word in a string."),(0,a.yg)("p",null,"For this tutorial, we assume there's a table named ",(0,a.yg)("inlineCode",{parentName:"p"},"Item")," with various columns including ",(0,a.yg)("inlineCode",{parentName:"p"},"name"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"opt_name"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"capped_name")," which are of ",(0,a.yg)("inlineCode",{parentName:"p"},"TEXT")," type."),(0,a.yg)("h2",{id:"upper-case-conversion---upper"},"Upper Case Conversion - upper"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"upper")," function converts a text string to upper case."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .select()\n    .project(col("name").upper())  // Convert the \'name\' column to upper case\n    .execute(glue)\n    .await;\n')),(0,a.yg)("h2",{id:"lower-case-conversion---lower"},"Lower Case Conversion - lower"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"lower")," function converts a text string to lower case."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .select()\n    .project(col("name").lower())  // Convert the \'name\' column to lower case\n    .execute(glue)\n    .await;\n')),(0,a.yg)("p",null,"You can also filter the records based on the lower case conversion:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .select()\n    .filter(col("name").lower().eq("\'abcd\'"))  // Filter records where lower case of \'name\' is \'abcd\'\n    .project("name")\n    .project(lower("name"))\n    .execute(glue)\n    .await;\n')),(0,a.yg)("h2",{id:"initial-capital-case-conversion---initcap"},"Initial Capital Case Conversion - initcap"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"initcap")," function converts a text string to initial capital case, i.e., it capitalizes the first character of each word in the string."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .select()\n    .project(col("capped_name").initcap())  // Convert the \'capped_name\' column to initial capital case\n    .execute(glue)\n    .await;\n')),(0,a.yg)("p",null,"You can also filter the records based on the initial capital case conversion:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},'let actual = table("Item")\n    .select()\n    .filter(col("capped_name").initcap().eq("\'H/I Jk\'"))  // Filter records where initial capital case of \'capped_name\' is \'H/I Jk\'\n    .project("capped_name")\n    .execute(glue)\n    .await;\n')))}d.isMDXComponent=!0}}]);