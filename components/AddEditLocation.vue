<script lang="ts" setup>
const { location } = defineProps({
  location: {
    type: Object as PropType<Locations | null>,
    default: () => ({}),
  },
})

const emit = defineEmits(['close'])

const form = reactive({ name: location ? location.name : '' })

const { addLocation, editLocation, loading } = useLocations()

async function addOrEditLoc() {
  location ? await editLocation(location.id, form.name) : await addLocation(form.name)

  emit('close')
}
</script>

<template>
  <UCard @submit.prevent="addOrEditLoc()">
    <UButton class="absolute top-4 right-4" icon="i-heroicons-x-mark" variant="ghost" @click="emit('close')" />

    <template #header>
      <h2 class="text-xl font-semibold pr-6 pb-">
        {{ `${location ? 'Edit' : 'Add'} a location` }}
      </h2>
    </template>

    <div class="flex flex-col gap-4">
      <UFormGroup>
        <UInput
          v-model="form.name"
          type="text"
          required
          placeholder="Name"
        />
      </UFormGroup>
    </div>

    <template #footer>
      <div class="w-full flex justify-end gap-x-2">
        <UButton :label="location ? 'Edit' : 'Add'" type="submit" :loading="loading" />
        <UButton label="cancel" color="gray" @click="emit('close')" />
      </div>
    </template>
  </UCard>
</template>
