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
    "revision": "2fa63c56eb0ecf639283842910a9c34c"
  },
  {
    "url": "api/index.html",
    "revision": "df61364081cd7fefb57f804d064cba52"
  },
  {
    "url": "api/page.html",
    "revision": "ada05585e142884c8d8a3ac085968c90"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "e78eeaaa1f1eacda9ebd921f63dc8f2e"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "c887f5ddea4ff5fde05d7d5e06f5c8a0"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "a3f3788971a4a07608666d380806b1da"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "49ef1d82636d8b1fe32378aa8fb4fb67"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "8c19774dd53f2195f551dd28e0c0e0e4"
  },
  {
    "url": "api/stylus.html",
    "revision": "3952bded81676ead531c0fea78981c8b"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "3e3903fb007255af2965808a805a38aa"
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
    "url": "assets/js/app.650af38c.js",
    "revision": "42c8f8f0ef7939ce99d9999775e58292"
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
    "url": "assets/js/page--33732ef1.891a0941.js",
    "revision": "7c2a7b4ac1f35186ee5e413f10a6b761"
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
    "url": "assets/js/page-About Vuepress.754932fe.js",
    "revision": "634132714b6530172cb9e73ad6936802"
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
    "url": "assets/js/page-Breadcrumb.0114019b.js",
    "revision": "91f40346d2ccaee9e28471124005b304"
  },
  {
    "url": "assets/js/page-Comment Function.14dba1fe.js",
    "revision": "dc9562cd4c5ed68e8c43ecf7fd02f134"
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
    "url": "assets/js/page-Fullscreen Button.cb39ee6b.js",
    "revision": "044aff1d3a2ccfa639156231ec9a6a27"
  },
  {
    "url": "assets/js/page-Home Page.c0a76c3d.js",
    "revision": "78b2c5aaeddf4431614708c43716f312"
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
    "url": "assets/js/page-NavBar.5952fd27.js",
    "revision": "3adc328e82a047c149cc76e587b26f38"
  },
  {
    "url": "assets/js/page-New Component.a3b8f112.js",
    "revision": "cd16d3d1c8ff9dbac71163ced7b73f12"
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
    "url": "assets/js/page-Page.cf7bc99a.js",
    "revision": "7181c8ef62f500102d27af6b76db07a8"
  },
  {
    "url": "assets/js/page-Plugin Description.8914b874.js",
    "revision": "7e92ffadda9bdb77c4deb30d2fecd214"
  },
  {
    "url": "assets/js/page-Plugins.68257974.js",
    "revision": "cea4b028b0e79766d4fada251d981b2c"
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
    "url": "assets/js/page-Superscript and Subscript.2a1b6844.js",
    "revision": "9f1e3827e9120bb36801d36e3e5b9e39"
  },
  {
    "url": "assets/js/page-Tex Support.05fe2cca.js",
    "revision": "060bd1b6d7b13e2caa8c4c1e63b5b3de"
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
    "url": "assets/js/page-Vuepress.c4409132.js",
    "revision": "4a0ccbfa6eae12688cce809cc9119d4e"
  },
  {
    "url": "assets/js/page-Writing a theme.e3032c24.js",
    "revision": "715ff7c14d27738ba436684ef4a74d87"
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
    "url": "assets/js/page-地点.70a53559.js",
    "revision": "b448d80c18d158f172e44dbee14feb29"
  },
  {
    "url": "assets/js/page-基础知识.784c9ade.js",
    "revision": "771702effcdb97d6bc49a14595aea7c9"
  },
  {
    "url": "assets/js/page-对象.94991658.js",
    "revision": "12f99ccedffe21b1d5a1c9162436901e"
  },
  {
    "url": "assets/js/page-导航栏.529bbe87.js",
    "revision": "415bb2be9659987c6b5526282a0e9348"
  },
  {
    "url": "assets/js/page-布局.269ef2d9.js",
    "revision": "c84928cc9517ced5d281fe4cde386403"
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
    "url": "assets/js/page-插件.97ddcf3c.js",
    "revision": "5a30b2e6d65fa6a3c769ef7102029958"
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
    "url": "assets/js/page-自然.bbebccc1.js",
    "revision": "1882d06026b6b07808d939909a3d9e36"
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
    "url": "assets/js/page-页面.cf51cec9.js",
    "revision": "2d9f6834b1cce5035ff526d1e2598624"
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
    "revision": "5ec613121d684d95fb19d258daeae589"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "7a3f3d1ec30387b06ed2edc13a406341"
  },
  {
    "url": "basic/markdown/emoji/index.html",
    "revision": "cb0f5d72c5e011c6923a726619db371c"
  },
  {
    "url": "basic/markdown/emoji/locate.html",
    "revision": "57c93694ffcee7ce38ab783af727dc59"
  },
  {
    "url": "basic/markdown/emoji/nature.html",
    "revision": "ebd586e97b13c64040a2830091a57d06"
  },
  {
    "url": "basic/markdown/emoji/object.html",
    "revision": "b1b795dccdc59335fe4f0003451366f5"
  },
  {
    "url": "basic/markdown/emoji/people.html",
    "revision": "dc35ca39f7d2e15ef841cf0ec707f2ec"
  },
  {
    "url": "basic/markdown/emoji/symbol.html",
    "revision": "3b8db62b4ec4d07c7da95750ae05938a"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "dbff97a13a2bb37c20cb7d2e170c6a0b"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "f57d0ab639186af8842aaf0d5954dd95"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "eba86302cfc85353fd11fcf558ad0259"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "a6b18284304cff12078bb2343f5c93ea"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "0a6a2e1006ab6e1f9e9b300fa68def71"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "f1e5c41acc7bd9eaaeab9485f02edbda"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "0772c8e7df3efb988db624e5e83e5342"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "27265c1399c88a445ec3123bda89303c"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "6089ac8cc5e67e73f7cddbd4aae3a7c9"
  },
  {
    "url": "en/api/index.html",
    "revision": "b838220d706100009d970ab39f424273"
  },
  {
    "url": "en/api/page.html",
    "revision": "aa28db0df42d3ca7bb8f35b802b28715"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "dc5e7afd3c3aa58bb433fb4204aad0b0"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "010486ad1b8c93816b5ec40609957223"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "33416bef0b11cd05c5f796130ba6f26d"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "f07600d77f70fc1482821e459d0d7c79"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "a05549f02bb75fc3e79483d91c4bbc83"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "48b729fec4c06e0e58309663e610f24e"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "0ecab817f32e0f28647434fe7d97b2b2"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "f6b494242a071f1366cd3fb037de2c8b"
  },
  {
    "url": "en/basic/index.html",
    "revision": "fe45f25ee4431c5a810b27055acbccb8"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "fe432540da8116448ae78d90baa84761"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "f114ce26d667ed26877a74e6ab349c59"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "8d860d74ff8f890e550c7b7b183c39a4"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "7728e74cc87e4089bdfbb9cc782ea483"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "efde9d99bdd875c18dd5f9e9db422f7b"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "9609358852842db5c61d20795a3122f2"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "aa2485065c1f9794c5a1ef7b7277dec8"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "688bb706dce593dbbdd2f885dc90c6e8"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "9acd2a0c7cae66410fdca309220af1e3"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "3a14e2042173907d6ddb3a96c5374214"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "10338c37fcc112dbb4991c28515b1765"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "5c515eb3cc87b3342302796ba64275a7"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "7f0da54cbe8d849aed98ffb61d705d00"
  },
  {
    "url": "en/guide/component.html",
    "revision": "5a401cfcf87272d541c99aecf89f0406"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "697d5532d7f81be7bea57ca0499eb0b6"
  },
  {
    "url": "en/guide/home.html",
    "revision": "0e34e59eb639d64c7336cdb2ad19c25a"
  },
  {
    "url": "en/guide/index.html",
    "revision": "c9ca3cd2d930049be902fdfbde5c1bca"
  },
  {
    "url": "en/guide/install.html",
    "revision": "b99d5f8b93ad4faef1906afb6d66b632"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "720e4a887c204a6ffbd68a69e9a914f9"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "3809e1dc7c11e160c36ba891ce8dc714"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "e7241d6b04fc192cbf566f399a681741"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "8f6519b81df7abd7640d553fef9dca05"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "e494facda992e53ca356482276538a26"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "f662d6ec03e95f0958fd9b77a7f62618"
  },
  {
    "url": "en/guide/page.html",
    "revision": "b0746323ca54cb7c6888ae7d105f792a"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "c6fc4e5222312b6af976cbbeff692d3b"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "d1121f7a0369593882fc97e1866b7dc7"
  },
  {
    "url": "en/index.html",
    "revision": "1cbfd9a8c6a6f104d89ee573cf528b7d"
  },
  {
    "url": "FAQ/index.html",
    "revision": "614ec5ef2a6c11680f2885324d41cfe9"
  },
  {
    "url": "guide/feature/comment.html",
    "revision": "886740ba738763ee332956ae3e15868a"
  },
  {
    "url": "guide/feature/component.html",
    "revision": "d006ada8a0165f6945c8d8e532f89f32"
  },
  {
    "url": "guide/feature/encrypt.html",
    "revision": "1d095de31b37a849d9e3a0658c2ca90d"
  },
  {
    "url": "guide/feature/fullscreen.html",
    "revision": "f0f3fda8dc06d9db71df48b852a3e8d3"
  },
  {
    "url": "guide/feature/icon.html",
    "revision": "a0d3b5f55837828037d002b369f6e25d"
  },
  {
    "url": "guide/feature/themecolor.html",
    "revision": "743b98ca1b62f0759b77c73e1d816503"
  },
  {
    "url": "guide/index.html",
    "revision": "048e174b4432b7df60ec94d61a14cb68"
  },
  {
    "url": "guide/install.html",
    "revision": "43ca96b760493ff6239f21519a6f2dbd"
  },
  {
    "url": "guide/layout/breadcrumb.html",
    "revision": "6285c46609b313f65603d3ffd402b364"
  },
  {
    "url": "guide/layout/home.html",
    "revision": "99d1c51fe6ec7b245c7b857b5aa7d28d"
  },
  {
    "url": "guide/layout/index.html",
    "revision": "4319962da51b4abd16f0a2ff85585330"
  },
  {
    "url": "guide/layout/navbar.html",
    "revision": "275df1a4c82041a7f629a081d218a5d7"
  },
  {
    "url": "guide/layout/page.html",
    "revision": "8ad813a161a488fc5614fc07a08c817b"
  },
  {
    "url": "guide/layout/sidebar.html",
    "revision": "99e34d526c593e91bc4a7dfdbccfa392"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "18d878013453579df063db4226a08f2e"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "1e28b341f6a01a44e7475d647bbb6029"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "16aa81d84e22128624f944791fe2112b"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "3cedd07424c551af34d4977b4d99ab76"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "7471fdba285dfd7ac63685986d26146b"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "80391b9dfa68cefccd957eadc25afcb5"
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
    "revision": "c4cbdbe467e2ba19ed7b370a56257eee"
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
