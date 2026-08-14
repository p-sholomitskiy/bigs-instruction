import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '../pages/home-page.vue';
import { DEFAULT_LANGUAGE, LANGUAGES } from '../constants/languages.ts';

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: '/:locale',
      component: HomePage,

      beforeEnter: (to) => {
        const isValidLocale = LANGUAGES.some(
          (language) => language.code === to.params.locale,
        );

        if (!isValidLocale) {
          return `/${DEFAULT_LANGUAGE}`;
        }

        return true;
      },
    },

    {
      path: '/',
      redirect: `/${DEFAULT_LANGUAGE}`,
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: `/${DEFAULT_LANGUAGE}`,
    },
  ],
});

export default router;