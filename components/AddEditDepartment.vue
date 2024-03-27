<script lang="ts" setup>
const { department } = defineProps({
  department: {
    type: Object as PropType<Departments | null>,
    default: () => ({}),
  },
})

const emit = defineEmits(['close'])

const form = reactive({ name: department ? department.name : '' })

const { addDepartment, editDepartment, loading } = useDepartments()

async function addOrEditDept() {
  department ? await editDepartment(department.id, form.name) : await addDepartment(form.name)

  emit('close')
}
</script>

<template>
  <UCard @submit.prevent="addOrEditDept()">
    <UButton class="absolute top-4 right-4" icon="i-heroicons-x-mark" variant="ghost" @click="emit('close')" />

    <template #header>
      <h2 class="text-xl font-semibold pr-6 pb-">
        {{ `${department ? 'Edit' : 'Add'} a department` }}
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
        <UButton :label="department ? 'Edit' : 'Add'" type="submit" :loading="loading" />
        <UButton label="cancel" color="gray" @click="emit('close')" />
      </div>
    </template>
  </UCard>
</template>
