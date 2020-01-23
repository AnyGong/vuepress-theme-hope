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
    "revision": "cf27ad5ca5cfc8d476ac636aa4f50abc"
  },
  {
    "url": "api/index.html",
    "revision": "c4f01b2a4f840ef9d4f35ce38cdc540c"
  },
  {
    "url": "api/page.html",
    "revision": "17509709a9c12b23bdd275ba8f1ba48e"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "13ce793e6583955dc19abb2df5e2299f"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "3d415846d21d8b35ad437500bb04f84f"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "25cc628d9f64fb28ba358ccb148b0d54"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "d44b643ba2eda1faebd9def7ff26c496"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "c4e49247ff52afb78b0bba6b16832d25"
  },
  {
    "url": "api/stylus.html",
    "revision": "132a825ecda646c7b2d7e11a67ad0113"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "4a2b4fcdbe6b89c464c2e2cf6d779098"
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
    "url": "assets/js/app.874b8074.js",
    "revision": "507ce2a16b616cf0e9ae3793e5b4cb97"
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
    "url": "assets/js/page-API 文档.95b906ef.js",
    "revision": "6a640be9683378e2740d5a0a46ae7dc7"
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
    "url": "assets/js/page-主题配置.6a595047.js",
    "revision": "130f82c5c7f411a0dfcd8e7bd6560b83"
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
    "url": "assets/js/page-插件说明.dbbbe24e.js",
    "revision": "44a084c5428d9b7a0c75b14da74a9d5d"
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
    "revision": "404020f08534d781f2d571e424d8f3fc"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "add2fe37840ea5f516b977943fc40b90"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "ea961ee7ad85cdbc362125fc465d1fe7"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "501a2fa1845dec911c8b64937c5ed242"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "16b36ed08d1d7949d2cb5b40d9c326fb"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "6efaff94f5fb8f32a1a369b6cdf149e0"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "00a7f2d07325c44de9e97c2d95b3b7b1"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "9e3493cccacec461959ef4db6f51b742"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "e3a0f8d2fc951ded0a8084101dabee12"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "0c40cec168610ad19d3ecefcd814df78"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "ba58acb94a0926647247e5f49e02ea76"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "be99038b9e711993acb97f7a4a4dc404"
  },
  {
    "url": "en/api/index.html",
    "revision": "ce2934e96af651b64ac8dc072fe8d304"
  },
  {
    "url": "en/api/page.html",
    "revision": "1ffcc4b69a357b04e68869a9e03dbcd9"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "6017fdcf21ebd5fe0e830c786e4929b4"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "56aac42b832d1237f736b39c70acf093"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "d05ca6e1f93cc4058475bb9a2e293eda"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "219e531f40257dbb1fb9439bf96ee34f"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "85097c2e41ad2b55582a6f32a056aeb6"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "836e987f939d548dd3edd434b805e80c"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "6cd6706368235572bfbb816872b3fa35"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "e1166373b3a21c7d3c4c8507a2c785ec"
  },
  {
    "url": "en/basic/index.html",
    "revision": "dc5ac035ad7e91c40e0901d57728823b"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "996fb451627bb88e81272a34bef8fc12"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "1cfe94e0918c710e6078ba3b73ebccd1"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "a56ff037bdd9a3a7811b9cd3fca70f23"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "22080b7c9d1c174915f932b5e5296314"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "3c39840600ab4fc1ecc5b8010664a6bd"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "b6372da5a313b6d18136cc8a9e8b7888"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "fddeeffbac00986cbd6ea1c96a1ac669"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "a083ee44b871a02b23085ee0ccc73aac"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "9329af21e78ce467a5a24a9288b61457"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "384ea8a67358bb5d18287b2da3c67a25"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "3dc68071dafab275231ab432aea63039"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "fc28f8a4e99eccd98f64171821c061f1"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "cf91d41a675e4a7b2ae666c7dc730644"
  },
  {
    "url": "en/guide/component.html",
    "revision": "6b4d30548da093a968baa96ae84d39ce"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "63970a5e3946fa2fc2007cc686e01894"
  },
  {
    "url": "en/guide/home.html",
    "revision": "09dbd3e666d746f898d0b8b3893403de"
  },
  {
    "url": "en/guide/index.html",
    "revision": "23434bce69607f222a060490647048f0"
  },
  {
    "url": "en/guide/install.html",
    "revision": "b6f41d168f4cdeb8998b880c5c58158e"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "fe696ec1b9c67f2b28d5acf63257339a"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "79bd75d25d4dc8bdc7881e1ff1a79d22"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "e7d814104db2222ebaf3d612bc48f118"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "40ca638b295e6b5bffcc684847015a4b"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "71b0992b75c0ec12e90ec2902aaf7023"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "1cc34c2972156e1884de6d940718f612"
  },
  {
    "url": "en/guide/page.html",
    "revision": "ece19c74e12c2718cecc8fc88c31d80e"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "b9e44698d868ddd2c5e01e3885ffb2e9"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "c407745345755cd71a0c5775d8815489"
  },
  {
    "url": "en/index.html",
    "revision": "777cc8471642db13f6b908293027c7e5"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "04b0515c9758da02e0c4c5e101ff034b"
  },
  {
    "url": "guide/comment.html",
    "revision": "594e09b2a3ee443e069477e9de230ad0"
  },
  {
    "url": "guide/component.html",
    "revision": "78bda8471ae5abd30c56d93bc0473ca5"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "515f59eb07acec9ed64285b11ed6d21a"
  },
  {
    "url": "guide/home.html",
    "revision": "53a9f8f60aa20cb038c578aa9f3af015"
  },
  {
    "url": "guide/index.html",
    "revision": "ce01e814b97c20fa70087b5d91c52312"
  },
  {
    "url": "guide/install.html",
    "revision": "9e3cd1f1b76b676b633c13234d1bbae7"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "8f31247dcf0a4470cfaa317be0c59bfd"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "c77e7dde9ff6a1c8f00101a2d3b13ef6"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "13450e6e8b7f5128505581e0eae150db"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "2caea76f117a10ec28366343c523d8f5"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "2e157ea86e51943c843a3c1bfde6451c"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "ec205966493be60347bab16aafa818c0"
  },
  {
    "url": "guide/navbar.html",
    "revision": "714fa58d236024506bcb96983b215ba3"
  },
  {
    "url": "guide/page.html",
    "revision": "83595e7900c1f271e44710d8a3b2440c"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "a568cc1a81773ba756d76f3427f92aaf"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "ed7df5ce17081dd01dccb64d316f6669"
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
    "revision": "b2253d77e374e1ff6ae7fa279c3edce0"
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
