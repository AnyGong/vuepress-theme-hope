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
    "revision": "1c2c6eaf10bd6149c2382b88eb526f24"
  },
  {
    "url": "api/index.html",
    "revision": "1664127fb3237a5b6ec4bcabce63e9bc"
  },
  {
    "url": "api/page.html",
    "revision": "78776a155e0957af6a7503963d929e91"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "8c6e2b2a3c683c2af32a4649c76144ef"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "24f070310f9d0ca6252161144c6c42c4"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "378c9b968071e66a7ff51d60a7d054e1"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "76faafdb5f34dab462bbfe3bd021095f"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "6afcb9689e6ee11b3e1fc4b79cc32dfb"
  },
  {
    "url": "api/stylus.html",
    "revision": "84e6f1ae4c36f45c5ec127f8660702d9"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "e15dbe69c6090d6d283161c0785fd4db"
  },
  {
    "url": "assets/css/0.styles.3a3279ba.css",
    "revision": "a87e28e1ce2eb8ea9dea56fd55159809"
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
    "url": "assets/js/79.407fde68.js",
    "revision": "c212d46fea61c67ef1d9111d4962ba4b"
  },
  {
    "url": "assets/js/80.51564761.js",
    "revision": "c19205768561ccbbf9d4912999604209"
  },
  {
    "url": "assets/js/app.a6f9ac12.js",
    "revision": "63f7ace64a877238c0a9a98822b9bdc8"
  },
  {
    "url": "assets/js/layout-Layout.b167d8b9.js",
    "revision": "41cb35882ba58b82b3885bafa1aae19b"
  },
  {
    "url": "assets/js/layout-NotFound.e0952e3f.js",
    "revision": "b5f9a26374630245c865522a787b425f"
  },
  {
    "url": "assets/js/page--1b278726.d77194ad.js",
    "revision": "047430219142ec4b77642cb2454142db"
  },
  {
    "url": "assets/js/page--24b68849.f196f6b0.js",
    "revision": "d4c939c96040c76dcc25dc8e728a6c5e"
  },
  {
    "url": "assets/js/page--298eb4e9.35757c9b.js",
    "revision": "7e410a43253bdabcdb1a769416af227a"
  },
  {
    "url": "assets/js/page--33732ef1.7c0ce721.js",
    "revision": "cfe5c46ad4bfb4429ee4a16075eb5681"
  },
  {
    "url": "assets/js/page--608d80cf.0ad7647f.js",
    "revision": "64a5096d2b01bef7778cfccae02dec4d"
  },
  {
    "url": "assets/js/page--b64dd6ee.90db342c.js",
    "revision": "edfe853a44c25978bf5486f80400dfa0"
  },
  {
    "url": "assets/js/page-About Vuepress.5cde1765.js",
    "revision": "e6a0fbbe34270123ba01c5af43115324"
  },
  {
    "url": "assets/js/page-API Docs.fe98e7c4.js",
    "revision": "5a212ed4921699eae5ff3a8d26280e7a"
  },
  {
    "url": "assets/js/page-API 文档.28851384.js",
    "revision": "5d40a9caefcbe9a14b342d787d6b4546"
  },
  {
    "url": "assets/js/page-Basic.d5441810.js",
    "revision": "81983aef9fce3ed14387be2b17345cf0"
  },
  {
    "url": "assets/js/page-Breadcrumb.ead8bed4.js",
    "revision": "6172a6e6e8e72a09652ddfe7cd5346ae"
  },
  {
    "url": "assets/js/page-Comment Function.cbd7f601.js",
    "revision": "58abacb726741c80a812ac0ef95bff63"
  },
  {
    "url": "assets/js/page-Default Theme Config.85fa89d0.js",
    "revision": "5501a05e39d85a1cf3c3b3d69b7456ba"
  },
  {
    "url": "assets/js/page-Emoji List.f3155f2f.js",
    "revision": "6f4c5b6b0a46e2d5427f2a320c717426"
  },
  {
    "url": "assets/js/page-Emoji列表.127fcf7b.js",
    "revision": "cf5e7b01bc034de76878a2195071b640"
  },
  {
    "url": "assets/js/page-File Structure.97e98f3b.js",
    "revision": "3ea5625785ae72e3fa19ea6b9bad75ed"
  },
  {
    "url": "assets/js/page-flowchart.f4a981a1.js",
    "revision": "58f1f466a6bfe02c3d8db4d5f6623de3"
  },
  {
    "url": "assets/js/page-Footnote.66abb894.js",
    "revision": "c7635b3f85fdd70be1ce738577a07d33"
  },
  {
    "url": "assets/js/page-Fullscreen Button.76028f2c.js",
    "revision": "81a72c689acd8608ad2170b0dc99291b"
  },
  {
    "url": "assets/js/page-Home Page.f3a60983.js",
    "revision": "16bec72713e6b0a8a19208d4244b94f5"
  },
  {
    "url": "assets/js/page-Home.20d6ecd2.js",
    "revision": "32df88235931fc1605c653f4ab2a9e05"
  },
  {
    "url": "assets/js/page-Introduction.5aadcdd1.js",
    "revision": "03b7bae759d60d9935c743e6a312bc5e"
  },
  {
    "url": "assets/js/page-Markdown DEMO.3a06553e.js",
    "revision": "7cd43b19e9eaf823a6cc3226d51a0b81"
  },
  {
    "url": "assets/js/page-Markdown Introduction.6262da61.js",
    "revision": "2f6b74e896c9fd1afc58f4e1218b45d8"
  },
  {
    "url": "assets/js/page-Markdown 中的新语法.d8449650.js",
    "revision": "1a1e2f0565300f14a199682b76a47112"
  },
  {
    "url": "assets/js/page-Markdown介绍.20ec7614.js",
    "revision": "0802a164107df11c01c0cb1ca32ac945"
  },
  {
    "url": "assets/js/page-Markdown示例.730f758e.js",
    "revision": "26abdfd9a86e1143261140e4113dc6c7"
  },
  {
    "url": "assets/js/page-NavBar.926e0705.js",
    "revision": "c6ff913b19286e4c3d3dbe9e6958dbc4"
  },
  {
    "url": "assets/js/page-New Component.464797ca.js",
    "revision": "7b13520d8f514c2a200ffece74e86264"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.bd5ed6fc.js",
    "revision": "d85de4f4aac8902c96626dd150289905"
  },
  {
    "url": "assets/js/page-Page Configuration.0e8a4be5.js",
    "revision": "1963b48c7cc0f8aaec211c1083c32df4"
  },
  {
    "url": "assets/js/page-Page.360d0498.js",
    "revision": "e9aa26e08e218659180ba94e8ee32500"
  },
  {
    "url": "assets/js/page-Plugin Description.af53feb7.js",
    "revision": "85b3a0b9eabb0fdb895192d4d5c64ddf"
  },
  {
    "url": "assets/js/page-Plugins.0379f4af.js",
    "revision": "163078c47ab63d886dcf15eee21dea79"
  },
  {
    "url": "assets/js/page-Sidebar.aabd185d.js",
    "revision": "069d8f65d21b7bac7612a74faf3713b4"
  },
  {
    "url": "assets/js/page-stylus configuration.08c5efa6.js",
    "revision": "c6d18f47b2b8073af5445ebe6b835a43"
  },
  {
    "url": "assets/js/page-stylus 配置.def778f3.js",
    "revision": "4dad2d204344ad89a9266c43cb3c7d73"
  },
  {
    "url": "assets/js/page-Superscript and Subscript.b086cee7.js",
    "revision": "74a27eb073787f9ed746bfdd4d62abff"
  },
  {
    "url": "assets/js/page-Tex Support.fe493fe6.js",
    "revision": "de3d92f2d5a835ba61a1196ac05760fe"
  },
  {
    "url": "assets/js/page-Tex 语法支持.dfc1cd0e.js",
    "revision": "357faa0c6a550debd64d154315e10b24"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.388df9ee.js",
    "revision": "5fc709934252d5a6c8345a9147a9f62e"
  },
  {
    "url": "assets/js/page-Theme Config.2e419429.js",
    "revision": "0510dd45ae4859c5dea5b5173e861ef8"
  },
  {
    "url": "assets/js/page-Vuepress Cases.b987be81.js",
    "revision": "fead4f1b54c4ce00a944ace36dd8e344"
  },
  {
    "url": "assets/js/page-Vuepress commands.dbf23157.js",
    "revision": "3bd714b8f82c6ff10c072e8645fe9579"
  },
  {
    "url": "assets/js/page-Vuepress 案例.e9742989.js",
    "revision": "c5999d298593ba2096e783cced21dbde"
  },
  {
    "url": "assets/js/page-vuepress-plugin-container.056c575b.js",
    "revision": "586a7fe6eb6878636ce4778ed94d41c6"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.4033a99c.js",
    "revision": "3593cfdc91e322018d6a32c765312925"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.6a4bf5a6.js",
    "revision": "f1790f586e910f656064e36e6f831cd5"
  },
  {
    "url": "assets/js/page-Vuepress.451288ea.js",
    "revision": "3f8892b03871b4d2e6996ee2e2f60b4c"
  },
  {
    "url": "assets/js/page-Writing a theme.187b8e28.js",
    "revision": "451e460f6a8b72c82e94bda6e738b162"
  },
  {
    "url": "assets/js/page-上下角标.4ee20ce2.js",
    "revision": "697d5b7f83846568d356972e4315feac"
  },
  {
    "url": "assets/js/page-主页.2d0bbe99.js",
    "revision": "a3f0631f9d3fcf9c00a68d5cf7abfcfd"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.e1684d73.js",
    "revision": "4211c506e0c4084c83335a374fdb01b3"
  },
  {
    "url": "assets/js/page-主题配置.0d16c015.js",
    "revision": "734586be11b03916ac88a9ef956e396b"
  },
  {
    "url": "assets/js/page-介绍.3dd44243.js",
    "revision": "3f632acc35d52688fbb7e961f16bcb38"
  },
  {
    "url": "assets/js/page-侧边栏.67d61e6d.js",
    "revision": "8f960dc02f5b81788eeb0398d0ba695c"
  },
  {
    "url": "assets/js/page-全屏按钮.278c97c7.js",
    "revision": "e3b327ff0e701ba2bf22d332b9bc36a5"
  },
  {
    "url": "assets/js/page-基础知识.6948de65.js",
    "revision": "928c47fe92b26d33f657327b3cbaf7b4"
  },
  {
    "url": "assets/js/page-导航栏.c83db412.js",
    "revision": "156ebf3f1d07d44334ad7ac3b59d0e96"
  },
  {
    "url": "assets/js/page-开发主题.602b5b45.js",
    "revision": "5de983ece168b63db47cd751a82d5cc1"
  },
  {
    "url": "assets/js/page-插件.b48e810e.js",
    "revision": "5cb478d650251eb623616d588ac16376"
  },
  {
    "url": "assets/js/page-插件说明.483b63f6.js",
    "revision": "d12f2735a6e7ca8dae47ef6154b34123"
  },
  {
    "url": "assets/js/page-文件结构介绍.0c39ed99.js",
    "revision": "469b6abc4303493002d54187ff1a7da3"
  },
  {
    "url": "assets/js/page-新增组件.684bce0a.js",
    "revision": "98e478aeb219dcd889acba6ab814af76"
  },
  {
    "url": "assets/js/page-流程图支持.36ad263b.js",
    "revision": "90f2a2ad473b5bc50b6d752c3a969b29"
  },
  {
    "url": "assets/js/page-脚注.cf6e83c9.js",
    "revision": "e9079937331d0d52163703e09676dc51"
  },
  {
    "url": "assets/js/page-自定义对齐.d6557e7f.js",
    "revision": "87b1626bc206fefb73b3d775f8541da3"
  },
  {
    "url": "assets/js/page-评论功能.6cd4a6af.js",
    "revision": "6593aaa584f774cb6153c8b1de0baf97"
  },
  {
    "url": "assets/js/page-路径导航.bfab29fa.js",
    "revision": "ba010b0bb85d8a988235d5860f40925b"
  },
  {
    "url": "assets/js/page-页面.03703087.js",
    "revision": "b934f13d3728bfb44796b8c0b756df12"
  },
  {
    "url": "assets/js/page-页面配置.af89954a.js",
    "revision": "716b3ddf109c2d888fbe57b08dd5c49d"
  },
  {
    "url": "assets/js/page-项目指令.a3c95230.js",
    "revision": "23cfc50c00015ee55d91121193cb3365"
  },
  {
    "url": "assets/js/page-默认主题配置.5f65f978.js",
    "revision": "ddf99202dbd0b272f428e8ce3976bc9e"
  },
  {
    "url": "assets/js/vendors~docsearch.bbb8c9ce.js",
    "revision": "e7f3246387057376dac75c6e0585b5bc"
  },
  {
    "url": "assets/js/vendors~layout-Layout.06af47ec.js",
    "revision": "703e4ec128987ad0725109930023da42"
  },
  {
    "url": "basic/index.html",
    "revision": "1d9caa7148c093a686333286d805222b"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "16335d9f9dcc16c4721aea562baaa623"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "e098beabe59ceef7e357f9a6ed323e50"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "029a4c86ea604d7e0e44260d153c859b"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "c6aac356eec41ee35327fac25f6ef842"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "d41b062348554a2b9003aa3cbd5d2f8c"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "94be1a60b7e4368aba8b518321074508"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "a8c6c660277ec66f4ce637e16451fe3b"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "3168b2aefd801045bd972a3eb57def88"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "3cc07ddcfc411ac92522d6019e9a74c8"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "c708d6c7afbdc21cbbdd4778d357effe"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "4a5373a79ba335048671b578d0ea3aad"
  },
  {
    "url": "en/api/index.html",
    "revision": "fde2dc0c0380cedcea0300f0357b6d0d"
  },
  {
    "url": "en/api/page.html",
    "revision": "00d666d7f95b63b5a17eb0010f1164f3"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "57cecdd6314288b50392fa4c2d82ca0a"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "16393f18048a2b76e032f515a2d89e5d"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "1a61d25ae5ce62cfab5461a93b9e554d"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "65639fef4a3d1172c5d1188279f69c8f"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "0bd2a899e19010f405f3fba476f73fbb"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "7d6b93b6fabd3f3d2072573a0a944dde"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "e8d4a9862973794bfb4a14b4241dfd53"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "288328ee881c11a681b5f927a6b0701b"
  },
  {
    "url": "en/basic/index.html",
    "revision": "898a6a5cc0f3ec1abadda6385fd5079d"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "01820c7da92ff6f77a1bbdadb72129f4"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "015bc9362732099438e823171b656e7d"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "eaee536525564f536dfbe9ce7f8da18c"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "d34ad9a11955f12c7d6923e6dd86dc9f"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "5e267488fe0ee64cb2283ad3163817ac"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "143dc82b624135f69eb57bfd7dc928e4"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "a10b7bd3e31f72007d5cf066e02c1a02"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "bbe8e413990a7584a5428892d11a3538"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "41918b0e44e40a102dff7c9b0682d4c5"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "95cf868762f763219f7037d24812564a"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "cdbc10709eedd9bc7085af1dfb3fff70"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "ae810db1b781cb80edcb756a74ca51b5"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "abdbe000c06ce9e2a48e45da27b413fb"
  },
  {
    "url": "en/guide/component.html",
    "revision": "603b8102b58f0dde35752435679c707d"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "b80581d8b4dc45381edf1ca70023426f"
  },
  {
    "url": "en/guide/home.html",
    "revision": "0e98d7da2691c894fbb157811d9c7218"
  },
  {
    "url": "en/guide/index.html",
    "revision": "a1a5f08449744b5d7962d2a50af2bd7a"
  },
  {
    "url": "en/guide/install.html",
    "revision": "a60cdf598697ce6d863d3d96e1341f06"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "1291a37c0252b06ec2fabd027497da6c"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "d0f0be57c3f1bf8257082521fce67116"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "15406c7da35b1575992a2992ab66ed59"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "e9e3592f75ecd93bb3eb8fdb7855f1bc"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "748a6bdbb3ba978c787934f158cc76fc"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "a13a0027c6734f30fa685822c28cd41a"
  },
  {
    "url": "en/guide/page.html",
    "revision": "01c2d7232cba7238b396758d80e2aa84"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "91a503eca305028ce6229e763dad4f4c"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "cf32f0be9ed3b6ea07f1846a2431e14f"
  },
  {
    "url": "en/index.html",
    "revision": "6579efc9e016945f7a49f9aa83cf6dd3"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "feede4e46d75f3e12bb4673a3e7c1142"
  },
  {
    "url": "guide/comment.html",
    "revision": "c9d25d60268df5dfe27ea89f9f19637b"
  },
  {
    "url": "guide/component.html",
    "revision": "804657be7976e4823738a26960b15012"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "24ffdeb2df61a28361a8be5e6ba66688"
  },
  {
    "url": "guide/home.html",
    "revision": "689687329c2f0fd9ab60045b18623eb1"
  },
  {
    "url": "guide/index.html",
    "revision": "374f86430139c50dabc609e2ffadc6a1"
  },
  {
    "url": "guide/install.html",
    "revision": "7cf2393dc8ffee275050b4a91fddc2e9"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "aaa0949a06a369dbb071a251fd5ded3b"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "71f05e4a2936d79268866a1aec59b5c2"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "98de5ace97fb312dedb9229ecf2d8b60"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "c1907a9c1a963657d6f49b78de6ab7af"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "7a3efa147fbe01552f373bcde7071682"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "49f87a56dbb792586423dfdbd17ff899"
  },
  {
    "url": "guide/navbar.html",
    "revision": "5f43f390852c210f09e6cc64acb81d64"
  },
  {
    "url": "guide/page.html",
    "revision": "0e71a6a5b1c3bbdd30c6c0a9d7bf289c"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "94856889e1fceceea7c27ed926c08e6c"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "0e146d4a189d4c582e6b7158c7d3a23f"
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
    "revision": "503e5bf84906b30095b581537a9454ec"
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
