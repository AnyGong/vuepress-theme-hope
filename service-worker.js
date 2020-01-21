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
    "revision": "3bc9207381a107081dde478bf19bdcd5"
  },
  {
    "url": "api/index.html",
    "revision": "4f077c0c61252834c92018af0798fae7"
  },
  {
    "url": "api/page.html",
    "revision": "a670435b1e1c88c51fce559eaeb01b2b"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "84bdc4adb148bdce99457d4d6e676457"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "15ecdee7963ee429cad88578025ff48b"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "c76bcd33209e424c0847c869a67cc95f"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "104531ce001599dcae91fd5278091715"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "cd5baca8716b91eb4f62460e7616fd80"
  },
  {
    "url": "api/stylus.html",
    "revision": "6d10677989e97802f7247a3c6bdf421b"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "86492c6d4c7a8ba52caecbdcafce9392"
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
    "url": "assets/js/app.e57ef644.js",
    "revision": "c6887e2f711229cd132f55e7247da0a0"
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
    "url": "assets/js/page-Markdown 中的新语法.52e59d2a.js",
    "revision": "180389100b01e0287c0e96a534b0d02d"
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
    "url": "assets/js/page-vuepress-plugin-container.d121480d.js",
    "revision": "fd0bbe5ec4a104d37c0268b64fd51908"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.85bc4846.js",
    "revision": "00fbb3bce2f6e5fbb8bacb93345459bf"
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
    "url": "assets/js/page-主题色与夜间模式.9187efe4.js",
    "revision": "f9c353068f469921fc0a4a3dc52d6e13"
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
    "url": "assets/js/page-脚注.bf94161e.js",
    "revision": "b57baa37a81668b869c2777b3b8a75ef"
  },
  {
    "url": "assets/js/page-自定义对齐.b35f71f7.js",
    "revision": "82ad552d80345f37284e7f3ef3f6a1e0"
  },
  {
    "url": "assets/js/page-评论功能.48b727aa.js",
    "revision": "d0d4341213edb514076560a66cd3b5a9"
  },
  {
    "url": "assets/js/page-路径导航.c7d2038a.js",
    "revision": "b12c83eaf6a59ba3ec40915f3602661e"
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
    "revision": "6987bb3c735c58aecff92dc8de00fbba"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "66b4abdfacaed3c529f70d1a2ae5e389"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "57755e3e09d09fb9e262a2e1b43f7ac4"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "19ee62cc3c216cc0c662fae43eae274c"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "9a2abc88d54b79df778e45a5915379c2"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "ccdd59efac6eab1b1d8b45fa5c572e16"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "b6043ac6d93e870fe942956459249912"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "1bd25eaaca4ea2b44847bad6c85f1917"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "d9e697bf46f213b2aa62893fa3d91e77"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "e7289718a3fb998264ea2724c772df7d"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "fef062fbc601e7e1b9abb9fbfa88d450"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "cab8c461ef68f056d872dbd2d7f9742a"
  },
  {
    "url": "en/api/index.html",
    "revision": "274be29b98c26c91d9aba7094d06d58b"
  },
  {
    "url": "en/api/page.html",
    "revision": "3e4f245721397d4dc4192afb7489b3a1"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "be567f4deed986d9d9a09780d14838db"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "0a47b1accc7ad9e7282da4387d746a1c"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "9790667e93f34a6503527c6251de70ef"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "7f8b33ba69ea407a1deddc7fbf7f7a68"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "13dedb155cb4a9c266203a8e64413e2f"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "9a91b7d3e54fca797ec70d266a687147"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "5a0f3d0bf0163d1f453cde0fff146209"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "dbf0f3af5ab61b719f7c3b97c41b86c6"
  },
  {
    "url": "en/basic/index.html",
    "revision": "bee6a131b1ca20ab53d19825922e1f89"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "23e86b1bf6e313b3a613f211c0ac77f7"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "37ea4b815912e6a90ee160d79d381360"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "2e775ff66f0d677df777134503e91f73"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "b0cf8f763d1e411dda4e00af84ef3a29"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "386360749b03167a0d9583dab20a7793"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "f49de5dfa33e694df249e99624b14d98"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "a9758e81d1b852c20d9aa1d61f21d736"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "99bb3d17a5233946056d965626377f07"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "004fd414fc9d488cb6fe5fa7874d1971"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "e9bbfbd6727b512c751b933af7093d87"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "106406e73140d6fe9d688ecc22862dd5"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "d6e60bec57989cf7b5abee048c3fd40c"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "5101b8b6f189314c5086462ae764f4db"
  },
  {
    "url": "en/guide/component.html",
    "revision": "00b5459cbec78012199e391a70085787"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "2791ff28befac957272eea2cc922001a"
  },
  {
    "url": "en/guide/home.html",
    "revision": "e6cfed65becf00e4931cdef3b4e20472"
  },
  {
    "url": "en/guide/index.html",
    "revision": "d5b3b5a0cac104b238bbff4f7c9a44ed"
  },
  {
    "url": "en/guide/install.html",
    "revision": "33f721dd1773f6db3449b9e1da59c771"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "3a44f46b1606b9546e72b321038bd445"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "a55b74f514c54ccea8dc40efe96e3dd1"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "253b7b81f8799653428b61d3573e256c"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "948c8842dc9a03959232fc8f661b95ec"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "e2d4c1c74ce6108a375aeefc9baf898c"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "266757b0da7daecb065207d3f413a2af"
  },
  {
    "url": "en/guide/page.html",
    "revision": "821b90b5281846e2158a75ee0bcb4e58"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "0ce38da32912fa715b19d41ddf9c050f"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "015085fbdfd202bd97337f9092e41271"
  },
  {
    "url": "en/index.html",
    "revision": "c0eded666f737f7f30b1732282f614a9"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "b2904237d0aa8ef3ccb6d18630564410"
  },
  {
    "url": "guide/comment.html",
    "revision": "5a9a2c86a7ff4655f6ca8310ec788f51"
  },
  {
    "url": "guide/component.html",
    "revision": "8e3f9dd7a651f20535ee12e2c216fd7c"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "1ccebf69b8bc5801af8e87ee6b036334"
  },
  {
    "url": "guide/home.html",
    "revision": "ce98e87d543edb592e3945bd676ffeb6"
  },
  {
    "url": "guide/index.html",
    "revision": "dd50c9d60c789fefed05df6815e4d581"
  },
  {
    "url": "guide/install.html",
    "revision": "47410d8f0b2707d74af49016751c6a80"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "e95fc3fbb19561855fd9f8903b760d89"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "e1e340e5a9d314df91d38c8925d1ed7f"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "2b6a13f0c1800f0c96405dacbfbe4649"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "64dd569fd096235c0f9874c1227da0cd"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "154c84bbaa329f346a783ce080b23945"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "15f07b94ef22c28ec8eaa9ebf8f508a6"
  },
  {
    "url": "guide/navbar.html",
    "revision": "0584175de8da427121e96c43ed5ee60b"
  },
  {
    "url": "guide/page.html",
    "revision": "3b4d4e0aeb844a08fc32a02af1861104"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "cbc019c15d72979f5f752bef14fb54f0"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "5e4d165ac9c5166c4088ce2fd4c4bda0"
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
    "revision": "a7b162a55e47623b988b3485ef4e4721"
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
