"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"release-v0.14","metadata":{"permalink":"/blog/release-v0.14","source":"@site/blog/2023-05-27-release-v0.14.md","title":"Release v0.14","description":"Release Note - v0.14","date":"2023-05-27T00:00:00.000Z","formattedDate":"May 27, 2023","tags":[{"label":"v0.14","permalink":"/blog/tags/v-0-14"},{"label":"release-note","permalink":"/blog/tags/release-note"}],"readingTime":10.24,"hasTruncateMarker":false,"authors":[{"name":"Taehoon Moon","title":"Creator of GlueSQL","url":"https://github.com/panarch","image_url":"https://github.com/panarch.png","imageURL":"https://github.com/panarch.png"}],"frontMatter":{"title":"Release v0.14","description":"Release Note - v0.14","slug":"release-v0.14","authors":[{"name":"Taehoon Moon","title":"Creator of GlueSQL","url":"https://github.com/panarch","image_url":"https://github.com/panarch.png","imageURL":"https://github.com/panarch.png"}],"tags":["v0.14","release-note"]}},"content":"We now provide an official documentation website at **https://gluesql.org/docs**\\n\\n## \ud83d\ude80 Features\\n\\n### \ud83c\udf40 Schemaless data support\\n\\nGlueSQL now supports creating tables without a schema, allowing for both structured and unstructured data to be stored in the same table.\\nTo create a schemaless table, simply run CREATE TABLE without specifying any columns. For more information on querying schemaless data, please refer to the following link: **[querying schemaless data](https://gluesql.org/docs/dev/sql-syntax/statements/querying/schemaless)**\\n\\n```sql\\nCREATE TABLE Bar;\\n```\\n\\nTo insert values,\\n```sql\\nINSERT INTO Bar VALUES\\n    (\'{ \\"name\\": \\"ast\\", \\"value\\": 30 }\'),\\n    (\'{ \\"name\\": \\"glue\\", \\"rate\\": 3.0, \\"list\\": [1, 2, 3] }\'),\\n```\\n\\nThen, selecting values from schemaless table is simple.\\n```sql\\nSELECT name, rate, list[0] FROM Bar WHERE name = \'glue\';\\n```\\n\\ne.g.\\n```sql\\nCREATE TABLE Names (id INTEGER, name TEXT);\\nINSERT INTO Names VALUES (1, \'glue\'), (2, \'sql\');\\n\\nCREATE TABLE Logs;\\nINSERT INTO Logs VALUES\\n    (\'{ \\"id\\": 1, \\"value\\": 30 }\'),\\n    (\'{ \\"id\\": 2, \\"rate\\": 3.0, \\"list\\": [1, 2, 3] }\'),\\n    (\'{ \\"id\\": 3, \\"rate\\": 5.0, \\"value\\": 100 }\');\\n\\nSELECT * FROM Names JOIN Logs ON Names.id = Logs.id;\\n/*\\n| id | list    | name | rate | value |\\n|----|---------|------|------|-------|\\n| 1  |         | glue |      | 30    |\\n| 2  |[1, 2, 3]| sql  | 3    |       |\\n*/\\n```\\n- Schemaless data support [@panarch](https://github.com/panarch) ([#1046](https://github.com/gluesql/gluesql/pull/1046))\\n\\n### \ud83c\udf40 IndexedDB & WebStorage supports in JavaScript package\\n\\nGlueSQL supports handling in-memory, localStorage, sessionStorage, and even IndexedDB using the same SQL syntax. All you need to know is how to specify the `ENGINE` when creating a table.\\n\\ne.g.\\n```sql\\nCREATE TABLE Mem (mid INTEGER) ENGINE = memory;\\nCREATE TABLE Loc (lid INTEGER) ENGINE = localStorage;\\nCREATE TABLE Ses (sid INTEGER) ENGINE = sessionStorage;\\nCREATE TABLE Idb (iid INTEGER) ENGINE = indexedDB;\\n\\nSELECT\\n    mid, lid, sid, iid \\nFROM Mem\\nJOIN Loc\\nJOIN Ses\\nJOIN Idb;\\n```\\n\\n- Apply CompositeStorage to JS package [@panarch](https://github.com/panarch) ([#1084](https://github.com/gluesql/gluesql/pull/1084))\\n\\n### \ud83c\udf40 Data Types - `UINT32`, `UINT64`, `UINT128`, `POINT` and `FLOAT32`\\n- implement f32 data type [@pythonbrad](https://github.com/pythonbrad) ([#1145](https://github.com/gluesql/gluesql/pull/1145))\\n- Implement geometric `POINT` Type and geometric functions [@seonghun-dev](https://github.com/seonghun-dev) ([#1048](https://github.com/gluesql/gluesql/pull/1048))\\n- Add `UINT32`, `UINT64` and `UINT128` data types [@ChobobDev](https://github.com/ChobobDev) ([#1019](https://github.com/gluesql/gluesql/pull/1019))\\n- Add inet datatype [@pythonbrad](https://github.com/pythonbrad) ([#1080](https://github.com/gluesql/gluesql/pull/1080))\\n\\n### \ud83c\udf40 Functions - `APPEND`, `PREPEND`, `RAND`, `FIND_IDX`, `INITCAP` and `CALC_DISTANCE`\\n\\n- Feat : add calc\\\\_distance function [@seonghun-dev](https://github.com/seonghun-dev) ([#1153](https://github.com/gluesql/gluesql/pull/1153))\\n- Add `PREPEND` function for `LIST` data type [@seonghun-dev](https://github.com/seonghun-dev) ([#1149](https://github.com/gluesql/gluesql/pull/1149))\\n- add initcap function [@pythonbrad](https://github.com/pythonbrad) ([#1064](https://github.com/gluesql/gluesql/pull/1064))\\n- Implement `FIND_IDX` function [@zmrdltl](https://github.com/zmrdltl) ([#1100](https://github.com/gluesql/gluesql/pull/1100))\\n- Implement Rand function [@pythonbrad](https://github.com/pythonbrad) ([#1063](https://github.com/gluesql/gluesql/pull/1063))\\n- Add Append Function to LIST DataType [@seonghun-dev](https://github.com/seonghun-dev) ([#1047](https://github.com/gluesql/gluesql/pull/1047))\\n\\n### \ud83c\udf40 Store traits\\n\\n#### User-level custom function\\nBy implementing both the CustomFunction and CustomFunctionMut traits, users can create, use, and delete user-level custom functions. Although GlueSQL plans to continuously add various functions, users may still find them insufficient. In such cases, users can create their own user-level custom functions to supplement the built-in functions. Additionally, if there are repetitive business logic codes, they can be stored as custom functions.\\ne.g.\\n```sql\\nCREATE FUNCTION ADD_ONE (n INT, x INT DEFAULT 1) RETURN n + x;\\n\\nSELECT ADD_ONE(10) AS test;\\n\\nDROP FUNCTION ADD_ONE;\\n```\\n\\n- Support user level sql function [@pythonbrad](https://github.com/pythonbrad) ([#1095](https://github.com/gluesql/gluesql/pull/1095))\\n\\n#### Metadata\\nThe Metadata trait is an optional implementation for providing additional metadata support in GlueSQL. GlueSQL does not enforce any specific metadata implementation, allowing custom storage developers to decide which type of metadata, such as create time, modify time, etc., they want to provide.\\n\\n- Support Metadata trait [@devgony](https://github.com/devgony) ([#1096](https://github.com/gluesql/gluesql/pull/1096))\\n\\n### \ud83c\udf40 Storages\\n\\n#### JSON Storage\\n- Add JsonStorage support to CLI [@devgony](https://github.com/devgony) ([#1135](https://github.com/gluesql/gluesql/pull/1135))\\n- Rename `Jsonl`Storage to `Json`Storage [@devgony](https://github.com/devgony) ([#1128](https://github.com/gluesql/gluesql/pull/1128))\\n- Support `JSON` format in `JSONL storage` [@devgony](https://github.com/devgony) ([#1123](https://github.com/gluesql/gluesql/pull/1123))\\n- Support `Jsonl` Storage [@devgony](https://github.com/devgony) ([#1053](https://github.com/gluesql/gluesql/pull/1053))\\n\\n#### Composite Storage\\n- Add CompositeStorage which bundles multiple storages [@panarch](https://github.com/panarch) ([#1068](https://github.com/gluesql/gluesql/pull/1068))\\n\\n#### IndexedDB Storage\\n- Add IndexedDB storage support [@panarch](https://github.com/panarch) ([#1067](https://github.com/gluesql/gluesql/pull/1067))\\n\\n#### Web Storage\\n- Add WebStorage - support localStorage \\\\& sessionStorage for web browsers [@panarch](https://github.com/panarch) ([#1050](https://github.com/gluesql/gluesql/pull/1050))\\n\\n### \ud83c\udf40 Other new features\\n\\n- Wrap identifiers with double quote (`\\"`) at `to_sql` [@devgony](https://github.com/devgony) ([#1130](https://github.com/gluesql/gluesql/pull/1130))\\n- Support Values Query at ASTBuilder [@devgony](https://github.com/devgony) ([#1041](https://github.com/gluesql/gluesql/pull/1041))\\n- Support `Schema::from_ddl(ddl: &str) -> String` [@devgony](https://github.com/devgony) ([#1089](https://github.com/gluesql/gluesql/pull/1089))\\n- Support column alias for Table, Derived Table [@ding-young](https://github.com/ding-young) ([#1065](https://github.com/gluesql/gluesql/pull/1065))\\n- Support `TableFactor::{Derived, Dictionary, Series}` in AstBuilder [@devgony](https://github.com/devgony) ([#1007](https://github.com/gluesql/gluesql/pull/1007))\\n\\n## \ud83c\udf0a Interface Changes \\n\\n- Remove Store trait related cfg features, [@panarch](https://github.com/panarch) ([#1091](https://github.com/gluesql/gluesql/pull/1091))\\n- Refactor CreateTable.columns from `Vec<ColumnDef>` to `Option<Vec<ColumnDef>>` [@devgony](https://github.com/devgony) ([#1086](https://github.com/gluesql/gluesql/pull/1086))\\n- Remove `MutResult` [@panarch](https://github.com/panarch) ([#1073](https://github.com/gluesql/gluesql/pull/1073))\\n- Update all store mut trait methods to take \\\\&mut self [@panarch](https://github.com/panarch) ([#1072](https://github.com/gluesql/gluesql/pull/1072))\\n- Change StoreMut interface to use \\\\&mut self, not to take ownership [@panarch](https://github.com/panarch) ([#1071](https://github.com/gluesql/gluesql/pull/1071))\\n- Modify default ColumnOption from NOT NULL to NULL [@devgony](https://github.com/devgony) ([#997](https://github.com/gluesql/gluesql/pull/997))\\n\\n## \ud83c\udf1f Improvements\\n\\n- Add a case for insert with source [@devgony](https://github.com/devgony) ([#1211](https://github.com/gluesql/gluesql/pull/1211))\\n- Apply workspace inheritance to remaining Cargo.toml in storages/, [@panarch](https://github.com/panarch) ([#1181](https://github.com/gluesql/gluesql/pull/1181))\\n- Add nullable, key, default to `GLUE_TABLE_COLUMNS` [@devgony](https://github.com/devgony) ([#1177](https://github.com/gluesql/gluesql/pull/1177))\\n- Update core to bundle all errors using error module, [@panarch](https://github.com/panarch) ([#1178](https://github.com/gluesql/gluesql/pull/1178))\\n- Update global Error enum to display with error module prefix [@panarch](https://github.com/panarch) ([#1175](https://github.com/gluesql/gluesql/pull/1175))\\n- fix: typo [@ever0de](https://github.com/ever0de) ([#1161](https://github.com/gluesql/gluesql/pull/1161))\\n- Move the SCHEMA\\\\_PREFIX const into an impl in SledStorage [@garypen](https://github.com/garypen) ([#1151](https://github.com/gluesql/gluesql/pull/1151))\\n- Merge evaluate\\\\_stateless into evaluate, [@panarch](https://github.com/panarch) ([#1132](https://github.com/gluesql/gluesql/pull/1132))\\n- Remove memory-storage dep from JsonStorage/ Cargo.toml [@panarch](https://github.com/panarch) ([#1131](https://github.com/gluesql/gluesql/pull/1131))\\n- Simplify JsonlStorage codes [@panarch](https://github.com/panarch) ([#1126](https://github.com/gluesql/gluesql/pull/1126))\\n- Bump rust version to 1.68 [@ever0de](https://github.com/ever0de) ([#1125](https://github.com/gluesql/gluesql/pull/1125))\\n- Keep `Cargo.lock` [@ever0de](https://github.com/ever0de) ([#1121](https://github.com/gluesql/gluesql/pull/1121))\\n- Replace closure to variable in `data/interval` module [@ever0de](https://github.com/ever0de) ([#1118](https://github.com/gluesql/gluesql/pull/1118))\\n- Add `f64` support to `data::Key` [@panarch](https://github.com/panarch) ([#1114](https://github.com/gluesql/gluesql/pull/1114))\\n- Add Ord impl for Key, [@panarch](https://github.com/panarch) ([#1110](https://github.com/gluesql/gluesql/pull/1110))\\n- join\\\\_expr when in\\\\_subquery, exists expr in join constraint [@ding-young](https://github.com/ding-young) ([#1112](https://github.com/gluesql/gluesql/pull/1112))\\n- Split JS related GitHub action, [@panarch](https://github.com/panarch) ([#1109](https://github.com/gluesql/gluesql/pull/1109))\\n- Fix error handling for `ilike` function on `Literal` being treated as\u2026 [@ever0de](https://github.com/ever0de) ([#1107](https://github.com/gluesql/gluesql/pull/1107))\\n- Remove `Rc` in `validate.rs` [@ever0de](https://github.com/ever0de) ([#1106](https://github.com/gluesql/gluesql/pull/1106))\\n- Remove `Error::Storage` variant [@ever0de](https://github.com/ever0de) ([#1105](https://github.com/gluesql/gluesql/pull/1105))\\n- Replace `Box::pin` to `futures_enum::Stream` [@ever0de](https://github.com/ever0de) ([#1103](https://github.com/gluesql/gluesql/pull/1103))\\n- Remove stream unneeded map ok uses [@panarch](https://github.com/panarch) ([#1104](https://github.com/gluesql/gluesql/pull/1104))\\n- Replace `TryStream` to `Stream` [@ever0de](https://github.com/ever0de) ([#1102](https://github.com/gluesql/gluesql/pull/1102))\\n- Remove `Rc` from `ColumnValidation` [@ever0de](https://github.com/ever0de) ([#1101](https://github.com/gluesql/gluesql/pull/1101))\\n- Remove unneeded Rc uses in fetch\\\\_labels [@panarch](https://github.com/panarch) ([#1098](https://github.com/gluesql/gluesql/pull/1098))\\n- Simplify TryStreamExt using codes in join executor, [@panarch](https://github.com/panarch) ([#1097](https://github.com/gluesql/gluesql/pull/1097))\\n- Fix typo in plan/validate.rs [@ever0de](https://github.com/ever0de) ([#1093](https://github.com/gluesql/gluesql/pull/1093))\\n- Update IdbStorage to use Schema::{to\\\\_ddl, from\\\\_ddl} to manage schema \u2026 [@panarch](https://github.com/panarch) ([#1090](https://github.com/gluesql/gluesql/pull/1090))\\n- Update Cargo.toml files to inherit workspace level configs, [@panarch](https://github.com/panarch) ([#1088](https://github.com/gluesql/gluesql/pull/1088))\\n- Add Error enum to core::prelude [@panarch](https://github.com/panarch) ([#1087](https://github.com/gluesql/gluesql/pull/1087))\\n- Update `StringExt` implementation to use `str` [@ever0de](https://github.com/ever0de) ([#1082](https://github.com/gluesql/gluesql/pull/1082))\\n- Add enum `StrSlice` under enum `Evaluated` [@zmrdltl](https://github.com/zmrdltl) ([#999](https://github.com/gluesql/gluesql/pull/999))\\n- refactor plan::validate::Context.labels from String to str [@devgony](https://github.com/devgony) ([#1079](https://github.com/gluesql/gluesql/pull/1079))\\n- Replace `dyn object` to generic [@ever0de](https://github.com/ever0de) ([#1075](https://github.com/gluesql/gluesql/pull/1075))\\n- Implement ValidationContext(schema\\\\_map + alias) to enhance validation of ambiguous columns [@devgony](https://github.com/devgony) ([#883](https://github.com/gluesql/gluesql/pull/883))\\n- Remove `clone` in `check_table_factor` [@ever0de](https://github.com/ever0de) ([#1058](https://github.com/gluesql/gluesql/pull/1058))\\n- Bump rust-toolchain version to `1.66` [@ever0de](https://github.com/ever0de) ([#1057](https://github.com/gluesql/gluesql/pull/1057))\\n- Bump `sqlparser` version to `0.30` [@ever0de](https://github.com/ever0de) ([#1056](https://github.com/gluesql/gluesql/pull/1056))\\n- Replace `Box::pin` to `futures_enum` in aggregate module [@ever0de](https://github.com/ever0de) ([#1055](https://github.com/gluesql/gluesql/pull/1055))\\n- Update js/ Cargo.toml to use gloo-utils for serde handling [@panarch](https://github.com/panarch) ([#1049](https://github.com/gluesql/gluesql/pull/1049))\\n- Remove ast::ColumnOption and merge UNIQUE option to ColumnDef [@panarch](https://github.com/panarch) ([#1044](https://github.com/gluesql/gluesql/pull/1044))\\n- Rewrite \\\\& simplify plan/context.rs codes, [@panarch](https://github.com/panarch) ([#1045](https://github.com/gluesql/gluesql/pull/1045))\\n- Move ast::ColumnOption::Default variant to ColumnDef [@panarch](https://github.com/panarch) ([#1042](https://github.com/gluesql/gluesql/pull/1042))\\n- [AST-Builder] Remove unused prebuild nodes  [@ding-young](https://github.com/ding-young) ([#1043](https://github.com/gluesql/gluesql/pull/1043))\\n- Remove data::RowError, [@panarch](https://github.com/panarch) ([#1040](https://github.com/gluesql/gluesql/pull/1040))\\n- Reorder project in ASTBuilder (project -> ordery\\\\_by -> limit,offset) [@devgony](https://github.com/devgony) ([#1039](https://github.com/gluesql/gluesql/pull/1039))\\n- Remove unused LimitOffsetNode in AST builder [@panarch](https://github.com/panarch) ([#1038](https://github.com/gluesql/gluesql/pull/1038))\\n- Rename executor/ blend.rs module to project.rs [@SaumyaBhushan](https://github.com/SaumyaBhushan) ([#1036](https://github.com/gluesql/gluesql/pull/1036))\\n- Add Debug to AST builder nodes [@panarch](https://github.com/panarch) ([#1022](https://github.com/gluesql/gluesql/pull/1022))\\n- Bump rust toolchain version to 1.65 [@ever0de](https://github.com/ever0de) ([#1035](https://github.com/gluesql/gluesql/pull/1035))\\n- Remove `Content::Shared` variant in executor/ `RowContext` [@ever0de](https://github.com/ever0de) ([#1032](https://github.com/gluesql/gluesql/pull/1032))\\n- Merge insert logics in row.rs \\\\& execute.rs into executor/insert.rs [@panarch](https://github.com/panarch) ([#1031](https://github.com/gluesql/gluesql/pull/1031))\\n- Merge FilterContext and BlendContext into RowContext [@panarch](https://github.com/panarch) ([#1029](https://github.com/gluesql/gluesql/pull/1029))\\n- Update `data::Row` to contain columns [@panarch](https://github.com/panarch) ([#1026](https://github.com/gluesql/gluesql/pull/1026))\\n- Add LIST type support in CONCAT function [@seonghun-dev](https://github.com/seonghun-dev) ([#1021](https://github.com/gluesql/gluesql/pull/1021))\\n- Remove LimitOffsetNode in AST builder [@panarch](https://github.com/panarch) ([#1023](https://github.com/gluesql/gluesql/pull/1023))\\n- Fix typo [@ever0de](https://github.com/ever0de) ([#1020](https://github.com/gluesql/gluesql/pull/1020))\\n- Add NumericNode to handle numeric value inputs in AST builder [@panarch](https://github.com/panarch) ([#1017](https://github.com/gluesql/gluesql/pull/1017))\\n- Update ValueError::InvalidJsonString error to show input text [@panarch](https://github.com/panarch) ([#1018](https://github.com/gluesql/gluesql/pull/1018))\\n- Add null() func which makes NULL value in AST builder [@panarch](https://github.com/panarch) ([#1016](https://github.com/gluesql/gluesql/pull/1016))\\n- Add --all-targets option to cargo clippy rust gh-action [@panarch](https://github.com/panarch) ([#1015](https://github.com/gluesql/gluesql/pull/1015))\\n- Move import `ColumnOption` used only by `alter-table` feature in ast-builder [@ever0de](https://github.com/ever0de) ([#1014](https://github.com/gluesql/gluesql/pull/1014))\\n- Add value/ binary\\\\_op `Parital{Ord,Cmp}` impl macro [@ever0de](https://github.com/ever0de) ([#1013](https://github.com/gluesql/gluesql/pull/1013))\\n- Change to use internal chrono errors in parsing datetime [@ever0de](https://github.com/ever0de) ([#1010](https://github.com/gluesql/gluesql/pull/1010))\\n- Resolve unreachable branch of `Value::position` [@ever0de](https://github.com/ever0de) ([#1012](https://github.com/gluesql/gluesql/pull/1012))\\n- Apply binary\\\\_op macros to existing data types [@ChobobDev](https://github.com/ChobobDev) ([#987](https://github.com/gluesql/gluesql/pull/987))\\n- chore: Use rust-cache action to cache dependencies [@jongwooo](https://github.com/jongwooo) ([#1006](https://github.com/gluesql/gluesql/pull/1006))\\n- Group the import statements [@yugeeklab](https://github.com/yugeeklab) ([#1005](https://github.com/gluesql/gluesql/pull/1005))\\n- Make Tester::new async [@ShaddyDC](https://github.com/ShaddyDC) ([#1004](https://github.com/gluesql/gluesql/pull/1004))\\n- Make MemoryStorage Store trait features optional, [@panarch](https://github.com/panarch) ([#1003](https://github.com/gluesql/gluesql/pull/1003))\\n- Replace `double quotes` to `identifier` [@devgony](https://github.com/devgony) ([#1001](https://github.com/gluesql/gluesql/pull/1001))\\n- Change chrono `from_*` methods to `from_*_opt` [@ever0de](https://github.com/ever0de) ([#1000](https://github.com/gluesql/gluesql/pull/1000))\\n- Improve duplicate column names validation [@devgony](https://github.com/devgony) ([#995](https://github.com/gluesql/gluesql/pull/995))\\n- Register `lock` when `fetch_all_schemas` face `idle` [@devgony](https://github.com/devgony) ([#996](https://github.com/gluesql/gluesql/pull/996))\\n- Merge ColumnOption::{Null, NotNull} into a single option [@devgony](https://github.com/devgony) ([#986](https://github.com/gluesql/gluesql/pull/986))\\n- Update rust.yml github action to test examples/ [@panarch](https://github.com/panarch) ([#994](https://github.com/gluesql/gluesql/pull/994))\\n\\n\\n## \ud83c\udf33 Documentation\\n\\n**We now provide an official documentation website at https://gluesql.org/docs**\\n\\n- Add documentation for CLI [@devgony](https://github.com/devgony) ([#1183](https://github.com/gluesql/gluesql/pull/1183))\\n- Add ast\\\\_builder null handling doc [@LEE026](https://github.com/LEE026) ([#1209](https://github.com/gluesql/gluesql/pull/1209))\\n- Add document of datetime current date and time for ast-builder [@heewoneha](https://github.com/heewoneha) ([#1208](https://github.com/gluesql/gluesql/pull/1208))\\n- docs: write position and indexing docs [@Bangseungjae](https://github.com/Bangseungjae) ([#1206](https://github.com/gluesql/gluesql/pull/1206))\\n- Add docs/formatting for ast\\\\_builder [@sooyeonyim-t](https://github.com/sooyeonyim-t) ([#1200](https://github.com/gluesql/gluesql/pull/1200))\\n- Update math basic arithmetic docs for ast\\\\_builder [@changi1122](https://github.com/changi1122) ([#1202](https://github.com/gluesql/gluesql/pull/1202))\\n- Add pattern-matching doc for ast\\\\_builder [@LEE026](https://github.com/LEE026) ([#1199](https://github.com/gluesql/gluesql/pull/1199))\\n- Add ast builder Trimming function docs [@Bangseungjae](https://github.com/Bangseungjae) ([#1197](https://github.com/gluesql/gluesql/pull/1197))\\n- Add doc about the function Date \\\\& Time Conversion [@heewoneha](https://github.com/heewoneha) ([#1196](https://github.com/gluesql/gluesql/pull/1196))\\n- add Docs/case conversion(upper, lower, InitCap) in ast builder [@sooyeonyim-t](https://github.com/sooyeonyim-t) ([#1195](https://github.com/gluesql/gluesql/pull/1195))\\n- Add math conversion docs for ast\\\\_builder [@changi1122](https://github.com/changi1122) ([#1192](https://github.com/gluesql/gluesql/pull/1192))\\n- Added documentation for the round, ceil, and floor functions in ast-builder [@LEE026](https://github.com/LEE026) ([#1191](https://github.com/gluesql/gluesql/pull/1191))\\n- Add  documentation layout for AstBuilder [@devgony](https://github.com/devgony) ([#1184](https://github.com/gluesql/gluesql/pull/1184))\\n- Add documentation for Json Storage [@devgony](https://github.com/devgony) ([#1170](https://github.com/gluesql/gluesql/pull/1170))\\n- Add documentation for math functions [@panarch](https://github.com/panarch) ([#1173](https://github.com/gluesql/gluesql/pull/1173))\\n- Add doc for datetime, geometry, list \\\\& map and other functions, [@panarch](https://github.com/panarch) ([#1172](https://github.com/gluesql/gluesql/pull/1172))\\n- Add documentation for text functions in SQL [@panarch](https://github.com/panarch) ([#1167](https://github.com/gluesql/gluesql/pull/1167))\\n- Write docs/ Supported Storages section contents, [@panarch](https://github.com/panarch) ([#1165](https://github.com/gluesql/gluesql/pull/1165))\\n- Add SQL function list with categories to docs/ [@panarch](https://github.com/panarch) ([#1166](https://github.com/gluesql/gluesql/pull/1166))\\n- Write docs/getting-started/javascript-web.md [@panarch](https://github.com/panarch) ([#1159](https://github.com/gluesql/gluesql/pull/1159))\\n- Write docs/ Developing Custom Storages contents [@panarch](https://github.com/panarch) ([#1155](https://github.com/gluesql/gluesql/pull/1155))\\n- docs: add newly added data type into README.md [@ChobobDev](https://github.com/ChobobDev) ([#1137](https://github.com/gluesql/gluesql/pull/1137))\\n- docs(readme): add discord icon to chat badge [@LeoDog896](https://github.com/LeoDog896) ([#1122](https://github.com/gluesql/gluesql/pull/1122))\\n- docs(javascript): update examples link [@LeoDog896](https://github.com/LeoDog896) ([#1108](https://github.com/gluesql/gluesql/pull/1108))\\n\\n### Docs - setup\\n\\n- Add gh-action for docs build - runs on both push \\\\& pr [@panarch](https://github.com/panarch) ([#1215](https://github.com/gluesql/gluesql/pull/1215))\\n- Setup blog based on docusaurus, [@panarch](https://github.com/panarch) ([#1212](https://github.com/gluesql/gluesql/pull/1212))\\n- Remove mdbook which is replaced by docs/ (docusaurus based) [@panarch](https://github.com/panarch) ([#1164](https://github.com/gluesql/gluesql/pull/1164))\\n- Add docusaurus deployment github action setup [@panarch](https://github.com/panarch) ([#1163](https://github.com/gluesql/gluesql/pull/1163))\\n- Update coverage, javascript and rust gh action to ignore `docs/**` pa\u2026 [@panarch](https://github.com/panarch) ([#1168](https://github.com/gluesql/gluesql/pull/1168))\\n- Update docs/ global styles, [@panarch](https://github.com/panarch) ([#1156](https://github.com/gluesql/gluesql/pull/1156))\\n- Setup new documentation based on docusaurus [@panarch](https://github.com/panarch) ([#1136](https://github.com/gluesql/gluesql/pull/1136))\\n\\n\\n## \ud83d\udccb Tests\\n\\n- Add ifnull test suite for ast\\\\_builder [@LEE026](https://github.com/LEE026) ([#1207](https://github.com/gluesql/gluesql/pull/1207))\\n- Add datetime current date and time test case for ast builder [@heewoneha](https://github.com/heewoneha) ([#1205](https://github.com/gluesql/gluesql/pull/1205))\\n- Add Position and Indexing test code [@Bangseungjae](https://github.com/Bangseungjae) ([#1203](https://github.com/gluesql/gluesql/pull/1203))\\n- Add math basic arithmetic test case for ast\\\\_builder [@changi1122](https://github.com/changi1122) ([#1201](https://github.com/gluesql/gluesql/pull/1201))\\n- Add testcase/formatting for ast\\\\_builder [@sooyeonyim-t](https://github.com/sooyeonyim-t) ([#1198](https://github.com/gluesql/gluesql/pull/1198))\\n- Add pattern\\\\_matching test cases for ast\\\\_builder [@LEE026](https://github.com/LEE026) ([#1194](https://github.com/gluesql/gluesql/pull/1194))\\n- Add test code function / text / trimming [@Bangseungjae](https://github.com/Bangseungjae) ([#1190](https://github.com/gluesql/gluesql/pull/1190))\\n- Add Testcase/case conversion [@sooyeonyim-t](https://github.com/sooyeonyim-t) ([#1193](https://github.com/gluesql/gluesql/pull/1193))\\n- Add datetime conversion test cases for ast\\\\_builder [@heewoneha](https://github.com/heewoneha) ([#1187](https://github.com/gluesql/gluesql/pull/1187))\\n- Add math conversion test case for ast\\\\_builder [@changi1122](https://github.com/changi1122) ([#1189](https://github.com/gluesql/gluesql/pull/1189))\\n- Add rounding test cases for ast\\\\_builder [@LEE026](https://github.com/LEE026) ([#1186](https://github.com/gluesql/gluesql/pull/1186))\\n- Update delete and insert tests in test-suite/, [@panarch](https://github.com/panarch) ([#1180](https://github.com/gluesql/gluesql/pull/1180))\\n- Remove gen-\\\\_transaction\\\\_dictionary\\\\_tests! in test-suite, [@panarch](https://github.com/panarch) ([#1179](https://github.com/gluesql/gluesql/pull/1179))\\n- Refactor geometry function tests in test-suite, [@panarch](https://github.com/panarch) ([#1176](https://github.com/gluesql/gluesql/pull/1176))\\n- Refactor SQL function tests in test-suite, [@panarch](https://github.com/panarch) ([#1174](https://github.com/gluesql/gluesql/pull/1174))\\n- fix : fix missing intg test for new data type [@ChobobDev](https://github.com/ChobobDev) ([#1143](https://github.com/gluesql/gluesql/pull/1143))\\n- Add unit tests for `TryFrom<&Value> for Decimal` [@ChobobDev](https://github.com/ChobobDev) ([#1139](https://github.com/gluesql/gluesql/pull/1139))\\n- Add \\"cli\\" unittest [@pythonbrad](https://github.com/pythonbrad) ([#1094](https://github.com/gluesql/gluesql/pull/1094))\\n- Add `core/data` module unit tests [@pythonbrad](https://github.com/pythonbrad) ([#1092](https://github.com/gluesql/gluesql/pull/1092))\\n\\n## \ud83d\udc1b Bug Fixes\\n\\n- Fix docusaurus pages/index broken link [@panarch](https://github.com/panarch) ([#1214](https://github.com/gluesql/gluesql/pull/1214))\\n- Fix docs/ Discord GlueSQL channel invite link address [@panarch](https://github.com/panarch) ([#1213](https://github.com/gluesql/gluesql/pull/1213))\\n- Fix InvalidJsonString error message replacing payload to fileName [@devgony](https://github.com/devgony) ([#1185](https://github.com/gluesql/gluesql/pull/1185))\\n- Fix TryFrom `Value::Str` to `u128` not to use `parse_uuid` [@ChobobDev](https://github.com/ChobobDev) ([#1134](https://github.com/gluesql/gluesql/pull/1134))\\n- Fix column alias with identifer for `TableFactor::Derived` [@ding-young](https://github.com/ding-young) ([#1119](https://github.com/gluesql/gluesql/pull/1119))\\n- Pass data even when `deleted_by` is not present [@ever0de](https://github.com/ever0de) ([#1117](https://github.com/gluesql/gluesql/pull/1117))\\n- Fix MemoryStorage \\\\& WebStorage primary key support [@panarch](https://github.com/panarch) ([#1115](https://github.com/gluesql/gluesql/pull/1115))\\n- Fix `plan::validate` to handle `CTAS` and `ITAS` adding unit test [@devgony](https://github.com/devgony) ([#1074](https://github.com/gluesql/gluesql/pull/1074))\\n- Fix test-suite tester functions to show (found, expected) shape [@panarch](https://github.com/panarch) ([#1028](https://github.com/gluesql/gluesql/pull/1028))"}]}')}}]);