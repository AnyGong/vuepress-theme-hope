/*
 * @Author: Mr.Hope
 * @Date: 2019-07-05 00:14:26
 * @LastEditors  : Mr.Hope
 * @LastEditTime : 2020-01-07 22:57:02
 * @Description: Vuepress配置
 */

const resolve = require('vuepress-theme-hope/resolve');

module.exports = resolve({
  /** 网站标题 */
  title: '评论插件',

  /** 网站在该语言下的描述 */
  description: 'Vuepress 的 评论插件',

  /** 生成网站头部的标签 */
  head: [
    // 设置网站图标
    ['link', { rel: 'icon', href: '/favicon.ico' }],

    // 设置网站作者
    ['meta', { name: 'author', content: 'Mr.Hope' }],

    // 移动端App体验
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      }
    ],

    // pwa相关
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#46bd87' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    ['link', { rel: 'apple-touch-icon', href: '/img/icon/appleIcon152.png' }],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#46bd87'
      }
    ],
    [
      'meta',
      { name: 'msapplication-TileImage', content: '/img/icon/msIcon144.png' }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }]
  ],

  temp: './node_modules/.temp/comment',

  /** 构建文件输出目录 */
  dest: './dist',

  /** 多语言配置选项
   *
   * 键名是该语言所属的子路径
   * 作为特例，默认语言可以使用 '/' 作为其路径。
   */
  locales: {
    /** 英文设置 */
    '/en/': {
      /** 网站在该语言下的标题 */
      title: 'Comment Plugin',

      /** 网站在该语言下的描述 */
      description: 'Comment Plugin for Vuepress'
    }
  },
  /** 主题配置 */
  themeConfig: require('./themeConfig')
});
