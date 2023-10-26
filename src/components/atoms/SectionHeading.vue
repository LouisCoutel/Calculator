<script setup>
const props = defineProps({
  title: String
})

const title = props.title
</script>

<template>
  <h3 class="xs-reg:text-lg sm-reg:text-xl md-reg:text-2xl lg-reg:text-3xl sm-tall:text-2xl md-tall:text-3xl lg-tall:text-4xl font-display font-bold mb-2 normal:text-3xl">{{ title }}</h3>
</template>
