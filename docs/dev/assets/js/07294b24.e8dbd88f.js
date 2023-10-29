"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3726],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(t),f=a,h=s["".concat(d,".").concat(f)]||s[f]||u[f]||l;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const l={},o="Padding",i={unversionedId:"ast-builder/functions/text/padding",id:"ast-builder/functions/text/padding",title:"Padding",description:"The AST Builder API in GlueSQL allows you to execute lpad and rpad functions for text padding.",source:"@site/docs/ast-builder/functions/text/padding.md",sourceDirName:"ast-builder/functions/text",slug:"/ast-builder/functions/text/padding",permalink:"/docs/dev/ast-builder/functions/text/padding",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"autoSidebar",previous:{title:"Character Conversion",permalink:"/docs/dev/ast-builder/functions/text/character-conversion"},next:{title:"Position and Indexing",permalink:"/docs/dev/ast-builder/functions/text/position-and-indexing"}},d={},p=[{value:"lpad",id:"lpad",level:2},{value:"rpad",id:"rpad",level:2},{value:"Examples",id:"examples",level:2}],c={toc:p},s="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"padding"},"Padding"),(0,a.kt)("p",null,"The AST Builder API in GlueSQL allows you to execute lpad and rpad functions for text padding."),(0,a.kt)("h2",{id:"lpad"},"lpad"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"lpad")," returns the string with leading space if the length of the string is less than the specified length."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rs"},"lpad<'a, T: Into<ExprNode<'a>>>(expr: T, len: usize, fill: Option<String>) -> ExprNode<'a>\n")),(0,a.kt)("h2",{id:"rpad"},"rpad"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rpad")," returns the string with trailing space if the length of the string is less than the specified length."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rs"},"rpad<'a, T: Into<ExprNode<'a>>>(expr: T, len: usize, fill: Option<String>) -> ExprNode<'a>\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"In these examples, the LPAD and RPAD functions should return matching values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rs"},'use {\n    crate::*,\n    gluesql_core::{\n        ast_builder::{function as f, *},\n        prelude::Value::{Null, Str},\n    },\n};\n\ntest_case!(padding, {\n    let glue = get_glue!();\n\n    let actual = values(vec![\n        vec![f::lpad("\'hello\'", 10, None), f::rpad("\'hello\'", 10, None)],\n        vec![\n            f::lpad("\'hello\'", 10, Some("\'ab\'".into())),\n            f::rpad("\'hello\'", 10, Some("\'ab\'".into())),\n        ],\n        vec![f::lpad("\'hello\'", 3, None), f::rpad("\'hello\'", 3, None)],\n        vec![\n            f::lpad("\'hello\'", 3, Some("\'ab\'".into())),\n            f::rpad("\'hello\'", 3, Some("\'ab\'".into())),\n        ],\n        vec![f::lpad("NULL", 5, None), f::rpad("NULL", 5, None)],\n    ])\n    .alias_as("Sub")\n    .select()\n    .project("column1 AS lpaded")\n    .project("column2 AS rpaded")\n    .execute(glue)\n    .await;\n    let expected = Ok(select_with_null!(\n        lpaded                       | rpaded;\n        Str("     hello".to_owned())   Str("hello     ".to_owned());\n        Str("ababahello".to_owned())   Str("helloababa".to_owned());\n        Str("hel".to_owned())          Str("hel".to_owned());\n        Str("hel".to_owned())          Str("hel".to_owned());\n        Null                           Null\n    ));\n    assert_eq!(\n        actual, expected,\n        "lpad and rpad should pad the string with given length"\n    );\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"| lpaded       | rpaded       |\n| ------------ | ------------ |\n| '     hello' | 'hello     ' |\n| 'ababahello' | 'helloababa' |\n| 'hel'        | 'hel'        |\n| 'hel'        | 'hel'        |\n| Null         | Null         |\n")))}u.isMDXComponent=!0}}]);