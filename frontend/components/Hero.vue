<template>
  <div class="font-poppins">
    <!-- container -->
    <div class="container mx-auto">
      <!-- hero wrapper -->
      <div
        class="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
      >
        <!-- hero text -->
        <div class="col-span-5">
          <h1 class="text-3xl max-w-xl font-semibold text-gray-900">
            Temukan destinasi menarik di <br/> Kota Tangerang!
          </h1>
          <!-- <hr class="w-12 h-1 bg-orange-500 rounded-full mt-8" /> -->
          <p class="text-gray-400 text-lg mt-8 max-w-md">
            TanGeo hadir untuk memudahkan hidup Anda dalam menemukan destinasi
            wisata di Kota Tangerang.
          </p>

          <div class="flex flex-row my-10 gap-10">
            <div>
              <h6 class="font-bold text-4xl">18</h6>
              <p class="text-gray-400 font-light text-xl">Wisata Air</p>
            </div>
            <div>
              <h6 class="font-bold text-4xl">52</h6>
              <p class="text-gray-400 font-light text-xl">Wisata Keluarga</p>
            </div>
            <div>
              <h6 class="font-bold text-4xl">14</h6>
              <p class="text-gray-400 font-light text-xl">Cagar Alam</p>
            </div>
          </div>

          <a
            href=""
            class="
              bg-indigo-500
              text-white
              text-lg
              px-4
              py-2
              transition
              duration-300
              ease-in-out
              hover:bg-indigo-600
              mr-6
              shadow-xl
            "
          >
            Cari Destinasi
          </a>
        </div>

        <div class="hidden lg:block col-span-7">
          <img src="~assets/img/hero_map.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
