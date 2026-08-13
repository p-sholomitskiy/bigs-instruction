<script setup lang="ts">
import { storeToRefs } from 'pinia';
import CasinoLogoImage from '../assets/casino-logo.svg';
import LanguageDropdown from './language-dropdown.vue';
import { useAppStore } from '../stores/app.ts';

const { currentContent } = storeToRefs(useAppStore());
</script>

<template>
  <div class="instruction-header">
    <div class="instruction-header__top">
      <img
        class="instruction-header__logo"
        :src="CasinoLogoImage"
        alt=""
      >

      <LanguageDropdown class="instruction-header__language" />
    </div>

    <div class="instruction-header__text">
      <div class="instruction-header__title">
        {{ currentContent.header.title }}
      </div>

      <div class="instruction-header__sub-title">
        {{ currentContent.header.subTitle }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.instruction-header {
  display: flex;
  flex-direction: column;
  gap: 15px;

  &__top {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin: 14px 0;
  }

  &__logo {
    display: block;
    width: 96px;
    height: 16px;
  }

  &__language {
    position: absolute;
    top: 50%;
    right: 0;
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
  }

  &__title {
    color: #fff;
    text-align: center;
    font-family: Gilroy;
    font-size: 24px;
    font-weight: 700;
    line-height: normal;
  }

  &__sub-title {
    color: #a7a8ae;
    text-align: center;
    font-family: Gilroy;
    font-size: 11px;
    font-weight: 400;
    line-height: normal;
    white-space: pre-line;
  }

  @media (min-width: $breakpoint-desktop) {
    gap: 50px;

    &__logo {
      display: block;
      width: 180px;
      height: 30px;
    }

    &__title {
      font-size: 64px;
    }

    &__sub-title {
      font-size: 30px;
    }

    &__top {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

&__logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

&__language {
  margin-left: auto;
}
  }
}
</style>