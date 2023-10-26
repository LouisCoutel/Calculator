<script setup>
import SectionHeading from './atoms/SectionHeading.vue'
import ProjectTile from './ProjectTile.vue'
import { useProjects } from '../stores/projects'

const projects = useProjects()
</script>
<template>
  <section class="main_projects flex flex-col sm-reg:w-fit sm-reg:max-w-[33vw] xs-reg:w-full xs-reg:h-fit h-full xs-reg:overflow-auto sm-reg:overflow-hidden rounded-lg">
    <SectionHeading :title="'Projets'" class="w-fit"></SectionHeading>
    <section
      class="flex flex-col xs-reg:w-full sm-reg:w-fit sm-reg:h-full xs-reg:h-fit gap-4 justify-center items-start overflow-y-scroll p-4 rounded-lg scrollbar-none shadow-inner shadow-gray-400"
    >
      <TransitionGroup name="projects">
        <ProjectTile
          v-for="project in projects.getAll"
          :key="project.index"
          :alt="project.alt"
          :name="project.name"
          :img="project.img"
          :href="project.href"
        ></ProjectTile
      ></TransitionGroup>
    </section>
  </section>
</template>
