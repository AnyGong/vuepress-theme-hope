if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!s[e]&&(await new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}),!s[e]))throw new Error(`Module ${e} didn’t register its module`);return s[e]},a=async(a,s)=>{const i=await Promise.all(a.map(e));s(1===i.length?i[0]:i)};a.toUrl=e=>`./${e}`;const s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=new Promise(async s=>{let r={};const c={uri:location.origin+a.slice(1)},f=await Promise.all(i.map(a=>"exports"===a?r:"module"===a?c:e(a))),b=d(...f);r.default||(r.default=b),s(r)}))}}define("./service-worker.js",["./workbox-60b22648"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"404.html",revision:"a973d9783ec5d985ee549bfc12f992c6"},{url:"api/index.html",revision:"d89dbd5e30f7d0baed3851eec2512d53"},{url:"api/page.html",revision:"50a95dd5fd1b16f70f728f0fd75ecd56"},{url:"api/plugin/container.html",revision:"00b7dbc15387be309671d1ea09f84faa"},{url:"api/plugin/copyright.html",revision:"42fdf209c5d38d344b07b2336d3c5d2d"},{url:"api/plugin/index.html",revision:"11d7080249cddb1e34e45a2fd01582f8"},{url:"api/plugin/medium-zoom.html",revision:"97538edb9b10d5620cc9eb1382105b0f"},{url:"api/plugin/pwa.html",revision:"76a27ccba05d806d8227412f05575fd8"},{url:"api/stylus.html",revision:"dfc13aba8a4876a86736b3b9b25fb5c8"},{url:"api/themeConfig.html",revision:"18585551f1f996d430751d8b92e0a300"},{url:"assets/css/0.styles.bcdad292.css",revision:"cb394fd73960888d8b3bf168337a860c"},{url:"assets/fonts/MathJax_AMS-Regular.07173fb7.woff",revision:"07173fb77d2ee655811499d40c8388e7"},{url:"assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",revision:"bc42125861bd5bfc8686deeb612dcbb3"},{url:"assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",revision:"b80e08d5a79acbd1fafb1ca6f3515664"},{url:"assets/fonts/MathJax_Main-Bold.c9423d5d.woff",revision:"c9423d5dc9d82a38ca215f74e9cdd9f2"},{url:"assets/fonts/MathJax_Main-Italic.7e83626b.woff",revision:"7e83626ba8bf2d20dc41565f1e6d0afc"},{url:"assets/fonts/MathJax_Main-Regular.9995de47.woff",revision:"9995de4787f908d8237dba7007f6c3fe"},{url:"assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",revision:"77dbcee3c3d9a82a0c04a4ae7992b895"},{url:"assets/fonts/MathJax_Math-Italic.5589d1a8.woff",revision:"5589d1a8fc62be6613020ef2fa13e410"},{url:"assets/fonts/MathJax_SansSerif-Bold.07281897.woff",revision:"07281897a98a61c3733e1670f82a9fd5"},{url:"assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",revision:"3d580bd561716bfb1f0b4fdd7063a802"},{url:"assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",revision:"bc3af04f9a671fcabd6498042c57478f"},{url:"assets/fonts/MathJax_Script-Regular.4c74e33b.woff",revision:"4c74e33b0feb1fdbda49403a5e7ed604"},{url:"assets/fonts/MathJax_Typewriter-Regular.72815766.woff",revision:"72815766b08ca24d4d29ad1f5d4ecb45"},{url:"assets/img/architecture.9a93cf6c.png",revision:"9a93cf6cea38878e19c5816d1af28b17"},{url:"assets/img/homeImage.5ae9de9e.jpg",revision:"5ae9de9e15120d94e9892d0c15da9896"},{url:"assets/img/nightmode.73215ae2.png",revision:"73215ae22b72654917bb26f315d7d47c"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/94.2ac07eac.js",revision:"76e53359951681899f1a3f590b527191"},{url:"assets/js/95.96225963.js",revision:"f7b8c2387bbc2f989505b299328d9079"},{url:"assets/js/app.56f611c9.js",revision:"124354f696802d3ec11d4e2770a0c85a"},{url:"assets/js/layout-BlogEntry.007826e3.js",revision:"e20a0e9f76a18ce0b887ffb732529fa1"},{url:"assets/js/layout-BlogEntry~layout-Layout.96354844.js",revision:"c9da28a3a290cc886a2bf67dcc367607"},{url:"assets/js/layout-Category.a5e73e83.js",revision:"48bfadb9317b4393c262bba6fd5b98b5"},{url:"assets/js/layout-Layout.d4864079.js",revision:"754dbe4d21a40a7ae459ae64f4039fd0"},{url:"assets/js/layout-NotFound.666f7fb9.js",revision:"addb6c579952871727e62672e3eb2fdb"},{url:"assets/js/layout-Tag.b59df5db.js",revision:"e2d44e18bf413e595e621655c17e810a"},{url:"assets/js/page--1b278726.16f27c7a.js",revision:"db05ddcbfc7732b1562a0cb4ebfe6743"},{url:"assets/js/page--24b68849.29c6bfa6.js",revision:"cecd1e93a969d4e8423743ec350f6e68"},{url:"assets/js/page--298eb4e9.e6af9f08.js",revision:"0ffb6794eb2ef71ebae9755e87e8321d"},{url:"assets/js/page--33732ef1.ae3f7c24.js",revision:"4201a4d532d85d7d8e6385a415bf8c50"},{url:"assets/js/page--608d80cf.7dddc511.js",revision:"5803ac12eb1b43dd166d9bb8556136cf"},{url:"assets/js/page--b64dd6ee.acb7c86d.js",revision:"5fd09ea2753f3b674e30fc4bfb6a6d6c"},{url:"assets/js/page-About Vuepress.a7c9011f.js",revision:"61a0690cc43717039fb92c9fd26bc1d7"},{url:"assets/js/page-API Docs.1ff069bb.js",revision:"1c503394a1ce43899171f7b6fe55d5df"},{url:"assets/js/page-API 文档.737d0f43.js",revision:"cf096335e9933c9fbf987337ebbd87e5"},{url:"assets/js/page-Basic.13423097.js",revision:"c03ba18fea96964efd46b8f99b9e0184"},{url:"assets/js/page-Breadcrumb.f5ce04c5.js",revision:"3744943a0d834a9f67f634f3b354cab3"},{url:"assets/js/page-Comment Function.de17fc63.js",revision:"d0f9e5aff683b7b43c44946d4aa3c7be"},{url:"assets/js/page-Default Theme Config.efbe83fe.js",revision:"4fdcc5b72a73fddc7a60608400ac37f6"},{url:"assets/js/page-Emoji List.c4e127da.js",revision:"1aff61ed9dba40f6588a61f4ba3099b9"},{url:"assets/js/page-Emoji列表.f7ec9c7e.js",revision:"8eaf0ef2588345c02ecc83f80b43c65d"},{url:"assets/js/page-File Structure.9c558ba0.js",revision:"2b70eae2cf45aefce841f885c4189931"},{url:"assets/js/page-flowchart.7094ea01.js",revision:"be9c789f15a7ecd1260e04702e2622b1"},{url:"assets/js/page-Footnote.31cc50b5.js",revision:"73b10ef2c9a5120a70638a0b6581d5f2"},{url:"assets/js/page-Fullscreen Button.dfd41b28.js",revision:"9936507846cbbb0d6fe45b3501699a0b"},{url:"assets/js/page-Home Page.e0ee1869.js",revision:"7af039a934f7134bb313872563fc5777"},{url:"assets/js/page-Home.806d3c63.js",revision:"2652094876da209efe93a2434c2dc4ad"},{url:"assets/js/page-Introduction.846c8692.js",revision:"de67c1b386429fd6eee172937797197c"},{url:"assets/js/page-Markdown DEMO.f1202ffe.js",revision:"aa368099016cf8966ff0b5bc27f53aaf"},{url:"assets/js/page-Markdown Introduction.d1dba2e3.js",revision:"1db4b8e32a1c66bd6105949656d4e496"},{url:"assets/js/page-Markdown 新语法.ae996321.js",revision:"4e83aedc88f97a4dafba2013fdd93595"},{url:"assets/js/page-Markdown介绍.6a570f53.js",revision:"78c07e90ad78828db98e68bca8444d1e"},{url:"assets/js/page-Markdown示例.2d47067d.js",revision:"d2295ab44b8ddf674f778d97664d8730"},{url:"assets/js/page-NavBar.1d385b26.js",revision:"aedbef6ce8ce74b800eaf8b4aae5f0d9"},{url:"assets/js/page-New Component.16367d8c.js",revision:"fb9c44006621bbf3579e07da6894a24e"},{url:"assets/js/page-New syntax in Markdown.7783e72c.js",revision:"606472bd5abc3b0962e8a7d61fbc1083"},{url:"assets/js/page-Page Configuration.ade1d2d1.js",revision:"3f04fda1bc65b1acdf5a7558014adc11"},{url:"assets/js/page-Page.1c774512.js",revision:"b3e0cd0dcaf814f5cc09c2efa9af1db0"},{url:"assets/js/page-Plugin Description.8fb83ba5.js",revision:"78d4a78000b8dc274dabc2301c299f71"},{url:"assets/js/page-Plugins.5830ef67.js",revision:"3f6919b2750227e86c7d4fda61926bc0"},{url:"assets/js/page-Sidebar.62aaec80.js",revision:"c07361771856eea89f1394f5d2818a92"},{url:"assets/js/page-stylus configuration.eab2765f.js",revision:"3cacaa0eb933d675a358c52538c192f9"},{url:"assets/js/page-stylus 配置.0bca9521.js",revision:"04f065245d93c64e5ea3fc278e3d4cdc"},{url:"assets/js/page-Superscript and Subscript.5ee432e4.js",revision:"89af4dcc5f8488a8ad072cccdb63a9a1"},{url:"assets/js/page-Tex Support.b9de4c0a.js",revision:"47d0674f719a9eb470994d361b03ccd4"},{url:"assets/js/page-Tex 语法支持.a2ca6546.js",revision:"4355919a90358282bd1cd74524a67be8"},{url:"assets/js/page-Theme color and Night mode.eb33c8e7.js",revision:"851231ea34727523e915879e44333e38"},{url:"assets/js/page-Theme Config.e64a2f41.js",revision:"9ec873f63e228d414663157d9492b939"},{url:"assets/js/page-TS 支持.593ce085.js",revision:"6e12b822f3249fa4ecbe34ab67e73f55"},{url:"assets/js/page-Vuepress Cases.763761c6.js",revision:"f43c97124e97b99af390631b378f6cd5"},{url:"assets/js/page-Vuepress commands.65f695cd.js",revision:"17543956e213706998d4cc0803e846a2"},{url:"assets/js/page-Vuepress 案例.ed944331.js",revision:"61ede405472aee1912d448be930c4af0"},{url:"assets/js/page-vuepress-plugin-container.22d13bce.js",revision:"3fe80163829a5e9008083afe6f3883d8"},{url:"assets/js/page-vuepress-plugin-copyright.05d4cfc9.js",revision:"01bb67820a4ee05946bc39a0ec4e10c9"},{url:"assets/js/page-vuepress-plugin-name-chunks.6eead8a3.js",revision:"f9467a79576b7ad442e5c63089fa95b7"},{url:"assets/js/page-Vuepress.136438c1.js",revision:"adf07b9ff8d14c71a184e62182ee28dd"},{url:"assets/js/page-Writing a theme.eeba1b88.js",revision:"c106ec82e65996d62f0f77b0fe952d30"},{url:"assets/js/page-上下角标.d82e5612.js",revision:"d2702aa1bb1a6fdba39decfa4c7a6a00"},{url:"assets/js/page-主页.2a597a03.js",revision:"643eb7bd76f0f6cdb97b605ef1517732"},{url:"assets/js/page-主题色与夜间模式.ec93d97f.js",revision:"a4405890e714089f76ec549177057386"},{url:"assets/js/page-主题配置.de1eb8f8.js",revision:"ef1e061e574f0ef9a06aa7660d593133"},{url:"assets/js/page-人物.0f438250.js",revision:"74afacc697b23b9ab1539e26936aa181"},{url:"assets/js/page-介绍.e45f0e11.js",revision:"e11635977adee68ea24f94e5f6ec9714"},{url:"assets/js/page-侧边栏.7f9e3644.js",revision:"76d9ddc4541618fc6de99e9b6dec56e3"},{url:"assets/js/page-全屏按钮.ec3dbdf3.js",revision:"c14bdcb9b455a8f0a73bfb51541f418a"},{url:"assets/js/page-加密功能.4a5489fc.js",revision:"a87dcfcca13d9de0770f9c8d899cb7e9"},{url:"assets/js/page-图标支持.2ab14089.js",revision:"5bbaacf2111878620d70b2ead8d75e22"},{url:"assets/js/page-地点.1363257e.js",revision:"1f7eb51b4d19ccf333e0651919255e7a"},{url:"assets/js/page-基础知识.bd57c679.js",revision:"b87bb62c11bae6ca26fc197f7644e60f"},{url:"assets/js/page-对象.67018ebd.js",revision:"e5f48ba26e30fd6f417d225b804542dd"},{url:"assets/js/page-导航栏.8c31c38b.js",revision:"9bd4fcc7227e31f627d0682e8ebefbdc"},{url:"assets/js/page-布局.fcc72bba.js",revision:"a2c8be5138b809ee27d4745baa20298b"},{url:"assets/js/page-常见问题.37a3127e.js",revision:"7077d45bf2e3801aa68f7ffcbf82f202"},{url:"assets/js/page-开发主题.51608933.js",revision:"f4cf6660b99289b140d705361a8e8686"},{url:"assets/js/page-插件.7906f1dc.js",revision:"45ebd1490ed29a7f190ca91992eaa015"},{url:"assets/js/page-插件说明.0c122366.js",revision:"38197c816f2b54719fd2dbe5bf6fd904"},{url:"assets/js/page-文件结构介绍.3c7daa76.js",revision:"4adac4531adf378540e00d42edbfc2e5"},{url:"assets/js/page-新增特性.1a96f191.js",revision:"d4f2bd97baf040e31fb0e2750812182e"},{url:"assets/js/page-新增组件.e214d35a.js",revision:"2d56701d345cfd25b502b1ca29e8d6ff"},{url:"assets/js/page-流程图支持.caf84061.js",revision:"4d313679c4d0abceaa81e80724e8c7ee"},{url:"assets/js/page-符号.8f3dae41.js",revision:"15a6ad2023fd21f001c82aac9dec3b54"},{url:"assets/js/page-脚注.99f89234.js",revision:"924527fb7d8fb0da9f174b329870032a"},{url:"assets/js/page-自定义对齐.1fac0344.js",revision:"22fa256aee5d70c7debbd9dbb218d05a"},{url:"assets/js/page-自然.4cb8bdf5.js",revision:"ad4fc581670120e2a05109e35869e2ce"},{url:"assets/js/page-评论功能.525df76e.js",revision:"488d3b94082e4832c71e9712f6d803a1"},{url:"assets/js/page-路径导航.5250a666.js",revision:"ccd9811f295236a328b00d2c73397570"},{url:"assets/js/page-页面.ee03cc97.js",revision:"b6ee4a585bc819bcf5e44555e36c4faf"},{url:"assets/js/page-页面配置.a93d26dc.js",revision:"ee1f1dc9e02577ab374762a28a4ccc42"},{url:"assets/js/page-项目指令.4f6c9317.js",revision:"8c3357fbf55908e8b6732d6ca30fbb82"},{url:"assets/js/page-默认主题配置.8a85e1c9.js",revision:"9eea44788f06cdaf340e95579e977167"},{url:"assets/js/vendors~docsearch.06cd464e.js",revision:"8fed06eb365cefc177c9728a520a9cb0"},{url:"assets/js/vendors~layout-BlogEntry~layout-Layout.e5c10ea7.js",revision:"fa220ebbffad9274901a8d8c2e4292e8"},{url:"basic/index.html",revision:"b0f3129340cf78db216af3294af6f3ca"},{url:"basic/markdown/demo.html",revision:"5a2ed993eda3f1fe9000b665f8dbae3c"},{url:"basic/markdown/emoji/index.html",revision:"4f47726614b6768183529e9db85ddaba"},{url:"basic/markdown/emoji/locate.html",revision:"4fe7239def62dff8f15ef57f311590f6"},{url:"basic/markdown/emoji/nature.html",revision:"beb1fb8b54d9d61d65dc0c901bb1a23b"},{url:"basic/markdown/emoji/object.html",revision:"f5ac9a01f838ba069ce8dd17bd11a240"},{url:"basic/markdown/emoji/people.html",revision:"61d7c346302950316bc9ef46a4fb8bd8"},{url:"basic/markdown/emoji/symbol.html",revision:"baed8093d465f4db10289905b33c49c9"},{url:"basic/markdown/index.html",revision:"c93e4c858a922cd330f439216808278a"},{url:"basic/vuepress/case.html",revision:"508c18d25ece722dadb92fad53092473"},{url:"basic/vuepress/command.html",revision:"c86573d37c1003613e7b831abb72fb64"},{url:"basic/vuepress/file.html",revision:"d2e3d2821c908f4334ebe69ab5903c66"},{url:"basic/vuepress/index.html",revision:"63f7923c199dbad69fbcc033c8b35003"},{url:"basic/vuepress/plugin.html",revision:"051b3be371dca27df962c57d4dc30b46"},{url:"basic/vuepress/theme/config.html",revision:"939f7fa1d2e5f6c2d15acdb277e9ae30"},{url:"basic/vuepress/theme/dev.html",revision:"a8cf51974e8adfe3705a372b896b4964"},{url:"basic/vuepress/theme/index.html",revision:"6d2a0e922d46fcbd4ee75a906605ad71"},{url:"category/api/index.html",revision:"7c80bd62fd3fe20ddbf8b09bc3268464"},{url:"category/function/index.html",revision:"e728150019e035268d47992b1b1bdfbd"},{url:"category/index.html",revision:"e4c0f02891160feaa8f933f8b9a8b6be"},{url:"category/instruction/index.html",revision:"b9bc9bc29deedd4be627c6de845bc277"},{url:"category/layout/index.html",revision:"9192da5118a285617fde69569045a89b"},{url:"category/markdown/index.html",revision:"faa58b2dc67c8e3fea471831cf90b95f"},{url:"category/style/index.html",revision:"081953cad5624a4ebbf0ab925bb7fb67"},{url:"en/api/index.html",revision:"1ea7d5f9763238b22df3530d3808a833"},{url:"en/api/page.html",revision:"84d38b0a10e95478be1765fc7a3bfa43"},{url:"en/api/plugin/container.html",revision:"36f0a71418b851018fb7362e62ce3cae"},{url:"en/api/plugin/copyright.html",revision:"3902f2809503a458d2ee4dca141b9a40"},{url:"en/api/plugin/index.html",revision:"eb7a8235408f0cfed5672ad73a823ac3"},{url:"en/api/plugin/medium-zoom.html",revision:"2b9be4270c0e6335c183297776e79f2b"},{url:"en/api/plugin/name-chunks..html",revision:"efd0289e19595024825ebeb770fc0c60"},{url:"en/api/plugin/pwa.html",revision:"2af3c8d8663aa071727aa6f361f666e5"},{url:"en/api/stylus.html",revision:"bb5d5312ff99fd3e8699866a39cc1eb3"},{url:"en/api/themeConfig.html",revision:"c625dfee769e9fe0116098b5aec27b6e"},{url:"en/basic/index.html",revision:"db1dc855f7b7a5d8a217cdf36e723757"},{url:"en/basic/markdown/demo.html",revision:"5bd5d3680da8c5a176bc108c08146891"},{url:"en/basic/markdown/emoji.html",revision:"bacf2146a0b9541956c62b98d92bbbbe"},{url:"en/basic/markdown/index.html",revision:"9afb61a7da50a572b719339a7e694849"},{url:"en/basic/vuepress/case.html",revision:"aaf4f1bc91f175900c8e947555e3657d"},{url:"en/basic/vuepress/command.html",revision:"3899668e195fa7466df670e1a355953f"},{url:"en/basic/vuepress/file.html",revision:"52ad3db70f7ecddfa9dc4f03ac876dbd"},{url:"en/basic/vuepress/index.html",revision:"065fea5fb8c6f9e25b005c97b82d2e7e"},{url:"en/basic/vuepress/plugin.html",revision:"202461f5a975de492682996ecd72e472"},{url:"en/basic/vuepress/theme/config.html",revision:"bc422a707555a929f500460313ad8287"},{url:"en/basic/vuepress/theme/dev.html",revision:"7cd427683c2f06cf169d71f7d8e0af4d"},{url:"en/basic/vuepress/theme/index.html",revision:"ad5f385d3ea828188e7af02fdd2934cd"},{url:"en/guide/breadcrumb.html",revision:"38a2c28528f8ef3fca116fb3d8e80337"},{url:"en/guide/comment.html",revision:"9da1c82129375c7dd57498816b6cf1ee"},{url:"en/guide/component.html",revision:"c492f8e62bd2bb7c0bde4a57babd6ece"},{url:"en/guide/fullscreen.html",revision:"67cc6829f032797ad18efebf620def7c"},{url:"en/guide/home.html",revision:"00cc2811141512bf602926d0304a48c9"},{url:"en/guide/index.html",revision:"78551ee3364abb6233004d0be927dbb3"},{url:"en/guide/install.html",revision:"40ee60d2c9c4b7be00f1c8acc6c6e104"},{url:"en/guide/markdown/flowchart.html",revision:"0bf58fb6447d10256bf2172bc0194846"},{url:"en/guide/markdown/footnote.html",revision:"4ec1abd7021cf36acc53d67be4234f6f"},{url:"en/guide/markdown/index.html",revision:"3bbfbc875a4cb7cd6f01d4c12f33f5ba"},{url:"en/guide/markdown/sup-sub.html",revision:"4d2b3e623828f5aae98cdc8e1530ba07"},{url:"en/guide/markdown/tex.html",revision:"9cff4293af7fc86306a5086cf0c09189"},{url:"en/guide/navbar.html",revision:"b942ae7c74ebb493f0581311a1929b32"},{url:"en/guide/page.html",revision:"5d9b308ea5f1e28355768e461caa42ea"},{url:"en/guide/sidebar.html",revision:"f638e064a6eb6b42211f47bcc17b00f0"},{url:"en/guide/themecolor.html",revision:"71ac3d6bc35e3914cc47759fdea63e29"},{url:"en/index.html",revision:"53c4ecde68528c7faa17404940e40776"},{url:"FAQ/index.html",revision:"3b53d911959fcceef35a5f157a524ca4"},{url:"guide/feature/comment.html",revision:"3df694fa7bd9d10d58d7f6407bdb7fa9"},{url:"guide/feature/component.html",revision:"a7b39af5b7bd3723a0762a845f305c15"},{url:"guide/feature/encrypt.html",revision:"e43a35dd748bb72644f59fb2b3090301"},{url:"guide/feature/fullscreen.html",revision:"0c9d39738441950e852b93ca55310718"},{url:"guide/feature/icon.html",revision:"2c7ca106cc252a9b4c380b97a6a4ae75"},{url:"guide/feature/index.html",revision:"22971333ebd9ed02b2259af2a4214fc4"},{url:"guide/feature/themecolor.html",revision:"efb4a262fe7eb48ded3bee1dcecf8c7b"},{url:"guide/feature/typescript.html",revision:"91396e7926f8649438b4809440442f4f"},{url:"guide/index.html",revision:"a5641e32d047e219371df04de25dd106"},{url:"guide/install.html",revision:"54e5f3d3e4e957a0648d876772585a92"},{url:"guide/layout/breadcrumb.html",revision:"6243e1c982dc0bb3facd25a52580a27d"},{url:"guide/layout/home.html",revision:"d18b8e0586ac44c3723360ee93227003"},{url:"guide/layout/index.html",revision:"df974723899ed1a790946ddf0f5a55e2"},{url:"guide/layout/navbar.html",revision:"b05b7b7e77721ca9ec4023e73992605d"},{url:"guide/layout/page.html",revision:"7d0656945ae110bce6605d2a17a567d8"},{url:"guide/layout/sidebar.html",revision:"3c3b5364262b1094bd1a55ea41f878dc"},{url:"guide/markdown/align.html",revision:"ac98c730f5c6e36aacaa75caf173760d"},{url:"guide/markdown/flowchart.html",revision:"41afd41c35384ff8849e138ae7747711"},{url:"guide/markdown/footnote.html",revision:"08a0ebd0fb1bb64936af8c2222aa3507"},{url:"guide/markdown/index.html",revision:"edd065fe670f65407d80cad439d07250"},{url:"guide/markdown/sup-sub.html",revision:"e7e671d70f1d14e84a3fab44840722e1"},{url:"guide/markdown/tex.html",revision:"3678fb6339a8bc07689c413a78cac303"},{url:"img/icon/appleIcon152.png",revision:"9172ed03ed0e66ca085720b7c02fcccc"},{url:"img/icon/chrome192.png",revision:"581c452b65c71f36375193f75bbb7b8c"},{url:"img/icon/chrome512.png",revision:"78af354a94a00054caa93bdba2560bce"},{url:"img/icon/msIcon144.png",revision:"2200b78e72efdcd597b384cf62947c1a"},{url:"index.html",revision:"88224dfbd4945830cec0b12389fdfc1a"},{url:"logo.png",revision:"13417285202b91bf6571ccef63c17039"},{url:"logo.svg",revision:"2ff99a4865a6eceeaf3d949e479c7990"},{url:"tag/api/index.html",revision:"16246ec8677b6a886c592132f8d2d1d6"},{url:"tag/comment/index.html",revision:"735721ecb5899550acc247c57e295018"},{url:"tag/component/index.html",revision:"984926055a644904718c7099cf592d7b"},{url:"tag/components/index.html",revision:"c0d521da2535dd3c2e5ee6d1f12d83f9"},{url:"tag/emoji/index.html",revision:"ebd25c543ec780e5864860d3129d9134"},{url:"tag/encrypt/index.html",revision:"5115afdb8de3682203d72c52d032c571"},{url:"tag/enhance/index.html",revision:"0a831287efb1ea33e0df098afb92d28b"},{url:"tag/frontmatter/index.html",revision:"4f843c5bf46786b3a059d8dbf172dd9a"},{url:"tag/fullscreen/index.html",revision:"d81864a3fbd82c45ae3c671a7606cc2a"},{url:"tag/function/index.html",revision:"c568987fe2b8ad25053cad93b34ef46a"},{url:"tag/home/index.html",revision:"71617286596020a1155bfff5b4824505"},{url:"tag/icon/index.html",revision:"8548fe2815313644b76fbd0f397f66e6"},{url:"tag/index.html",revision:"cc9bc54b4bd22de26b506fe77086835e"},{url:"tag/intro/index.html",revision:"92dafd2842875a04ca83487e5451f464"},{url:"tag/layout/index.html",revision:"ce566c54832215898c3e7142ba3eb8fb"},{url:"tag/markdown/index.html",revision:"1b9f40aa24bdfbcf0ef5365290704584"},{url:"tag/plugin/index.html",revision:"ff9a1b70decabec2f0aa7ef6a25dcadf"},{url:"tag/style/index.html",revision:"9704007e4cd0cf6c46c052831f7b8cb5"},{url:"tag/themeConfig/index.html",revision:"ad9333b53942e5b8c92def273ae819ab"},{url:"tag/typescript/index.html",revision:"cc107cd1fc9fb65d65a9f9c41aab1ccf"},{url:"tag/vuepress/index.html",revision:"187296f835364d3782a9efc3394dede7"}],{})}));
//# sourceMappingURL=service-worker.js.map
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
