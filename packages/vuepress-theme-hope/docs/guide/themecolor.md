---
icon: skinfill
---

# 主题色与夜间模式

## 自定义主题色

这是一个开箱即用的功能，除了你的主题色之外，还提供“蓝、红、绿、橙四种主题”。

### 禁用功能

你可以将主题字段的 `themePicker` 设置为 false 来禁用它。

### 自定义颜色

你需要按照 `{ 颜色名1: 颜色值, 颜色名2: 颜色值, ... }` 的格式来配置 `themePicker`：

```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    themePicker: {
      red: '#f00',
      green: '0f0',
      blue: '00f'
    }
  }  
}
```

同时为了使 stylus 编译器正常工作，你还需要将颜色变量赋值给 `$themePicker` 写入 `.vuepress/styles/palette.styl` 中：

```stylus
// .vuepress/styles/palette.styl
$themePicker = {
  colorName1: red,
  colorName2: yellow,
  colorName3: blue
}
```

## 夜间模式

默认开启，可以将 `themeConfig.allowNightmode` 设置为 `false` 来禁用夜间模式。
