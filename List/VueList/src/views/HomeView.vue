<script setup>
import SearchBar from "../components/search/SearchBar.vue"
import animate from 'gsap'

function onEnter(el, done) {
  animate.fromTo(
    el,
    {
      opacity: 0,
    },
    { opacity: 1, duration: 2, onComplete: done }
  )
}

function onLeave(el, done) {
  animate.fromTo(
    el,
    {
      opacity: 1,
    },
    { opacity: 0, duration: 2, onComplete: done }
  )
}
</script>

<template>
  <div
    class="font-body Vuetimeline w-full max-w-[390px] h-full max-h-[844px] rounded-md flex-col justify-end items-center inline-flex border shrink">
    <div class="Screen w-full h-full p-1.5 pb-0 rounded-s5 bg-white flex shrink grow overflow-hidden">
      <router-view v-slot="{ Component }">
        <transition @enter="onEnter" @before-leave="onLeave">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <SearchBar />
  </div>
</template>
