<script setup lang="ts">
interface Props {
  order: string | number;
  title: string
}

defineProps<Props>();
</script>

<template>
  <div class="list-item">
    <div class="list-item__order-mark">
      <span class="list-item__order">{{ order }}</span>
    </div>
    <div class="list-item__title">
      {{ title }}
    </div>
  </div>       
</template>

<style lang="scss">
  .list-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  &__order-mark {
    display: grid;
    flex-shrink: 0;
    width: 21px;
    height: 21px;
    place-items: center;

    border: 1px solid #ffcc00;
    border-radius: 4px;

    background: #090a0b;
  }

  &__order {
    color: #ffcc00;
    font-family: Gilroy;
    font-size: 12px;
    font-weight: 600;
    line-height: 100%;
    text-align: center;
  }

  &__title {
    color: #fff;
    font-family: Gilroy;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.3;
  }

  @media (min-width: $breakpoint-desktop) {
    gap: 20px;

    &__order-mark {
      width: 40px;
      height: 40px;
    }

    &__order {
      font-size: 24px;
    }

    &__title {
      font-size: 24px;
    }
  }
}
</style>