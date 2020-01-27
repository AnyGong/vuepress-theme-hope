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
    "revision": "84d79ca3b8bd91ff97c4c03fcc5dc797"
  },
  {
    "url": "api/index.html",
    "revision": "5f2118aeadb5dee487922174c5926633"
  },
  {
    "url": "api/page.html",
    "revision": "2d784fd989fe138f6d5ae8c40500b642"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "97bb2292f816c27f57cd5dd18401cc4a"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "71da3d3a6255ced3a72c2dafbc3cca7e"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "326ba1b94407529f6c1d543348b9c164"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "04aab089e357b29618f1915b5faebbd5"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "d4f72930c3c9be6cfed5e91f979dd3a2"
  },
  {
    "url": "api/stylus.html",
    "revision": "86ff881173aef548f35ccca9ac797e99"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "19dced8fca0c51eb133524e1aeade860"
  },
  {
    "url": "assets/css/0.styles.43871967.css",
    "revision": "5c9c81e9f47b75891f99e140326be4f8"
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
    "url": "assets/js/86.66a1dfc2.js",
    "revision": "1071e2fdc077814968d564f53586dcc9"
  },
  {
    "url": "assets/js/87.6257586a.js",
    "revision": "1e0b833f3826225c183567eb4f6d80f3"
  },
  {
    "url": "assets/js/app.c00ea39a.js",
    "revision": "77aa51efbfdcb1cc61ed20e09ba151e8"
  },
  {
    "url": "assets/js/layout-Layout.0841e7f5.js",
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
    "url": "assets/js/page--608d80cf.947bacfa.js",
    "revision": "8b3160973b4ff32282d079a3a70b8209"
  },
  {
    "url": "assets/js/page--b64dd6ee.c687e51f.js",
    "revision": "9157b90da86fd4b7dfcd8884ae2d4d68"
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
    "url": "assets/js/page-API 文档.6b97e303.js",
    "revision": "47e397b28176f6a5eadad8168c42dc8c"
  },
  {
    "url": "assets/js/page-Basic.510ffefa.js",
    "revision": "e955f015a541c5ac3feee4367cc449bf"
  },
  {
    "url": "assets/js/page-Breadcrumb.6a39f74d.js",
    "revision": "88887d483db171190837fadfe1b91097"
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
    "url": "assets/js/page-Home Page.f0933c80.js",
    "revision": "c81523ee4318b4fc25077298685bdc5e"
  },
  {
    "url": "assets/js/page-Home.0b25fe6d.js",
    "revision": "c88f4db5172e13ceb5f14b0d4a19acd6"
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
    "url": "assets/js/page-Markdown 中的新语法.707c919d.js",
    "revision": "c04c26e988ef8590acae0abdf15af827"
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
    "url": "assets/js/page-New Component.a3b8f112.js",
    "revision": "cd16d3d1c8ff9dbac71163ced7b73f12"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.bb01735c.js",
    "revision": "ac2c1103bcdff84903427b8597fe9ee9"
  },
  {
    "url": "assets/js/page-Page Configuration.76659a8f.js",
    "revision": "4769dea86a6e951dcb7f14c678bd1524"
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
    "url": "assets/js/page-Tex 语法支持.83a9e763.js",
    "revision": "bf1bad974f82a1d27878dd54bae7ce94"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.3fbd4c25.js",
    "revision": "3fe434a27cee63bbc483a9b298555597"
  },
  {
    "url": "assets/js/page-Theme Config.e5c2bb83.js",
    "revision": "6846eba2ce748660cca28305f0fa0be7"
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
    "url": "assets/js/page-vuepress-plugin-container.4976e36e.js",
    "revision": "bca8ac0e4ab7c3967b252ca1cde61f2a"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.36895a02.js",
    "revision": "7e95b7970f8f4b8769f49df293f9f855"
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
    "url": "assets/js/page-Writing a theme.d772938c.js",
    "revision": "1329a5e215ed67549627684ba708b704"
  },
  {
    "url": "assets/js/page-上下角标.7cb11fc4.js",
    "revision": "0f514a10815d85a9750401427d828873"
  },
  {
    "url": "assets/js/page-主页.f2948ac9.js",
    "revision": "f4ac55e6eb182c1827596e5fb7ffbeb8"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.1644a770.js",
    "revision": "150ea1e2b930a1bdcc461391d3d0dde9"
  },
  {
    "url": "assets/js/page-主题配置.104a7209.js",
    "revision": "281ba4ddc57a4ca308d0f39a3c1bb552"
  },
  {
    "url": "assets/js/page-人物.20693d51.js",
    "revision": "5066c93b7cd4c8eb1be604b0a798ab33"
  },
  {
    "url": "assets/js/page-介绍.c29ace52.js",
    "revision": "24de5cfb20d0a1b3704dba786d00f56e"
  },
  {
    "url": "assets/js/page-侧边栏.ec0f7085.js",
    "revision": "1403aca767f984f08ec30bafd31c7df6"
  },
  {
    "url": "assets/js/page-全屏按钮.951b8704.js",
    "revision": "91d80468e330a92d3f722d54c8acd95a"
  },
  {
    "url": "assets/js/page-图标支持.b8683770.js",
    "revision": "2ae3a2b588667896aaedee168c227c4f"
  },
  {
    "url": "assets/js/page-地点.2d86d277.js",
    "revision": "435de57a9d82c5860d9d3edb9eba2c97"
  },
  {
    "url": "assets/js/page-基础知识.7ac5daa2.js",
    "revision": "c5b2c92988265a79a4ccb4df555937cb"
  },
  {
    "url": "assets/js/page-对象.973ba216.js",
    "revision": "8ee3e604a9441eeac5c24070b4ab60e7"
  },
  {
    "url": "assets/js/page-导航栏.20d5b40a.js",
    "revision": "9848833bc266066aeeb0c0d48e5deb89"
  },
  {
    "url": "assets/js/page-常见问题.c2b6ec4f.js",
    "revision": "67a82519a1f8ede090fa7def9e146903"
  },
  {
    "url": "assets/js/page-开发主题.018dde61.js",
    "revision": "904146c5c441e84d14ee3a01734ab91a"
  },
  {
    "url": "assets/js/page-插件.c10fc2bf.js",
    "revision": "7dacb907a1356ea0538ecc961d970ebb"
  },
  {
    "url": "assets/js/page-插件说明.b3ef6156.js",
    "revision": "bcef0c00a2ccc422affc9d72bea3d583"
  },
  {
    "url": "assets/js/page-文件结构介绍.cde732b5.js",
    "revision": "295e4427bdda19ab00a1a864e29d2840"
  },
  {
    "url": "assets/js/page-新增组件.5af578a6.js",
    "revision": "9ece7f557446c982b0b2dc6d54f47559"
  },
  {
    "url": "assets/js/page-流程图支持.a97eb659.js",
    "revision": "acf313d9812352e00f522d603941dabc"
  },
  {
    "url": "assets/js/page-符号.2812642d.js",
    "revision": "5cdb394206a25119079a6c3caeab0afa"
  },
  {
    "url": "assets/js/page-脚注.211208cd.js",
    "revision": "1d067578ff87bab049a64fbf7c47c1f9"
  },
  {
    "url": "assets/js/page-自定义对齐.afdf037d.js",
    "revision": "9711e8550ae78d07f7f09389456d0a79"
  },
  {
    "url": "assets/js/page-自然.b1269a64.js",
    "revision": "84db0d15c482faba63486c977ae24251"
  },
  {
    "url": "assets/js/page-评论功能.f5b73855.js",
    "revision": "f80349bfb337e2a2aafcfb0f5f11768f"
  },
  {
    "url": "assets/js/page-路径导航.c2b3915f.js",
    "revision": "7ef1e39e839364684b463f71c147940a"
  },
  {
    "url": "assets/js/page-页面.29e89afb.js",
    "revision": "3313c957b7bd7965bf9eabc4190d81e9"
  },
  {
    "url": "assets/js/page-页面配置.f6a7c4eb.js",
    "revision": "81109b4b5b5d78992b5fb66c83325927"
  },
  {
    "url": "assets/js/page-项目指令.ecd6829c.js",
    "revision": "b8924c4c850a7bce977fdd036ba867cc"
  },
  {
    "url": "assets/js/page-默认主题配置.48821b8d.js",
    "revision": "f5044c9238f40cf67aafc640324b833c"
  },
  {
    "url": "assets/js/vendors~docsearch.a497890d.js",
    "revision": "d7d36d258db8ab942af74b99019fee60"
  },
  {
    "url": "assets/js/vendors~layout-Layout.7c3cf47d.js",
    "revision": "022eaa729bd3410186d4bb4c633b5fb1"
  },
  {
    "url": "basic/index.html",
    "revision": "ba1276ff9ff7203f2ee70e005dfcaefd"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "65f3edefd2032c582ff029af32186f46"
  },
  {
    "url": "basic/markdown/emoji/index.html",
    "revision": "5d38bce72d377c7d7c21dedf816d4946"
  },
  {
    "url": "basic/markdown/emoji/locate.html",
    "revision": "c120e2905a9b7e0ba12f4f39229917d7"
  },
  {
    "url": "basic/markdown/emoji/nature.html",
    "revision": "8166631c3586655979b7f3dfd09e2889"
  },
  {
    "url": "basic/markdown/emoji/object.html",
    "revision": "08495b0e592a4754d2083d812bcbcb74"
  },
  {
    "url": "basic/markdown/emoji/people.html",
    "revision": "9b977c594d5b0f408c7dfb06e2d9d99d"
  },
  {
    "url": "basic/markdown/emoji/symbol.html",
    "revision": "3f5c722a74c9845d4b14ce0be2fde5a3"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "2a030c425e9bcc10ed883f0a75a7d4f8"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "01ab84f2ee3bccce66e67f304b6a2ccd"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "9ba184d009348fa26911a993aaaaef2b"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "5a219433a11816cc5d190a5422d94c72"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "4c52e20ddb9dbbb852bd95a35bde7d83"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "f8bbbebda5080012e28cee3d5a23687d"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "bbd1d319d1e5ec19f9b46c9a44c249e4"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "bd96d6d168888a382fdf47d037bd14ea"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "5838d0c42bcb8042748756d5c9b4fe27"
  },
  {
    "url": "en/api/index.html",
    "revision": "4bad4bff407e71ab08712fac8b1bcaa8"
  },
  {
    "url": "en/api/page.html",
    "revision": "a41c7ca50a753bf395af94f2cc01b5db"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "a021e36a1a81b0ee86f435f9e8d26e2f"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "fcd51bc0893490a0bbce51fc0df18ef9"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "28c5f1be302f38b509337d91d1fd3811"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "f915d172f28d723ba1374dfd7028ff24"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "aef678d38aa900236452dbf5c7f81f4f"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "22982808b84d7df9544f4c35035ef6d0"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "9e74688f781c840dea236f6bb26421c9"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "66d99bb96cc409d398fc56d45f26d124"
  },
  {
    "url": "en/basic/index.html",
    "revision": "38588a5fa95160f47329524553c74e81"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "237107febc0c876bd7105a1dc2c5fa27"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "b57d9452e8168ac531898799e2c634a5"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "a4096ef379cbb93f711ad2d3db19c96c"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "a23f9046e8b7b0932774aee7395b0a03"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "345ec2397f4ad0cdecb4c9de69b67d81"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "53a189ef7af852a5f4fffdab768f77c4"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "6489736a4b758708e91707bd2c7ff175"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "60224eb31a6420a5b52fa94809edb202"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "67718878953c76882aee04db6b2e153b"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "4dfce058f6a56a8e9df32a5e1af92e5a"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "fdc412dc6715daf93ab1b8faa0f4eb1c"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "b443f70bc91364e97ce899fa0d1d9507"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "78f0609de8dbfb6e65312532d203760f"
  },
  {
    "url": "en/guide/component.html",
    "revision": "4945800ad0ddb539a66273f12da237e8"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "52b6a1a813f03baf62b3d21127cf171a"
  },
  {
    "url": "en/guide/home.html",
    "revision": "ce9bb3a9ad32c574b971c123b917d982"
  },
  {
    "url": "en/guide/index.html",
    "revision": "e74e317d16775ad607482f3a5f78e31f"
  },
  {
    "url": "en/guide/install.html",
    "revision": "8d7f7120eeb1d182b89bbe55dae7bbb4"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "82002b2cfc1ffaf2750e59e96b13304f"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "43c1b67c8f1a59f60ba57df747440102"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "00c7ff159a14fbb424a94c9c7dba35f0"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "e8d09a5eab0bee4f57cc3cfc7c070fdf"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "d5491aeee94684c34e25a17c1653ee12"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "dee3a27c27f770a7dd9f72e26b059535"
  },
  {
    "url": "en/guide/page.html",
    "revision": "a9fd74a3200ef77ae593c25796ca8aaa"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "3cdfaa06d30475f46359ccacabb494b9"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "b0f1721c094539038555cb5bd0828648"
  },
  {
    "url": "en/index.html",
    "revision": "2a618541eb839cfe79bba10dce6c2f81"
  },
  {
    "url": "FAQ/index.html",
    "revision": "1bcd39bdebe401f728e857aa5f8c5253"
  },
  {
    "url": "guide/comment.html",
    "revision": "508e1b9847302f684c1e33088104ea03"
  },
  {
    "url": "guide/component.html",
    "revision": "2ebb278fa7e64394574df2007e62808f"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "c073f7ac7faa25c4acaa98c230d07b3c"
  },
  {
    "url": "guide/icon.html",
    "revision": "ddcaf48325c80f166f4915fcc3f6e5a4"
  },
  {
    "url": "guide/index.html",
    "revision": "5abc18147fa40bcbd7a12897d41f9b38"
  },
  {
    "url": "guide/install.html",
    "revision": "0367f38b2a62e8029afb37f4323be761"
  },
  {
    "url": "guide/layout/breadcrumb.html",
    "revision": "80f634920da6f7261c2c1e786a8d94ec"
  },
  {
    "url": "guide/layout/home.html",
    "revision": "3373f8c1ae6cf028a8573c12fd7d1739"
  },
  {
    "url": "guide/layout/navbar.html",
    "revision": "0bd04eacffe95937f94f0467bd7f8554"
  },
  {
    "url": "guide/layout/page.html",
    "revision": "2e9dc57511142ef6c18b976af9fab43f"
  },
  {
    "url": "guide/layout/sidebar.html",
    "revision": "d2495250020d727f1aead19705df426a"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "aa26cf15c3f25cdece7675d4a4d5cd5a"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "160caedc87e35a4e7bdfd24788a231ed"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "0601b1e28d07ccb7c3719c9a92e97bc4"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "5eb9c555f19e543ea38cc013c5a3ea80"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "e994748a6867bb1d232401b6d02b32cb"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "35b7bd5fae0cbb1de977edabd7cb79e5"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "1b47520ce9e405f75660ccff99746257"
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
    "revision": "b6daaf5f8586181b02ee03b707e149b2"
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
