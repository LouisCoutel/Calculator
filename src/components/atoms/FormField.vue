<script setup>
const props = defineProps({
  labelName: String
})

const labelName = props.labelName
</script>

<template>
  <div
    class="form-element flex flex-row w-full font-display h-6 items-center leading-none whitespace-nowrap gap-1"
  >
    <label :for="labelName" class="w-fit xs:w-20 h-fit xs:text-lg sm:text-lg text-xl font-medium "> {{ labelName }}:</label>
    <input
      type="text"
      :id="labelName"
      class="rounded-lg w-full h-full bg-gray-200 leading-none text-base center px-2 transition-colors focus-within:outline-1 focus-within:bg-gray-100 hover:bg-gray-100 shadow-inner"
      required
    />
  </div>
</template>
