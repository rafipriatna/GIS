<template>
  <aside class="relative bg-blue-600 h-screen w-64 hidden sm:block shadow-xl">
    <div class="p-6">
      <nuxtLink
        to="/admin"
        class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >Admin</nuxtLink
      >
    </div>
    <nav class="text-white text-base font-semibold pt-3">
      <nuxtLink
        to="/admin"
        class="flex items-center text-white py-4 pl-6 hover:bg-blue-800"
        exact-active-class="bg-blue-900"
      >
        <i class="fas fa-tachometer-alt mr-3"></i>
        Dashboard
      </nuxtLink>
      <nuxtLink
        to="/admin/wisata"
        class="flex items-center text-white py-4 pl-6 hover:bg-blue-800"
        exact-active-class="bg-blue-900"
      >
        <i class="fas fa-map-marked-alt mr-3"></i>
        Destinasi Wisata
      </nuxtLink>
    </nav>
    <a
      href="#"
      class="
        absolute
        w-full
        bottom-0
        bg-blue-800
        text-white
        flex
        items-center
        justify-center
        py-4
      "
    >
      <i class="fas fa-arrow-circle-up mr-3"></i>
      Upgrade to Pro!
    </a>
  </aside>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

export default {};
</script>
