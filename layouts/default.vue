<template>
  <div class="flex h-screen">
    <div class="w-[320px] border-r border-gray-300 dark:border-gray-800 flex flex-col justify-between">
      <div class="border-b border-gray-300 dark:border-gray-800 flex justify-between items-center p-4">
        <div class="flex flex-col gap-y-2">
          <h1 class="text-xl font-semibold">
            Nuxt Team<span class="text-primary-500 dark:text-primary-400"> Edge</span>
          </h1>
          <p class="text-gray-500 dark:text-gray-400">
            Manage your teams within your organisation
          </p>
        </div>
      </div>
      <div class="p-4">
        <ColorModeToggle />
      </div>
    </div>
    <slot />
  </div>
</template>
