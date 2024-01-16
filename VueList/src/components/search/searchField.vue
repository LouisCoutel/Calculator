<script setup>
import { useSearchResults } from '../../stores/useSearchResultStore'
const search = useSearchResults()

function setQuery (ev) {
    search.setQuery(ev.target.value)
}
</script>

<template>
  <input
    type="field"
    @input="setQuery"
    @keypress.enter="search.find()"
    class="SearchField scale-in-hor-center flex grow focus-visible:outline-none border-transparent border-2 px-2 py-1 text-base font-normal w-full h-12 bg-neutral-200 rounded-s5 shadow-inner"
  />
</template>
<style>
.scale-in-hor-center {
  -webkit-animation: scale-in-hor-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: scale-in-hor-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes scale-in-hor-center {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    opacity: 1;
  }
}
@keyframes scale-in-hor-center {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    opacity: 1;
  }
}
</style>
