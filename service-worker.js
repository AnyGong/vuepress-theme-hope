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
    "revision": "448e0d96eda08d08dcfbfc28aed4f071"
  },
  {
    "url": "api/index.html",
    "revision": "8369e162aa4501e9a798ad25fa5528e4"
  },
  {
    "url": "api/page.html",
    "revision": "7f3d20aa24063de71714a8f45cd5a1d3"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "c91112fd17fd1b79ba3c9a2d9fa3f58d"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "5c3142dc1c42199b5b9ec3666928fa5c"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "5ccdc88bc9904a14e3cd158e5b3d2920"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "3014f12bb604c3ef487c47f6dad4ffc3"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "ea4986541f64ee015b9f37bbcb4ace51"
  },
  {
    "url": "api/stylus.html",
    "revision": "a22b5dfee1ba9190369eb117454f2128"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "f9d54b28681bdc3e056a8a79a33e5cf6"
  },
  {
    "url": "assets/css/0.styles.25f03b43.css",
    "revision": "4e191c81109a7f0abc6d6426a322c1b8"
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
    "url": "assets/js/79.407fde68.js",
    "revision": "c212d46fea61c67ef1d9111d4962ba4b"
  },
  {
    "url": "assets/js/80.51564761.js",
    "revision": "c19205768561ccbbf9d4912999604209"
  },
  {
    "url": "assets/js/app.33405492.js",
    "revision": "24b3e2d6fbda146cc7e611a521c7a0dc"
  },
  {
    "url": "assets/js/layout-Layout.b167d8b9.js",
    "revision": "41cb35882ba58b82b3885bafa1aae19b"
  },
  {
    "url": "assets/js/layout-NotFound.e0952e3f.js",
    "revision": "b5f9a26374630245c865522a787b425f"
  },
  {
    "url": "assets/js/page--1b278726.d77194ad.js",
    "revision": "047430219142ec4b77642cb2454142db"
  },
  {
    "url": "assets/js/page--24b68849.f196f6b0.js",
    "revision": "d4c939c96040c76dcc25dc8e728a6c5e"
  },
  {
    "url": "assets/js/page--298eb4e9.35757c9b.js",
    "revision": "7e410a43253bdabcdb1a769416af227a"
  },
  {
    "url": "assets/js/page--33732ef1.7c0ce721.js",
    "revision": "cfe5c46ad4bfb4429ee4a16075eb5681"
  },
  {
    "url": "assets/js/page--608d80cf.0ad7647f.js",
    "revision": "64a5096d2b01bef7778cfccae02dec4d"
  },
  {
    "url": "assets/js/page--b64dd6ee.08d2b4e0.js",
    "revision": "ce9e7efaad1b2c0307446525fd1c573f"
  },
  {
    "url": "assets/js/page-About Vuepress.5cde1765.js",
    "revision": "e6a0fbbe34270123ba01c5af43115324"
  },
  {
    "url": "assets/js/page-API Docs.fe98e7c4.js",
    "revision": "5a212ed4921699eae5ff3a8d26280e7a"
  },
  {
    "url": "assets/js/page-API 文档.28851384.js",
    "revision": "5d40a9caefcbe9a14b342d787d6b4546"
  },
  {
    "url": "assets/js/page-Basic.d5441810.js",
    "revision": "81983aef9fce3ed14387be2b17345cf0"
  },
  {
    "url": "assets/js/page-Breadcrumb.ead8bed4.js",
    "revision": "6172a6e6e8e72a09652ddfe7cd5346ae"
  },
  {
    "url": "assets/js/page-Comment Function.cbd7f601.js",
    "revision": "58abacb726741c80a812ac0ef95bff63"
  },
  {
    "url": "assets/js/page-Default Theme Config.85fa89d0.js",
    "revision": "5501a05e39d85a1cf3c3b3d69b7456ba"
  },
  {
    "url": "assets/js/page-Emoji List.f3155f2f.js",
    "revision": "6f4c5b6b0a46e2d5427f2a320c717426"
  },
  {
    "url": "assets/js/page-Emoji列表.127fcf7b.js",
    "revision": "cf5e7b01bc034de76878a2195071b640"
  },
  {
    "url": "assets/js/page-File Structure.e04ebaae.js",
    "revision": "1d4353886f32b8231b8d20eaf156ae9f"
  },
  {
    "url": "assets/js/page-flowchart.f4a981a1.js",
    "revision": "58f1f466a6bfe02c3d8db4d5f6623de3"
  },
  {
    "url": "assets/js/page-Footnote.864cc7df.js",
    "revision": "e3f96f6a6ecd6c6675cf75c4a51bf3ca"
  },
  {
    "url": "assets/js/page-Fullscreen Button.76028f2c.js",
    "revision": "81a72c689acd8608ad2170b0dc99291b"
  },
  {
    "url": "assets/js/page-Home Page.1e54ccbb.js",
    "revision": "616ba7b6ed4b20aebb1a761a7799c061"
  },
  {
    "url": "assets/js/page-Home.de189a08.js",
    "revision": "1a9a6b4ba923915d60fd006a7129e4fd"
  },
  {
    "url": "assets/js/page-Introduction.d2c851cf.js",
    "revision": "8b4faa659d259a2ca45f94ddac091c89"
  },
  {
    "url": "assets/js/page-Markdown DEMO.3a06553e.js",
    "revision": "7cd43b19e9eaf823a6cc3226d51a0b81"
  },
  {
    "url": "assets/js/page-Markdown Introduction.6262da61.js",
    "revision": "2f6b74e896c9fd1afc58f4e1218b45d8"
  },
  {
    "url": "assets/js/page-Markdown 中的新语法.23440438.js",
    "revision": "5500d79aed220839ea3104a6b639cded"
  },
  {
    "url": "assets/js/page-Markdown介绍.20ec7614.js",
    "revision": "0802a164107df11c01c0cb1ca32ac945"
  },
  {
    "url": "assets/js/page-Markdown示例.730f758e.js",
    "revision": "26abdfd9a86e1143261140e4113dc6c7"
  },
  {
    "url": "assets/js/page-NavBar.291fd78f.js",
    "revision": "cf199e66d5e7b5fc319743be577274af"
  },
  {
    "url": "assets/js/page-New Component.464797ca.js",
    "revision": "7b13520d8f514c2a200ffece74e86264"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.bd5ed6fc.js",
    "revision": "d85de4f4aac8902c96626dd150289905"
  },
  {
    "url": "assets/js/page-Page Configuration.0e8a4be5.js",
    "revision": "1963b48c7cc0f8aaec211c1083c32df4"
  },
  {
    "url": "assets/js/page-Page.31a2a542.js",
    "revision": "5112628dec0fc5a59c88af43cf9196da"
  },
  {
    "url": "assets/js/page-Plugin Description.af53feb7.js",
    "revision": "85b3a0b9eabb0fdb895192d4d5c64ddf"
  },
  {
    "url": "assets/js/page-Plugins.6092b61e.js",
    "revision": "b3bd3358afda66a23fb808ed231d5224"
  },
  {
    "url": "assets/js/page-Sidebar.7154b9a1.js",
    "revision": "dd0d0c4166ae36b1fca203832dbdb37b"
  },
  {
    "url": "assets/js/page-stylus configuration.08c5efa6.js",
    "revision": "c6d18f47b2b8073af5445ebe6b835a43"
  },
  {
    "url": "assets/js/page-stylus 配置.def778f3.js",
    "revision": "4dad2d204344ad89a9266c43cb3c7d73"
  },
  {
    "url": "assets/js/page-Superscript and Subscript.ad3ce8e0.js",
    "revision": "bdfda60dace29da4803e81e54469d23e"
  },
  {
    "url": "assets/js/page-Tex Support.fe493fe6.js",
    "revision": "de3d92f2d5a835ba61a1196ac05760fe"
  },
  {
    "url": "assets/js/page-Tex 语法支持.54484e59.js",
    "revision": "67eeafcb3d32e831b4ea8f2966c40d88"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.351d823b.js",
    "revision": "d3dd44c90a7db07fe40eabf7f2a4ffba"
  },
  {
    "url": "assets/js/page-Theme Config.2e419429.js",
    "revision": "0510dd45ae4859c5dea5b5173e861ef8"
  },
  {
    "url": "assets/js/page-Vuepress Cases.b987be81.js",
    "revision": "fead4f1b54c4ce00a944ace36dd8e344"
  },
  {
    "url": "assets/js/page-Vuepress commands.dbf23157.js",
    "revision": "3bd714b8f82c6ff10c072e8645fe9579"
  },
  {
    "url": "assets/js/page-Vuepress 案例.e9742989.js",
    "revision": "c5999d298593ba2096e783cced21dbde"
  },
  {
    "url": "assets/js/page-vuepress-plugin-container.301ea37a.js",
    "revision": "f713743d59e401b4606ea9c784478968"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.4033a99c.js",
    "revision": "3593cfdc91e322018d6a32c765312925"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.6a4bf5a6.js",
    "revision": "f1790f586e910f656064e36e6f831cd5"
  },
  {
    "url": "assets/js/page-Vuepress.451288ea.js",
    "revision": "3f8892b03871b4d2e6996ee2e2f60b4c"
  },
  {
    "url": "assets/js/page-Writing a theme.187b8e28.js",
    "revision": "451e460f6a8b72c82e94bda6e738b162"
  },
  {
    "url": "assets/js/page-上下角标.92f57dd6.js",
    "revision": "f9d3c865c8a35911a321249729adf0fd"
  },
  {
    "url": "assets/js/page-主页.252c5bde.js",
    "revision": "196ede4c4526867de38436fd75a00b17"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.43b4b5a1.js",
    "revision": "c2923799ab0677efc1bf1b759507d138"
  },
  {
    "url": "assets/js/page-主题配置.0d16c015.js",
    "revision": "734586be11b03916ac88a9ef956e396b"
  },
  {
    "url": "assets/js/page-介绍.0603d224.js",
    "revision": "b73aa37dee7bd99f05cc1fc9734e0bce"
  },
  {
    "url": "assets/js/page-侧边栏.900445f6.js",
    "revision": "035a75fa575718f2deca9872ba6b5554"
  },
  {
    "url": "assets/js/page-全屏按钮.9f6a3785.js",
    "revision": "741821d0d9ede5e041c92f868b27d5d6"
  },
  {
    "url": "assets/js/page-基础知识.6948de65.js",
    "revision": "928c47fe92b26d33f657327b3cbaf7b4"
  },
  {
    "url": "assets/js/page-导航栏.9d2b03d8.js",
    "revision": "a367ae9973f411e29304d162ae8bab09"
  },
  {
    "url": "assets/js/page-开发主题.602b5b45.js",
    "revision": "5de983ece168b63db47cd751a82d5cc1"
  },
  {
    "url": "assets/js/page-插件.b48e810e.js",
    "revision": "5cb478d650251eb623616d588ac16376"
  },
  {
    "url": "assets/js/page-插件说明.483b63f6.js",
    "revision": "d12f2735a6e7ca8dae47ef6154b34123"
  },
  {
    "url": "assets/js/page-文件结构介绍.ca0127a4.js",
    "revision": "e5759af20bafc3d5addaf6b161f61613"
  },
  {
    "url": "assets/js/page-新增组件.684bce0a.js",
    "revision": "98e478aeb219dcd889acba6ab814af76"
  },
  {
    "url": "assets/js/page-流程图支持.36ad263b.js",
    "revision": "90f2a2ad473b5bc50b6d752c3a969b29"
  },
  {
    "url": "assets/js/page-脚注.539dbbb0.js",
    "revision": "f67fafa210166c8b60c9f94547338e42"
  },
  {
    "url": "assets/js/page-自定义对齐.63a77170.js",
    "revision": "975a9a0337e06a41a180ad884fe84292"
  },
  {
    "url": "assets/js/page-评论功能.d96acec0.js",
    "revision": "b8b4e38ddcf7af4813c5489a2381d74e"
  },
  {
    "url": "assets/js/page-路径导航.99dcfe22.js",
    "revision": "0402a8d87e187b51b5b1cded1d7f4b36"
  },
  {
    "url": "assets/js/page-页面.a0191292.js",
    "revision": "7d7c85bdf10986d4c5056b2cef932c4d"
  },
  {
    "url": "assets/js/page-页面配置.93226282.js",
    "revision": "00fa3420f3f7c8c17639e624683e37aa"
  },
  {
    "url": "assets/js/page-项目指令.c20e038f.js",
    "revision": "c5d00a7160dd0b233d490e6864d7a4de"
  },
  {
    "url": "assets/js/page-默认主题配置.5f65f978.js",
    "revision": "ddf99202dbd0b272f428e8ce3976bc9e"
  },
  {
    "url": "assets/js/vendors~docsearch.bbb8c9ce.js",
    "revision": "e7f3246387057376dac75c6e0585b5bc"
  },
  {
    "url": "assets/js/vendors~layout-Layout.06af47ec.js",
    "revision": "703e4ec128987ad0725109930023da42"
  },
  {
    "url": "basic/index.html",
    "revision": "e5d86347560b8dcde7ed75bdb2f21f7a"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "711f79612510560662647eff575d0a43"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "3d5c72b7a4704afa584c207da8de7992"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "d37c1c80baf73c9cc271022e632a4444"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "61b99f6d6d63fcb4244e3f405f45c8b3"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "4f001d51b2586385642994cb6715270b"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "8cd57ee2a9edcd6a077a2892ce6f650c"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "5183a8966c5d41e97d1deeeb27944388"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "2c024cfdf19e3de5ea680cdefc7dff56"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "2a151122d3eaa4234d6741f7455ca102"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "ff5469fc5a5ac06535859ddd3d574099"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "51a52ca680a72c1ebd3fbaa09ad05858"
  },
  {
    "url": "en/api/index.html",
    "revision": "a487e48c4df7f88029a146a37567340d"
  },
  {
    "url": "en/api/page.html",
    "revision": "1f50fb0fb056748e1deb7c0bfc57cf5d"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "65c15e36158bdd88b3ee89502c5686c7"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "6f7bdf08b5968c85f169ce64e8aabcb5"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "1e7a6662c15f496af519c158f4a27886"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "594240112c9ded3b99de8f25fe0100b4"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "7b1b455abe4fb1573082c5fca165d73d"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "deb29963edf79b796507e7a8aa86f247"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "f11ca2e0aba6a6eaa5020058ec2774a9"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "89695baba2ac874bdce74e43fa6ac8e6"
  },
  {
    "url": "en/basic/index.html",
    "revision": "8eb844ed276559322bd70fdb6952b898"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "bb9102e93c7cc5aaab462fcfdd35e338"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "d6bbbb3e393cf9723938f8b40740eb11"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "0de9fd34561cc63d62b722db44483066"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "44b32f4b03a0322188d9ee943d395af0"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "eb9f3c95a57b5e9ed6a382727984584f"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "29959fea12c3afa12c08b4a63ffd3976"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "6043bf2e79ec45943e35835b0ba97468"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "0e41bbe494687180f1109b87af848c0f"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "91bdc6caebf79651b076a586377b0f2f"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "396ef8b0d6c9070eeb23f91ab940850b"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "e6013eada842fb474ec3523ae7bf1187"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "93a4daab051bb53dfe085eccf219b100"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "0a2c3897930f9407ca15a747ba0b042b"
  },
  {
    "url": "en/guide/component.html",
    "revision": "cadf6d671bc98247fcbafcd9111b8606"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "4c843721a73fff52dfe62db7fb93cf02"
  },
  {
    "url": "en/guide/home.html",
    "revision": "d2a547a0126b9dea5c445fde3ec624d7"
  },
  {
    "url": "en/guide/index.html",
    "revision": "4e2f064e4dfcb8d8bf13f566bbc8f4ae"
  },
  {
    "url": "en/guide/install.html",
    "revision": "01e31009a432fcce97ae21ecf0d73f85"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "c4c33f63e5544f8b4cdf74f33c536cfd"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "563e2bcbcd21d213017df5af8431141c"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "a976210143963972f9a5825b3835cf0f"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "6c95be20610fdc97e016493b05f705a4"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "cc0efe50fbfd74e911ec694cd2c77946"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "439e132033d5f06836cc4421c9d6f6ea"
  },
  {
    "url": "en/guide/page.html",
    "revision": "ef3d2c15cc013fc1001f1390a805f687"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "f936637b25aaaba1d45d617113e193d7"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "695c8b44d74654b3c8fefe186232deb4"
  },
  {
    "url": "en/index.html",
    "revision": "cf549473ab91b08aff0491e8bcf75017"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "d0c0a54009ecd9fbf03c4e7b53ce28f0"
  },
  {
    "url": "guide/comment.html",
    "revision": "e0471a98d58e07a12b4acd7844a375be"
  },
  {
    "url": "guide/component.html",
    "revision": "4ec5f8c8969a7d89a9a7862c88cc63e7"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "62a36e8816b57812e93eb69154ee8531"
  },
  {
    "url": "guide/home.html",
    "revision": "923b83141889f49ddc1c89fd07e3e72a"
  },
  {
    "url": "guide/index.html",
    "revision": "bf21a927db6b46442b36ffeff549610e"
  },
  {
    "url": "guide/install.html",
    "revision": "b0817f226643251368f0cfe4a5536879"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "e8b6b27b71d5900911a65623ce965f57"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "407d0225070f212510da3a8b20b340d0"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "756f731b5643b589161be8c210953bcb"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "c1a9cc16cca699ed37310117bfec1a02"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "00a521675af3f85baefd5203e675b6fc"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "984cb44d3f2b07332bed01cf07cba2a6"
  },
  {
    "url": "guide/navbar.html",
    "revision": "26f2c14fe7d7592709feafd14ee9d730"
  },
  {
    "url": "guide/page.html",
    "revision": "ca935b7f1ce92f6238752af75686e7d0"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "66db5f65f3e5e93739550e359a254119"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "e5d26c7bc4f69d22b9533d81659cb164"
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
    "revision": "963f2b156794a6a2179022e9b389da93"
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
