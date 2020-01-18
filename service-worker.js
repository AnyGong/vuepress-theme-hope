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
    "revision": "ba0ff8524a5d998666b716b50da0ab7c"
  },
  {
    "url": "api/index.html",
    "revision": "d961182c193b653fc8e1c744e5db8450"
  },
  {
    "url": "api/page.html",
    "revision": "bb038047490817524d87952a3d011e0f"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "2c1d836aa45c11376b82c6051634b561"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "b92b3c3841f000105a1332aa30119e15"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "9f0eccb7803b83195ce9647ef90705ee"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "3838863929f1d7bc9ba10e89d3eb180a"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "fdeed23a802569a26715100b58be827e"
  },
  {
    "url": "api/stylus.html",
    "revision": "575042eede29f50ed321dc1a9e53cfd6"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "f8818a5f1f9d407f51c0b8afb2a92d42"
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
    "url": "assets/js/app.5611623e.js",
    "revision": "39886414f4da4e78379202f32b46b2cc"
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
    "url": "assets/js/page-File Structure.30e0e329.js",
    "revision": "c1e5513906d6a25ab3330b15d90126dc"
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
    "url": "assets/js/page-Home.9bc1baf9.js",
    "revision": "2400679d407ed944959c51b15fb3ba5a"
  },
  {
    "url": "assets/js/page-Introduction.d78d91b1.js",
    "revision": "4b164470bac9dfad07fe24f364204309"
  },
  {
    "url": "assets/js/page-Markdown DEMO.30e4924a.js",
    "revision": "c2097b340ec02a6169a1c63f09b087c4"
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
    "url": "assets/js/page-NavBar.1c6b4da8.js",
    "revision": "8124fcc23d49b4825a7bfd7ae2f8ed7b"
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
    "url": "assets/js/page-Page.470628cd.js",
    "revision": "1ca60e86d247ef629eaac99a21b583e2"
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
    "url": "assets/js/page-Superscript and Subscript.85e680ed.js",
    "revision": "bb45679319dd32a7119aae1dbb5b6109"
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
    "url": "assets/js/page-Theme Config.a2ab9a34.js",
    "revision": "fb4b1b5f52617aa2233b9ad51bd1bcd3"
  },
  {
    "url": "assets/js/page-Vuepress Cases.b65a837d.js",
    "revision": "311bdbe75657fa47b7de690d05dfefd9"
  },
  {
    "url": "assets/js/page-Vuepress commands.27f19a7c.js",
    "revision": "27b1625040c6d213ecc5f694bba2a883"
  },
  {
    "url": "assets/js/page-Vuepress 案例.f72c3163.js",
    "revision": "5b844a55d3f1afec23fb442cb1df5a22"
  },
  {
    "url": "assets/js/page-vuepress-plugin-container.818edc4e.js",
    "revision": "3c81d5f53e6002ba78f428f07f5c237e"
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
    "url": "assets/js/page-Writing a theme.919cdbca.js",
    "revision": "df042cf1ebf3a29df0fec689451f0bb6"
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
    "url": "assets/js/page-主题色与夜间模式.4d1de40c.js",
    "revision": "2520bbea976925f32e973df5c672abb1"
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
    "url": "assets/js/page-评论功能.83f2dee8.js",
    "revision": "27c06fba09665b6a2db6d32973c9037b"
  },
  {
    "url": "assets/js/page-路径导航.c7d2038a.js",
    "revision": "b12c83eaf6a59ba3ec40915f3602661e"
  },
  {
    "url": "assets/js/page-页面.477736c8.js",
    "revision": "cea9d0908a94433c3e17d7485d6c55da"
  },
  {
    "url": "assets/js/page-页面配置.d281e1dc.js",
    "revision": "4fc71bfd7bf5bcbe24f27c959dabdaae"
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
    "revision": "2017802d219dc7aecda0a6f0bf91cf78"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "0c6b3148d9d213c554ba3fb6cafbb05a"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "4889a0821902dc39c39f51e3d56a740c"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "7f8851c3026005bc938288676c1088d3"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "49502d990814d1bf19de29cc63126c7c"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "efeea58bc62463efd789d2fef70d45ff"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "728c32f918f9aaf2c7d358bae30bce13"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "db58f78fca7aca6198579191858925a9"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "b41c1479979c22c17dbb3f05b12e0e4b"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "6bc14c93cd89a37a602a9067d44eb229"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "5e4f3809b0b60c1af2d9c0293ccc7f14"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "4498b54ac0b7249f1e981f6814230d5f"
  },
  {
    "url": "en/api/index.html",
    "revision": "173ad2242a62783d959c442d391a10cf"
  },
  {
    "url": "en/api/page.html",
    "revision": "445ab42f2ed7e591e055a3ac1118c80a"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "92c6bcf4da871547798b224b2cac4eca"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "86ea4d9047d04f6a120aedb12e3b8077"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "a899b07379313b548f569a6d4d7ce575"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "ca41fcadde000089fd11cf875c37e1e7"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "3847127efb8dfb61173a7b98581d8a44"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "f5e5ee1ffee5da88e3cd724c98852260"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "f5e45b35e1bef20cb1ed9743bf193c24"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "f5e64e0ddf559f06345c56e25e4b3579"
  },
  {
    "url": "en/basic/index.html",
    "revision": "d6f718ff82cab1a6c48d1b96e0195b6a"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "e744e31cba364061ecda5343a482664f"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "26046e60f0c823366f4b55d27471572c"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "e57e2b6264202e6ca33a4bfbede1778f"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "4c5237364e240a19630db54bb38eb345"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "127c6bec666178634b2a7da6c67de4e7"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "50ec656e2b9d0972b6791402ad70e067"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "8e872d1182822233d71bf1b0b4413fcb"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "8ebf9a825ee56b1096802cbd8c46ea0d"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "363bd70e3409c6fc3f59dd9d5950ce6a"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "31f82a73c7281012d831af8150452475"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "cbabbc807e93f1b95dd0d342ca40e2de"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "fe2adb26d21e993b5f431a7074937c45"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "7f35011170bcafd755f96c59035f206d"
  },
  {
    "url": "en/guide/component.html",
    "revision": "79fddac5b1caf4c6c76abb90a05a5e4d"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "4b9af7a3a2d76fa2c5612b28563f628b"
  },
  {
    "url": "en/guide/home.html",
    "revision": "6996e3eb8d5177acdad03be0e3f31bee"
  },
  {
    "url": "en/guide/index.html",
    "revision": "4def8497484b92c7c918b2d35db55b84"
  },
  {
    "url": "en/guide/install.html",
    "revision": "b0262ae4d8cbec2ac3fb8e6b67ddd5bf"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "5036412b26f1a5f7b9ce9fc9d05c6f56"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "76d8af6e495e533fcd8772d188e64ace"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "755632f3dc0380ad457e10cde9918857"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "a099f125f7077e5c28c2486210ea288b"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "03d680496e4700f2cf0c9a7633dd8e83"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "8a3fd5f6f89fcbe2c1c777e812ba41a7"
  },
  {
    "url": "en/guide/page.html",
    "revision": "a4cfa190d237aa82b2bce9023b668e8a"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "d68790900c192b8d3c53606c43108961"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "c4df6e0d141c08117a028260eb2bc6dc"
  },
  {
    "url": "en/index.html",
    "revision": "6be2d035834370c9c97819b002f24668"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "6b305bcc89639d9773befb1c53391445"
  },
  {
    "url": "guide/comment.html",
    "revision": "3f38fed51051617d4813b47df824ac67"
  },
  {
    "url": "guide/component.html",
    "revision": "7cbef88c1e0d8abc6faf8234dea26600"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "00a3bd2172a4b08b953b1257a6de1668"
  },
  {
    "url": "guide/home.html",
    "revision": "0ea16b25eaecb071260d83ebdf79bf9a"
  },
  {
    "url": "guide/index.html",
    "revision": "ef527bdb446af8c1d3ecf6895b8dce2b"
  },
  {
    "url": "guide/install.html",
    "revision": "8256c40d3ded2002912eabec527ef95a"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "2eed5b775fd5ca684927a9fe71ca7156"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "c96c8c0f5e109b4495768b37e8c26359"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "8ae9e1305cf40ed7f8a368b5b32a3c53"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "13750b98c63889df073f9815c1513c22"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "83c2f12685f2f598bb49ecb5974e28c5"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "237f07667f63b94526ce3bcb93bd3dbb"
  },
  {
    "url": "guide/navbar.html",
    "revision": "c1ba846936e3a760158e028cc60c82db"
  },
  {
    "url": "guide/page.html",
    "revision": "710ec92b4357a6caa14b3ff0591242b0"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "fe11e82e3b66b5d18109ca2cd3c8b91d"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "48b7ec93af846d666a4f2f20f8375a50"
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
    "revision": "71c465f42786f554bf9ccff408be953e"
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
