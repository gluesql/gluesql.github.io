"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(f,s(s({ref:t},m),{},{components:r})):n.createElement(f,s({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},s="StoreMut",i={unversionedId:"storages/developing-custom-storages/store-traits/store-mut",id:"storages/developing-custom-storages/store-traits/store-mut",title:"StoreMut",description:"While the Store trait is for supporting SELECT queries and reading data, the StoreMut trait is for modifying data. Implementing the StoreMut trait requires the implementation of the Store trait as well. By implementing both the Store and StoreMut traits, you can support most of the commonly used SQL statements. Additionally, you can use the Test Suite to utilize the integration test set provided by GlueSQL. Custom storage developers can verify their own Store & StoreMut implementations by checking if they pass all the tests provided in the Test Suite.",source:"@site/docs/storages/developing-custom-storages/store-traits/store-mut.md",sourceDirName:"storages/developing-custom-storages/store-traits",slug:"/storages/developing-custom-storages/store-traits/store-mut",permalink:"/docs/storages/developing-custom-storages/store-traits/store-mut",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"customStorageSidebar",previous:{title:"Store",permalink:"/docs/storages/developing-custom-storages/store-traits/store"},next:{title:"AlterTable",permalink:"/docs/storages/developing-custom-storages/store-traits/alter-table"}},l={},p=[],m={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"storemut"},"StoreMut"),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},"Store")," trait is for supporting SELECT queries and reading data, the ",(0,a.kt)("inlineCode",{parentName:"p"},"StoreMut")," trait is for modifying data. Implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"StoreMut")," trait requires the implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Store")," trait as well. By implementing both the ",(0,a.kt)("inlineCode",{parentName:"p"},"Store")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"StoreMut")," traits, you can support most of the commonly used SQL statements. Additionally, you can use the Test Suite to utilize the integration test set provided by GlueSQL. Custom storage developers can verify their own Store & StoreMut implementations by checking if they pass all the tests provided in the Test Suite."),(0,a.kt)("p",null,"Here are the five methods required to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"StoreMut")," trait:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"insert_schema"),": This method is responsible for inserting a new schema into the storage system.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"delete_schema"),": This method is for deleting a schema from the storage system using the provided table name.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"append_data"),": This method appends a list of data rows to an existing table in the storage system.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"insert_data"),": This method inserts a list of key-data row pairs into an existing table in the storage system.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"delete_data"),": This method deletes a list of keys and their corresponding data rows from an existing table in the storage system."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// By implementing `StoreMut` trait,\n/// you can run `INSERT`, `CREATE TABLE`, `DELETE`, `UPDATE` and `DROP TABLE` queries.\n#[async_trait(?Send)]\npub trait StoreMut {\n    async fn insert_schema(&mut self, schema: &Schema) -> Result<()>;\n\n    async fn delete_schema(&mut self, table_name: &str) -> Result<()>;\n\n    async fn append_data(&mut self, table_name: &str, rows: Vec<DataRow>) -> Result<()>;\n\n    async fn insert_data(&mut self, table_name: &str, rows: Vec<(Key, DataRow)>) -> Result<()>;\n\n    async fn delete_data(&mut self, table_name: &str, keys: Vec<Key>) -> Result<()>;\n}\n")))}c.isMDXComponent=!0}}]);