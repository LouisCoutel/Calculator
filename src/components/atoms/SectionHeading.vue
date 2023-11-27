<script setup>
const props = defineProps({
  title: String
})

const title = props.title
</script>

<template>
  <h3 class="text-lg sm:text-xl lg:text-2xl font-display font-bold mb-2">{{ title }}</h3>
</template>
