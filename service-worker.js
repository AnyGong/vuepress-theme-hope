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
    "revision": "6ee7bc397a9074c8533293cd351fa192"
  },
  {
    "url": "api/index.html",
    "revision": "3e5009a5d06935d8eda1461ea0b157c0"
  },
  {
    "url": "api/page.html",
    "revision": "588a105ce0b07e713f7954302f4d2473"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "7bf675e39d60efbc431ed36466d5c72b"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "cfc3045059b9bdb391f6deb7eb9b2b74"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "05b9ec73e34a56e2d67deb967e052caf"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "6d3bc3d8b268e241ad5fcca70ff87efb"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "749304cba6400a849b8ceaabe3b435b7"
  },
  {
    "url": "api/stylus.html",
    "revision": "ca50f7952c9cb2d5476ad2f01f35b29a"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "ffe421c36de51d49dc48c30192182466"
  },
  {
    "url": "assets/css/0.styles.d63d7338.css",
    "revision": "0a30b512a485d6f63e603152206c9e66"
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
    "url": "assets/js/app.18a543e7.js",
    "revision": "a139cd5aa0d619bdfb144ee01f530476"
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
    "url": "assets/js/page-Markdown DEMO.f72f351d.js",
    "revision": "e262f12c07e113e7415995b27a90fbec"
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
    "url": "assets/js/page-Page Configuration.bf726fb5.js",
    "revision": "6d54f47711546575cd2668b1a4461de5"
  },
  {
    "url": "assets/js/page-Page.c041b9fd.js",
    "revision": "db938f95b0646272a07ef52e04991ee4"
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
    "url": "assets/js/page-Tex Support.11aa6edc.js",
    "revision": "4b94f798d513c392ca16575b99b1e119"
  },
  {
    "url": "assets/js/page-Tex 语法支持.604eeff5.js",
    "revision": "a0c7467e2ef5f0810688972ac8228a30"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.60b54313.js",
    "revision": "fe18ee3a0c08df99465431a0ca3f088d"
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
    "url": "assets/js/page-主题配置.3f9c83b0.js",
    "revision": "a0fe9f610cf4aa15ef20df2099d68194"
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
    "url": "assets/js/page-导航栏.9e3400a4.js",
    "revision": "d2dde3c56f0a7db90a3c82b0d8d5d35f"
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
    "url": "assets/js/page-文件结构介绍.749dc6d4.js",
    "revision": "6e9f9362a0472e0fb09f33fac30a61cc"
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
    "url": "assets/js/page-项目指令.19f99ebe.js",
    "revision": "b725a2664cf3a2fc76f21109d1ffded8"
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
    "revision": "82f3d5d2d6a5f05897a9e7dc629a4248"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "78a88fe5c66d4255d77e74ce9bce1259"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "2dc1438a134b9a5c94df0bc8ceaee8da"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "8b83539c7fcdba9c0febe56f6b87fb59"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "e32c458779106fee5d215569a73a19ee"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "f4221cb3280e3953309fa4bdb8e63dbf"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "e292ea8ee8304a384b8686733537e8eb"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "0eee91fe9497aebb0934591d1ebed281"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "7a12ea9171447234419f612da085e697"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "c6310f44b1ab2cbaecb924e5afb0f966"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "28a2735df8cf56bbd3bad1c0a51d53b7"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "ae46faef80d5f06fa1e482d7a56e257a"
  },
  {
    "url": "en/api/index.html",
    "revision": "9307d610e6015ebc081167039863d405"
  },
  {
    "url": "en/api/page.html",
    "revision": "d45b287346e87b387956b9ae3e89248a"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "0dd22bf3c9048a7cec97b036c02edce5"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "8123b0922f0ec956b4bbedf513f151de"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "f071361435f9c9d940bfeb62f5c13ac4"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "8c99a82fff42019053d553fe8443c99d"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "24ca3f4ac046b0ed1d38849a08a469fe"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "afe0e795f26e73be8c3122963e842fa8"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "451d6dc89a179ae4c3a35558e2c05726"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "4d8eb2e476719dab8146017070c4a1e3"
  },
  {
    "url": "en/basic/index.html",
    "revision": "687971b34da7e8d305dd27a5e7e36363"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "10e92a988168fe03f83f82cf667e5965"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "a495f41fdbe4ddf298440693cc449849"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "d5679773c4d6c4bae11bae37af648ba5"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "bc33f6099934d1d1745881c5e5d32097"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "1c797cb6793f47d586ffc1fb38f22d91"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "b7843fe5db993627c3eec4b7e77116c3"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "804e239b5b23709302cec9861736866c"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "b54f1c1d0d5751cd2d797b9fe44b19b8"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "1fc590a3eafe84b08412ae71f48599a1"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "9fa65088146be4f3cc508d27d80d77b3"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "b0e89446858eb1e7c27e74aa8c19ba05"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "a8f00a8c97c231459f6693d269ff50c3"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "8f33f8ea5997c2d3a4e0700e84793c10"
  },
  {
    "url": "en/guide/component.html",
    "revision": "fe639332e64b2949b84edbe9af7dd4a8"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "ba713607ea97857acf9331af0a7bf82f"
  },
  {
    "url": "en/guide/home.html",
    "revision": "3ab64682292735387484fd899b0e3d35"
  },
  {
    "url": "en/guide/index.html",
    "revision": "64e3108558b401b6c3bbcd09f4237bdf"
  },
  {
    "url": "en/guide/install.html",
    "revision": "fca398c7f52a06e92e1c061c8f746778"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "1d590ac32e5e940cdb0bfdec68c74790"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "05a72f77c2d0b45edaeded18f7cd2be1"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "6aa20ed629d4f78ff46b1a820668f79a"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "28f0b86e3cd9f612f54e48ccb08fa564"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "b6ed541171398d97bffdefb8947383cc"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "b11dcf67e62729cb33a130aea0f2a959"
  },
  {
    "url": "en/guide/page.html",
    "revision": "b3a9c97e9a2a8189566e31bc3c6d11e5"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "8148a7529b8ff9ddc344fd96989c4ae6"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "53ebb1807ada9a6b7713ae38ab1ee5a9"
  },
  {
    "url": "en/index.html",
    "revision": "09bf249579ad73c4be01fbbe731d3c6e"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "780aac9b8a6d0c2f72db80f836d47bf0"
  },
  {
    "url": "guide/comment.html",
    "revision": "9e63e949463f8d7121ab406f7267578b"
  },
  {
    "url": "guide/component.html",
    "revision": "72fb30e1fe935dce4752d59f2596da8a"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "4ff82d9cc7fe84931a1a6c38d45b3ff0"
  },
  {
    "url": "guide/home.html",
    "revision": "770039eda701e1c5dde558614a5aaed0"
  },
  {
    "url": "guide/index.html",
    "revision": "638e847ab75aeb9076655373d6967647"
  },
  {
    "url": "guide/install.html",
    "revision": "d58867992507fa318bc4d59f0f409afd"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "4a61d92131fb37b1b2f5765b8a5985f8"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "e214ddd8f0203044b60cdce80dc709fb"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "0cb312a7ac4e7e66c85f5d413635fb60"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "01d2daa3f13f97b3ef0b7ae134fc052c"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "e3cb2250215eaf731b8633ecd4bec347"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "eef2c06f8c7470ec4e5647a3cc5a4a63"
  },
  {
    "url": "guide/navbar.html",
    "revision": "2c130c2100ed1869f6fdcee1902917bb"
  },
  {
    "url": "guide/page.html",
    "revision": "1038682fe618a3a24bbee51569a308f1"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "dc5b37ced0e5e40ec9bbd7b6e3738d10"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "3d74080aef9a83cbe0655517dbfb31ea"
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
    "revision": "4d15ba7a6a761b0239a5f3467a3bdd41"
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
