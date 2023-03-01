---
icon: note
date: 2023-03-02
category:
    - 前端技术
tag:
    - css
    - scss
---

# 按浏览器宽度应用不同样式

以下是一个例子。

```css
@media all and (max-width: 768px) {
    // styles for mobile devices here
}
@media all and (min-width: 769px) {
    // styles for desktop devices here
}
```
