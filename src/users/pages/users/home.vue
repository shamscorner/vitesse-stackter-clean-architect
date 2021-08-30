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
  <div class="max-w-md mx-auto">
    <v-title-lg>
      {{ t('intro.fill-up-form') }}
    </v-title-lg>

    <div class="py-4" />

    <div>
      <v-input
        id="inputName"
        v-model="name"
        typeof="text"
        :placeholder="t('intro.whats-your-name')"
        :aria-label="t('intro.whats-your-name')"
      >
        <label class="hidden" for="inputName">{{ t('intro.whats-your-name') }}</label>
      </v-input>
    </div>

    <div class="py-2" />

    <div>
      <v-input
        id="inputEmail"
        v-model="email"
        typeof="email"
        :placeholder="t('intro.whats-your-email')"
        :aria-label="t('intro.whats-your-email')"
      >
        <label class="hidden" for="inputEmail">{{ t('intro.whats-your-email') }}</label>
      </v-input>
    </div>

    <div class="mt-5">
      <VButton
        text="base"
        p="x-4 y-2"
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
