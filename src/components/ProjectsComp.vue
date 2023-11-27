<script setup>
import SectionHeading from "./atoms/SectionHeading.vue";
import ProjectTile from "./ProjectTile.vue";
import { useProjects } from "../stores/projects";

const projects = useProjects();
</script>
<template>
  <section
    class="main_projects flex flex-col sm:w-fit max-w-[33vw] xs:w-full xs:h-fit h-full xs:overflow-auto sm:overflow-auto overflow-hidden rounded-lg"
  >
    <SectionHeading :title="'Projets'" class="w-fit"></SectionHeading>
    <section
      class="flex flex-wrap w-fit xs:w-full h-full xs:h-fit gap-4 items-start overflow-y-scroll p-4 rounded-lg scrollbar-none shadow-inner shadow-gray-400"
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
