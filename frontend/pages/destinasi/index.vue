<template>
  <div>
    <Map class="h-1/2" :lokasiWisata="lokasiWisata" />
  </div>
</template>

<script>
export default {
  layout: "visitor",
  data() {
    return {
      lokasiWisata: [],
    };
  },
  methods: {
    getData() {
      this.$store.dispatch("getWisataPengunjung").then((res) => {
        this.lokasiWisata = res
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
