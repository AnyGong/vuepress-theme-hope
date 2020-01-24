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
    "revision": "237a288baf779fb97749517b4c45f02a"
  },
  {
    "url": "api/index.html",
    "revision": "f78d6e22f7377036e35212065d2e15cd"
  },
  {
    "url": "api/page.html",
    "revision": "4ae89b5597acb532ed616d1b0a0a0ced"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "8621c52a8cad93a7d218222941274281"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "2ad3536b30c002c4886797aa30a91458"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "924d12e8d6c9ef56b8910971ffcee979"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "f45b2d6762b2f8e653d35b384d9c9150"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "c2885d235c61c66d95c7b559c861805c"
  },
  {
    "url": "api/stylus.html",
    "revision": "254d3245f310abe3fd1744d60116b754"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "109128c0f08d9ac1fa6fdd1699a01bc1"
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
    "url": "assets/js/app.a3b817cf.js",
    "revision": "0a64398bf51a6a9bb7756451e0ada779"
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
    "url": "assets/js/page--33732ef1.1a79072d.js",
    "revision": "a364fddbb415490c7bfd01f71a5dc80e"
  },
  {
    "url": "assets/js/page--608d80cf.0ad7647f.js",
    "revision": "64a5096d2b01bef7778cfccae02dec4d"
  },
  {
    "url": "assets/js/page--b64dd6ee.90db342c.js",
    "revision": "edfe853a44c25978bf5486f80400dfa0"
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
    "url": "assets/js/page-flowchart.8e5bbb19.js",
    "revision": "86f2aec750182a07d1c83b87afdf7e53"
  },
  {
    "url": "assets/js/page-Footnote.66abb894.js",
    "revision": "c7635b3f85fdd70be1ce738577a07d33"
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
    "url": "assets/js/page-Home.724f6b10.js",
    "revision": "61a4bd301d3efe07a357b742eb3a85fb"
  },
  {
    "url": "assets/js/page-Introduction.5aadcdd1.js",
    "revision": "03b7bae759d60d9935c743e6a312bc5e"
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
    "url": "assets/js/page-Markdown 中的新语法.d8449650.js",
    "revision": "1a1e2f0565300f14a199682b76a47112"
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
    "url": "assets/js/page-NavBar.926e0705.js",
    "revision": "c6ff913b19286e4c3d3dbe9e6958dbc4"
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
    "url": "assets/js/page-Page.360d0498.js",
    "revision": "e9aa26e08e218659180ba94e8ee32500"
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
    "url": "assets/js/page-Sidebar.aabd185d.js",
    "revision": "069d8f65d21b7bac7612a74faf3713b4"
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
    "url": "assets/js/page-Superscript and Subscript.3f179b70.js",
    "revision": "3a00acbdef5da3dcfdbef63114e09b75"
  },
  {
    "url": "assets/js/page-Tex Support.6cdb8f6d.js",
    "revision": "52d3ef10d7ff011739ac489ff8921671"
  },
  {
    "url": "assets/js/page-Tex 语法支持.dfc1cd0e.js",
    "revision": "357faa0c6a550debd64d154315e10b24"
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
    "url": "assets/js/page-上下角标.4ee20ce2.js",
    "revision": "697d5b7f83846568d356972e4315feac"
  },
  {
    "url": "assets/js/page-主页.2d0bbe99.js",
    "revision": "a3f0631f9d3fcf9c00a68d5cf7abfcfd"
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
    "url": "assets/js/page-介绍.3dd44243.js",
    "revision": "3f632acc35d52688fbb7e961f16bcb38"
  },
  {
    "url": "assets/js/page-侧边栏.67d61e6d.js",
    "revision": "8f960dc02f5b81788eeb0398d0ba695c"
  },
  {
    "url": "assets/js/page-全屏按钮.278c97c7.js",
    "revision": "e3b327ff0e701ba2bf22d332b9bc36a5"
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
    "url": "assets/js/page-插件.e3e58bc9.js",
    "revision": "ae12e647ee129ea1d396cd0e92298228"
  },
  {
    "url": "assets/js/page-插件说明.483b63f6.js",
    "revision": "d12f2735a6e7ca8dae47ef6154b34123"
  },
  {
    "url": "assets/js/page-文件结构介绍.7aed5354.js",
    "revision": "9d88bc8c68d99932d03b4d6cc2d89cc0"
  },
  {
    "url": "assets/js/page-新增组件.684bce0a.js",
    "revision": "98e478aeb219dcd889acba6ab814af76"
  },
  {
    "url": "assets/js/page-流程图支持.7fccaf1b.js",
    "revision": "d514da3cdd9a515d75e1839953b32ac4"
  },
  {
    "url": "assets/js/page-脚注.cf6e83c9.js",
    "revision": "e9079937331d0d52163703e09676dc51"
  },
  {
    "url": "assets/js/page-自定义对齐.d6557e7f.js",
    "revision": "87b1626bc206fefb73b3d775f8541da3"
  },
  {
    "url": "assets/js/page-评论功能.6cd4a6af.js",
    "revision": "6593aaa584f774cb6153c8b1de0baf97"
  },
  {
    "url": "assets/js/page-路径导航.bfab29fa.js",
    "revision": "ba010b0bb85d8a988235d5860f40925b"
  },
  {
    "url": "assets/js/page-页面.03703087.js",
    "revision": "b934f13d3728bfb44796b8c0b756df12"
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
    "revision": "74e1d5b5b568a271a0834b2ced685368"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "731ee0af92e092e6c0db75a0bc700eab"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "bcf728c28643aa587183931cf4003c56"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "0804427707fa66bce5a3b0da164758bd"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "57ef75341d5314717eafa8af6ddfb52e"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "7141881b2841ab3f4d5a03a08032b5a4"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "333d12215303e31b4a42ffb1b72da68d"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "affb290fbfdb50c7a8ac565f0c671946"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "c423e8c2e40bd691652e16985263969e"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "a3c622e98480e1367657fd90a9501c1f"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "60498a1dfc697b6d857b1f6316a94c9b"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "b761a10d966b020a6cf0748344514d8d"
  },
  {
    "url": "en/api/index.html",
    "revision": "fe8517b5d9b8fdc0c71edf9a55ad4104"
  },
  {
    "url": "en/api/page.html",
    "revision": "ba20a77963e55c887949c9a03382c93f"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "40a08c9689a8ccc4b2985d9663e28aba"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "3ba92b7ea09104a9ce9dcadab158562c"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "9af9a6e80f07c909ed6a61519ab1f9d3"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "f266890f5efee3bb93681c7dabe982f5"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "cd38eeca6ab2bc12b4e0d0b0a7d846b5"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "68081ae3714a5116bba2fba7a7fe7f3a"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "9d382d7067b9194efd610cae2c4f2b50"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "5214d20a3a06d0f211490b15a4c3a816"
  },
  {
    "url": "en/basic/index.html",
    "revision": "441e90e63e64f580b4d2f75af62b82cf"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "0c32725dbe770a4f0d6e1fe7b163adf2"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "bb31286225b6193054f1aa07c22d9d13"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "c9965375ef9b21e46c3dd6b68234331b"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "193041217002e45e7efca56b210b9bd8"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "cdb531bbbc649ce122278901b0e5114c"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "239c727a711c5e041fcdd860f95f8854"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "62a3c79e84096ca035b6df541196e4cc"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "920e67e1305be49293cf8ae023150bf5"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "59080ea61ff9508b9b567b486798babe"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "ca29bf40d42e0c2d2f7f504d6014e618"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "88777572fb4e04fc73058be6ba3ba351"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "bc79aa0a8413b3e5de6acd23345141f0"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "1060b0dd49928338732f4eb8cdd04dad"
  },
  {
    "url": "en/guide/component.html",
    "revision": "304c3f707bcb40eeb491b451fc3ca34f"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "5ac46b8586dfe40e09f3baccee876e48"
  },
  {
    "url": "en/guide/home.html",
    "revision": "acb6b0bed2d28034d1d709f371a0b18c"
  },
  {
    "url": "en/guide/index.html",
    "revision": "050c1ee51e1f0050bb9a800a601a6cb8"
  },
  {
    "url": "en/guide/install.html",
    "revision": "0fd84c692232fe1dd7a8999ca17f4b7e"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "cc5fc6d359791eee5643017328419b33"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "7574b30014241be8c857d6a398db5ced"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "2fe01eb9e9c3cf779b29a9b89a8c20dc"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "8868404d7ce163ce138f7ca5ef8a40a0"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "a82d89854677dac0c558f4f648a266d2"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "64a62983ef1364c53286ea13a35990d5"
  },
  {
    "url": "en/guide/page.html",
    "revision": "6f6b936eb9bcb1e6128d9d79eb50ccdd"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "dae21923f75adc4c4e7aa73666e495b0"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "7a2c244c24f59b47062e8d109293a830"
  },
  {
    "url": "en/index.html",
    "revision": "b766ff3c88983f3fcc61f68cd000c35f"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "0e1e64d14443b557979ba03f62c445f8"
  },
  {
    "url": "guide/comment.html",
    "revision": "e18cf010e75d5ca1c724b485a9e1bfd9"
  },
  {
    "url": "guide/component.html",
    "revision": "82df88d8abd5687cf4042cb58a2db2c5"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "c7cdb9e77971fd93e6db1429cff965c2"
  },
  {
    "url": "guide/home.html",
    "revision": "9b952fd2e9b90188c0f35061c6f08c37"
  },
  {
    "url": "guide/index.html",
    "revision": "6307b189915fa383f3ae3d4817972d83"
  },
  {
    "url": "guide/install.html",
    "revision": "e51ef0204053cff54d64dfebf1362e7b"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "425ec9741a1043e75acda17f0c66c025"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "a5d353e6b2bed51ad379f2f8012e1108"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "2f430b07f03aefad0d98f2648830a5f2"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "05019673a943fbcbf91425e9ddcd083d"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "2bb12cd9bfba88d11b720cd0af2f82aa"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "c3e4db386d8409c70a3475e202e326e3"
  },
  {
    "url": "guide/navbar.html",
    "revision": "3640cf90fe4f84cd65bbcb5e93bd7a1f"
  },
  {
    "url": "guide/page.html",
    "revision": "a99784c4f7653d5a42e94c221cbfcd40"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "3d5a117e785b7c6626566edf91c11396"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "55d09d54dba4fa7bacbae15aa61f6fb0"
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
    "revision": "1d9215c4bae46ad5a45c618ff55e157f"
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
