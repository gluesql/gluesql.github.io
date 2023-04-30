"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4792],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(a),m=n,g=l["".concat(c,".").concat(m)]||l[m]||u[m]||o;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4908:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:9},i="Metadata",s={unversionedId:"storages/developing-custom-storages/store-traits/metadata",id:"storages/developing-custom-storages/store-traits/metadata",title:"Metadata",description:"The Metadata trait is an optional implementation for providing additional metadata support in GlueSQL. GlueSQL does not enforce any specific metadata implementation, allowing custom storage developers to decide which type of metadata, such as create time, modify time, etc., they want to provide.",source:"@site/docs/storages/developing-custom-storages/store-traits/metadata.md",sourceDirName:"storages/developing-custom-storages/store-traits",slug:"/storages/developing-custom-storages/store-traits/metadata",permalink:"/docs/storages/developing-custom-storages/store-traits/metadata",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"customStorageSidebar",previous:{title:"IndexMut",permalink:"/docs/storages/developing-custom-storages/store-traits/index-mut"},next:{title:"Using the Test Suite",permalink:"/docs/storages/developing-custom-storages/using-test-suite"}},c={},p=[],d={toc:p},l="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(l,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"metadata"},"Metadata"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Metadata")," trait is an optional implementation for providing additional metadata support in GlueSQL. GlueSQL does not enforce any specific metadata implementation, allowing custom storage developers to decide which type of metadata, such as create time, modify time, etc., they want to provide."),(0,n.kt)("p",null,"Implementing the ",(0,n.kt)("inlineCode",{parentName:"p"},"Metadata")," trait can be beneficial in cases where users need to access and manage metadata related to tables, columns, or other database objects. This can help users understand the structure and properties of their data, ensuring proper management and organization."),(0,n.kt)("p",null,"Currently, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Metadata")," trait supports the ",(0,n.kt)("inlineCode",{parentName:"p"},"scan_table_meta")," method for retrieving table metadata. The metadata provided by the storage can be queried using the data dictionary table ",(0,n.kt)("inlineCode",{parentName:"p"},"GLUE_TABLES"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"type ObjectName = String;\npub type MetaIter = Box<dyn Iterator<Item = Result<(ObjectName, HashMap<String, Value>)>>>;\n\n#[async_trait(?Send)]\npub trait Metadata {\n    async fn scan_table_meta(&self) -> Result<MetaIter> {\n        Ok(Box::new(empty()))\n    }\n}\n")),(0,n.kt)("p",null,"By implementing the ",(0,n.kt)("inlineCode",{parentName:"p"},"Metadata")," trait, custom storage developers can provide users with a way to access and manage metadata related to various database objects. This can be particularly useful in situations where users need to understand the properties of their data or maintain a well-organized database structure."))}u.isMDXComponent=!0}}]);