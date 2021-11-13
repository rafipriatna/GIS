<template>
  <div class="flex font-poppins">
    <AdminSidebar />
    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
      <AdminHeader />

      <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main class="w-full flex-grow p-6">
          <h1 class="text-3xl text-black pb-6">{{ title }}</h1>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
