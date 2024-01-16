<script setup>
import gsap from 'gsap'
import itemCard from '../components/cards/itemCard.vue'
import { ref } from 'vue'
import { useDB } from '../stores/useDBStore'
const db = useDB()

function onEnter (el, done) {
    gsap.fromTo(
        el,
        {
            opacity: 0,
            translateY: -window.innerHeight
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

const target = ref('timeline')
db.fetchData()
</script>
<template>
  <div
    class="Innerscreen w-full relative rounded-s5 self-stretch grow shrink basis-0 px-2 bg-gradient-to-b from-gray-900 via-sky-700 to-gray-900 shadow-inner justify-center items-center gap-1.5 flex overflow-clip"
  >
    <!-- <div class="Line w-fit h-full py-1">
      <div class="w-0.5 h-full bg-opgr1"></div>
    </div> -->
    <div
      class="absolute bg-mask1 pointer-events-none bottom-0 left-0 right-0 top-0 h-full w-full z-40 rounded-s5 bg-clip-content"
    ></div>
    <div
      class="CardWrapper flex-col-reverse justify-start items-center gap-2 h-full py-2 inline-flex overflow-y-scroll scrollbar-none"
    >
      <TransitionGroup @enter="onEnter"
        ><itemCard
          v-for="(data, index) in db.getData"
          :key="data._id"
          :data="data"
          :target="target"
          :data-index="index"
        ></itemCard
      ></TransitionGroup>
    </div>
  </div>
</template>
