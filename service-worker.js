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
    "revision": "553ef85ce95753a7d32fa2b9c13150b5"
  },
  {
    "url": "api/index.html",
    "revision": "2be5c2cf6ccf4ebf59a86c97eb46a8b1"
  },
  {
    "url": "api/page.html",
    "revision": "3a21777be175e8da14eb5561c4992f26"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "13b046c691e02e096c453e85218e5680"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "ce1a19d9538eb2ba3c74345d465f7422"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "e7b56745b8042f0b84b0c4d55d2d228b"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "0b6c9363e1fd9955dab133f56a782784"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "3bd49e9945281669333e666b374b1370"
  },
  {
    "url": "api/stylus.html",
    "revision": "47ff792d1827f400b4c1f66df46c124b"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "2edd24f9b74b78b3739d8489a6c2b143"
  },
  {
    "url": "assets/css/0.styles.d65a7472.css",
    "revision": "39c3712176f9018bfc62770551e9462c"
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
    "url": "assets/js/88.9724c73c.js",
    "revision": "5b632bfdc275b90efe43eb862db14831"
  },
  {
    "url": "assets/js/89.882ff5e6.js",
    "revision": "e70070c1a4a6476aa8f8553c75469492"
  },
  {
    "url": "assets/js/app.2162e91a.js",
    "revision": "2fd9f51a2dba871466b630e333d27b22"
  },
  {
    "url": "assets/js/layout-Layout.0c187abd.js",
    "revision": "d1c0fced0c103dfceaa44dd4fe601613"
  },
  {
    "url": "assets/js/layout-NotFound.ebaa4df2.js",
    "revision": "276e10dcabaee1252b4399236edfd932"
  },
  {
    "url": "assets/js/page--1b278726.e449ad01.js",
    "revision": "8c10a543adf547c9c3b1a33aded33c6a"
  },
  {
    "url": "assets/js/page--24b68849.6de9bc24.js",
    "revision": "676804bb488090909433cb21a748023e"
  },
  {
    "url": "assets/js/page--298eb4e9.becd6bb7.js",
    "revision": "0943569f07a01390396ef4242fd16ee6"
  },
  {
    "url": "assets/js/page--33732ef1.122a6cae.js",
    "revision": "f3459aac2916332afc165d58c66744cd"
  },
  {
    "url": "assets/js/page--608d80cf.090b35c5.js",
    "revision": "8e38c114fbcee69353bc0412aa9557b4"
  },
  {
    "url": "assets/js/page--b64dd6ee.a02b7ab5.js",
    "revision": "1d255bfcaf407228f3ca92dc24847e9a"
  },
  {
    "url": "assets/js/page-About Vuepress.c1a43556.js",
    "revision": "f4ce03da47102e64ad5ea6e6dfccd6d1"
  },
  {
    "url": "assets/js/page-API Docs.e84be6a5.js",
    "revision": "a22d9913c647e17c9687f02646ea3c0d"
  },
  {
    "url": "assets/js/page-API 文档.c2da5e65.js",
    "revision": "448d9630d77d13ea5825e4143d5e3602"
  },
  {
    "url": "assets/js/page-Basic.510ffefa.js",
    "revision": "e955f015a541c5ac3feee4367cc449bf"
  },
  {
    "url": "assets/js/page-Breadcrumb.e1f6691e.js",
    "revision": "aac17f582535797488e9a13889be2813"
  },
  {
    "url": "assets/js/page-Comment Function.d6704d4f.js",
    "revision": "0f595041cb5f7235fc5d4e956a742406"
  },
  {
    "url": "assets/js/page-Default Theme Config.3d5bfeef.js",
    "revision": "84961d115e4e3af7c85adcce59333ffd"
  },
  {
    "url": "assets/js/page-Emoji List.cc15b207.js",
    "revision": "21d9acb85e40e009484eb80b0450db0a"
  },
  {
    "url": "assets/js/page-Emoji列表.1fbeee28.js",
    "revision": "9633c85ab4f84e0f0d0cc068affce8d9"
  },
  {
    "url": "assets/js/page-File Structure.6fe281d3.js",
    "revision": "e6f91aa8e07dfcc6720ebc6e55506bc1"
  },
  {
    "url": "assets/js/page-flowchart.90069f5e.js",
    "revision": "1ba0da80e16b7836dcd6f134d33e8921"
  },
  {
    "url": "assets/js/page-Footnote.e7fb8c20.js",
    "revision": "68a62a4288f5b58fd0e472d04bf62930"
  },
  {
    "url": "assets/js/page-Fullscreen Button.6d5ffcb2.js",
    "revision": "203e53002f8f8a15bb2c87b521ff839f"
  },
  {
    "url": "assets/js/page-Home Page.f0933c80.js",
    "revision": "c81523ee4318b4fc25077298685bdc5e"
  },
  {
    "url": "assets/js/page-Home.668f8672.js",
    "revision": "c037baad17b23006c18da8c189b61475"
  },
  {
    "url": "assets/js/page-Introduction.ca59b860.js",
    "revision": "02231525c40f68baa612e0376b09d6da"
  },
  {
    "url": "assets/js/page-Markdown DEMO.380699d7.js",
    "revision": "8706dce8e807e7f9616369981e18ca15"
  },
  {
    "url": "assets/js/page-Markdown Introduction.09f4c1c0.js",
    "revision": "d9e45f1b7fd011b861211cc5e6ab120c"
  },
  {
    "url": "assets/js/page-Markdown 新语法.cafffb86.js",
    "revision": "b1d47b1aa7b0bfaa83bb2a0c78c9f842"
  },
  {
    "url": "assets/js/page-Markdown介绍.68c3bdf5.js",
    "revision": "c3c67dab7f556d85df9941e89ea59a85"
  },
  {
    "url": "assets/js/page-Markdown示例.cce13ed7.js",
    "revision": "df9563eeee1b590fe0e09b1b42357047"
  },
  {
    "url": "assets/js/page-NavBar.bf3a5752.js",
    "revision": "af54cf7248c7fa70e95eaea60ed14e83"
  },
  {
    "url": "assets/js/page-New Component.813d46f9.js",
    "revision": "9dc89368fbf1242e2a5e908b1ec2db73"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.bb01735c.js",
    "revision": "ac2c1103bcdff84903427b8597fe9ee9"
  },
  {
    "url": "assets/js/page-Page Configuration.9e00d6fe.js",
    "revision": "4baa183bd7ed8805139b95a3f048309a"
  },
  {
    "url": "assets/js/page-Page.c5945992.js",
    "revision": "50991a8142ea128689602fea1b202719"
  },
  {
    "url": "assets/js/page-Plugin Description.8914b874.js",
    "revision": "7e92ffadda9bdb77c4deb30d2fecd214"
  },
  {
    "url": "assets/js/page-Plugins.47a41d21.js",
    "revision": "dfd8d58c25b481627f58db412eb6f9ff"
  },
  {
    "url": "assets/js/page-Sidebar.9b8d7de4.js",
    "revision": "e7a32fd678d91b50d194c8a896d0209f"
  },
  {
    "url": "assets/js/page-stylus configuration.d7f6f720.js",
    "revision": "603b3ae838965c267c158173a144230b"
  },
  {
    "url": "assets/js/page-stylus 配置.3617658f.js",
    "revision": "6a6bf61d910cbe974766d31d6bfea77b"
  },
  {
    "url": "assets/js/page-Superscript and Subscript.ca4855d7.js",
    "revision": "cd7fd530058d03d8bc41ce09e34b14fb"
  },
  {
    "url": "assets/js/page-Tex Support.59ea1bc3.js",
    "revision": "042227312aea8a09d59bdb0f8f4c4c12"
  },
  {
    "url": "assets/js/page-Tex 语法支持.b06166ff.js",
    "revision": "1a034fa0a48e79cd5920495a72fe6ec5"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.3fbd4c25.js",
    "revision": "3fe434a27cee63bbc483a9b298555597"
  },
  {
    "url": "assets/js/page-Theme Config.94e2c127.js",
    "revision": "1421b88335ebdb2f936fa529a707c0a6"
  },
  {
    "url": "assets/js/page-Vuepress Cases.c8caf5b3.js",
    "revision": "88a8f4d127b096a64361cb352ececb28"
  },
  {
    "url": "assets/js/page-Vuepress commands.b7a4c2be.js",
    "revision": "ac7849c98afb7426d7c3715313c0c47d"
  },
  {
    "url": "assets/js/page-Vuepress 案例.402bbc20.js",
    "revision": "57ee466c4281963ddfe5b40aa5360cf0"
  },
  {
    "url": "assets/js/page-vuepress-plugin-container.a034bb8a.js",
    "revision": "968635c01d118fdae37c90f6ebba252e"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.68898029.js",
    "revision": "0f016db4db5a5ffcfeef9316fe222f7f"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.aa1c2182.js",
    "revision": "040ec89bbbfdaf5023d9e5e02611663a"
  },
  {
    "url": "assets/js/page-Vuepress.b28e7e10.js",
    "revision": "f05f7bce9d5a3b780372eed674a0a9e7"
  },
  {
    "url": "assets/js/page-Writing a theme.bb289f7c.js",
    "revision": "5f177ee1e620133a9bf1369c64fe0bb3"
  },
  {
    "url": "assets/js/page-上下角标.e7ed8040.js",
    "revision": "c59cd82f8b1bd938f60e7e9a53c93916"
  },
  {
    "url": "assets/js/page-主页.b3a38441.js",
    "revision": "95af1d1ae1a5afcaca5bbdd44c5b70bd"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.7b55c170.js",
    "revision": "2ec488e840c74cd33f29f267f1309171"
  },
  {
    "url": "assets/js/page-主题配置.fd746236.js",
    "revision": "6611ba9a474a6c337b80ce60391b2543"
  },
  {
    "url": "assets/js/page-人物.20693d51.js",
    "revision": "5066c93b7cd4c8eb1be604b0a798ab33"
  },
  {
    "url": "assets/js/page-介绍.b2847a52.js",
    "revision": "5b21ad250de5a89937a2c88ed32a04d3"
  },
  {
    "url": "assets/js/page-侧边栏.d88d2f59.js",
    "revision": "ce124d2d550cce0e24ce5e6bd7b5e574"
  },
  {
    "url": "assets/js/page-全屏按钮.dc07c90a.js",
    "revision": "91d80468e330a92d3f722d54c8acd95a"
  },
  {
    "url": "assets/js/page-加密功能.461251b9.js",
    "revision": "a5d921b7b2466a2d9681b302d4f23ffe"
  },
  {
    "url": "assets/js/page-图标支持.d6ddd16f.js",
    "revision": "220a3431de8b8a4ca8e3da16cb615bfb"
  },
  {
    "url": "assets/js/page-地点.e5c41112.js",
    "revision": "25a284ae72a5c392405f87c4c1c6b42d"
  },
  {
    "url": "assets/js/page-基础知识.784c9ade.js",
    "revision": "771702effcdb97d6bc49a14595aea7c9"
  },
  {
    "url": "assets/js/page-对象.397e2b0f.js",
    "revision": "f2d0ba388e59a59de0b9d0f220b10606"
  },
  {
    "url": "assets/js/page-导航栏.529bbe87.js",
    "revision": "415bb2be9659987c6b5526282a0e9348"
  },
  {
    "url": "assets/js/page-布局.586f092b.js",
    "revision": "5335e37d53ea2403b27a28ec707ad04c"
  },
  {
    "url": "assets/js/page-常见问题.df533732.js",
    "revision": "26c64bfece8928fd475ca5fbdd52ac91"
  },
  {
    "url": "assets/js/page-开发主题.77ac4a7e.js",
    "revision": "4fdc0b7dc01926fce7c9315637faabf6"
  },
  {
    "url": "assets/js/page-插件.20a8f501.js",
    "revision": "f9008a2582d539aa9508db17069af8f0"
  },
  {
    "url": "assets/js/page-插件说明.db72218a.js",
    "revision": "0ecc15c248c06c2ec2ea16598e8e902d"
  },
  {
    "url": "assets/js/page-文件结构介绍.a25b68b2.js",
    "revision": "90edcaa1850fd09348a122f006c7476f"
  },
  {
    "url": "assets/js/page-新增组件.d3ed9433.js",
    "revision": "d61ce993a9c5f08cf274101575e7e5e8"
  },
  {
    "url": "assets/js/page-流程图支持.0d384627.js",
    "revision": "35d052b70ee6b4100b99ed18bcd4f2d9"
  },
  {
    "url": "assets/js/page-符号.27244c68.js",
    "revision": "ac732cb45bd835ad6fa85a5663e7eead"
  },
  {
    "url": "assets/js/page-脚注.5535e627.js",
    "revision": "f0969a958c80518229508aed47f9122b"
  },
  {
    "url": "assets/js/page-自定义对齐.6b77e592.js",
    "revision": "7843d9ba6987b132cb5a0c979d5ad19e"
  },
  {
    "url": "assets/js/page-自然.99bb23db.js",
    "revision": "6a3732d27f411a7bbe6a851b314c8da9"
  },
  {
    "url": "assets/js/page-评论功能.79f4abf3.js",
    "revision": "e0455736d01018f430e7b0c1d4abf3cb"
  },
  {
    "url": "assets/js/page-路径导航.a372fdb9.js",
    "revision": "257fad99b2a1d19b453aee98df21c236"
  },
  {
    "url": "assets/js/page-页面.e2b1c7d4.js",
    "revision": "2dc7d7ab782dfe5439e71fcb7de082b1"
  },
  {
    "url": "assets/js/page-页面配置.d11a7394.js",
    "revision": "aa43d418b749101aacfa083c153e8b8d"
  },
  {
    "url": "assets/js/page-项目指令.e0774155.js",
    "revision": "092a1366464154b1a02360c52b43b663"
  },
  {
    "url": "assets/js/page-默认主题配置.1ec5f684.js",
    "revision": "b15d76bd3db8c0bbd9c69e8538c56721"
  },
  {
    "url": "assets/js/vendors~docsearch.fc264c73.js",
    "revision": "71f5fee7801342fdce36836e5ef35ee3"
  },
  {
    "url": "assets/js/vendors~layout-Layout.9c952b66.js",
    "revision": "6cba6496b18dd6c23f4cc821b390c0ce"
  },
  {
    "url": "basic/index.html",
    "revision": "6bc08ab864f3d8e56aea276f9520d283"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "e0475e324e739285c36f25ca30cfd688"
  },
  {
    "url": "basic/markdown/emoji/index.html",
    "revision": "38e08cf61ae757b539e2f91a0d29c4e3"
  },
  {
    "url": "basic/markdown/emoji/locate.html",
    "revision": "48716d34071f5c52d25d59e48bebac28"
  },
  {
    "url": "basic/markdown/emoji/nature.html",
    "revision": "8d60e140165ecf66c9b86885a9b87747"
  },
  {
    "url": "basic/markdown/emoji/object.html",
    "revision": "91403a3faaf77debcdd2fc8a62b6330c"
  },
  {
    "url": "basic/markdown/emoji/people.html",
    "revision": "5c42fc1f2de5a7409aa1ff9e8883772a"
  },
  {
    "url": "basic/markdown/emoji/symbol.html",
    "revision": "623fe7f882bcd1d6099cb5963928be69"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "9586ac9dfbf8af4c49bcc6e57d6c8aa1"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "bb7a0048f9d2f6122f7bdf634d7af616"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "e73df4b858c03d98f2abd27ad6124cad"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "5e7ddd013bea948108fa5571758a357f"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "b92cc8fcdba3fa901d50e378d9cade00"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "8aa6204b644f26020eecf9f5168b2c1c"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "5bd37056229dfe29768fccda6658fb1e"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "fecfc0884dadb859d9cae3f1b8b50d3b"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "a629b755700a1bef94fe8cea45a20c7d"
  },
  {
    "url": "en/api/index.html",
    "revision": "c6d257a9095c380a3d63a0ad0af22383"
  },
  {
    "url": "en/api/page.html",
    "revision": "961309e93b34966b806de6b122fddeba"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "d2f6fd545bcd5410ed4ac0b5e4b1ea8e"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "0e415187b451c5e906cf617a92cac913"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "62ff2d1003391a8e1bad72147b23462c"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "54f51a6c75da5124da751c119a4e5de2"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "e4214e3d9be118eaa31e8c1c8ba28a59"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "0561b0cca75e4377cb18d9889e771de9"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "76c76a8b3138a7c7dabd69cb6153b108"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "65ebec37b2f9dd70f321093f2f290aac"
  },
  {
    "url": "en/basic/index.html",
    "revision": "1cd84d0892761251db69aa777a256c9d"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "02124e4c08b60568f3767d7bd3089aef"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "a97eccbfa3e270e4a10ad7b3368d93fc"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "dda2108585e86d541b7f2d3ca3e9f378"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "58201f2ca4b70c4a0c7b9f795f7d7e8e"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "9901bde50eb3f0f6419e67bbc9fc3306"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "0b0c96ebfce9b9b345a72ddbdcebbf6b"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "d15c9f3eef3865156d7c71090d4894ea"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "993f6eab1c0cc16a734a12c07d8001d3"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "9257420918a7ddf027aede7a69c49869"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "b9bebcb10ea5f76fe5f6889e8f85b52a"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "af54531a0ab2226836566088f5784187"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "3616a9b02dad8ce22e8176fc7f6a3b82"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "a74ae07e37b3cc8c60b6eaa676313226"
  },
  {
    "url": "en/guide/component.html",
    "revision": "3b931991f37f59258c116a9b941c487e"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "4b9156e4b336bf5ee6678e1ef9f7fd84"
  },
  {
    "url": "en/guide/home.html",
    "revision": "139d7c6ccc9697a891bd1bf90a45f2a5"
  },
  {
    "url": "en/guide/index.html",
    "revision": "4444af138fc94b07dec1f3e90a34ec66"
  },
  {
    "url": "en/guide/install.html",
    "revision": "4ef90be9a94d4a9a23d81646a552de73"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "566de33e00494940ffadcf7de8e197d7"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "d64643f89e3ec41d2308af0268bc8185"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "46352622ba5199716e76c901246f0755"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "d64124aeb372b41430f60b603b2bcf5f"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "b58314fe57869b4cd88fa9ae75054a16"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "d277513276684cd7ba8d4ab1e087e495"
  },
  {
    "url": "en/guide/page.html",
    "revision": "2b6bdd1d818dcfd4b00de14c554bced2"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "4170fe39d7b82a34989bf628ea1d3640"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "c42c12e79b4ea11e1e8dc61e5ae9b7ef"
  },
  {
    "url": "en/index.html",
    "revision": "19f27b6f73f6ad2a9c14ebadde4cdd42"
  },
  {
    "url": "FAQ/index.html",
    "revision": "49bbee8a3e2b50076525fbac887189a1"
  },
  {
    "url": "guide/feature/comment.html",
    "revision": "988539a9da6b03957f9feb003caaf631"
  },
  {
    "url": "guide/feature/component.html",
    "revision": "a38b28b4396fc16abcc62294f9c8b643"
  },
  {
    "url": "guide/feature/encrypt.html",
    "revision": "2ef3f1c35b0473825cc6889ed5f6c804"
  },
  {
    "url": "guide/feature/fullscreen.html",
    "revision": "a494890e791417e1fd9126d43bf0f897"
  },
  {
    "url": "guide/feature/icon.html",
    "revision": "940524cea5cba993a3b48921713389b4"
  },
  {
    "url": "guide/feature/themecolor.html",
    "revision": "afaf41074dc549db69eb00cec4ad3f01"
  },
  {
    "url": "guide/index.html",
    "revision": "2a8636c878f994dfca00cf1bfca05024"
  },
  {
    "url": "guide/install.html",
    "revision": "17133ba3cf019b073b47d3da240bc168"
  },
  {
    "url": "guide/layout/breadcrumb.html",
    "revision": "346f1bfed56aed69ae76e66cba68e019"
  },
  {
    "url": "guide/layout/home.html",
    "revision": "1c1900698f37a23fd33a04a27ed94798"
  },
  {
    "url": "guide/layout/index.html",
    "revision": "a481b49a798712f897a945c69e3b8550"
  },
  {
    "url": "guide/layout/navbar.html",
    "revision": "21e87f5bb1ad3cb2c98f690350e2807b"
  },
  {
    "url": "guide/layout/page.html",
    "revision": "8772fcf7ef1151f067d6beea3aa1e3f9"
  },
  {
    "url": "guide/layout/sidebar.html",
    "revision": "6b38156c61167b8e1eba8869c4cdbc01"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "971d9873ee4a67925bea0a5c0184632a"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "34d1accd32678c1a574d4b0b3fe23d9c"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "58bf8d11fa6a8b622157a435bb10aa7a"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "2775f6ab2a6977b854a0f74f941ca641"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "a56e0e53b672e7939b28ba0d2d6674d7"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "73fb114eb48484ba92a7f613a7aca8f0"
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
    "revision": "99c60097ab23f3a63a9e7d0df81e13fb"
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
