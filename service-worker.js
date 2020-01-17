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
    "revision": "09797a7da37698f95bc205c2b3717e9c"
  },
  {
    "url": "api/index.html",
    "revision": "bfeb7fa1e77ecb96e46a98973d0f88de"
  },
  {
    "url": "api/page.html",
    "revision": "f3ab2ef8ce0275b18849a851b027af72"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "d827ccb6e986053b174d0038953a37f2"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "172b1a583678ac3681cbf93c14d9a37c"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "a835aa82de3d003b0e3e2c9861e3ebc2"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "6aeff5311a718ac1d9bdc1a4b7959216"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "d5915c5d628350268e7f60449eb6c98b"
  },
  {
    "url": "api/stylus.html",
    "revision": "c28b3665682c30356b4c0db83e2b6ced"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "943ad81fe3fe189b48dff0cbce73f2f3"
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
    "url": "assets/js/app.3bd42fca.js",
    "revision": "0d452941dcfa606ba4272c9a8aa02bba"
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
    "url": "assets/js/page-Introduction.b90f1576.js",
    "revision": "cad6b610a954b28012570d25af96027a"
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
    "url": "assets/js/page-Sidebar.998cef48.js",
    "revision": "129c0ca84e8881051ac2c325d9c3b48e"
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
    "url": "assets/js/page-上下角标.f9c85f93.js",
    "revision": "287b8155db725760dd9d9266f6a10cce"
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
    "revision": "d73bd8e1b3a7474d421dcc19f157f55d"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "1b7912c865b6ddf3aec9f4c8a7480f5e"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "51b60390f155950a39feea2cb79608d9"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "f3751368ac719e749037b0ca388d8993"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "0059af1959fb6329774c0bba977f9a7d"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "06cafd0e3aa0ec5a68971a93c0fd02fe"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "9877b9d4412c8937a75794fb8559cdf5"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "c5a3dc8bf0c3db595e07421b0ac12c50"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "9c83d78ed5990e9ea4d373e61218a8ec"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "cdd423affc06af581b4419f5cb88d9ac"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "f663199ffcad1d32929f670096c22471"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "505b8c070cddbdd520ba71756cc5a61c"
  },
  {
    "url": "en/api/index.html",
    "revision": "ae0c1ce4c632643cd3d2597364b7baf3"
  },
  {
    "url": "en/api/page.html",
    "revision": "8d497327292586d98418780ae1b60616"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "d9aac0b0c25a52a35a492e1967c4c09e"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "be1473e026de5094e8049ac6e6d74f33"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "dc656742ade1f0cd57c0dbba58645ee3"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "b1a91b57e8e91dbc3e7649dcc93a7ae0"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "7eff2e9d5be12b78174dc5955947d53e"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "23c4fc1d97cadc03d18e5bcc5c93498e"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "8aef91f2fbd1209fce4cf5b3bb27c569"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "b392cb99cf8f6d7a15f746c7a4b9d4b8"
  },
  {
    "url": "en/basic/index.html",
    "revision": "4c4520c2ee764a7cda6bd1428515206c"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "8616fc13d5b47c36e8fe96ae426ce6b7"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "8c5066e376d9f58189fd337bbf2133c2"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "f0bf5435279f9a42138fc0812609cb3d"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "8dfb89f49b38a35a0b2a69efa173c6b2"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "b88ee7818eabc918eb1cb06eba5ed571"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "699c91baf4a5a86ce29ed5f4483b6d31"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "a3bfcf73f519d05f8cfc640e84b39899"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "b520b2a9fc47fe7a23a807f8594095cc"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "60418e302f037679f27dfe4a2ae836e9"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "9a2c22d00bf05fa8e4192b6939e83c4e"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "69066ddd2d875f51e7e1060d713e4cef"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "472304458e40098955de64204c947054"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "5858a0eebd5717e77589e1fd58cce548"
  },
  {
    "url": "en/guide/component.html",
    "revision": "1dc3fbb90a20ee46eb8207bdca8e0ed3"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "e83470f30c3d86d8be3341c1263351e2"
  },
  {
    "url": "en/guide/home.html",
    "revision": "703bdadd1a83de9bd9f03638d6c6341c"
  },
  {
    "url": "en/guide/index.html",
    "revision": "3a202d84a040667166987e0f04074560"
  },
  {
    "url": "en/guide/install.html",
    "revision": "2e4ee5b3c748b047127b5b88aa50547e"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "15749da9d14a84d69c1ffa221b10acb4"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "5b3e6b5c38368645c162db4d87e2ab12"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "a06c253309facf1bb43f28487dd5dcaa"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "b197318c6bfaa595603f6b1755d33ac6"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "9dcb5a9c215218e45a8e8235eb12aa3c"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "e48d069eeeddf7bc09847f902e4d680a"
  },
  {
    "url": "en/guide/page.html",
    "revision": "96ebc2e0f1f49f0c62aa0d5b004556b6"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "53b925cc590e4101b4b214fe4f6f4762"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "aa1cee0dca3044144cea74611f132796"
  },
  {
    "url": "en/index.html",
    "revision": "a505bb25e58d4a23dd80d13ee8fdaec0"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "6c2a003df13919e8acb44bbbcba687d2"
  },
  {
    "url": "guide/comment.html",
    "revision": "c0a457e60d2496181c7040754baf8e36"
  },
  {
    "url": "guide/component.html",
    "revision": "46d4f04afbef5ca5f45ea03a5259c1ce"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "dd54079a7f928b87ae002f43b51c1b7e"
  },
  {
    "url": "guide/home.html",
    "revision": "d3e5841e008d4b6889bca2dd6727238a"
  },
  {
    "url": "guide/index.html",
    "revision": "233e7ca128950818c7ac9c3eb744f101"
  },
  {
    "url": "guide/install.html",
    "revision": "130b5ec61f94c091f6fa48c9d1eec18f"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "a1bf2250155b69653e2f0b4cacc71207"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "cf5996ace4d0cec395b889520820d25e"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "e6e214adfa0b0916be355d9ce97e31f4"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "e8d39b573a6fe62d7ba7986a0a2dc78b"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "ace9360cfd55a34b0a98719a5743804a"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "06b1c7fd4ff001a24b4d22307223530b"
  },
  {
    "url": "guide/navbar.html",
    "revision": "c0c07c4be44c593100a47be3d8893db8"
  },
  {
    "url": "guide/page.html",
    "revision": "5748fcb06b6fd39b745f29b74d24ee73"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "274cdccb4782d59d993bf04577f2c236"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "fe0d429f7e79b4657ffe506ab99319f3"
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
    "revision": "7a29bf1e08be0e582be8343e010458b9"
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
