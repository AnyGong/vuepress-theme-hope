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
    "revision": "fdb6a335b4cb0e7b738f9882605ffaed"
  },
  {
    "url": "api/index.html",
    "revision": "c8e4a873239d67bcea8cc57b97487758"
  },
  {
    "url": "api/page.html",
    "revision": "f6ce58fd3e472d5996aa35b79c6b55f1"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "e9550a41aaf48f975edba86d1b87f8c1"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "a76aef73d6deb001dc4206560d1e1c09"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "af2065fec1e63ca83b00750af285154d"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "9652d87e1faa33d4d315fd24e6891b97"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "474047648f70aaa978921e2ecad8dd49"
  },
  {
    "url": "api/stylus.html",
    "revision": "f0b182e0b3ae5b1f74f1382d53701731"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "aa1017f205c7b7140bbd05b2a7117e05"
  },
  {
    "url": "assets/css/0.styles.c0cd6cd2.css",
    "revision": "7061396940889f445af87edd0be5cc23"
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
    "url": "assets/js/app.e471c054.js",
    "revision": "cb94f72c3df973da7b51f0333c1db3b3"
  },
  {
    "url": "assets/js/layout-Layout.1d7492e1.js",
    "revision": "3e94123e9678bed97e01b6f40578996a"
  },
  {
    "url": "assets/js/layout-NotFound.de3c5bec.js",
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
    "url": "assets/js/page--b64dd6ee.41ad165a.js",
    "revision": "ea95491a9231e60f880fc1e8087dc0bc"
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
    "url": "assets/js/page-API 文档.954f5a86.js",
    "revision": "49afc7f7b65220369a3838ba58f51df6"
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
    "url": "assets/js/page-flowchart.ef6bfde8.js",
    "revision": "143ec90f5e22646b506aa3453dde0187"
  },
  {
    "url": "assets/js/page-Footnote.ecee779a.js",
    "revision": "d2f5a26005c56315f685069f7b62a277"
  },
  {
    "url": "assets/js/page-Fullscreen Button.38072781.js",
    "revision": "53e0d2f5dab34ed812fe4a06751f8889"
  },
  {
    "url": "assets/js/page-Home Page.c0a76c3d.js",
    "revision": "78b2c5aaeddf4431614708c43716f312"
  },
  {
    "url": "assets/js/page-Home.7a4a0ef7.js",
    "revision": "5d07da4d898b22c049cbfc9050d31c3c"
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
    "url": "assets/js/page-Markdown 中的新语法.8f1b0377.js",
    "revision": "f574b9f22e47aede41f3badc94f4edb9"
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
    "url": "assets/js/page-NavBar.9ad49afc.js",
    "revision": "2b6973a48356fe2ba76bf11e70b8de56"
  },
  {
    "url": "assets/js/page-New Component.1dab021f.js",
    "revision": "f8d8aa460f4d73d0d69d7017ba4d7b9e"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.73bdd399.js",
    "revision": "1a85329d6eeb3bbe8461ee8a399c2b8b"
  },
  {
    "url": "assets/js/page-Page Configuration.15b958c6.js",
    "revision": "86dadbd96442ab563e763f5abd901031"
  },
  {
    "url": "assets/js/page-Page.e9634a96.js",
    "revision": "5e488d39578742e5019f0e02959675da"
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
    "url": "assets/js/page-Sidebar.bc2baef7.js",
    "revision": "aee11481269e9df754f0b2d61bc4a80c"
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
    "url": "assets/js/page-Tex Support.fa90f8c8.js",
    "revision": "34c4df26fce0165fb3ca18b6278fc8d2"
  },
  {
    "url": "assets/js/page-Tex 语法支持.fa0f9f82.js",
    "revision": "0a5eee94920f18572b711cef0b30935f"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.60b54313.js",
    "revision": "fe18ee3a0c08df99465431a0ca3f088d"
  },
  {
    "url": "assets/js/page-Theme Config.18bb0ace.js",
    "revision": "700e41f866afaf2b39283e898680cd37"
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
    "url": "assets/js/page-主页.48afff55.js",
    "revision": "94df446b402ef303870fb6a0fd6675da"
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
    "url": "assets/js/page-介绍.1899b4a1.js",
    "revision": "61dc6e7060bdc1eed196a8c490b8c866"
  },
  {
    "url": "assets/js/page-侧边栏.d5f32c88.js",
    "revision": "66a7f322a7d3d1e5a06768aca962b319"
  },
  {
    "url": "assets/js/page-全屏按钮.ee633f01.js",
    "revision": "3576574982e18349d5ebb158ef059cca"
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
    "url": "assets/js/page-插件说明.93dd7a9e.js",
    "revision": "ea9ed8573d6c0710495d30308834cede"
  },
  {
    "url": "assets/js/page-文件结构介绍.321438f4.js",
    "revision": "909cd3aec5fa9efaa8aee9c84e95e6c5"
  },
  {
    "url": "assets/js/page-新增组件.4d809d35.js",
    "revision": "54064fba4ff7ec7d9f207f23b16ee018"
  },
  {
    "url": "assets/js/page-流程图支持.85aa7aa6.js",
    "revision": "2ea704e121363f76ffb6ec8c354fb8bc"
  },
  {
    "url": "assets/js/page-脚注.f9fd28e8.js",
    "revision": "006ed37338e0632d4ebf0829dae5f01d"
  },
  {
    "url": "assets/js/page-自定义对齐.b35f71f7.js",
    "revision": "82ad552d80345f37284e7f3ef3f6a1e0"
  },
  {
    "url": "assets/js/page-评论功能.b960493e.js",
    "revision": "8b10744decbd5fcba422ced595f4e17e"
  },
  {
    "url": "assets/js/page-路径导航.5433c250.js",
    "revision": "bcf0ddebaaa308c87e8ab8dea407c377"
  },
  {
    "url": "assets/js/page-页面.fa2fb2e2.js",
    "revision": "cb10f14f48d870de145c2d294501678b"
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
    "revision": "41710ecc2361748c2d2bbefe29da5029"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "b08f3c9e5eee3f1d03acaa6be6bf28a7"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "24882233476212506ed30643088898cf"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "d88e666870bed33747c973d0fb09e5a4"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "fb53a3516259c7510482eb80e57c0353"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "d90888823c2df4f83ea4af35ea2351d8"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "bf6aa695c861625de059ae8cccca8462"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "3b8469882beed3b687a65c5e9f7265b8"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "52297f2d7a183ea927560be1995e1269"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "72aa2ed17bde58ac8cef2ebec427e028"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "8972f1f408228dbdb6928451c3d767b8"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "37dfd02f53154538896b55191c3f21b6"
  },
  {
    "url": "en/api/index.html",
    "revision": "3246564afa1b05afbe367a9fa71367ae"
  },
  {
    "url": "en/api/page.html",
    "revision": "4ebab7439c4a2d6f445c31c2bd3c42a1"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "001ca58e04a51695bdf4292a5c280725"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "69db415f5a0daf643e9404bd5e36d816"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "250340031a926a8fcf7b827d3631532e"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "d93f6a482cd25eecdcaf7ff1a3d55104"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "abd198aa3b6b56758ff03c80ac1b582a"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "f467a44ec7092ae6332c673da4d32d71"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "fb306cf45690e92d655571a78b4ea5de"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "f7659414e6481a398fa4baae85f44329"
  },
  {
    "url": "en/basic/index.html",
    "revision": "160240de9b505ae93900feb564d5bfa0"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "5f2840f30f2dd1bbb0869a7b60d9f283"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "aee9bb70088a03be8e6ae10250133991"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "dc5dbc0dd242737c3f4c3744a1a4de5e"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "991e2f5d93154c45e5a13427817e32d2"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "b36c5590c552e202e96f824f0c88c613"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "9ea584912dab46291b8df03f92b549c9"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "417b66a211a68f624401644ee8b04a1c"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "c75e6077470ab0739c12bd3c08cd6d7d"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "2f2744b84f83b53dfcdd6b6952d80dc2"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "3aad0e855814f0a79bd28790e43a8266"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "e16523869c6c925cfb6c6da5abc6d8a6"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "401d0fc94196582e07817018fb2d722c"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "8f6cd13366abfa62ca6b255dbf1ea2ad"
  },
  {
    "url": "en/guide/component.html",
    "revision": "033a0868c06dbd0e983bd4277a454840"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "64fa6d4b8c656c37823576bfa7fbe931"
  },
  {
    "url": "en/guide/home.html",
    "revision": "86f6d159ae5ddde82c63360cc6b37a3e"
  },
  {
    "url": "en/guide/index.html",
    "revision": "5dcbb8582c15a742f6ebea451f2a9023"
  },
  {
    "url": "en/guide/install.html",
    "revision": "a79ebb51d38baca1c66a616e866caf31"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "1b334fb18316612914e0331837e9d38c"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "3866ae2068080c721fbaffd27c9e404f"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "e05a123f55cf8aedd1276e987ec9d65e"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "495657389d812eaff436a37ecaddcffc"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "0f22ea6ea862dd7583ad7d7ff158f40b"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "71510c0f4b07c8ea488d6c077339b3db"
  },
  {
    "url": "en/guide/page.html",
    "revision": "c371dff1834b4e1077c26c0519211a91"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "75d774279dd20d01d715b6d611a2c5b9"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "1cfbe51f3caec9804a02c61318412b70"
  },
  {
    "url": "en/index.html",
    "revision": "e47d042dff1ea641c85579f7681bd04b"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "547330d12d264a6a2141169513d104ae"
  },
  {
    "url": "guide/comment.html",
    "revision": "3d2b38ecf01f48f82c44e4f62bd571d7"
  },
  {
    "url": "guide/component.html",
    "revision": "5e25672a2d21d5b8e7dc0e51d0c730a0"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "ea9d7202dcfa47902afc4b2c2c4629f7"
  },
  {
    "url": "guide/home.html",
    "revision": "b668f5865e336e57e1681f5e689710ee"
  },
  {
    "url": "guide/index.html",
    "revision": "8283d5e9baa9e0891c0e05ac7897b57d"
  },
  {
    "url": "guide/install.html",
    "revision": "2cee5fca8c27e052d4f1c42952ae8937"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "15d0b031b9ce224564bd49b72099de9c"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "b0323c389d9873b448977754c59ff3b2"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "0928720f7efef8b311fafdec3dc7b6a7"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "99b90d014311e9b9021fffc7341ed510"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "894abe3328e4035fa44f75597a8da785"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "0ea7cea03bf09153f77d11617cd435c9"
  },
  {
    "url": "guide/navbar.html",
    "revision": "e018a6dc214b156b9e25f8c32b7491a8"
  },
  {
    "url": "guide/page.html",
    "revision": "25064a69760ddf73301bf51afe6b7cff"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "e43b372ef32e62638b5545626f0fa059"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "c51f303a64e1e3e38d7a8b0e55416324"
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
    "revision": "65524c9ed86660db9436ad144a05e8dd"
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
