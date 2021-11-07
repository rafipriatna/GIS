<template>
  <div class="lg:px-0 px-4 font-poppins">
    <Navbar />
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-10">
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
