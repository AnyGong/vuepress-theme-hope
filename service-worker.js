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
    "revision": "ef81d3d70311b51d28d1f1af552518a2"
  },
  {
    "url": "api/index.html",
    "revision": "8e4acc6fcdc6f7cd8d68bd075c30c66f"
  },
  {
    "url": "api/page.html",
    "revision": "4612d92e5f233fcbc178d7e05ca61ece"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "7e35486ad939da9b0c68f8b0d832340f"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "68aa471f79eaf3df28100c1566c921ec"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "9081271ab319bdfa1260358382315e89"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "870a2a397d9cbd6a61772b0f5b2eaa4d"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "0f3fbeea6000c9d0db798a426b922120"
  },
  {
    "url": "api/stylus.html",
    "revision": "f035f930c150207831f316b6facb30cb"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "28739a5a90590dce769a7b7115446ddc"
  },
  {
    "url": "assets/css/0.styles.ae9884b1.css",
    "revision": "b3b5af516d71a0e1d2ee41d2f4aefaa0"
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
    "url": "assets/js/app.4c22108e.js",
    "revision": "89f29e0dd115497bff09cf87f0e241da"
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
    "url": "assets/js/page-Breadcrumb.3a315e6c.js",
    "revision": "0821f6a3970f519fa73a825971223ac6"
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
    "url": "assets/js/page-Fullscreen Button.6d5ffcb2.js",
    "revision": "203e53002f8f8a15bb2c87b521ff839f"
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
    "url": "assets/js/page-Introduction.82536284.js",
    "revision": "c336a71628569c2d5d9f209fc74682b2"
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
    "url": "assets/js/page-New Component.813d46f9.js",
    "revision": "9dc89368fbf1242e2a5e908b1ec2db73"
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
    "url": "assets/js/page-Sidebar.afe0a9ff.js",
    "revision": "65196f556d16461fa2b51d3e79216938"
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
    "url": "assets/js/page-Tex 语法支持.83a9e763.js",
    "revision": "bf1bad974f82a1d27878dd54bae7ce94"
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
    "url": "assets/js/page-vuepress-plugin-container.6b34986f.js",
    "revision": "fb7e0c37dfd067a4e3eeda31da27f3d5"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.5f3da061.js",
    "revision": "00daf562cea327443b964a90858dcb0e"
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
    "url": "assets/js/page-Writing a theme.bb289f7c.js",
    "revision": "5f177ee1e620133a9bf1369c64fe0bb3"
  },
  {
    "url": "assets/js/page-上下角标.7cb11fc4.js",
    "revision": "0f514a10815d85a9750401427d828873"
  },
  {
    "url": "assets/js/page-主页.f2948ac9.js",
    "revision": "f4ac55e6eb182c1827596e5fb7ffbeb8"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.1644a770.js",
    "revision": "150ea1e2b930a1bdcc461391d3d0dde9"
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
    "url": "assets/js/page-侧边栏.ec0f7085.js",
    "revision": "1403aca767f984f08ec30bafd31c7df6"
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
    "url": "assets/js/page-导航栏.20d5b40a.js",
    "revision": "9848833bc266066aeeb0c0d48e5deb89"
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
    "url": "assets/js/page-新增组件.95fc1d4f.js",
    "revision": "056e04405e84d658effeb77aa1a4f76b"
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
    "url": "assets/js/page-自定义对齐.afdf037d.js",
    "revision": "9711e8550ae78d07f7f09389456d0a79"
  },
  {
    "url": "assets/js/page-自然.b1269a64.js",
    "revision": "84db0d15c482faba63486c977ae24251"
  },
  {
    "url": "assets/js/page-评论功能.26cb4643.js",
    "revision": "a2dd30e7bbb7d4eb13851acbf4a1c8e0"
  },
  {
    "url": "assets/js/page-路径导航.4370cdef.js",
    "revision": "ce6b9d6469aec522fb728be31acac610"
  },
  {
    "url": "assets/js/page-页面.29e89afb.js",
    "revision": "3313c957b7bd7965bf9eabc4190d81e9"
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
    "revision": "70a6af81d310fb8fa877110521027ca6"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "653c7b8addaaa6af820289243af168a3"
  },
  {
    "url": "basic/markdown/emoji/index.html",
    "revision": "e8efc916c8a491f55bba865a1ae0fd14"
  },
  {
    "url": "basic/markdown/emoji/locate.html",
    "revision": "7446dbc8263284f5eca576e53a9a83e6"
  },
  {
    "url": "basic/markdown/emoji/nature.html",
    "revision": "493672e121cc80095c32b6f4a3772123"
  },
  {
    "url": "basic/markdown/emoji/object.html",
    "revision": "2547ea7e8e3a6dc493c2a696b7b70792"
  },
  {
    "url": "basic/markdown/emoji/people.html",
    "revision": "d241dabec821bc4bd86e255c7a3e2b22"
  },
  {
    "url": "basic/markdown/emoji/symbol.html",
    "revision": "43bb9d4dc3d363db55363fcc7ebaf818"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "e29de64d92e144018b4583b928ef95f9"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "cd0a54f658e4742b6914f5b142ece9fc"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "6a2d4c82d5e85b0d2c04c4e8c55d99c4"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "15916825ac634aaffa3e24a7bddf2c61"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "c3eef5010592eaa8a19ab0d871868b1b"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "082de7617822b0179d85bcad1883a9d6"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "11c9cdadd79467876488e7adb7b13dbb"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "2a95eb8146b725982525170fe0e57c3c"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "c45abe2bcfe29bd4edf4e73284a06b0c"
  },
  {
    "url": "en/api/index.html",
    "revision": "287edde3679b46ddabc0f987e9a3a504"
  },
  {
    "url": "en/api/page.html",
    "revision": "8a4dee4907a130a2ffb5c019b6afff5f"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "47f9b8e157ac322e51c663bb965b7cb5"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "967ec9fade567dc5c70ec52578eb3d5b"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "8518b2ab287de3ffcab54555ae32b503"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "0fe4f0bde4aa2373166ecd0483f9308f"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "7dafa60a1fb819162b1fde9c87601444"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "e91126ab8ed70e3fc5f005bf48c6b548"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "3668afabef94895becf754cb7cf759dd"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "9d97b5121cc0dbc7668189f592caea78"
  },
  {
    "url": "en/basic/index.html",
    "revision": "29d1c2e0cdc6b645261e9eb6d202fdaf"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "aef16dc614f90494e357b1b7df706de7"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "0a06a41f0531ba9e75235b241b992c81"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "354fba0c783032414866d7f2ffe4a36b"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "cee371e6a13d7b10ceb9b52c8b1eae4c"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "a8d596a27fdd76875b285a24a033f685"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "8b45dbacd3404256518881b1746f80ea"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "0cca51ec64288efcd60989e1b5596861"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "72e9f3ea7aa65e6be19b3198c709ea9e"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "22f6f70b34bccb0d169ebabd137700ff"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "079020d08c835c6e5f5f1d518673b1b4"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "39fa0ec200c015db95b01cf2d9ab09de"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "ac57e9f30bad6f4730d42415a2bdaae0"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "30e634b7b1e7fcd06f900ed4c8baba9a"
  },
  {
    "url": "en/guide/component.html",
    "revision": "1f36a4f684eb026dd3a413194787441e"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "7da407ef2293ca9ed1d5884fbdb5a139"
  },
  {
    "url": "en/guide/home.html",
    "revision": "90fc9ca29c744d512669abc54d8ba2ba"
  },
  {
    "url": "en/guide/index.html",
    "revision": "ff15f327f2d7171e771d7df905eda9b9"
  },
  {
    "url": "en/guide/install.html",
    "revision": "ed558b477722ec7f42e79a53d8751a66"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "5c273e25f065eb9b8ae3aa2525757626"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "76104ad384c1a951916eddb3d7ea747d"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "fc5999037be040855b0ec4d9f7763d3a"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "9294458ab921759e5722cc33662e4c9d"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "5409e1bb0737f84780ee0600c941dae3"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "f220648c341aacab4108447f5558dc0e"
  },
  {
    "url": "en/guide/page.html",
    "revision": "956f067d7661a085bf51cf88e56e1d3e"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "df22a5ac55c25fd7e699d7d9e3990fd0"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "55fd96e426e2e5a29e32c4d1c37b154e"
  },
  {
    "url": "en/index.html",
    "revision": "2c5e1c0361ea25852260bfc15c8a33f8"
  },
  {
    "url": "FAQ/index.html",
    "revision": "6a87479c2bb14844d410784aab1ce0fa"
  },
  {
    "url": "guide/comment.html",
    "revision": "86ee0d2cf49eecc27e99504389a99e51"
  },
  {
    "url": "guide/component.html",
    "revision": "bdf2defe79d3ce8c26eb2419158baa51"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "bdbce31bb79128444b837d0fff793c6a"
  },
  {
    "url": "guide/icon.html",
    "revision": "d1fcbd5b45400c852d0e55bbec367dac"
  },
  {
    "url": "guide/index.html",
    "revision": "38c2e37f925353ed4bdd244f222d083f"
  },
  {
    "url": "guide/install.html",
    "revision": "65decf8f7c4fe8f786faa63b63b83f12"
  },
  {
    "url": "guide/layout/breadcrumb.html",
    "revision": "d143ba3a95a432a1ee15a9fc82f94eba"
  },
  {
    "url": "guide/layout/home.html",
    "revision": "675281cb9f8e408c8ee05b68de346c03"
  },
  {
    "url": "guide/layout/navbar.html",
    "revision": "8dfc2ddcf62717f794a3530b176b8a31"
  },
  {
    "url": "guide/layout/page.html",
    "revision": "ce44e9bfbf96c7ae500ddc1188768329"
  },
  {
    "url": "guide/layout/sidebar.html",
    "revision": "f5fc165ad3bcf764b317de1a5f1b0aa8"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "6db4ca0a628d8262a75c1305add06058"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "8a92cb7cceddbb70131004b3ee94303f"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "a9fec92c3df0dccb8c5a72d0cb1b4099"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "fc1e11d201dff78ef03c8102f1cda46a"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "8e809a9c9b6d6ea54a366185059db704"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "b9a5fdad0714363a97105a9e4e97df93"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "8d807eda67a401a799f473c996f7e9cd"
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
    "revision": "a84b6e5593382ace28023679a457bb55"
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
