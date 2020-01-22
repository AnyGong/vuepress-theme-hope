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
    "revision": "acfe32a01cb3cab803ae9fcdfa9435ba"
  },
  {
    "url": "api/index.html",
    "revision": "cd3ee976a66231ece9e3283fa22cf105"
  },
  {
    "url": "api/page.html",
    "revision": "35e31e8563c5bc8ca6e0cb6b7b32cf3d"
  },
  {
    "url": "api/plugin/container.html",
    "revision": "b9f8a348f68a4ebfb6a44ac93e9820e3"
  },
  {
    "url": "api/plugin/copyright.html",
    "revision": "7628f33c74aeb81f3b6c920f89c48df6"
  },
  {
    "url": "api/plugin/index.html",
    "revision": "1ae293ecbb2e35b3c732f51f9de100c8"
  },
  {
    "url": "api/plugin/medium-zoom.html",
    "revision": "7b6a09fb8331f2721e965df5ec89ef8f"
  },
  {
    "url": "api/plugin/pwa.html",
    "revision": "103f0240a829d60b03b85eb0ea42b2ee"
  },
  {
    "url": "api/stylus.html",
    "revision": "3ef2844f9a7593de24310cff4ec98b7e"
  },
  {
    "url": "api/themeConfig.html",
    "revision": "fdb569b912dc3f453aa266aa0da5e0b8"
  },
  {
    "url": "assets/css/0.styles.2665a3cc.css",
    "revision": "285d4d03785e62c07f70a0c0f097537e"
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
    "url": "assets/js/app.c3e313d5.js",
    "revision": "93177aa309490cd223c3847eb4ce5582"
  },
  {
    "url": "assets/js/layout-Layout.a21b16d4.js",
    "revision": "6a39720c8fb03940a1a55e9910a6dee0"
  },
  {
    "url": "assets/js/layout-NotFound.9c4a73b7.js",
    "revision": "75b9f4635b1dc461c26edeb3f57931b9"
  },
  {
    "url": "assets/js/page--1b278726.aa2459b4.js",
    "revision": "4d5d44eab46874ccf5342d3c894be373"
  },
  {
    "url": "assets/js/page--24b68849.2f8fa95f.js",
    "revision": "21dee2fbc6e34aef403d2d69a984dfc4"
  },
  {
    "url": "assets/js/page--298eb4e9.682c89a1.js",
    "revision": "3309df37a99d80308a93f46b062484f7"
  },
  {
    "url": "assets/js/page--33732ef1.0d555c85.js",
    "revision": "ed7be1ae63b0254a3b8f79434aab2d01"
  },
  {
    "url": "assets/js/page--608d80cf.fb70b793.js",
    "revision": "4f147cdd896d55003ae03c41fc4d810a"
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
    "url": "assets/js/page-Breadcrumb.0c00f35c.js",
    "revision": "3932be084487ab2f7b314f2e6cf479e7"
  },
  {
    "url": "assets/js/page-Comment Function.d5df61da.js",
    "revision": "acb8fa0fc5111c10d8ab66b76839300c"
  },
  {
    "url": "assets/js/page-Default Theme Config.80d9e491.js",
    "revision": "7bc6b91b83e0f381b76f3ddd84343a98"
  },
  {
    "url": "assets/js/page-Emoji List.2ead88bc.js",
    "revision": "046e1403ba7229188ba3f2696d5f0cfb"
  },
  {
    "url": "assets/js/page-Emoji列表.6cad2548.js",
    "revision": "bbf155791b26bbd9b13baf3373456a8e"
  },
  {
    "url": "assets/js/page-File Structure.b1e92da9.js",
    "revision": "f295bb4b33d519d233a8949eec6f3d0f"
  },
  {
    "url": "assets/js/page-flowchart.abdac1f3.js",
    "revision": "ade6520c699a9b4bd7fe087be6749daf"
  },
  {
    "url": "assets/js/page-Footnote.9d237c38.js",
    "revision": "8063f9d085a22e9719d9f7ee65d80759"
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
    "url": "assets/js/page-Home.6e602f5d.js",
    "revision": "afc946e61057b0d54be797c9f80722b9"
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
    "url": "assets/js/page-Markdown Introduction.90cf44f9.js",
    "revision": "7b9a51ffe2fcaddb4d50934cd3ee84f0"
  },
  {
    "url": "assets/js/page-Markdown 中的新语法.88f8d44f.js",
    "revision": "0acef182e69fadc903e365eecf5722a0"
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
    "url": "assets/js/page-New syntax in Markdown.1b415151.js",
    "revision": "d60873a63313f13952a3030cda05819e"
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
    "url": "assets/js/page-Plugins.797b9e7f.js",
    "revision": "a86e4bc5cd0b3511ac1a93ecddb7683e"
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
    "url": "assets/js/page-Theme color and Night mode.1206170d.js",
    "revision": "ecbff4e9dd442322ac2ce994327024f4"
  },
  {
    "url": "assets/js/page-Theme Config.7529ddc2.js",
    "revision": "8c2ec44c6f237281d266b32ecbdac3a1"
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
    "url": "assets/js/page-vuepress-plugin-copyright.0351938b.js",
    "revision": "31c5143a538f6578c66ab56c1a08b69b"
  },
  {
    "url": "assets/js/page-vuepress-plugin-name-chunks.7413d22b.js",
    "revision": "3873866257695f8958937f340fda4d2e"
  },
  {
    "url": "assets/js/page-Vuepress.b4b36027.js",
    "revision": "bd7ccd804521a7a7563e3f45f8db884b"
  },
  {
    "url": "assets/js/page-Writing a theme.e59c9a14.js",
    "revision": "5140c2724a81d0bab212763f5f6feba9"
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
    "url": "assets/js/page-主题色与夜间模式.0e2e3cc1.js",
    "revision": "55bfd10da0328545816f2a148ebea8a1"
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
    "url": "assets/js/page-插件说明.0c9acf22.js",
    "revision": "823b757ef698975a2b9994db1abaf154"
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
    "url": "assets/js/page-脚注.4a3b635f.js",
    "revision": "82b1d219b829b7d3f667436cd249d0ca"
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
    "url": "assets/js/vendors~layout-Layout.5c2af48f.js",
    "revision": "18a8027ad7819b23778620822187297e"
  },
  {
    "url": "basic/index.html",
    "revision": "bb301f1314fd869c64d9ee69a6dd3b66"
  },
  {
    "url": "basic/markdown/demo.html",
    "revision": "d19c823922914451e520e679129656b6"
  },
  {
    "url": "basic/markdown/emoji.html",
    "revision": "010c3228399f7fe6bd0874050d6879e1"
  },
  {
    "url": "basic/markdown/index.html",
    "revision": "e7259271638e437a09157ba400090268"
  },
  {
    "url": "basic/vuepress/case.html",
    "revision": "bdf1a734289e0bb10324d3fab5d71f16"
  },
  {
    "url": "basic/vuepress/command.html",
    "revision": "949352522cab53437098809ff004b6a2"
  },
  {
    "url": "basic/vuepress/file.html",
    "revision": "4eb6dfdc4f533998561c4de2efc0e1e4"
  },
  {
    "url": "basic/vuepress/index.html",
    "revision": "03b96b64016f1b35fa96bd4a09cb25ad"
  },
  {
    "url": "basic/vuepress/plugin.html",
    "revision": "65bd3c1d85575d729034186d2df68637"
  },
  {
    "url": "basic/vuepress/theme/config.html",
    "revision": "f6e1a5cbc3ad39514ffcaba384abc4e8"
  },
  {
    "url": "basic/vuepress/theme/dev.html",
    "revision": "f91a5e2acf851d52ba5e9c37eac205fe"
  },
  {
    "url": "basic/vuepress/theme/index.html",
    "revision": "1f32b5b360db6da2389a3d33139e8766"
  },
  {
    "url": "en/api/index.html",
    "revision": "2d75b5819e846fbd0f97dc800f0f763f"
  },
  {
    "url": "en/api/page.html",
    "revision": "9284ceb81179740f193640b99f75163f"
  },
  {
    "url": "en/api/plugin/container.html",
    "revision": "a49c31a07ec66388241fd2353fc32710"
  },
  {
    "url": "en/api/plugin/copyright.html",
    "revision": "ceac2ebfe0b1267ed7cf58cca6841afa"
  },
  {
    "url": "en/api/plugin/index.html",
    "revision": "ec135f7a8daa7ab148239c26bf6354b5"
  },
  {
    "url": "en/api/plugin/medium-zoom.html",
    "revision": "d94f4f671699f887326c07f361350770"
  },
  {
    "url": "en/api/plugin/name-chunks..html",
    "revision": "227cbe47d28c73e63dfd911fec71d383"
  },
  {
    "url": "en/api/plugin/pwa.html",
    "revision": "d76b738c1728d6a33569af4d1bcf6726"
  },
  {
    "url": "en/api/stylus.html",
    "revision": "6a7a9bf09eb913603bfa0923dd310288"
  },
  {
    "url": "en/api/themeConfig.html",
    "revision": "3c6818d583b372ff1b47cb462bdc002c"
  },
  {
    "url": "en/basic/index.html",
    "revision": "4898be2e0bfbfa64a91b584395492ae6"
  },
  {
    "url": "en/basic/markdown/demo.html",
    "revision": "f8c6f50cced8124f2aba384e86ffccd1"
  },
  {
    "url": "en/basic/markdown/emoji.html",
    "revision": "e946949b26d3c7c354a57aa892d3fd13"
  },
  {
    "url": "en/basic/markdown/index.html",
    "revision": "282909b23bcf74c167232a3c038c11fd"
  },
  {
    "url": "en/basic/vuepress/case.html",
    "revision": "e79eb985b907282a7fc7455f3f73d56f"
  },
  {
    "url": "en/basic/vuepress/command.html",
    "revision": "1772e46fc2e2009302a826a112f94133"
  },
  {
    "url": "en/basic/vuepress/file.html",
    "revision": "8c0ab32052782e5fee417f5f4b38fb26"
  },
  {
    "url": "en/basic/vuepress/index.html",
    "revision": "cca7d9598b80ab34a8645531b2a79269"
  },
  {
    "url": "en/basic/vuepress/plugin.html",
    "revision": "51742d04866dd70b0b6296e4b5d67fbc"
  },
  {
    "url": "en/basic/vuepress/theme/config.html",
    "revision": "53650b5eadc492c975e57c0148154906"
  },
  {
    "url": "en/basic/vuepress/theme/dev.html",
    "revision": "c462afca891dae7c4c94c4abb7cef6bb"
  },
  {
    "url": "en/basic/vuepress/theme/index.html",
    "revision": "8c3a338e0f57ad3c38bd64363ffe0a75"
  },
  {
    "url": "en/guide/breadcrumb.html",
    "revision": "b10ebe7ebfca440b8bfead991368ace1"
  },
  {
    "url": "en/guide/comment.html",
    "revision": "67a0c0bfb96d158ce1d0d85241b30c62"
  },
  {
    "url": "en/guide/component.html",
    "revision": "874f52da8ada2f9d972ab9b928d2e7cc"
  },
  {
    "url": "en/guide/fullscreen.html",
    "revision": "aa2076b1519079e2bea05bf43ce41d2a"
  },
  {
    "url": "en/guide/home.html",
    "revision": "4101b769511a8429068d1eb04746c2cd"
  },
  {
    "url": "en/guide/index.html",
    "revision": "a688dc499bc91eb57f0fd6bf433210ac"
  },
  {
    "url": "en/guide/install.html",
    "revision": "1433f4fb67d020fcf745ded66554119e"
  },
  {
    "url": "en/guide/markdown/flowchart.html",
    "revision": "a03ddc4c0e377e7611b17c6108ff0fcf"
  },
  {
    "url": "en/guide/markdown/footnote.html",
    "revision": "33bd26abcea220b9f55442ee28f0f9a3"
  },
  {
    "url": "en/guide/markdown/index.html",
    "revision": "0ea7d37c25f25f98b5076656e1fb02b8"
  },
  {
    "url": "en/guide/markdown/sup-sub.html",
    "revision": "feb28503138e4c8be66a2bd9fcc59cd1"
  },
  {
    "url": "en/guide/markdown/tex.html",
    "revision": "a50ca3ba864b9c50b504e3d8f3eee951"
  },
  {
    "url": "en/guide/navbar.html",
    "revision": "9acce44d4034c748c9633ac36614e99a"
  },
  {
    "url": "en/guide/page.html",
    "revision": "afee950ccb8c62bfc70cb2e1cf3f26bd"
  },
  {
    "url": "en/guide/sidebar.html",
    "revision": "4c03b0f707507667f458ccfde2e7824f"
  },
  {
    "url": "en/guide/themecolor.html",
    "revision": "43dc76af6b57b1979fe951391a449b05"
  },
  {
    "url": "en/index.html",
    "revision": "b81e0cccee4c3fc4f222708af9edfbf5"
  },
  {
    "url": "guide/breadcrumb.html",
    "revision": "9ec3adfefaf266baf0e620da296bacb2"
  },
  {
    "url": "guide/comment.html",
    "revision": "a4ae2f27c57f336558619763869f02ab"
  },
  {
    "url": "guide/component.html",
    "revision": "843a9863285e4466f8bc77e7f96d7db8"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "296f32e6540ab7d8efebd3a880da5d93"
  },
  {
    "url": "guide/home.html",
    "revision": "8a169b8e241b46e31de369e0ff16dbab"
  },
  {
    "url": "guide/index.html",
    "revision": "19d03bb6e2d2c5bed07ee66b68e3cf8d"
  },
  {
    "url": "guide/install.html",
    "revision": "6761e7fb495200cbf889f663eb113265"
  },
  {
    "url": "guide/markdown/align.html",
    "revision": "47ffc3356c06dc1059f5afac283a5b1c"
  },
  {
    "url": "guide/markdown/flowchart.html",
    "revision": "3ac644eec86f7ced9aa64bba789456a0"
  },
  {
    "url": "guide/markdown/footnote.html",
    "revision": "f781e04cdf64d5b8e7468c0a57d9f333"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "3fda1cd8bd5ed306dafa02aac4738d5c"
  },
  {
    "url": "guide/markdown/sup-sub.html",
    "revision": "6c94ec5873c3b18ff1737ad3be34ab88"
  },
  {
    "url": "guide/markdown/tex.html",
    "revision": "2411ad97dde8bca4f6cac085aabcde7b"
  },
  {
    "url": "guide/navbar.html",
    "revision": "a1f2d7502fca1e075d3e8dd2484993b7"
  },
  {
    "url": "guide/page.html",
    "revision": "43c40789e1d8f6f27136afeea5225029"
  },
  {
    "url": "guide/sidebar.html",
    "revision": "176dfd56baf14d44f8d5d77a909fa88a"
  },
  {
    "url": "guide/themecolor.html",
    "revision": "dde8678df813f0fe7c669c6e8d74880c"
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
    "revision": "ef146d839edd56f81d434ffc264f0243"
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
