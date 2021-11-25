<template>
  <div class="font-poppins">
    <div class="flex items-center justify-center lg:p-10">
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 w-full">
        <div
          class="flex justify-center items-center"
          v-for="(item, index) in wisata"
          :key="index"
        >
          <div
            class="
              cursor-pointer
              overflow-hidden
              transform
              hover:scale-105
              duration-500
            "
          >
            <img
              :src="'http://localhost:7000/images/' + item.thumbnail"
              class="object-cover rounded-lg w-96 h-96 lg:w-64 lg:h-64"
            />
            <h1 class="mt-4 font-bold text-lg">Telaga Cisoka</h1>
            <h2 class="text-gray-400 text-lg">Cisoka</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["wisata"],
};
</script>
