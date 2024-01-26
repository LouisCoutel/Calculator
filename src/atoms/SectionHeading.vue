<script setup>
const props = defineProps({
  title: String,
})

const title = props.title;
</script>

<template>
  <h3 class="text-lg sm:text-xl tallmd:text-3xl md:text-2xl font-display font-bold mb-2 tallmd:mb-3">
    {{ title }}
  </h3>
</template>
