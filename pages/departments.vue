<script setup lang="ts">
const { data: departments, pending } = useFetch<Departments[]>('/api/departments')

// table columns
const columns = [{
  key: 'id',
  label: 'Id',
}, {
  key: 'name',
  label: 'Name',
}, {
  key: 'actions',
}]

const departmentToEdit = ref<Departments | null>(null)
const departmentToDelete = ref<Departments | null>(null)
const openAddOrEditModal = ref(false)
const openDeleteModal = ref(false)
const page = ref(1)
const pageCount = 10

function closeAddOrEditModal() {
  if (departmentToEdit.value !== null)
    departmentToEdit.value = null

  openAddOrEditModal.value = false
}

function closeDeleteModal() {
  if (departmentToDelete.value !== null)
    departmentToDelete.value = null

  openDeleteModal.value = false
}

// table action items
function items(row: Departments) {
  return [
    [{
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => {
        departmentToEdit.value = row
        openAddOrEditModal.value = true
      },
    }, {
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid',
      click: () => {
        departmentToDelete.value = row
        openDeleteModal.value = true
      },
    }],
  ]
}

// table rows
const rows = computed(() => {
  return departments.value?.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
</script>

<template>
  <NuxtLayout>
    <template #headerInfos>
      <h1>Departements</h1>
    </template>

    <UCard :ui="{ body: 'p-0' }">
      <UTable
        :rows="rows" :columns="columns"
        :loading="pending" :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }" :progress="{ color: 'primary', animation: 'carousel' }"
      >
        <template #empty-state>
          <div class="flex flex-col items-center justify-center py-6 gap-3">
            <span class="italic text-sm">Departments not found</span>
            <UButton label="Add departments" @click="openAddOrEditModal = true" />
          </div>
        </template>

        <template #actions-data="{ row }">
          <UDropdown :items="items(row)">
            <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
          </UDropdown>
        </template>
      </UTable>
    </UCard>
    <div v-if="departments && departments.length" class="flex justify-between items-center py-3.5">
      <UButton label="Add Departments" size="lg" icon="i-heroicons-plus" @click="openAddOrEditModal = true" />
      <UPagination v-model="page" :page-count="pageCount" :total="departments?.length" />
    </div>

    <UModal v-model="openAddOrEditModal">
      <AddEditDepartment :department="departmentToEdit" @close="closeAddOrEditModal" />
    </UModal>

    <UModal v-model="openDeleteModal">
      <DeleteDepartment :department="departmentToDelete!" @close="closeDeleteModal" />
    </UModal>
  </NuxtLayout>
</template>
