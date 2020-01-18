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
    "revision": "f106d1c1ddd284a670f86c523d4b5659"
  },
  {
    "url": "api/index.html",
    "revision": "f3239e8c482c86d7cc914c1cac5d58db"
  },
  {
    "url": "api/page.html",
    "revision": "357b0038984adec7826e82570a2c2f2f"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "7c563edd68dbf67d86e9f9ba2d3b337a"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "0d3dd1917c2d24e8f89cdcd794b4f25c"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "4e855bc974ac7fbf4c0b4aa13970bba7"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "8f9aa49da94f3a72d315d1c7da8f779a"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "755a734d7c324ac38a5723f4980ba08c"
  },
  {
    "url": "api/stylus.html",
    "revision": "0c6b063756381c2d50386ea51ab0330a"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "7fd522fe69c030189274d3e4098fa0ac"
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
    "url": "assets/js/app.3fd67e51.js",
    "revision": "7ac520e677ca48032e85b755a8e06bbf"
  },
  {
    "url": "assets/js/layout-Layout.855e7fdc.js",
    "revision": "3e94123e9678bed97e01b6f40578996a"
  },
  {
    "url": "assets/js/layout-NotFound.a136c96f.js",
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
    "url": "assets/js/page-Home.cca84bc9.js",
    "revision": "c351585108aa4f0aa6b54b41f7b866da"
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
    "url": "assets/js/page-Superscript and Subscript.b127953c.js",
    "revision": "da00e301f04ca9b35a77b3259331d65d"
  },
  {
    "url": "assets/js/page-Tex Support.0eaa51fd.js",
    "revision": "5c17de9f5b662a805e59b636754705ee"
  },
  {
    "url": "assets/js/page-Tex 语法支持.5eeecb87.js",
    "revision": "5d1c090abaa2caf3ccaf6e9ea8a3dfd1"
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
    "url": "assets/js/page-Writing a theme.ff47e365.js",
    "revision": "d283899bf373e05a383b265488c0a7a5"
  },
  {
    "url": "assets/js/page-上下角标.2c1050b4.js",
    "revision": "6bb024ae0bd46d06ea73a0769b44bd41"
  },
  {
    "url": "assets/js/page-主页.48afff55.js",
    "revision": "94df446b402ef303870fb6a0fd6675da"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.f632c292.js",
    "revision": "d8daf6a1f39427630f886af9633af612"
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
    "url": "assets/js/page-导航栏.bc015a3a.js",
    "revision": "faba7c05a108478d3afd24b7904cdf30"
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
    "url": "assets/js/page-页面.7a196eff.js",
    "revision": "99fd72d598348d354a4ddb3ac8efcc57"
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
    "revision": "bf764281fe1e48d25d5530fa4d27f1e4"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "c29acbd2a0ed27946146eebcb53f919c"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "27e8de7fd176d728f6629a1ac3a17eb9"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "9b3e6b5dc577f71d668f8bc03be5e1b9"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "db77d6f4512ef55097bff3b3a1c99be9"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "35a569906f3e6bc9dafb478c246d7790"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "6c604509b6c2558f3250c54d2bcad00e"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "470e695928517b4ca3ac4571f49dbaf8"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "000eb51fdf8d8189abde042fae4a0a30"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "18261f9e0e14230f1194c18cbaea2df2"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "d252b171bfdb013161e9e3b92d6ba0f7"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "367aeb5ee978083cfadf1a2cc9115eb4"
  },
  {
    "url": "en/api/index.html",
    "revision": "7e87ac2e60eb97e22f2f017759c4d457"
  },
  {
    "url": "en/api/page.html",
    "revision": "4d84863c1106e5568c3faa1876af5bf6"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "118d23a664a33124e2d066bf0431b080"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "1814c3de8d8392fd4a010b9349cb69bb"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "02d12b81fe04a92cf70ecd3749104cfb"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "f556d2ce79044f8b6c937d52637da21d"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "bbedeca05cdf838673f12f71a1fa37d1"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "573726a7a4af630d64fbeaf2b2c49bbc"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "196e7acf0b819ad10c0b2ec0f91bec75"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "6dac36126b566835520888aa4c81c2eb"
  },
  {
    "url": "en/basic/index.html",
    "revision": "ad46d0f13f2fda231bc9b69f706fac29"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "8a24a1fc83a88785aa4c921f4de7869c"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "c1bed31e99f3707e24f651802998c03e"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "de1dc7b8fdd000bf781a2971b7db7399"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "48b5cc6176902c290109c2152f560cec"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "b5f037adb221314b35896d7e7be46979"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "7ebc8dde8e9f7a4271b4c3a008efd9d6"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "9ff6ea74cbd49b2ef71f9bfd6e5f3acf"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "b0ca6e0376de167903f8bc0c6b74d196"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "2de40bee1cd6fb320ef6da1b14aa85c7"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "b53d3f7fb59abee0b31296db6a5d409e"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "7b077f0965ecfef5b9460c72bdc5cee9"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "7225d5c6dbfc31b2b7bddcae5dbb8746"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "4509319380f7e58eceedaa02c84acb52"
  },
  {
    "url": "en/guide/component.html",
    "revision": "7165747636b1300865e4b86503bdd474"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "70842416834d9a295652ee4861826c21"
  },
  {
    "url": "en/guide/home.html",
    "revision": "f2fc80b5fa7b8ee31c6c25ad8c5ae542"
  },
  {
    "url": "en/guide/index.html",
    "revision": "b0a7f38ae19df941eaeed7ec148ca1be"
  },
  {
    "url": "en/guide/install.html",
    "revision": "972d8fc0dd9ce35a7a1e58b43d872c79"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "90b085863555401b82114eaf00b71665"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "eab4fae08c561613f6e0923302015821"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "7979b2b81b54519c9224caa152b84365"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "325c3bbca91576a885c34675a4d183fc"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "497857500b1d11bf9e5c0a34aaf85500"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "45c3f1eb28b7b385520b80f9fb11badc"
  },
  {
    "url": "en/guide/page.html",
    "revision": "730f8ad5e583e7a02f1b46633bd979d6"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "92b8b0a3bb8c5a60a240000668f81efe"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "4af2cfbb2da55f444c59f371ae14b22d"
  },
  {
    "url": "en/index.html",
    "revision": "6b58becdc56a9cd0f1dcf3fdbe534cc9"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "20557faee345d3fbdeb3b7edfaf3b72e"
  },
  {
    "url": "guide/comment.html",
    "revision": "0c914a5f8bc3efb0b6b3b685ca0dca09"
  },
  {
    "url": "guide/component.html",
    "revision": "db6b50d7eb4c58b8d3ad2f258597cb3f"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "96c0b8c5de00fd438a39d188e677f958"
  },
  {
    "url": "guide/home.html",
    "revision": "ba8d332801356b24827d6be6db763cd5"
  },
  {
    "url": "guide/index.html",
    "revision": "3c2ed77c0acf57954111790346fe2f3f"
  },
  {
    "url": "guide/install.html",
    "revision": "c5c378025e39aaaf38d38c35bd212e1d"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "bbcbd469b03358f0691fb29363dfe410"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "25d8ae1c2014fbe04a42b72d6e3d00c0"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "b0f6a11c7520d0ca9a21c20fbfc21b37"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "4434b38cadf374801dea4229db8aa1ea"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "0b23c15e017ba46120d0a9e8a3dcae13"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "d6468074fc00c543993db5cbb08cf315"
  },
  {
    "url": "guide/navbar.html",
    "revision": "ea9e4e59bb73c39937aa0f08a773f559"
  },
  {
    "url": "guide/page.html",
    "revision": "e1b0c1817c8cb0d09c7d8725b596a9cd"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "6863ae31badebf60b1d9f3e99fbd59ca"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "402a80abfe354f420ca698c965716519"
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
    "revision": "22ee3f7f607756dca10d293c636ef947"
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
