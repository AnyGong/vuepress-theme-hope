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
    "revision": "034a5b9c599547a91902d5df83a3e055"
  },
  {
    "url": "api/index.html",
    "revision": "241cfdbc9ba1d3c50dc63ff2f6732d69"
  },
  {
    "url": "api/page.html",
    "revision": "2bd21206d0bf73dfd7414ed632a02dea"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "74e0e0ff32ea66fc7944f4563117d16d"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "53e0aa49dc4a9430a26532acaaf94bbf"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "2df33b6dbb094c3fbdc55f3983efcdfc"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "d7be017475d46a8c92e9e7d8ecb04661"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "718bcabd24cd759ebb63e10e378d4418"
  },
  {
    "url": "api/stylus.html",
    "revision": "cff9e785d095d12aa8a9a7abf468d0e7"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "654b72640350fd301f761053ac0a7255"
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
    "url": "assets/js/app.a39e8c2a.js",
    "revision": "717a68f018462a6fd34155f7293178be"
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
    "url": "assets/js/page--298eb4e9.d8149e01.js",
    "revision": "0b0c29cdeb9cb37476102f9c5ebcb97b"
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
    "url": "assets/js/page-vuepress-plugin-name-chunks.71ec4330.js",
    "revision": "83b4e232a9981a5657cfa709a5f1026a"
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
    "url": "assets/js/page-主题配置.139cef83.js",
    "revision": "0cc8effcf1eddb4b6bb603a78a733743"
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
    "url": "assets/js/page-开发主题.a61ab401.js",
    "revision": "3ab1ccdcb77b8ec6af1278d86820c927"
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
    "revision": "a1c7ce2a8128f5ca166db4112ab80e8a"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "7c3d72853d62997d4b14b1fa4b3b722c"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "7c29a4a95f3f3576e1af91821b78ad93"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "ad2409414e20cc1c5507188416fe7b51"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "55f5d8dad63e924428f41f5bfe4f409e"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "c90cb2cbb568b761353a1061ef64a117"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "e6aedd2a395dd96ce368961e29db04da"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "4f3161ca35b768d13d3f16e8be8beef4"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "346aa3f302ba44fa06177f983a25fe7a"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "a990f3f97032b3f9f0a1191ac66bbbcc"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "2dfd928acfd20410cddc7a2a9fb2b56b"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "6650437df19dc7289743967bfa58df22"
  },
  {
    "url": "en/api/index.html",
    "revision": "393c37e018fa4bbecd5cbacc8fd5dcd2"
  },
  {
    "url": "en/api/page.html",
    "revision": "00eeb4f4098525f8ad4e26c47135f56f"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "2afc09fb209eb6a3a85ee5a39b947077"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "0dde9e0008d0e94b229aede9e9c9de2c"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "9532e50ebd6682176e1c848e1d08a10b"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "5638abdbbe3bfe0d6d4a5df433e6188c"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "caa69e3e024f58bd04bf3ae1da98cc37"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "686a811c7f4b2a8cfea187e43ccef4d1"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "ee58954ae6ba7228fd7f1241eef7b1d5"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "dbbd680acc6b65f5b1fb66805deeb94c"
  },
  {
    "url": "en/basic/index.html",
    "revision": "be96ce6cd28a2317810cecb1e8703138"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "56cf8244535f6ade263e1d29c10aeaeb"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "6aebb21494bce37aaa64700d189ce693"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "a7e7d3adab7de32199e85c0f25d65e81"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "9f23d6afd7c6354a8203067474ba715c"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "144b552fdd78d635d5bc389a198322a7"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "f7da3ec1b4aebb07b60cce24c7e7d51f"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "a83525d0c3eafb2c4ef5c0bebaea83be"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "813baca5cac4b20ede3e71beb10c7e47"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "52af705b6f1b3022558289cca2e8b8f3"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "82368a111cf6d4b29facfb7e9877c053"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "f14392ca75390efc9e8e2bcf2ddf4183"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "22a537a105e43622f40b628a71045da4"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "595c7bdc5a8dabf55792d5039305aa93"
  },
  {
    "url": "en/guide/component.html",
    "revision": "a3c3c089ee586d04c65b753a154ba2a1"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "399a4ea6cb541d5c360e82b73fc6d9cd"
  },
  {
    "url": "en/guide/home.html",
    "revision": "74aac2bd89642f8eda47fd0e798c8473"
  },
  {
    "url": "en/guide/index.html",
    "revision": "0621d5ec10b3312d3c0b3f6da2c4174b"
  },
  {
    "url": "en/guide/install.html",
    "revision": "addc3bde156259eeb11faeeb033a618c"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "423de7c5eedc1023cf46f5996d6ccc3f"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "20295f8af026a10f68eaa05024127754"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "108e24f4a06d54e9a6a21e48060b6280"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "fe2601df9648a47e6045aa2cb0be4ec9"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "d2f5f19c63523f94ba292b1ab5d3bcbb"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "9901bc65a46dcc845d58b4fd0c27c6e6"
  },
  {
    "url": "en/guide/page.html",
    "revision": "4ce23ff41ce002f21dd791a6f69b4c0e"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "70653edbf4190ea3c273474b8bb0fa83"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "a75dc9686491d3e13c1088609a98e6bd"
  },
  {
    "url": "en/index.html",
    "revision": "3ae484582019ec182daedc1081214a4b"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "f193f83fbdb6021c77e4017da7eff09a"
  },
  {
    "url": "guide/comment.html",
    "revision": "ebdb10577c08f1553de803f86dc57da2"
  },
  {
    "url": "guide/component.html",
    "revision": "d42dcd5673ea2fa94f120b902b3bfefa"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "f928108cc190f4e0de71b66edc791769"
  },
  {
    "url": "guide/home.html",
    "revision": "1ac88b8be9ad00b5f6bc4392c6d34eab"
  },
  {
    "url": "guide/index.html",
    "revision": "f11c5aff0e158ca9e3828710937f1008"
  },
  {
    "url": "guide/install.html",
    "revision": "3c508ab2e900f49acec2dd51818efe30"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "3f9bf6945189ed2c057b8206c01e22f3"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "4892ce9879055964f878483ce3b40bd7"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "8bd9c4274ac96cf601e3bfa36d1bc9e1"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "4a62b8a0c28d44442fdd0416c6b4b8ce"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "f84b48d64d99a0a556cdad858accc3ee"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "aeaaf963ca3273d3ceb183649546f6b7"
  },
  {
    "url": "guide/navbar.html",
    "revision": "cc270dfb23e970ca1d793824d7ca3a30"
  },
  {
    "url": "guide/page.html",
    "revision": "9a7d84418fe1a4f1c0ba4c70f972a4d6"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "9fa97a8633463da270b93e94797e36a2"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "71e78abe9405e6069d9248d2b1f561d4"
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
    "revision": "381647a4d28e36c398a40b36c439f719"
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
