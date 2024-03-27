<template>
  <div class="flex h-screen">
    <div class="w-[320px] border-r border-gray-300 dark:border-gray-800 flex flex-col justify-between">
      <div class="border-b border-gray-300 dark:border-gray-800 flex justify-between items-center p-4 h-28">
        <div class="flex flex-col gap-y-2">
          <h1 class="text-xl font-semibold">
            Nuxt Team<span class="text-primary-500 dark:text-primary-400"> Edge</span>
          </h1>
          <p class="text-gray-500 dark:text-gray-400">
            Manage your team within your organisation
          </p>
        </div>
      </div>
      <div class="p-4 h-full flex flex-col justify-between">
        <div class="flex flex-col gap-y-4 pt-4">
          <UButton label="Employees" variant="outline" :color="$route.fullPath === '/' ? 'primary' : 'gray'" size="lg" class="w-full flex items-center justify-center" to="/" />
          <UButton label="Locations" variant="outline" :color="$route.fullPath === '/locations' ? 'primary' : 'gray'" size="lg" class="w-full flex items-center justify-center" to="/locations" />
          <UButton label="Departments" variant="outline" :color="$route.fullPath === '/departments' ? 'primary' : 'gray'" size="lg" class="w-full flex items-center justify-center" to="/departments" />
        </div>
        <div>
          <ColorModeToggle />
        </div>
      </div>
    </div>
    <div v-if="$slots.default || $slots.headerInfos" class="w-full">
      <div class="h-28 border-b border-gray-300 dark:border-gray-800 text-5xl text-gray-900 dark:text-gray-100 font-semibold px-8 flex items-center">
        <slot name="headerInfos" />
      </div>
      <div v-if="$slots.default" class="h-[calc(100%-112px)] p-8">
        <slot />
      </div>
    </div>
  </div>
</template>
