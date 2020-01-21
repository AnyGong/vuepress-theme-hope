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
    "revision": "3e79c034daf51e04da4831bf828eee50"
  },
  {
    "url": "api/index.html",
    "revision": "469d8dd6467f10dec88f51b7bffa012b"
  },
  {
    "url": "api/page.html",
    "revision": "568dba844ecdf5dca758353056bab064"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "45bc83b9354fe2529575a50e70665a9d"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "9ba5e368bcfcad143847953b53115426"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "048f35728ff9ce1b49ea49d5f20d0229"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "5307ec821dfcf74b7dbf2b89c6e29b51"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "d5e6fdc7268905fb058672a60932bab7"
  },
  {
    "url": "api/stylus.html",
    "revision": "43f065d4265ca4dcd522e31462e6ce3c"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "c66a8774b2cf94b92bedf6e779a7d7c6"
  },
  {
    "url": "assets/css/0.styles.92f04025.css",
    "revision": "ea76720f6804738194a13c35b14127f6"
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
    "url": "assets/js/79.9b4c3ab0.js",
    "revision": "ddf70eebd2b89ae5860334947d423707"
  },
  {
    "url": "assets/js/80.51564761.js",
    "revision": "c19205768561ccbbf9d4912999604209"
  },
  {
    "url": "assets/js/app.2800b227.js",
    "revision": "fa8dd18141ff200d208b2c987d632577"
  },
  {
    "url": "assets/js/layout-Layout.5e98bb08.js",
    "revision": "3e94123e9678bed97e01b6f40578996a"
  },
  {
    "url": "assets/js/layout-NotFound.1b36dec8.js",
    "revision": "47ee463789b238e98a1a26a6ff9ba011"
  },
  {
    "url": "assets/js/page--1b278726.89255c6f.js",
    "revision": "13e4e0b916e98ac6623378702d304b4f"
  },
  {
    "url": "assets/js/page--24b68849.29918c5e.js",
    "revision": "dae57786e4f99c1a581e880c6e1e680c"
  },
  {
    "url": "assets/js/page--298eb4e9.2a11d41a.js",
    "revision": "4aeacad8020bd7dae734d630b088878f"
  },
  {
    "url": "assets/js/page--33732ef1.289793fe.js",
    "revision": "7a181bdf25d11bf86f1eeb1b03d9a355"
  },
  {
    "url": "assets/js/page--608d80cf.ac662dd8.js",
    "revision": "987f4dd1c11e804aa1f9fd52ab07aeec"
  },
  {
    "url": "assets/js/page--b64dd6ee.41ad165a.js",
    "revision": "ea95491a9231e60f880fc1e8087dc0bc"
  },
  {
    "url": "assets/js/page-About Vuepress.27b8cf79.js",
    "revision": "1419c8e2ff4703647dc964b435ba4d2b"
  },
  {
    "url": "assets/js/page-API Docs.5d8dbec7.js",
    "revision": "7f2764d2f4cc520706129d97a71e1e88"
  },
  {
    "url": "assets/js/page-API 文档.96f0a501.js",
    "revision": "fc243e70c4ba59c0739feb7711dbc9ca"
  },
  {
    "url": "assets/js/page-Basic.c1c4ba09.js",
    "revision": "4e54b3c1ef8d549f7ed4aae9adfdc6d5"
  },
  {
    "url": "assets/js/page-Breadcrumb.c60e8524.js",
    "revision": "6d3b0b692dd77a6e911d1b0a3012b440"
  },
  {
    "url": "assets/js/page-Comment Function.f18898a1.js",
    "revision": "01d122376adc6691d449b6f91b0fe3b3"
  },
  {
    "url": "assets/js/page-Default Theme Config.bf7a081f.js",
    "revision": "3ea117a4a85eaacea0617117cacab8cd"
  },
  {
    "url": "assets/js/page-Emoji List.43fc4174.js",
    "revision": "d6f39085d896c38d34d7ecb1627ab463"
  },
  {
    "url": "assets/js/page-Emoji列表.ccf6cb0e.js",
    "revision": "c5dfa3e96f7fe60b68537777547eaf6e"
  },
  {
    "url": "assets/js/page-File Structure.da54d264.js",
    "revision": "4ed5620051e993d6a4c6e03dcb7d86b1"
  },
  {
    "url": "assets/js/page-flowchart.ef6bfde8.js",
    "revision": "143ec90f5e22646b506aa3453dde0187"
  },
  {
    "url": "assets/js/page-Footnote.ed953684.js",
    "revision": "d53e4d429dec40a445450a102c7ae228"
  },
  {
    "url": "assets/js/page-Fullscreen Button.38072781.js",
    "revision": "53e0d2f5dab34ed812fe4a06751f8889"
  },
  {
    "url": "assets/js/page-Home Page.f0933c80.js",
    "revision": "c81523ee4318b4fc25077298685bdc5e"
  },
  {
    "url": "assets/js/page-Home.cca84bc9.js",
    "revision": "c351585108aa4f0aa6b54b41f7b866da"
  },
  {
    "url": "assets/js/page-Introduction.d78d91b1.js",
    "revision": "4b164470bac9dfad07fe24f364204309"
  },
  {
    "url": "assets/js/page-Markdown DEMO.30e4924a.js",
    "revision": "c2097b340ec02a6169a1c63f09b087c4"
  },
  {
    "url": "assets/js/page-Markdown Introduction.83cc2731.js",
    "revision": "debe67e8e981168e296523c263f2d161"
  },
  {
    "url": "assets/js/page-Markdown 中的新语法.8f1b0377.js",
    "revision": "f574b9f22e47aede41f3badc94f4edb9"
  },
  {
    "url": "assets/js/page-Markdown介绍.6a402d85.js",
    "revision": "4cbbfa4e265a4002c11028ce57d7144c"
  },
  {
    "url": "assets/js/page-Markdown示例.1227570b.js",
    "revision": "6d6a4eef35f23105e4a74fa3fe96f349"
  },
  {
    "url": "assets/js/page-NavBar.9ad49afc.js",
    "revision": "2b6973a48356fe2ba76bf11e70b8de56"
  },
  {
    "url": "assets/js/page-New Component.1dab021f.js",
    "revision": "f8d8aa460f4d73d0d69d7017ba4d7b9e"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.a64e34e5.js",
    "revision": "8f1d602cff9b871f05cd4e2cb1ed0643"
  },
  {
    "url": "assets/js/page-Page Configuration.15b958c6.js",
    "revision": "86dadbd96442ab563e763f5abd901031"
  },
  {
    "url": "assets/js/page-Page.e9634a96.js",
    "revision": "5e488d39578742e5019f0e02959675da"
  },
  {
    "url": "assets/js/page-Plugin Description.1033b98d.js",
    "revision": "abd6fbbd0e6fd1e79020e3f756884d57"
  },
  {
    "url": "assets/js/page-Plugins.aceba207.js",
    "revision": "888d1c1c17a9564042bf97bced4515f2"
  },
  {
    "url": "assets/js/page-Sidebar.bc2baef7.js",
    "revision": "aee11481269e9df754f0b2d61bc4a80c"
  },
  {
    "url": "assets/js/page-stylus configuration.1be2490c.js",
    "revision": "167675e9f98e30e82f4294ab5fc26c73"
  },
  {
    "url": "assets/js/page-stylus 配置.b34a3609.js",
    "revision": "3f19169a03824c7fe95d66ba91d5ea0c"
  },
  {
    "url": "assets/js/page-Superscript and Subscript.b127953c.js",
    "revision": "da00e301f04ca9b35a77b3259331d65d"
  },
  {
    "url": "assets/js/page-Tex Support.0eaa51fd.js",
    "revision": "5c17de9f5b662a805e59b636754705ee"
  },
  {
    "url": "assets/js/page-Tex 语法支持.5eeecb87.js",
    "revision": "5d1c090abaa2caf3ccaf6e9ea8a3dfd1"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.60b54313.js",
    "revision": "fe18ee3a0c08df99465431a0ca3f088d"
  },
  {
    "url": "assets/js/page-Theme Config.18bb0ace.js",
    "revision": "700e41f866afaf2b39283e898680cd37"
  },
  {
    "url": "assets/js/page-Vuepress Cases.44f71437.js",
    "revision": "a4d110b2606ec499d214a283b9644481"
  },
  {
    "url": "assets/js/page-Vuepress commands.66208337.js",
    "revision": "d32adb66d59539418be1afa9bb94c25a"
  },
  {
    "url": "assets/js/page-Vuepress 案例.f72c3163.js",
    "revision": "5b844a55d3f1afec23fb442cb1df5a22"
  },
  {
    "url": "assets/js/page-vuepress-plugin-container.818edc4e.js",
    "revision": "3c81d5f53e6002ba78f428f07f5c237e"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.8bd5bfd8.js",
    "revision": "0c9328e51c4e1c4aa4e2b0f8fbee5c3b"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.d3da83d2.js",
    "revision": "ffd25d10554be72de5db602c3c2e1804"
  },
  {
    "url": "assets/js/page-Vuepress.d9842f65.js",
    "revision": "97c3bfe36ae945ce79b6f872043c3e91"
  },
  {
    "url": "assets/js/page-Writing a theme.ff47e365.js",
    "revision": "d283899bf373e05a383b265488c0a7a5"
  },
  {
    "url": "assets/js/page-上下角标.2c1050b4.js",
    "revision": "6bb024ae0bd46d06ea73a0769b44bd41"
  },
  {
    "url": "assets/js/page-主页.48afff55.js",
    "revision": "94df446b402ef303870fb6a0fd6675da"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.f632c292.js",
    "revision": "d8daf6a1f39427630f886af9633af612"
  },
  {
    "url": "assets/js/page-主题配置.f0576517.js",
    "revision": "72af43ac5ee707064ccb8295e528bdd7"
  },
  {
    "url": "assets/js/page-介绍.1899b4a1.js",
    "revision": "61dc6e7060bdc1eed196a8c490b8c866"
  },
  {
    "url": "assets/js/page-侧边栏.d5f32c88.js",
    "revision": "66a7f322a7d3d1e5a06768aca962b319"
  },
  {
    "url": "assets/js/page-全屏按钮.ee633f01.js",
    "revision": "3576574982e18349d5ebb158ef059cca"
  },
  {
    "url": "assets/js/page-基础知识.47c2241e.js",
    "revision": "9af0dfe7d5da9e2cef70f68c6f2270aa"
  },
  {
    "url": "assets/js/page-导航栏.bc015a3a.js",
    "revision": "faba7c05a108478d3afd24b7904cdf30"
  },
  {
    "url": "assets/js/page-开发主题.6509944d.js",
    "revision": "891bf9623f47e4f5a271cde1706af0e5"
  },
  {
    "url": "assets/js/page-插件.9d4ef338.js",
    "revision": "4f118cc2d6b3280e9a0eebe55b169a3c"
  },
  {
    "url": "assets/js/page-插件说明.67600cce.js",
    "revision": "02f0e9fbf2ed9b11cfe8df456b7545eb"
  },
  {
    "url": "assets/js/page-文件结构介绍.321438f4.js",
    "revision": "909cd3aec5fa9efaa8aee9c84e95e6c5"
  },
  {
    "url": "assets/js/page-新增组件.4d809d35.js",
    "revision": "54064fba4ff7ec7d9f207f23b16ee018"
  },
  {
    "url": "assets/js/page-流程图支持.85aa7aa6.js",
    "revision": "2ea704e121363f76ffb6ec8c354fb8bc"
  },
  {
    "url": "assets/js/page-脚注.f9fd28e8.js",
    "revision": "006ed37338e0632d4ebf0829dae5f01d"
  },
  {
    "url": "assets/js/page-自定义对齐.b35f71f7.js",
    "revision": "82ad552d80345f37284e7f3ef3f6a1e0"
  },
  {
    "url": "assets/js/page-评论功能.b960493e.js",
    "revision": "8b10744decbd5fcba422ced595f4e17e"
  },
  {
    "url": "assets/js/page-路径导航.5433c250.js",
    "revision": "bcf0ddebaaa308c87e8ab8dea407c377"
  },
  {
    "url": "assets/js/page-页面.7a196eff.js",
    "revision": "99fd72d598348d354a4ddb3ac8efcc57"
  },
  {
    "url": "assets/js/page-页面配置.d281e1dc.js",
    "revision": "4fc71bfd7bf5bcbe24f27c959dabdaae"
  },
  {
    "url": "assets/js/page-项目指令.0d749f52.js",
    "revision": "398081855dd46984b8a41510eb33d4d3"
  },
  {
    "url": "assets/js/page-默认主题配置.45776f6d.js",
    "revision": "5f89568bd63b42e4be70624188013db5"
  },
  {
    "url": "assets/js/vendors~docsearch.f05d4b04.js",
    "revision": "87e476050c91f90c68560b131351ebd9"
  },
  {
    "url": "assets/js/vendors~layout-Layout.7748aab2.js",
    "revision": "16865d86987298cfd1b48f84cd1daf5a"
  },
  {
    "url": "basic/index.html",
    "revision": "e16690953c1cc9691847e4b803330e96"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "ea238989efd139825ef7160c487df2a5"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "5ec8fa47fb04554203767d2ce7dc52d6"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "c5aa3f6320bba13c6ed0459cc7ecc8bf"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "5157ff416a73cce71b63275298ab4ee0"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "a9a3d019f6ee7fe1184616e219ab88bc"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "44dcc5ea94da1d9b97a7006f5e906d70"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "e876db7560cdd2e4eca4f17a3081eff1"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "f97d9ae10d6f57039a59927df0428504"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "162d89536c5968b22c7b7c1f981c20b1"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "31b2694dc1e865297199663b209b5d98"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "6ca197eec0102785585e129f0f281041"
  },
  {
    "url": "en/api/index.html",
    "revision": "6430ceeb913323207e85748ebb3d791b"
  },
  {
    "url": "en/api/page.html",
    "revision": "31ed7b39ba3843f4e6395b53d07d26db"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "de96b2497f934021b86f1e32b9d56829"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "fa44bf38fe21ddcd75a8bcc95e0864b0"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "1d069c43277d3561db584c2c7799dd36"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "bca3a49c7c6f6fa0d2c7a6aa47737eff"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "3183ed1fb22a51566a28b735067c166f"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "bf9b33bf32e8a05c189387d782b60cd7"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "a9cd7c82508d456194fe2a1f5bb39b46"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "8cdd4fd214a7f8100125c23e6ada5a8e"
  },
  {
    "url": "en/basic/index.html",
    "revision": "0c21f79d62f568fe0ca01e0035295351"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "25fd72dc0a8e82373f996ba2438fc1d9"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "720fd32b66f18a0f965793a221d24728"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "512fe73046ae2e812a9873d8fed7b426"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "bf2a4e1fac8cb3ac20a86e834542841b"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "96041fd3ca42c839dcc46ca7ed35a81d"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "306cd367633c2d99b9f8775e08619e98"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "940a76185e34977cb92b88afcb2aaa6b"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "554204f88d39b2c4e250c7e91c7d1087"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "9e0f1706ca5b138ccf1092161188a32f"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "92fad14d8e5d3fd195294f8e3342cb59"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "4d25ef1d7316e90a137542bc6bda6b4f"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "a06524095b55e30373c0946a1d964ff0"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "549d360d4fba04605824f69ff2f79d55"
  },
  {
    "url": "en/guide/component.html",
    "revision": "c19992f66b38a9d68abc4d255f7c5252"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "f2da40d3526f64172346193459f95b9a"
  },
  {
    "url": "en/guide/home.html",
    "revision": "052881dab3748f27da12a2b4e072253f"
  },
  {
    "url": "en/guide/index.html",
    "revision": "80b75d877150d2205be524e7184b99ca"
  },
  {
    "url": "en/guide/install.html",
    "revision": "b256b02c3598b80ff812ff59f30eb2df"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "5d104683a715866193abe67b070237d1"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "89c3aa518959f2ab6395c2fc7927a441"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "178c3a9dfcad1dba371a21e627a27e45"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "3a35546b90ba5371eb3d9de2c19d2446"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "d6c3ab8489ae22e05dcdc82bf10807f2"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "ef418a4a021974b07d5e6714e1af303f"
  },
  {
    "url": "en/guide/page.html",
    "revision": "cbf0995ff8dba14d4e902cb43206cfb8"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "4084489ceaf998221b11264c06631f79"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "f6748e8e40f76350a252da9de7ff26ae"
  },
  {
    "url": "en/index.html",
    "revision": "eca37168c0f22c1156f38cfcb6c5c00b"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "343566828f75a8205d0dc85fa65fb071"
  },
  {
    "url": "guide/comment.html",
    "revision": "e19619f3a7c57d6fd402ad7d0dc40042"
  },
  {
    "url": "guide/component.html",
    "revision": "f88e4c04da42a268e5346facceba17be"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "46305ef63e7905b463b621c65219372a"
  },
  {
    "url": "guide/home.html",
    "revision": "723beecb18d68ef91b26f28f9b4ec086"
  },
  {
    "url": "guide/index.html",
    "revision": "c6bb3f8d14d266e43ee5dc0c122c79df"
  },
  {
    "url": "guide/install.html",
    "revision": "339ecda3779b5fdbf031c566d3a44f16"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "70083049aa85f6de26f507e944f9ffa3"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "538ad7fa0d670595a5b53ec3993e3664"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "77a80ab04bb07b1a162375be3a220d10"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "39f05c9a355d5be249d71eb967407ebd"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "6428bd5179963351b097e554df1c835c"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "e5f20cd8ef7505654a9e2a20e14be3d7"
  },
  {
    "url": "guide/navbar.html",
    "revision": "029cdd1412cf4bbf64d65fa5573f1063"
  },
  {
    "url": "guide/page.html",
    "revision": "cdc77ad4a81188b799168d3889fc2d5d"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "f0453e7dda714c8618b29d337efcd1ec"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "1ff919b79a568c2cfc68eddcac17061a"
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
    "revision": "999aa3aee2d016cd34ed3072d4dce6a6"
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
