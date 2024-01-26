<script setup>
import gsap from 'gsap'
import { useSearchResults } from '../stores/useSearchResultStore'
import { ref } from 'vue'

import itemCard from '../components/cards/itemCard.vue'
const search = useSearchResults()
const target = ref('timeline')

function onEnter(el, done) {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      translateY: window.innerHeight
    },
    {
      opacity: 1,
      translateY: 0,
      ease: 'elastic.out(0.1, 0.5)',
      duration: 2,
      delay: el.dataset.index * 0.25,
      onComplete: done
    }
  )
}
</script>

<template>
  <div
    class="Innerscreen relative w-full rounded-s5 self-stretch grow shrink basis-0 px-2 bg-srRes shadow-inner justify-center items-center gap-2 flex overflow-clip">
    <div
      class="absolute bg-mask2 pointer-events-none bottom-0 left-0 right-0 top-0 h-full w-full z-40 rounded-s5 bg-clip-content">
    </div>

    <div
      class="CardWrapper flex-col justify-start items-center gap-2 h-full w-full pb-40 pt-2 inline-flex overflow-y-scroll scrollbar-none">
      <TransitionGroup @enter="onEnter">
        <itemCard v-for="(data, index) in search.albums" :key="data.externalId" :data="data" :target="target"
          :data-index="index"></itemCard>
      </TransitionGroup>

      <TransitionGroup @enter="onEnter">
        <itemCard v-for="(data, index) in search.books" :key="data.externalId" :data="data" :target="target"
          :data-index="index"></itemCard>
      </TransitionGroup>

      <TransitionGroup @enter="onEnter">
        <itemCard v-for="(data, index) in search.movies" :key="data.externalId" :data="data" :target="target"
          :data-index="index"></itemCard>
      </TransitionGroup>
    </div>
  </div>
</template>
