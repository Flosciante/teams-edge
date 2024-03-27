<script lang="ts" setup>
const { department } = defineProps({
  department: {
    type: Object as PropType<Departments>,
    required: true,
  },
})

const emit = defineEmits(['close'])

const { deleteDepartment, loading } = useDepartments()

async function deleteDpt() {
  await deleteDepartment(department.id)

  emit('close')
}
</script>

<template>
  <UCard v-if="department">
    <UButton class="absolute top-4 right-4" icon="i-heroicons-x-mark" variant="ghost" color="red" @click="emit('close')" />

    <span class="pr-12">
      {{ `Are you sure you want to delete the "${department.name}" Department` }}
    </span>

    <template #footer>
      <div class="w-full flex justify-end gap-x-2">
        <UButton label="Delete" type="submit" color="red" :loading="loading" @click="deleteDpt()" />
        <UButton label="Cancel" color="gray" @click="emit('close')" />
      </div>
    </template>
  </UCard>
</template>

<style>

</style>
