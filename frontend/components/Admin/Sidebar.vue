<template>
  <aside class="relative bg-blue-600 h-screen w-64 hidden sm:block shadow-xl">
    <div class="p-6">
      <a
        href="index.html"
        class="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >Admin</a
      >
      <button
        class="
          w-full
          bg-white
          text-blue-600
          font-semibold
          py-2
          mt-5
          rounded-br-lg rounded-bl-lg rounded-tr-lg
          shadow-lg
          hover:shadow-xl hover:bg-gray-300
          flex
          items-center
          justify-center
        "
      >
        <i class="fas fa-plus mr-3"></i> New Report
      </button>
    </div>
    <nav class="text-white text-base font-semibold pt-3">
      <a
        href="index.html"
        class="flex items-center bg-blue-800 text-white py-4 pl-6"
      >
        <i class="fas fa-tachometer-alt mr-3"></i>
        Dashboard
      </a>
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
