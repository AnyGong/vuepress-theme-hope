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
    "revision": "ed193edb467c888d7fa2529b2f9113d3"
  },
  {
    "url": "api/index.html",
    "revision": "d1dfd541f3f3497b3cf7060abd92159a"
  },
  {
    "url": "api/page.html",
    "revision": "5f0134f630e63e47cb055f4cc635732b"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "ddf0294cd0ac1409b2c340e6d33e7b62"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "31ccd06476e3b8c32a4124f86d444015"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "f9ee14ec1d7fb738c714c3ee1febb771"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "4ffc89b8aafd3adadb795da96b889691"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "4bab199e2cbc9b2112434c80677997bf"
  },
  {
    "url": "api/stylus.html",
    "revision": "445e8fb90da9156cef820e517ef049dc"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "bd6ae72ff696f25ba9f1c5b88ccb33d3"
  },
  {
    "url": "assets/css/0.styles.507c261e.css",
    "revision": "7f06687eb5be918f072da0249a4caa2b"
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
    "url": "assets/img/homeImage.5ae9de9e.jpg",
    "revision": "5ae9de9e15120d94e9892d0c15da9896"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/92.36267f8a.js",
    "revision": "67388e727f4fcdf1fb585eb1fc8e0f2a"
  },
  {
    "url": "assets/js/93.3246f11d.js",
    "revision": "3536ddcc7e36ed08e492c4e097a6b876"
  },
  {
    "url": "assets/js/app.df9d10d4.js",
    "revision": "b99ea95f911247a2e606a6bc1127f95d"
  },
  {
    "url": "assets/js/layout-BlogEntry.a4021b2e.js",
    "revision": "1a75dafa88a13ce4e9c9d60ef8eafbc3"
  },
  {
    "url": "assets/js/layout-BlogEntry~layout-Layout.00b76b75.js",
    "revision": "3c67989c628a7c6ec3e3a6513e36101c"
  },
  {
    "url": "assets/js/layout-Category.14eb7da7.js",
    "revision": "b5afd88218cac1eb2ef1dad3b3f654e1"
  },
  {
    "url": "assets/js/layout-Layout.19af4a21.js",
    "revision": "a3e724af455b0a4853e16cd4c468b8d8"
  },
  {
    "url": "assets/js/layout-NotFound.fcbd625a.js",
    "revision": "3202b637c37332cdd430a0268890466a"
  },
  {
    "url": "assets/js/layout-Tag.8be5092c.js",
    "revision": "09834ea4a526ebf7d4855bcebc14bb0d"
  },
  {
    "url": "assets/js/page--1b278726.9c1b6535.js",
    "revision": "af395182cdd01113474071386461c0de"
  },
  {
    "url": "assets/js/page--24b68849.fefbc005.js",
    "revision": "a7416333d9861ccf331d02c4d9767f39"
  },
  {
    "url": "assets/js/page--298eb4e9.7c4053db.js",
    "revision": "5fc7b69ba0aaaf13c38472df32f2e947"
  },
  {
    "url": "assets/js/page--33732ef1.d176589d.js",
    "revision": "2a242ff3744c92861847b708a7dc6ae5"
  },
  {
    "url": "assets/js/page--608d80cf.24c4b59a.js",
    "revision": "36d140fc5f026cc0882521c1d70048aa"
  },
  {
    "url": "assets/js/page--b64dd6ee.1798684f.js",
    "revision": "dcf8342dd52c15ab79d8122f6f99fe39"
  },
  {
    "url": "assets/js/page-About Vuepress.ae5c47e0.js",
    "revision": "de47293b1b42959b36f8c3703b04bcb6"
  },
  {
    "url": "assets/js/page-API Docs.faf2a94c.js",
    "revision": "33cf754a6bdaae26563b090f49b67ea2"
  },
  {
    "url": "assets/js/page-API 文档.c4541fa3.js",
    "revision": "a0eb3abcbd0ad55923b6a34b37121192"
  },
  {
    "url": "assets/js/page-Basic.b9a0d6d0.js",
    "revision": "661d802dd961012d7c49fd52726600fe"
  },
  {
    "url": "assets/js/page-Breadcrumb.3fa44338.js",
    "revision": "71833e2b8c992d40e0f1a1606b67f6ef"
  },
  {
    "url": "assets/js/page-Comment Function.cf76e073.js",
    "revision": "08d9432876ef33d3d871e9a83cd6782b"
  },
  {
    "url": "assets/js/page-Default Theme Config.398ce7ec.js",
    "revision": "752f0d19033f5d18068030b4888126a0"
  },
  {
    "url": "assets/js/page-Emoji List.e72bccec.js",
    "revision": "12c2e1a595a956d57110737b1b0ff0b2"
  },
  {
    "url": "assets/js/page-Emoji列表.3d33b3cc.js",
    "revision": "f9990756ea0e354d99a9adf4a8f28a11"
  },
  {
    "url": "assets/js/page-File Structure.99da667c.js",
    "revision": "7c6947270495d13ac6148ef07e081622"
  },
  {
    "url": "assets/js/page-flowchart.10aea728.js",
    "revision": "958b30b545c39034f679f86f604e800a"
  },
  {
    "url": "assets/js/page-Footnote.d30b19a9.js",
    "revision": "2591c6f97a0c8fe2e4493d9a7cb1fca9"
  },
  {
    "url": "assets/js/page-Fullscreen Button.e90e7a2f.js",
    "revision": "888c868d0a047869c0ba6976569806f6"
  },
  {
    "url": "assets/js/page-Home Page.535ebc91.js",
    "revision": "7fa26356fd49170c22d4efb6b992a867"
  },
  {
    "url": "assets/js/page-Home.11d55cd0.js",
    "revision": "5d2854001e0bc8c8e0a97530648239c1"
  },
  {
    "url": "assets/js/page-Introduction.54a4af70.js",
    "revision": "c4977eb87e97758d5dec67f7bf53542a"
  },
  {
    "url": "assets/js/page-Markdown DEMO.d85a528d.js",
    "revision": "79eb84e2f2f726fa045af22aaed5af77"
  },
  {
    "url": "assets/js/page-Markdown Introduction.43dfe67a.js",
    "revision": "e05669da058ba5cc4f5f9a27cbf476c3"
  },
  {
    "url": "assets/js/page-Markdown 新语法.c36e6aac.js",
    "revision": "83ddb4b54a3f9770b5bda57ef0a2d386"
  },
  {
    "url": "assets/js/page-Markdown介绍.a2bd1071.js",
    "revision": "90c386490b1c2713cd38d0a107e8bcd3"
  },
  {
    "url": "assets/js/page-Markdown示例.8f72f51f.js",
    "revision": "605317ce8fe55d367fdd5df0e68df714"
  },
  {
    "url": "assets/js/page-NavBar.15ab941e.js",
    "revision": "1704567cc2410aba695f2c873ebd501d"
  },
  {
    "url": "assets/js/page-New Component.cd9f60f5.js",
    "revision": "d06ad329e3b4f7178971e296bd1338aa"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.0026d064.js",
    "revision": "fa69dbffed5463c3d3f15b20cfb655fb"
  },
  {
    "url": "assets/js/page-Page Configuration.ff664edf.js",
    "revision": "04e4fb097c937556df607a0c6be303e0"
  },
  {
    "url": "assets/js/page-Page.373cae63.js",
    "revision": "79ab158e76ff1389bb44e28673d6686c"
  },
  {
    "url": "assets/js/page-Plugin Description.fcf40be6.js",
    "revision": "dc848b82c3b1a1771edd20820ef3e0f2"
  },
  {
    "url": "assets/js/page-Plugins.f289fd10.js",
    "revision": "a9bafb18ff7ec7b0befbb8d4c7da22e0"
  },
  {
    "url": "assets/js/page-Sidebar.0cd92766.js",
    "revision": "ff6be63d8d3e7d9fd7b59d8ca1eaadb9"
  },
  {
    "url": "assets/js/page-stylus configuration.7379662b.js",
    "revision": "0b846dc4d163e58fd5fd13a4f61ba85d"
  },
  {
    "url": "assets/js/page-stylus 配置.09b0fa2f.js",
    "revision": "6807c37cfdb92314e22c7ffdbb4961eb"
  },
  {
    "url": "assets/js/page-Superscript and Subscript.562b6304.js",
    "revision": "d535112e0f358c9e54b91cdb17abe9a5"
  },
  {
    "url": "assets/js/page-Tex Support.7bf7c494.js",
    "revision": "cb28ff3745a1dfa4ef3c5e1e1a16c8fe"
  },
  {
    "url": "assets/js/page-Tex 语法支持.314f3fc2.js",
    "revision": "38323cbf258caba7cc2cf8d54ada2197"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.749550e0.js",
    "revision": "46e00ab8ec339cf5695441064a7a99fb"
  },
  {
    "url": "assets/js/page-Theme Config.0d62c13f.js",
    "revision": "ac38799dcead23fbe6b7dc0a35354c1c"
  },
  {
    "url": "assets/js/page-Vuepress Cases.ef5139dd.js",
    "revision": "89f32330502b48aa72f50b3471c9372f"
  },
  {
    "url": "assets/js/page-Vuepress commands.e72b62cc.js",
    "revision": "e003cbe7e65c0389950cea5d8f622ef2"
  },
  {
    "url": "assets/js/page-Vuepress 案例.a16feaca.js",
    "revision": "d43ccdb17ff1ea23c2e8f90835e4eef8"
  },
  {
    "url": "assets/js/page-vuepress-plugin-container.ff1e3fd1.js",
    "revision": "42bc79dc049505637a00ce8e49db9940"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.4cf22d64.js",
    "revision": "b0b87c3a430c5e589e336f6e95cfb8bf"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.772cf83a.js",
    "revision": "398fa6d6f1b797e9d9c4c47442cc9887"
  },
  {
    "url": "assets/js/page-Vuepress.edc8d37b.js",
    "revision": "18292cbc060599808d9cf51a3a1a3595"
  },
  {
    "url": "assets/js/page-Writing a theme.f419be42.js",
    "revision": "db7b08413776979ead64960a271067b2"
  },
  {
    "url": "assets/js/page-上下角标.4fcd2981.js",
    "revision": "fc5504ab9282e76e7b3926757231166c"
  },
  {
    "url": "assets/js/page-主页.cc9b64a4.js",
    "revision": "b38aa87340af2667602a305472b841bf"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.d916d441.js",
    "revision": "09ec502d335fdcabe1f522558631c35e"
  },
  {
    "url": "assets/js/page-主题配置.1367e09b.js",
    "revision": "a5adcadbaab8c8e382cc61ea1b16f780"
  },
  {
    "url": "assets/js/page-人物.053d8019.js",
    "revision": "53f9dbd1682932e647fd474d946a84a6"
  },
  {
    "url": "assets/js/page-介绍.350136a5.js",
    "revision": "1c9f234b4385baedda6ad775662fa904"
  },
  {
    "url": "assets/js/page-侧边栏.869de2d9.js",
    "revision": "3f1ff0683e247764fc99716f34d613eb"
  },
  {
    "url": "assets/js/page-全屏按钮.59b327a7.js",
    "revision": "ad2f90d16f0a747d905dbccce520081b"
  },
  {
    "url": "assets/js/page-加密功能.7e8f2463.js",
    "revision": "c48bbd1e321ff2295d5fc034f456bf79"
  },
  {
    "url": "assets/js/page-图标支持.9836b68d.js",
    "revision": "f2a24111fa940790bf18de1eaa438608"
  },
  {
    "url": "assets/js/page-地点.0f888b0c.js",
    "revision": "6ff7f51d652c66ebc5dbc2815994a34f"
  },
  {
    "url": "assets/js/page-基础知识.18ccb8f5.js",
    "revision": "501bb5f9b4818f18c6156f673861bb7f"
  },
  {
    "url": "assets/js/page-对象.158b9975.js",
    "revision": "690f1a0cd51c912346660ba06d964360"
  },
  {
    "url": "assets/js/page-导航栏.61f20f63.js",
    "revision": "878cf3c4e04a6cd4071b8afd7feb58b7"
  },
  {
    "url": "assets/js/page-布局.5ee2c13b.js",
    "revision": "5abf1673a79893928880a8037eac6158"
  },
  {
    "url": "assets/js/page-常见问题.ca6de75c.js",
    "revision": "4882a559ee03ca3047443a5f6317b63f"
  },
  {
    "url": "assets/js/page-开发主题.a9304a26.js",
    "revision": "592e2c9e58c4efd8a6edea44519a79b9"
  },
  {
    "url": "assets/js/page-插件.4b5c27f2.js",
    "revision": "46a44ff07d74bdda177af5b2c4a966cc"
  },
  {
    "url": "assets/js/page-插件说明.7437585d.js",
    "revision": "db706b6cc3bcbaa1df19ff51083be354"
  },
  {
    "url": "assets/js/page-文件结构介绍.5db105d3.js",
    "revision": "578418c7da80d52b774fdcbcd982266e"
  },
  {
    "url": "assets/js/page-新增组件.675054d6.js",
    "revision": "c8ff58c0a113db617214770ca946625e"
  },
  {
    "url": "assets/js/page-流程图支持.7dc7af5d.js",
    "revision": "0285bd817e99515f2f15fd8a03fca24c"
  },
  {
    "url": "assets/js/page-符号.15936399.js",
    "revision": "69eceb95dab82a007c65354d39c5fc93"
  },
  {
    "url": "assets/js/page-脚注.c138a5a8.js",
    "revision": "cd24c788ebfbbcee7804ff7c3e6a4ac4"
  },
  {
    "url": "assets/js/page-自定义对齐.40fd33ef.js",
    "revision": "4ebeff4f278adebdb3b5dce475d4668f"
  },
  {
    "url": "assets/js/page-自然.dfc903e9.js",
    "revision": "36dcfa53e8a85e187bc2fbc886bf68b8"
  },
  {
    "url": "assets/js/page-评论功能.4ca7b4e7.js",
    "revision": "a98995431171279a73ec0aac2fa44d27"
  },
  {
    "url": "assets/js/page-路径导航.e917e154.js",
    "revision": "80bbdefcc2d1e9a0eab86f47651ddc11"
  },
  {
    "url": "assets/js/page-页面.add09623.js",
    "revision": "ce122838de6f7b214ae164029bd1ff83"
  },
  {
    "url": "assets/js/page-页面配置.e46b8224.js",
    "revision": "c298beeac5b0670403afecf0cf10fd3a"
  },
  {
    "url": "assets/js/page-项目指令.a8e42488.js",
    "revision": "ab322762b61a47943d93c90a6f01716a"
  },
  {
    "url": "assets/js/page-默认主题配置.03cf04f6.js",
    "revision": "b2f244e32643ead9d47d25c560abe498"
  },
  {
    "url": "assets/js/vendors~docsearch.9649c57a.js",
    "revision": "2333c0404b836d08dc1235cf273ce96b"
  },
  {
    "url": "assets/js/vendors~layout-BlogEntry~layout-Layout.b081eecb.js",
    "revision": "2723322df55579656c8f87902f0b81f5"
  },
  {
    "url": "basic/index.html",
    "revision": "fb4f289af249b5b913b064d4990f9cc6"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "77cf02d2c17768127c1e7019b33db5c2"
  },
  {
    "url": "basic/markdown/emoji/index.html",
    "revision": "0704255b34f3ca87b7ec0709f3fa623c"
  },
  {
    "url": "basic/markdown/emoji/locate.html",
    "revision": "cb9409f43da74af749783a0c7d393e1c"
  },
  {
    "url": "basic/markdown/emoji/nature.html",
    "revision": "b6029d9e603ffc71db5eef033283a65b"
  },
  {
    "url": "basic/markdown/emoji/object.html",
    "revision": "00b8c6b584594cda4f60ca0e96ea9f0a"
  },
  {
    "url": "basic/markdown/emoji/people.html",
    "revision": "5cb0d9fd57902f1b286ee3273bc9ff34"
  },
  {
    "url": "basic/markdown/emoji/symbol.html",
    "revision": "53b18af6a91aeedeee72def6aec4776c"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "365c282636705eae158776b673d63e0d"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "697afdace3f92b1bbaae89c28a612c97"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "6f7bb936e2a159e0d894536793de386c"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "e05e411105841c82b74711ef2d81d6f3"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "8a7836a7eea564288ec9a2ba3c12d8a9"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "11013fe2ce985d2e42ff11c56bbb84b2"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "2f0ed3f5c432d080279ca356c828ad78"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "37036a1033672fdd6d70ad4a8e4a140f"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "7b886f85ed68791a5666d8d9337b2f22"
  },
  {
    "url": "category/api/index.html",
    "revision": "1bc1ddfa26cab152cded08d7ef1d6f8d"
  },
  {
    "url": "category/function/index.html",
    "revision": "d61b75e576e72db72ca3b43574043b9c"
  },
  {
    "url": "category/index.html",
    "revision": "0137cd521fd7d67341130983dad2e666"
  },
  {
    "url": "category/instruction/index.html",
    "revision": "3a2e514ff99ede6c0ed200cbb48582e0"
  },
  {
    "url": "category/layout/index.html",
    "revision": "f2a550cea5f4b266bb64cbf49a3c3f4a"
  },
  {
    "url": "category/markdown/index.html",
    "revision": "78ae25bf0c846f61f1196f1bf9473b34"
  },
  {
    "url": "category/style/index.html",
    "revision": "86e1a14de41ea007769bafcb2a9c7523"
  },
  {
    "url": "en/api/index.html",
    "revision": "ed19d7693895d7a6affd2946ba202102"
  },
  {
    "url": "en/api/page.html",
    "revision": "693b1405bde9e711194a0914a617b247"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "e4a7c4233eb51a24cba872c497d8fa8b"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "8c17d5169bc97fce388627b3aca33aeb"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "9c887982e3f59817f83f89ed16c3825d"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "2bcdda3b6d3395fca9a1938706b69f0b"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "2287dc6431eb0dd0baf534ac92b013a2"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "00500517ee9bd03b588ee46d97c7621f"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "87686582ee649975364d530d4e575399"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "ed351e63950a84cce074941472c1089a"
  },
  {
    "url": "en/basic/index.html",
    "revision": "45a66466e644f2189e6990c09b21cc51"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "9d5e58693e021268ea7ba83cfa372161"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "bd936fc31cb43f746b4799dec4b5e9b7"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "aff8fa44d4578da53c8fd35462e700bd"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "92bf42b7408c2b49e6cdc9e439d68a67"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "d4653cbd6e07440b8e5dae33f1a78203"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "603047140ce8fe405484f9c75027a639"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "3e352f0f5f5b5c164e6596b5aa61602e"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "b36695666c5d7f3bbc3e68fe26fbbcf9"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "90c307d1cd82b2a9830dc91064fefdcc"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "6a02e60ae3483db4ec2cbb2dbbbf21ef"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "5c1004e03a62b6f9f2b85ac92b41befe"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "7c8142bf9e8ba41e6cc6e05bcea12960"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "16e8f655fe69585b83a5a12370752cf1"
  },
  {
    "url": "en/guide/component.html",
    "revision": "64dae5e651f329d6a4423df8daffbfe2"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "f0fc556e3d3bc9a7e7313db49a519efb"
  },
  {
    "url": "en/guide/home.html",
    "revision": "89b284217698704060f740598c00c248"
  },
  {
    "url": "en/guide/index.html",
    "revision": "5387d055942a9f6f89a10e5788b3cc0d"
  },
  {
    "url": "en/guide/install.html",
    "revision": "5fe70a8d712bf5f45402df4e4c52d400"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "4a76c276401e0ba9012a9e4dd12a8f99"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "937f1a31b9cd94aa9e9c77bdb9e6e115"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "7bba171e2f56084c33e8407c2dc87205"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "a552d9b7c7a640bc8e9e4528c1684d84"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "ebe5b7eebf6a774bcfb64c4a6c8304d8"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "0375ac52640a7fc64bb31f150f22b72d"
  },
  {
    "url": "en/guide/page.html",
    "revision": "d3b932a527af289a3cf2a7850b46fdb3"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "0c69c90bd50594b7124cbaebd25dd226"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "4eae008811603c1c069d3c21a39e46f4"
  },
  {
    "url": "en/index.html",
    "revision": "5da2b9fcfc44fe914acbc009794fd279"
  },
  {
    "url": "FAQ/index.html",
    "revision": "8c0e1572e87007b65815554826142e6b"
  },
  {
    "url": "guide/feature/comment.html",
    "revision": "81476e78be7c9b0a284e0749f4e410d3"
  },
  {
    "url": "guide/feature/component.html",
    "revision": "4e0175cfe29696b9ebbffa054ca66f3b"
  },
  {
    "url": "guide/feature/encrypt.html",
    "revision": "9e6864b5962ce348aa8864534c918ae8"
  },
  {
    "url": "guide/feature/fullscreen.html",
    "revision": "6ab1018bee730764191ef99e808586e5"
  },
  {
    "url": "guide/feature/icon.html",
    "revision": "09142b713010f2f14e007927c4a9aee1"
  },
  {
    "url": "guide/feature/themecolor.html",
    "revision": "5a5b73d1d70966181786d741c20bd823"
  },
  {
    "url": "guide/index.html",
    "revision": "9e4dd8894da3e564de7ce4484d793053"
  },
  {
    "url": "guide/install.html",
    "revision": "96cbcaf8bc0c984b8377b3ead3cc142a"
  },
  {
    "url": "guide/layout/breadcrumb.html",
    "revision": "6d22ac0c21d86e6f05a642018470aea6"
  },
  {
    "url": "guide/layout/home.html",
    "revision": "54504142423332fd1256b58e6ac46fda"
  },
  {
    "url": "guide/layout/index.html",
    "revision": "58045d4dfea312ac7660d9551210ba1a"
  },
  {
    "url": "guide/layout/navbar.html",
    "revision": "0c78bdf43d6fdcbbc896389b6fa9883c"
  },
  {
    "url": "guide/layout/page.html",
    "revision": "da23608423cfca7843eb46760950049b"
  },
  {
    "url": "guide/layout/sidebar.html",
    "revision": "3b77d6f376836547873661e507158e6b"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "9239223b8f940e9226fe7727ff2f89be"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "3ce2074ebac8ec8c9d8d2b9ce2d7afd7"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "556f6f484c5d265939d1960ee7a12284"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "a86cafa2bfc42ffed6fa0a37b5be1a9b"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "8dcb0266e88e2700b16e443de1afeab8"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "368c89ae06ae4f1d1443803139da03b8"
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
    "revision": "800224e72e699a3fb1ff439078490567"
  },
  {
    "url": "logo.png",
    "revision": "13417285202b91bf6571ccef63c17039"
  },
  {
    "url": "logo.svg",
    "revision": "2ff99a4865a6eceeaf3d949e479c7990"
  },
  {
    "url": "tag/api/index.html",
    "revision": "1ae8498a47601c31198e11ca9f506180"
  },
  {
    "url": "tag/comment/index.html",
    "revision": "304e79f61a71d9b5d36cfeaed8f0c42c"
  },
  {
    "url": "tag/component/index.html",
    "revision": "a1d5f6d3354da2ec189d353dc3e792ac"
  },
  {
    "url": "tag/components/index.html",
    "revision": "a5c9694ad6e77f2d7e58c3475c4df570"
  },
  {
    "url": "tag/emoji/index.html",
    "revision": "39fc4dc853266907c14bb11b3cb1500d"
  },
  {
    "url": "tag/encrypt/index.html",
    "revision": "2286de9f2ff7e91f9460716b178d51d2"
  },
  {
    "url": "tag/enhance/index.html",
    "revision": "752461937f65651b17c659af2df80d4d"
  },
  {
    "url": "tag/frontmatter/index.html",
    "revision": "ff851e3cad0d6363a909d75df3599d17"
  },
  {
    "url": "tag/fullscreen/index.html",
    "revision": "c182d088c73d405baaba23aa56ec30d8"
  },
  {
    "url": "tag/function/index.html",
    "revision": "d0e75ed6b24af59a02a96fe8fcc6e57e"
  },
  {
    "url": "tag/home/index.html",
    "revision": "d208d70ebd39c8a76e6f2aeb5262da19"
  },
  {
    "url": "tag/icon/index.html",
    "revision": "f4db1e6d866f84adb5a1e26a185d08fe"
  },
  {
    "url": "tag/index.html",
    "revision": "906ca42ebed6a31340da5c9a325c7ce3"
  },
  {
    "url": "tag/intro/index.html",
    "revision": "00888cc30bb47865ae65ecf980471a37"
  },
  {
    "url": "tag/layout/index.html",
    "revision": "a998885ffbaf79f0e5d585f968176166"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "d23ce1efcad813a909809bfc0f38bce5"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "17542cf17481b3c8f7e3ac3e8f0c5729"
  },
  {
    "url": "tag/style/index.html",
    "revision": "86f7b2025d99979a76fc65c8203b25b5"
  },
  {
    "url": "tag/themeConfig/index.html",
    "revision": "ca4b1879ae7a981ab501febc8e64d10e"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "2e76fd8527c9d29d8fd7e2bcca637007"
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
