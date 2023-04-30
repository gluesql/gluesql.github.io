"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),c=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(a.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(a,".").concat(d)]||m[d]||p[d]||s;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[m]="string"==typeof e?e:r,i[1]=u;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const s={sidebar_position:6},i="CustomFunctionMut",u={unversionedId:"storages/developing-custom-storages/store-traits/custom-function-mut",id:"storages/developing-custom-storages/store-traits/custom-function-mut",title:"CustomFunctionMut",description:"By implementing both the CustomFunction and CustomFunctionMut traits, users can create, use, and delete user-level custom functions. Although GlueSQL plans to continuously add various functions, users may still find them insufficient. In such cases, users can create their own user-level custom functions to supplement the built-in functions. Additionally, if there are repetitive business logic codes, they can be stored as custom functions.",source:"@site/docs/storages/developing-custom-storages/store-traits/custom-function-mut.md",sourceDirName:"storages/developing-custom-storages/store-traits",slug:"/storages/developing-custom-storages/store-traits/custom-function-mut",permalink:"/docs/dev/docs/storages/developing-custom-storages/store-traits/custom-function-mut",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"customStorageSidebar",previous:{title:"CustomFunction",permalink:"/docs/dev/docs/storages/developing-custom-storages/store-traits/custom-function"},next:{title:"Index",permalink:"/docs/dev/docs/storages/developing-custom-storages/store-traits/index-trait"}},a={},c=[],l={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customfunctionmut"},"CustomFunctionMut"),(0,r.kt)("p",null,"By implementing both the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomFunction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomFunctionMut")," traits, users can create, use, and delete user-level custom functions. Although GlueSQL plans to continuously add various functions, users may still find them insufficient. In such cases, users can create their own user-level custom functions to supplement the built-in functions. Additionally, if there are repetitive business logic codes, they can be stored as custom functions."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION ADD_ONE (n INT, x INT DEFAULT 1) RETURN n + x;\n\nSELECT ADD_ONE(10) AS test;\n\nDROP FUNCTION ADD_ONE;\n")),(0,r.kt)("p",null,"There are two methods available:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"insert_function"),": This method inserts a new custom function into the storage system.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"delete_function"),": This method deletes a custom function from the storage system using the provided function name."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[async_trait(?Send)]\npub trait CustomFunctionMut {\n    async fn insert_function(&mut self, _func: StructCustomFunction) -> Result<()>;\n\n    async fn delete_function(&mut self, _func_name: &str) -> Result<()>;\n}\n")))}p.isMDXComponent=!0}}]);