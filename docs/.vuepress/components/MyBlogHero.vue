<script setup lang="ts">
import terminalbox from './terminalbox.vue';

const motd = `<br />　／l、<br />
（°､ 。 ７<br />
 　l、 ~ヽ<br />
　じしf_, )ノ<br />`
</script>

<template>
    <terminalbox class="window" :content="'login<br />这里有一只猫猫，大家可以摸摸她'+motd" />
</template>

<style lang="scss">

.window {
    width: 40vw !important;
    margin: 0 auto;
}

/* 移动端  */
@media all and (max-width: 768px) {
    .window {
        width: 90vw !important;
    }
}
</style>