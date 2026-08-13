import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

import { CONTENT_DATA } from '../constants/text-content.ts';
import type { LanguageCode } from '../constants/languages';
import type { DeviceOS } from '../constants/operation-system-list';

function getDeviceType(): DeviceOS {
  const userAgent = navigator.userAgent;

  if (/android/i.test(userAgent)) {
    return 'android';
  }

  if (
    /iPad|iPhone|iPod/i.test(userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  ) {
    return 'ios';
  }

  return 'desktop';
}

export const useAppStore = defineStore('app', () => {
  const language = ref<LanguageCode>('en');
  const deviceType = ref<DeviceOS>(getDeviceType());

  const currentContent = computed(() => {
    return CONTENT_DATA[language.value];
  });

  return {
    language,
    deviceType,
    currentContent,
  };
});