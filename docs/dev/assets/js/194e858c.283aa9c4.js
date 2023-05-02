"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,f=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var m=2;m<o;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},s="AlterTable",i={unversionedId:"storages/developing-custom-storages/store-traits/alter-table",id:"storages/developing-custom-storages/store-traits/alter-table",title:"AlterTable",description:"The AlterTable trait corresponds to the SQL ALTER TABLE statement and is used for modifying existing schemas. It is not necessary to implement the AlterTable trait. If you are dealing with data that is difficult to modify schema-wise or schemaless data, there is no need to implement the AlterTable trait. It is an optional trait that custom storage developers can choose to implement.",source:"@site/docs/storages/developing-custom-storages/store-traits/alter-table.md",sourceDirName:"storages/developing-custom-storages/store-traits",slug:"/storages/developing-custom-storages/store-traits/alter-table",permalink:"/docs/dev/docs/storages/developing-custom-storages/store-traits/alter-table",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"customStorageSidebar",previous:{title:"StoreMut",permalink:"/docs/dev/docs/storages/developing-custom-storages/store-traits/store-mut"},next:{title:"Transaction",permalink:"/docs/dev/docs/storages/developing-custom-storages/store-traits/transaction"}},l={},m=[],p={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"altertable"},"AlterTable"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AlterTable")," trait corresponds to the SQL ALTER TABLE statement and is used for modifying existing schemas. It is not necessary to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"AlterTable")," trait. If you are dealing with data that is difficult to modify schema-wise or schemaless data, there is no need to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"AlterTable")," trait. It is an optional trait that custom storage developers can choose to implement."),(0,a.kt)("p",null,"Similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Store")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"StoreMut")," combination, if you implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"AlterTable")," trait, you can use additional tests in the Test Suite to verify your implementation. There are currently four types of methods supported by ",(0,a.kt)("inlineCode",{parentName:"p"},"AlterTable"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"rename_schema"),": Corresponds to the SQL statement ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE {table-name} RENAME TO {other-name};"),". This method renames a schema.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"rename_column"),": Corresponds to the SQL statement ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE {table-name} RENAME COLUMN {col1} TO {col2};"),". This method renames a column within a table.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"add_column"),": Corresponds to the SQL statement ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE {table-name} ADD COLUMN {col} {data-type} {constraints}"),". This method adds a new column to a table with specified data type and constraints.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"drop_column"),": Corresponds to the SQL statement ",(0,a.kt)("inlineCode",{parentName:"p"},"ALTER TABLE {table-name} DROP COLUMN {col}"),". This method removes a column from a table."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[async_trait(?Send)]\npub trait AlterTable {\n    async fn rename_schema(&mut self, _table_name: &str, _new_table_name: &str) -> Result<()>;\n\n    async fn rename_column(&mut self,\n        _table_name: &str,\n        _old_column_name: &str,\n        _new_column_name: &str,\n    ) -> Result<()>;\n\n    async fn add_column(&mut self, _table_name: &str, _column_def: &ColumnDef) -> Result<()>;\n\n    async fn drop_column(\n        &mut self,\n        _table_name: &str,\n        _column_name: &str,\n        _if_exists: bool,\n    ) -> Result<()>;\n}\n")))}d.isMDXComponent=!0}}]);