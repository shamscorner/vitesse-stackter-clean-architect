<script setup lang="ts">
import { useUserStore } from '~/users/stores/user'
import { useOrderStore } from '~/orders/stores/order'

const router = useRouter()
const orderStore = useOrderStore()

// redirect to home if no order saved
if (!orderStore.savedPlanTitle)
  router.push('/')

const { t } = useI18n()
const userStore = useUserStore()
</script>

<template>
  <div class="max-w-md mx-auto">
    <carbon-pedestrian class="text-5xl text-teal-500 my-3 mx-auto" />

    <p class="mb-3">
      {{ t('intro.hi', { name: userStore.savedName }) }}
    </p>

    <v-title-lg>
      {{ t('order.thanks-message') }}
    </v-title-lg>

    <v-description
      class="my-5"
    >
      {{ t('order.plan-contact-info') }}
    </v-description>

    <PlanItem
      :plan-title="orderStore.savedPlanTitle"
      :plan-cost="orderStore.savedPlanCost"
      :plan-duration="orderStore.savedPlanDuration"
      :is-selected="true"
      class="w-full"
    />

    <v-description
      class="my-5"
    >
      {{ t('no-data-saved') }}
    </v-description>

    <div class="mb-8">
      <VButtonText
        class="text-gray-500 font-semibold px-4 py-2"
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
