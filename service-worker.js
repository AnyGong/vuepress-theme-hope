/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d15979496fbec66da78b3b192c96fa88"
  },
  {
    "url": "api/index.html",
    "revision": "9bd8002d1b654df2984ad14b7100cd3c"
  },
  {
    "url": "api/page.html",
    "revision": "eaf80ca7a3dd22091108e8d0b214bcd9"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "d5b1fab00f7c8f8f1213b062d9704a4b"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "3ee76b9bf7e36734681a2de33b4e0ff7"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "2fde842707f0ff1a213e3faa022dd888"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "2571396a78bd64fe4d29f3dc9832f798"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "54cc793b10d5c4cbc099ad86f45039ef"
  },
  {
    "url": "api/stylus.html",
    "revision": "760db60f34e120f7200b884eb89acd43"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "d127dbc5e707ad4534d6ac9d4b4a2d94"
  },
  {
    "url": "assets/css/0.styles.10412e03.css",
    "revision": "39c3712176f9018bfc62770551e9462c"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/img/architecture.9a93cf6c.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/86.66a1dfc2.js",
    "revision": "1071e2fdc077814968d564f53586dcc9"
  },
  {
    "url": "assets/js/87.6257586a.js",
    "revision": "1e0b833f3826225c183567eb4f6d80f3"
  },
  {
    "url": "assets/js/app.11d1de8e.js",
    "revision": "2ac62f643c3ffa9ec96c7f6e238c5c3f"
  },
  {
    "url": "assets/js/layout-Layout.0841e7f5.js",
    "revision": "d1c0fced0c103dfceaa44dd4fe601613"
  },
  {
    "url": "assets/js/layout-NotFound.ebaa4df2.js",
    "revision": "276e10dcabaee1252b4399236edfd932"
  },
  {
    "url": "assets/js/page--1b278726.e449ad01.js",
    "revision": "8c10a543adf547c9c3b1a33aded33c6a"
  },
  {
    "url": "assets/js/page--24b68849.6de9bc24.js",
    "revision": "676804bb488090909433cb21a748023e"
  },
  {
    "url": "assets/js/page--298eb4e9.becd6bb7.js",
    "revision": "0943569f07a01390396ef4242fd16ee6"
  },
  {
    "url": "assets/js/page--33732ef1.122a6cae.js",
    "revision": "f3459aac2916332afc165d58c66744cd"
  },
  {
    "url": "assets/js/page--608d80cf.947bacfa.js",
    "revision": "8b3160973b4ff32282d079a3a70b8209"
  },
  {
    "url": "assets/js/page--b64dd6ee.634f1c35.js",
    "revision": "bc67bebe8871e661c12542dfa0cf9169"
  },
  {
    "url": "assets/js/page-About Vuepress.c1a43556.js",
    "revision": "f4ce03da47102e64ad5ea6e6dfccd6d1"
  },
  {
    "url": "assets/js/page-API Docs.e84be6a5.js",
    "revision": "a22d9913c647e17c9687f02646ea3c0d"
  },
  {
    "url": "assets/js/page-API 文档.6b97e303.js",
    "revision": "47e397b28176f6a5eadad8168c42dc8c"
  },
  {
    "url": "assets/js/page-Basic.510ffefa.js",
    "revision": "e955f015a541c5ac3feee4367cc449bf"
  },
  {
    "url": "assets/js/page-Breadcrumb.9503953f.js",
    "revision": "4eff140b8e5735b34af2d10ee49ce742"
  },
  {
    "url": "assets/js/page-Comment Function.d6704d4f.js",
    "revision": "0f595041cb5f7235fc5d4e956a742406"
  },
  {
    "url": "assets/js/page-Default Theme Config.3d5bfeef.js",
    "revision": "84961d115e4e3af7c85adcce59333ffd"
  },
  {
    "url": "assets/js/page-Emoji List.cc15b207.js",
    "revision": "21d9acb85e40e009484eb80b0450db0a"
  },
  {
    "url": "assets/js/page-Emoji列表.1fbeee28.js",
    "revision": "9633c85ab4f84e0f0d0cc068affce8d9"
  },
  {
    "url": "assets/js/page-File Structure.6fe281d3.js",
    "revision": "e6f91aa8e07dfcc6720ebc6e55506bc1"
  },
  {
    "url": "assets/js/page-flowchart.90069f5e.js",
    "revision": "1ba0da80e16b7836dcd6f134d33e8921"
  },
  {
    "url": "assets/js/page-Footnote.e7fb8c20.js",
    "revision": "68a62a4288f5b58fd0e472d04bf62930"
  },
  {
    "url": "assets/js/page-Fullscreen Button.cb39ee6b.js",
    "revision": "044aff1d3a2ccfa639156231ec9a6a27"
  },
  {
    "url": "assets/js/page-Home Page.f0933c80.js",
    "revision": "c81523ee4318b4fc25077298685bdc5e"
  },
  {
    "url": "assets/js/page-Home.0b25fe6d.js",
    "revision": "c88f4db5172e13ceb5f14b0d4a19acd6"
  },
  {
    "url": "assets/js/page-Introduction.ca59b860.js",
    "revision": "02231525c40f68baa612e0376b09d6da"
  },
  {
    "url": "assets/js/page-Markdown DEMO.380699d7.js",
    "revision": "8706dce8e807e7f9616369981e18ca15"
  },
  {
    "url": "assets/js/page-Markdown Introduction.09f4c1c0.js",
    "revision": "d9e45f1b7fd011b861211cc5e6ab120c"
  },
  {
    "url": "assets/js/page-Markdown 中的新语法.707c919d.js",
    "revision": "c04c26e988ef8590acae0abdf15af827"
  },
  {
    "url": "assets/js/page-Markdown介绍.68c3bdf5.js",
    "revision": "c3c67dab7f556d85df9941e89ea59a85"
  },
  {
    "url": "assets/js/page-Markdown示例.cce13ed7.js",
    "revision": "df9563eeee1b590fe0e09b1b42357047"
  },
  {
    "url": "assets/js/page-NavBar.bf3a5752.js",
    "revision": "af54cf7248c7fa70e95eaea60ed14e83"
  },
  {
    "url": "assets/js/page-New Component.9f152df0.js",
    "revision": "a3fe564960400bb1c099a03f4163efe3"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.bb01735c.js",
    "revision": "ac2c1103bcdff84903427b8597fe9ee9"
  },
  {
    "url": "assets/js/page-Page Configuration.9e00d6fe.js",
    "revision": "4baa183bd7ed8805139b95a3f048309a"
  },
  {
    "url": "assets/js/page-Page.c5945992.js",
    "revision": "50991a8142ea128689602fea1b202719"
  },
  {
    "url": "assets/js/page-Plugin Description.8914b874.js",
    "revision": "7e92ffadda9bdb77c4deb30d2fecd214"
  },
  {
    "url": "assets/js/page-Plugins.47a41d21.js",
    "revision": "dfd8d58c25b481627f58db412eb6f9ff"
  },
  {
    "url": "assets/js/page-Sidebar.9b8d7de4.js",
    "revision": "e7a32fd678d91b50d194c8a896d0209f"
  },
  {
    "url": "assets/js/page-stylus configuration.d7f6f720.js",
    "revision": "603b3ae838965c267c158173a144230b"
  },
  {
    "url": "assets/js/page-stylus 配置.3617658f.js",
    "revision": "6a6bf61d910cbe974766d31d6bfea77b"
  },
  {
    "url": "assets/js/page-Superscript and Subscript.ca4855d7.js",
    "revision": "cd7fd530058d03d8bc41ce09e34b14fb"
  },
  {
    "url": "assets/js/page-Tex Support.59ea1bc3.js",
    "revision": "042227312aea8a09d59bdb0f8f4c4c12"
  },
  {
    "url": "assets/js/page-Tex 语法支持.0dbe92ca.js",
    "revision": "970d31d6b057e8d77cb23e1c15584e9f"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.3fbd4c25.js",
    "revision": "3fe434a27cee63bbc483a9b298555597"
  },
  {
    "url": "assets/js/page-Theme Config.e5c2bb83.js",
    "revision": "6846eba2ce748660cca28305f0fa0be7"
  },
  {
    "url": "assets/js/page-Vuepress Cases.c8caf5b3.js",
    "revision": "88a8f4d127b096a64361cb352ececb28"
  },
  {
    "url": "assets/js/page-Vuepress commands.b7a4c2be.js",
    "revision": "ac7849c98afb7426d7c3715313c0c47d"
  },
  {
    "url": "assets/js/page-Vuepress 案例.402bbc20.js",
    "revision": "57ee466c4281963ddfe5b40aa5360cf0"
  },
  {
    "url": "assets/js/page-vuepress-plugin-container.e06a3ff0.js",
    "revision": "a6c233f160e585d0876375ce9a4cfffe"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.36895a02.js",
    "revision": "7e95b7970f8f4b8769f49df293f9f855"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.aa1c2182.js",
    "revision": "040ec89bbbfdaf5023d9e5e02611663a"
  },
  {
    "url": "assets/js/page-Vuepress.b28e7e10.js",
    "revision": "f05f7bce9d5a3b780372eed674a0a9e7"
  },
  {
    "url": "assets/js/page-Writing a theme.d772938c.js",
    "revision": "1329a5e215ed67549627684ba708b704"
  },
  {
    "url": "assets/js/page-上下角标.4238e53c.js",
    "revision": "fba8014590bc68a12d3eea9400cae67f"
  },
  {
    "url": "assets/js/page-主页.f2948ac9.js",
    "revision": "f4ac55e6eb182c1827596e5fb7ffbeb8"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.fda73f5f.js",
    "revision": "44b8f3b6bf39f0ab6b763240775d4030"
  },
  {
    "url": "assets/js/page-主题配置.fd746236.js",
    "revision": "6611ba9a474a6c337b80ce60391b2543"
  },
  {
    "url": "assets/js/page-人物.20693d51.js",
    "revision": "5066c93b7cd4c8eb1be604b0a798ab33"
  },
  {
    "url": "assets/js/page-介绍.c29ace52.js",
    "revision": "24de5cfb20d0a1b3704dba786d00f56e"
  },
  {
    "url": "assets/js/page-侧边栏.4340bc2d.js",
    "revision": "de0d0fd45fbe1e1d0e359075700537d7"
  },
  {
    "url": "assets/js/page-全屏按钮.2a52fd72.js",
    "revision": "e263ba081ee9f5bd1777cbf57e926fd1"
  },
  {
    "url": "assets/js/page-图标支持.7e57429e.js",
    "revision": "4b33c9c0e80017adc14607f507e3748d"
  },
  {
    "url": "assets/js/page-地点.2d86d277.js",
    "revision": "435de57a9d82c5860d9d3edb9eba2c97"
  },
  {
    "url": "assets/js/page-基础知识.7ac5daa2.js",
    "revision": "c5b2c92988265a79a4ccb4df555937cb"
  },
  {
    "url": "assets/js/page-对象.973ba216.js",
    "revision": "8ee3e604a9441eeac5c24070b4ab60e7"
  },
  {
    "url": "assets/js/page-导航栏.0fa72f4b.js",
    "revision": "b7469f1919b5d0be4a176fae1da581e7"
  },
  {
    "url": "assets/js/page-常见问题.c2b6ec4f.js",
    "revision": "67a82519a1f8ede090fa7def9e146903"
  },
  {
    "url": "assets/js/page-开发主题.c8c2c271.js",
    "revision": "a6350946a19c64de3c23f628d90e24b2"
  },
  {
    "url": "assets/js/page-插件.c4882fc4.js",
    "revision": "5e26948c29e5403eec7755943becf87b"
  },
  {
    "url": "assets/js/page-插件说明.b3ef6156.js",
    "revision": "bcef0c00a2ccc422affc9d72bea3d583"
  },
  {
    "url": "assets/js/page-文件结构介绍.2ffb4eb4.js",
    "revision": "ca961ea511de6849b8795b8df29b3575"
  },
  {
    "url": "assets/js/page-新增组件.5af578a6.js",
    "revision": "9ece7f557446c982b0b2dc6d54f47559"
  },
  {
    "url": "assets/js/page-流程图支持.a97eb659.js",
    "revision": "acf313d9812352e00f522d603941dabc"
  },
  {
    "url": "assets/js/page-符号.2812642d.js",
    "revision": "5cdb394206a25119079a6c3caeab0afa"
  },
  {
    "url": "assets/js/page-脚注.211208cd.js",
    "revision": "1d067578ff87bab049a64fbf7c47c1f9"
  },
  {
    "url": "assets/js/page-自定义对齐.81e17b16.js",
    "revision": "ac9406d95389a6011c32a8bd55677828"
  },
  {
    "url": "assets/js/page-自然.b1269a64.js",
    "revision": "84db0d15c482faba63486c977ae24251"
  },
  {
    "url": "assets/js/page-评论功能.f5b73855.js",
    "revision": "f80349bfb337e2a2aafcfb0f5f11768f"
  },
  {
    "url": "assets/js/page-路径导航.85d675d3.js",
    "revision": "9bed4eca719ad45a1e30dc3ba5e85b69"
  },
  {
    "url": "assets/js/page-页面.44d53a0d.js",
    "revision": "3200d035ed3b02b5b22887a7974a2ca7"
  },
  {
    "url": "assets/js/page-页面配置.f6a7c4eb.js",
    "revision": "81109b4b5b5d78992b5fb66c83325927"
  },
  {
    "url": "assets/js/page-项目指令.6cc12c16.js",
    "revision": "5506a39a1f3687f9f5419b0549a9eeae"
  },
  {
    "url": "assets/js/page-默认主题配置.5753846c.js",
    "revision": "c9e19e70a32e7e853c38853e29f94d35"
  },
  {
    "url": "assets/js/vendors~docsearch.a497890d.js",
    "revision": "d7d36d258db8ab942af74b99019fee60"
  },
  {
    "url": "assets/js/vendors~layout-Layout.7c3cf47d.js",
    "revision": "022eaa729bd3410186d4bb4c633b5fb1"
  },
  {
    "url": "basic/index.html",
    "revision": "f16f1ab2c9418a2f56fee681766e079a"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "70189070f330dd714a11a34384cb1d8c"
  },
  {
    "url": "basic/markdown/emoji/index.html",
    "revision": "8cf4ec2f888f7097bfd65ae4841c88ac"
  },
  {
    "url": "basic/markdown/emoji/locate.html",
    "revision": "580944c0102ab4517dc30bd9888ac4ec"
  },
  {
    "url": "basic/markdown/emoji/nature.html",
    "revision": "c2e62c5607ffc1b2c149414b7efa5c65"
  },
  {
    "url": "basic/markdown/emoji/object.html",
    "revision": "1082186236b331f5e834835b15a4b719"
  },
  {
    "url": "basic/markdown/emoji/people.html",
    "revision": "4d99da9624676a4c285bd3006775f260"
  },
  {
    "url": "basic/markdown/emoji/symbol.html",
    "revision": "1e370f090c35cd94f560d8173be0bce9"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "99e5adfe04197653488e1f56a9502ada"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "7809a7afb462c3b2e1b552de916c38c0"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "4ecd453d8458c9d7b528fe44b7a16b5e"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "36efdb4dc11bbe207b2fd06a54dc768e"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "159fe6ab303809a7545c968fe2950616"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "f2fe57400a1c0fab3098e4ca05a258cb"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "0eef0cd367cecddae73f859cd87ef69b"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "3ffba4ed52d3761fe2da1689f958f700"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "56c3948b906aeca4205596b19be71375"
  },
  {
    "url": "en/api/index.html",
    "revision": "27c29f6eac2bd96e5ba8aab7d57b73d5"
  },
  {
    "url": "en/api/page.html",
    "revision": "610428a6caf698a13867121d00d9d49b"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "44240af8d6ba1f22ccbbcfd444cfedd6"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "73af4a1c70583e9dabc6970cecc76593"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "8fc9730665d66df3751b09e0c897c2f3"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "143584f59058db04e096a1138a6a319e"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "4f5242707040ca4126f222eb004d74b0"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "d0a5eb5230c83e395488f895633d7fd9"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "971409a8e833250372fcdb7740be6b28"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "0399856dba456194020053fbdfd10899"
  },
  {
    "url": "en/basic/index.html",
    "revision": "21028f52308cc5fdf98ccb33ab9caa56"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "3062ce255866032f25327aabe43cad0a"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "0a71153a06100d14a8aae76bc4911688"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "bca553c5085b13c3dbaba98882cce90f"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "b284fe65a3a8a29bf3b7762729a2bf72"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "6a1b940f829eb9ef28a986d0468cc892"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "463aebfe312223427a82613ccb314a76"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "df2fba608e90eefae82daba038d9afd7"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "e193b6129c9b83e8a9339ec158a7478a"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "d6773b59edc1537bae9b324a23585b9e"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "59ec7746ec2fe730df8a644ce8501be7"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "a0e228796ea3c2e369626c65eb9fdf6f"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "3b6f2621f0ee596281277b7e93116cb2"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "aa4902df421b9d8300d3d5ddfe5a1b0c"
  },
  {
    "url": "en/guide/component.html",
    "revision": "204fe4f05026457266354d2adcfccc3f"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "f1d940f7f60aa95c13296919f4ecacf7"
  },
  {
    "url": "en/guide/home.html",
    "revision": "f9a8b26339900636efed56f5d2fd3c60"
  },
  {
    "url": "en/guide/index.html",
    "revision": "c88e08c26ed0fe6b5da839830116eee6"
  },
  {
    "url": "en/guide/install.html",
    "revision": "2f598a84ed4efe37f4eabfc28f46b160"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "916c8407ec975f7f64195e5f1760c094"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "302683d4a421302f222eed444807a314"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "b4102e9251bb1e3b614fdf3d1736a909"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "6e4af7c4d8d0ee22e20b47d22b4dad71"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "521154b1204012ddf0120362693799f1"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "8c4dcdb4b134ecc76ff278a2e703cc08"
  },
  {
    "url": "en/guide/page.html",
    "revision": "9ddb6e740d489375f48b0773e5394cd2"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "0a2a763914bf758bb609d660b73e5405"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "d8036c24758ea6b6056c8a8594703499"
  },
  {
    "url": "en/index.html",
    "revision": "2900932d8ee6c8e24298638c38da5167"
  },
  {
    "url": "FAQ/index.html",
    "revision": "1b47501290dea3c9649b8bdc1e698ace"
  },
  {
    "url": "guide/comment.html",
    "revision": "83067bb6eb054038f3f174f10ab5c115"
  },
  {
    "url": "guide/component.html",
    "revision": "0ef3fb37ebe0571d02a0302db3977005"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "80a88ff23f4a0a4c6d127e811970899e"
  },
  {
    "url": "guide/icon.html",
    "revision": "0fde667717014e7406a9bcf6d3e2b253"
  },
  {
    "url": "guide/index.html",
    "revision": "1e78fdb32a3a925ac9be59a70c7d48ff"
  },
  {
    "url": "guide/install.html",
    "revision": "d0f342af145de825394d889b802cd241"
  },
  {
    "url": "guide/layout/breadcrumb.html",
    "revision": "93a35f8c6c97eab618f20a3165e506a2"
  },
  {
    "url": "guide/layout/home.html",
    "revision": "4e982b0a6f9d98f52f4c9e91923b0dff"
  },
  {
    "url": "guide/layout/navbar.html",
    "revision": "6f7b296abf43eb34fb9955e39a203107"
  },
  {
    "url": "guide/layout/page.html",
    "revision": "db2b963f574c290f72c033e961dadd34"
  },
  {
    "url": "guide/layout/sidebar.html",
    "revision": "653d31b6dc9bb56a5293d612daea58d4"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "7db8c751feb10d7b3a01eeef9f9a6567"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "529fe20cf95b68ad7afb2cd571c50a52"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "ea5eb331a3cef2d5308bb6d872709aed"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "7d89424cb30eee2a01c1d1cd9b558b3f"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "abb88dd198c97415620eed5c3a1dcd0c"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "1315f2380f82962aa19e60a6982b8751"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "a3230b73c327cca66003911d441c037f"
  },
  {
    "url": "img/icon/appleIcon152.png",
    "revision": "9172ed03ed0e66ca085720b7c02fcccc"
  },
  {
    "url": "img/icon/chrome192.png",
    "revision": "581c452b65c71f36375193f75bbb7b8c"
  },
  {
    "url": "img/icon/chrome512.png",
    "revision": "78af354a94a00054caa93bdba2560bce"
  },
  {
    "url": "img/icon/msIcon144.png",
    "revision": "2200b78e72efdcd597b384cf62947c1a"
  },
  {
    "url": "index.html",
    "revision": "9d0bde11ff02c1f67e69380850a8ae08"
  },
  {
    "url": "logo.png",
    "revision": "13417285202b91bf6571ccef63c17039"
  },
  {
    "url": "logo.svg",
    "revision": "2ff99a4865a6eceeaf3d949e479c7990"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    );
  }
});
