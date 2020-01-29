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
    "revision": "37522bde8743551a842478e9cf1ad199"
  },
  {
    "url": "api/index.html",
    "revision": "18ddbc567e2d98dd6255c03fb7c39eed"
  },
  {
    "url": "api/page.html",
    "revision": "7f43a3592ed8df815089d77f75cc7998"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "e8eb9c6f3951c83d79dd94fa77d91162"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "69859b5945866273cb9ed83ddc8c74b9"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "53e77f0938785a37235b28acb2fb6f39"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "30e89719ac645df3ce7fc42312018424"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "2affa0db8855892c2929aaa13ea0dd8d"
  },
  {
    "url": "api/stylus.html",
    "revision": "8fd01f9fbb5f5d6100b2283c636eaf33"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "e3f6a0be68f6ac2a870761c13b1f30f5"
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
    "url": "assets/js/app.f2fbf236.js",
    "revision": "ac79eb500a326a6ddc7080c2868c3619"
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
    "url": "assets/js/page--1b278726.da5e8c8e.js",
    "revision": "7a2d49298e5d8cf176d37ad5cdf87d40"
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
    "url": "assets/js/page--33732ef1.87d68a7e.js",
    "revision": "42f6e5d2683c5508f40c2aa0e37fa259"
  },
  {
    "url": "assets/js/page--608d80cf.409337e3.js",
    "revision": "7aee6843af848cb842500a10ac731d8f"
  },
  {
    "url": "assets/js/page--b64dd6ee.d97f869d.js",
    "revision": "f19910b67534d0dcb30161c1c5d658de"
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
    "url": "assets/js/page-Breadcrumb.3bfa9cd1.js",
    "revision": "dcf9768cbaa9e832c26d64ff5bd7c63d"
  },
  {
    "url": "assets/js/page-Comment Function.4e4c41f6.js",
    "revision": "5239745b2561da568d1696b1fa9f5278"
  },
  {
    "url": "assets/js/page-Default Theme Config.33d086c4.js",
    "revision": "ab89ef12ff1d8be22646407769e72687"
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
    "url": "assets/js/page-Footnote.66087175.js",
    "revision": "8f6f383f6901181245d5cbe2b5e438c2"
  },
  {
    "url": "assets/js/page-Fullscreen Button.08992973.js",
    "revision": "f5fda05e1b65d8e2abfb6150d531f61e"
  },
  {
    "url": "assets/js/page-Home Page.f0933c80.js",
    "revision": "c81523ee4318b4fc25077298685bdc5e"
  },
  {
    "url": "assets/js/page-Home.60f9de1e.js",
    "revision": "3b456daa735514b8dff065853353066e"
  },
  {
    "url": "assets/js/page-Introduction.82536284.js",
    "revision": "c336a71628569c2d5d9f209fc74682b2"
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
    "url": "assets/js/page-Markdown 新语法.fc493291.js",
    "revision": "31e4df38298533b57b4a317d558daaeb"
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
    "url": "assets/js/page-New syntax in Markdown.1540f321.js",
    "revision": "42693d46bd544fe72fd7dffafd5847f2"
  },
  {
    "url": "assets/js/page-Page Configuration.9e00d6fe.js",
    "revision": "4baa183bd7ed8805139b95a3f048309a"
  },
  {
    "url": "assets/js/page-Page.129523ea.js",
    "revision": "bf74b2d9bb0567811017c1e27d09fda1"
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
    "url": "assets/js/page-Sidebar.49f74cdf.js",
    "revision": "0444240f3f438a20f8ff5638294657c2"
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
    "url": "assets/js/page-Tex Support.25774181.js",
    "revision": "e26b16f703fa5d0a7183c5572af1ee13"
  },
  {
    "url": "assets/js/page-Tex 语法支持.6e613fb2.js",
    "revision": "a2d21b8bebe5766b7d52acc2529fb044"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.f145a001.js",
    "revision": "f56e39a0ab19e3a5ecf90b9386861e97"
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
    "url": "assets/js/page-Writing a theme.bb289f7c.js",
    "revision": "5f177ee1e620133a9bf1369c64fe0bb3"
  },
  {
    "url": "assets/js/page-上下角标.7979152c.js",
    "revision": "94f1aff609c902553a276507cbfb42ec"
  },
  {
    "url": "assets/js/page-主页.d844c7bc.js",
    "revision": "d959aa53a5a117ea049c424e99ccc05d"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.1bac221d.js",
    "revision": "27cd863ffdb62f8bb7941768f48b64d1"
  },
  {
    "url": "assets/js/page-主题配置.fd746236.js",
    "revision": "6611ba9a474a6c337b80ce60391b2543"
  },
  {
    "url": "assets/js/page-人物.853f7610.js",
    "revision": "fba897f309dd9ce445df81aae1210543"
  },
  {
    "url": "assets/js/page-介绍.69012801.js",
    "revision": "f5fcd3279825ed4b4143e49408cfc801"
  },
  {
    "url": "assets/js/page-侧边栏.490b0bd9.js",
    "revision": "0b202e4ae160666aa810be3158366aa8"
  },
  {
    "url": "assets/js/page-全屏按钮.f97dbb8c.js",
    "revision": "8d5fa4376a533879bb496ea0dee9e42c"
  },
  {
    "url": "assets/js/page-加密功能.a5eb91c3.js",
    "revision": "26155010910b00b70f9f73ac0bb497ec"
  },
  {
    "url": "assets/js/page-图标支持.2465533f.js",
    "revision": "e0968798a24c242c2ab4791e6bf10b21"
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
    "url": "assets/js/page-对象.bd561b07.js",
    "revision": "612be7ba71e02f84a17881114c0cdedf"
  },
  {
    "url": "assets/js/page-导航栏.8c0cc884.js",
    "revision": "e80b64ab9ec1ab35af6899cddd1990d4"
  },
  {
    "url": "assets/js/page-布局.5e205372.js",
    "revision": "b0ad54f8b25901bd2553a451c7b05b98"
  },
  {
    "url": "assets/js/page-常见问题.5a31e860.js",
    "revision": "e8121115bd6f0094403b7d2a0dcc79c6"
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
    "url": "assets/js/page-脚注.78dee202.js",
    "revision": "b9e126bdb2c1cc96033c4c0e70c6dc92"
  },
  {
    "url": "assets/js/page-自定义对齐.64c636cf.js",
    "revision": "5fa8839a3a02361edf8d28f6b1cdd819"
  },
  {
    "url": "assets/js/page-自然.36146722.js",
    "revision": "cc2aea899ec15241d1747474a8e64774"
  },
  {
    "url": "assets/js/page-评论功能.badd36a6.js",
    "revision": "edf3e2cc7b26c14e5e8c29c404e9f4ca"
  },
  {
    "url": "assets/js/page-路径导航.aca5a0ce.js",
    "revision": "fa1d55a96894b571cc35e68ea1b9430f"
  },
  {
    "url": "assets/js/page-页面.cf51cec9.js",
    "revision": "2d9f6834b1cce5035ff526d1e2598624"
  },
  {
    "url": "assets/js/page-页面配置.87a9e0b4.js",
    "revision": "ee0b9c8c4138f2fc109e51b70d7dc719"
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
    "revision": "726cd5c456e539ca04f0bbf8caa16de5"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "07c9c8c181820ef4e98fa611fa0fc874"
  },
  {
    "url": "basic/markdown/emoji/index.html",
    "revision": "db742f11ebae3324afe64deed815633d"
  },
  {
    "url": "basic/markdown/emoji/locate.html",
    "revision": "5a023e19fa47d344fbb891654863cddf"
  },
  {
    "url": "basic/markdown/emoji/nature.html",
    "revision": "c015f4f0fa4790ad61f53bdd49210940"
  },
  {
    "url": "basic/markdown/emoji/object.html",
    "revision": "f19cb36343756fbc0e9c882228d971f3"
  },
  {
    "url": "basic/markdown/emoji/people.html",
    "revision": "eec90cd73dc988ab43b4ccc03a0d5114"
  },
  {
    "url": "basic/markdown/emoji/symbol.html",
    "revision": "69ecae56c222fa02b24e7760e6403a84"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "ed68780055104e7892d52c6aa181f6c8"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "706d97a13705f6cc3a64a1f71af68049"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "226131cc741c43e541acfd28fffda83c"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "d144ab09f2fa20aea47af7940148fe1c"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "d7eba26842a9f9e33c4f17f30fef01ee"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "932a35db308fa31aa79212f86687db72"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "fd62a4b281fbef7b4aad1db2a637b301"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "6f8096660500e980bc701be3b2f48224"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "1829b75ee80dcc621533697121731696"
  },
  {
    "url": "en/api/index.html",
    "revision": "3fa3616b39395599b7cec753523a5f4e"
  },
  {
    "url": "en/api/page.html",
    "revision": "8f483854850a436f1a4e8b300982449d"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "0cac0b0d1737d0867b0c079c04caf37b"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "be7b9f3d463fc6f8704c68b766ab6add"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "8602aa18f46bc3d35755d3c64f02cf40"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "16910b5ba7afaa1e6c0c12018c020063"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "5788aacee57132a002b06b7ba715f750"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "a2a9c402370cd45077b369f522d43cff"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "dd6a28b81d29458689a467abc9ec8263"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "4c679afdd25b566f01414bdf2f445de9"
  },
  {
    "url": "en/basic/index.html",
    "revision": "f81d43712080546948b93e279de417e4"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "60d5faa2d4c26da50a3d6e94a9828eb1"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "6977d5745e7796dc2811e95b151f69c2"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "d0d76dfe03be2a27a3af9cd6532e542d"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "bf78406282e92343b388b8807e9ad984"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "14818191149c06977a5408f1227c7f7c"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "1084f4874f03c7d30653b415888d9fda"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "b0bfd7bc5814783195ee48ce6362e605"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "0314a9e4f9ab4401818cb2d0af7cc64a"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "9934e4a900b6cf3d4eaee26cbb54581b"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "c53f8334c1f60b15ee129f50a165a1e7"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "5389563a044270ee5f87cc299ed1fe9f"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "2d5f9a4386b03c62463217129e0579d9"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "365137d7849cf2d423fc97e943b4fd55"
  },
  {
    "url": "en/guide/component.html",
    "revision": "52498548c312ad08878e5204b17525fa"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "d09eeb82a32f48f97f1fb4bb3a1ae313"
  },
  {
    "url": "en/guide/home.html",
    "revision": "970419fde7038aafe5ae2d97782994d0"
  },
  {
    "url": "en/guide/index.html",
    "revision": "a16b855e9011d79cc6a2cd5e6d734bbc"
  },
  {
    "url": "en/guide/install.html",
    "revision": "aa26d66180ff4d10b27b7399ac5c5a81"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "ab41f776659f08620120b2bca789b442"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "47b44aa90cc2e479adeae61154cbb4fb"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "85c31dcaafc9c1e3ffc7a9e828660553"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "811ca426725590b7b44790e5a798f377"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "b4a5e0c516da9fd9f1487cebfaf8cc35"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "b24012da28845bab12503ead9f5151c0"
  },
  {
    "url": "en/guide/page.html",
    "revision": "3aa57b7fc2d859577d3583fa493ef174"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "49f6c715750bc514330934ff1b912d13"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "ae0edeb9c68fd0ed4b3eb3bbbdab3d63"
  },
  {
    "url": "en/index.html",
    "revision": "7f6838a76c8a5610f743d180ff7c8b8a"
  },
  {
    "url": "FAQ/index.html",
    "revision": "45ae9f7e7907fe9c635ffe5131667aaa"
  },
  {
    "url": "guide/feature/comment.html",
    "revision": "4852dfb9685b15502dbdd91fae0bcc2c"
  },
  {
    "url": "guide/feature/component.html",
    "revision": "e63887ba76b69400a43229f0c4879b65"
  },
  {
    "url": "guide/feature/encrypt.html",
    "revision": "121c792557fa17a8dae91f241fda21a1"
  },
  {
    "url": "guide/feature/fullscreen.html",
    "revision": "a1da9abb448cb2b53afbe2673d4be2cd"
  },
  {
    "url": "guide/feature/icon.html",
    "revision": "d61812ff7da29b682d274bf355db84c6"
  },
  {
    "url": "guide/feature/themecolor.html",
    "revision": "41b352fa8a3c97cd674b4ff4a412c058"
  },
  {
    "url": "guide/index.html",
    "revision": "af00ae822d2fc102b15b02c48081e543"
  },
  {
    "url": "guide/install.html",
    "revision": "7ef5a05b5aa60f79b8e463dd6019f2bd"
  },
  {
    "url": "guide/layout/breadcrumb.html",
    "revision": "5d3ea208aceab7c146fede1fd67f6403"
  },
  {
    "url": "guide/layout/home.html",
    "revision": "6e66051819ca134ffdcc59837c7a0bfb"
  },
  {
    "url": "guide/layout/index.html",
    "revision": "882a89107e5e9f8a9dc9a1c4e80516e1"
  },
  {
    "url": "guide/layout/navbar.html",
    "revision": "2f45bd23debceb742c70e7f528f3b72b"
  },
  {
    "url": "guide/layout/page.html",
    "revision": "4e22f5c8014b3bb8b67b93ffccbb3e94"
  },
  {
    "url": "guide/layout/sidebar.html",
    "revision": "80b854087dea5489f26bc8fa11f9e48c"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "f044c9e1cb51d735db52a7e9199a0dd2"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "bfad65aa0c4bfcaccad6090d7e7f247c"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "51eb4fa4e8730beb284ec339841e747d"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "635341ad0d13961988f086c780466cba"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "751f9053e21f8b607a0246384af3843c"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "6077a557f610bade4859f13a2f74bbf2"
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
    "revision": "b2eee7a578f39ee020da908365ab90b1"
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
