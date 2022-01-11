<script setup lang="ts">
// graphql example
import { useExampleQuery } from '~/common/services/useExample.query'
const { result, loading, error } = useExampleQuery()

// Routing
const router = useRouter()
const go = () => {
  router.push('/users/home')
}

// Internationalization
const { t } = useI18n()
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a
        rel="noreferrer"
        href="https://github.com/antfu/vitesse"
        target="_blank"
        class="underline"
      >
        Vitesse
      </a>
    </p>
    <p class="mt-4 max-w-md mx-auto">
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <div class="py-4" />

    <div>
      <button
        class="m-3 text-sm btn"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>

    <div class="py-4" />

    <h1 class="text-lg underline font-semibold mb-3">
      <a href="https://v4.apollo.vuejs.org/" target="_blank">
        Vue Apollo GraphQL V4 (beta)
      </a>
    </h1>
    <div>
      <div v-if="loading">
        Loading. . .
      </div>
      <div v-else-if="error">
        Error: {{ error.message }}
      </div>
      <code v-else-if="result">
        {{ result }}
      </code>
    </div>
  </div>
</template>
