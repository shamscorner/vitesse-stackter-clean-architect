<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="max-w-md mx-auto">
    <h1
      text="2xl gray-700"
      font="bold"
      dark="text-gray-300"
    >
      {{ t('order.order-summary') }}
    </h1>
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

    <VButton m="y-8" text="base" p="x-4 y-2">
      {{ t('order.confirm-selected-plan') }}
    </VButton>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
