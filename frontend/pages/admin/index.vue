<template>
  <AdminContent class="text-center" title="Selamat Datang Admin">
  </AdminContent>
</template>

<script>
export default {
  head: {
    title: "Dashboard - TanGeo",
  },
  layout: "admin",
  middleware: ["auth"],
};
</script>
