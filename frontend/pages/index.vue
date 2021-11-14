<template>
  <div>
    <Hero />
    <Brands />
    <h1 class="text-4xl text-center font-bold my-5">
      Destinasi Wisata Populer
    </h1>
    <p class="text-gray-400 text-center text-lg mb-10">
      Mulai dari wisata keluarga hingga <br />
      taman bermain.
    </p>
    <Destinasi />
    <h1 class="text-4xl font-bold text-center my-20">Destinasi Wisata</h1>
    <Map class="h-screen" />
  </div>
</template>

<script>
export default {
  layout: "visitor",
  mounted() {
    var section = this.$router.currentRoute.hash.replace("#", "");
    if (section)
      this.$nextTick(() =>
        window.document.getElementById(section).scrollIntoView()
      );
  },
};
</script>
