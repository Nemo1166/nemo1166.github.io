<script setup lang="ts">
import { onMounted } from 'vue';
import Typed from 'typed.js';

const daysAgo = (dateString: string) => {
    const today = new Date()
    const inputDate = new Date(dateString)
    const timeDiff = Math.abs(today.getTime() - inputDate.getTime())
    return Math.ceil(timeDiff / (1000 * 3600 * 24))
}

const feTime = daysAgo('2021/11/8')
const head = `<span style="color: cyan;">root@nemo</span>:<span style="color: #3b78ff;">~</span># cat myself.txt<br />`

onMounted(() => {
    new Typed('#typed', {
        strings: [
            `${head}练习时长 ${feTime} 天的个人练习生、准开发者、炼丹术士、调包侠。喜欢 python, js/ts 和瞎折腾。`,
        ],
        cursorChar: '_',
        typeSpeed: 40,
        backSpeed: 10,
        loop: false,
    })
})

</script>

<template>
    <div class="window">
        <div class="bar">
            <div class="btn"></div>
        </div>
        <div class="body">
            <span id="typed"></span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.window {
    align-self: center;

    /* mobile */
    @media all and (max-width: 768px) {
        width: 70vw;
        height: 40vh;
    }

    /* PC */
    @media all and (min-width: 769px) {
        width: 100%;
        height: 40vh;
    }
}

.bar {
    background: #191919;
    height: 36px;
    border-radius: 0.5vw 0.5vw 0 0;
    opacity: 0.9;
}

.btn,
.btn:before,
.btn:after {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    display: block;
}

.btn::before,
.btn::after {
    content: ' ';
    position: absolute;
}

.btn {
    background: #f6b73e;
    position: relative;
    margin-left: 38px;
    top: 12px;

    &:before {
        background: #f55551;
        margin-left: -20px;
    }

    &:after {
        background: #32c146;
        margin-left: 20px;
    }
}

.body {
    background: #484848;
    padding: 18px;
    height: calc(100% - 72px);
    border-radius: 0 0 0.5vw 0.5vw;
}

#typed {
    color: #fff;
    font-size: 14px;
}

:v-deep .atropos-inner {
    border-radius: 0.5vw 0.5vw;
}</style>