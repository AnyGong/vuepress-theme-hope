(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{144:function(t,e,i){},147:function(t,e,i){},148:function(t,e,i){},151:function(t,e,i){},154:function(t,e,i){},155:function(t,e,i){},156:function(t,e,i){},159:function(t,e,i){"use strict";var a=i(141),n={props:{item:{type:Object,required:!0}},computed:{link(){return Object(a.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:a.f,isMailto:a.g,isTel:a.h,focusoutAction(){this.$emit("focusout")}}},s=i(1),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isExternal(t.link)?i("a",{staticClass:"nav-link external",attrs:{href:t.link,rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer",target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank"},on:{focusout:t.focusoutAction}},[t.item.icon?i("i",{class:"iconfont "+t.$themeConfig.iconPrefix+t.item.icon}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n  "),i("OutboundLink")],1):i("router-link",{staticClass:"nav-link",attrs:{exact:t.exact,to:t.link},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t.item.icon?i("i",{class:"iconfont "+t.$themeConfig.iconPrefix+t.item.icon}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n")])}),[],!1,null,null,null);e.a=o.exports},160:function(t,e,i){"use strict";i.d(e,"b",(function(){return h})),i.d(e,"a",(function(){return p}));const a=/#.*$/,n=/\.(md|html)$/,s=/\/$/,o=/^[a-z]+:/i;function r(t){return decodeURI(t).replace(a,"").replace(n,"")}function l(t){return o.test(t)}function c(t){if(l(t))return t;const e=t.match(a),i=e?e[0]:"",n=r(t);return s.test(n)?t:n+".html"+i}function u(t,e,i){if(l(e))return{type:"external",path:e};i&&(e=function(t,e,i){const a=t.charAt(0);if("/"===a)return t;if("?"===a||"#"===a)return e+t;const n=e.split("/");i&&n[n.length-1]||n.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?n.pop():"."!==e&&n.push(e)}""!==n[0]&&n.unshift("");return n.join("/")}(e,i));const a=r(e);for(let e=0;e<t.length;e++)if(r(t[e].regularPath)===a)return Object.assign({},t[e],{type:"page",path:c(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function h(t,e,i,a){const{pages:n,themeConfig:s}=i,o=a&&s.locales&&s.locales[a]||s;if("auto"===(t.frontmatter.sidebar||o.sidebar||s.sidebar))return function(t){const e=function(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const r=o.sidebar||s.sidebar;if(r){const{base:t,config:i}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const a in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(a)))return{base:a,config:e[a]};var i;return{}}(e,r);return i?i.map(e=>function t(e,i,a,n=1){if("string"==typeof e)return u(i,e,a);if(Array.isArray(e))return Object.assign(u(i,e[0],a),{title:e[1]});{n>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(u(i,e.path,a),{title:e.title}):Object.assign({},e,{type:"group",children:s.map(e=>t(e,i,a,n+1)),collapsable:!1!==e.collapsable})}}(e,n,t)):[]}return[]}function p(t,e=""){const i=e+(t.prefix||""),a=Object.assign({},t);return i&&(void 0!==a.link&&(a.link=i+a.link),delete a.prefix),a.items&&a.items.length?Object.assign(a,{type:"links",items:a.items.map(t=>p(t,i))}):a.type="link",a}},163:function(t,e,i){"use strict";var a=i(165),n=i(159),s=i(170),o=i.n(s),r={components:{NavLink:n.a,DropdownTransition:a.a},props:{item:{type:Object,required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{toggle(){this.open=!this.open},isLastItemOfArray:(t,e)=>o()(e)===t}},l=(i(171),i(1)),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[i("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[i("span",{staticClass:"title"},[t.item.icon?i("i",{class:"iconfont "+t.$themeConfig.iconPrefix+t.item.icon}):t._e(),t._v("\n      "+t._s(t.item.text)+"\n    ")]),t._v(" "),i("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),i("DropdownTransition",[i("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,a){return i("li",{key:e.link||a,staticClass:"dropdown-item"},["links"===e.type?i("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?i("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(a){return i("li",{key:a.link,staticClass:"dropdown-subitem"},[i("NavLink",{attrs:{item:a},on:{focusout:function(i){t.isLastItemOfArray(a,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0):i("NavLink",{attrs:{item:e},on:{focusout:function(i){t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,u=i(160),h={components:{NavLink:n.a,DropdownLink:c},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,{routes:i}=this.$router.options,a=this.$themeConfig.locales||{},n={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(n=>{const s=t[n],o=a[n]&&a[n].label||s.lang;let r;return s.lang===this.$lang?r=e:(r=e.replace(this.$localeConfig.path,n),i.some(t=>t.path===r)||(r=n)),{text:o,link:r}})};return[...this.userNav,n]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object(u.a)(t))},repoLink(){const{repo:t}=this.$themeConfig;return t?/^https?:/u.test(t)?t:`https://github.com/${t}`:""},repoLabel(){if(!this.repoLink)return"";if(this.$themeConfig.repoLabel)return this.$themeConfig.repoLabel;const[t]=this.repoLink.match(/^https?:\/\/[^/]+/u),e=["GitHub","GitLab","Bitbucket"];for(let i=0;i<e.length;i++){const a=e[i];if(new RegExp(a,"iu").test(t))return a}return"Source"}}},p=(i(172),Object(l.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.userLinks.length||t.repoLink?i("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return i("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?i("DropdownLink",{attrs:{item:t}}):i("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink&&!1!==t.$themeConfig.repoDisplay?i("a",{staticClass:"repo-link",attrs:{rel:"noopener noreferrer",href:t.repoLink,target:"_blank"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),i("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=p.exports},166:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=(t,e,i)=>{if(t)if(t&&"/"===t[0])e.push(t);else if(-1!==t.indexOf("http://")||-1!==t.indexOf("https://"))window.open(t);else{const a=i.path.slice(0,i.path.lastIndexOf("/"));e.push(`${a}/${t}`)}}},167:function(t,e,i){"use strict";var a=i(144);i.n(a).a},171:function(t,e,i){"use strict";var a=i(147);i.n(a).a},172:function(t,e,i){"use strict";var a=i(148);i.n(a).a},175:function(t,e,i){"use strict";var a=i(151);i.n(a).a},186:function(t,e,i){"use strict";var a=i(154);i.n(a).a},187:function(t,e,i){"use strict";var a=i(155);i.n(a).a},188:function(t,e,i){"use strict";var a=i(156);i.n(a).a},198:function(t,e,i){"use strict";var a=i(165),n=i(141),s={name:"SidebarGroup",components:{DropdownTransition:a.a},props:{item:{type:Object,default:()=>({})},open:Boolean,collapsable:Boolean,depth:Number},computed:{icon(){const t=this.$themeConfig,{icon:e}=this.item;return!1!==t.sidebarIcon&&e?`${t.iconPrefix}${e}`:""}},beforeCreate(){this.$options.components.SidebarLinks=i(164).default},methods:{isActive:n.e}},o=(i(187),i(1)),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?i("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[t.item.icon?i("i",{class:"iconfont "+t.$themeConfig.iconPrefix+t.item.icon}):t._e(),t._v(" "),i("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?i("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):i("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[t.item.icon?i("i",{class:"iconfont "+t.$themeConfig.iconPrefix+t.item.icon}):t._e(),t._v(" "),i("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?i("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),i("DropdownTransition",[t.open||!t.collapsable?i("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1,items:t.item.children}}):t._e()],1)],1)}),[],!1,null,null,null);e.a=r.exports},200:function(t,e,i){"use strict";var a=i(141);const n=(t,e)=>e[1]?t("i",{class:["iconfont",`${e[0]}${e[1]}`],style:"margin-right:0.2em;"}):null,s=(t,e,i,a,s)=>t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}},[n(t,a),i]),o=(t,e,i,n,r,l=1)=>!e||l>r?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(a.e)(n,`${i}#${e.slug}`);return t("li",{class:"sidebar-sub-header"},[s(t,`${i}#${e.slug}`,e.title,[],c),o(t,e.children,i,n,r,l+1)])}));var r={name:"SidebarLink",functional:!0,props:{item:{type:Object,default:()=>({})},sidebarDepth:Number},render(t,{parent:{$page:e,$route:i,$themeConfig:n,$themeLocaleConfig:r},props:{item:l,sidebarDepth:c}}){const u=Object(a.e)(i,l.path),h="auto"===l.type?u||l.children.some(t=>Object(a.e)(i,`${l.basePath}#${t.slug}`)):u,p="external"===l.type?((t,e,i)=>t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[i,t("OutboundLink")]))(t,l.path,l.title||l.path):s(t,l.path,l.title||l.path,!1===n.sidebarIcon?[]:[n.iconPrefix,l.frontmatter.icon],h),d=[e.frontmatter.sidebarDepth,c,r.sidebarDepth,n.sidebarDepth,1].find(t=>void 0!==t),m=r.displayAllHeaders||n.displayAllHeaders;if("auto"===l.type)return[p,o(t,l.children,l.basePath,i,d)];if((h||m)&&l.headers&&!a.d.test(l.path)){const e=Object(a.c)(l.headers);return[p,o(t,e,l.path,i,d)]}return p}},l=(i(188),i(1)),c=Object(l.a)(r,void 0,void 0,!1,null,null,null);e.a=c.exports},205:function(t,e,i){"use strict";i.r(e);var a=i(159),n=i(166),s=i.n(n),o={components:{NavLink:a.a},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}},methods:{navigate(t){s()(t,this.$router,this.$route)}}},r=(i(167),i(1)),l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[i("header",{staticClass:"hero"},[t.data.heroImage?i("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"HomeLogo"}}):t._e(),t._v(" "),null!==t.data.heroText?i("h1",{attrs:{id:"main-title"},domProps:{textContent:t._s(t.data.heroText||t.$title||"Hello")}}):t._e(),t._v(" "),i("p",{staticClass:"description",domProps:{textContent:t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")}}),t._v(" "),t.data.actionText&&t.data.actionLink?i("p",{staticClass:"action"},[i("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?i("div",{staticClass:"features"},t._l(t.data.features,(function(e,a){return i("div",{key:a,staticClass:"feature",class:{link:e.link}},[i("h2",[e.link?i("span",{on:{click:function(i){return t.navigate(e.link)}}},[t._v(t._s(e.title))]):i("span",[t._v(t._s(e.title))])]),t._v(" "),i("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),i("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?i("div",{staticClass:"footer",domProps:{textContent:t._s(t.data.footer)}}):t._e()],1)}),[],!1,null,null,null).exports,c=i(194),u=i(163),h=i(195),p=i(199);const d=(t,e)=>t.ownerDocument.defaultView.getComputedStyle(t,null)[e];var m={components:{SidebarButton:p.a,NavLinks:u.a,SearchBox:h.a,AlgoliaSearchBox:c.a},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(d(this.$el,"paddingLeft"))+parseInt(d(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},f=(i(175),Object(r.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"navbar"},[i("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),i("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$themeConfig.logo?i("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?i("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),i("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[i("ThemeColor"),t._v(" "),i("ScreenFull"),t._v(" "),t.isAlgoliaSearch?i("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$themeConfig.search&&!1!==t.$page.frontmatter.search?i("SearchBox"):t._e(),t._v(" "),i("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),g=i(196),b=i(197),v={components:{PageEdit:g.a,PageNav:b.a},props:{sidebarItems:{type:Array,default:()=>[]}}},_=(i(186),Object(r.a)(v,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"page"},[i("BreadCrumb"),t._v(" "),t._t("top"),t._v(" "),i("PageInfo"),t._v(" "),i("Content",{staticClass:"theme-default-content"}),t._v(" "),i("PageEdit"),t._v(" "),i("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),i("Comment"),t._v(" "),i("PageFooter"),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),k=i(193),$=i(160),C={components:{Home:l,Page:_,Sidebar:k.a,Navbar:f},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object($.b)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,i=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(i)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},x=Object(r.a)(C,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchend:t.onTouchEnd,touchstart:t.onTouchStart}},[t.shouldShowNavbar?i("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),i("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),i("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?i("Home"):i("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,null,null);e.default=x.exports}}]);