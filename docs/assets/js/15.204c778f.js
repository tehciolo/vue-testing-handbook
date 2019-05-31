(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{190:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Mutation のテストだけを独立しておこなう場合には、複雑な手順は全く必要ありません。Mutation は通常の JavasScript の関数の範囲で書かれているからです。このページでは Mutation だけの独立したテストについて取り上げます。コンポーネントが Mutation に commit する際の Mutation のテストをしたい場合には、"),a("a",{attrs:{href:"https://lmiller1990.github.io/vue-testing-handbook/ja/vuex-in-components-mutations-and-actions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("こちら"),a("OutboundLink")],1),t._v("をご覧ください。")]),t._v(" "),a("p",[t._v("このページで実装していくテストの完成形のコードは"),a("a",{attrs:{href:"https://github.com/lmiller1990/vue-testing-handbook/blob/master/demo-app/tests/unit/mutations.spec.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("このリポジトリ"),a("OutboundLink")],1),t._v("にも配置してあります。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("ではこの mutation を TDD の手法に則って開発していきましょう。まずは mutation を以下のように書いて始めましょう。")]),t._v(" "),t._m(3),a("p",[t._v("次にテストを書くことにしましょう。テストのエラーメッセージを参考にしながら開発を進めます。")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),a("p",[a("code",[t._v("postIds")]),t._v(" は良いみたいですね。しかし "),a("code",[t._v("state.posts")]),t._v(" 関しては post が本来追加されていないといけませんね。このように期待しない挙動になってしまっているのは、Vue のリアクティビティシステムが、単に "),a("code",[t._v("post[post.id] = post")]),t._v(" と書くだけでは機能しないからです。より詳しくは"),a("a",{attrs:{href:"https://jp.vuejs.org/v2/guide/reactivity.html#%E5%A4%89%E6%9B%B4%E6%A4%9C%E5%87%BA%E3%81%AE%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85",target:"_blank",rel:"noopener noreferrer"}},[t._v("こちら"),a("OutboundLink")],1),t._v("をご覧ください。これに対応するためには、新しいオブジェクトを "),a("code",[t._v("Object.assign")]),t._v(" もしくは "),a("code",[t._v("...")]),t._v(" オペレーターを使って生成すれば良いでしょう。このガイドでは "),a("code",[t._v("...")]),t._v(" を使って post を "),a("code",[t._v("state.posts")]),t._v(" にアサインしていきます。")]),t._v(" "),t._m(11),a("p",[t._v("さあ、これでテストが通りましたね！")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("Vuex の mutation に対するテストには、Vue もしくは Vuex 特有の要素は一切ありません。なぜなら mutation は JavaScript の普通の関数だからです。単に mutation を import して、必要なテストをすればいいだけです。唯一注意しなければいけないことがあるとすれば、Vue のリアクティビティに関するクセです。このクセが Vuex にも影響しています。Vue のリアクティビティシステムに関してより詳しく知りたい場合には"),a("a",{attrs:{href:"https://jp.vuejs.org/v2/guide/reactivity.html#%E5%A4%89%E6%9B%B4%E6%A4%9C%E5%87%BA%E3%81%AE%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85",target:"_blank",rel:"noopener noreferrer"}},[t._v("こちら"),a("OutboundLink")],1),t._v("を読んでください。")]),t._v(" "),a("p",[t._v("このページが扱ってきた内容をまとめると次のようになります。")]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("このページで作成したテストは"),a("a",{attrs:{href:"https://github.com/lmiller1990/vue-testing-handbook/blob/master/demo-app/tests/unit/mutations.spec.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("ここ"),a("OutboundLink")],1),t._v("でみることができます。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"mutation-をテストする"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutation-をテストする","aria-hidden":"true"}},[this._v("#")]),this._v(" Mutation をテストする")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"mutation-を作成する"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutation-を作成する","aria-hidden":"true"}},[this._v("#")]),this._v(" Mutation を作成する")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Mutation は基本的には次のような定型パターンをとります。つまり、情報を受け取って、その情報に対していくつかの処理をして、そしてその加工された情報を state に割り当てます。次のコードは "),a("code",[t._v("ADD_POST")]),t._v(" mutation の大枠です。まだ大枠しか書かれていませんが、この Mutation の実装が完成した際には、Mutation は "),a("code",[t._v("payload")]),t._v(" として送られてきた "),a("code",[t._v("post")]),t._v(" オブジェクトをとして受け取り、"),a("code",[t._v("post.id")]),t._v(" を "),a("code",[t._v("state.postIds")]),t._v(" に追加します。同時に "),a("code",[t._v("post")]),t._v(" オブジェクトを "),a("code",[t._v("state.posts")]),t._v(" オブジェクトに対して、key が "),a("code",[t._v("post.id")]),t._v(" となるプロパティとして追加します。これは Vuex を用いたアプリケーションにおいてよく取られる手法です。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token constant"}},[t._v("SET_USER")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" post "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mutations "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"@/store/mutations.js"')]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("describe")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"SET_POST"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("it")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"adds a post to the state"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" post "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Post"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      postIds"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      posts"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    mutations"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("SET_POST")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" post "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("expect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toEqual")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      postIds"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      posts"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" post "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("yarn test:unit")]),this._v("　を実行してテストを走らせます。すると、次のようなテスト失敗に関するメッセージが表示されます。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('FAIL  tests/unit/mutations.spec.js\n● SET_POST › adds a post to the state\n\n  expect(received).toEqual(expected)\n\n  Expected value to equal:\n    {"postIds": [1], "posts": {"1": {"id": 1, "title": "Post"}}}\n  Received:\n    {"postIds": [], "posts": {}}\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("ではメッセージを参考に、 "),s("code",[this._v("post.id")]),this._v(" を "),s("code",[this._v("state.postIds")]),this._v(" に追加することにしましょう。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token constant"}},[t._v("SET_POST")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" post "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("postIds"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("変更したら再度 "),s("code",[this._v("yarn test:unit")]),this._v(" を実行すると、次のようなメッセージが表示されはずです。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('Expected value to equal:\n  {"postIds": [1], "posts": {"1": {"id": 1, "title": "Post"}}}\nReceived:\n  {"postIds": [1], "posts": {}}\n')])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token constant"}},[t._v("SET_POST")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" post "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("postIds"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("posts "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("posts"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("post"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" post "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"結論"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#結論","aria-hidden":"true"}},[this._v("#")]),this._v(" 結論")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Vuex の mutation は通常の JavaScript の関数である")]),this._v(" "),s("li",[this._v("Mutation はメインの Vue アプリケーションとは切り離した状態でテストすることができ、またそうしたほうがよい")])])}],!1,null,null,null);s.default=e.exports}}]);