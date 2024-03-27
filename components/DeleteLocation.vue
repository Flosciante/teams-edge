<script lang="ts" setup>
const { location } = defineProps({
  location: {
    type: Object as PropType<Locations>,
    required: true,
  },
})

const emit = defineEmits(['close'])

const { deleteLocation, loading } = useLocations()

async function deleteLoc() {
  await deleteLocation(location.id)

  emit('close')
}
</script>

<template>
  <UCard v-if="location">
    <UButton class="absolute top-4 right-4" icon="i-heroicons-x-mark" variant="ghost" color="red" @click="emit('close')" />

    <span class="pr-12">
      {{ `Are you sure you want to delete the "${location.name}" Location` }}
    </span>

    <template #footer>
      <div class="w-full flex justify-end gap-x-2">
        <UButton label="Delete" type="submit" color="red" :loading="loading" @click="deleteLoc()" />
        <UButton label="Cancel" color="gray" @click="emit('close')" />
      </div>
    </template>
  </UCard>
</template>
