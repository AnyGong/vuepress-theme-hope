<!--
 * @Author: Mr.Hope
 * @Date: 2019-10-08 20:45:09
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2019-11-07 11:57:18
 * @Description: 主题颜色选择
-->
<template>
  <div class="theme-options">
    <ul class="color-theme-options" v-if="theme.colorList && theme.colorList.length !== 0">
      <li>
        <a @click.prevent="setTheme()" class="default-theme" href="#" />
      </li>
      <li :key="color" v-for="color in theme.colorList">
        <a
          :class="`${color}-theme`"
          :style="{background: theme.picker[color]}"
          @click.prevent="setTheme(color)"
          href="#"
        />
      </li>
    </ul>
    <div class="dark-theme-options toggle-option" v-if="theme.allowNightmode">
      <label for="dark-theme-toggle">{{text}}:&nbsp;</label>
      <input @change="toggleDarkTheme" id="dark-theme-toggle" type="checkbox" v-model="darkTheme" />
    </div>
  </div>
</template>

<script>
/* global THEME_COLOR_OPTIONS */

export default {
  name: 'ThemeOptions',

  data: () => ({
    options: THEME_COLOR_OPTIONS,
    theme: {},
    defaultPicker: {
      blue: '#2196f3',
      red: '#f26d6d',
      green: '#3eaf7c',
      orange: '#fb9b5f'
    },
    localeText: {
      'zh-CN': '开启夜间模式',
      'en-US': 'Nightmode Status'
    },
    darkTheme: 'false'
  }),

  computed: {
    text() {
      return this.localeText[this.$lang] || 'Nightmode Status';
    }
  },

  mounted() {
    this.theme = {
      colorList: Object.keys(this.options.picker) || ['blue', 'red', 'green', 'orange'],
      picker: this.options.picker || this.defaultPicker,
      allowNightmode: this.options.allowNightmode !== false
    };
    /** 所选主题 */
    const theme = localStorage.getItem('theme');
    /** 夜间模式 */
    const nightmode = localStorage.getItem('nightmode');
    /** 获得类列表 */
    const classes = document.body.classList;

    this.darkTheme = nightmode === 'true';
    if (nightmode === 'true') classes.add('theme-night');
    if (theme) this.setTheme(theme);
  },

  methods: {
    /** 切换夜间模式 */
    toggleDarkTheme() {
      const classes = document.body.classList;

      if (this.darkTheme) {
        const oldColor = [...classes];

        classes.value = '';
        classes.add('theme-night');
        oldColor.forEach(item => {
          classes.add(item);
        });
      } else classes.remove('theme-night');

      localStorage.setItem('nightmode', this.darkTheme);
    },

    /** 设置主题 */
    setTheme(theme, moveClass = true) {
      const classes = document.body.classList;
      const themes = this.theme.color.map(colorTheme => `theme-${colorTheme}`);

      if (!theme) {
        if (moveClass) localStorage.removeItem('theme');
        classes.remove(...themes);

        return;
      }

      classes.remove(...themes.filter(themeclass => themeclass !== `theme-${theme}`));

      if (moveClass) {
        classes.add(`theme-${theme}`);
        localStorage.setItem('theme', theme);
      } else {
        localStorage.removeItem('theme');
        classes.remove(`theme-${theme}`);
      }
    }
  }
};
</script>

<style lang="stylus">
.color-theme-options
  display flex
  justify-content space-around

  li
    width 33%
    text-align center

    a
      width 15px
      height 15px
      border-radius 2px

      &.default-theme
        background-color $accentColor

      &.blue-theme
        background-color $blueAccentColor

      &.red-theme
        background-color $redAccentColor

.toggle-option
  display flex
  justify-content space-between
  align-items center

  label
    padding-right 0.25em
</style>