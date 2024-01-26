<script setup>
import HeaderComp from "./components/HeaderComp.vue";
import MainComp from "./components/MainComp.vue";
</script>

<template>
  <HeaderComp />
  <MainComp />

  <footer class="footer md:fixed relative bottom-0 left-0 p-1">
    <p class="footer-p text-xs pointer-events-none leading-none text-gray-600">
      Louis Coutel 2023 - Icons : Font Awesome - Fonts : Syne, Space Grotesk -
      Google Fonts
    </p>
  </footer>
</template>
