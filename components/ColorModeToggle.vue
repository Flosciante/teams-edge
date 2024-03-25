<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const colorMode = useColorMode()

// Computed
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UToggle
      v-model="isDark"
      on-icon="i-heroicons-moon-16-solid"
      off-icon="i-heroicons-sun"
      :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    />

    <template #fallback>
      <UToggle
        v-bind="$attrs"
        on-icon="i-heroicons-moon-16-solid"
        off-icon="i-heroicons-sun"
        :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
        disabled
      />
    </template>
  </ClientOnly>
</template>
