export function useDepartments() {
  const loading = ref(false)

  const toast = useToast()

  async function addDepartment(name: string) {
    loading.value = true

    await $fetch('/api/departments/', {
      method: 'POST',
      body: {
        name,
      },
    }).then(() => {
      toast.add({
        title: 'Department added',
        color: 'green',
      })
    }).catch((error) => {
      toast.add({
        title: 'Error when creating the department',
        description: error.data?.message || '',
        color: 'red',
      })
    })

    await refreshNuxtData()

    loading.value = false
  }

  async function editDepartment(id: number, name: string) {
    loading.value = true

    await $fetch(`/api/departments/${id}`, {
      method: 'PATCH',
      body: {
        id,
        name,
      },
    }).then(() => {
      toast.add({
        title: 'Department edited',
        color: 'green',
      })
    }).catch((error) => {
      toast.add({
        title: 'Error when creating the department',
        description: error.data?.message || '',
        color: 'red',
      })
    })

    await refreshNuxtData()

    loading.value = false
  }

  async function deleteDepartment(id: number) {
    loading.value = true

    await $fetch(`/api/departments/${id}`, {
      method: 'DELETE',
      body: {
        id,
      },
    }).then(() => {
      toast.add({
        title: 'Department deleted',
        color: 'green',
      })
    }).catch((error) => {
      toast.add({
        title: 'Error when deleting the department',
        description: error.data?.message || '',
        color: 'red',
      })
    })

    await refreshNuxtData()

    loading.value = false
  }

  return {
    loading,
    addDepartment,
    editDepartment,
    deleteDepartment,
  }
}
