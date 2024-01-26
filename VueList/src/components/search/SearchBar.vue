<script setup>
import { useSearchResults } from '../../stores/useSearchResultStore'
import SearchTypeButton from './buttons/SearchTypeButton.vue'
import SearchButton from './buttons/SearchButton.vue'
import searchField from './searchField.vue'

const search = useSearchResults()

function setType(type) {
  search.pickedType = type
  search.closePicker()
}
</script>

<template>
  <div
    class="SearchBar font-display h-fit w-full p-1.5 bg-white rounded-[5px] justify-center items-center gap-1.5 flex overflow-visible z-40">
    <transition name="div" mode="out-in">
      <div v-if="!search.pickerOpened" class="box-border w-fit relative">
        <SearchTypeButton :type="search.pickedType" :action="search.openPicker" :class="'relative'" />
      </div>
      <div v-else-if="search.pickerOpened" class="box-border flex w-fit relative gap-1.5">
        <SearchTypeButton v-for="(type, index) in search.unpickedTypes" :class="'relative'" :key="index" :type="type"
          @click="setType(type)" />
      </div>
    </transition>

    <router-view name="cancelbutton" v-slot="{ Component }">
      <transition name="div">
        <component :is="Component" />
      </transition>
    </router-view>

    <label for="searchField" class="absolute invisible pointer-events-none">Search field</label>

    <searchField :id="'searchField'" v-model="search.query" :class="search.pickedType.focusColor" />

    <transition name="divrev">
      <SearchButton v-if="!search.pickerOpened" :class='"relative"' @click="search.find" />
    </transition>
  </div>
</template>

<style>
.div-enter-active,
.div-leave-active {
  transition: all 0.2s ease;
}

.div-enter-from,
.div-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.divrev-enter-active,
.divrev-leave-active {
  transition: all 0.2s ease;
}

.divrev-enter-from,
.divrev-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
