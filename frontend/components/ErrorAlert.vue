<template>
  <div class="bg-red-200 relative text-red-500 py-3 px-3 rounded-lg my-4">
    {{ pesan }}
  </div>
</template>

<script>
export default {
  props: ["pesan"],
};
</script>
