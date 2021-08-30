<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <div class="max-w-md mx-auto">
    <carbon-pedestrian text="5xl teal-500" m="y-3" />

    <v-title-lg>
      {{ t('order.thanks-message') }}
    </v-title-lg>

    <v-description
      m="y-5"
    >
      {{ t('order.plan-contact-info') }}
    </v-description>

    <v-description
      m="y-5"
    >
      {{ t('no-data-saved') }}
    </v-description>

    <div class="mb-8">
      <VButtonText
        text="gray-500"
        font="semibold"
        p="x-4 y-2"
        @click.self="router.push('/')"
      >
        {{ t('button.home') }}
      </VButtonText>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
