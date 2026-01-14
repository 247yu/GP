<template>
    <div @click="showNumber = true">
        <h1 v-if="!showNumber">产品还未发布，敬请期待！！</h1>
        <h1 v-else>123</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const showNumber = ref(false)
</script>