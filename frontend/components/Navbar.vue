<template>
  <nav class="font-poppins">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 md:my-5">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            @click="mobileMenuClick"
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-600
              hover:font-bold
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
              transition-all ease-out duration-700
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-start
            sm:items-stretch sm:justify-start
          "
        >
          <div class="flex-shrink-0 flex">
            <div class="text-3xl">TanGeo</div>
          </div>
        </div>
        <div
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            sm:static sm:inset-auto sm:ml-6 sm:pr-0
            hidden
            sm:block sm:ml-6
            text-xl
          "
        >
          <div class="flex space-x-10">
            <a
              href="#"
              class="
                text-gray-600
                px-3
                py-2
                rounded-md
                font-medium
                hover:font-bold hover:text-gray-900
              "
              aria-current="page"
              >Beranda</a
            >

            <a
              href="#"
              class="
                text-gray-600
                hover:font-bold hover:text-gray-900
                px-3
                py-2
                rounded-md
                font-medium
              "
              >Tentang</a
            >

            <a
              href="#"
              class="
                text-gray-600
                hover:font-bold hover:text-gray-900
                px-3
                py-2
                rounded-md
                font-medium
              "
              >Destinasi</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" v-if="mobileMenuClicked">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          href="#"
          class="
            bg-gray-900
            text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
          "
          aria-current="page"
          >Beranda</a
        >

        <a
          href="#"
          class="
            text-gray-600
            hover:font-bold hover:text-gray-900
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
          "
          >Tentang</a
        >

        <a
          href="#"
          class="
            text-gray-600
            hover:font-bold hover:text-gray-900
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
          "
          >Destinasi</a
        >
      </div>
    </div>
  </nav>
</template>

<script>

export default({
  data() {
    return {
      mobileMenuClicked: false
    }
  },
  methods: {
    mobileMenuClick(){
      this.mobileMenuClicked = !this.mobileMenuClicked
    }
  }
})
</script>

