"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5085],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3564:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},s="Shared Memory Storage",l={unversionedId:"storages/supported-storages/shared-memory-storage",id:"storages/supported-storages/shared-memory-storage",title:"Shared Memory Storage",description:"SharedMemoryStorage is a storage option designed to provide more comfortable usage of MemoryStorage in concurrent environments. Although it doesn't operate in parallel, it makes accessing the same data from multiple threads simultaneously more convenient.",source:"@site/docs/storages/supported-storages/shared-memory-storage.md",sourceDirName:"storages/supported-storages",slug:"/storages/supported-storages/shared-memory-storage",permalink:"/docs/dev/docs/storages/supported-storages/shared-memory-storage",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"customStorageSidebar",previous:{title:"Memory Storage",permalink:"/docs/dev/docs/storages/supported-storages/memory-storage"},next:{title:"Sled Storage",permalink:"/docs/dev/docs/storages/supported-storages/sled-storage"}},i={},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shared-memory-storage"},"Shared Memory Storage"),(0,o.kt)("p",null,"SharedMemoryStorage is a storage option designed to provide more comfortable usage of MemoryStorage in concurrent environments. Although it doesn't operate in parallel, it makes accessing the same data from multiple threads simultaneously more convenient."),(0,o.kt)("p",null,"The basic structure of SharedMemoryStorage is straightforward. It wraps the MemoryStorage with a read-write lock (",(0,o.kt)("inlineCode",{parentName:"p"},"RwLock"),") and an atomic reference count (",(0,o.kt)("inlineCode",{parentName:"p"},"Arc"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Debug)]\npub struct SharedMemoryStorage {\n    pub database: Arc<RwLock<MemoryStorage>>,\n}\n")),(0,o.kt)("p",null,"This structure allows you to clone the storage instance and use it effortlessly across multiple threads. Regardless of how many times the storage is cloned, all storage instances will refer to the same data."),(0,o.kt)("p",null,"Here's an example of how to use SharedMemoryStorage in a concurrent environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use gluesql_core::prelude::{Glue, Payload, Value};\n\nasync fn concurrent_access() {\n    let storage = SharedMemoryStorage::new();\n\n    let mut glue = Glue::new(storage.clone());\n    glue.execute("CREATE TABLE Thread (id INTEGER);").unwrap();\n\n    let thread_1 = tokio::spawn({\n        let storage = storage.clone();\n        async {\n            let mut glue = Glue::new(storage);\n            glue.execute("INSERT INTO Thread VALUES(1)").unwrap();\n        }\n    });\n\n    let thread_2 = tokio::spawn({\n        let storage = storage.clone();\n        async {\n            let mut glue = Glue::new(storage);\n            glue.execute("INSERT INTO Thread VALUES(2)").unwrap();\n        }\n    });\n\n    let _ = tokio::join!(thread_1, thread_2);\n\n    let actual = glue.execute("SELECT * FROM Thread").unwrap();\n    let expected = vec![Payload::Select {\n        labels: vec!["id".to_owned()],\n        rows: vec![vec![Value::I64(1)], vec![Value::I64(2)]],\n    }];\n    assert_eq!(actual, expected);\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"concurrent_access")," function above illustrates how to concurrently insert data into the same table from different threads. After inserting data from two separate threads, we can confirm that the inserted data is correctly stored by executing a SELECT statement."),(0,o.kt)("p",null,"SharedMemoryStorage is primarily intended for convenience rather than performance when dealing with multiple threads. As you can see from the structure, placing a read-write lock (",(0,o.kt)("inlineCode",{parentName:"p"},"RwLock"),") on the entire database is not recommended for performance reasons when handling data concurrently from multiple threads. Therefore, it's best to use SharedMemoryStorage or MemoryStorage depending on the situation."),(0,o.kt)("p",null,"SharedMemoryStorage is only available in the Rust environment, and its implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Store")," trait is identical to that of MemoryStorage."))}p.isMDXComponent=!0}}]);