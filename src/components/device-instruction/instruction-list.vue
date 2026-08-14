<script setup lang="ts">
import { computed } from 'vue';
import type { DeviceOS } from '../../constants/operation-system-list.ts';
import DeviceTitle from './device-title.vue';
import ListItem from './list-item.vue';
import { storeToRefs } from 'pinia';
import { useAppStore } from '../../stores/app.ts';

interface Props {
  os: DeviceOS
  isReverse?: boolean
}

const props = defineProps<Props>();
const { currentContent } = storeToRefs(useAppStore());

const currentDeviceData = computed(() => {
  return currentContent.value[props.os];
});
</script>

<template>
  <div
    class="instruction"
    :class="{ instruction_reverse: props.isReverse }"
  >
    <div class="instruction__steps">
      <DeviceTitle
        :image="currentDeviceData.logoImage"
        :title="currentDeviceData.title"
      />

      <ListItem
        v-for="(step, index) in currentDeviceData.instructionStepList"
        :key="index"
        :order="index + 1"
        :title="step"
      />
    </div>

    <div class="instruction__image-wrapper">
      <img 
        v-for="(image, index) in currentDeviceData.instructionImageList"
        :key="index"
        class="instruction__image"
        :src="image"
        alt=""
      >
    </div>
  </div>
</template>

<style lang="scss">
  .instruction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  width: 100%;
  padding: 14px;

  border: 1px solid #2a2d31;
  border-radius: 20px;
  background: #131416;

  &__steps {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;

    width: 100%;
  }

  &__image {
      flex: 1 1 0;
      min-width: 0;
      width: 0;
      height: 100%;

      object-fit: contain;
  }

  &_reverse {
    flex-direction: column;
  }

  &__image-wrapper{
      display: flex;
      width: 100%;
      height: 215px;
      gap: 15px;
      overflow: hidden;
    }

  @media (min-width: $breakpoint-desktop) {
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 0 auto;

    padding: 40px 60px;
    gap: 60px;

    border-radius: 30px;

    &__steps {
      width: auto;
      align-items: flex-start;
      gap: 30px;
      align-self: stretch;
    }

    &__image { 
      flex: 0 1 50%;
      width: 50%;
      max-width: 50%;
      height: auto;
      object-fit: contain;
    }

    &_reverse {
      flex-direction: row-reverse;
    }

    &__image-wrapper{
      height: 400px;
      gap: 30px;
      overflow: none;
      width: auto
    }
  }
}
</style>