<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <div class="max-w-md mx-auto">
    <v-title-lg>
      {{ t('order.order-summary') }}
    </v-title-lg>
    <p
      m="y-5"
      text="gray-500"
      dark="text-gray-400"
    >
      {{ t('order.description') }}
    </p>
    <div class="flex flex-col space-y-4">
      <PlanItem
        :plan-title="`${t('order.plans.annual')} ${t('order.plan')}`"
        :plan-cost="59.99"
        :plan-duration="t('order.year')"
      />
      <PlanItem
        :plan-title="`${t('order.plans.monthly')} ${t('order.plan')}`"
        :plan-cost="7.99"
        :plan-duration="t('order.month')"
        :is-selected="true"
      />
      <PlanItem
        :plan-title="`${t('order.plans.weekly')} ${t('order.plan')}`"
        :plan-cost="2.99"
        :plan-duration="t('order.week')"
      />
    </div>

    <div class="mb-0 mt-8">
      <VButton
        text="base"
        p="x-4 y-2"
      >
        {{ t('order.confirm-selected-plan') }}
      </VButton>
    </div>

    <div class="mb-8">
      <VButtonText
        text="gray-500"
        font="semibold"
        p="x-4 y-2"
        @click.self="router.back()"
      >
        {{ t('order.cancel-order') }}
      </VButtonText>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
