<!--
 * @Author: Mr.Hope
 * @Date: 2019-10-09 23:40:24
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-11-06 14:52:14
 * @Description: Valine 评论插件
-->
<template>
  <div class="valine-wrapper" v-show="commentDisplay">
    <div id="valine" />
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  props: { valineConfig: Object },

  computed: {
    /** 是否启用 Valine */
    valineEnable() {
      const { valineConfig } = this;

      return valineConfig && valineConfig.appId && valineConfig.appKey;
    },
    // 是否显示评论
    commentDisplay() {
      if (!this.valineEnable) return false;
      const globalEnable = this.valineConfig.commet !== false;
      const pageConfig = this.$page.frontmatter.comment;

      return (globalEnable && pageConfig !== false) || (!globalEnable && pageConfig === true);
    },

    visitorDisplay() {
      if (!this.valineEnable) return false;
      const globalEnable = this.valineConfig.visitor !== false;
      const pageConfig = this.$page.frontmatter;

      return (globalEnable && pageConfig !== false) || (!globalEnable && pageConfig === true);
    }
  },

  methods: {
    /** 启用 Valine */
    valine(path) {
      const { valineConfig } = this;
      const valine = new (require('valine'))();

      valine.init({
        el: '#valine',
        appId: valineConfig.appId, // Your appId
        appKey: valineConfig.appKey, // Your appKey
        placeholder: valineConfig.placeholder || (this.$lang === 'zh-CN' ? '请留言' : 'Write a comment here'),
        meta: valineConfig.meta || ['nick', 'mail', 'link'],
        notify: valineConfig.notify !== false,
        verify: valineConfig.verify || false,
        avatar: valineConfig.avatar || 'retro',
        visitor: this.visitorDisplay,
        recordIP: valineConfig.recordIP || false,
        path: path || window.location.pathname,
        pageSize: valineConfig.pageSize || 10,
        lang: this.$lang === 'zh-CN' ? 'zh-cn' : 'en'
      });
    }
  },

  mounted() {
    if (this.valineEnable) {
      const AV = require('leancloud-storage');

      if (typeof window !== 'undefined') window.AV = AV;
    }

    this.valine(this.$route.path);
  },

  watch: {
    $route(to, from) {
      if (to.path !== from.path)
        // 切换页面时刷新评论
        Vue.nextTick(() => {
          this.valine(to.path);
        });
    }
  }
};
</script>

<style lang="stylus">
@require '~@vuepress/theme-default/styles/wrapper.styl'

.page
  .valine-wrapper
    @extend $wrapper

    #valine
      &:empty
        padding 0

      a
        color $accentColor

        &:before
          background $accentColor

        &:hover
          color $accentColor

      code, pre
        background-color #282c34

      .vwrap .vheader .vinput:focus
        // .vwrap .vheader .vinput:focus
        border-color $accentColor

      .vwrap .vedit .vctrl span:hover
        color $accentColor

      .vbtn
        background-color #fff

      .vbtn:active, .vbtn:hover
        color #fff
        background-color $accentColor

      .vlist .vcard .vhead .vnick
        color $accentColor

      .info
        display none
</style>