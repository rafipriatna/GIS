<template>
  <AdminContent title="Dashboard">
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
