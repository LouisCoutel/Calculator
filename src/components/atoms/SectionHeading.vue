<script setup>
const props = defineProps({
  title: String
})

const title = props.title
</script>

<template>
  <h3 class="xs:text-lg sm:text-xl text-2xl xl:text-3xl font-display font-bold mb-2 normal:text-3xl">{{ title }}</h3>
</template>
