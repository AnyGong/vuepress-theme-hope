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
    "revision": "f23230685d2f5c828ea65c25652d474e"
  },
  {
    "url": "api/index.html",
    "revision": "0043116055e53f573ab53a2c235e1c4a"
  },
  {
    "url": "api/page.html",
    "revision": "efde0fe4f3ff8e495866247b52784ef6"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "c499ce029e626b80d54f40156bcb1e9b"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "8ae73d9e3c35d8277c991af0f66721f6"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "4638c5ae096039f39ee014bd704df77b"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "3e51479f99eaec63da1a1b1b9e17a973"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "1a6453d5bf3928268007f9776490aa70"
  },
  {
    "url": "api/stylus.html",
    "revision": "bc9ca79898c3ebdb6f36092040508af0"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "f8a2688f9b909a91d61a2cb9351d86ca"
  },
  {
    "url": "assets/css/0.styles.73f31cc5.css",
    "revision": "9ee1a1fcccda9b44fd10f421e325b19c"
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
    "url": "assets/js/79.33f00a7c.js",
    "revision": "003d919e2e9b0ea98364ff2a2ab717d5"
  },
  {
    "url": "assets/js/80.19848e8b.js",
    "revision": "c5790115b95a4c98dc04085e5d3ea474"
  },
  {
    "url": "assets/js/app.6aade661.js",
    "revision": "50f4a64717039ce18853b887a231f7a8"
  },
  {
    "url": "assets/js/layout-Layout.b3c57c3b.js",
    "revision": "231bd0d5648ccf6292dc81aadb8c2a41"
  },
  {
    "url": "assets/js/layout-NotFound.3d41fcc6.js",
    "revision": "75b9f4635b1dc461c26edeb3f57931b9"
  },
  {
    "url": "assets/js/page--1b278726.7722a60e.js",
    "revision": "94cf1109fd5fef2362a6d6213cc55484"
  },
  {
    "url": "assets/js/page--24b68849.2a691d07.js",
    "revision": "6d06732f44ed5674995c4adc85164678"
  },
  {
    "url": "assets/js/page--298eb4e9.682c89a1.js",
    "revision": "3309df37a99d80308a93f46b062484f7"
  },
  {
    "url": "assets/js/page--33732ef1.94cb1f00.js",
    "revision": "b90189a2ce87ffae1e0431ca82b5a941"
  },
  {
    "url": "assets/js/page--608d80cf.70a55b47.js",
    "revision": "164a8c4a4a383c9899eefa9560a10706"
  },
  {
    "url": "assets/js/page--b64dd6ee.b56dbf92.js",
    "revision": "71dfe67c187201e61b141b6fc8e8cb72"
  },
  {
    "url": "assets/js/page-About Vuepress.dadd05e2.js",
    "revision": "e05f9439cfb63d0a77114df314d84282"
  },
  {
    "url": "assets/js/page-API Docs.8f0024f6.js",
    "revision": "53a2f77d17b9ea3a8d46b10f545362d3"
  },
  {
    "url": "assets/js/page-API 文档.330d6fd0.js",
    "revision": "2d37e693305bbc290debfc59f45f679a"
  },
  {
    "url": "assets/js/page-Basic.f87edb28.js",
    "revision": "6ad0f3bb5fba0528e9f8736875f6ccf5"
  },
  {
    "url": "assets/js/page-Breadcrumb.3e128f5c.js",
    "revision": "5652dfaf6fcaebc4c667ef83b72de1d6"
  },
  {
    "url": "assets/js/page-Comment Function.d886268a.js",
    "revision": "d422400a0cd0254a34f7cb4c584ff818"
  },
  {
    "url": "assets/js/page-Default Theme Config.80d9e491.js",
    "revision": "7bc6b91b83e0f381b76f3ddd84343a98"
  },
  {
    "url": "assets/js/page-Emoji List.771fa088.js",
    "revision": "fd8a0c38111b5de70188ffbc259360fc"
  },
  {
    "url": "assets/js/page-Emoji列表.6cad2548.js",
    "revision": "bbf155791b26bbd9b13baf3373456a8e"
  },
  {
    "url": "assets/js/page-File Structure.2b8e1e47.js",
    "revision": "f69c72ec09b95feca5050175f503a8c0"
  },
  {
    "url": "assets/js/page-flowchart.abdac1f3.js",
    "revision": "ade6520c699a9b4bd7fe087be6749daf"
  },
  {
    "url": "assets/js/page-Footnote.738a966a.js",
    "revision": "c7e0ca8297f5ac188b5cd4e30923aaf0"
  },
  {
    "url": "assets/js/page-Fullscreen Button.4a3e8675.js",
    "revision": "5bfed41f6a0dbfb671f3bc2c3e3379ed"
  },
  {
    "url": "assets/js/page-Home Page.8e465a27.js",
    "revision": "f6a2093cc6e3dd66dd6a88c48bb75ec3"
  },
  {
    "url": "assets/js/page-Home.51b274f2.js",
    "revision": "e4b5bde4f56b66585b7838fb3af8f08c"
  },
  {
    "url": "assets/js/page-Introduction.035aaca0.js",
    "revision": "a44ccdcb59e3d2f9fad7510306adc1b6"
  },
  {
    "url": "assets/js/page-Markdown DEMO.8359c521.js",
    "revision": "2a1968835fefcb3340704f1b34100385"
  },
  {
    "url": "assets/js/page-Markdown Introduction.db867f34.js",
    "revision": "0b748c6ee2f611951b792b5057f9c238"
  },
  {
    "url": "assets/js/page-Markdown 中的新语法.ecd062c3.js",
    "revision": "73ab558c2806f36498bf55b66dd5c3cf"
  },
  {
    "url": "assets/js/page-Markdown介绍.408d23d2.js",
    "revision": "909ede1bc703c2c17d7a87ee4206b334"
  },
  {
    "url": "assets/js/page-Markdown示例.b4ae2724.js",
    "revision": "b61f1720b7393d43a51578d5432f6770"
  },
  {
    "url": "assets/js/page-NavBar.1f1a0d4d.js",
    "revision": "185378318962b33011f4a37808167188"
  },
  {
    "url": "assets/js/page-New Component.667bb218.js",
    "revision": "8c503e8104130592a18185b6c0a302b7"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.7cc78324.js",
    "revision": "151cc5e847ea28ab3065ee2c060e6796"
  },
  {
    "url": "assets/js/page-Page Configuration.c9b8f780.js",
    "revision": "eeb326a90ce531be2381cceaa51a5cbc"
  },
  {
    "url": "assets/js/page-Page.2f18281a.js",
    "revision": "6cb583d335442b83ce4b92e4b9fa752b"
  },
  {
    "url": "assets/js/page-Plugin Description.fcb8dea0.js",
    "revision": "dd56695e56442b8121f845addb38e42a"
  },
  {
    "url": "assets/js/page-Plugins.43d555d9.js",
    "revision": "71508257f3a3ac473aac8c8576c3651e"
  },
  {
    "url": "assets/js/page-Sidebar.63796e98.js",
    "revision": "4cd67d37aa22c7336b72edccdbbb803a"
  },
  {
    "url": "assets/js/page-stylus configuration.62de0dbf.js",
    "revision": "6b933fac0db0d2d8fea1c1532cf21e77"
  },
  {
    "url": "assets/js/page-stylus 配置.e4d2324d.js",
    "revision": "92fc3f881ef6bd66d7af819a33a3abd9"
  },
  {
    "url": "assets/js/page-Superscript and Subscript.2d3210ec.js",
    "revision": "ba4fb482410a26654da1faec38694855"
  },
  {
    "url": "assets/js/page-Tex Support.0aaf6b24.js",
    "revision": "7a2ad430d3303c1dafcc540d3fe2b8cd"
  },
  {
    "url": "assets/js/page-Tex 语法支持.7601ff57.js",
    "revision": "f0b7d1d9914a2f9a83d1a61b3e6a5ae0"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.b467ef15.js",
    "revision": "f10f65bf9fa5ecf0c6b006d83a63ae4f"
  },
  {
    "url": "assets/js/page-Theme Config.08424e0e.js",
    "revision": "1998a28276b28f97317337034645d87a"
  },
  {
    "url": "assets/js/page-Vuepress Cases.5fc3d42b.js",
    "revision": "ff426dee87f9646b186e520830b91d96"
  },
  {
    "url": "assets/js/page-Vuepress commands.14fdd216.js",
    "revision": "6298eef2dda42fc51c6da3179edcc0b3"
  },
  {
    "url": "assets/js/page-Vuepress 案例.e6e8a3c3.js",
    "revision": "d33d3baba954abdc1ec38e106da1a118"
  },
  {
    "url": "assets/js/page-vuepress-plugin-container.0273e126.js",
    "revision": "f4cd0b9ea7135c8a135c43a6cae9823a"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.2e6fc6f5.js",
    "revision": "be20ac24024da93fa055ebdb3db90d95"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.b14a4a1a.js",
    "revision": "16df39c5370f28e87284d48077f7845f"
  },
  {
    "url": "assets/js/page-Vuepress.b4b36027.js",
    "revision": "bd7ccd804521a7a7563e3f45f8db884b"
  },
  {
    "url": "assets/js/page-Writing a theme.5045f980.js",
    "revision": "5ca5cb92dc364703b819d77a02d03cf2"
  },
  {
    "url": "assets/js/page-上下角标.e5c1aacb.js",
    "revision": "856c7d316cf4c3104c99015ee9268dfc"
  },
  {
    "url": "assets/js/page-主页.2f62f08d.js",
    "revision": "685a247be530a5a888aeac40b2321169"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.ae580061.js",
    "revision": "9a20944703d14ecf1abfd389341be43a"
  },
  {
    "url": "assets/js/page-主题配置.bc17bd03.js",
    "revision": "eaae556993fee553343986e8a3c561a4"
  },
  {
    "url": "assets/js/page-介绍.413e32ee.js",
    "revision": "37e6e96d27a3cc6dc9d65aa983bd942b"
  },
  {
    "url": "assets/js/page-侧边栏.164c3c44.js",
    "revision": "a97f378615b64f321d43b9ceb039668d"
  },
  {
    "url": "assets/js/page-全屏按钮.c8b3b26d.js",
    "revision": "e1a718f404b40756d4ec16b27ce130ec"
  },
  {
    "url": "assets/js/page-基础知识.b1c06de8.js",
    "revision": "ffe27cc2f63cdee9f58b39050b3b1fda"
  },
  {
    "url": "assets/js/page-导航栏.44b297fe.js",
    "revision": "d91ea1f96a8b5c18102709c642380c60"
  },
  {
    "url": "assets/js/page-开发主题.b272e00b.js",
    "revision": "c2f9ae2fc0107bd6425910a6fd44e3a9"
  },
  {
    "url": "assets/js/page-插件.6e7fb401.js",
    "revision": "2bc9a57c2ce622b0255018ed19307aaf"
  },
  {
    "url": "assets/js/page-插件说明.d35c2b8c.js",
    "revision": "400ef16df5e56e27462515eb70d327fa"
  },
  {
    "url": "assets/js/page-文件结构介绍.e8546de1.js",
    "revision": "75a86cc362e1fc8d973ae548790d8fed"
  },
  {
    "url": "assets/js/page-新增组件.a2ded1f3.js",
    "revision": "357d3e32fdd404e5f6407905dc6f12d0"
  },
  {
    "url": "assets/js/page-流程图支持.8dd9c2cf.js",
    "revision": "1d2fe035447b00cbae44afb35fb86fcd"
  },
  {
    "url": "assets/js/page-脚注.015bb8b5.js",
    "revision": "458ce04f6bcff72e50fcb054e32c1c6b"
  },
  {
    "url": "assets/js/page-自定义对齐.b24fc93e.js",
    "revision": "9d6d979cd66a5f0b42f3f55ec38cd724"
  },
  {
    "url": "assets/js/page-评论功能.da7d548a.js",
    "revision": "42aafe47976bd3496b0c95ed0673783c"
  },
  {
    "url": "assets/js/page-路径导航.e43ae3f1.js",
    "revision": "4a626ec6dd967f7a7ce1915358128aae"
  },
  {
    "url": "assets/js/page-页面.51e11e9b.js",
    "revision": "8e4d4dd9932813cd69034b072dd25d26"
  },
  {
    "url": "assets/js/page-页面配置.d87068a8.js",
    "revision": "e79b435b5f0946ef11697b4f4d22583d"
  },
  {
    "url": "assets/js/page-项目指令.752e3daf.js",
    "revision": "73b42770e392e690d5edd2171a3cea8e"
  },
  {
    "url": "assets/js/page-默认主题配置.cdbe328b.js",
    "revision": "5a7bb9d6ab146034cd5ac62fd86bdf2c"
  },
  {
    "url": "assets/js/vendors~docsearch.cfc0715a.js",
    "revision": "95c0d0445761c7b52d8fa7676e6098b3"
  },
  {
    "url": "assets/js/vendors~layout-Layout.8a11ff55.js",
    "revision": "1979ad368a8162723b76d128c43253a3"
  },
  {
    "url": "basic/index.html",
    "revision": "76784f7ea9309b8348b4f34220ee24ee"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "9bf558138d3767831825c1bb8ff83abf"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "7544897ef623b5c84d721b9ed1870b03"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "95e1821241e64f96a03667e122d31eb5"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "e315ac7015db673bfa767a2edb6791be"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "4f81e1c60ff04d388b2c0232f4a0b317"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "63f5a9a3af5bbf6c06226c266f5225db"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "2317e90f11ecd465cedddb7e5c2c380c"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "9be305b45febd225526ee7160668e038"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "2a9faccf92f8ef5ad8766606483b01e4"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "c2a34b354458f2782d44e6a5b8faeb47"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "e8ee9d65ed6ff84c08001b4199e04038"
  },
  {
    "url": "en/api/index.html",
    "revision": "7ab6a417f9d4ad71f3325c4e8bfaf28e"
  },
  {
    "url": "en/api/page.html",
    "revision": "a753f9301d2a00a742df7f037acaac39"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "ffa3ac0c445d9b93e25b28e1b82e1bf3"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "b58b875ee6092882af35ce97d24f4b0c"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "80ba0fe9a42b0c67aae0b830e6a45a01"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "7bc1d854bdb83b9f9547233e2dc13320"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "8fb396ddb99bda1818e42a8c29bf5ab0"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "6d3db5298a938767ff30b46cbcdb1e29"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "f4a2b3ae3f480febda0f813a03cf91ca"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "04cd36c8eb67ac1a913214ac125a13e7"
  },
  {
    "url": "en/basic/index.html",
    "revision": "107fba123999081b7870acce9795a47f"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "291fead098f160dcb1aa580902d8573e"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "2ba4135e80cfd761b455704112b7c7dc"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "20331d6ec896df5ea5f38ce79ef524bd"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "e9436e4c9667e4f0eef7a3972e0aa84e"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "a4a79b74ce1d146b2b78913afeef7ef1"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "8002f58d2f68d5968d93fe7d09b12320"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "9189afdfe916815ba1d22f508666dc7e"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "573cc0f034d5a0d85ab8043857d10c07"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "fb8b33abe799d2dd1001efa37ecdfcd9"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "8da92c7efc791125d8fb053475c5582d"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "0a47991b4110d6b5196b303ec33d20ea"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "3a3454219d7b5c9e1271427d57d59eb0"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "634bfbe90caeb20337177e69d6919a10"
  },
  {
    "url": "en/guide/component.html",
    "revision": "33ccc80f8b67e89d264766bcc757e2d5"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "e1c13c86aaff520d819be89b5734597c"
  },
  {
    "url": "en/guide/home.html",
    "revision": "dd93e5f54abb44005c9a3ab31167d23b"
  },
  {
    "url": "en/guide/index.html",
    "revision": "a4c207270a98059dbd1093844b02475e"
  },
  {
    "url": "en/guide/install.html",
    "revision": "b650fa4258635a43a4f2eeec449bfd1c"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "cb5d164b77223d41157309bd4a7f60d8"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "02c8b2666045fe84472337b0d9480785"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "28d4ea1b9047a7691e1678f20627e404"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "36e90741e55f173ee7e9824227744b94"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "362c2bed57af0cd415ca97d3adafdc63"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "7098cbe1aa8e289878aacc8d0e51cbcb"
  },
  {
    "url": "en/guide/page.html",
    "revision": "295700bcf58fb8f55328ff9aa555a79f"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "bfa9a1780afe3a8aa84218e77a1b55fa"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "e814a8d0dd5c86b39b7913bec16c8f5b"
  },
  {
    "url": "en/index.html",
    "revision": "2d775ce9662d34287d3c44dbc07f09a9"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "0a108d9108a3da18e21a9a8577e28272"
  },
  {
    "url": "guide/comment.html",
    "revision": "60930bd64f6cb4cc0f5566adc51208c6"
  },
  {
    "url": "guide/component.html",
    "revision": "28cc2aee45143110e54609ffec982cfc"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "5d95669f5c5411748f394aed7e79f541"
  },
  {
    "url": "guide/home.html",
    "revision": "e0c14d7c586842e658435a28f3e16808"
  },
  {
    "url": "guide/index.html",
    "revision": "e8868c923b627d76fc72fe10ccbceb5d"
  },
  {
    "url": "guide/install.html",
    "revision": "63ffb73b8b3900f520d5365718e2c1d0"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "00bfc7540996af48dba364caecea3cc0"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "6b36440ef451e6ff005f0c43859ef39a"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "862b1d6df28548cb199f812992a44dbd"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "a783ccde5baa8f313fd801dab0b06da6"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "6423192ce570acc5350b264bcf307a7c"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "335892bc97f803550b2c1e710ceec9f4"
  },
  {
    "url": "guide/navbar.html",
    "revision": "4ce4516688188f0768b634c3e3ee0d1c"
  },
  {
    "url": "guide/page.html",
    "revision": "475c2718cac189fe244ad3f2e2495ef6"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "bcb1d26a9de24b808af34cd2e8c883cd"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "9db459a7bb2ee9ed69c47bf05034895c"
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
    "revision": "946d6af3cf1cf5df5422a5be25fbffd6"
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
