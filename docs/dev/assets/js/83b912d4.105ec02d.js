"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7449],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),u=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=u(t.components);return o.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,c=t.parentName,l=a(t,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||s;return n?o.createElement(d,i(i({ref:e},l),{},{components:n})):o.createElement(d,i({ref:e},l))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,i=new Array(s);i[0]=f;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a[p]="string"==typeof t?t:r,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6153:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const s={sidebar_position:5},i="CustomFunction",a={unversionedId:"storages/developing-custom-storages/store-traits/custom-function",id:"storages/developing-custom-storages/store-traits/custom-function",title:"CustomFunction",description:"The CustomFunction trait is an optional trait for supporting user-level custom functions. Through the CustomFunction trait, you can retrieve custom functions stored in the storage system. You can choose to implement the CustomFunction trait alone or together with the CustomFunctionMut trait.",source:"@site/docs/storages/developing-custom-storages/store-traits/custom-function.md",sourceDirName:"storages/developing-custom-storages/store-traits",slug:"/storages/developing-custom-storages/store-traits/custom-function",permalink:"/docs/dev/storages/developing-custom-storages/store-traits/custom-function",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"autoSidebar",previous:{title:"Transaction",permalink:"/docs/dev/storages/developing-custom-storages/store-traits/transaction"},next:{title:"CustomFunctionMut",permalink:"/docs/dev/storages/developing-custom-storages/store-traits/custom-function-mut"}},c={},u=[],l={toc:u},p="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customfunction"},"CustomFunction"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomFunction")," trait is an optional trait for supporting user-level custom functions. Through the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomFunction")," trait, you can retrieve custom functions stored in the storage system. You can choose to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomFunction")," trait alone or together with the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomFunctionMut")," trait."),(0,r.kt)("p",null,"In some cases, you might want to provide storage-specific functions pre-built and separately available for each storage system. In such cases, you can implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomFunction")," trait and create additional functions stored in advance when using it. To achieve this, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomFunction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomFunctionMut")," traits are provided separately for implementation."),(0,r.kt)("p",null,"There are two methods available:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fetch_function"),": This method retrieves a custom function from the storage system using the provided function name.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"fetch_all_functions"),": This method retrieves all custom functions stored in the storage system."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[async_trait(?Send)]\npub trait CustomFunction {\n    async fn fetch_function(&self, _func_name: &str) -> Result<Option<&StructCustomFunction>>;\n\n    async fn fetch_all_functions(&self) -> Result<Vec<&StructCustomFunction>>;\n}\n")))}m.isMDXComponent=!0}}]);