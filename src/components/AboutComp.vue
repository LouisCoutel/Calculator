<script setup>
import SectionHeading from './atoms/SectionHeading.vue'
import CVurl from '../../public/CV_LouisCoutel_2023.pdf'

</script>

<template>
  <section class="about-section inline-flex flex-col shrink min-w-[15ch]  sm:min-w-[30ch] max-w-[75ch]">
    <SectionHeading :title="'A propos'"></SectionHeading>
    <p class="about-p text-sm md:text-base lg:text-lg mb-2">
      Après un an de découverte en autodidacte du développement, j'ai rejoint
      <b>AdaTechSchool</b> afin de consolider mes compétences, participer à des projets de groupe et
      découvrir de nouvelles technos. Dans ce cadre, je recherche actuellement une
      <b>alternance</b>.
    </p>

    <p class="about-p text-sm md:text-base lg:text-lg mb-2">
      Avant cela, j'ai accompagné le magazine <b>L'Express</b> pendant 4 ans en tant que
      <b>Réalisateur Podcast</b>. J'ai notamment participé à la création de <b>La Loupe</b>, le
      podcast quotidien de L'Express.
    </p>

    <a
      class="about-a md:text-lg lg:text-xl text-base underline transition-all w-fit font-medium hover:text-utOrange duration-100"
      :href=CVurl
      target="_blank"
      >MonCV.pdf</a
    >
  </section>
</template>
