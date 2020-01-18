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
    "revision": "85142c99cf2bd3e368702913f7e28817"
  },
  {
    "url": "api/index.html",
    "revision": "708f7d6a21f753e90175db17079b7c07"
  },
  {
    "url": "api/page.html",
    "revision": "2ad5aa47cf0ed110324b37d519b8d479"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "3fdb647299ad1ae73733b554d0abc5d1"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "eda230df7f2bf5998874a029465215b1"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "222e949b912dbd191e0b9a582a58eafb"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "6aed811f25f0550e4cb1b3f1e3057a02"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "1b1a6d306769f8467151e7be7631d191"
  },
  {
    "url": "api/stylus.html",
    "revision": "e7eaba49802b2417bc6710861549cfcf"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "5f011426000beed5f6350f9e8f2f7c2c"
  },
  {
    "url": "assets/css/0.styles.1233e916.css",
    "revision": "fc5a890246ff13e7815e56a72bf64976"
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
    "url": "assets/js/app.6dc13186.js",
    "revision": "2566d5dd1a359bcf1d1bab19c8a7d899"
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
    "url": "assets/js/page-Page Configuration.08082a32.js",
    "revision": "bf94ddb8ede6c2b00865cda01de9bacb"
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
    "url": "assets/js/page-Vuepress Cases.44f71437.js",
    "revision": "a4d110b2606ec499d214a283b9644481"
  },
  {
    "url": "assets/js/page-Vuepress commands.66208337.js",
    "revision": "d32adb66d59539418be1afa9bb94c25a"
  },
  {
    "url": "assets/js/page-Vuepress 案例.f72c3163.js",
    "revision": "5b844a55d3f1afec23fb442cb1df5a22"
  },
  {
    "url": "assets/js/page-vuepress-plugin-container.73f40aa9.js",
    "revision": "b9a9d306b35dfd02d7b865a323c3b958"
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
    "revision": "b2bcdee0a291dd18c3ffd6f23d746dc3"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "5f8783b7ad43ae9233d9536825f3233d"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "805e367ec86081a88f736ae9a5af3cb3"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "0257ed7596dc511fd8774a78d887add5"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "4f4c75af3189dbe362ca3432e35ae64a"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "d9eca8600fcc2def332f5f280dd89768"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "15717e0e1ed9303b9ddfa45c144d2ee9"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "4398ce0382db51ed2971b45faa41b029"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "1cbf042694f9b70d9f13443f1dac41fd"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "e622d3b8670c56f9635c1f0eb287410a"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "d9468563ad366f6d566e25a77e7becb2"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "6bf8664de094caf2c40347bfe3a38c4a"
  },
  {
    "url": "en/api/index.html",
    "revision": "5b19f22866c2b00ab0d4f9e9b3a446ec"
  },
  {
    "url": "en/api/page.html",
    "revision": "6638f1ce7db0b25ffab4829c8cb8e62c"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "34100e785852683e1aa3bd7bd9837f47"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "9878c734c34c87d38cc5d97b1395de4d"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "4e4f67868d6fe7dbc9e0e28ee8f88361"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "a7884ee4c87def60612bfbbc3cf26447"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "0d2cdc0e574a2518ba75112c23ffb28d"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "6811046ce7bfd1ab53e2b2053c5258d5"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "54af15e1f629c2426fce462b501cbccf"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "77c34387447722190d71aa44a243e872"
  },
  {
    "url": "en/basic/index.html",
    "revision": "ef38c4b1cceb18084c447f533d4cdb69"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "4f4df67753dd469005006f59e150c897"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "2f172bb09301ba1ce9908e4caeec2748"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "bbc42cb1dd7f62a0a61a084086bd2304"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "3e537195eb060b19d7f3055555f5ef4a"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "71c393737cabeda9225525f73467bac8"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "8c69177c428b330fef6141bef6cee481"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "fe4367e1d03dc17377249be188568399"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "f5b6c3d56ca97f58af0cc215fb5b2be4"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "ea96e44abf089e947da2d0333b99b43f"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "50701a625db0d7a3f8fd677dae3f9639"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "03c6eddd758ea7b3a31a985ff46a8ffa"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "80118e1fa411d5e9321f212fb843628d"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "a9067c133ced512a0caebc82c5c35faa"
  },
  {
    "url": "en/guide/component.html",
    "revision": "e8e6c0275b12d4142d60007cc1647dee"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "a3cb3ca438f8ea49e27f0e0f09d6ea63"
  },
  {
    "url": "en/guide/home.html",
    "revision": "ec91f9fe67431bb6b48e28967d9c5051"
  },
  {
    "url": "en/guide/index.html",
    "revision": "e10ee8f40c453d2e31be2fef30002777"
  },
  {
    "url": "en/guide/install.html",
    "revision": "693ee7e2bc75ca8b5a9dccc2acbb3478"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "94738d42bbc51b0aaef0cf66c5080210"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "86b8ffd6b2c9c78d12ae4be1aeb7ad13"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "025bc7b5f50f5e8a2506d8dae08c1205"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "530ee14e63e188669c68cbef78dd33d4"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "49e1c0afa3191b5680a6610f7c7501d6"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "6a775a690db6510bf6fbeca5044d0809"
  },
  {
    "url": "en/guide/page.html",
    "revision": "9bbad0c49fb3eaa82467fdc3542bf65c"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "ff3ccbfec25c2d7b8939169f73fb4696"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "5cbdc91c3024926e91c28e02fd504fb0"
  },
  {
    "url": "en/index.html",
    "revision": "3eaa6711156a0a30de0057a58267a9a1"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "e7c85295ff9d3f552796bed98f4a8ee0"
  },
  {
    "url": "guide/comment.html",
    "revision": "80b8580360ebde713d966ccf59e6bbba"
  },
  {
    "url": "guide/component.html",
    "revision": "bbc6d0ce16309f118296bf3294d8d60c"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "6f3f141cc9fae2f1e8086ba8d0081bf0"
  },
  {
    "url": "guide/home.html",
    "revision": "a3ee5eb1b4f83165314058a121a571d9"
  },
  {
    "url": "guide/index.html",
    "revision": "cfe11a6d0a40741eaba8d63bc2cea27d"
  },
  {
    "url": "guide/install.html",
    "revision": "22753a9d35b8a7b88e26c8471ad5ab52"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "187b2ff5dcab9aadedd6efc04a28d388"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "4d9440b71ee545d11350eaeb7b2a6e81"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "561a26d5e84236765a57cc3c82cbc63d"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "178eb715c0735d4f4a67ec472a60a410"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "3dd5565360d698bb30a4862cfb6b141e"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "2c3d44d994e97d8c3917a91c06ab986c"
  },
  {
    "url": "guide/navbar.html",
    "revision": "e5147f98af40107d13600f43095c3d4d"
  },
  {
    "url": "guide/page.html",
    "revision": "6f7a74bc36dd673cb74456d3de0ef471"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "7d1d3c1f7b68798e8786a4e6543e50b6"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "f04fae5813b2fac81e6da7aaeb3c2ae9"
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
    "revision": "6b9454fd9b4b0dede7d00784c7e61419"
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
