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
    "revision": "4ba0577048246c142301ae688cd1b530"
  },
  {
    "url": "api/index.html",
    "revision": "6bbc66233ea7714d419d40e334454960"
  },
  {
    "url": "api/page.html",
    "revision": "a1f9a8ce48a92d4ce79fc0c9cf6fb8c6"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "18f892b799cad224e8869878a1c81493"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "845d4a6205c0f175b583b40c9c9df734"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "f55df5aed315c52aaa04f8b371a73e91"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "6dcc49a710787698d04e2156c6da4a72"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "26fc5bcde83d1465662799d5ab561670"
  },
  {
    "url": "api/stylus.html",
    "revision": "b9109a4dd1ba608032aa016a2b62b677"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "bd1e0a00075bdd0b1697b7875b08302a"
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
    "url": "assets/js/app.2a666e39.js",
    "revision": "6467b30d2f41bd8300f3308a4d5e27ad"
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
    "url": "assets/js/page--298eb4e9.8a553c64.js",
    "revision": "eb8d164e2df08c33201b39483cc9ab31"
  },
  {
    "url": "assets/js/page--33732ef1.3f456a16.js",
    "revision": "6608d5a26326751e1946b0b0a68636b3"
  },
  {
    "url": "assets/js/page--608d80cf.70a55b47.js",
    "revision": "164a8c4a4a383c9899eefa9560a10706"
  },
  {
    "url": "assets/js/page--b64dd6ee.0a6c2fc0.js",
    "revision": "961bf592d806c6d3d0a11e523c4142cb"
  },
  {
    "url": "assets/js/page-About Vuepress.6686239b.js",
    "revision": "5ab7f6d2cd72697bd15d72f586fc77e3"
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
    "url": "assets/js/page-Footnote.0b6319aa.js",
    "revision": "b9547d38ec5e9b794e1f6f993ca2a59b"
  },
  {
    "url": "assets/js/page-Fullscreen Button.4a3e8675.js",
    "revision": "5bfed41f6a0dbfb671f3bc2c3e3379ed"
  },
  {
    "url": "assets/js/page-Home Page.f3e1a4e0.js",
    "revision": "721cc503cf53565d947f8a461e9c13d8"
  },
  {
    "url": "assets/js/page-Home.cc88cc37.js",
    "revision": "abad50f13c04b00a522d57671783f151"
  },
  {
    "url": "assets/js/page-Introduction.67d32a0d.js",
    "revision": "a5d008c558ecc0dde3e3e7f27bc2a7b6"
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
    "url": "assets/js/page-Markdown 中的新语法.d33aa8c0.js",
    "revision": "3d27926a57d9f1204430380d44284207"
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
    "url": "assets/js/page-NavBar.da518802.js",
    "revision": "7135b47038d7c21bd77ba3a8b5a23de6"
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
    "url": "assets/js/page-Page.d6dff7d0.js",
    "revision": "0926a91c3c8604a40af40dce672f4044"
  },
  {
    "url": "assets/js/page-Plugin Description.fcb8dea0.js",
    "revision": "dd56695e56442b8121f845addb38e42a"
  },
  {
    "url": "assets/js/page-Plugins.6bd638b9.js",
    "revision": "39b76af03c19b82c81a7363b4791ab01"
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
    "url": "assets/js/page-Superscript and Subscript.a8177349.js",
    "revision": "aa9fb0e0295ad86541c2355ae735d8f0"
  },
  {
    "url": "assets/js/page-Tex Support.23569400.js",
    "revision": "217464dac95c9d193c20d4fae92275fa"
  },
  {
    "url": "assets/js/page-Tex 语法支持.bdbd2c40.js",
    "revision": "5a5811f5cb8eb70ce9d3396b70c73b89"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.1206170d.js",
    "revision": "ecbff4e9dd442322ac2ce994327024f4"
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
    "url": "assets/js/page-vuepress-plugin-container.3c75c35e.js",
    "revision": "a9456c1626c58b72959334d4dc30a1cc"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.2e6fc6f5.js",
    "revision": "be20ac24024da93fa055ebdb3db90d95"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.0eda369f.js",
    "revision": "93a89d2c887ce4f66c784d3035b336d5"
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
    "url": "assets/js/page-上下角标.b4758aa9.js",
    "revision": "44c38674544a3014dc76ebc3bcf77257"
  },
  {
    "url": "assets/js/page-主页.18ea61e6.js",
    "revision": "9654176856f5caca7be4805f828a43e6"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.ae580061.js",
    "revision": "9a20944703d14ecf1abfd389341be43a"
  },
  {
    "url": "assets/js/page-主题配置.710097ac.js",
    "revision": "f9038881e54b3e183f9011befa541eaa"
  },
  {
    "url": "assets/js/page-介绍.baa00ad8.js",
    "revision": "87541a9c8c4c3a04a8328b73217e847c"
  },
  {
    "url": "assets/js/page-侧边栏.73277124.js",
    "revision": "3dd2ef0db69f7520576d2fe85a04ece1"
  },
  {
    "url": "assets/js/page-全屏按钮.022dfbae.js",
    "revision": "1bf4de39aa87cfecb1200cd1f593e941"
  },
  {
    "url": "assets/js/page-基础知识.b1c06de8.js",
    "revision": "ffe27cc2f63cdee9f58b39050b3b1fda"
  },
  {
    "url": "assets/js/page-导航栏.ab91f946.js",
    "revision": "ac71da7899661afa051f6907c4af530a"
  },
  {
    "url": "assets/js/page-开发主题.3ed82228.js",
    "revision": "062f9928eeb6d02b8d9eea119549875e"
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
    "url": "assets/js/page-新增组件.6a540fa7.js",
    "revision": "2fefe8b9cd47f6bb02fa44f3def6c584"
  },
  {
    "url": "assets/js/page-流程图支持.8dd9c2cf.js",
    "revision": "1d2fe035447b00cbae44afb35fb86fcd"
  },
  {
    "url": "assets/js/page-脚注.4a3b635f.js",
    "revision": "82b1d219b829b7d3f667436cd249d0ca"
  },
  {
    "url": "assets/js/page-自定义对齐.95fc83cc.js",
    "revision": "a45e70ea13cc27e7c070559c2227b14b"
  },
  {
    "url": "assets/js/page-评论功能.596fc64b.js",
    "revision": "d17c791635c6bc0689080f85e3122c55"
  },
  {
    "url": "assets/js/page-路径导航.450ed0df.js",
    "revision": "ab3eecc14e638224c11c1e4898a25865"
  },
  {
    "url": "assets/js/page-页面.bbc0fbd1.js",
    "revision": "3e9e6930f14fd69147f12ce5e7195af2"
  },
  {
    "url": "assets/js/page-页面配置.b4b28574.js",
    "revision": "7ff33bbc91bb497cbdec2844de277538"
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
    "revision": "63a07bc3a235ef087dd43d8e3774eae0"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "b9b0555162af1540120888363c1ddb68"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "88d22e80440c325daffdd29f756f959a"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "d7af3a33d14447c1fdfe440458458640"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "75505ca9e300fd665bfb2a5affb8f43f"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "40a1dc6acdd59f079fd26ab20b280c8a"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "2b0fe85e58244f9afdacf6275fc8c9cc"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "f74cd3e735aaa64a0644a3d88b9d0d9a"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "5297cb70024cc353d05de710d39cdce5"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "3aba1c3f53764f0d42dfa575b602fb93"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "bc6e93b219d3860783ea412cab37a4b0"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "776bcb73b84c6996d08d9f86eec8135f"
  },
  {
    "url": "en/api/index.html",
    "revision": "9037d2264745f2373e67cf0006e6cccb"
  },
  {
    "url": "en/api/page.html",
    "revision": "3e7f947d71ae6e08f69d3464623d8461"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "b0c4aa2658ab4f54595b332178aa7ba8"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "ac9100160d2558798478642b913742a2"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "3dc4ae2166d3052dea602ff0f6bd6c31"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "795de3af3b1fcbcc658f773099f9011f"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "6b9cf9f4491d05cbb5b741eebdcea4de"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "2e5d05f46d5b8e98a231e4845b4b3516"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "035788276abc8903a99f3d8ab1c3d272"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "2bc53aa29203c7e7902c10cfaf1e29a4"
  },
  {
    "url": "en/basic/index.html",
    "revision": "2e99954fc6f04976589c05235636787e"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "affc819522550b04d275180059cc3dc0"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "7cef2d3031d9dacec5af0802772c0447"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "3a0029ccbf8ffc059a82d7bd87618815"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "78a15b933e530076c709aeb88d735b04"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "9b416451b4d926c7956ea53fcb83157e"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "9e28e6523b3bf569d8ce503bcbf97395"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "dd71879684dd80b44a18045a5a7f82c6"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "fee6cb046f1138d5e6dcf0093988e187"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "9bf4ec008121f38c6952c8fe72303478"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "a51209a3562f6a0f8677e4e00143159f"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "10ddc7d840a4faf3213534685b39cc6a"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "feac5fb7ab3cd038d2e2d43b1fa9ca2a"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "d1d3a433304308bec82f383a17426585"
  },
  {
    "url": "en/guide/component.html",
    "revision": "6105ec7ecd44a8e0680c57f85fa3fc79"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "bd73113d682d9f24ecc1c376b4e53ba4"
  },
  {
    "url": "en/guide/home.html",
    "revision": "83bcb6b82a1d9d1b691032a9429ab8fa"
  },
  {
    "url": "en/guide/index.html",
    "revision": "964bcb80ee8c05a958aa0983a1e46c2a"
  },
  {
    "url": "en/guide/install.html",
    "revision": "7331dae74e263578917b1e87b84093b0"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "c8aadf9a54caaaa33f8bd1980bc7dedb"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "d8c6601beb76ba9786d8fc095d0a454c"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "6cf900ae63e4b4645169a5db6b3b3836"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "04bdb74291865f906a83eb7b95a70e2f"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "399c0ec57b422e07d9452b60633261b2"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "bbe8b0cce46329a5bd3ad52c6025a025"
  },
  {
    "url": "en/guide/page.html",
    "revision": "e6b6e5d5fa601b14770478f6d52b11d5"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "79f88ea89cbf4dafddc79d0158e97016"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "0b2a7f0da706395297731c2049578c05"
  },
  {
    "url": "en/index.html",
    "revision": "a437567695b318d7dbe3497f21100106"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "bbd528ca06336d67c6e2a7e786453364"
  },
  {
    "url": "guide/comment.html",
    "revision": "17f4d2dd1734dcc57758c20618387b1c"
  },
  {
    "url": "guide/component.html",
    "revision": "33e5e8839d64cfb89d7f545e2683ea11"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "02e62501abeb7f83c37f1aad74b2627b"
  },
  {
    "url": "guide/home.html",
    "revision": "d1d148e7c7f71e7252d349d9e1e3e86c"
  },
  {
    "url": "guide/index.html",
    "revision": "f10b02c902fe1fcf2aa721a8be310e92"
  },
  {
    "url": "guide/install.html",
    "revision": "a8db404be78d3a694045ed93ad459b96"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "6c7ea65ad35610a0609841073dceeb74"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "ce2bc9f30443086dc89eceb891933f8a"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "d473b878d650cdf68463ba8904b90a65"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "6cbd10c9f06d2baae572b43f0b7fdf4b"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "e0ce250358ce59ac6fd0e5ef114c9805"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "d20c138e5ffaf73d8fec31df8f785cee"
  },
  {
    "url": "guide/navbar.html",
    "revision": "3fa1e96d7e761c6f46059adc26ac27af"
  },
  {
    "url": "guide/page.html",
    "revision": "c9db0385ebd87ab3ef132fd7f50ec3d1"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "bd0a4e30680b00ad6d80c9589ea61d8d"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "10c22019586f5982cd46668c16b867e9"
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
    "revision": "d61eecec310c109342dc8c347a1c4f93"
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
