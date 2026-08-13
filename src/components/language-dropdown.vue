<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { storeToRefs } from 'pinia';

import { LANGUAGES } from '../constants/languages.ts';
import { useAppStore } from '../stores/app.ts';
import { useRouter } from 'vue-router';

const router = useRouter();

const { language } = storeToRefs(useAppStore());

const isOpen = ref(false);
const rootRef = ref<HTMLElement | null>(null);

const selectedLanguage = computed(
  () =>
    LANGUAGES.find((item) => item.code === language.value) ??
    LANGUAGES[0],
);

const availableLanguages = computed(() =>
  LANGUAGES.filter((item) => item.code !== language.value),
);

function toggle(): void {
  isOpen.value = !isOpen.value;
}

function select(code: typeof language.value): void {
  language.value = code;
  isOpen.value = false;

  router.push(`/${code}`);
}

function onDocumentClick(event: MouseEvent): void {
  if (!rootRef.value?.contains(event.target as Node)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick);
});

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick);
});
</script>

<template>
  <div
    ref="rootRef"
    class="language-dropdown"
  >
    <!-- Основная кнопка -->
    <button
      type="button"
      class="language-dropdown__trigger"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      @click.stop="toggle"
    >
      <div class="language-dropdown__language">
        <img
          class="language-dropdown__flag"
          :src="selectedLanguage.flag"
          :alt="selectedLanguage.label"
        >

        <span class="language-dropdown__label">
          {{ selectedLanguage.label }}
        </span>
      </div>

      <span
        class="language-dropdown__arrow"
        :class="{ 'language-dropdown__arrow--open': isOpen }"
      >
        <svg
          width="6.4"
          height="3.84"
          viewBox="0 0 6.4 3.84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0.6 0.16L3.2 3.2L5.8 0.16"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>

    <!-- Выпадающий список -->
    <ul
      v-if="isOpen"
      class="language-dropdown__menu"
      role="listbox"
    >
      <li
        v-for="item in availableLanguages"
        :key="item.code"
        class="language-dropdown__option"
        role="option"
        :aria-selected="false"
      >
        <button
          type="button"
          class="language-dropdown__option-button"
          @click="select(item.code)"
        >
          <div class="language-dropdown__language">
            <img
              class="language-dropdown__flag"
              :src="item.flag"
              :alt="item.label"
            >

            <span class="language-dropdown__label">
              {{ item.label }}
            </span>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.language-dropdown {
  position: relative;
}

.language-dropdown__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  width: 120px;
  height: 35px;
  padding: 0 16px;

  border: none;
  border-radius: 10px;

  background: #131416;
  cursor: pointer;
}

.language-dropdown__language {
  display: flex;
  align-items: center;
  gap: 8px;
}

.language-dropdown__flag {
  width: 16px;
  height: 16px;

  flex-shrink: 0;

  object-fit: cover;
}

.language-dropdown__label {
  color: #919191;

  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.language-dropdown__arrow {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  flex-shrink: 0;

  color: #6b6b6b;

  transform: rotate(-90deg);
}

.language-dropdown__arrow--open {
  transform: rotate(0);
}

.language-dropdown__menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;

  width: 120px;
  margin: 0;
  padding: 0;

  list-style: none;
  border-radius: 10px;
  overflow: hidden;
}

.language-dropdown__option {
  margin: 0;
  padding: 0;
}

.language-dropdown__option-button {
  display: flex;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  height: 35px;
  padding: 0 16px;

  border: none;
  border-radius: 0;

  background: transparent;
  background: #131416;
  cursor: pointer;
}
</style>