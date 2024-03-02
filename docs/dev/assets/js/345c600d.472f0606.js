"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>y});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,y=p["".concat(l,".").concat(d)]||p[d]||g[d]||i;return n?a.createElement(y,o(o({ref:t},m),{},{components:n})):a.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(8168),r=(n(6540),n(5680));const i={sidebar_position:3},o="Using the Test Suite",s={unversionedId:"storages/developing-custom-storages/using-test-suite",id:"storages/developing-custom-storages/using-test-suite",title:"Using the Test Suite",description:"The GlueSQL Test Suite is a valuable tool for validating your custom storage implementation. By using the provided test sets, you can ensure that your storage implementation adheres to the required specifications and works as expected with GlueSQL.",source:"@site/docs/storages/developing-custom-storages/using-test-suite.md",sourceDirName:"storages/developing-custom-storages",slug:"/storages/developing-custom-storages/using-test-suite",permalink:"/docs/dev/storages/developing-custom-storages/using-test-suite",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"autoSidebar",previous:{title:"Metadata",permalink:"/docs/dev/storages/developing-custom-storages/store-traits/metadata"}},l={},u=[],m={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"using-the-test-suite"},"Using the Test Suite"),(0,r.yg)("p",null,"The GlueSQL Test Suite is a valuable tool for validating your custom storage implementation. By using the provided test sets, you can ensure that your storage implementation adheres to the required specifications and works as expected with GlueSQL."),(0,r.yg)("p",null,"To use the Test Suite, you will need to implement the ",(0,r.yg)("inlineCode",{parentName:"p"},"Tester")," trait for your custom storage. A great reference for this process is the ",(0,r.yg)("inlineCode",{parentName:"p"},"MemoryStorage")," implementation in the GlueSQL source code. Here's an example of how the ",(0,r.yg)("inlineCode",{parentName:"p"},"MemoryStorage")," implementation looks like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"use {\n    async_trait::async_trait, gluesql_core::prelude::Glue, gluesql_memory_storage::MemoryStorage,\n    test_suite::*,\n};\n\nstruct MemoryTester {\n    glue: Glue<MemoryStorage>,\n}\n\n#[async_trait(?Send)]\nimpl Tester<MemoryStorage> for MemoryTester {\n    async fn new(_: &str) -> Self {\n        let storage = MemoryStorage::default();\n        let glue = Glue::new(storage);\n\n        MemoryTester { glue }\n    }\n\n    fn get_glue(&mut self) -> &mut Glue<MemoryStorage> {\n        &mut self.glue\n    }\n}\n")),(0,r.yg)("p",null,"Once you have implemented the ",(0,r.yg)("inlineCode",{parentName:"p"},"Tester")," trait, you can easily add the relevant test sets for the traits you have implemented in your custom storage. Here's how the ",(0,r.yg)("inlineCode",{parentName:"p"},"MemoryStorage")," implementation adds the test sets:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-rust"},"generate_store_tests!(tokio::test, MemoryTester);\n\ngenerate_alter_table_tests!(tokio::test, MemoryTester);\n\ngenerate_metadata_table_tests!(tokio::test, MemoryTester);\n\ngenerate_custom_function_tests!(tokio::test, MemoryTester);\n")),(0,r.yg)("p",null,"The MemoryStorage example demonstrates the use of the four test sets from the Test Suite, indicating that it has implemented the ",(0,r.yg)("inlineCode",{parentName:"p"},"Store"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"StoreMut"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"AlterTable"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"CustomFunction"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"CustomFunctionMut"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"Metadata")," traits. However, you don't need to implement all Store traits for your custom storage. Instead, you can choose to implement only the traits that are relevant to your use case, and use the corresponding test sets from the Test Suite for validation."),(0,r.yg)("p",null,"The Test Suite provides test sets for the following traits:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"generate_store_tests!")," - Tests for ",(0,r.yg)("inlineCode",{parentName:"li"},"Store")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"StoreMut")," implementations. (Note that ",(0,r.yg)("inlineCode",{parentName:"li"},"Store")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"StoreMut")," are required for all other test sets.)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"generate_alter_table_tests!")," - Tests for the ",(0,r.yg)("inlineCode",{parentName:"li"},"AlterTable")," trait implementation."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"generate_custom_function_tests!")," - Tests for the ",(0,r.yg)("inlineCode",{parentName:"li"},"CustomFunction")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"CustomFunctionMut")," trait implementations."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"generate_index_tests!")," - Tests for the ",(0,r.yg)("inlineCode",{parentName:"li"},"Index")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"IndexMut")," trait implementations."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"generate_transaction_tests!")," - Tests for the ",(0,r.yg)("inlineCode",{parentName:"li"},"Transaction")," trait implementation."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"generate_metadata_table_tests!")," - Tests for the ",(0,r.yg)("inlineCode",{parentName:"li"},"Metadata")," trait implementation.")),(0,r.yg)("p",null,"Additionally, the Test Suite provides combined test sets for cases where you have implemented multiple optional traits:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"generate_alter_table_index_tests!")," - Tests for the ",(0,r.yg)("inlineCode",{parentName:"li"},"AlterTable"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"Index"),", and ",(0,r.yg)("inlineCode",{parentName:"li"},"IndexMut")," trait implementations."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"generate_transaction_alter_table_tests!")," - Tests for the ",(0,r.yg)("inlineCode",{parentName:"li"},"Transaction")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"AlterTable")," trait implementations."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"generate_transaction_index_tests!")," - Tests for the ",(0,r.yg)("inlineCode",{parentName:"li"},"Transaction"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"Index"),", and ",(0,r.yg)("inlineCode",{parentName:"li"},"IndexMut")," trait implementations."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"generate_metadata_index_tests!")," - Tests for the ",(0,r.yg)("inlineCode",{parentName:"li"},"Metadata"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"Index"),", and ",(0,r.yg)("inlineCode",{parentName:"li"},"IndexMut")," trait implementations.")),(0,r.yg)("p",null,"In summary, the GlueSQL Test Suite is an essential tool for validating your custom storage implementation. By using the provided test sets and the ",(0,r.yg)("inlineCode",{parentName:"p"},"MemoryStorage")," implementation as an example, you can ensure your storage works correctly with GlueSQL and adheres to the necessary specifications."))}g.isMDXComponent=!0}}]);