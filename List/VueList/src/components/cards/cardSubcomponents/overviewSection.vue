<script setup>
import { ref } from 'vue'

const props = defineProps({
    note: String
})

const note = ref(props.note)
</script>

<template>
  <p class="text-xs leading-tight w-full font-body font-extralight text-ellipsis line-clamp-4">
    {{ note }}
  </p>
</template>
