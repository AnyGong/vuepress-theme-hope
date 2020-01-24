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
    "revision": "6b0952859dacc1bd8274661ef11e93c0"
  },
  {
    "url": "api/index.html",
    "revision": "0fb7093b54f5cc4501cda7188147ea81"
  },
  {
    "url": "api/page.html",
    "revision": "1c0a4a1ff950bbc7f2286b8547085ca8"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "637f1bc49c552dff3eeba0f6aedd819f"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "53db284929b80358d93b2c41e24ecfba"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "ece27f33ddc1b6a2afbf45dab05f28b4"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "08dbe1492a0d79ab789a2b318e2de1ff"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "97c3320c2274d91b8ef6135f0736e10d"
  },
  {
    "url": "api/stylus.html",
    "revision": "a8bc28a74bae57d4197aef57c6087c79"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "e21165c77983271c56bc8787d2b1b7c0"
  },
  {
    "url": "assets/css/0.styles.3a3279ba.css",
    "revision": "a87e28e1ce2eb8ea9dea56fd55159809"
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
    "url": "assets/js/app.d5b6264d.js",
    "revision": "cfc1aaff02b7c17718c7fbec0ef96acd"
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
    "url": "assets/js/page-File Structure.97e98f3b.js",
    "revision": "3ea5625785ae72e3fa19ea6b9bad75ed"
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
    "url": "assets/js/page-Home.4881fdf7.js",
    "revision": "0d6dceaf4fbd88817660833114bf9ddc"
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
    "url": "assets/js/page-Tex 语法支持.54484e59.js",
    "revision": "67eeafcb3d32e831b4ea8f2966c40d88"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.ea3eade6.js",
    "revision": "7aea4a16075ac295fd92fe2f2ba763e2"
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
    "url": "assets/js/page-主页.af279a7d.js",
    "revision": "41abc663f1094bc7d03aab55cb6a7c28"
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
    "url": "assets/js/page-介绍.3dd44243.js",
    "revision": "3f632acc35d52688fbb7e961f16bcb38"
  },
  {
    "url": "assets/js/page-侧边栏.2976611f.js",
    "revision": "892a15006f4c2966b38d7dc2380f74e6"
  },
  {
    "url": "assets/js/page-全屏按钮.26b2bcbf.js",
    "revision": "6419812ed2596d75af91190733cb49cb"
  },
  {
    "url": "assets/js/page-基础知识.6948de65.js",
    "revision": "928c47fe92b26d33f657327b3cbaf7b4"
  },
  {
    "url": "assets/js/page-导航栏.c83db412.js",
    "revision": "156ebf3f1d07d44334ad7ac3b59d0e96"
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
    "url": "assets/js/page-文件结构介绍.0c39ed99.js",
    "revision": "469b6abc4303493002d54187ff1a7da3"
  },
  {
    "url": "assets/js/page-新增组件.bddaa57e.js",
    "revision": "9786df357e555de86976b11c6c69437d"
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
    "url": "assets/js/page-页面.9b9228e4.js",
    "revision": "c9afa415c403fd565f8eee75ce4b3a70"
  },
  {
    "url": "assets/js/page-页面配置.af89954a.js",
    "revision": "716b3ddf109c2d888fbe57b08dd5c49d"
  },
  {
    "url": "assets/js/page-项目指令.a3c95230.js",
    "revision": "23cfc50c00015ee55d91121193cb3365"
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
    "revision": "2be5a8b2b6ffa0af72ec00427f83fd87"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "ad8485b349e78f0c0994032c6eb6f363"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "14a353b31146c59ce5c5718d193304c1"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "d4b1ee29ab928f3e39302713aef67947"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "712bde813f612b36e68fc0eccd4c77c3"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "6d45f493856e0307242659303309be29"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "42b73ccfafce1214908a2f97289919fd"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "e9bc37e64581ef710ac9b105d292d101"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "081b84617d043c20fca1d074d56fba8c"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "2f3da4c67af936b288e79610cedf5eef"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "5bc3ebaf29fca384359612a02552129a"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "e9ed911ba006c7475ddf844f29a5c868"
  },
  {
    "url": "en/api/index.html",
    "revision": "9f40031d4e9f1691faaf45424f4bedb7"
  },
  {
    "url": "en/api/page.html",
    "revision": "c63b4de68cdfa0567aa0b15d0fd8ebf6"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "dd96e6af1c25b9e838e5d4b850e33162"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "d15f3dc95fa088dc5c8c2b40c211a715"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "974785314cce9205d05a600deb6cbe0b"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "43d684a1fef6c9e6822d2ae3747e0157"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "8385748c8352b924b7d274318f808763"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "ddf2a72534145602cd6d2109bd410161"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "6558fdb8b50e5efcf86e85a42a91d717"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "3b37db971f6d327583e2d7979c152153"
  },
  {
    "url": "en/basic/index.html",
    "revision": "fbbd7512718171e9336f8be6afb8d084"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "e8e26273ea144fae0adca04763ab7a0b"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "bfc3be19786cfa2bb1179ec524eea844"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "701cbf0451bdb49973009ffafe06c461"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "c3b9a9bed74447729afc94d99ad73764"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "b0205d8214dfc469e7a27ca7febab8fe"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "9acb392c737db214a87df06bf4a24f70"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "2a088a538632118ee28f5397162380bb"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "23e184947dd0c06178066163021c2933"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "ea8fb12fa52de8c6e0fd251870f4e217"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "a2197ca411c0fac23b5f865045dfb4db"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "667595b4c552cfd1fd4d7353651bf29a"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "063ffccc2922d8ab4280e5969e812756"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "e38f0b1f5f7e9d3f4a8e8931692d037d"
  },
  {
    "url": "en/guide/component.html",
    "revision": "59521049d386024c0b3fa236806c9a95"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "0048bbc69b7b2c4545c2c58a6bc0c183"
  },
  {
    "url": "en/guide/home.html",
    "revision": "0c1284c781d4f8b8c6d7aa7e6a1a9ae0"
  },
  {
    "url": "en/guide/index.html",
    "revision": "46bd768cc62a4bf458da1b0a033145ee"
  },
  {
    "url": "en/guide/install.html",
    "revision": "5e23f1cb9a7a8c5cc485f1c80d5d6fe2"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "9c647c3d98a1350af834a920bdadecb6"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "117435afb150624e306d680f3d64dcf0"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "7e05df0ccc035bd78fd0eeebf28dbc28"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "a03186e542174dc55537fbce1d0ec8bb"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "356d461d4a78a37a77059c954aee8bc3"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "ad2452e396abea02cb94aea88c3df557"
  },
  {
    "url": "en/guide/page.html",
    "revision": "3e34ce42ccac86319938dada5e8c315f"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "0a3b3fab56299c550b8a976986282894"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "8f38667e830988751ffa931399bfe175"
  },
  {
    "url": "en/index.html",
    "revision": "5625a6ee5ec4af0718dfa781814a775c"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "2971f73a6f91f23bf2ae8da199bf239f"
  },
  {
    "url": "guide/comment.html",
    "revision": "efe287796917a15cdcd99a18bc74eaad"
  },
  {
    "url": "guide/component.html",
    "revision": "e8be2599eb884b84d6ae8fb5fa82da66"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "070fd81261cc09edf2578e2c1a305ee7"
  },
  {
    "url": "guide/home.html",
    "revision": "2c37dc6b52dfeec1bf9f3a07a98f5ad4"
  },
  {
    "url": "guide/index.html",
    "revision": "4d729bf8d784d3cd12a34b6206c65e1c"
  },
  {
    "url": "guide/install.html",
    "revision": "7b551979212ef0f0a92f46d0db08b60c"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "81b59e121bc513fec27c8c061c0374b0"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "38604eb349fe17ebf5623ab25b2b9d84"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "cfef3b232ab2c396bf9d2add94c85e4d"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "665ca65a60603da7c5e5a7fde295e57a"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "6519c2f1d0ea3e8833507b65d6fc04e6"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "e10a3c0f54e22be995930c5e0e3fb70b"
  },
  {
    "url": "guide/navbar.html",
    "revision": "d947a1c216e9eb1b8fb8f5ae1c5e6c2c"
  },
  {
    "url": "guide/page.html",
    "revision": "80c7ad0cda2322e56d531d3ee2d92dac"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "354af7672c53c71681f493fd10e7158f"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "7a13e0ee780e1f95e77067ed2487c4fa"
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
    "revision": "7771e01237d23463b00c13afaf58e28a"
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
