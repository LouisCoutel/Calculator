<script setup>
import SectionHeading from './atoms/SectionHeading.vue'
</script>

<template>
  <section class="about-section inline-flex flex-col shrink min-w-[55ch] max-w-[75ch]">
    <SectionHeading :title="'A propos'"></SectionHeading>
    <p class="about-p text-base mb-2 ">
      Après un an de découverte en autodidacte du développement, j'ai rejoint <b>AdaTechSchool</b> afin de
      consolider mes compétences, participer à des projets de groupe et découvrir de nouvelles
      technos. Dans ce cadre, je recherche actuellement une <b>alternance</b>.
    </p>

    <p class="about-p text-base mb-2">
      Avant cela, j'ai accompagné le magazine <b>L'Express</b> pendant 4 ans en tant que
      <b>Réalisateur Podcast</b>. J'ai notamment participé à la création de <b>La Loupe</b>, le
      podcast quotidien de L'Express.
    </p>

    <a class="about-a text-lg underline transition-all w-fit font-medium hover:text-ut-orange duration-100" href="./CV/CV_LouisCoutel.pdf" target="_blank"
      >MonCV.pdf</a
    >
  </section>
</template>
