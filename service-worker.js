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
    "revision": "f2cf2a6053e16629a0118fe2c2acad0a"
  },
  {
    "url": "api/index.html",
    "revision": "7bc91f246060df56a87bec0a8b52d241"
  },
  {
    "url": "api/page.html",
    "revision": "bab70ea371800f000e1399083913ec74"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "e57fc7a176d7cfe98b7aa5b7866f2f6a"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "a78c61f6b7741cfed7aabfb7c65e487f"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "8d01cde0b57700009dc5e4343b3c7984"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "e11a70a0f9e430b227b6b7c6ed8b1e4b"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "f346e13a6cb16755eb388ab2edc048ff"
  },
  {
    "url": "api/stylus.html",
    "revision": "0a5bc64c2f88b94835ef4cac342cbca6"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "4512afdc64c18db5ca6d27dd66255bd5"
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
    "url": "assets/js/app.baa57a25.js",
    "revision": "be94296eab975c9810eb2980843d422a"
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
    "url": "assets/js/page--33732ef1.3d85c6ba.js",
    "revision": "d7708a9dfb396c7c94d897f7dbfb2717"
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
    "url": "assets/js/page-Footnote.c93ab42f.js",
    "revision": "a31cc02f74b678f63a4a50298fd38b3d"
  },
  {
    "url": "assets/js/page-Fullscreen Button.6b1a3ad7.js",
    "revision": "11c8d29f287fbb21e9bc8b4f89b7b6ed"
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
    "url": "assets/js/page-Page Configuration.c0895090.js",
    "revision": "935af8143a6c1311900e5d3ecab78861"
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
    "url": "assets/js/page-vuepress-plugin-container.426f6f61.js",
    "revision": "b109f76747596579180b0f7abd73b7b6"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.8fdf2e3b.js",
    "revision": "bb25d7893fdf1053718e5b033e16c342"
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
    "url": "assets/js/page-上下角标.4ee20ce2.js",
    "revision": "697d5b7f83846568d356972e4315feac"
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
    "url": "assets/js/page-主题配置.6a595047.js",
    "revision": "130f82c5c7f411a0dfcd8e7bd6560b83"
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
    "revision": "1b92ae1c638322e1e415ee7de5347e82"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "30bf34a405450cc734c7ce51b4ad2bbb"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "0e26a5877a22be681a258c878e02ea30"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "b438134b258e92f3ffc639a031137714"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "b66c78d0d1947328ab431ef66228f1b3"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "4dd152f67c7b32c96f1678383fae2d87"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "e96005cf14296e4a0bf20c82b9a76e4a"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "449a15c42f475d0b58f550f7135852a8"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "6a6bfb331740ef50eec008f926d5d45f"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "18986f6f400776f9dc7cff8d888b7714"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "e653b9fb5b29267de4cd6c7557435785"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "8607de32d7edb988e5cfb3ca5d60ceb4"
  },
  {
    "url": "en/api/index.html",
    "revision": "a9ba0cc823a23a945921f61b2583ad97"
  },
  {
    "url": "en/api/page.html",
    "revision": "631bdaebfee144b7aaa5e1c44b157678"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "daa7a678607c6a7f47d17e1c04cad6f1"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "ae6aaa90a4359297d984988ff5f79585"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "5d92e27bee4708f824d6929ab9f0c0d5"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "894bc1df959c65537e12abce7da33a7b"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "9b5faf513677e6cb58c6f4cc6a7ea9b8"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "02009db597753f0cfdcae87fc55ecbd3"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "70f61cf9e8e6ad436500a1ac22abf6fc"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "015f0ffe91f71e5641854682ee7e6425"
  },
  {
    "url": "en/basic/index.html",
    "revision": "a2fcb52376889e7165d154cf2e029db1"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "f47e2dc2eabfb571a3f4b23357ae9eae"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "a95e0cc8dcd30388bce19539e095ed21"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "0f030763cc2cfded81519c4561ef7088"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "7e82b7ff02eef44808eb0913678dfd3d"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "c4723aad3a0e1274a23edc50a574f366"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "9415d4428723c480be3f4896caf14de3"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "2080e87a55188f90d9b99f20c4f98de4"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "c0fd98ed4f1c1f2e7a8bf4ba8e30d3be"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "27a6681776bfaf1ad3c1fed66003c8a9"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "e60cd768b92f0d428a3fe48e3cc7a3a9"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "595c594348a6417f50ab649a3e280b3f"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "66d4eaa82f89c1375fffea459c0d114e"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "fcd202f4bfe5e0c73e8c85b7e885b405"
  },
  {
    "url": "en/guide/component.html",
    "revision": "a27a311452347df47421df433e2c6675"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "ebea9658ee96f9aac86fdd76156dbd31"
  },
  {
    "url": "en/guide/home.html",
    "revision": "5d05f477b6e4803a58cd377427ffae43"
  },
  {
    "url": "en/guide/index.html",
    "revision": "2cb9f2670d4ef7f0cb561bf7f2f1b720"
  },
  {
    "url": "en/guide/install.html",
    "revision": "b68a978fc52891c26a89c3bda104c8c7"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "0e081f50e30fc3ef9b0a38e03326affa"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "c23c773f547a2aa247dca28b219e9085"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "8ece9e25b543a0f7f5ff5479f628d5a4"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "a07ee43b50a5ac54c3fb1a40277f08a6"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "bd91354dc2bd58ce690e5a242bcc3bdf"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "d85d3e89274c546ae9b29fd4c4ec8653"
  },
  {
    "url": "en/guide/page.html",
    "revision": "969346755908cbf284b3b98781742eb9"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "2aa732566842a96f03d344256786ee39"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "c510518fb3aa5afd81b493b197729454"
  },
  {
    "url": "en/index.html",
    "revision": "3ffa6faabd89defbaeb46832a489627b"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "23bec1051f9cb50403e92d579bd42d07"
  },
  {
    "url": "guide/comment.html",
    "revision": "27961a8a9eb74d26db030f6a7d51c464"
  },
  {
    "url": "guide/component.html",
    "revision": "bc1b59c44107d403b837618955af4866"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "3aeddbf9e7933bdb9a9f0c9d1c835a01"
  },
  {
    "url": "guide/home.html",
    "revision": "ee6fb5677e698712e2bebdd1de1a432f"
  },
  {
    "url": "guide/index.html",
    "revision": "8f4ba2648994aa7a3089cc906526f120"
  },
  {
    "url": "guide/install.html",
    "revision": "00f056651db43f98badba22a29a6f2f9"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "28e3202a0a28e88ad6e218f5fbe63c84"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "aff3f40ad4d0c827751d32fdea440453"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "2f6718ca6862ffb13d6550489ad5eac6"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "9d000eb5d13c238a253c7107edb7eefd"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "25b42c2948aa4bc24ade10cc07684c10"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "e1f877c501c2469dfcae0ca1c7ebcad5"
  },
  {
    "url": "guide/navbar.html",
    "revision": "cadd709d2eccfac6541dfa7e586e13c7"
  },
  {
    "url": "guide/page.html",
    "revision": "f9a41720af4403afccc527ba3758384a"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "794f903e6325341ddf0959e9ca3bc6ec"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "8a8e354307a1f46fc10ae4f958846cc4"
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
    "revision": "f7da9528955c47214858eed7c786d6a1"
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
