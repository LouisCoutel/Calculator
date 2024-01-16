<!-- eslint-disable eqeqeq -->
<script setup>
import streamingSection from './cardSubcomponents/streamingSection.vue'
import overviewSection from './cardSubcomponents/overviewSection.vue'
import infosSection from './cardSubcomponents/infosSection.vue'
import { ref, provide } from 'vue'
import { useDB } from '../../stores/useDBStore'

const db = useDB()
const props = defineProps({
    data: Object,
    target: String
})

const data = props.data

const note = ref(data.note)
const img = ref(data.img)
const type = ref(data.type)
const cardId = ref(data._id)
const albumUrl = ref(data.albumUrl)
const externalId = ref(data.externalId)

provide('albumUrl', albumUrl)

function assignTypeStyles (type) {
    const styles = {}
    if (type == 'Movie') {
        styles.color = 'text-mdPrpl'
        styles.imageH = 'h-24 '
    } else if (type == 'Book') {
        styles.color = 'text-drkRd'
        styles.imageH = 'h-fit'
    } else if (type == 'Album') {
        styles.imageH = 'h-16'
        styles.color = 'text-mdBl'
    }
    return styles
}

const typeStyles = assignTypeStyles(type.value)

function addItem () {
    db.sendData(data)
}
</script>

<template>
  <div :id="cardId" :class="typeStyles.imageH"
    class="CardElement text-offBlck w-full bg-white rounded-s5 shadow flex-row justify-center items-start inline-flex">
    <section class="ImgWrapper w-fit h-fit flex grow-0 shrink-0" v-if="img != 'none' || undefined">
      <img class="Image aspect-auto rounded-tl-s5 rounded-bl-s5 text-xs text-gray-400 font-thin w-16"
        :class="typeStyles.imageH" :src="img"
        alt="A poster, book or album cover or similar image related to the element displayed in the card"
        loading="lazy" />
    </section>

    <section
      class="cardBody font-display h-full grow shrink self-stretch p-1 rounded-s5 flex-col justify-between items-start inline-flex gap-0.5">
      <infosSection :data="props.data" :typeStyles="typeStyles" />
      <streamingSection v-if="type == 'Album'" :albumUrl="albumUrl" :externalId="externalId"/>
      <overviewSection v-if="type != 'Album'" :note="note" />
    </section>
    <router-view name="addbutton" @click="addItem" />
  </div>
</template>
