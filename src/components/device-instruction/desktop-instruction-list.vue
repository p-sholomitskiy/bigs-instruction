<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from '../../stores/app.ts';
import DeviceTitle from './device-title.vue';
import ListItem from './list-item.vue';


const { currentContent } = storeToRefs(useAppStore());

</script>

<template>
  <div class="desktop-instruction">
    <DeviceTitle
      :image="currentContent.desktop.logoImage"
      :title="currentContent.desktop.title"
    />
    <div class="desktop-instruction__card-wrapper">
      <div
        class="desktop-instruction__card"
        v-for="(step, index) in currentContent.desktop.instructionStepList"
        :key="index"
      >
        <ListItem
          :order="index + 1"
          :title="step"
        />
        <img
          class="desktop-instruction__card__image"
          :src="currentContent.desktop.instructionImageList[index]"
          alt=""
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .desktop-instruction {
    display: none;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    width: 100%;
    padding: 40px 60px;

    border: 1px solid #2a2d31;
    border-radius: 20px;
    background: #131416;

    &__card-wrapper {
      display: flex;
      gap: 30px ;
    }

    &__card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 30px;

      &__image {
        height: 290px;
        border-radius: 20px;
        border: 5px solid #282828;
      }
    }

    @media (min-width: $breakpoint-desktop) {
      display: flex;
    }
  }
</style>