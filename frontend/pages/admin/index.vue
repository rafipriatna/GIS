<template>
  <AdminContent title="Dashboard"> Bejir </AdminContent>
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
