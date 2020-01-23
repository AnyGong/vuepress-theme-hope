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
    "revision": "ed9aeff655581ee5478cb7b2a0fe2c50"
  },
  {
    "url": "api/index.html",
    "revision": "f3120816e2cc88e0849e38b02cb1dedb"
  },
  {
    "url": "api/page.html",
    "revision": "0baf2bd43ef7127788aa9a22b43f3479"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "6fc749a6f80f14d7d99fe07d55c526b3"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "c6a3f7837b52377a0cb5a215c1da1b85"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "bc50cdc3bb70761b8992e234ec63ba16"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "54c1eff899a5292eaabe2167934f9a8c"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "d98445e8c6be1d3a2bd838c10a5f0807"
  },
  {
    "url": "api/stylus.html",
    "revision": "7627761889b7c37aade8d6452b5eb4c2"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "0188762e94136ead580e4cc032bef587"
  },
  {
    "url": "assets/css/0.styles.ae02d6b8.css",
    "revision": "52c3ac6566836b96483ca37c73d373ff"
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
    "url": "assets/js/app.8a658546.js",
    "revision": "fab8553e13a76dc4c1002388a84511ae"
  },
  {
    "url": "assets/js/layout-Layout.f1c0f15c.js",
    "revision": "41cb35882ba58b82b3885bafa1aae19b"
  },
  {
    "url": "assets/js/layout-NotFound.cdc5d3c4.js",
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
    "url": "assets/js/page--b64dd6ee.5fbaf9d5.js",
    "revision": "6750d257fbd0831af597ff78f9326de0"
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
    "url": "assets/js/page-Breadcrumb.9c96353e.js",
    "revision": "fbbad3a2782cd65510024dc4a715e8f1"
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
    "url": "assets/js/page-File Structure.97e98f3b.js",
    "revision": "3ea5625785ae72e3fa19ea6b9bad75ed"
  },
  {
    "url": "assets/js/page-flowchart.f4a981a1.js",
    "revision": "58f1f466a6bfe02c3d8db4d5f6623de3"
  },
  {
    "url": "assets/js/page-Footnote.c93ab42f.js",
    "revision": "a31cc02f74b678f63a4a50298fd38b3d"
  },
  {
    "url": "assets/js/page-Fullscreen Button.76028f2c.js",
    "revision": "81a72c689acd8608ad2170b0dc99291b"
  },
  {
    "url": "assets/js/page-Home Page.8e465a27.js",
    "revision": "f6a2093cc6e3dd66dd6a88c48bb75ec3"
  },
  {
    "url": "assets/js/page-Home.20d6ecd2.js",
    "revision": "32df88235931fc1605c653f4ab2a9e05"
  },
  {
    "url": "assets/js/page-Introduction.d2c851cf.js",
    "revision": "8b4faa659d259a2ca45f94ddac091c89"
  },
  {
    "url": "assets/js/page-Markdown DEMO.ac7edfb9.js",
    "revision": "f70d24a1233e3747200312f6017288c7"
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
    "url": "assets/js/page-New syntax in Markdown.26a1f22a.js",
    "revision": "147e85b07c468569d9b80b4d3a343414"
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
    "url": "assets/js/page-Plugins.0379f4af.js",
    "revision": "163078c47ab63d886dcf15eee21dea79"
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
    "url": "assets/js/page-Tex 语法支持.75eb6401.js",
    "revision": "55afe4403b5dce135e9215af922c8dd8"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.ea3eade6.js",
    "revision": "7aea4a16075ac295fd92fe2f2ba763e2"
  },
  {
    "url": "assets/js/page-Theme Config.b9bf703a.js",
    "revision": "b62eea69f99e6ce9b6a22c950a5e4347"
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
    "url": "assets/js/page-vuepress-plugin-container.056c575b.js",
    "revision": "586a7fe6eb6878636ce4778ed94d41c6"
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
    "url": "assets/js/page-Vuepress.fc5ff688.js",
    "revision": "3a456b2734111548a2d657c30f4c3d95"
  },
  {
    "url": "assets/js/page-Writing a theme.187b8e28.js",
    "revision": "451e460f6a8b72c82e94bda6e738b162"
  },
  {
    "url": "assets/js/page-上下角标.4ee20ce2.js",
    "revision": "697d5b7f83846568d356972e4315feac"
  },
  {
    "url": "assets/js/page-主页.af279a7d.js",
    "revision": "41abc663f1094bc7d03aab55cb6a7c28"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.e1684d73.js",
    "revision": "4211c506e0c4084c83335a374fdb01b3"
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
    "url": "assets/js/page-侧边栏.67d61e6d.js",
    "revision": "8f960dc02f5b81788eeb0398d0ba695c"
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
    "url": "assets/js/page-导航栏.842dce2f.js",
    "revision": "f188dcf97a5047c6f3532dc040085a2b"
  },
  {
    "url": "assets/js/page-开发主题.4a4c907a.js",
    "revision": "9dbf2a0784ba6dd348cf6153f11a3ad2"
  },
  {
    "url": "assets/js/page-插件.e3e58bc9.js",
    "revision": "ae12e647ee129ea1d396cd0e92298228"
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
    "url": "assets/js/page-自定义对齐.edd3165e.js",
    "revision": "d8d21745a73aea7f27737d6d81c9bf67"
  },
  {
    "url": "assets/js/page-评论功能.6cd4a6af.js",
    "revision": "6593aaa584f774cb6153c8b1de0baf97"
  },
  {
    "url": "assets/js/page-路径导航.4bfbfc4d.js",
    "revision": "215515dea15c1898e6edb8b0857882fa"
  },
  {
    "url": "assets/js/page-页面.a0191292.js",
    "revision": "7d7c85bdf10986d4c5056b2cef932c4d"
  },
  {
    "url": "assets/js/page-页面配置.af89954a.js",
    "revision": "716b3ddf109c2d888fbe57b08dd5c49d"
  },
  {
    "url": "assets/js/page-项目指令.ba6a6dc7.js",
    "revision": "c0b4e3a44b1be5702b76065901866198"
  },
  {
    "url": "assets/js/page-默认主题配置.f28402b3.js",
    "revision": "2f9f2ab51c3e09c880c67173c5d327fb"
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
    "revision": "5aa1e45a8b448cbad9b3a75892428420"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "54e97680bd98984ded07b0c13ddbd1d5"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "00a25a36c0dd43c43723c77da3b58edc"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "1e48543cef7c1004dfda05914f8acfa5"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "4e635a915a9911cc4f7e057555619e95"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "cc192e1e2540ba7f7d2fe75ee125b339"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "94f6a0878fdd84d3510d26eeab9d335b"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "7f5c64b66fe528faa3d6956a0d65d42d"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "0c785a0b549f4e9afa1ee15c6ca44015"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "c07f8a49c4c9886a250c692c4d474b4a"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "f1e47226393e46d7b65a168101a4d26e"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "255a36755c9082b5b616e0cbae9521f8"
  },
  {
    "url": "en/api/index.html",
    "revision": "1534486b2416563c4c0afeb46257e64f"
  },
  {
    "url": "en/api/page.html",
    "revision": "56f908defa0ab8736a4dda8e047fadf5"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "4de6ceff2d0bcd136423ec1b9e042e31"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "d4356f9394c231c56ce70c2bef56289a"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "73c818cac90bd38e6e374c24fa3ed2a7"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "ed0ebbbad957f7b5fe1324c131784f0c"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "ccfea7b1692e27100d078371d09ad502"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "403ae1210fd57207737b802952ed3f27"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "1a6db9b8957142b38a21d5d89d533dc2"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "59b0a1faa26fdff46f2b54bfe7ad5d61"
  },
  {
    "url": "en/basic/index.html",
    "revision": "e86417bd0dfcb6c3f756c770456d1d8c"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "381a9a66ebbc62a3504e6e7e3f016b9e"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "8ae96281cccddb22196abce5f5e0a591"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "30177fca928befa90f31b3b048486ce6"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "261b1164e5f375de694cdc9eafa284d1"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "4015c7c99a2027c436d3173fd7b6a8db"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "77fcc56a7aa2a9a11079a4625e6a2fc0"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "7558bab8b1801bb9eab156992d8eee42"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "68101a8a1c3b2e7dfb6b6dc330bef44a"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "b57f5acd9c2ecb11de729e70d38f3e32"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "90c41e121104fba18fd919c95437aecc"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "95315d1a90c561113b781d096b73af78"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "35cbc981806bb0e41d8f583d93e5d9b4"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "0e85e44996482df6aab4b0ad28da94b4"
  },
  {
    "url": "en/guide/component.html",
    "revision": "e361c894d76c21d2071285829919737b"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "1b47d75f5f38a136d7e68c1a8c60c0d5"
  },
  {
    "url": "en/guide/home.html",
    "revision": "d1579d7e7fe27040446bd1e7039b9d03"
  },
  {
    "url": "en/guide/index.html",
    "revision": "7c07c6a24a80e0de88144df745104d8d"
  },
  {
    "url": "en/guide/install.html",
    "revision": "f4dfe413aa9544a39bdb868e35dfdeb8"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "705ee82819a0c51a88250ecdee30682c"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "74487f890d61d53222c58b2a2cf93952"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "ad0df5cbc5e580b8ada9ede33c5d5c62"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "852cd20f10bb86e31fa1385a046c5810"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "b8025e16717e4b965a69ce85d6d84ad6"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "f15c0d3f7fb0558e47253e7d600483f1"
  },
  {
    "url": "en/guide/page.html",
    "revision": "68431be08d3563fd9f04fc887a2dba5b"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "17de275202e8c18ff5a67210da2be43a"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "1533859032c6d5da321ca627a5c2d4a8"
  },
  {
    "url": "en/index.html",
    "revision": "9432114f382e3401970a2749a23551e5"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "54d08f38ab770226c386a00efed8fca9"
  },
  {
    "url": "guide/comment.html",
    "revision": "00e462a809fca26fe62dd38210ee5bb3"
  },
  {
    "url": "guide/component.html",
    "revision": "2b71bf45f7a1178ef6f7bee2e91d4ed7"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "0e0d721ec60fe31ab4ea8e697f145966"
  },
  {
    "url": "guide/home.html",
    "revision": "3ec36daa8034cc6a7347c60a9ff89c87"
  },
  {
    "url": "guide/index.html",
    "revision": "58ce6f5b971c72ee4486752c945ce4a5"
  },
  {
    "url": "guide/install.html",
    "revision": "793dea55dfd574a05d4f42cb7bb0329c"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "034436d2bf936dc349ed52923d3fb50a"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "bf28b9454a3af6fa3c42ece008017cc6"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "e98762baba4ad2cb0447c6371d4bec4e"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "d93b0a884d5189d1e6a48c6feaba1938"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "5294815e9ec3ec7a6d4fa6d5504adb29"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "5bb2cba2e144d643b0b6ad27bc760519"
  },
  {
    "url": "guide/navbar.html",
    "revision": "a25b158e83c0d47a10ff9e4d73c51b13"
  },
  {
    "url": "guide/page.html",
    "revision": "b6ba5f625b7e6c5c7ace4fc67f545b10"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "a4afbd1eed8c76573ed7aae9d77c2240"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "3f38ebec2eee708714722ead6ed6f462"
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
    "revision": "6c7b2e029d51f569ebefe35d30a96e2b"
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
