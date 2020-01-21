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
    "revision": "b587c71b328c9b53c1d1109b5b5b2fb2"
  },
  {
    "url": "api/index.html",
    "revision": "e386751a74f4a7e039f232011fd0b78c"
  },
  {
    "url": "api/page.html",
    "revision": "9cbe6a54d8379eb6a7fc3fccce153392"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "c7926b476cf7a34327a5852ce3fae582"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "1d9af79aec32f4f799123176b06025a4"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "d7fa14d787a008f4aa267369c72da138"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "76a50e9bad8d156a83c933da8b4c6321"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "2a99ebfdecdda34913c804df2f3f703f"
  },
  {
    "url": "api/stylus.html",
    "revision": "767fd5dfa6259a0d3cd51395615066e1"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "7175f05359849eb8c729e37489da4d7a"
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
    "url": "assets/js/app.6cf8372f.js",
    "revision": "c29e2d6fbb232ed152ad352f32074199"
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
    "url": "assets/js/page--33732ef1.289793fe.js",
    "revision": "7a181bdf25d11bf86f1eeb1b03d9a355"
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
    "url": "assets/js/page-About Vuepress.d741006a.js",
    "revision": "e02b297545189a4f3f2cede1906646f1"
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
    "url": "assets/js/page-Default Theme Config.dcb9fdc6.js",
    "revision": "a3a0110dd32a73115b988fecb89c43c7"
  },
  {
    "url": "assets/js/page-Emoji List.ff2295f1.js",
    "revision": "970f852744e4f6e05212febabb917d16"
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
    "url": "assets/js/page-Home Page.f0933c80.js",
    "revision": "c81523ee4318b4fc25077298685bdc5e"
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
    "url": "assets/js/page-Markdown DEMO.6f7bf017.js",
    "revision": "24f215f4d256d17db28c1ba9f68c3003"
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
    "url": "assets/js/page-NavBar.1c6b4da8.js",
    "revision": "8124fcc23d49b4825a7bfd7ae2f8ed7b"
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
    "url": "assets/js/page-Tex Support.99cff7a7.js",
    "revision": "9d10a63080894ec40a82e9526da17c3d"
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
    "revision": "d6458f7d619acd05dadefeb13fe4e07a"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "148f26133f4c470e4568e4f2de7f6df6"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "56521ee703ed279667097abec75d9d1b"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "d0aedc1629212544aa198ab8cd9c41c8"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "c23356c973f19a153c6ca48bddd2d51d"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "ad0ecd8dfb0d1f797ea7e477c00715c3"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "02a6cea4b61d5fd87e60d3d6361be1ab"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "4167e20e105989e3be56a46d4669afe3"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "20a06030d85f3c542b969b32d5822e85"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "03af8f05865ef7839769c35755be147c"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "008098343bb1c14c8828599334d14d57"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "e8acbc7e0af3537cc47a43383e9e1d15"
  },
  {
    "url": "en/api/index.html",
    "revision": "7775d59f5deec19545c06ea1f70bcb64"
  },
  {
    "url": "en/api/page.html",
    "revision": "37086c4236f96b342004d03a7c07cacd"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "1d59594ea4d203836b2234eabbef975b"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "14a0733ea5457b52f1e1404e6b5ad0ee"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "0914cad6c1dd82110888e99e5ce0c083"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "2f19285eed05d1d264848d117e5dd5c2"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "5b0031f6d46e47d58a3fba77f64e8331"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "9b0641a993c2bf160626694e2183bc69"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "da0139f3c3b12fbf37ead64bb7bd5269"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "0a517b16948defa626f8811de4fef096"
  },
  {
    "url": "en/basic/index.html",
    "revision": "3177485e728970ed67a0b15939ee7177"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "b90f109c6878a4852940ceb214f4f8e4"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "1231a960c0d87c394edadbd1d9460798"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "2e0e6ecf713634b9c8ff32c23d39e643"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "e4ca77e3a37d7fca0bfc7dccee4db177"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "45526f33f309437b5c2c488867104199"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "72dab1f7089e9b914f9d1ebf05d41f00"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "bfd1675262c0c5e03dd82d41ffbb3b3d"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "93088cf17f32566a5ac05487b86a12fc"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "57453a8a307b3308bd446c1f72fcf314"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "8482fede58d9ee66afb0137a4c584cbb"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "fdc101249f77f5c64a5e994a1d566808"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "0edaa34ee3d29ad27eee77cd23355c2f"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "35246533640aa82e340b636f8a7a321a"
  },
  {
    "url": "en/guide/component.html",
    "revision": "842d23731fa0ccb9cdd366518b58c0a9"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "80d0db52eee859b165fc897e7c2d4885"
  },
  {
    "url": "en/guide/home.html",
    "revision": "bb2977b5f0bdfe813d0f24051c5c532f"
  },
  {
    "url": "en/guide/index.html",
    "revision": "6d2dba472a5daec17286417f51f3e209"
  },
  {
    "url": "en/guide/install.html",
    "revision": "6d40a169bbfe35fee60184d1e10e8e56"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "03e1223fe9f1e0fa6c1d39f423f38b36"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "660445aa33e551a14c5f52de1d0687bd"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "c31f9a35bdb1d30e732248f713031cd2"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "b6807172e7f0be19c6fdc3b9e3ad87e4"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "03b31ab2a8737bb507596c28014a6c90"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "247b86dfadb3aedf152f337181cb5ede"
  },
  {
    "url": "en/guide/page.html",
    "revision": "f2de37329db9d3b43ec09b91854a9a1f"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "7e65324e412956fb2cb9d0d4da5c1452"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "5e0a4cd7465e5798da7d55e485d2e73c"
  },
  {
    "url": "en/index.html",
    "revision": "dd65e58802faed745402194d6efc6b9c"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "b54f96ea7c5f5eeceb814f2b414a80c8"
  },
  {
    "url": "guide/comment.html",
    "revision": "198967df1c54aa70801bd34df0b659f0"
  },
  {
    "url": "guide/component.html",
    "revision": "ec0021879316ee64e18a815325e59943"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "6bd11c6a146018f35418e38eacd4ada3"
  },
  {
    "url": "guide/home.html",
    "revision": "3ed1cc0f5f8b128fec728e52c6e51d9d"
  },
  {
    "url": "guide/index.html",
    "revision": "51575cd0d860fc2a19eb09d4b9e5debc"
  },
  {
    "url": "guide/install.html",
    "revision": "b943fa86b0b56f56d43140b62a6a057f"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "53ee1869d28049e477a6704986449738"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "ae406e16268ec1b917957fe9af512bbf"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "37291e47920e8021b63739ec5167a139"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "925b4be7f32bf26e387e18574232c2d7"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "f2820c034f9c9586c680980e32256fa4"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "65762f089348d22266b77b0d9d2e621b"
  },
  {
    "url": "guide/navbar.html",
    "revision": "ec46fe737c0cc61100c1aec3a19be59d"
  },
  {
    "url": "guide/page.html",
    "revision": "0eb06fd5b1019ed2d24fcb2d268006f9"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "5e202bc3a9f372feb17f6eac069e4192"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "96c8ed5affe76c608e2f2d06b400efe7"
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
    "revision": "d3b362000637b0a686b720d8c5bd0257"
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
