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
    <div class="wrapper w-full flex h-fit justify-between">
      <section
        class="name-title-section flex flex-col justify-end w-full font-display leading-tight"
      >
        <h2 class="header-h2 xs-reg:text-lg sm-reg:text-xl md-reg:text-2xl lg-reg:text-3xl xs-short:text-base sm-short:text-lg md-short:text-xl lg-short:text-2xl font-bold line-clamp-1 ">
          Louis Coutel
        </h2>
        <h1 class="header-h1 xs-reg:text-xl sm-reg:text-2xl md-reg:text-3xl lg-reg:text-4xl xs-short:text-lg sm-short:text-xl md-short:text-2xl lg-short:text-3xl font-bold line-clamp-1">
          Développeur Fullstack
        </h1>
      </section>
      <section class="socials-section flex flex-row grow w-fit sm-reg:gap-2 xs-reg:gap-1 justify-end items-end">
        <SocialIcon :faClass="linkedin.class" :link="linkedin.link"></SocialIcon>
        <SocialIcon :faClass="github.class" :link="github.link"></SocialIcon>
      </section>
    </div>
    <hr class="header-hr mt-2 sm:mt-1 w-full border-t-2 sm-reg:border-t-2 border-black" />
  </header>
</template>
