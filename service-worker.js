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
    "revision": "73fce751ea2532840f51ca625605b591"
  },
  {
    "url": "api/index.html",
    "revision": "1568b3d2084fb6716c139f1ed7dbcaea"
  },
  {
    "url": "api/page.html",
    "revision": "29703fd0a6389c8b050ef4b86be88cbc"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "c9c5d4f0d3443b17d085d0760e2a7bdb"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "ac4bdc54efb3bf09490fe63598a97a5b"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "e76a3395684d5586b2da8073ffc0deb6"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "0a8760b2cb1cbbefa6090f7f370d5b92"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "f56051ad9a2ccfddbf812a8fe305dce4"
  },
  {
    "url": "api/stylus.html",
    "revision": "1a1c510bc46a47c4e8a10a5b91cdd1a2"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "a3e3a512456ab382ed4c224107fc281a"
  },
  {
    "url": "assets/css/0.styles.d9b56c99.css",
    "revision": "d54d225fef43ce8ed9df92876b1a0242"
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
    "url": "assets/js/88.5a85fb88.js",
    "revision": "02d4cad266fcbc8769d141e5dbc8b746"
  },
  {
    "url": "assets/js/89.ece0eb7c.js",
    "revision": "e9a0adb2843d0abb85c92e281f7cb785"
  },
  {
    "url": "assets/js/app.7b2bbb82.js",
    "revision": "d0847d39558da31d5b73b4117117b17d"
  },
  {
    "url": "assets/js/layout-Layout.9c998e76.js",
    "revision": "1368844aba3e3c54b4f03c16dd47519c"
  },
  {
    "url": "assets/js/layout-NotFound.fbc08c49.js",
    "revision": "474912aa5b40eacb0eb169e3e8b097a6"
  },
  {
    "url": "assets/js/page--1b278726.0d4440d2.js",
    "revision": "4f4f161ee9f973095f63dde1fadaa2a7"
  },
  {
    "url": "assets/js/page--24b68849.598eecd7.js",
    "revision": "3ab2a8146b594b4222f6fd18b15ef8eb"
  },
  {
    "url": "assets/js/page--298eb4e9.acfaa32f.js",
    "revision": "25f049a36f86f30619e3fca101b679a9"
  },
  {
    "url": "assets/js/page--33732ef1.94cb1f00.js",
    "revision": "b90189a2ce87ffae1e0431ca82b5a941"
  },
  {
    "url": "assets/js/page--608d80cf.b8022400.js",
    "revision": "f7a1c21d55cbb960d3d4da0bdd033231"
  },
  {
    "url": "assets/js/page--b64dd6ee.3f0d981a.js",
    "revision": "47418d2692617d9260373ad2441cd767"
  },
  {
    "url": "assets/js/page-About Vuepress.50530848.js",
    "revision": "288f981586717c9f023a521ca734cde4"
  },
  {
    "url": "assets/js/page-API Docs.b6f6fc21.js",
    "revision": "4dcf89a79e7f1fcc3d550e157f6d1c22"
  },
  {
    "url": "assets/js/page-API 文档.0648ab07.js",
    "revision": "890197f93d5bc45254b40fb2432c5874"
  },
  {
    "url": "assets/js/page-Basic.24c3801f.js",
    "revision": "bfb1f9322109d46b2c737debef6213ec"
  },
  {
    "url": "assets/js/page-Breadcrumb.e1322f48.js",
    "revision": "08098da2f75fc268a6e5e6ae0d4336a1"
  },
  {
    "url": "assets/js/page-Comment Function.2d8084ce.js",
    "revision": "e0840e762a87dc8cfa299e152606b633"
  },
  {
    "url": "assets/js/page-Default Theme Config.47c7c330.js",
    "revision": "48eee44590bef6ee930bb09dcc56d567"
  },
  {
    "url": "assets/js/page-Emoji List.6fa0c3f1.js",
    "revision": "005066c10a55a7fc813862e590b38767"
  },
  {
    "url": "assets/js/page-Emoji列表.93b17384.js",
    "revision": "1b88e87b6af8bcaadf2c44642b565a5a"
  },
  {
    "url": "assets/js/page-File Structure.191df3f9.js",
    "revision": "c09c9d8e505d78bca4eb0714d7a75ffc"
  },
  {
    "url": "assets/js/page-flowchart.f007a938.js",
    "revision": "a86ba2c65788495beff1f5e673a88965"
  },
  {
    "url": "assets/js/page-Footnote.17744629.js",
    "revision": "501820ec7da65c32f5dddf2e94b5835c"
  },
  {
    "url": "assets/js/page-Fullscreen Button.f08101c0.js",
    "revision": "a17ea8788fab7b2f2918ff068a52c0bd"
  },
  {
    "url": "assets/js/page-Home Page.7b1d2345.js",
    "revision": "bed326d02e869a8dccd00b87a0983336"
  },
  {
    "url": "assets/js/page-Home.2c5ecc61.js",
    "revision": "d59367771607505a6b190d322b0c3edb"
  },
  {
    "url": "assets/js/page-Introduction.83ff4cae.js",
    "revision": "0cdcf04c19f34c93a0b827c165c1b306"
  },
  {
    "url": "assets/js/page-Markdown DEMO.2565c4c9.js",
    "revision": "8bf9612c3a21cc67115589a872c213f0"
  },
  {
    "url": "assets/js/page-Markdown Introduction.780c0dde.js",
    "revision": "7537e84d55a272d66dd97c5efbdafcba"
  },
  {
    "url": "assets/js/page-Markdown 新语法.f9a786f8.js",
    "revision": "6a451f5a8155bdbb2ec2067d61c596eb"
  },
  {
    "url": "assets/js/page-Markdown介绍.a7515333.js",
    "revision": "e30db4dab8e3a4a93015a0fdf33fa80d"
  },
  {
    "url": "assets/js/page-Markdown示例.48c4947c.js",
    "revision": "70cc031ede6a006867d624302fd9a33d"
  },
  {
    "url": "assets/js/page-NavBar.4ace3727.js",
    "revision": "4d0a081933bff630bbba226a11bc894b"
  },
  {
    "url": "assets/js/page-New Component.3f5f76cf.js",
    "revision": "dfe5ae16441d993c44b602baaf4cb295"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.9bddc034.js",
    "revision": "179950cfc685a79fe09bfa36d394a494"
  },
  {
    "url": "assets/js/page-Page Configuration.1dcf564d.js",
    "revision": "a07713a60e8884f4148727b66133022e"
  },
  {
    "url": "assets/js/page-Page.510f696b.js",
    "revision": "13ec13290aa681ce744f06221414ef2e"
  },
  {
    "url": "assets/js/page-Plugin Description.23e8ca60.js",
    "revision": "cefe40eb36cfc39c0e50052f21e19309"
  },
  {
    "url": "assets/js/page-Plugins.9a3c27ef.js",
    "revision": "8a50ab122b996151a4fad9dc52274a95"
  },
  {
    "url": "assets/js/page-Sidebar.a08ec82f.js",
    "revision": "e07f0c23bca1795e9d01670c253e3568"
  },
  {
    "url": "assets/js/page-stylus configuration.2b53d989.js",
    "revision": "71f2d2b288a79d3b404c2e55eeb762a0"
  },
  {
    "url": "assets/js/page-stylus 配置.f64f444d.js",
    "revision": "2c4bdfbf05a223d2322d928116c0f85f"
  },
  {
    "url": "assets/js/page-Superscript and Subscript.737184b9.js",
    "revision": "63ba0b25f9902d350091c217fa2b7949"
  },
  {
    "url": "assets/js/page-Tex Support.3da318c7.js",
    "revision": "3d7e99a9d586abdd5333afabc7cbc7e0"
  },
  {
    "url": "assets/js/page-Tex 语法支持.0b44db67.js",
    "revision": "91d55972068d899d4bcaa306de6e5090"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.008e9ea1.js",
    "revision": "fc8b844ab50e774c9720bbf8fb3f2cbb"
  },
  {
    "url": "assets/js/page-Theme Config.de5d62b1.js",
    "revision": "0cc2ad4778b17d8c19563684cbcfb949"
  },
  {
    "url": "assets/js/page-Vuepress Cases.a8a34cc6.js",
    "revision": "0240c8da61d05649875736b2f3b7e1ad"
  },
  {
    "url": "assets/js/page-Vuepress commands.936ddf7e.js",
    "revision": "004dd38d486ff36745719bafcf21056a"
  },
  {
    "url": "assets/js/page-Vuepress 案例.fd290f08.js",
    "revision": "b3a5688e2913fe288c94553fcc74d022"
  },
  {
    "url": "assets/js/page-vuepress-plugin-container.c4660277.js",
    "revision": "6527d1fe34f728a04aeaf8d64afad386"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.a5efab15.js",
    "revision": "ffe12163bf254f096619086bf45621d8"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.db04cd89.js",
    "revision": "6c1b6e49f57329edd525d7f7b3cb2d41"
  },
  {
    "url": "assets/js/page-Vuepress.5450e3e9.js",
    "revision": "49047a085b18d20cb18aed6bf47c2d60"
  },
  {
    "url": "assets/js/page-Writing a theme.67d78673.js",
    "revision": "49be049a7aaba1bef5937e828ad1e550"
  },
  {
    "url": "assets/js/page-上下角标.63b30c76.js",
    "revision": "eda72ccf2ec26e8137f89a9ed1fdcc74"
  },
  {
    "url": "assets/js/page-主页.17e8a7ee.js",
    "revision": "44158e03226fa40b8fa2b3499e8bcdff"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.19a59b43.js",
    "revision": "77a1a2a4879ab0d297b286bfb8612e54"
  },
  {
    "url": "assets/js/page-主题配置.47f77a85.js",
    "revision": "20078a1640ce7073fe4b1f22a9450a9d"
  },
  {
    "url": "assets/js/page-人物.f9142a29.js",
    "revision": "1260b7a4950e4bcaac62149b2c95db3d"
  },
  {
    "url": "assets/js/page-介绍.b607525e.js",
    "revision": "65dc1c9430d68f00ebb48b0b2abe20c7"
  },
  {
    "url": "assets/js/page-侧边栏.f776eb35.js",
    "revision": "a04387f8424de820991c6f218c43dd08"
  },
  {
    "url": "assets/js/page-全屏按钮.a4f89c5b.js",
    "revision": "96575a2290e400850c4c662f641e9341"
  },
  {
    "url": "assets/js/page-加密功能.c073e954.js",
    "revision": "2ecf0c2d45df4567071af03850499150"
  },
  {
    "url": "assets/js/page-图标支持.51aeded1.js",
    "revision": "67f65f137a2cb338632fd318fd96e95b"
  },
  {
    "url": "assets/js/page-地点.fc6a2e4f.js",
    "revision": "71998fb8216a6e59c1890fb1f8c17919"
  },
  {
    "url": "assets/js/page-基础知识.e7752952.js",
    "revision": "7af145d90bcdfd9b5d460f17cb233ab7"
  },
  {
    "url": "assets/js/page-对象.96ec6245.js",
    "revision": "66c93923c840f117e80abc37a3cf2e9a"
  },
  {
    "url": "assets/js/page-导航栏.a896c01a.js",
    "revision": "2dfd664c0c79a52c1ee15cbf24752d93"
  },
  {
    "url": "assets/js/page-布局.a590c022.js",
    "revision": "b8dcab968ecbf52a72c0c0e06b12768c"
  },
  {
    "url": "assets/js/page-常见问题.4ee26334.js",
    "revision": "ab67117d4f6cca1442431f2d0f03354b"
  },
  {
    "url": "assets/js/page-开发主题.46ccab54.js",
    "revision": "e72f0787e34d5cdcfb1398d5136d9e19"
  },
  {
    "url": "assets/js/page-插件.343d957e.js",
    "revision": "7e51256f494210771d1bf3ed61bed701"
  },
  {
    "url": "assets/js/page-插件说明.34e2f35d.js",
    "revision": "dac71796b066567c5e1fa89444308b13"
  },
  {
    "url": "assets/js/page-文件结构介绍.1dfa4d77.js",
    "revision": "8d21260bfaa5060123d301091e3d5b60"
  },
  {
    "url": "assets/js/page-新增组件.0b668831.js",
    "revision": "a4709c2466142e25f386ed5e265a8c8a"
  },
  {
    "url": "assets/js/page-流程图支持.fadb400b.js",
    "revision": "a4fca7fdde54413f1d32f07621c358f0"
  },
  {
    "url": "assets/js/page-符号.91e1fcb0.js",
    "revision": "5c1fdbcc6dea74e499d5b63343b189aa"
  },
  {
    "url": "assets/js/page-脚注.535b2bed.js",
    "revision": "7fa3bd2e51b9888fe132ca2479467aa8"
  },
  {
    "url": "assets/js/page-自定义对齐.0c0013fc.js",
    "revision": "a2c989a31e6002afb0442a5aaf1aade3"
  },
  {
    "url": "assets/js/page-自然.63a7f3e6.js",
    "revision": "5d1de13b0c5662dcd0fe420c8715b301"
  },
  {
    "url": "assets/js/page-评论功能.fd113bd6.js",
    "revision": "b9a227f16ef7db80852cf5611eec97c2"
  },
  {
    "url": "assets/js/page-路径导航.2224233c.js",
    "revision": "afc993712f0cd6d414056c609487c1e1"
  },
  {
    "url": "assets/js/page-页面.d4cbb05e.js",
    "revision": "8907f86f866da7ff86a7917c5e2a0e87"
  },
  {
    "url": "assets/js/page-页面配置.c217b3cb.js",
    "revision": "d2cd14d5d10503d3f797a0ac89168827"
  },
  {
    "url": "assets/js/page-项目指令.172badd0.js",
    "revision": "5c624cb5cbb57b256f736c3c49838e2f"
  },
  {
    "url": "assets/js/page-默认主题配置.91bd461f.js",
    "revision": "3fa6f5c48ad4cf4f6f706758821d17cb"
  },
  {
    "url": "assets/js/vendors~docsearch.ff387aae.js",
    "revision": "7e9c45b5825d22b62b9431557af9b10c"
  },
  {
    "url": "assets/js/vendors~layout-Layout.9e51f37b.js",
    "revision": "58d6b535bda2873d1c13a60c5442fe32"
  },
  {
    "url": "basic/index.html",
    "revision": "c4578b04868485b993427c8265be1337"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "9b32f8ccca249823ee3c23e8aca3436b"
  },
  {
    "url": "basic/markdown/emoji/index.html",
    "revision": "f8283bafb822e3ddfe654e0abc0aa566"
  },
  {
    "url": "basic/markdown/emoji/locate.html",
    "revision": "318df95ea0b3ff03e59b33fd4ab6b79f"
  },
  {
    "url": "basic/markdown/emoji/nature.html",
    "revision": "ec16002a228c6ea259fadcae383917db"
  },
  {
    "url": "basic/markdown/emoji/object.html",
    "revision": "49e1d143847a23a3b1dbca3f0725957d"
  },
  {
    "url": "basic/markdown/emoji/people.html",
    "revision": "3548b811d2b713846f3d41c898e047f0"
  },
  {
    "url": "basic/markdown/emoji/symbol.html",
    "revision": "3c6121c04ea09785a345d61f4d96276f"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "c5086b2e44f2a7fd5e14a77b04b64eac"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "1dad97a5fec94b4cdcf55c6c600e602f"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "75749a54944615fc6ee5ffbbed800c4a"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "8e10ad2541b9a902d481c61d5d2c61d9"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "92f1dc397998c3a6d9bcd3cef4458f5b"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "d41b946eb832955875d66302e1b10b40"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "6a31bb86bab0ca5aa554b1905c74e4c2"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "609bbdad99f62ee96495e52ad4363d4f"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "42fd05daed1cda1b82c9210195f0c62a"
  },
  {
    "url": "en/api/index.html",
    "revision": "c7f2caa967e464b784b1961fa7968f91"
  },
  {
    "url": "en/api/page.html",
    "revision": "a7895e3651ae488d3827aecee956fc9a"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "bf2478d3f4caca5b0f3d9dc674583431"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "0f10b1eddd0f131867c1d8f75c21a6f2"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "9277c0724c848e9cdf5c55d90b0d3727"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "ed02b1da2fb5da871a2e253d45695f45"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "196e6ad03064f53dbd0ab3c002768033"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "129fab73e8ae6fa9ee904159cd803fc3"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "2c9f17f20139da54fb1b73ba84f3f352"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "1187b0849fd305bfd2f2606572d1e39d"
  },
  {
    "url": "en/basic/index.html",
    "revision": "0f74fcb710a5dd6e006ad73878ed653c"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "22344953756931685436efad36b14be6"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "dfe2908187037fb22bca22107d1ff811"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "e1140655bb3c9bb4cef119eb128d3a41"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "7f2ec05d01b8bff50bc351a22dbbd9a3"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "b075629c067215d155edc61931dad1a8"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "0432867f48b4166e8b0354b3a3087f0a"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "e521c5452912e7c288b2d169d3c6ac45"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "64e480bfa5c255d69f36b65b82bbe03d"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "280c7114885fdacf75692cef764c9f58"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "8df94c94e933e531c6e17ee349a651d7"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "07261974b21f091d48ec6c56d57c6343"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "240deb9775b5d39ed7c1925b5633c01f"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "c4312877525e58139722d51fcff258c5"
  },
  {
    "url": "en/guide/component.html",
    "revision": "d6bd576c37718ebba1aa9dbb0294908b"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "6d45d51da06fadbb78227fe22b184766"
  },
  {
    "url": "en/guide/home.html",
    "revision": "b658809d69785bb29c130e25383aa77c"
  },
  {
    "url": "en/guide/index.html",
    "revision": "18e28787d9b8fc728f11938385f36fa9"
  },
  {
    "url": "en/guide/install.html",
    "revision": "b4c8a888d98a51eae1a0d9d311491c05"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "abe5a11a115f78ccccca3d8dc28fac6d"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "3ed09925ad74df040fe24f62291fc00d"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "5daeb167bce9e65be33457b56461f12c"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "57ebfae4a916ea219a1178943a2dbb0f"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "a084439d4598a23dba3707b156cdfe13"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "c23559910f3f1a98e26c777199cb1023"
  },
  {
    "url": "en/guide/page.html",
    "revision": "f74bad6792c9a25973e655928f4ea4fb"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "2913a01adafb4178b06a47c4c1580229"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "602612a3855ad20488b99d6269855065"
  },
  {
    "url": "en/index.html",
    "revision": "c836d690c70687644c156058fbc90756"
  },
  {
    "url": "FAQ/index.html",
    "revision": "2967ab5440856d023f6c14c0fc63cfc5"
  },
  {
    "url": "guide/feature/comment.html",
    "revision": "9cd298c88e0485161187ef970596f01e"
  },
  {
    "url": "guide/feature/component.html",
    "revision": "aa44a3dd525cc73bb6bb1045d57c4407"
  },
  {
    "url": "guide/feature/encrypt.html",
    "revision": "c9824852935d56394f3bd75b939f8dc4"
  },
  {
    "url": "guide/feature/fullscreen.html",
    "revision": "f9b44a68886a6a2c8d5bce8ef7ccd7f8"
  },
  {
    "url": "guide/feature/icon.html",
    "revision": "0682c2e357bc6d3219264e8f7aa4e936"
  },
  {
    "url": "guide/feature/themecolor.html",
    "revision": "a7904040a8e8ff6e89dbad52ebc063d0"
  },
  {
    "url": "guide/index.html",
    "revision": "b0e2cd90594427f043980ec97e1f8b39"
  },
  {
    "url": "guide/install.html",
    "revision": "c5e509e3a216a6e3ca62a5fb4d31535f"
  },
  {
    "url": "guide/layout/breadcrumb.html",
    "revision": "7ea72042357e9977bde090740bbdaabb"
  },
  {
    "url": "guide/layout/home.html",
    "revision": "fecbe12b196dcde6c244e96319ce76b9"
  },
  {
    "url": "guide/layout/index.html",
    "revision": "b6a1a5ff45975807080f334c5658e728"
  },
  {
    "url": "guide/layout/navbar.html",
    "revision": "e9a7ec3bee17102dce848d54e2ceb05c"
  },
  {
    "url": "guide/layout/page.html",
    "revision": "18ea80c17d1f3c76a0fa5c53c25f32d8"
  },
  {
    "url": "guide/layout/sidebar.html",
    "revision": "b45779ffc08842364a0bdc0adc7c1f2b"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "e703c1248d5cb175892a62898dafae91"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "937b26bdcc4e4c5cf4b4f0aa85a5fc34"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "a3972d0148b8763e74bf4c6b6e7de76a"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "8f8e00da18492428436df085a7e2f926"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "19a3793d0421b48fa2fef3789349bf5d"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "b8d7c6ae988f36b28387df0fa74c073b"
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
    "revision": "c759276d7c5bff36d937efb4f9335512"
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
