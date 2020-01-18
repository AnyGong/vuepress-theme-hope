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
    "revision": "d34b5d4b9c8a6d61ce0237709a430e9f"
  },
  {
    "url": "api/index.html",
    "revision": "fba0034f3b6708e6efc0b35ef6a6db61"
  },
  {
    "url": "api/page.html",
    "revision": "538a479beade694fe9a91b95f330dc0f"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "c4b5637f5cd28353e2ba1f84d8ce71c5"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "68f188f3e60a4efede7eb127726f5e72"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "6fc8bd8e343ccaa7d2cdc06b473e0285"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "88109e994ea6b77f84cac4d4419f210e"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "a27d13eec0755d73c69fc78540908d5b"
  },
  {
    "url": "api/stylus.html",
    "revision": "dc24b908e419e9623eda2ac82e8b39ef"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "daec388fd10e9644e36c9fe479afcc1e"
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
    "url": "assets/js/app.c6771d90.js",
    "revision": "1c6feaf15b2a95621395a037570f3969"
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
    "revision": "09072c0b071677b8b632492fca483b57"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "cd22708033aef193eae01bbaa34ba641"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "abba9e19129404c9dc65462601bfeea1"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "614694e8eec2087ad927ebd93b8f5eea"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "78d517637220cb36d7c41f6e6e5dcd58"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "1d2d0d69c84e22c1383917b9726f6c40"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "539e08df88b5e5d8629e5a9e50b6be5d"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "0d163877e54ce4901912f3cd6ff28e2b"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "b9c30ab593b70c3baaf8115168fc9907"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "2a798bdd75cc7cc7db23227e8affad53"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "c2da44fcb4ad2bf508ed179dc483735f"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "8db65425ea1a60264da824ffb00a2beb"
  },
  {
    "url": "en/api/index.html",
    "revision": "c98a87538ba58c9a43002f30485a6052"
  },
  {
    "url": "en/api/page.html",
    "revision": "3a51968c8f92867dd0c31cd1c160a967"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "329edf5ab7df4309cf0858701c2df310"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "65cf6bcf8284e6abecac99eeec7d4409"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "90c86cb37387f20a45a41a68370e96e4"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "580c6f3440c6f4f8a62f17d8a0f912ab"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "b2478df5b021a77cc720dbc66073495d"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "ffc1d18c484cd0b7a723c98b290abf4c"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "685c698ef155549ef8d26ebe55ea47a4"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "4d001cf6aaaa69d2def9c9a5ff859f44"
  },
  {
    "url": "en/basic/index.html",
    "revision": "3ff6547b8d99e693da8ed6036f3acd58"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "c597f3b3a92ec4e933e32c24f2146c8e"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "18038e3d51f550daaae835730dc6f139"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "7096b8c87d3578c11fe6eeca3ec4a013"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "ca28064db2dd2755182fbfa242e7bf90"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "3c1ce29d574e780d5ff85d0934afd6a8"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "fbeed40d437de21e267310d9dce453b2"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "2379b8e94cf9b24d0194a561b26ab748"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "21a125867c53c8ca9d8c862b1c4912e1"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "ff7dda738690e0bcf387419a0d7ffe17"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "f46a6ece64934a2f03d5942b80c7783f"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "5ebef76bed011463ff2afc0b596d0a98"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "f2033c09816988ec794d49dc2c44255c"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "ec27a084046455d58c3bb36978967303"
  },
  {
    "url": "en/guide/component.html",
    "revision": "e7e0f7390fa5959dd512fe2a9f242f82"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "f8a9e61e28160f8a2d161c7084abc8bf"
  },
  {
    "url": "en/guide/home.html",
    "revision": "3ea88437291a9c26fb11bd61f2561fad"
  },
  {
    "url": "en/guide/index.html",
    "revision": "2250ff2404926b9cf643d148aca10eee"
  },
  {
    "url": "en/guide/install.html",
    "revision": "235f5f16ad39893ad913c27b529f0201"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "24015086e4ba1294b6fee35a9d9b54b8"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "518d556b1c457080c1241cf8da671b0a"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "08c7380a1393c87fe8f74a4f9382fa0d"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "d6c37ce864e23ba7aa9625d7d60e7329"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "30eff0a91b669eeb904a3e797c6e6b48"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "55a1e9ad124a06d91df51aa7534cf72b"
  },
  {
    "url": "en/guide/page.html",
    "revision": "0d98bedce7f6c51f404d812c0c764b23"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "8f06130c405dd7a47ce1cbdd43ae486f"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "12755627082c07f51a81c30a43db5bbd"
  },
  {
    "url": "en/index.html",
    "revision": "296e3cdda1538dd42d619b5ba7925ffd"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "b07f2a36546834b406c37b0e0e3a7aa6"
  },
  {
    "url": "guide/comment.html",
    "revision": "3b85e5995a2801ba6ccae499bcb90876"
  },
  {
    "url": "guide/component.html",
    "revision": "c5d701204b6a1283d2a41e482240abf8"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "d1e603ea49663153b0815f921e02132f"
  },
  {
    "url": "guide/home.html",
    "revision": "51323b1b39d7a2c032ae6b880789ebeb"
  },
  {
    "url": "guide/index.html",
    "revision": "1043491a9df04a80cbe09a1dd3e33758"
  },
  {
    "url": "guide/install.html",
    "revision": "336646cfdce7fe3c0840f7967d7f25f7"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "9c47d1f8ae0cd09874bebc6b23f9f5f6"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "4201f3879414bbb7c121dfa834dd40ad"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "874879120a146a4f2230bb6713e2078e"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "ef1a84c53346953167e9b11650814fb6"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "14f3fa90c8b003226e74febf63d5f394"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "8a7c599bfa6ca13ff8bc3359feb8d057"
  },
  {
    "url": "guide/navbar.html",
    "revision": "3dbdd00a7db73e9514b58f3a7b8d4685"
  },
  {
    "url": "guide/page.html",
    "revision": "f59369c1df233f2aaa11723f3f264e68"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "9de53931092ae185fea6362d59960a6b"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "e87ad9250be39c7d7f8e85c79f76e254"
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
    "revision": "97f1bef02d22a6f47254870bd7a21fa9"
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
