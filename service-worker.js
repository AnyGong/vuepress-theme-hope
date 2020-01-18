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
    "revision": "70571fffdeea7f7f3de1ff70c1ed0d5a"
  },
  {
    "url": "api/index.html",
    "revision": "f7fafb8bb96ceda9695e952ea6077002"
  },
  {
    "url": "api/page.html",
    "revision": "a6e530eb726592daf30cd3d59beaf323"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "a55b9d35482e423784d23cf9418c4bf7"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "c61d9566255ca9c86d006064745147f6"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "b218e9d45c1392055f1a261cb641d8a7"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "55dd1c7d1b3bdd8704587811bcdd1551"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "3c6d8300ff9c608868b88ec1ea742102"
  },
  {
    "url": "api/stylus.html",
    "revision": "c7531366b01038138f2dfb620e60e165"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "c6c5f8563023bd70e045118c18b1589c"
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
    "url": "assets/js/app.34a0209d.js",
    "revision": "4d2aa1aee2cd63fc8f8af1f84f76167e"
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
    "url": "assets/js/page--33732ef1.891a0941.js",
    "revision": "7c2a7b4ac1f35186ee5e413f10a6b761"
  },
  {
    "url": "assets/js/page--608d80cf.a9b59045.js",
    "revision": "c4a851a9539804bb0c8035a502d016e2"
  },
  {
    "url": "assets/js/page--b64dd6ee.a6fcdd97.js",
    "revision": "eef947a4e141513f577d8b8918022914"
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
    "url": "assets/js/page-flowchart.aa482739.js",
    "revision": "3e3aa6f08442ee79811f5ae5b329c03d"
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
    "url": "assets/js/page-Home Page.a6657535.js",
    "revision": "cfc9a7fbf4b6323700e80a5e36fd130c"
  },
  {
    "url": "assets/js/page-Home.5b4c578f.js",
    "revision": "8afcd85b0e94b99950c1f00fe785b7ba"
  },
  {
    "url": "assets/js/page-Introduction.b90f1576.js",
    "revision": "cad6b610a954b28012570d25af96027a"
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
    "url": "assets/js/page-Markdown 中的新语法.ce345cae.js",
    "revision": "dfb8961b152b8846e37f811c7bde5a0b"
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
    "url": "assets/js/page-NavBar.f9706688.js",
    "revision": "fa1c3d8861d8a2536eca9d78f483d057"
  },
  {
    "url": "assets/js/page-New Component.1dab021f.js",
    "revision": "f8d8aa460f4d73d0d69d7017ba4d7b9e"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.1678ab06.js",
    "revision": "81b8864bf810a4f26798b8a6e6947ac5"
  },
  {
    "url": "assets/js/page-Page Configuration.15b958c6.js",
    "revision": "86dadbd96442ab563e763f5abd901031"
  },
  {
    "url": "assets/js/page-Page.a7b6283b.js",
    "revision": "bc8f8ad678651f70604d3165cdc6a9ba"
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
    "url": "assets/js/page-Sidebar.3b60e1de.js",
    "revision": "b7fa7a92073fc933d5cae419b94a43b8"
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
    "url": "assets/js/page-Superscript and Subscript.66f02d02.js",
    "revision": "0ca4b270b4bd3e00448247aec1b37063"
  },
  {
    "url": "assets/js/page-Tex Support.99cff7a7.js",
    "revision": "9d10a63080894ec40a82e9526da17c3d"
  },
  {
    "url": "assets/js/page-Tex 语法支持.604eeff5.js",
    "revision": "a0c7467e2ef5f0810688972ac8228a30"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.96160471.js",
    "revision": "61850e24ceae95460350d4a0a203a7bf"
  },
  {
    "url": "assets/js/page-Theme Config.a2ab9a34.js",
    "revision": "fb4b1b5f52617aa2233b9ad51bd1bcd3"
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
    "url": "assets/js/page-Writing a theme.919cdbca.js",
    "revision": "df042cf1ebf3a29df0fec689451f0bb6"
  },
  {
    "url": "assets/js/page-上下角标.2c1050b4.js",
    "revision": "6bb024ae0bd46d06ea73a0769b44bd41"
  },
  {
    "url": "assets/js/page-主页.aba20506.js",
    "revision": "8f3150bb85e04b23fda1e28a89582bea"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.9187efe4.js",
    "revision": "f9c353068f469921fc0a4a3dc52d6e13"
  },
  {
    "url": "assets/js/page-主题配置.f0576517.js",
    "revision": "72af43ac5ee707064ccb8295e528bdd7"
  },
  {
    "url": "assets/js/page-介绍.553e2ca6.js",
    "revision": "57a9fbcd2afdfc60bbdf1982b54de3a5"
  },
  {
    "url": "assets/js/page-侧边栏.fb8e7be7.js",
    "revision": "80fb5b669a28d7df335679fb230738ea"
  },
  {
    "url": "assets/js/page-全屏按钮.6585379c.js",
    "revision": "d6454e73f7e3ef0855aae945e0d5663f"
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
    "url": "assets/js/page-插件说明.102ddc59.js",
    "revision": "a319539f3b5aff961eaf54010001b4ac"
  },
  {
    "url": "assets/js/page-文件结构介绍.321438f4.js",
    "revision": "909cd3aec5fa9efaa8aee9c84e95e6c5"
  },
  {
    "url": "assets/js/page-新增组件.9322422b.js",
    "revision": "fcb60349aa28b76ae5b25df010d640a8"
  },
  {
    "url": "assets/js/page-流程图支持.8b27a02e.js",
    "revision": "7f10b3c721a6779c41d225dff4a15c0e"
  },
  {
    "url": "assets/js/page-脚注.bf94161e.js",
    "revision": "b57baa37a81668b869c2777b3b8a75ef"
  },
  {
    "url": "assets/js/page-自定义对齐.afabff82.js",
    "revision": "aa537b9a40807cbbdca1bc9fb882fbba"
  },
  {
    "url": "assets/js/page-评论功能.83f2dee8.js",
    "revision": "27c06fba09665b6a2db6d32973c9037b"
  },
  {
    "url": "assets/js/page-路径导航.c7d2038a.js",
    "revision": "b12c83eaf6a59ba3ec40915f3602661e"
  },
  {
    "url": "assets/js/page-页面.477736c8.js",
    "revision": "cea9d0908a94433c3e17d7485d6c55da"
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
    "revision": "3f2c644624154966d758798688247f23"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "f317bdd8cbf8fb8730245dea21c517df"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "6cc362f579245019dc7e4e3c03ef3b02"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "829f59bb81659370609498592b0fa791"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "04570174f4a31046ae6a112cca8602d2"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "e75b115d90ae9fa6100c3aafa3fc2d25"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "15905fc913ce00870ad2d84b4712425e"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "8c5ef762a93b5800741a643cb73b7f53"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "e6335747a598300865db44083bfbcd57"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "b25894d0defe269cce8bc47b6bb9d650"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "c8e4e3229367e9bc7bec5b9fd632dd2a"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "62347ad2108a37c8cc0f733d3c64b128"
  },
  {
    "url": "en/api/index.html",
    "revision": "0c46fc7be6185e8141b7933b22318549"
  },
  {
    "url": "en/api/page.html",
    "revision": "27b10f2bdd677833a46e0d1bac4c3bce"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "5cb2b479cf39f0e1989ddb5d649a5c6f"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "79e7e7b739a2bb1de0cbadf8cc6bd1fd"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "8b7138d465eeb4e50ea8aad33c341e5e"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "bdae3ac16c5701c9dd9cbe97fe55b53b"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "1a99128914885d0521d294996f927a87"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "62335496a8e7ab90cd93c4820b479e1b"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "b7f54eb603766e018403443896b9f25e"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "018fbbedfef87dc0977290f6a669bbe7"
  },
  {
    "url": "en/basic/index.html",
    "revision": "5dff01e7cf4e1adb1fac794938a632ae"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "1eac79df7b84a31f1ea152c103c87eef"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "468d7e1a296fd890bcbfe50fe193dcaa"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "3cb8a3cc1933c9c164a2ff57283927c0"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "b81cf55c35f0420317421154e49fd992"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "957b391a787bf69f33d905cea123c963"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "0c987c172adc0c8198bc3f720ef1c16d"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "1d58b74b58015e7ca237ce63741261d1"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "71acda851c5916f3687a087aea4a6649"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "0e9b16d8a0b7aa95f0588ec957fe7f4e"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "2b656bb97cd22b888f22778ec3900cc3"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "88a5997f860be587a385428b0d697a66"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "62421da0e93d5fbeb8059a4e382af591"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "a3d99a9502ddaf42710e3427a77220f5"
  },
  {
    "url": "en/guide/component.html",
    "revision": "4ec2317f5a468ba4ad3ebdaacaed6279"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "351b4f015983e857380369077d8366ce"
  },
  {
    "url": "en/guide/home.html",
    "revision": "1279178bc73c179c64415054220a7f7d"
  },
  {
    "url": "en/guide/index.html",
    "revision": "1e63062278ca975756ad64a0443b3325"
  },
  {
    "url": "en/guide/install.html",
    "revision": "8a4f58366b5bb4eb782de43514bd0899"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "d030aa4c53c22b85bb779f7c6be6dc79"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "1ddaac58b45da7ecd7d784681451a8b4"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "2c8e43a5b13d6331f98cb9b9f370f481"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "9e8a460a4463864543817e94b67027cf"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "3f8e03e300f5f1efebcaef6a5b5bb07e"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "363395b03040a6b52ef1eb4a43186213"
  },
  {
    "url": "en/guide/page.html",
    "revision": "992f934486d05497969916c986cb72f5"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "be9721945ac6ccdabd621aa6d170c51d"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "7199bc2582a5fa156034f622d3b5030f"
  },
  {
    "url": "en/index.html",
    "revision": "b7067d4e1d288be22e98a6a9e7045077"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "9c5201ab627d223e3391b82511e9c349"
  },
  {
    "url": "guide/comment.html",
    "revision": "f65826a370a1ae2841490df9ed40f473"
  },
  {
    "url": "guide/component.html",
    "revision": "08351f958dd8e82fddb5dc3623e88da1"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "8af2b26760de89d4b50c96670bc5fba5"
  },
  {
    "url": "guide/home.html",
    "revision": "9b6df47f83b3af76447b2c225d2f4b1f"
  },
  {
    "url": "guide/index.html",
    "revision": "63e046ff9180f0ac79dd2dc7cbc106f8"
  },
  {
    "url": "guide/install.html",
    "revision": "b4910788c84e9691c560a33b5d61a356"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "02615af9d63444776419f210afa32afd"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "f7472ccd12c8702c6efe9df973613484"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "4e2c960932dc87036924078ff9ce8d9b"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "fc6da8499ecccf5198c30b0dcff3a520"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "f2d220d00268bcb232444760ff213db7"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "464051dbd795ef4d611cf0a22be3f839"
  },
  {
    "url": "guide/navbar.html",
    "revision": "d5551e6f67b0948c0bcc0d20f265ede8"
  },
  {
    "url": "guide/page.html",
    "revision": "5107253214f9e3f8907d3ecf294c0656"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "e087b77b28fb901fae454bcc848a7efe"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "096065427ed5202396b46f4da9433a96"
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
    "revision": "7de885398d1b765bf65d989ad5ba7bf6"
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
