<script lang="ts" setup>
import ShieldImage from '../assets/shield.svg';
import PhoneImage from '../assets/phone.svg';
import { storeToRefs } from 'pinia';
import { useAppStore } from '../stores/app.ts';

const { currentContent } = storeToRefs(useAppStore());
</script>

<template>
  <div class="qr-section">
    <div class="qr-section__content">
      <div class="qr-section__image">
        <img
          :src="currentContent.qr.image"
        >
      </div>
      <div class="qr-section__text-wrapper">
        <div class="qr-section__title">
          {{ currentContent.qr.title }}
        </div>
        <div class="qr-section__sub-title">
          {{ currentContent.qr.subTitle }}
        </div>
        <div class="qr-section__description">
          <div class="qr-section__description-icon">
            <img
              :src="ShieldImage"
            >
          </div>
          <div class="qr-section__description-text">
            {{ currentContent.qr.subText }}
          </div>
        </div>
      </div>
    </div>
    <div class="qr-section__phone-image">
      <img :src="PhoneImage">
    </div> 
  </div>         
</template>

<style lang="scss">
  .qr-section {
    position: relative;
    display: none;
    padding: 0 61.192px 0 77px;
    align-items: center;
    gap: 80.331px;
    border-radius: 30px; 
    border: 1px solid transparent; 
    background: 
    linear-gradient(#131416, #131416) padding-box, /* Слой 1: Внутренний фон */
    linear-gradient(94.68deg, #F6EF59 2.65%, #FF6B00 18.14%, #2A2D31 36.36%) border-box; /* Слой 2: Градиент рамки */


    &__content {
      display: flex;
      height: 221px; 
      align-items: center;
      gap: 50px;
      margin: 40px 0px;
    }

    &__image {
      display: flex;
      padding: 20px;
      align-items: center;
      border-radius: 20px;
      background: #0C0D0E;
    }

    &__text-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 30px;
    }

    &__title {
      color: var(--Grays-White, #FFF);
      font-family: Gilroy;
      font-size: 36px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    &__sub-title {
      color: var(--icon, #A7A8AE);
      font-family: Gilroy;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    &__description {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    &__description-text {
      color: var(--icon, #A7A8AE);
      font-family: Gilroy;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      white-space: pre-line;
    }

    &__phone-image {
      position: relative;

      img {
        position: absolute;
        height: auto;
        top: -195px;
      }
    }

    @media (min-width: $breakpoint-desktop) {
      display: flex;
    }
  }
</style>