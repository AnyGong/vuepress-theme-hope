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
    "revision": "fa062f6f91942ee6cdc048335659580a"
  },
  {
    "url": "api/index.html",
    "revision": "cfdcc07095196783101ae5a432469207"
  },
  {
    "url": "api/page.html",
    "revision": "3121602dfe543d28be6f46d19ce92c21"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "a8157f3804c41868d40c8635a56f6f21"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "bee94570450b1a0bddad91cbfaa4dbd2"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "bbbeb538fe798021b9c31b964fe44840"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "ea033fdcf308603f8e30c3080d1d708e"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "73957e25d9cafdf9308bc554ac300569"
  },
  {
    "url": "api/stylus.html",
    "revision": "6a899a40938f84ad595957b085850c41"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "3d1f48877540d3e11d462ed182585582"
  },
  {
    "url": "assets/css/0.styles.d65a7472.css",
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
    "url": "assets/js/app.822d3af9.js",
    "revision": "54f3189aecfa7dc7c5ba6d9c4126b75f"
  },
  {
    "url": "assets/js/layout-Layout.0c187abd.js",
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
    "url": "assets/js/page-Vuepress.c4409132.js",
    "revision": "4a0ccbfa6eae12688cce809cc9119d4e"
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
    "url": "assets/js/page-插件.f4626dae.js",
    "revision": "f5501cd3929a84dceedc684712af5e06"
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
    "revision": "6ed35eaf56d369d5e3f73b1542bc3873"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "3233a95666f43d53b50def4d9f772ed5"
  },
  {
    "url": "basic/markdown/emoji/index.html",
    "revision": "d9965188782845762749a67c5539d1f8"
  },
  {
    "url": "basic/markdown/emoji/locate.html",
    "revision": "29b16f7bf8af18ccb3d5f50fabef7033"
  },
  {
    "url": "basic/markdown/emoji/nature.html",
    "revision": "3255923a01b18f054f907773a5a588a7"
  },
  {
    "url": "basic/markdown/emoji/object.html",
    "revision": "4f315dd6bcdfc23aec5ee49eb036981c"
  },
  {
    "url": "basic/markdown/emoji/people.html",
    "revision": "fb958627f94237993a5999119a562b82"
  },
  {
    "url": "basic/markdown/emoji/symbol.html",
    "revision": "c68ce2f91996d18da0218a113bbc631e"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "1c7eaff404530810ab17f87b1f337c06"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "be56f7f233184153d463e85c133b026a"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "27901a715b4575f4cf8d3673529978ac"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "acf0d1b12a92fe9f3208103be69f2af2"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "9e62c73a13191a1e4da01186fad4c77b"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "237f576b864b1ef505dacf30de64fac0"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "980292c9739d7bcaa2119ca82c6d0619"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "60cdbfa5898eddf6e9c7a016a90a84ca"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "2dd1e6a7a505b570906223f9c6e114eb"
  },
  {
    "url": "en/api/index.html",
    "revision": "c36e96f7b04cb51bd8c9d8110d064a22"
  },
  {
    "url": "en/api/page.html",
    "revision": "4b968bdf61276f5eb661efa788948ea6"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "b079f51104d1869fb3933da79da85d0e"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "0509b7f695e058990b520daf05e482d6"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "95db05f2efd33a427efc3b291ab6bfb3"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "d178eed78e89e0e0332119cef2c7ef21"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "2c8c04d0c6fce5bf385de92ac5b39e8f"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "1585f536f54c6fa2735f842c1c198595"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "1f9185dd598ddf949c3c816c24be3504"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "fb12b83a6b9ec17b5728540764fd2f16"
  },
  {
    "url": "en/basic/index.html",
    "revision": "03e41894dfa30d1e88ff22386a14a050"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "ffb54c3fe214ff17f7c9e6fe6c4fb4fc"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "df14a6b7ac8c66b2e25f78cf7b88d71c"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "8b7843f1bc06b03e82fc39f41eda6b50"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "4e3c20e0de82ac048d547c0c9dd00ad0"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "de4a748b296f531b071ff9338ee2f3e2"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "234972901fee6051b9eb1b40da4aecb7"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "4d647ad91b30c9795925d6e96a351364"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "579733f16c1c8db99e97724d44593a42"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "96860e9a2c893d2eb4bbd530507ed7f7"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "9a403a9a62f1d8070f43ac594a57f547"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "05ad415baa9b334eadaf54950882bd1d"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "56e23331d585c670c583ff6d720e5522"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "923d8be53cfd11b08407c9598355550f"
  },
  {
    "url": "en/guide/component.html",
    "revision": "f105749f0a897ec35c88f819d8a4e8f9"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "91813c6a452c2db3d5e497f885e059a2"
  },
  {
    "url": "en/guide/home.html",
    "revision": "988f8747af62921cba5e0ada72d67f53"
  },
  {
    "url": "en/guide/index.html",
    "revision": "a7832349bf843d90ad2858c2d43b3168"
  },
  {
    "url": "en/guide/install.html",
    "revision": "8a47c75e58bb0f775ff88b9330867f1a"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "b190c5e46105f0851787864f7768b81b"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "a850c531f34f72821a4bc26d67b25c03"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "5b9db390570b39a93488320299925c4f"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "0ac82583ab9744ab3d3b03d415223bd6"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "507347dbd5951a17a1567b4237bc9982"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "1a5963ecff289b0cddc0150f11395cee"
  },
  {
    "url": "en/guide/page.html",
    "revision": "ee688852c6660c2c933eb91212fbadca"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "bf213ccd8047136dcd224e451a841dc8"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "a2b0b64dac4e7b7d04143dd9fcd7c26e"
  },
  {
    "url": "en/index.html",
    "revision": "f28e2b8977e7105ebe3d1e3bd2c3046d"
  },
  {
    "url": "FAQ/index.html",
    "revision": "2b2ff591c5fe8933a9e62e79392d05c9"
  },
  {
    "url": "guide/comment.html",
    "revision": "6dc128e273f84c575cc783f6ddc52c30"
  },
  {
    "url": "guide/component.html",
    "revision": "79e4f8562a87decba0258ebc1e55079c"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "70f67e3f2e182e0de92a5acdc4abd922"
  },
  {
    "url": "guide/icon.html",
    "revision": "b1755a1dd6a6fd7b2d8116aab8e9d15a"
  },
  {
    "url": "guide/index.html",
    "revision": "a6cf386b9267be94629abd03b9ca89fe"
  },
  {
    "url": "guide/install.html",
    "revision": "c90e489d36700a636415c062ae224cca"
  },
  {
    "url": "guide/layout/breadcrumb.html",
    "revision": "0a0add4d9e9f90c07a20b538878297ee"
  },
  {
    "url": "guide/layout/home.html",
    "revision": "d4774891eac70a4aa29d83682433a109"
  },
  {
    "url": "guide/layout/navbar.html",
    "revision": "1f91b2906da2a3d41c7ec2ce818dc1be"
  },
  {
    "url": "guide/layout/page.html",
    "revision": "8886f98a4daeabc703185ff82121a853"
  },
  {
    "url": "guide/layout/sidebar.html",
    "revision": "a2ff29f805562b622e87100c128800c6"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "290603891a75e23addab09a6c5cacc11"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "a4311a37f834313a462d892e0fb04a39"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "49219f53fe5acb0fdc3f09bc59c1a541"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "8fa9e79f555345f0465b6adb965c7af0"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "545793baa42612eff4308155bca81e1c"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "03d64e709a6d1c25be050bdb20489852"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "d8f132e7acd3d7ba3bd1ca0611128260"
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
    "revision": "026f3669e436d976713503ad7defff04"
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
