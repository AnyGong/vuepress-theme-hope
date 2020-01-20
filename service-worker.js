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
    "revision": "50e63433a6d5c660c5c9ccc7e56c6735"
  },
  {
    "url": "api/index.html",
    "revision": "f6b543c72c3c261863de8eb4e2ea5cc9"
  },
  {
    "url": "api/page.html",
    "revision": "c0efdf58958bccb346d17bf2495b9a46"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "ff50a8d3ffed9778dbf3db2a73f76642"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "e792d95b7e9462820f06e553d5db78df"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "8b9c281528478fa827b9be050978cadb"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "14fbdb61306a4d99fd5514696012156a"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "5e41118187700e3535885ee7fb1a2111"
  },
  {
    "url": "api/stylus.html",
    "revision": "e8d71e31c434c6ab88aa4310587c6a14"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "8aa135a9f1ff9a7fd1731cb799370f2f"
  },
  {
    "url": "assets/css/0.styles.92f04025.css",
    "revision": "ea76720f6804738194a13c35b14127f6"
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
    "url": "assets/js/79.9b4c3ab0.js",
    "revision": "ddf70eebd2b89ae5860334947d423707"
  },
  {
    "url": "assets/js/80.51564761.js",
    "revision": "c19205768561ccbbf9d4912999604209"
  },
  {
    "url": "assets/js/app.8a902e96.js",
    "revision": "24b8707cb1ac6b056110ba48f7643a95"
  },
  {
    "url": "assets/js/layout-Layout.1ddaaf40.js",
    "revision": "3e94123e9678bed97e01b6f40578996a"
  },
  {
    "url": "assets/js/layout-NotFound.c1267ad5.js",
    "revision": "47ee463789b238e98a1a26a6ff9ba011"
  },
  {
    "url": "assets/js/page--1b278726.31b1736a.js",
    "revision": "1e8090bc1abe638d44763d04a7b4c0a2"
  },
  {
    "url": "assets/js/page--24b68849.29918c5e.js",
    "revision": "dae57786e4f99c1a581e880c6e1e680c"
  },
  {
    "url": "assets/js/page--298eb4e9.2a11d41a.js",
    "revision": "4aeacad8020bd7dae734d630b088878f"
  },
  {
    "url": "assets/js/page--33732ef1.891a0941.js",
    "revision": "7c2a7b4ac1f35186ee5e413f10a6b761"
  },
  {
    "url": "assets/js/page--608d80cf.ac662dd8.js",
    "revision": "987f4dd1c11e804aa1f9fd52ab07aeec"
  },
  {
    "url": "assets/js/page--b64dd6ee.a6fcdd97.js",
    "revision": "eef947a4e141513f577d8b8918022914"
  },
  {
    "url": "assets/js/page-About Vuepress.27b8cf79.js",
    "revision": "1419c8e2ff4703647dc964b435ba4d2b"
  },
  {
    "url": "assets/js/page-API Docs.5d8dbec7.js",
    "revision": "7f2764d2f4cc520706129d97a71e1e88"
  },
  {
    "url": "assets/js/page-API 文档.96f0a501.js",
    "revision": "fc243e70c4ba59c0739feb7711dbc9ca"
  },
  {
    "url": "assets/js/page-Basic.c1c4ba09.js",
    "revision": "4e54b3c1ef8d549f7ed4aae9adfdc6d5"
  },
  {
    "url": "assets/js/page-Breadcrumb.c60e8524.js",
    "revision": "6d3b0b692dd77a6e911d1b0a3012b440"
  },
  {
    "url": "assets/js/page-Comment Function.f18898a1.js",
    "revision": "01d122376adc6691d449b6f91b0fe3b3"
  },
  {
    "url": "assets/js/page-Default Theme Config.bf7a081f.js",
    "revision": "3ea117a4a85eaacea0617117cacab8cd"
  },
  {
    "url": "assets/js/page-Emoji List.43fc4174.js",
    "revision": "d6f39085d896c38d34d7ecb1627ab463"
  },
  {
    "url": "assets/js/page-Emoji列表.ccf6cb0e.js",
    "revision": "c5dfa3e96f7fe60b68537777547eaf6e"
  },
  {
    "url": "assets/js/page-File Structure.da54d264.js",
    "revision": "4ed5620051e993d6a4c6e03dcb7d86b1"
  },
  {
    "url": "assets/js/page-flowchart.aa482739.js",
    "revision": "3e3aa6f08442ee79811f5ae5b329c03d"
  },
  {
    "url": "assets/js/page-Footnote.ed953684.js",
    "revision": "d53e4d429dec40a445450a102c7ae228"
  },
  {
    "url": "assets/js/page-Fullscreen Button.38072781.js",
    "revision": "53e0d2f5dab34ed812fe4a06751f8889"
  },
  {
    "url": "assets/js/page-Home Page.a6657535.js",
    "revision": "cfc9a7fbf4b6323700e80a5e36fd130c"
  },
  {
    "url": "assets/js/page-Home.5b4c578f.js",
    "revision": "8afcd85b0e94b99950c1f00fe785b7ba"
  },
  {
    "url": "assets/js/page-Introduction.b90f1576.js",
    "revision": "cad6b610a954b28012570d25af96027a"
  },
  {
    "url": "assets/js/page-Markdown DEMO.f72f351d.js",
    "revision": "e262f12c07e113e7415995b27a90fbec"
  },
  {
    "url": "assets/js/page-Markdown Introduction.83cc2731.js",
    "revision": "debe67e8e981168e296523c263f2d161"
  },
  {
    "url": "assets/js/page-Markdown 中的新语法.f9d545cd.js",
    "revision": "e699e4248d5ccca53e16924cd9739bd7"
  },
  {
    "url": "assets/js/page-Markdown介绍.6a402d85.js",
    "revision": "4cbbfa4e265a4002c11028ce57d7144c"
  },
  {
    "url": "assets/js/page-Markdown示例.1227570b.js",
    "revision": "6d6a4eef35f23105e4a74fa3fe96f349"
  },
  {
    "url": "assets/js/page-NavBar.f9706688.js",
    "revision": "fa1c3d8861d8a2536eca9d78f483d057"
  },
  {
    "url": "assets/js/page-New Component.1dab021f.js",
    "revision": "f8d8aa460f4d73d0d69d7017ba4d7b9e"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.1678ab06.js",
    "revision": "81b8864bf810a4f26798b8a6e6947ac5"
  },
  {
    "url": "assets/js/page-Page Configuration.15b958c6.js",
    "revision": "86dadbd96442ab563e763f5abd901031"
  },
  {
    "url": "assets/js/page-Page.a7b6283b.js",
    "revision": "bc8f8ad678651f70604d3165cdc6a9ba"
  },
  {
    "url": "assets/js/page-Plugin Description.1033b98d.js",
    "revision": "abd6fbbd0e6fd1e79020e3f756884d57"
  },
  {
    "url": "assets/js/page-Plugins.aceba207.js",
    "revision": "888d1c1c17a9564042bf97bced4515f2"
  },
  {
    "url": "assets/js/page-Sidebar.3b60e1de.js",
    "revision": "b7fa7a92073fc933d5cae419b94a43b8"
  },
  {
    "url": "assets/js/page-stylus configuration.1be2490c.js",
    "revision": "167675e9f98e30e82f4294ab5fc26c73"
  },
  {
    "url": "assets/js/page-stylus 配置.b34a3609.js",
    "revision": "3f19169a03824c7fe95d66ba91d5ea0c"
  },
  {
    "url": "assets/js/page-Superscript and Subscript.66f02d02.js",
    "revision": "0ca4b270b4bd3e00448247aec1b37063"
  },
  {
    "url": "assets/js/page-Tex Support.99cff7a7.js",
    "revision": "9d10a63080894ec40a82e9526da17c3d"
  },
  {
    "url": "assets/js/page-Tex 语法支持.604eeff5.js",
    "revision": "a0c7467e2ef5f0810688972ac8228a30"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.96160471.js",
    "revision": "61850e24ceae95460350d4a0a203a7bf"
  },
  {
    "url": "assets/js/page-Theme Config.e7dfd86e.js",
    "revision": "69a6cfb8f52068dc87c05732eb620762"
  },
  {
    "url": "assets/js/page-Vuepress Cases.b65a837d.js",
    "revision": "311bdbe75657fa47b7de690d05dfefd9"
  },
  {
    "url": "assets/js/page-Vuepress commands.7792f5e2.js",
    "revision": "70e40130994823bc1f56de34566a703b"
  },
  {
    "url": "assets/js/page-Vuepress 案例.f72c3163.js",
    "revision": "5b844a55d3f1afec23fb442cb1df5a22"
  },
  {
    "url": "assets/js/page-vuepress-plugin-container.cb2f4494.js",
    "revision": "d9a718d743dd70908a359175007ba601"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.8f7961e7.js",
    "revision": "568cb92d87db2312b2ef9e1f14f67d43"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.d3da83d2.js",
    "revision": "ffd25d10554be72de5db602c3c2e1804"
  },
  {
    "url": "assets/js/page-Vuepress.d9842f65.js",
    "revision": "97c3bfe36ae945ce79b6f872043c3e91"
  },
  {
    "url": "assets/js/page-Writing a theme.ff47e365.js",
    "revision": "d283899bf373e05a383b265488c0a7a5"
  },
  {
    "url": "assets/js/page-上下角标.f9c85f93.js",
    "revision": "287b8155db725760dd9d9266f6a10cce"
  },
  {
    "url": "assets/js/page-主页.aba20506.js",
    "revision": "8f3150bb85e04b23fda1e28a89582bea"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.9187efe4.js",
    "revision": "f9c353068f469921fc0a4a3dc52d6e13"
  },
  {
    "url": "assets/js/page-主题配置.f0576517.js",
    "revision": "72af43ac5ee707064ccb8295e528bdd7"
  },
  {
    "url": "assets/js/page-介绍.553e2ca6.js",
    "revision": "57a9fbcd2afdfc60bbdf1982b54de3a5"
  },
  {
    "url": "assets/js/page-侧边栏.fb8e7be7.js",
    "revision": "80fb5b669a28d7df335679fb230738ea"
  },
  {
    "url": "assets/js/page-全屏按钮.6585379c.js",
    "revision": "d6454e73f7e3ef0855aae945e0d5663f"
  },
  {
    "url": "assets/js/page-基础知识.47c2241e.js",
    "revision": "9af0dfe7d5da9e2cef70f68c6f2270aa"
  },
  {
    "url": "assets/js/page-导航栏.6fd4ecb8.js",
    "revision": "c36ecc778fbb8172d843b6c8691b2360"
  },
  {
    "url": "assets/js/page-开发主题.6509944d.js",
    "revision": "891bf9623f47e4f5a271cde1706af0e5"
  },
  {
    "url": "assets/js/page-插件.9d4ef338.js",
    "revision": "4f118cc2d6b3280e9a0eebe55b169a3c"
  },
  {
    "url": "assets/js/page-插件说明.67600cce.js",
    "revision": "02f0e9fbf2ed9b11cfe8df456b7545eb"
  },
  {
    "url": "assets/js/page-文件结构介绍.321438f4.js",
    "revision": "909cd3aec5fa9efaa8aee9c84e95e6c5"
  },
  {
    "url": "assets/js/page-新增组件.9322422b.js",
    "revision": "fcb60349aa28b76ae5b25df010d640a8"
  },
  {
    "url": "assets/js/page-流程图支持.8b27a02e.js",
    "revision": "7f10b3c721a6779c41d225dff4a15c0e"
  },
  {
    "url": "assets/js/page-脚注.bf94161e.js",
    "revision": "b57baa37a81668b869c2777b3b8a75ef"
  },
  {
    "url": "assets/js/page-自定义对齐.afabff82.js",
    "revision": "aa537b9a40807cbbdca1bc9fb882fbba"
  },
  {
    "url": "assets/js/page-评论功能.b960493e.js",
    "revision": "8b10744decbd5fcba422ced595f4e17e"
  },
  {
    "url": "assets/js/page-路径导航.1621a895.js",
    "revision": "697ebee7c015dfce6ff9bf933068c873"
  },
  {
    "url": "assets/js/page-页面.477736c8.js",
    "revision": "cea9d0908a94433c3e17d7485d6c55da"
  },
  {
    "url": "assets/js/page-页面配置.e6e691f2.js",
    "revision": "ab98a7b04c99fcfc783b1e1e6b42e06f"
  },
  {
    "url": "assets/js/page-项目指令.0d749f52.js",
    "revision": "398081855dd46984b8a41510eb33d4d3"
  },
  {
    "url": "assets/js/page-默认主题配置.45776f6d.js",
    "revision": "5f89568bd63b42e4be70624188013db5"
  },
  {
    "url": "assets/js/vendors~docsearch.f05d4b04.js",
    "revision": "87e476050c91f90c68560b131351ebd9"
  },
  {
    "url": "assets/js/vendors~layout-Layout.7748aab2.js",
    "revision": "16865d86987298cfd1b48f84cd1daf5a"
  },
  {
    "url": "basic/index.html",
    "revision": "70a769815e555b76cb8b4c773d1651f7"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "8788841d8c23237b400b25756a06ab0f"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "935a8d29880a228e53c4f26aa60b6b13"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "e11915fd228b4763be2e9e17169e19e9"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "ac16d3ff2946135fd4331d2c96ceb372"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "cc838fffe50b39e92d54c95dc2fe6f06"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "6b665f53aeb25c58a04e3255dd73272a"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "ae2fc3a225732d1a8d7a047a296585ce"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "6e86ac56510e461f1962c81890c84d75"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "8840ea6fdf30b315c26b655b9fa2c204"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "e196128e57a72fd6d35e35a40cc7c005"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "afb0a7969c85886645d30ba13aa5815d"
  },
  {
    "url": "en/api/index.html",
    "revision": "a5abf1ba41bdd1b0d6f0cabba6b9001b"
  },
  {
    "url": "en/api/page.html",
    "revision": "174f1f5d048def7b4da5e7e2f2a8b7a4"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "3787eb97931607e0bd6fbcb90051f1b2"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "e6ca039f787902bba7930c4aef387d38"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "b0c98e6e37059779bf8c79831f19a1d9"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "3e4b0c68a88001f0e3dc393ebe6b36ec"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "7f54ef3a5a77eaaae0829d52a60e479c"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "53fd5a53668b7767b3a885f44ab1c7d0"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "5678627f7cdf894ead3b3ac832b0fd6c"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "5b96faaa6221b5af980d87fcf731e0e0"
  },
  {
    "url": "en/basic/index.html",
    "revision": "790c5f9804529aa2de0567603abbd731"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "a4538f5c1f7bb847ee8f0e729b34fed3"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "26a5d2a6fc82f79d1f449e451ce54e0a"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "9c7bee945da6c2d83cfd1281de328af2"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "62e5291b32b59ba095a341f9c9e4915f"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "3eedbdc6dbe2aa63fa131cc079c9f67e"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "766dd8dd3b600cede8633bc211f914d1"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "7a27548527dde1b17d770753c22cf114"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "87a7b6859f2968065c08407d5b81f09e"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "f0d908910a300c272dd5cb75146fceee"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "8808c250609e372566df4c9e727eb168"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "5e4673a846910e0034a36fc43f5c15d8"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "423172c75d5f7992bdd3e8eae9e93827"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "e12527d7a889ee3ad840693ea0790d86"
  },
  {
    "url": "en/guide/component.html",
    "revision": "159a7ab474c94b96266fa9e8a5179248"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "56af86decb0b4442dcf95db83ab4279b"
  },
  {
    "url": "en/guide/home.html",
    "revision": "76cc2d4290f77bed1737bbeeb527d6ed"
  },
  {
    "url": "en/guide/index.html",
    "revision": "a12a249f11428dc7061ce6036a5af1fa"
  },
  {
    "url": "en/guide/install.html",
    "revision": "638162fe156a2b90dc96fd6dcb834dee"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "a99db0d5fcf9e9885fa0c0dd70267cfc"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "6f3847e15d48e5aa58e34563eb4d1ca0"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "f413e5e8d0c052f73895feb9fc0d2376"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "1a841c752b396b027968142069b0deb5"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "e9bccec5c3a24a049dbedc357024e99b"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "d0d06fffc440d54d719633e3951abe34"
  },
  {
    "url": "en/guide/page.html",
    "revision": "ed9cce43cfb13c440eaea0bb393bbeeb"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "6014c48ecfe8c2cd94a36214776af464"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "49fde57fb1f293820da2a545d05aac93"
  },
  {
    "url": "en/index.html",
    "revision": "a4c7a2b55bb082eb34957442bb6cc66d"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "d3365dc31e1b8776a3f14ae4b00eaf7f"
  },
  {
    "url": "guide/comment.html",
    "revision": "fe1e8e903e57937bfdf47f208a9d89c3"
  },
  {
    "url": "guide/component.html",
    "revision": "ea47d40ff7843c7a019022b93640a359"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "5116d021e53ddb2eef0fea19bf1b942d"
  },
  {
    "url": "guide/home.html",
    "revision": "576374babfd6ebe8e530f179cad22642"
  },
  {
    "url": "guide/index.html",
    "revision": "d835f64625f1726a0d2703553fb60b29"
  },
  {
    "url": "guide/install.html",
    "revision": "0266fe65661b494230f54ddf12c4ce01"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "1183d579aa4062a3609e89425f350156"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "a9b0ca0fd01441b0eff7f36ea5e16e0d"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "0e29ed21eda71799a7e3c40e3cd59f53"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "b823b129b670798270d8fb0d63ee5e1e"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "e95dabde6a77f337a76a43e90b82a9e9"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "a57561c5bdf96230a3457f0388db5bfd"
  },
  {
    "url": "guide/navbar.html",
    "revision": "a1873fedf118749fb26beb91ff47bd21"
  },
  {
    "url": "guide/page.html",
    "revision": "4de6d69a4a8c5b5977556d8dcf0a5f8d"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "a5ac4d6c01e018c26004ef72e0cd008f"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "94228c820c6e0bcf3e52730fd93b9fc0"
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
    "revision": "bcaf12139080c7d90037ee7d505ccea2"
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
