<script setup>
import SectionHeading from './atoms/SectionHeading.vue'
import FormField from './atoms/FormField.vue';
</script>

<template>
  <section
    class="contact-section inline-flex grow flex-col"
  >
    <SectionHeading :title="'Contact'"> </SectionHeading>
    <form class="contact_form flex flex-col w-full h-full gap-2" action="https://formspree.io/f/mvonkgag" method="POST">
      <section class="poster-info flex flex-row gap-2 w-full">
        <FormField :labelName="'Nom'"></FormField>
        <FormField :labelName="'Email'"></FormField>
      </section>
      <textarea
        id="textarea"
        name="message"
        placeholder="Rédigez votre message ici"
        class="resize-none rounded-lg bg-gray-200 text-gray-400 w-full h-full grow shrink p-1 px-2 transition-colors focus-within:outline-1 focus-within:bg-gray-100 hover:bg-gray-100 shadow-inner"
        required
      ></textarea>
      <input
        type="submit"
        id="submit"
        name="submit"
        value="Envoyer"
        class="contact_form-submit rounded-lg border-2 border-gray-300 bg-gray-100 font-display text-base p-1 leading-tight text-center shadow-sm hover:shadow-md hover:border-gray-400 transition-all"
      />
    </form>
  </section>
</template>
