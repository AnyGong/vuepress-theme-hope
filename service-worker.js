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
    "revision": "2b18acc8a0f0a06238072278807d9fa3"
  },
  {
    "url": "api/index.html",
    "revision": "3fa3dd2362b34fc2ae62bd06f6f6537e"
  },
  {
    "url": "api/page.html",
    "revision": "ad753c491805b073ce02d8dcc5f56a88"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "7c358c63b12a13578ba02c2e025ac784"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "0ca5e50e9074bcea8e5dcd83575330bd"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "f0164c65d2423f5ad63795f20c9442be"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "6946aa773d58576159aa738e64b9f619"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "67e2748f7dc304ad6127c56453bf26e0"
  },
  {
    "url": "api/stylus.html",
    "revision": "484f4d93e8e5cd15a2ea30c478905434"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "d9b7446114aa3915a6fcc1382ed49d4b"
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
    "url": "assets/js/app.4e93b027.js",
    "revision": "930e8953f1c268374caa465564d94af4"
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
    "url": "assets/js/page-Tex 语法支持.846deaeb.js",
    "revision": "dbaed686eb6758f6d1e2ba31fa471e6f"
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
    "revision": "93b0151f28118e6913cf0f30771ca204"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "7ffbf0b8e30b481fe6fcc29b73e3b7e8"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "46f05becb1bd91a39354e9225fda0248"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "a1f7a2f236ef6d200ab6d6493d1fe0fb"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "a882361b7bcf293b0c44befb5e4c148c"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "b047a6feed846923851a6389a3579181"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "3d3bed17ece3418f692070c7a4fc6d0a"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "d8e7fe0c65d59f0c3031e41c5045afaa"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "91716ee9691facbb93b9230e9a9b0270"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "65ea733d0101b03791d43acc7f5c2807"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "a9e981045a784676b4742130e81aaa99"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "0060687c4603ffc422e10263a33172ff"
  },
  {
    "url": "en/api/index.html",
    "revision": "0201b65ac49e1c0a38069c5779b31c73"
  },
  {
    "url": "en/api/page.html",
    "revision": "d11ebfaab74a359a7fe07932828f7e7e"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "803e94aee3507e988a8acad84bd88008"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "77cb1a321045dfa3e4f4e198acd55bfc"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "b1b49bdfd3d69ac917db6cf7f77e41e3"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "ec755cbc9dab4e796b61fce368400322"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "bff62dfb9f4cc3565699f9aef759a96e"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "4f6f8a54cf2c73e891123c2bd95c58e5"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "0fbaa8b2c95b5dceafbba23c7663d0c6"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "c5cc1957251bc7fb88b7512e9aa7bfbf"
  },
  {
    "url": "en/basic/index.html",
    "revision": "22ae432ef577faf4be029d695ce48e13"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "8b8d928a9a191bd7161e598b36fbe6f9"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "6cd50b5d000d4b5edef90d6a7aee3915"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "52f74a7cb1fd9f0b1773b5f94e614bf3"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "53fceef1997725e42a728de4de3b6b77"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "64f5bc1650c2f374b4f488faadf05068"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "5c2024a96e4ce207d249a038c58170c7"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "fe8cd5217670bd450a261c76786ef382"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "46d8a0a376eef120d3fc64d667e64b4a"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "b84cefe9e271c27150454b3ef8104b1e"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "6e2d03daa72a9789b2c8725574a7c3c2"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "d394c9a9ddf415e22017282863cf034a"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "e21015aedeaa305b5efcb0b59f8003f7"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "9cfb2f94dad1db8d124181d72226f169"
  },
  {
    "url": "en/guide/component.html",
    "revision": "79bdf83c8d4447ad64a499a22f40fdbe"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "9974e4e5f6e5e0d144a019adabfadb57"
  },
  {
    "url": "en/guide/home.html",
    "revision": "cbe09047b093b40e92535688465e4945"
  },
  {
    "url": "en/guide/index.html",
    "revision": "64846e7d850ff05cfe9e1e6e160221fa"
  },
  {
    "url": "en/guide/install.html",
    "revision": "45beb89db0f31a3dba46f0e889d9e6a7"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "2aba83895d1ca2addc06c17b8a2780f6"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "e31142a1f5c717263b8b0ba86b7c678e"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "07db011a11b00cf7f6f090789507b1eb"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "8ca09fe01936c9dc3fc59a0482b4fc86"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "11fcfb1bdc31c3ffc581a7373261d2c7"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "a228a424cf5696d4ce5f35ea11595b93"
  },
  {
    "url": "en/guide/page.html",
    "revision": "d178d35a89b08a93f0f5c19d102c2bd5"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "d2c07a9d9423bfdd4e3fca6d22526a1b"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "583cd2863be8ac17ab35408b676d1d39"
  },
  {
    "url": "en/index.html",
    "revision": "4a980f18626e03603257da09acb5a082"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "94c8f9ac4ffd47ab1426ecf896bff130"
  },
  {
    "url": "guide/comment.html",
    "revision": "c509bf583668a4b592642dffa71ff1fd"
  },
  {
    "url": "guide/component.html",
    "revision": "a3050833dc83904e65e50d9a224bd53b"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "8a87af919878991ba0eee3d3d79e24f1"
  },
  {
    "url": "guide/home.html",
    "revision": "8db791a9726da3ecdc9624158719503c"
  },
  {
    "url": "guide/index.html",
    "revision": "9a1f7abeea2fb6fdf9643f916cd58ab9"
  },
  {
    "url": "guide/install.html",
    "revision": "608c42c613e48d5b5a663ddc50dc9bb9"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "df3f113b50ec88443acfc5387bdc293d"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "2511aeebf98a2cb632ff13fc67e5171f"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "40c84f901916e0acab33982c4e0caca9"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "00f7b59cf1038b0ac94f5e092b745cfa"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "7ad593ef6a2a987c7f95a9853d47b77a"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "5f28158e7168d0ff025d99c313a6315b"
  },
  {
    "url": "guide/navbar.html",
    "revision": "1e71b2ba453a8aedae50981629c87e84"
  },
  {
    "url": "guide/page.html",
    "revision": "549067d712a29129e6ff5dbfacc26948"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "c8994e982e3b1e79b09d16664412366e"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "fb19c7a8c73ec3f81a1d13f7048765b9"
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
    "revision": "d0a04e4c16f3d0dd6917a0ca84697af0"
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
