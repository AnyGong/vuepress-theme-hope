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
    "revision": "ef8b47acd1d419dd1233698ea29fe91e"
  },
  {
    "url": "api/index.html",
    "revision": "30d21663e6f13bb727595dc4c3a5b120"
  },
  {
    "url": "api/page.html",
    "revision": "5ba69a86ff73aadbeb3c0f4057f7d6ce"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "aa619bbf81821c8f96eb6e86d27d2227"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "1fd9960bb912457ccf2a6b82c7741829"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "215a639db1d4868672b62e14f0c94cc8"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "204a452d21c0a9f4238c401d126b4f8a"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "b3e419ce6cf3379a9b381147b97ad36b"
  },
  {
    "url": "api/stylus.html",
    "revision": "e6759c69d2f52bf4f5c8581a2c5fbd3a"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "6d2beadbd4dde492b2670d0001c09d39"
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
    "url": "assets/js/app.e3d88b3e.js",
    "revision": "c5ba70915b943ad4612adb744b417c36"
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
    "url": "assets/js/page--24b68849.2f582aae.js",
    "revision": "d250805ef591213edba0527bd02e1eb9"
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
    "url": "assets/js/page-About Vuepress.965e45dd.js",
    "revision": "2498f18ff9182ba48be9aedcc07d6e7c"
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
    "url": "assets/js/page-Page Configuration.bf726fb5.js",
    "revision": "6d54f47711546575cd2668b1a4461de5"
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
    "url": "assets/js/page-Plugins.5a0308b9.js",
    "revision": "92b331b6ea471c87a4480eff8fd00678"
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
    "url": "assets/js/page-stylus 配置.2eab911c.js",
    "revision": "ac3bb89c98972378b10a65ec957ac61f"
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
    "url": "assets/js/page-vuepress-plugin-copyright.d4a707cb.js",
    "revision": "77785dc39ad64fa5a075946d7339c575"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.d3da83d2.js",
    "revision": "ffd25d10554be72de5db602c3c2e1804"
  },
  {
    "url": "assets/js/page-Vuepress.d7091ba9.js",
    "revision": "af386e2c8414ae37342fa668e840e022"
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
    "url": "assets/js/page-主题配置.1b67dd4c.js",
    "revision": "f5221283418ed498f128ab0f55cecaaf"
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
    "url": "assets/js/page-开发主题.8030033b.js",
    "revision": "b1361f632bf61293f7cfb4ab0034a027"
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
    "url": "assets/js/page-默认主题配置.55bd6af9.js",
    "revision": "78c65e70a96d64490d2f5e68d30694c6"
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
    "revision": "43f6d2be974f1194c7c2ca20fbb60468"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "35db348daaf6c9db1978c01d30535ee6"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "e02b833f85842218d25e0a3a0fe4ae88"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "2ef8c1995613cd3cd1dce4d3b471c499"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "34fc3e21352bc81364f206a0bd95dd4b"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "b788332b06e5810c8308f4ab28c12bf3"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "94315d0129575e924efb2166869bad82"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "3e49fdc2deecc5b9db2d7365ac17922a"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "c536e566c5803eb2de01a4bae3a9875f"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "483c4fd702caffad946a60c12e2c26b6"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "9adb5d0fde76896997e7e788990d1c67"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "492fee2b21b268ed3bea267ebbbc001b"
  },
  {
    "url": "en/api/index.html",
    "revision": "14b729962fcaf8a5d0c370df6bf84831"
  },
  {
    "url": "en/api/page.html",
    "revision": "b3b7ae6e61194f23e2ce6b1ab98de42f"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "24babe03b67dda1337733fd5f30fe042"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "f4a0f02c2c144a52b33870ef85cff781"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "c0bd52c49af5f48ba92f6d77d6b2f84a"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "3eaaaab3dacb8c9824105c1bd32b3073"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "e588b8da29031b19d05b9f4c5bd9a4ce"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "0f3ea576f681d19ac81df97c0557de71"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "dc57e33dca3a52c67e58ba3e39007f73"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "25198153316f652a649ae48050a83c89"
  },
  {
    "url": "en/basic/index.html",
    "revision": "efd2251ac70d4b5bb64fe5e64795fc74"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "ab4349ae531f9b60e9627e95d721df29"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "2b8993d1017a6fad17c4efa539629afd"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "c345c0943b2c2b1a02943a650fadd2bd"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "652f8b8026e7282dfc9a443229f412cd"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "62f67139d3d73343416a791dd1bd6971"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "6a60e9e679783ae8ebfdb317992a945e"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "6b75037f7c05856e05097e3c383975d5"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "7f48c9dbc8a37d3295e8368b170bd463"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "e86909de04d666272838aa6f66aeb350"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "6cc004595063ec6b89a92dc8dc7bb661"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "0168b7e1946e9cefd962b30a8d82c1aa"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "7815f9fe2f1e25e297893cb48bc60f90"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "8b8ea6ed8c9a0c669b782415f9c1e47f"
  },
  {
    "url": "en/guide/component.html",
    "revision": "3d7b0319cbd59179275050f0a1233587"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "7eec05f3e2210d1986866e623b2d0d83"
  },
  {
    "url": "en/guide/home.html",
    "revision": "f1ab2e977cf75e7b166d3e22f579648e"
  },
  {
    "url": "en/guide/index.html",
    "revision": "4fabeb5bd7944eb967247ca0e60a16c4"
  },
  {
    "url": "en/guide/install.html",
    "revision": "3db01101a5aa263163774f41348b7d32"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "b2e1e4a9700b09514565f1b9246a820c"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "b0f43e6b996c9eb1f37b508941566053"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "21823802b42d81ef1450b4899d6a0d1a"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "2bd71da3d0aa00dcf55e13d3f1c19818"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "618eb68c495cfd001063f04d4c8f99c9"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "8243d5504ab7259afb0a9b9ff1bbca0b"
  },
  {
    "url": "en/guide/page.html",
    "revision": "b4609fe285fe865810f756bf4aa20682"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "abb979adfa11f538d7798809c7b4f926"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "c7475b422aeda67e1d99db739c235e1e"
  },
  {
    "url": "en/index.html",
    "revision": "ea7cab76a757303bfbbba12bb98c2495"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "ecbc5e2d40bd323c78482f7c7ba69f90"
  },
  {
    "url": "guide/comment.html",
    "revision": "7827e6ac83b57148c0550ed2b7c9ec95"
  },
  {
    "url": "guide/component.html",
    "revision": "a36796627145c2aa127bb17f11e362ae"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "9ee01180c9aecad3c66430de2f9b0d6a"
  },
  {
    "url": "guide/home.html",
    "revision": "5749704a6c5c2429c222638ac7156e78"
  },
  {
    "url": "guide/index.html",
    "revision": "a18d5cf14c1dc8d142e2cf81ae900769"
  },
  {
    "url": "guide/install.html",
    "revision": "93eaf360ed412d0d3318f934642a6496"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "0fd209fcc95b1436993f81f49749c7da"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "5e111a6e96f3e902fdd8af3770846e37"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "f45eb46342618e2f8dbe790581f2426f"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "ef59a21fed2a5e6eea935d653c14e6f2"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "9ac60b26f48fdabb18187fcb33006e9f"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "433eb12a1ef72f1755575d974db37d3c"
  },
  {
    "url": "guide/navbar.html",
    "revision": "9d929e848b0eb110f7822d1a585de925"
  },
  {
    "url": "guide/page.html",
    "revision": "a7dd6c9bac19401569a07bdcd795d046"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "cc7e3f252e50e4297192fa31fc63a18a"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "f612e3665495aa654be3e8cd41e004a6"
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
    "revision": "42d0cc0d81382e147fede2d4dfacbe9b"
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
