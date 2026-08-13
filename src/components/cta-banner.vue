<script lang="ts" setup>
import CtaBannerBackgroundDesktopImage from '../assets/cta-banner-desktop.png';
import CtaBannerBackgroundMobileImage from '../assets/cta-banner-mob.png';
import { storeToRefs } from 'pinia';
import { useAppStore } from '../stores/app.ts';

const { currentContent } = storeToRefs(useAppStore());
const openLink = ():void => {
  window.open('https://bigsgo.link', '_blank');
};
</script>

<template>
  <div class="cta-banner">
    <picture class="cta-banner__background">
      <source
        media="(min-width: 1200px)"
        :srcset="CtaBannerBackgroundDesktopImage"
      >

      <img
        :src="CtaBannerBackgroundMobileImage"
        alt=""
        class="cta-banner__background-image"
      >
    </picture>

    <div class="cta-banner__text-content">
      <div class="cta-banner__title">
        {{ currentContent.cta.title }}
      </div>

      <div class="cta-banner__sub-text">
        {{ currentContent.cta.subText }}
      </div>

      <button
        class="cta-banner__button"
        @click="openLink"
      >
        {{ currentContent.cta.buttonText }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.cta-banner {
  position: relative;
  overflow: hidden;

  width: 100%;
  padding: 25px 21px;

  box-sizing: border-box;

  border: 1px solid #dda028cc;
  border-radius: 20px;

  &__background {
    position: absolute;
    inset: 0;

    z-index: 0;
  }

  &__background-image {
    display: block;

    width: 100%;
    height: 100%;

    object-fit: fill;
  }

  &__text-content {
    position: relative;
    z-index: 1;
  }

  &__title {
    margin-bottom: 5px;

    color: #fff;
    font-family: Gilroy;
    font-size: 20px;
    font-weight: 600;
    line-height: normal;
  }

  &__sub-text {
    width: 190px;
    margin-bottom: 36px;

    color: #a7a8ae;
    font-family: Gilroy;
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
  }

  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 160px;
    height: 42px;

    border: 2.35px solid transparent;
    border-radius: 14px;

    background:
      linear-gradient(
        97.49deg,
        #f6ef59 2.88%,
        #ff6b00 100.54%
      ) padding-box,
      linear-gradient(
        94.68deg,
        rgba(255, 167, 50, 0.24) 2.65%,
        rgba(255, 232, 76, 0.24) 97.4%
      ) border-box;

    box-shadow:
      0 0 37.68px 0 rgba(255, 179, 55, 0.55),
      inset 7.06px 4.71px 9.42px 0 rgba(178, 96, 0, 0.25);

    cursor: pointer;
    outline: none;

    color: #0a0a0a;
    font-family: Gilroy;
    font-size: 16.53px;
    font-weight: 700;
    line-height: normal;
  }

  @media (min-width: $breakpoint-desktop) {
    padding: 52px 86px;
    margin: 0 auto;
    width: 99%;

    &__title {
      margin-bottom: 17px;
      font-size: 36px;
    }

    &__sub-text {
      width: auto;
      margin-bottom: 36px;
      font-size: 24px;
      white-space: pre-line;
    }

    &__button {
      width: 292px;
      height: 81px;

      border-radius: 23.55px;
      font-size: 28.258px;
    }

    &__background-image {
      scale: 1.05;
    }
  }
}
</style>