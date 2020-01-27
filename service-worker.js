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
    "revision": "48df08febda42e5a6462b1401df50d50"
  },
  {
    "url": "api/index.html",
    "revision": "91af35dd143d8bfe85248cfb9dcac06d"
  },
  {
    "url": "api/page.html",
    "revision": "edf2bd7d95b27484cb19528ee32ae4fc"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "4732a33c844858560e16b619ebca147d"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "8599ce48143017b0e2e9836fd9983d7d"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "d067f99eb257dfc31a8b02790d85d2ea"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "d93687962a37008d4821118ad9130adc"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "1820c9e06e03e10c2aaf5e9fa7d3059f"
  },
  {
    "url": "api/stylus.html",
    "revision": "11c40a46aef80ee7b35a3838d7f8bd9f"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "fab8ae16e2e15da717168e8dd76386a4"
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
    "url": "assets/js/86.9f017581.js",
    "revision": "1effc1c418b06b0e5a35226caf61c9be"
  },
  {
    "url": "assets/js/87.2454ec2f.js",
    "revision": "82d1b3c9d2c3735b9ed2e73fafea19e1"
  },
  {
    "url": "assets/js/app.136c1d20.js",
    "revision": "b439751a9e97ad04d9f6a43e73870983"
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
    "url": "assets/js/page--1b278726.0ac8955a.js",
    "revision": "1dd541563f6b95cb38429f30738e986e"
  },
  {
    "url": "assets/js/page--24b68849.586ef9f3.js",
    "revision": "b38a7d514220029f92a3dba1a5d0f3c1"
  },
  {
    "url": "assets/js/page--298eb4e9.7b0f2595.js",
    "revision": "cfed28414e157dc29bff98ea619bc939"
  },
  {
    "url": "assets/js/page--33732ef1.2534aaef.js",
    "revision": "7cc2fb4b2c310653a312f7a6e599285a"
  },
  {
    "url": "assets/js/page--608d80cf.3dab5fde.js",
    "revision": "a91048174a96bfc464522030753708a9"
  },
  {
    "url": "assets/js/page--b64dd6ee.7ecd778b.js",
    "revision": "2bbf3cb9ece9fafb6a557aeb548fb688"
  },
  {
    "url": "assets/js/page-About Vuepress.3432240d.js",
    "revision": "5d5072a26f3f5d6370055458a81e1144"
  },
  {
    "url": "assets/js/page-API Docs.65d0c047.js",
    "revision": "b924ab27afbee33569241bae72fa9c47"
  },
  {
    "url": "assets/js/page-API 文档.fe0b0a68.js",
    "revision": "d3b7880bf3e6a6d9bff175f3b6c0ecce"
  },
  {
    "url": "assets/js/page-Basic.9263b957.js",
    "revision": "c099433eb8b42d42813a2a4a74cf4a36"
  },
  {
    "url": "assets/js/page-Breadcrumb.459c9233.js",
    "revision": "54993ded9c77040222cd916260f17de4"
  },
  {
    "url": "assets/js/page-Comment Function.e79a3cd2.js",
    "revision": "134334dc61c492a638fd4f2bb19665a4"
  },
  {
    "url": "assets/js/page-Default Theme Config.c18307a3.js",
    "revision": "2c8f4b8bb2f6363ea2648b86a86a0c55"
  },
  {
    "url": "assets/js/page-Emoji List.51c0d580.js",
    "revision": "2dccf4bf46acd021fa99883c32f62abc"
  },
  {
    "url": "assets/js/page-Emoji列表.b943a527.js",
    "revision": "1adff5ffd7ddbc5794f79fcab9c9ee06"
  },
  {
    "url": "assets/js/page-File Structure.fd4f3297.js",
    "revision": "2c7ffaf4e090434ba39833e0742421c0"
  },
  {
    "url": "assets/js/page-flowchart.f4a981a1.js",
    "revision": "58f1f466a6bfe02c3d8db4d5f6623de3"
  },
  {
    "url": "assets/js/page-Footnote.ccb8eb62.js",
    "revision": "09080f4ed80514fba84c837779180089"
  },
  {
    "url": "assets/js/page-Fullscreen Button.70d98974.js",
    "revision": "82872f4be84788e16c3c50af2f9bd126"
  },
  {
    "url": "assets/js/page-Home Page.6f04adc1.js",
    "revision": "c09f3f331c70b566f90ab70317cb5c95"
  },
  {
    "url": "assets/js/page-Home.a730e432.js",
    "revision": "15de3e8fb89d5506380ac013b0759b99"
  },
  {
    "url": "assets/js/page-Introduction.7f2388b1.js",
    "revision": "18975d512e0e9daa7e2bd449d36e694e"
  },
  {
    "url": "assets/js/page-Markdown DEMO.3d3b1694.js",
    "revision": "f469d28312ddc5eccdba972ac5fb6f9d"
  },
  {
    "url": "assets/js/page-Markdown Introduction.b887b48b.js",
    "revision": "1c7e42e1d9a5a73c93557f4824258eed"
  },
  {
    "url": "assets/js/page-Markdown 中的新语法.feb3307f.js",
    "revision": "aff5ce6595f5e0bfcdbc7d519891c539"
  },
  {
    "url": "assets/js/page-Markdown介绍.3256e791.js",
    "revision": "19745bd5f4ff638b66eadf4fd011d60e"
  },
  {
    "url": "assets/js/page-Markdown示例.1a9597bf.js",
    "revision": "9491258cb739c8f7b0c3207cb58cc782"
  },
  {
    "url": "assets/js/page-NavBar.fc499ac8.js",
    "revision": "636a014142e8fa3dc238728560d339db"
  },
  {
    "url": "assets/js/page-New Component.1488e3ab.js",
    "revision": "cdab7554b3ab3b2c4650039bba246511"
  },
  {
    "url": "assets/js/page-New syntax in Markdown.85a42ee4.js",
    "revision": "55a2a1abfcafa0012db51ab4ef21e737"
  },
  {
    "url": "assets/js/page-Page Configuration.0ac1b262.js",
    "revision": "9afd4813a12736140cf1a5f0ecff416c"
  },
  {
    "url": "assets/js/page-Page.f4fd11f1.js",
    "revision": "4bcd5c84f7420feda1000529ad639bbb"
  },
  {
    "url": "assets/js/page-Plugin Description.ff1d57ba.js",
    "revision": "76c2f599ba55f6bc7d2c523d346e3b47"
  },
  {
    "url": "assets/js/page-Plugins.7f036faa.js",
    "revision": "8362d631e641e874ac91bacc820d1373"
  },
  {
    "url": "assets/js/page-Sidebar.dd90135c.js",
    "revision": "98b852aa62a9d03cfee051c38e2a21ad"
  },
  {
    "url": "assets/js/page-stylus configuration.57fd5214.js",
    "revision": "5c870c1f884ce3d44e16a58ef912a3e2"
  },
  {
    "url": "assets/js/page-stylus 配置.a620ab9b.js",
    "revision": "30049ff7a246aa61d52fb63a04d4455d"
  },
  {
    "url": "assets/js/page-Superscript and Subscript.faf3552a.js",
    "revision": "4902611f557f9425d9d36b891eb6da90"
  },
  {
    "url": "assets/js/page-Tex Support.c530c877.js",
    "revision": "68d2cffaf9aec748130f05c2e38b7c31"
  },
  {
    "url": "assets/js/page-Tex 语法支持.c2d456ef.js",
    "revision": "3550d076fa22984f4e4c8edb6d5a45e6"
  },
  {
    "url": "assets/js/page-Theme color and Night mode.bd02b261.js",
    "revision": "e73d9053a3da2d28c039d7d4587f67a5"
  },
  {
    "url": "assets/js/page-Theme Config.7e994c60.js",
    "revision": "1a9b705a9b1ffdeae456544869e6201a"
  },
  {
    "url": "assets/js/page-Vuepress Cases.8c42bbcc.js",
    "revision": "23be288eb807ba235abb70c80f61daf4"
  },
  {
    "url": "assets/js/page-Vuepress commands.a755548b.js",
    "revision": "b1254bbd1f0c2194dbc04edda998ab6c"
  },
  {
    "url": "assets/js/page-Vuepress 案例.588e65fd.js",
    "revision": "426d93278b207fb6557e0cc536db34a5"
  },
  {
    "url": "assets/js/page-vuepress-plugin-container.f366aa60.js",
    "revision": "04ec4adc1600f683b03b9addf5ffceba"
  },
  {
    "url": "assets/js/page-vuepress-plugin-copyright.ce6fd6df.js",
    "revision": "f9925c9ac1548f4326eb34ef508af62a"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.bc77ce77.js",
    "revision": "eb8d5a8e78b4600e87abbbfb557d8b17"
  },
  {
    "url": "assets/js/page-Vuepress.83561b37.js",
    "revision": "1bf66aa9326d31298aaed0cf166fe153"
  },
  {
    "url": "assets/js/page-Writing a theme.4ac31d81.js",
    "revision": "729aca3ce3aaccf0aa759244e354148c"
  },
  {
    "url": "assets/js/page-上下角标.554e48bf.js",
    "revision": "b016e06c6204a947a58c1a82cbd1d29d"
  },
  {
    "url": "assets/js/page-主页.8712ee34.js",
    "revision": "ad3f9a394f1f0a8417f54b992dda08ae"
  },
  {
    "url": "assets/js/page-主题色与夜间模式.2b6441bc.js",
    "revision": "ece65af903a66f737e2d9b27d27fda48"
  },
  {
    "url": "assets/js/page-主题配置.7999495d.js",
    "revision": "54f67a356e1426dc1fd4b44b966417b0"
  },
  {
    "url": "assets/js/page-人物.d6174084.js",
    "revision": "607a49ca3e2913c98546e443cd78f951"
  },
  {
    "url": "assets/js/page-介绍.2cb88d0d.js",
    "revision": "8d0eb23d93aa7c86135f558e9c9674f8"
  },
  {
    "url": "assets/js/page-侧边栏.f16ae2b6.js",
    "revision": "8bb4789d4c679691c4d5e0ddec8d6596"
  },
  {
    "url": "assets/js/page-全屏按钮.42a4b4cc.js",
    "revision": "9bd60a99502d35564ebc69589a8760ce"
  },
  {
    "url": "assets/js/page-图标支持.8095dac8.js",
    "revision": "6760ca5aaf2cc53c0db4d4b55c2a0f18"
  },
  {
    "url": "assets/js/page-地点.a120f1ef.js",
    "revision": "76e9745961575c7121bf4ee7d380c521"
  },
  {
    "url": "assets/js/page-基础知识.06dce75c.js",
    "revision": "00a60cd292fa5ff76cab010f88822f9c"
  },
  {
    "url": "assets/js/page-对象.96b4d1db.js",
    "revision": "75a3aadfe5181efc2426cd8a4b7d16b7"
  },
  {
    "url": "assets/js/page-导航栏.b36d28bd.js",
    "revision": "422a8931c0559664a4da0547af8f9145"
  },
  {
    "url": "assets/js/page-常见问题.ab240b25.js",
    "revision": "8c3ef1bb036b3343ee6ae5099fd0150b"
  },
  {
    "url": "assets/js/page-开发主题.eefe0bcd.js",
    "revision": "97accf4882ca76c7564a713f3e64b032"
  },
  {
    "url": "assets/js/page-插件.950cdd14.js",
    "revision": "07bc422f0c3666c8a2b3dc0f5b37d6d8"
  },
  {
    "url": "assets/js/page-插件说明.1348bbed.js",
    "revision": "6d73fd0c42ec65e8048f0e3c4d1a4876"
  },
  {
    "url": "assets/js/page-文件结构介绍.56c34dac.js",
    "revision": "b87f9f5e858ae28154cd5184fa77c2b7"
  },
  {
    "url": "assets/js/page-新增组件.400ef891.js",
    "revision": "1abcab46d89a865b1fe17cae9bbd68b6"
  },
  {
    "url": "assets/js/page-流程图支持.5904214f.js",
    "revision": "e0dc76fa70ed6ef1a83b642467aacafa"
  },
  {
    "url": "assets/js/page-符号.9d910eae.js",
    "revision": "c783aa431505619d307a2b949ce58e59"
  },
  {
    "url": "assets/js/page-脚注.57925a56.js",
    "revision": "6a47f6e325aa9d6e17d9d820ae3a3289"
  },
  {
    "url": "assets/js/page-自定义对齐.514ce6ea.js",
    "revision": "8894b2bb05c0cd53ccb3b64dff36c4b4"
  },
  {
    "url": "assets/js/page-自然.01892f34.js",
    "revision": "994a88b9058ead443411ed359fd4a104"
  },
  {
    "url": "assets/js/page-评论功能.71694c56.js",
    "revision": "71fca94c26d34a3ee5bfb0a9b96e85b3"
  },
  {
    "url": "assets/js/page-路径导航.2d162acb.js",
    "revision": "0a425d4172ce5e7204a0afddc327c478"
  },
  {
    "url": "assets/js/page-页面.5fc9ef89.js",
    "revision": "44f73d41842ce9e37a538b6813ed7b1b"
  },
  {
    "url": "assets/js/page-页面配置.e5fb49a9.js",
    "revision": "45b990be42ec7c03737812800af2f241"
  },
  {
    "url": "assets/js/page-项目指令.bf3dabce.js",
    "revision": "46406e6b2b7ce626f729eda06620d06f"
  },
  {
    "url": "assets/js/page-默认主题配置.65d6ff2f.js",
    "revision": "429574b03972e4ff118c9501b0e8971a"
  },
  {
    "url": "assets/js/vendors~docsearch.9b2dbe96.js",
    "revision": "2e089a887e28b225be15bf34f5c63959"
  },
  {
    "url": "assets/js/vendors~layout-Layout.834d0d8b.js",
    "revision": "ecb4bcfa945d1a7437b2e4010fb164d6"
  },
  {
    "url": "basic/index.html",
    "revision": "e55dc085422466e836771ecc9a6577c3"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "8915259ad502f1e327a111b3fc69d47b"
  },
  {
    "url": "basic/markdown/emoji/index.html",
    "revision": "d61642046811efc91c43364856842751"
  },
  {
    "url": "basic/markdown/emoji/locate.html",
    "revision": "e16bf0e8916df4d629ee1ff719f769ff"
  },
  {
    "url": "basic/markdown/emoji/nature.html",
    "revision": "e7b08cf38a3546e7c6b7b7e9c7aa2ba3"
  },
  {
    "url": "basic/markdown/emoji/object.html",
    "revision": "da7f62912dd51018b0ec0f7caa60ae7f"
  },
  {
    "url": "basic/markdown/emoji/people.html",
    "revision": "e72b9439a802d45f3f2ab5fe1b60718c"
  },
  {
    "url": "basic/markdown/emoji/symbol.html",
    "revision": "4096db4a0ee6952435a789b964dbed61"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "c7bf9a54554fc825a2ef4599bf600703"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "ea53a77ededc6b97bdfacefe02c57e34"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "5fcb416aac77fa2e859ab8beac3a8c84"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "7b1659e33c2e873376a1a7090e622c23"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "4aa50e7561635db9b70768598e8116e5"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "e6e6f56a7efae3aebb230d57d04a9e52"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "434661769767356178d394960d21dd67"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "242f2cee0c315bf70050e361d2611b2a"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "bddcd8ab5bab74376562983023b7e278"
  },
  {
    "url": "en/api/index.html",
    "revision": "e75074156f273f56cb39c34c53489fa1"
  },
  {
    "url": "en/api/page.html",
    "revision": "0571ed2b87efb261d93356afe94f7f70"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "42e6351858d5f397bdd4b6305660ea36"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "19788913de60280e6cf9b8849ff8aaef"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "77bf850af474a2b1baf6b6702c222aad"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "e8e338c171825c2fcd2214649ba24435"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "448a1c41fc4a3c25e092784f08c07c57"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "812289cb44f20d302045c7f843cd3485"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "69f7f5a746b5077dac40ea553f0a685e"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "ec72147c59c418e34295b87e173bdba6"
  },
  {
    "url": "en/basic/index.html",
    "revision": "6cc322703fffc27a7e70294a7b6244bf"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "1f2bc6668171c2b864f313020b433185"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "dc00d88e15bbb895cfcaaac9f2a80c8b"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "1b02492ac4466c79be556f121fb5fd92"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "401aa109a0a1c176c1244183206af85b"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "72d9a2a74a19071c5db01ea1d7fca58b"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "1ea5839f3b8fe1192b20a000a8915d3f"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "b754508fc78d290aa3f5c7309ce577d8"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "1d43a41083d1abfcead86f47958c383e"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "f9122dd671081c4ba0b647bb9323a846"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "6014ed520d8ec68b8b6041415eb6953b"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "16dbaabb0539cd5169ea4fca3eb6afd7"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "d825ff6e8e2516a6d5a5383a5eabd9b5"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "487a8e7f8d9066065d7b55be89dbdaea"
  },
  {
    "url": "en/guide/component.html",
    "revision": "11145f3198d2e686999b3a65a2221488"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "e4ecd0fa903dfa08cd653e79eb1ac2e6"
  },
  {
    "url": "en/guide/home.html",
    "revision": "1a8d6649309bfebe39d4e23ee09dd0b1"
  },
  {
    "url": "en/guide/index.html",
    "revision": "b14c81b14cca42f7e96d2545848d7bb6"
  },
  {
    "url": "en/guide/install.html",
    "revision": "2ed1e0abe9f5b11cb113857c83cf2887"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "20d5b4530be94666ed81112b4342161c"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "3ebac0e0392168826100ed26a234643e"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "7bcd5d3ef334c10d36c899cd83d6b21c"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "9a9dc1d21d84e333dc99a107291113c8"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "d383cee6e262d9269a67d72a6430083b"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "51abb356f94d751c87d94c752891bc97"
  },
  {
    "url": "en/guide/page.html",
    "revision": "3788e0af9a9ffc3634d72dd4ff8d4550"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "0d094a99423b1fcab7c54bebfca43768"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "feff511ef8527fa2d84c3bb959eef74e"
  },
  {
    "url": "en/index.html",
    "revision": "d78d0975c5d72848777241ac738d5466"
  },
  {
    "url": "FAQ/index.html",
    "revision": "38bcf63c7641f3517ac528e10b0764e5"
  },
  {
    "url": "guide/comment.html",
    "revision": "9f798a5b44e2c6b0750e04634ea2dc0f"
  },
  {
    "url": "guide/component.html",
    "revision": "84b52970b2c0e50ed578589a6c22c60c"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "5ce083c61cafb37e86e2ca3084d02121"
  },
  {
    "url": "guide/icon.html",
    "revision": "3911efb37695de6ad44268645ccf4e15"
  },
  {
    "url": "guide/index.html",
    "revision": "c1e485191e4f20dfcc9b3b1ac604412a"
  },
  {
    "url": "guide/install.html",
    "revision": "1aeb28b977d2558dea2afe9afd3e4109"
  },
  {
    "url": "guide/layout/breadcrumb.html",
    "revision": "79f53dac1cfac33b9bad9f04359a10d5"
  },
  {
    "url": "guide/layout/home.html",
    "revision": "0970fbb129061915185861dfdb96de3b"
  },
  {
    "url": "guide/layout/navbar.html",
    "revision": "d62896358f9ffadef80ce5c4c1be54a1"
  },
  {
    "url": "guide/layout/page.html",
    "revision": "0e80ccd33fa93fa3ace9e4cbf6a5f0e5"
  },
  {
    "url": "guide/layout/sidebar.html",
    "revision": "341c1515544f7a39f43f93e0d8118e7c"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "6381d373a09f10c1739f83e53bc70ea1"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "638ab1e379ae0ba5ada643cbea761af4"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "cf37094625db5bf2daad9166e4bc11c2"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "f98dd0835dedbcaaee7c047a008fe5a4"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "041350b4080872664c66dc4ceab74007"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "f92d134b141276c46c3be2a76a5ff33d"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "c0350a0f4fd2b0e283180984f47a9045"
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
    "revision": "edd258f8d34f129d83b9a9535fe114c2"
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
