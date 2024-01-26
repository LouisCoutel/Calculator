<script setup>
import SocialIcon from "./atoms/SocialIcon.vue";

const github = {
  class: "fa-square-github",
  link: "https://github.com/LouisCoutel",
};

const linkedin = {
  class: "fa-linkedin",
  link: "https://www.linkedin.com/in/louis-coutel/",
};
</script>

<template>
  <header class="header flex flex-col w-full h-fit box-border text-display self-start p-2">
    <div class="wrapper w-full flex h-fit justify-between">
      <section class="name-title-section flex flex-col justify-end w-full font-display leading-tight">
        <h2 class="header-h2 xs:text-lg sm:text-xl md:text-2xl tallmd:text-3xl font-bold line-clamp-1">
          Louis Coutel
        </h2>

        <h1 class="header-h1 xs:text-xl sm:text-2xl md:text-3xl tallmd:text-4xl font-bold line-clamp-1">
          Développeur Fullstack
        </h1>
      </section>

      <section class="socials-section flex flex-row grow w-fit gap-1 md:gap-2 justify-end items-end">
        <SocialIcon :faClass="linkedin.class" :link="linkedin.link" />

        <SocialIcon :faClass="github.class" :link="github.link" />
      </section>
    </div>

    <hr class="header-hr mt-2 sm:mt-1 w-full border-t-2 sm:border-t-2 border-black" />
  </header>
</template>
