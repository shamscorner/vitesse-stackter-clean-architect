<script setup lang="ts">
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './common/ApolloClient'
import { isDark, preferredDark } from '~/common/composables'

// https://v4.apollo.vuejs.org/
provide(DefaultApolloClient, apolloClient)

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse Stackter',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template with modular architecture design' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
