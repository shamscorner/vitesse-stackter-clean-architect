<script setup lang="ts">
interface Props {
  isSelected?: boolean
  planTitle: string
  planCost: number
  planDuration: string
}
const props = withDefaults(defineProps<Props>(), {
  isSelected: false,
})
</script>

<template>
  <button
    class="flex items-center p-4 space-x-4 transition rounded-lg hover:ring-2 hover:ring-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
    :class="[
      props.isSelected
        ? 'ring-2 ring-teal-400 bg-teal-50 text-teal-600 dark:bg-gray-900'
        : 'bg-blue-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
    ]"
  >
    <div
      class="w-12 h-12 p-3 rounded-full"
      :class="[props.isSelected ? 'bg-teal-200 dark:bg-gray-800' : 'bg-blue-100 dark:bg-gray-700']"
    >
      <carbon-music class="inline-block" />
    </div>
    <div class="text-left">
      <div class="font-semibold">
        {{ props.planTitle }}
      </div>
      <div class="text-sm">
        ${{ props.planCost }} / {{ props.planDuration }}
      </div>
    </div>
  </button>
</template>
