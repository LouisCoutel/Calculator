<script setup>
const props = defineProps({
  faClass: String,
  link: String
})
const link = props.link
const faClass = props.faClass
</script>

<template>
  <a class="social-icon" :href="link" target="_blank">
    <i
      :class="faClass"
      class="header_wrapper1_2-icon fa-brands block text-3xl md:text-6xl ease-in-out transition-all duration-500 hover:duration-200 hover:-translate-y-1 hover:text-utOrange"
    ></i
  ></a>
</template>
