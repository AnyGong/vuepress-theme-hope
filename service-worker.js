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
    "revision": "e773190a731407608bf6707c51c4ac49"
  },
  {
    "url": "api/index.html",
    "revision": "74e6464591905ce3a5c7e9944b1df507"
  },
  {
    "url": "api/page.html",
    "revision": "21972ccbcacc55c4ffbbf228711f8a4a"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "4c66dc0b110446bbf7e5a1542559b1c3"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "795119f2f5e95b2926b4a44810d9321a"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "ef38f9d534b7ca2f80c977f729745928"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "ba3628ca0af27534d7435eb521e178f0"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "83b58d2a62f6a4d322cf66d350139ac6"
  },
  {
    "url": "api/stylus.html",
    "revision": "6d09d3ec5e5cba54ce9f96f72e249dba"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "9f368cb203e0ced52bd00a9fdfbbedd7"
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
    "url": "assets/js/app.1807b5aa.js",
    "revision": "79f1e1a90413852f151fb2f54ba4ae53"
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
    "url": "assets/js/page-流程图支持.8b27a02e.js",
    "revision": "7f10b3c721a6779c41d225dff4a15c0e"
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
    "revision": "ee2d88e2e42f2c1633f80eb64a3faf7b"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "4f047e642a7d903de2e72b7f19d1a4cf"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "1947caad23e6841240d2d8d4ef9ffc3e"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "dcb8431b3d9abc166ab423c9f6b14f7e"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "c727b76ecf74a10d15ccb19b5e02e795"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "66357f78b6faca51a57357896667301f"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "b37d95afc5f2a582b71e41e33571f613"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "8317f500306f1f80b3bd9aa13d6e1e41"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "a49d54e047e0045b5e279cd27d4c8c00"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "e35e78f48631086ffe8c1bdea6113732"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "f0afaeb5863453e5183fbfb126dac9b7"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "dd380c98a0fa8234e000c026ce16c6a0"
  },
  {
    "url": "en/api/index.html",
    "revision": "264561b470b702b2d67bd6c661ed60d1"
  },
  {
    "url": "en/api/page.html",
    "revision": "f3b50ad49bd13f9c7f19e39c5472c38c"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "b4edec3a1224b3345bebaebe55a32971"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "3dc95082ab078351acb4b83de51f1526"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "2697ce9a2acdf63ec93062a26ab72533"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "89e499a33937c18979ec186fe42a8a62"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "3d178f9205b947c7a1d63962e1ea859c"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "0fe8c800084187e64af5bed75adcd7b7"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "b58b37ab4e43f8c26fe70259b6b15c43"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "99c65a304f5b579d6b718fbea7edbd1a"
  },
  {
    "url": "en/basic/index.html",
    "revision": "e0464904c1e02a9a01a900501ce4b965"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "bd62eaf6260ea98f6f711187340f95d2"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "1723ac1081e248bcd6235d148752aa9b"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "8d869245e5a8be2800e74cbb48aff5e2"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "9c22f087fe569f3becff2734c1a7c607"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "0e4e5c4e7091e4c98aca041c73c3889b"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "a688be1a90fb3f2e908acf1ae6c5c904"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "e836a32cab431ef09c9c85e54808a019"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "ec88f7469940c6b4de0eea3dab584abb"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "cec259746f6eb336165ac192e2f3ffe8"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "d1481c41f09f37dd2d7fa7dc0bbfa0f4"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "668bb4d3d9150ee50708b67f162fe4f3"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "65f86742bab1af37a720e10a8b6cff98"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "537fcaec4b0eba7af4b4399de9a818c8"
  },
  {
    "url": "en/guide/component.html",
    "revision": "71f4c774eb389a6af2d5c48ab8adada1"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "37ee6adbb088acb5a9f5547b171b9159"
  },
  {
    "url": "en/guide/home.html",
    "revision": "23ff176dbd76d7629a89b81e1826120d"
  },
  {
    "url": "en/guide/index.html",
    "revision": "b8597a72a662183d73130aeed2c05084"
  },
  {
    "url": "en/guide/install.html",
    "revision": "760eda04035370ea541ae5ce3e5f1132"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "53bfa076fa796be53ca12b6baa4abf54"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "73b7c889c5156617a56b789723ba2f5e"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "00b0f2f3e790fdd64bc9b2a3e63c53f1"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "51dcdac188b32082fb9adf686352a60a"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "114b6bbd4605b81b1b2237b7ad041e6d"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "f3cedda1f43bed15ae355794af4bcac6"
  },
  {
    "url": "en/guide/page.html",
    "revision": "60aa266f98d4e04dca360bd927856e22"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "0485bffbc5a52f995627234d39a447cb"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "fe3c59208dadcd0f2934af5d0e68fc4d"
  },
  {
    "url": "en/index.html",
    "revision": "58d45e25977bd959689c8edacba5e8ee"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "7f7283f0ce13b85b783731f461966378"
  },
  {
    "url": "guide/comment.html",
    "revision": "1b22944603abe91ca94ce1ef764e5d8b"
  },
  {
    "url": "guide/component.html",
    "revision": "067097d719b1e067af16014584677ead"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "f1c293c362dc5040edc56a3f24f7cc05"
  },
  {
    "url": "guide/home.html",
    "revision": "109648a557fcf106f5488a8e88a71378"
  },
  {
    "url": "guide/index.html",
    "revision": "c3fd7c422f4f7c4834d075cbea15115f"
  },
  {
    "url": "guide/install.html",
    "revision": "100a13282e4b7ec63e0be76d5323976c"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "590672ec16dbfe3abdbc70661bb17177"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "d13b36005d5bc0137b5ee56727623492"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "af333f4a6f76636b919c96f985648cf9"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "e562f132a446c82197df3f9ef228de13"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "6cd3533b73e595841cc0fef5b44334c5"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "57ef7c10e52f95f033a7b71ceec66017"
  },
  {
    "url": "guide/navbar.html",
    "revision": "f1eab8e3d5c60bf075b403121fb1f55a"
  },
  {
    "url": "guide/page.html",
    "revision": "f149595b9123ffa9486a3fb0a4a5f372"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "033f2a4c92e5f764261f709e2a3fd7c1"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "97c7a9601649ffa3df6db64d4bcf6d3c"
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
    "revision": "0b68da02956f560a567fdaa0bd1ebdc7"
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
