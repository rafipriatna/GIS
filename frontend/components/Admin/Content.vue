<template>
  <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
    <main class="w-full flex-grow p-6">
      <h1 class="text-3xl text-black pb-6">{{ title }}</h1>
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
