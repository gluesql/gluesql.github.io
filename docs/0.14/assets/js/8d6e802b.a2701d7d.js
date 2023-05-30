"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,m=c["".concat(i,".").concat(g)]||c[g]||p[g]||a;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},s="Sled Storage",l={unversionedId:"storages/supported-storages/sled-storage",id:"storages/supported-storages/sled-storage",title:"Sled Storage",description:"SledStorage is currently the representative persistent data storage for GlueSQL. As the name suggests, it's a storage option based on the Sled key-value embedded database built in Rust (Sled on Github).",source:"@site/docs/storages/supported-storages/sled-storage.md",sourceDirName:"storages/supported-storages",slug:"/storages/supported-storages/sled-storage",permalink:"/docs/0.14/storages/supported-storages/sled-storage",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"autoSidebar",previous:{title:"Shared Memory Storage",permalink:"/docs/0.14/storages/supported-storages/shared-memory-storage"},next:{title:"JSON Storage",permalink:"/docs/0.14/storages/supported-storages/json-storage"}},i={},u=[{value:"How to use",id:"how-to-use",level:2},{value:"Things to Know About Transactions",id:"things-to-know-about-transactions",level:2},{value:"Summary",id:"summary",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sled-storage"},"Sled Storage"),(0,r.kt)("p",null,"SledStorage is currently the representative persistent data storage for GlueSQL. As the name suggests, it's a storage option based on the Sled key-value embedded database built in Rust (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spacejam/sled"},"Sled on Github"),")."),(0,r.kt)("p",null,"SledStorage can only be used in a Rust environment. It is the only storage among those currently supported by GlueSQL that implements all Store traits, from non-clustered indexes to transactions. If you're looking for a basic storage to handle and store data in a Rust environment, SledStorage is an excellent choice."),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"You can simply create a SledStorage instance using a path, as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use {\n    gluesql::{prelude::Glue, sled_storage::SledStorage},\n    sled_storage::sled,\n    std::convert::TryFrom,\n};\n\nfn main() {\n    let storage = SledStorage::new("data/temp").unwrap();\n    let mut glue = Glue::new(storage);\n\n    let sqls = "\n        CREATE TABLE Glue (id INTEGER);\n        INSERT INTO Glue VALUES (100), (200);\n    ";\n\n    glue.execute(sqls).unwrap();\n}\n')),(0,r.kt)("p",null,"If you want to use the Sled that SledStorage uses directly with a specific configuration, you can do so as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let config = sled::Config::default()\n    .path("data/using_config")\n    .temporary(true)\n    .mode(sled::Mode::HighThroughput);\n\nlet storage = SledStorage::try_from(config).unwrap();\nlet mut glue = Glue::new(storage);\n')),(0,r.kt)("h2",{id:"things-to-know-about-transactions"},"Things to Know About Transactions"),(0,r.kt)("p",null,"The implementation of transactions in SledStorage manages not only data but also indexes and schema information based on snapshots. For example, if you use the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"BEGIN;\n\nCREATE TABLE Foo;\nINSERT INTO Foo VALUES (1);\n\nROLLBACK;\n")),(0,r.kt)("p",null,"The above usage will result in a rollback of even the contents regarding the Foo table. The transaction isolation level is repeatable read (snapshot isolation)."),(0,r.kt)("p",null,"By default, there is a timeout for Transactions. The default is set to one hour, but you can modify the value or remove the timeout if desired."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"storage.set_transaction_timeout(Some(1000)); // 1 sec\nstorage.set_transaction_timeout(None); // no timeout\n")),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"If you're looking for a storage to handle data for general purposes in a Rust environment, SledStorage would be your go-to choice. It offers all the necessary features of a database system, such as managing non-clustered indexes, handling transactions, and maintaining persistent storage. Additionally, its snapshot-based transaction model ensures consistency and reliability, making it an excellent choice for applications requiring persistent data storage."))}p.isMDXComponent=!0}}]);