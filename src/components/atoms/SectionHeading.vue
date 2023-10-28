<script setup>
const props = defineProps({
  title: String
})

const title = props.title
</script>

<template>
  <h3 class="xs:text-lg text-xl xl:text-2xl font-display font-bold mb-2 normal:text-3xl">{{ title }}</h3>
</template>
