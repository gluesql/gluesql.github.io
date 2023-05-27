"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4033],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,g=p["".concat(l,".").concat(f)]||p[f]||c[f]||o;return n?i.createElement(g,a(a({ref:t},u),{},{components:n})):i.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const o={},a="Position and Indexing",s={unversionedId:"ast-builder/functions/text/position-and-indexing",id:"ast-builder/functions/text/position-and-indexing",title:"Position and Indexing",description:"GlueSQL provides several functions for text manipulation, including finding the index of a substring (find_idx), finding the position of a substring (position), and getting the leftmost or rightmost characters (left and right).",source:"@site/docs/ast-builder/functions/text/position-and-indexing.md",sourceDirName:"ast-builder/functions/text",slug:"/ast-builder/functions/text/position-and-indexing",permalink:"/docs/dev/ast-builder/functions/text/position-and-indexing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Padding",permalink:"/docs/dev/ast-builder/functions/text/padding"},next:{title:"Text Manipulation",permalink:"/docs/dev/ast-builder/functions/text/text-manipulation"}},l={},d=[{value:"Find Index - find_idx",id:"find-index---find_idx",level:2},{value:"Position - position",id:"position---position",level:2},{value:"Left - left",id:"left---left",level:2},{value:"Right - right",id:"right---right",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"position-and-indexing"},"Position and Indexing"),(0,r.kt)("p",null,"GlueSQL provides several functions for text manipulation, including finding the index of a substring (",(0,r.kt)("inlineCode",{parentName:"p"},"find_idx"),"), finding the position of a substring (",(0,r.kt)("inlineCode",{parentName:"p"},"position"),"), and getting the leftmost or rightmost characters (",(0,r.kt)("inlineCode",{parentName:"p"},"left")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"right"),")."),(0,r.kt)("h2",{id:"find-index---find_idx"},"Find Index - find_idx"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"find_idx")," function returns the first position of the specified substring, starting from the beginning of the string or the specified position."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let test_num = find_idx(text("strawberry"), text("berry"), None);  // Returns 6\nlet test_num = find_idx(text("Oracle Database 12c Release"), text("as"), Some(num(15)));  // Returns 25\n')),(0,r.kt)("p",null,"You can also call ",(0,r.kt)("inlineCode",{parentName:"p"},"find_idx")," directly on a string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let test_num = text("Oracle Database 12c Release").find_idx(text("as"), Some(num(15)));  // Returns 25\n')),(0,r.kt)("h2",{id:"position---position"},"Position - position"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"position")," function is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"find_idx"),", but it starts counting from 1 and does not take a third argument for the starting position."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let test_num = position(text("cake"), text("ke"));  // Returns 3\n')),(0,r.kt)("h2",{id:"left---left"},"Left - left"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"left")," function returns the leftmost characters of a string. The second argument specifies the number of characters to return."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let test_str = left(text("Hello, World"), num(7));  // Returns "Hello, "\n')),(0,r.kt)("h2",{id:"right---right"},"Right - right"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"right")," function returns the rightmost characters of a string. The second argument specifies the number of characters to return."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let test_str = right(text("Hello, World"), num(7));  // Returns ", World"\n')))}c.isMDXComponent=!0}}]);