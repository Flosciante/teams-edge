<script lang="ts" setup>
defineProps({
  to: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Employees',
  },
})
</script>

<template>
  <div class="flex flex-col gap-y-4 h-full w-full items-center justify-center">
    <h2 class="text-3xl text-center">
      {{ `No ${label} found.` }}
    </h2>
    <UButton :label="`Add a ${label}`" :to="to" size="lg" />
  </div>
</template>
