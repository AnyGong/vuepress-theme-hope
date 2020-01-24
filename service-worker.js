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
    "revision": "2f5c3e8623952632cd1fb4bdecf29e47"
  },
  {
    "url": "api/index.html",
    "revision": "1af4f47c3e5cc11ebd4c56b5acc4c9a4"
  },
  {
    "url": "api/page.html",
    "revision": "67f1b49d68bcf536ec1625e2016b09c4"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "5bdd744df07b3f8f45db73f155f9e622"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "418a388e4af59e93492843d174897f0a"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "5eedcb0323163c99b6bc137d8e744d79"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "13a50d5186e4c0ba491e6ca30d1b8cf6"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "0ee894b49f295b5e2be47fd5d185732f"
  },
  {
    "url": "api/stylus.html",
    "revision": "ecb2c70651696ddae3d5b6d053e5d0cf"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "653169945129f0d02425192bf404d981"
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
    "url": "assets/js/app.23ee3aae.js",
    "revision": "cb2dedee210b92a835edde42d3ade049"
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
    "url": "assets/js/page--33732ef1.e4c2bfb2.js",
    "revision": "2dfa5afed81470e709d29edf48a83314"
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
    "url": "assets/js/page-Home Page.3b750d68.js",
    "revision": "d85a2d1b43ef2fc577ff2444c669bbb1"
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
    "revision": "751dff05fd7d44ec2fc86b335c2a9bb3"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "da03a680c074dbd720915d4589f78126"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "a3bad5ba9a0442c224fdabc6616adc16"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "61087a2a34ea7219d11b38db1fa59ba2"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "614a3b0b85f09b53abaf0ee6799c8dc4"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "c9304efed09630b6ac01d67127d3b8be"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "f2e6f7a1f31b3de0695fa07bd649aa2f"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "6518cb9128793e80cf0798f9916af02b"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "db853ae9aca5c32bd40591b7328da690"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "4524f7bdadc9426658318814ed55840a"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "3ebb72d6ef1c84273f33e28295a99be4"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "92cf9cc01badce4210a83e952d7566c0"
  },
  {
    "url": "en/api/index.html",
    "revision": "84ddd8f29f5760414559558c8670875f"
  },
  {
    "url": "en/api/page.html",
    "revision": "30e59cba1e97067987632e5e1b4485fc"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "84d534ac309da6bc0cac247bce6c0a36"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "fbfcb02bd32b0d393f9e307dcb6125b7"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "6eb8d7d3f85f4bceb0a4d7290c1c205a"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "e2ad62036ae7f2dabc9d0e00b7cb767a"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "132e5b7f8999e2fefea71a87a60b8e11"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "d0a197546846d35f50e626da5d5a1bcc"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "3bd68e128c8e4f509dd77f4ac5345db3"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "1b4905c60d17020d44e99364abf44323"
  },
  {
    "url": "en/basic/index.html",
    "revision": "7535cba72255be0a11a138c6cbff4888"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "f3d18220a6288b978dd3cdaebe6c65e6"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "881a8ff34633f82fdb31105796e26f59"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "225c17966687e6d641ab21ff6eff58de"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "d4891de05aaac9d7e35e62bd5652cc6d"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "490026cd270b784746f5d3e8f609ac17"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "5d6e652599ea9e4e3d102a8c71e24f4f"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "28e32e74f4dbb7064d4b84e782d8e2a7"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "f29972c25e9768cde659837165f3b656"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "011611921d005133c5e895a256af8cbf"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "96bca7b8bf70fdf3d12ef8cf47f6bcdf"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "3c9504bf5fa475b4012f1109cb6d3613"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "9e95b4b66754de058166cc194d0e3536"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "32d93085f485b05c98173d52bd520aab"
  },
  {
    "url": "en/guide/component.html",
    "revision": "d4cc071ef5db8b48fe9eaffa7036db58"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "a3cb9eabe634b8810f828d655c9d8ac8"
  },
  {
    "url": "en/guide/home.html",
    "revision": "3a51c1381055e61726a7406513d4bb97"
  },
  {
    "url": "en/guide/index.html",
    "revision": "0bda3850e25f507ea74f50be976d6f16"
  },
  {
    "url": "en/guide/install.html",
    "revision": "64144563bda7aa594594a56976b74a66"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "307732db27091b4616e6a0fa44df9d83"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "d2552dc057c480824aac6b7dfdbcba32"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "ea71fad87da31e95f28dcf1a7131b2d9"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "8e93c8e1493961c2dbc2e37ef7894aa8"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "c96cc7419e1bdbada11aab15a53d8eb7"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "8961797256e97cedbe393bdbae9f31ce"
  },
  {
    "url": "en/guide/page.html",
    "revision": "e92e78eb6b49b1ef3136c76c984f8ef2"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "99e689216de88e17db7018e389abb40e"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "4bad2f156762ce626b3d29456476b8e1"
  },
  {
    "url": "en/index.html",
    "revision": "19952f4937c782cc1526765fc316b8f6"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "01660654714c3c72c5b6e051e3ff2871"
  },
  {
    "url": "guide/comment.html",
    "revision": "fde57c1986728d30ea23564c34cb2612"
  },
  {
    "url": "guide/component.html",
    "revision": "11064bb4944ca3ca26afd92a0fb02718"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "ca4a5b9d3826690fd3c4d10a1fe97648"
  },
  {
    "url": "guide/home.html",
    "revision": "1e1ca61410b9ebed78255ae28d3a174d"
  },
  {
    "url": "guide/index.html",
    "revision": "9539ac91efd0b24311bef0cfee4998af"
  },
  {
    "url": "guide/install.html",
    "revision": "31e9b262da84ffb7cb634d22c4caa8db"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "01821b3bfa470a77da351b53617bba15"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "8e912b0c9cfb9b4eb32833d8da406b8b"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "8824069b5ac3e3f047dcc751d4325ec3"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "1fd07f113dc1fbd563dc666cd819117e"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "301bdb785ff8e9eae5736ce34db371dd"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "5eed868b3630f6b217503c93e7e18823"
  },
  {
    "url": "guide/navbar.html",
    "revision": "4b93367d2ae098a350511a4805a0126b"
  },
  {
    "url": "guide/page.html",
    "revision": "b2864d9bb204f876c7f9bd13310e52ec"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "c3bd2589b04c96a3af6bbaf354b9ec47"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "6a5a9956ed8125d6c3583d49227ba258"
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
    "revision": "3b852d51debca2fe40c63f2dd0c51b27"
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
