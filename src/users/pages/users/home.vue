<script setup lang="ts">
const { t } = useI18n()

const router = useRouter()

const name = ref('')
const email = ref('')

const choosePlans = () => {
  if (name.value && email.value)
    router.push(`/orders/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <h1 class="text-2xl text-gray-500 capitalize mt-4 mb-10">
      Fill up the form to proceed
    </h1>
    <div>
      <input
        id="inputName"
        v-model="name"
        :placeholder="t('intro.whats-your-name')"
        :aria-label="t('intro.whats-your-name')"
        type="text"
        autocomplete="false"
        p="x-4 y-2"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
      >
      <label class="hidden" for="inputName">{{ t('intro.whats-your-name') }}</label>
    </div>

    <div class="py-2" />

    <div>
      <input
        id="inputEmail"
        v-model="email"
        :placeholder="t('intro.whats-your-email')"
        :aria-label="t('intro.whats-your-email')"
        type="email"
        autocomplete="false"
        p="x-4 y-2"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
      >
      <label class="hidden" for="inputEmail">{{ t('intro.whats-your-email') }}</label>
    </div>

    <div class="mt-5">
      <VButton
        :disabled="!name || !email"
        @click.self="choosePlans"
      >
        {{ t('button.choose-plans') }}
      </VButton>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
