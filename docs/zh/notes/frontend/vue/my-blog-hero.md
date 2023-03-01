---
icon: note
date: 2023-03-02
category:
    - 前端技术
tag:
    - vue
    - vuepress
---

# Hope 主题的 blog-hero 模块的简单重载

## 需求

- 按不同分辨率切换头图
- 左下角添加背景图画师信息

因此简单地在原组件基础上进行了一些小修改。

## 更新信息

更新`<style>`标签内信息即可。如需添加响应式内容，在`@media`内添加选择器和样式规则。

::: code-tabs#vue

@tab template

```vue
<template>
    <div class="blog-hero">
        <div class="mask"></div>
        <img class="hero-image hero-image-pc" src="/aneot.svg" alt="hero image">
        <img class="hero-image hero-image-mobile" src="/aneot-short.svg" alt="hero image">
    </div>
</template>
```

@tab style

```vue {12,18,21,37}
<style scoped lang="scss">
.blog-hero {
    color-scheme: light;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 450px;
    width: 100%;
    margin-bottom: 1rem;
    background-image: url("/hero.webp"); //背景图，存放在docs/.vuepress/public
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    &::after {
        content: "© 红海岸 2023"; // 画师名
        font-family: 'crimson', 'LXGW WenKai Screen R', serif;
        color: aliceblue;
        text-shadow: #68ba62 0 0 2px; // 主题色
        justify-self: flex-end;
        position: relative;
        bottom: 1.5vh;
    }
}
.hero-image {
    position: relative;
    z-index: 2;
    display: block;
    max-width: 100%;
    max-height: 15rem;
    margin: 1.5rem auto;
    transition: transform 0.25s ease-in-out 0.04s, opacity 0.25s ease-in-out 0.04s;
    transform: translateY(0px);
    opacity: 1;
    filter: drop-shadow(#68ba62 0 0 6px); // 主题色
}

.hero-image-mobile {
    max-width: 75%;
}

/* mobile */
@media all and (max-width: 768px) {
    .hero-image-pc {
        display: none;
    }
    .blog-hero {
        &::after {
            left: 5vw;
        }
    }
}

/* PC */
@media all and (min-width: 769px) {
    .hero-image-mobile {
        display: none;
    }
    .blog-hero {
        &::after {
            left: 1.5vw;
        }
    }
}
</style>
```

@tab script

```vue
<script setup lang="ts">
// 以后可能会搞搞全页布局？
</script>
```

:::
