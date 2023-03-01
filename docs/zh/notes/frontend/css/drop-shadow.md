---
icon: note
date: 2023-03-02
category:
    - 前端技术
tag:
    - css
---

# 用 drop-shadow() 为元素加投影

`drop-shadow()`[^1] CSS 函数将投影效果应用于输入图像。一般情况下搭配 `filter`[^2] 使用。

<!-- more -->

## 用法

```css
drop-shadow(offset-x offset-y blur-radius spread-radius color)
```

- offset-x: 水平距离，其中负值将阴影放置到元素的左侧，必要。
- offset-y: 垂直距离，其中负值将阴影置于元素之上，必要。
- blur-radius: 阴影的模糊半径，默认 0。
- spread-radius: 阴影的扩展半径。
- color: 阴影的颜色。

## 例子

一般搭配 `filter` 使用。

```css
.item {
    filter: drop-shadow(0 0 1px red);
}
```

<span style="filter: drop-shadow(0 0 1px red);">示例文字。</span>

## 对比 `text-shadow` 和 `box-shadow`

对于纯文本内容，`text-shadow` 和 `drop-shadow` 几乎没有区别，参数也可以共用。

<span style="text-shadow: 0 0 1px red;">示例文字。</span>

而对于图像或其他含透明通道的元素，`drop-shadow` 只会在不透明的部分绘制投影，`box-shadow` 投影整个元素。

另一方面，`box-shadow` 可以任意叠加，而 `drop-shadow` 不能叠加。

[^1]: [drop-shadow | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter-function/drop-shadow)
[^2]: [filter | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)
