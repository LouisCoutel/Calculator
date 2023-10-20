<script setup>
import SocialIcon from './atoms/SocialIcon.vue'
const github = {
  class: 'fa-square-github',
  link: 'https://github.com/LouisCoutel'
}
const linkedin = {
  class: 'fa-linkedin',
  link: 'https://www.linkedin.com/in/louis-coutel/'
}
</script>

<template>
  <header class="header flex flex-col w-full h-fit box-border text-display self-start">
    <div class="wrapper w-full flex flex-row h-fit justify-between">
      <section
        class="name-title-section flex flex-col justify-end w-full g-2 font-display leading-tight"
      >
        <h2 class="header-h2 sm:text-xl md:text-2xl lg:text-3xl font-bold line-clamp-1 ">
          Louis Coutel
        </h2>
        <h1 class="header-h1 sm:text-2xl md:text-3xl lg:text-4xl font-bold line-clamp-1">
          Développeur Fullstack
        </h1>
      </section>
      <section class="socials-section flex flex-row grow w-fit gap-2 justify-end items-end">
        <SocialIcon :faClass="linkedin.class" :link="linkedin.link"></SocialIcon>
        <SocialIcon :faClass="github.class" :link="github.link"></SocialIcon>
      </section>
    </div>
    <hr class="header-hr mt-2 w-full border-t-2 border-black" />
  </header>
</template>
