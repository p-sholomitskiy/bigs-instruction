<script setup lang="ts">
import CtaBanner from '../components/cta-banner.vue';
import Header from '../components/header.vue';
import QrSection from '../components/qr-section.vue';
import InstructionList from '../components/device-instruction/instruction-list.vue';
import { CONTENT_DATA } from '../constants/text-content.ts';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useAppStore } from '../stores/app.ts';
import DesktopInstructionList from '../components/device-instruction/desktop-instruction-list.vue';
import { useRoute } from 'vue-router';

const { language, deviceType } = storeToRefs(useAppStore());

const route = useRoute();

watch(
  () => route.params.locale,
  (locale) => {
    if (typeof locale === 'string') {
      language.value = locale as typeof language.value;
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="main-wrapper">
    <Header
      :content-data="CONTENT_DATA[language].header"
      :lang="language"
    />
    <DesktopInstructionList v-if="deviceType === 'desktop'" />
    <InstructionList
      :content-data="CONTENT_DATA"
      :language="'en'"
      :os="'android'"
    />
    <InstructionList
      :content-data="CONTENT_DATA"
      :language="'en'"
      :os="'ios'"
      is-reverse
    />
    <QrSection
      v-if="deviceType === 'desktop'"
      :content-data="CONTENT_DATA.en.qr"
    />
    <CtaBanner :content-data="CONTENT_DATA.en.cta" />
  </div>
</template>

<style lang="scss">
  .main-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  padding: 0 16px;
  margin-bottom: 20px;

  @media (min-width: $breakpoint-desktop) {
    gap: 42px;
    padding: 0;
    width: 1260px;
    max-width: none;
  }
}
</style>