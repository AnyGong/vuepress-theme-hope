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
    "revision": "6b337fced30a51a12c621a503294f3a2"
  },
  {
    "url": "api/index.html",
    "revision": "21a42a459d505a922a731e12a98714f2"
  },
  {
    "url": "api/page.html",
    "revision": "6d89d6b14faf41ab867fc9227931fae8"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "6465aa2adb3a6204ed14117ad26f8ef7"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "7b6745f112ed8c003c548848ebf3ad7d"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "be0739fab1566bc99112c015e1954370"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "f24941c084c0d2c48598fde9ef34d47c"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "e3213f5418c71c9a0c45da4f0e9d629e"
  },
  {
    "url": "api/stylus.html",
    "revision": "748410105b12a51e427e08eb77ba05fe"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "b0d718ade478759e0b16eec5aefb7c65"
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
    "url": "assets/js/app.f5b1a587.js",
    "revision": "aeee891a56ab73f2172b05d1b3ca2543"
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
    "url": "assets/js/page-Fullscreen Button.1ecda49b.js",
    "revision": "2c6f1090dd2d6a7b0d0c6f07d5ec6b89"
  },
  {
    "url": "assets/js/page-Home Page.0d743380.js",
    "revision": "b486f96251ff44ffa6bad750d4574be2"
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
    "revision": "11a172f7329f7c301b1ff89d67cbdd12"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "b48b0e02c7cdbabbf0d9c27a960f5d39"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "4b42a356987098097e4c14088d042714"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "1f6944a9c480d1da924b9a5bbf098c86"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "d56a5600dc9c71b8f839aca54f33c7a6"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "69aa78c26e62507649aff9dc42db0169"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "f64ddf931ea56b3d6c70761db682f114"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "8f8251ad0210a2bd91867fa01984b55a"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "4063d90a64109b4a2876f1e9b45eb9b4"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "1404d397d493373e3c6bc4d96820679c"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "9db7378dc46783f1e256482b340e1b9b"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "cca1e1dc82ecba9537b0aa48ff036d3a"
  },
  {
    "url": "en/api/index.html",
    "revision": "418b7d342b10f8d53e7cde3782d8faa1"
  },
  {
    "url": "en/api/page.html",
    "revision": "33ef9d893ae6cabf58d5b5697a090e16"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "062a580228a0e582571896ca7a1b3ffd"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "42638e100cde1177031578d4d0eee162"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "4defdc977f083fb8423ba8a2946dfe5e"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "87ecdf55d77a90753a042c5ddfc0cb5a"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "cdc220a893352ea080ecb5cde119b2f6"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "1bfafff1ba6c84057de2f0e42aa5ae7f"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "2da75952a852175374c791f9613b47dc"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "347f9805863640bd44d04dcede34a70c"
  },
  {
    "url": "en/basic/index.html",
    "revision": "645ee1ffc6ca184bf97736838da6fa6c"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "a78760be2ff5d30d9a37cdd43010c0a9"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "6d41bab1b77473f743b187042e8d23e0"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "04bce9fb2a6a2a30347e4cb20ff23b92"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "060ff8062daf86d4bf9a6621d5c8814e"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "1df1c1e71a23f8f01661e48e0e957e0c"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "39a8e14de34821d233cd83689ed44b4e"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "5b43e9c7adb45ab63c04926677398790"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "9dc4bdb3ff58a2b94e1e455025d8320f"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "b7d23932f3ead3309811b9b16269405c"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "18ff8f950a7e02e11fd2dbaafbb99c0f"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "6b293ff3b7680b56e80b900587190fa2"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "6060dd66071009626b846a9560a15bb2"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "1440f03aace6b266531738565b57cd91"
  },
  {
    "url": "en/guide/component.html",
    "revision": "7a577408e3bf1f63c8ed3ca4ed70847e"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "849333199f414138b5d3f4277345978c"
  },
  {
    "url": "en/guide/home.html",
    "revision": "c4c9ee8dd1af6d0a53dc987d9d3dab10"
  },
  {
    "url": "en/guide/index.html",
    "revision": "0c80c5760e9af0fa89ce3f8b57152023"
  },
  {
    "url": "en/guide/install.html",
    "revision": "b858288777122e836b16ecdfa0827abd"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "02ba4e9c71da8332baacba79df2f7d46"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "3f8cec7e3fda067ea9138acef6919432"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "e3ea85f8953bb26dd7af2d969748183e"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "ebfa33f144f24d5c6c4173058af5935b"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "54200f416989e06c986e14a70778b866"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "738d1c0a1e79c26a3a81a665278daef9"
  },
  {
    "url": "en/guide/page.html",
    "revision": "86dcca62a2084b4309e205688fc9845f"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "1fbf2a0639a16d57497440988f21774d"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "7111a5d75364d27df62044e524eb7b9a"
  },
  {
    "url": "en/index.html",
    "revision": "85accf2a37f2d038715768c802778ed3"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "c50cf8baf011e96a0b8fac9f96ce8cfa"
  },
  {
    "url": "guide/comment.html",
    "revision": "267cfa134b5480f363858b16dcb7ed67"
  },
  {
    "url": "guide/component.html",
    "revision": "921cc248aa41c116b3d0acfb01dc3700"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "124c5330cca27bcc3d232ad66ebc5199"
  },
  {
    "url": "guide/home.html",
    "revision": "5084d22eba878fb5876a6821bcc003c7"
  },
  {
    "url": "guide/index.html",
    "revision": "215b70460a2551238d5be3a3375c4689"
  },
  {
    "url": "guide/install.html",
    "revision": "644e387f9971334d2537da38a1b82aa8"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "5e40c2130b26139af649053c18ef999c"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "a4595e78b42af2f114011d67a305fb0c"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "0dc94f324220d4abf34e422c49bd0786"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "bebc97b591a9e937683e990e81c32c65"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "364fde2f17f45d7071fc81fef6603110"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "ad88e25e9834a55e53f773d15d4b054a"
  },
  {
    "url": "guide/navbar.html",
    "revision": "9d96328dc152f3b8a9e9e55247ff62b8"
  },
  {
    "url": "guide/page.html",
    "revision": "27056a1d634f7850e2d59e6adafc82e7"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "25a092812f828ef59568b82558a5fa79"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "41b9d433af2bfc03fd004fcb8e081287"
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
    "revision": "784b2f7a576f8d0d4106fd869a595205"
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
