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
    "revision": "28cee0ba038f288e980527c5cc8abd17"
  },
  {
    "url": "api/index.html",
    "revision": "30fb5db79f7eeb878a2f220e5dbcfc60"
  },
  {
    "url": "api/page.html",
    "revision": "7c3fcbbf2e8c8228d9499c96c224daaf"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "d0457761041f4d06ca94dc235b404142"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "6554da66bff29627f096f0ebfebba253"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "c3580be909962175eb7a359a9f982429"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "835a8660f2fa4fcd809f7120d5b4d32e"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "0ed2992cd22993506ce457dda646b7fe"
  },
  {
    "url": "api/stylus.html",
    "revision": "1445b107ad2664befa3bb7743055e167"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "fe1aedc0b3e73eb02ed0422b0c3aea08"
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
    "url": "assets/js/app.88b6d384.js",
    "revision": "50fb211c3771c33ec00f570e3c57849e"
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
    "url": "assets/js/page-Footnote.ed953684.js",
    "revision": "d53e4d429dec40a445450a102c7ae228"
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
    "url": "assets/js/page-NavBar.1c6b4da8.js",
    "revision": "8124fcc23d49b4825a7bfd7ae2f8ed7b"
  },
  {
    "url": "assets/js/page-New Component.1dab021f.js",
    "revision": "f8d8aa460f4d73d0d69d7017ba4d7b9e"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.a64e34e5.js",
    "revision": "8f1d602cff9b871f05cd4e2cb1ed0643"
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
    "url": "assets/js/page-导航栏.6fd4ecb8.js",
    "revision": "c36ecc778fbb8172d843b6c8691b2360"
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
    "url": "assets/js/page-页面.fa2fb2e2.js",
    "revision": "cb10f14f48d870de145c2d294501678b"
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
    "revision": "1fb674e7e9bab4311c5d406d7103028b"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "58bf9a21d826c97bfe1e46facef394a3"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "fb0a8266f37e4b22f29688937f13ee51"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "43e48f971537d01a1dc11cab74c09f94"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "1f0120ccebc920a0ed6cbe8a8e088b8f"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "4f1b0a6bf310810e40a9b8733896c7bd"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "bcd42bbe060a8e67445644b677f4ea15"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "02eb7e4a9c46fd418e14c566f45cd071"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "1a92d246ebe9f5ffd4424f47ec9393f2"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "4fa9f2535445096d886331b30f47fc96"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "636f0ec4c85e137662b848db07bb0b0b"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "8db286729ae521a113df3cdc299a97d7"
  },
  {
    "url": "en/api/index.html",
    "revision": "62df934805b4dd83026c80a7c86f7964"
  },
  {
    "url": "en/api/page.html",
    "revision": "ffca6c86905b7bfc8030232aa165711a"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "166aea630221157934014373477c16c5"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "48c7e7deb057f6f59fd2844842b12a9f"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "64b3ad675f01ccf815722763fba3946b"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "f44ffdf61708ce607d54c1c791247d0b"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "12df65ec0978d68bb520af0d8a857bfb"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "28d69bbcd4578891726f02a61813b86f"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "2cb521c844b35ca9ec135dd869371bd8"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "32cfb284c90394b52c75ccc049b0fb48"
  },
  {
    "url": "en/basic/index.html",
    "revision": "27e901cf91d02fa7ca4efc6cea0ac6ef"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "5a6d73d33ba55dbebbe0431aa789208b"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "4b3102f31b51e58226e6bf93a3a7c899"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "395f01a7d6acd92b860835f4a6e56b41"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "8cadc08b9645224f4d13e5767c22babe"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "a66128f15da1cbc0e9ebf070230db6e4"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "9b50e46fd40e3e885569eaa15c38a77b"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "b8113af0ddf64eb52eb46a78d577158e"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "e2c0bb0ed8027698943010d031276140"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "208e57d1a80526de601be4dd0c779e2a"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "1af11faf013cbff4caa5060153646c14"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "7f5b3ee2697aa3ef73d738d83ac771cf"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "3d5c02a86340699bfc70b6df412ad25f"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "b7af2f559ec3c5637b8cfbb6690beb00"
  },
  {
    "url": "en/guide/component.html",
    "revision": "731f5f63f5f3e0beb928f88ec2480deb"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "94a5d1e83729073c8c8315618266f488"
  },
  {
    "url": "en/guide/home.html",
    "revision": "086ac31bef2ad7ca8cde4296c28a04a3"
  },
  {
    "url": "en/guide/index.html",
    "revision": "cdb978e94bd2901fdadc71981da3ee27"
  },
  {
    "url": "en/guide/install.html",
    "revision": "5007ad2d7f5bced2aadfdfc773619120"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "d558683ca78f9f2b458a4c243c9388e9"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "9df83d7a0ef7d5cb9e8ede36f95f4879"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "4dfd7a8070adf7c489d61a2129a5ecbd"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "72847d5707972e80d1f4a020f9564ea9"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "e4fa630a7f16c1a7e6893d49eeaf75aa"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "995355c10ecbb85235439060d4d23648"
  },
  {
    "url": "en/guide/page.html",
    "revision": "97ef597239ad39b0764e17ee7cb49493"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "b471a2a95ee9faaae445647d9a4d4c97"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "dd656bfd768dca8e6c7e7a01bcecce02"
  },
  {
    "url": "en/index.html",
    "revision": "31d0121e8ff6e39ff3084ee05e294731"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "e1b642c66ac6432c4253ccea859fc1b1"
  },
  {
    "url": "guide/comment.html",
    "revision": "eefe2041771e8fefc8f6244fd32e78af"
  },
  {
    "url": "guide/component.html",
    "revision": "895b6ee10749f5ba7988372e304e6c41"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "c7ac43540a0b330f28199009fb699583"
  },
  {
    "url": "guide/home.html",
    "revision": "a589aef6576ba5188be20e7b0c0f108c"
  },
  {
    "url": "guide/index.html",
    "revision": "9b5dbbc65a942fa1718d67e9fcb07ed9"
  },
  {
    "url": "guide/install.html",
    "revision": "1e95c030932bd30ce91f0daeff88f0b4"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "cf5ef381dfec5652f72f5e2fb444407d"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "8e7f6f17508198326a7d190a83e1dc1a"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "e32f11eb25a5b6b1222d507871fa6b22"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "299a890999d7b9b157382818e2b4a4d9"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "3cbaabddf8d897d7d98edcf124edea24"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "22a0ce95152e8c02b52f9dc937d9ad2d"
  },
  {
    "url": "guide/navbar.html",
    "revision": "7309edb14be7fcc7791cc85ef729c57d"
  },
  {
    "url": "guide/page.html",
    "revision": "ccc3e89a8daaa3052ab8019e5fd757f6"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "138df85c6890d908604044c360be0b6b"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "41bb9cd04d66f424dbcc662f5f9b65ad"
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
    "revision": "82431ac636e7bbb3171232518d5ccc76"
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
