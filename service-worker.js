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
    "revision": "82c2680689ca0dd0f4cc8f8e427d914b"
  },
  {
    "url": "api/index.html",
    "revision": "bca685d98ea36ce41f3632fb2ef87fc4"
  },
  {
    "url": "api/page.html",
    "revision": "b1b6b3ae84d2608c132ee919537941bf"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "6532bbc66304a2d49a190b5f27fc022a"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "04aa3fe8d669fe6a9e564e7c12ee3d48"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "cbe8b3cffb1aceba859e8a41155052be"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "cc2d772a9865a08855bfe3386bbc033f"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "ac5de1503cecb3fd7f01e996ff737037"
  },
  {
    "url": "api/stylus.html",
    "revision": "4da634b05282dd37f6c7f60e7fc74aca"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "713d788eb832040aa7e469d827d4d5f2"
  },
  {
    "url": "assets/css/0.styles.4be8cb00.css",
    "revision": "a584df17d82bf21e3a9119bff58c6761"
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
    "url": "assets/js/app.49134a27.js",
    "revision": "d91600a9fa193e8e7d5719e7168efcc9"
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
    "url": "assets/js/page--33732ef1.e4c2bfb2.js",
    "revision": "2dfa5afed81470e709d29edf48a83314"
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
    "url": "assets/js/page-Emoji List.baaf05d4.js",
    "revision": "303d72799dd9698773caa037e2254408"
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
    "url": "assets/js/page-Home Page.3b750d68.js",
    "revision": "d85a2d1b43ef2fc577ff2444c669bbb1"
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
    "url": "assets/js/page-Markdown Introduction.6a80df94.js",
    "revision": "4bab04674aa6706baa4f46f0eb94a593"
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
    "url": "assets/js/page-Tex 语法支持.dfc1cd0e.js",
    "revision": "357faa0c6a550debd64d154315e10b24"
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
    "url": "assets/js/page-介绍.0603d224.js",
    "revision": "b73aa37dee7bd99f05cc1fc9734e0bce"
  },
  {
    "url": "assets/js/page-侧边栏.900445f6.js",
    "revision": "035a75fa575718f2deca9872ba6b5554"
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
    "url": "assets/js/page-导航栏.1575337b.js",
    "revision": "679fb3e6210ec5252ce2850a065d9f0a"
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
    "url": "assets/js/page-页面.a0191292.js",
    "revision": "7d7c85bdf10986d4c5056b2cef932c4d"
  },
  {
    "url": "assets/js/page-页面配置.93226282.js",
    "revision": "00fa3420f3f7c8c17639e624683e37aa"
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
    "revision": "ae1dabf4cb28a98dccfc61b7ffd197e9"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "e6af3fb910c132f0af33f86895edac03"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "86855a4c144127c6bd22c013e949537e"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "900a6f2592380121b34c2b9e17df2c5b"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "ef5aca922b4d5eed99bb66448a739ead"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "c354905343b70c75a148bd8bd5d060cb"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "533f805b3e99b1a36e0ca20bc431c7e8"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "a31f71ca83f69c3dfdd5b18ae8c963fa"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "ab44758b1255480f31b78aae6c82b5fd"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "f6bd035d5aec9f975b5e6319580864dd"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "967e36174e7b5a25683bacdc525c5dae"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "1d167878b154b4c979beae4fca3f4347"
  },
  {
    "url": "en/api/index.html",
    "revision": "70f71e18968104d5e36397a0653ace23"
  },
  {
    "url": "en/api/page.html",
    "revision": "b0b071ac080a04042477f25b00536b03"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "eeab5b2fe2d7909ec8417a3c22b6a532"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "fc8dae061850752fd3cd3a65baeaddac"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "277c7ca8c6744fbf29e6c7c03b2d237b"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "2dadded8ba4c65abcdba9673962edac0"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "2b834a0b76d1d2484f6a34423b1eeac4"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "61e1026062c5482d18bd99df59fee073"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "678361d32ce8569abd3783e8908e0238"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "0bf628fb71c2f575e4a9f07b8f3a4529"
  },
  {
    "url": "en/basic/index.html",
    "revision": "d04c4791ebfcdbae8b150e3ea7778af1"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "ddb55238c01779a52e9f6ba1aa38eb24"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "63232dc6581443a47b2f79b4d8e3cdef"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "3f5ebcf36ce7e3cca8982b2ac9aa19a4"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "b9298bd413fb1ad7b44df69f4ab80166"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "06030acac612346dfc94624521e1cf13"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "f334607db14aa5d619d5283509f85b0e"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "97b02f9dd6b177ddc5511a4c0bbb2f09"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "86efaafcff4cd794aa03105c3102996c"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "7b626502a1ab81eccfab5b19534fb766"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "7b41d14cb6d34f6bd7d2d0b79577f8b8"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "f54978e6cb7c22891afb5ffd8dd93abc"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "5ae480f433254281ba59a36994a2f9bf"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "188f3ae43cb9c7c96b1d6874ec7212d0"
  },
  {
    "url": "en/guide/component.html",
    "revision": "bc2c1bb7b62ab0f08c082ebdb4336141"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "3743b19d4c69e34f9362882f3e77b4cf"
  },
  {
    "url": "en/guide/home.html",
    "revision": "ec822812f5b334a6e8c6f70742077cb4"
  },
  {
    "url": "en/guide/index.html",
    "revision": "e451fa95e3a1707caf93da3608f80ff5"
  },
  {
    "url": "en/guide/install.html",
    "revision": "6dd886750af8c38231cd063c172c8b69"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "4d0dc6852e53a869e71bbdf76394c313"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "9395914b1a207e7a78f5bdcc31fb58db"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "51b09afc1548e632771b90692122d42d"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "b02d9c4263c17b41808854c4001ac801"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "5936933ea66da7079082b9008c3a6606"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "eb3801f41693caffd59cf08d4f73eee5"
  },
  {
    "url": "en/guide/page.html",
    "revision": "007d05abae37f6f11e613f5f9ee9ddd1"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "0f557da2c7e2bdf65ed312a0a21fc270"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "8ab1b7317e18d3b26ca5771c83c68583"
  },
  {
    "url": "en/index.html",
    "revision": "d83bba4e68baae4ba314975625986697"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "86b78a8079dd23add6a64cb483a674c8"
  },
  {
    "url": "guide/comment.html",
    "revision": "7713b834282a3077a59386f95e4669d8"
  },
  {
    "url": "guide/component.html",
    "revision": "ee6873fb2e92b56a22d3d92ac958685b"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "4ddf879b272a46ace2d3e8b2d1d6ac10"
  },
  {
    "url": "guide/home.html",
    "revision": "90a3ddefe9a32023afc8d6ec06042e25"
  },
  {
    "url": "guide/index.html",
    "revision": "4e8aaa1765c7000b68f314bc2870475d"
  },
  {
    "url": "guide/install.html",
    "revision": "506c95407e8d72f1abfc974f923210ea"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "10488ea56591a4416ab04075bbff41dd"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "144b3b58bc914ce5609f40822d650970"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "8d4987b0a59e5b0c21fa73f94b6c12d4"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "1f25e0f6459eb61fdfad8ccc59581b0e"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "7604f050b3b7ebecddfbd7e4ef41c586"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "1b8a932d91a0237ce48e7a469088f161"
  },
  {
    "url": "guide/navbar.html",
    "revision": "9cb7d5a5d1785f941652fe4f07946fe3"
  },
  {
    "url": "guide/page.html",
    "revision": "9a275f344d8d8061aaa5ba06efb9e906"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "bca2cb361ea32e46dfd135cd7054ff33"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "4021578d988ff261040d94cdbcafd728"
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
    "revision": "05c571279b3c34c3fc1a15e97c6250fc"
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
