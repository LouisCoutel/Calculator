<script setup>
import AboutComp from './AboutComp.vue'
import ContactComp from './ContactComp.vue'
import ProjectsComp from './ProjectsComp.vue'
</script>

<template>
  <main class="main_wrapper flex flex-col md:flex-row h-full w-full overflow-hidden gap-8 mt-2 p-2">
    <!-- header section -->

    <!-- about section -->
    <section class="about-contact-wrapper flex flex-col gap-4 w-full h-full">
      <AboutComp></AboutComp>

      <!-- contact section -->
      <ContactComp></ContactComp>
    </section>
    <!-- projects section -->
    <ProjectsComp></ProjectsComp>
  </main>
</template>
