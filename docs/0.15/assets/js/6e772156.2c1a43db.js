"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),d=o,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},889:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Memory Storage",s={unversionedId:"storages/supported-storages/memory-storage",id:"storages/supported-storages/memory-storage",title:"Memory Storage",description:"MemoryStorage is a foundational storage option designed for in-memory, non-persistent data. Despite its simplicity, it is robust enough for use in production environments.",source:"@site/docs/storages/supported-storages/memory-storage.md",sourceDirName:"storages/supported-storages",slug:"/storages/supported-storages/memory-storage",permalink:"/docs/0.15/storages/supported-storages/memory-storage",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"autoSidebar",previous:{title:"Introduction",permalink:"/docs/0.15/storages/intro"},next:{title:"Shared Memory Storage",permalink:"/docs/0.15/storages/supported-storages/shared-memory-storage"}},p={},l=[],u={toc:l},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"memory-storage"},"Memory Storage"),(0,o.kt)("p",null,"MemoryStorage is a foundational storage option designed for in-memory, non-persistent data. Despite its simplicity, it is robust enough for use in production environments."),(0,o.kt)("p",null,"A key aspect of MemoryStorage is not only its functionality but also its role as an exemplary case showcasing how simple it is to develop custom storage in GlueSQL. It provides a practical demonstration of what a minimalistic, yet fully functional storage interface can look like in GlueSQL."),(0,o.kt)("p",null,"MemoryStorage is accessible across multiple environments, including Rust, Rust (WASM), JavaScript (Web), and Node.js."),(0,o.kt)("p",null,"The storage interface is implemented with the following traits: ",(0,o.kt)("inlineCode",{parentName:"p"},"Store"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"StoreMut"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AlterTable"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomFunction"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomFunctionMut"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Metadata"),"."),(0,o.kt)("p",null,"Consider the Rust code structure for MemoryStorage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Clone, Serialize, Deserialize)]\npub struct Item {\n    pub schema: Schema,\n    pub rows: BTreeMap<Key, DataRow>,\n}\n\n#[derive(Debug, Clone, Serialize, Deserialize, Default)]\npub struct MemoryStorage {\n    pub id_counter: i64,\n    pub items: HashMap<String, Item>,\n    pub metadata: HashMap<String, HashMap<String, Value>>,\n    pub functions: HashMap<String, StructCustomFunction>,\n}\n")),(0,o.kt)("p",null,"This structure defines the ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MemoryStorage")," structs. ",(0,o.kt)("inlineCode",{parentName:"p"},"Item")," struct holds the schema and rows, while ",(0,o.kt)("inlineCode",{parentName:"p"},"MemoryStorage")," struct consists of ",(0,o.kt)("inlineCode",{parentName:"p"},"id_counter")," (to keep track of the row IDs), ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," (to store the actual data), ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata")," (to keep metadata), and ",(0,o.kt)("inlineCode",{parentName:"p"},"functions")," (to store custom functions)."),(0,o.kt)("p",null,"Below are the implementations of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"StoreMut")," traits for ",(0,o.kt)("inlineCode",{parentName:"p"},"MemoryStorage"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[async_trait(?Send)]\nimpl Store for MemoryStorage {\n    // Code for fetching schemas and data\n}\n\n#[async_trait(?Send)]\nimpl StoreMut for MemoryStorage {\n    // Code for manipulating schemas and data\n}\n")),(0,o.kt)("p",null,"The Store trait implementation provides methods for fetching all schemas, fetching a specific schema, fetching data from a specific table with a given key, and scanning all data from a particular table."),(0,o.kt)("p",null,"On the other hand, the StoreMut trait implementation provides methods for inserting a new schema, deleting an existing schema, appending data to a table, inserting data into a table with a specific key, and deleting data from a table with given keys."),(0,o.kt)("p",null,"In summary, the MemoryStorage structure in GlueSQL is a straightforward yet powerful tool that elegantly showcases how simple it is to create a custom storage system. It's a testament to the power and flexibility of GlueSQL's design and the ease of implementing robust storage solutions with it."))}m.isMDXComponent=!0}}]);