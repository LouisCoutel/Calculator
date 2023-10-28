<script setup>
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue';
</script>

<template>
  <!-- main -->
  <!-- <button aria-lable="button to switch darkmode on/off"
    class="darkmode-button unset cursor-pointer text-4xl fixed w-8 h-8 -right-4 top-2 text-center hover:transition-transform hover:scale-105"
  >
    <i class="button_colorTheme_colorIcon--dark fa-solid fa-lightbulb"></i>
  </button> -->

  <HeaderComp></HeaderComp>
  <MainComp></MainComp>

  <!-- footer -->
  <footer class="footer fixed sm:relative xs:relative bottom-0 left-0 p-1">
    <p class="footer-p text-xs pointer-events-none leading-none text-gray-600">
      Louis Coutel 2023 - Icons : Font Awesome - Fonts : Syne, Space Grotesk - Google Fonts
    </p>
  </footer>
</template>
