export function useLocations() {
  const loading = ref(false)

  const toast = useToast()

  async function addLocation(name: string) {
    loading.value = true

    await $fetch('/api/locations/', {
      method: 'POST',
      body: {
        name,
      },
    }).then(() => {
      toast.add({
        title: 'Location added',
        color: 'green',
      })
    }).catch((error) => {
      toast.add({
        title: 'Error when creating the location',
        description: error.data?.message || '',
        color: 'red',
      })
    })

    await refreshNuxtData()

    loading.value = false
  }

  async function editLocation(id: number, name: string) {
    loading.value = true

    await $fetch(`/api/locations/${id}`, {
      method: 'PATCH',
      body: {
        id,
        name,
      },
    }).then(() => {
      toast.add({
        title: 'Location edited',
        color: 'green',
      })
    }).catch((error) => {
      toast.add({
        title: 'Error when creating the location',
        description: error.data?.message || '',
        color: 'red',
      })
    })

    await refreshNuxtData()

    loading.value = false
  }

  async function deleteLocation(id: number) {
    loading.value = true

    await $fetch(`/api/locations/${id}`, {
      method: 'DELETE',
      body: {
        id,
      },
    }).then(() => {
      toast.add({
        title: 'Location deleted',
        color: 'green',
      })
    }).catch((error) => {
      toast.add({
        title: 'Error when deleting the location',
        description: error.data?.message || '',
        color: 'red',
      })
    })

    await refreshNuxtData()

    loading.value = false
  }

  return {
    loading,
    addLocation,
    editLocation,
    deleteLocation,
  }
}
