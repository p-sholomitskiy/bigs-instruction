<script setup lang="ts">
interface Props {
  image: string;
  title: string
}

defineProps<Props>();
</script>

<template>
  <div class="device-title-wrapper">
    <div class="device-logo">
      <img :src="image">
    </div>
    <div class="device-title">
      {{ title }}
    </div>
  </div>
</template>

<style lang="scss">
  .device-title-wrapper {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  margin-bottom: 14px;
}

.device-logo {
  display: flex;
  flex-shrink: 0;
  width: 54px;
  height: 54px;
  padding: 10px;

  justify-content: center;
  align-items: center;

  border-radius: 9px;
  background: #2c2c2c;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
}

.device-title {
  color: #fff;
  font-family: Gilroy;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
}

@media (min-width: $breakpoint-desktop) {
  .device-title-wrapper {
    gap: 30px;
    margin-bottom: 0;
  }

  .device-logo {
    width: 100px;
    height: 100px;
    padding: 20px;
    border-radius: 18px;
  }

  .device-title {
    font-size: 36px;
  }
}
</style>