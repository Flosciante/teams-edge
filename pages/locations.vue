<script setup lang="ts">
const { data: locations, pending } = useFetch<Locations[]>('/api/locations')

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

const locationToEdit = ref<Locations | null>(null)
const locationToDelete = ref<Locations | null>(null)
const openAddOrEditModal = ref(false)
const openDeleteModal = ref(false)
const page = ref(1)
const pageCount = 10

function closeAddOrEditModal() {
  openAddOrEditModal.value = false

  if (locationToEdit.value !== null)
    locationToEdit.value = null
}

function closeDeleteModal() {
  openDeleteModal.value = false

  if (locationToDelete.value !== null)
    locationToDelete.value = null
}

// table action items
function items(row: Locations) {
  return [
    [{
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => {
        locationToEdit.value = row
        openAddOrEditModal.value = true
      },
    }, {
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid',
      click: () => {
        locationToDelete.value = row
        openDeleteModal.value = true
      },
    }],
  ]
}

// table rows
const rows = computed(() => {
  return locations.value?.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
</script>

<template>
  <NuxtLayout>
    <template #headerInfos>
      <h1>Locations</h1>
    </template>

    <UCard :ui="{ body: 'p-0' }">
      <UTable
        :rows="rows" :columns="columns"
        :loading="pending" :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }" :progress="{ color: 'primary', animation: 'carousel' }"
      >
        <template #empty-state>
          <div class="flex flex-col items-center justify-center py-6 gap-3">
            <span class="italic text-sm">Locations not found</span>
            <UButton label="Add location" @click="openAddOrEditModal = true" />
          </div>
        </template>

        <template #actions-data="{ row }">
          <UDropdown :items="items(row)">
            <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
          </UDropdown>
        </template>
      </UTable>
    </UCard>
    <div v-if="locations && locations.length" class="flex justify-between items-center py-3.5">
      <UButton label="Add Locations" size="lg" icon="i-heroicons-plus" @click="openAddOrEditModal = true" />
      <UPagination v-model="page" :page-count="pageCount" :total="locations?.length" />
    </div>

    <UModal v-model="openAddOrEditModal">
      <AddEditLocation :location="locationToEdit" @close="closeAddOrEditModal" />
    </UModal>

    <UModal v-model="openDeleteModal">
      <DeleteLocation :location="locationToDelete!" @close="closeDeleteModal" />
    </UModal>
  </NuxtLayout>
</template>
