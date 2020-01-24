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
    "revision": "9b0385da7be9a4f2320f3c59b400d95b"
  },
  {
    "url": "api/index.html",
    "revision": "b71ee3ce0e3c2116847e44ceab95adc9"
  },
  {
    "url": "api/page.html",
    "revision": "d4d3e8fbebadcfd3177e63ac0a19e4d0"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "06a69460e0be4eb7cf0653c289f06b2d"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "baaefc4ed92c53af91f7878cf3deecc2"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "ecb2452c4ef19cf9ee529c6a85cf359a"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "de4490e8727e9cb32bd31ccd38d22207"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "25ebc82c25919e0423340006a3db8a35"
  },
  {
    "url": "api/stylus.html",
    "revision": "447da5e281dd3de8e91f7e67933344e8"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "f8c12262923d82410c342be2fe684301"
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
    "url": "assets/js/app.a202ebc3.js",
    "revision": "65dde47c8e389b2f822bfc7fb1dc2791"
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
    "url": "assets/js/page-API 文档.fe0b0a68.js",
    "revision": "d3b7880bf3e6a6d9bff175f3b6c0ecce"
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
    "url": "assets/js/page-stylus 配置.4ec2ae71.js",
    "revision": "f71e53d0d79039ec0a1c047fd7f01a60"
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
    "url": "assets/js/page-Vuepress 案例.53fe42cb.js",
    "revision": "41f1999b0432848a9ae6266029b48f3f"
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
    "url": "assets/js/page-基础知识.30e40cef.js",
    "revision": "43b504f0907e31f6959d9c07172015aa"
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
    "revision": "876d936204a5f2e04fe369fc4b2cc2c3"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "fd464c0c477adc6f4f419ba66ed305fa"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "98fe664ac38caadd932b3478e71df475"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "ce30395999009cc01b5569615917508a"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "bd1e74e32353b9f17b0b282635507d1b"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "d83e4d0f5ad120e3ac99334cbd9d9283"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "b4c4565cbd8081ba5bb67530d5b29617"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "ed6396cc1dca8b1e04cf56dbf4dd2086"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "62175d52ef25745bd5a5c030622fb378"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "080cccdfb0c73c9caf5a056f4d3ffa20"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "a9b67f95778d72702be75f0a45037bc4"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "f6890d8de9dee508e86e5b9d5b5d22b1"
  },
  {
    "url": "en/api/index.html",
    "revision": "cf5ac0de42931e53a52c05232189e178"
  },
  {
    "url": "en/api/page.html",
    "revision": "fe624bc4f62c9066d1284df2b406b959"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "5aedb7346c5f2cdae7fb1bb2f83713c7"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "833035e6885fb3d2f90ea93b4a3c4c09"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "5f118d3b7dc5cd57d49139d8df3abf6e"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "ce37c5c625e9592a2433a499e838de02"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "03d8482c2979433c9fbf308c04862b2a"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "9514f341dd042a48041ac5f5ff1bcbfb"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "c445706dae866c531232191bebb3aca1"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "2ade271ae08c39ebbf74539f5e0046c0"
  },
  {
    "url": "en/basic/index.html",
    "revision": "af2302b5283ab3b4767b56943a7cfdee"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "14ee6e19bded99ece0a14480e38c8089"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "3d42de73b765f7920a5f631f4032ae35"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "2fb05296ffd0966ad990872366c44699"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "15c35fbea814d08afce530f10b302fdb"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "3bca3a622daa1c4c4e9cfb34ee5decaa"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "30e0c582e9f24f866377b33513ba0e32"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "ecd8cd11d48c0b2b47157950ff909488"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "7e04eb76fe9369288c881ce75d466460"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "0a2131f8333c735c37604331723092fe"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "054b60b0251c9a2b9097dd438ba71f24"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "00ace1009e651a80608a3758c5fdfb5f"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "504dde58cc5e54b990919f18277468f5"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "0d4ed7f5204e67199719ab61c59f5611"
  },
  {
    "url": "en/guide/component.html",
    "revision": "d6c4a45245d8cb0f448f806ebffd120a"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "dc4713aab13a9da5591db354bc69b582"
  },
  {
    "url": "en/guide/home.html",
    "revision": "b7943ecb35285901691b5c22d6e7da0d"
  },
  {
    "url": "en/guide/index.html",
    "revision": "9511d93c533c03c8b848626e01101226"
  },
  {
    "url": "en/guide/install.html",
    "revision": "9f3a15abe9a42583ed8c3ead83482a83"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "14a49ed5a5b4d30db8994d26fa640124"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "3ac4c917b05f4ddb0a1132a7225f1da9"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "390e5cedd15d9266de5683af3b086a5d"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "edfba708569108f74a005fa3bd4ef931"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "f1112a8beb491a255dd7fef5898c2b17"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "5ba9170b9ed5000228bfa224eadcbdc6"
  },
  {
    "url": "en/guide/page.html",
    "revision": "9f31a7934deb156c87e75eaf3c252620"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "82dc9325b90c63acb4ab45eb4776f139"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "714d5813cd62d3853217415bae1d1ae4"
  },
  {
    "url": "en/index.html",
    "revision": "9126dc87db89d7bad709a2e3b3616460"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "f9b134eca2a9f2adc04ae70e556f273f"
  },
  {
    "url": "guide/comment.html",
    "revision": "cbecc73e9e3112d57f6d4b106270c323"
  },
  {
    "url": "guide/component.html",
    "revision": "fa992346566fe92f9e0503048998b131"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "71f5b8ae17e9a794b172812f0e3b0fea"
  },
  {
    "url": "guide/home.html",
    "revision": "c6df3bc2546b63ce39ee34e4ace3817b"
  },
  {
    "url": "guide/index.html",
    "revision": "1e46a9863a25fbc5853f2464f64d5ffe"
  },
  {
    "url": "guide/install.html",
    "revision": "cff8ff64ba8e4e0adf5a67af889a93a6"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "8b35900c29a14a69ce2c9ce236795e59"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "a9cf00c9c3c8f2c5163e37a9e71e7c7f"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "7bd0ac10202b5801249d1149ae8c6736"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "6ea653dcc1b4cb40e0b32a87d6d2449d"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "d6ee4353e4980d732f7efc63d6e7052c"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "89198aecc1719cefd69ae91be9d407cb"
  },
  {
    "url": "guide/navbar.html",
    "revision": "bd950f6bacb5524106b57f9bf68fc5bb"
  },
  {
    "url": "guide/page.html",
    "revision": "86ddb81255a581c29a4c8519f831e966"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "035f3ecacaa57f3d08f28787d29b1d1e"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "049b1d2685163083b5960f7758ab8082"
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
    "revision": "de1278d0f97b451fdaaba428692feca7"
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
