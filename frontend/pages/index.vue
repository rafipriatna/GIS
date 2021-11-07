<template>
  <div class="lg:px-0 px-4">
    <Navbar />
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10">
      <Hero />
      <Brands />
      <WisataPopuler />
      <Map />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var section = this.$router.currentRoute.hash.replace("#", "");
    if (section)
      this.$nextTick(() =>
        window.document.getElementById(section).scrollIntoView()
      );
  },
};
</script>
