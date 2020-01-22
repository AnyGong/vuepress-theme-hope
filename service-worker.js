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
    "revision": "35265f955ceb23d62bfa05ec696f349e"
  },
  {
    "url": "api/index.html",
    "revision": "9d051849b94db4ed8a15e70fb700c117"
  },
  {
    "url": "api/page.html",
    "revision": "e2dc6c34da5610cfa79bb399cb90f13f"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "a98026f0988882dc75ca25119f621bdc"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "c1a7828885725cbdee1ff874b89b8a3f"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "a02f88d49acc2c949f0e10df0e34613d"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "c789c48d72c00f0dc2082fbf1f64db00"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "9ed4be1bb6a4a8523c81aa8ea5cd157c"
  },
  {
    "url": "api/stylus.html",
    "revision": "f9c14b320ad196b1796983c852be4e05"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "9b3d1271b35f560405a19e2ba73c80ef"
  },
  {
    "url": "assets/css/0.styles.ac8feff4.css",
    "revision": "bcbc9f1ba652e0a6e5dd607c97500535"
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
    "url": "assets/js/79.10c43a0f.js",
    "revision": "d64486e494e94ba05d1b0a6058f856ce"
  },
  {
    "url": "assets/js/80.51564761.js",
    "revision": "c19205768561ccbbf9d4912999604209"
  },
  {
    "url": "assets/js/app.b6dee8e5.js",
    "revision": "9ed6a5f04acaffd9cad2358991a760a0"
  },
  {
    "url": "assets/js/layout-Layout.769d022a.js",
    "revision": "5dc45a9691c0f745ab70c117492272ed"
  },
  {
    "url": "assets/js/layout-NotFound.4aaa1f57.js",
    "revision": "632699c07bfa126a2681a81234e01541"
  },
  {
    "url": "assets/js/page--1b278726.bea34a91.js",
    "revision": "04f34d7cecbefe57c87f073cf3a6907d"
  },
  {
    "url": "assets/js/page--24b68849.2f8fa95f.js",
    "revision": "21dee2fbc6e34aef403d2d69a984dfc4"
  },
  {
    "url": "assets/js/page--298eb4e9.198d48a4.js",
    "revision": "988fede0df35834e18f10f1790baed60"
  },
  {
    "url": "assets/js/page--33732ef1.3f456a16.js",
    "revision": "6608d5a26326751e1946b0b0a68636b3"
  },
  {
    "url": "assets/js/page--608d80cf.fb70b793.js",
    "revision": "4f147cdd896d55003ae03c41fc4d810a"
  },
  {
    "url": "assets/js/page--b64dd6ee.0a6c2fc0.js",
    "revision": "961bf592d806c6d3d0a11e523c4142cb"
  },
  {
    "url": "assets/js/page-About Vuepress.2c30ce98.js",
    "revision": "5abb77b0145b1cd98797991be96409c9"
  },
  {
    "url": "assets/js/page-API Docs.8f0024f6.js",
    "revision": "53a2f77d17b9ea3a8d46b10f545362d3"
  },
  {
    "url": "assets/js/page-API 文档.97695288.js",
    "revision": "4af08719524c6115ba54589c8a7a4385"
  },
  {
    "url": "assets/js/page-Basic.754a0153.js",
    "revision": "4523fabc316b6aa3ed2c10e066f29e1f"
  },
  {
    "url": "assets/js/page-Breadcrumb.0c00f35c.js",
    "revision": "3932be084487ab2f7b314f2e6cf479e7"
  },
  {
    "url": "assets/js/page-Comment Function.5e752a43.js",
    "revision": "884ad25eebbf332f9b067ad784964bcd"
  },
  {
    "url": "assets/js/page-Default Theme Config.a100ef47.js",
    "revision": "315a1a38a066f6561012a3eb14b3100c"
  },
  {
    "url": "assets/js/page-Emoji List.2ead88bc.js",
    "revision": "046e1403ba7229188ba3f2696d5f0cfb"
  },
  {
    "url": "assets/js/page-Emoji列表.063be9f9.js",
    "revision": "3394140b2e50220abb448592dddcc6aa"
  },
  {
    "url": "assets/js/page-File Structure.b1e92da9.js",
    "revision": "f295bb4b33d519d233a8949eec6f3d0f"
  },
  {
    "url": "assets/js/page-flowchart.f9d0bea3.js",
    "revision": "f12bfdfaaa5f15f9f7d25a5366f10b79"
  },
  {
    "url": "assets/js/page-Footnote.9d237c38.js",
    "revision": "8063f9d085a22e9719d9f7ee65d80759"
  },
  {
    "url": "assets/js/page-Fullscreen Button.b85db15e.js",
    "revision": "6cbe39a2174bba3ac029d085752b107e"
  },
  {
    "url": "assets/js/page-Home Page.fc2b537e.js",
    "revision": "ce4839c7596c788715b51668af16dcdb"
  },
  {
    "url": "assets/js/page-Home.cc88cc37.js",
    "revision": "abad50f13c04b00a522d57671783f151"
  },
  {
    "url": "assets/js/page-Introduction.a313dc8d.js",
    "revision": "274326374894e257dd9dfcf9481083b1"
  },
  {
    "url": "assets/js/page-Markdown DEMO.bcc2e240.js",
    "revision": "6920d8e6b454b48a2c94ecde9eb1d109"
  },
  {
    "url": "assets/js/page-Markdown Introduction.1f8f2e99.js",
    "revision": "5cba4021b1d3f112789fb9d1042d0f4a"
  },
  {
    "url": "assets/js/page-Markdown 中的新语法.d33aa8c0.js",
    "revision": "3d27926a57d9f1204430380d44284207"
  },
  {
    "url": "assets/js/page-Markdown介绍.d9723826.js",
    "revision": "a6260e59d066870928ae704430bf1ccd"
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
    "url": "assets/js/page-New Component.db2080f8.js",
    "revision": "255abbb93dab3c59b23fe807d37d973b"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.1ce071ce.js",
    "revision": "b2b5e78b5628997b4f1fb2eadcb72b3b"
  },
  {
    "url": "assets/js/page-Page Configuration.c00fe3ab.js",
    "revision": "4674317bc1119dcc24a54c5f90b1349f"
  },
  {
    "url": "assets/js/page-Page.d6dff7d0.js",
    "revision": "0926a91c3c8604a40af40dce672f4044"
  },
  {
    "url": "assets/js/page-Plugin Description.3d597101.js",
    "revision": "61ecd6268ec3a4499791f673bc833c9d"
  },
  {
    "url": "assets/js/page-Plugins.bebcf206.js",
    "revision": "f73518a4b40cc706db094ce917bdc5b6"
  },
  {
    "url": "assets/js/page-Sidebar.5791a5b0.js",
    "revision": "5457eec9d816de9be820dd1277991376"
  },
  {
    "url": "assets/js/page-stylus configuration.a9cd2a93.js",
    "revision": "d8a87b3d731af208fd8dfa5b24cbb1da"
  },
  {
    "url": "assets/js/page-stylus 配置.c812ba07.js",
    "revision": "356863a23cc03a88cea9f470576823fe"
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
    "url": "assets/js/page-Theme Config.7b8e8fae.js",
    "revision": "b47cbdcbaf8edc7f117ddc759cbaf689"
  },
  {
    "url": "assets/js/page-Vuepress Cases.7199074e.js",
    "revision": "d93485bfd3076d60a5ff4c56c1ce7383"
  },
  {
    "url": "assets/js/page-Vuepress commands.009d54ef.js",
    "revision": "78de95283933644696536cc6584ee873"
  },
  {
    "url": "assets/js/page-Vuepress 案例.1d7cefc2.js",
    "revision": "58548e5a78a0f14fa6a07f57f853d831"
  },
  {
    "url": "assets/js/page-vuepress-plugin-container.348538cd.js",
    "revision": "5360c505e46c3c0cac95baccfa119e16"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.8aaa0c8c.js",
    "revision": "2e6f012e012eaf255a01865861d9ed12"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.0eda369f.js",
    "revision": "93a89d2c887ce4f66c784d3035b336d5"
  },
  {
    "url": "assets/js/page-Vuepress.93c6e79f.js",
    "revision": "0822ec7ab0a483a0ec3647d9adcca403"
  },
  {
    "url": "assets/js/page-Writing a theme.e59c9a14.js",
    "revision": "5140c2724a81d0bab212763f5f6feba9"
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
    "url": "assets/js/page-主题配置.38558a52.js",
    "revision": "58564186c003f80ac292a1985cf9eefa"
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
    "url": "assets/js/page-基础知识.d4b10ecb.js",
    "revision": "72ce21720c294b41d6716d54b07cac17"
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
    "url": "assets/js/page-插件.20f93e27.js",
    "revision": "a1b38c7bc0a72c344c7aa2c173a8f74b"
  },
  {
    "url": "assets/js/page-插件说明.8d9ed441.js",
    "revision": "81eff8db6a02f4c6dd52eedb82413a92"
  },
  {
    "url": "assets/js/page-文件结构介绍.d93d52e1.js",
    "revision": "94ffd5dc840241dc6d5d5fc7e0adb4db"
  },
  {
    "url": "assets/js/page-新增组件.6a540fa7.js",
    "revision": "2fefe8b9cd47f6bb02fa44f3def6c584"
  },
  {
    "url": "assets/js/page-流程图支持.1b59d8c7.js",
    "revision": "64cb3f6fabd1555d4a3aaf55098132e9"
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
    "url": "assets/js/page-页面配置.d87068a8.js",
    "revision": "e79b435b5f0946ef11697b4f4d22583d"
  },
  {
    "url": "assets/js/page-项目指令.1417b720.js",
    "revision": "20c1af941f262fe1d631ba14d7c16c22"
  },
  {
    "url": "assets/js/page-默认主题配置.95c911a7.js",
    "revision": "126c6348d4f9f10311dfed3f6c78c388"
  },
  {
    "url": "assets/js/vendors~docsearch.5b77d7b1.js",
    "revision": "1242f705f8941dc549802a57def7be43"
  },
  {
    "url": "assets/js/vendors~layout-Layout.09284bd7.js",
    "revision": "1c3fa1d4db86c248bc9e0d4b5dcbc974"
  },
  {
    "url": "basic/index.html",
    "revision": "1886591b1cc4916e59eaa2a362593770"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "83ee62dae92eb55532df70ef8729ac24"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "ea4cd0ba47867b76f9db85c0ac0a39cf"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "30d6ec194003e39e076e0e48c47a0590"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "47b9c6bd60d5df2b29927c374be1ef93"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "3a576806af7eb72ac161379694ae8593"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "90e8f3dbe7ba800c2566563641bce707"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "187999818a17770ee639af5271b870e4"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "c586830aa9ba34938be8aed7f91ebe7e"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "58d6f0dc2b109577d4ed07e3a4237f65"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "81a852a36c47ae1b2cd407f5c56cb37d"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "77dec30fa2bfc54fe48a18b7f76d1e07"
  },
  {
    "url": "en/api/index.html",
    "revision": "26bd063ff07df48799aedc9f32d03652"
  },
  {
    "url": "en/api/page.html",
    "revision": "0f16a6908894fa3de323785d341a6444"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "5815a6f50bf6ac58a7489641475b2753"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "8b796612b43b217c042c36275a523bf4"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "fc55256750ead793b874317aade50969"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "0c20c201fdeedc6424f4f20213bd655c"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "e0010d1582a4aec5e7dbdb542536986a"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "e352dbe9b92b26b0ac579bf176e09c7e"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "8acd0a1c5ae4c768474ab90fbf127ed0"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "1b44aa411e1ccd134b0ae82f04f95c0e"
  },
  {
    "url": "en/basic/index.html",
    "revision": "9e95a426d655edd6a9b44789ac0ef44b"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "b8bdb459ea68f75e09cd02680a3772bb"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "9907dc05e4a3b96789d6ae2b8f2370c4"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "21c93d7e75f813052c0cbdf76febd9a8"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "69aec290c719b4a17fb3b832078755e4"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "b7e7721aff9287984d1582bd24184b40"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "22e90dd93c02c3684c6d2cc9e972a548"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "9ea4eae8447f8ab5f5a078ca1e361664"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "d2668162d876d4de28373c18b61b6154"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "c443f38c9fab0c9928f615e1427a8e34"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "e63d5d51b26a01f3e430924daf5848c4"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "f84b764efc2a799d912b05054fe61924"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "49a04115ad480018b61e29481f8b8056"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "1700f74d152d5bedcb7c663959fc0abb"
  },
  {
    "url": "en/guide/component.html",
    "revision": "cc2e5cf5df04e7b5cefc247cbbecc1b4"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "c4c865b2086dbcb6fc503db317ceac6e"
  },
  {
    "url": "en/guide/home.html",
    "revision": "31cbb214b89150e9cc127a3892e8a9d9"
  },
  {
    "url": "en/guide/index.html",
    "revision": "3fb20840e1cb2e6c51b820ffd0d2e2c0"
  },
  {
    "url": "en/guide/install.html",
    "revision": "fb8a56766796a82ca9ddb6a315c23a3d"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "9c06d3ee10181efa8ce04cc861427503"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "f745377f317d335af9bf1760cdb8197f"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "4ea767b4e02f8b186a452adf8e87b348"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "b49dc4a1012e74b0a769bda5d01dc4e0"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "bae3ee50c50e85bac975f90f7e67bc43"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "d19148b5bbd6aef11a896369bb8fa573"
  },
  {
    "url": "en/guide/page.html",
    "revision": "4a9a9911d80d2c4e8e84c29ffb62bb9d"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "67465ea6f2ebb3aa22d91663227e8121"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "6e5eb5568d4ba3f437bf866c2baaccda"
  },
  {
    "url": "en/index.html",
    "revision": "6117b6d3e1cde0f04b18547850037139"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "eaba345071a349a35559ef94c962fa60"
  },
  {
    "url": "guide/comment.html",
    "revision": "4c9c9de86e3f8987e914f01c0b0a9120"
  },
  {
    "url": "guide/component.html",
    "revision": "5c30d30cb04d8adb1c692e5ede239043"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "4a44d5b8c468c4edcfa76cb720411151"
  },
  {
    "url": "guide/home.html",
    "revision": "76013645097dcbf039a8b050ae960003"
  },
  {
    "url": "guide/index.html",
    "revision": "374eac4259664f1645866962ccef18ee"
  },
  {
    "url": "guide/install.html",
    "revision": "ffa7821f5cf5f1b60269c21ec0b8e162"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "9695747a5d420352d07d2497763306e0"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "9f7b1f955f0272cf7c8ea9b0a3472bb0"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "5a42291750817a342604a26bd76eca38"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "5ca85151cdea92319b51d2a9349034f5"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "df8e95d5c29d2dac42366dae2c046d2d"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "c6afcbfefde09d19c6c0da2a1478a881"
  },
  {
    "url": "guide/navbar.html",
    "revision": "97bed76d95ad77d67ea7a2089c3e9438"
  },
  {
    "url": "guide/page.html",
    "revision": "d22d21351680c8de08482f44e75c8fc0"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "22c7706c5f46f1808f55096011b7b32e"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "6372b60a8438b7566f65fe83b3dceb8d"
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
    "revision": "43f774ba3b0d042c9a16acf176f9e700"
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
