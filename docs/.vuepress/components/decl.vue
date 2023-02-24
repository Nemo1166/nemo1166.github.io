<script setup lang='ts'>
const props = defineProps({
    aigc: {
        type: String,
        default: false
    },
    incomp: {
        type: String,
        default: null
    },
    trans: {
        type: String,
        default: null
    },
    reprint: {
        type: Boolean,
        default: false
    },
    from: {
        type: String,
        default: '未知来源'
    },
    author: {
        type: String,
        default: '佚名'
    },
    src: {
        type: String,
        required: true
    },
    license: {
        type: String,
        default: null
    },
});
</script>

<template>
    <div class="hint-container info">
        <p class="hint-container-title">创作声明</p>
        <ul>
            <li v-if="props.aigc">
                <p><strong>人工智能生成</strong></p>
                <p>本文部分内容（图像/文本/代码）由人工智能 (AI) 技术生成。AI 仅用于辅助表达。</p>
            </li>
            <li v-if="props.reprint">
                <p><strong>转载/摘录内容</strong></p>
                <p>本文部分或全部内容来自 {{ from }}<span v-if="props.license">，以 {{ license }} 协议发表</span>。原文作者为 {{ author }}，内容可能有删减/改动。</p>
            </li>
            <li v-if="props.incomp">
                <p><strong>未完成</strong></p>
                <p>本页正在施工，<del>请坐和放宽</del>。<span v-if="props.trans">但用另一种语言写的文章已经可用。如果需要，您可以切换语言。</span></p>
            </li>
        </ul>
    </div>
</template>

<style scoped lang='scss'>
li {
    p {
        line-height: 1 !important;
        margin: 0.5rem 0;
    }
}
</style>
