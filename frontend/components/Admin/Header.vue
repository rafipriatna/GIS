<template>
  <div>
    <!-- Desktop Header -->
    <header
      class="
        w-full
        items-center
        bg-gray-100
        py-2
        px-6
        hidden
        sm:flex
        border border-b-2
      "
    >
      <div class="w-1/2"></div>
      <div class="relative w-1/2 flex justify-end">
        <button
          @click="isRightNavClicked = !isRightNavClicked"
          class="
            relative
            z-10
            h-12
            px-2
            rounded
            hover:bg-blue-600 hover:text-white
          "
        >
          {{ this.name }}
        </button>
        <div
          v-if="isRightNavClicked"
          class="absolute w-32 rounded-lg shadow-lg py-2 mt-16"
        >
          <a
            @click="logout"
            href="#"
            class="block px-4 py-2 hover:text-white hover:bg-blue-600"
            >Keluar</a
          >
        </div>
      </div>
    </header>

    <!-- Mobile Header & Nav -->
    <header class="w-full bg-blue-800 py-5 px-6 sm:hidden">
      <div class="flex items-center justify-between">
        <a
          href="index.html"
          class="
            text-white text-3xl
            font-semibold
            uppercase
            hover:text-gray-300
          "
          >Admin</a
        >
        <button
          @click="mobileNavClicked"
          class="text-white text-3xl focus:outline-none"
          v-html="navMobileIcon"
        ></button>
      </div>

      <!-- Dropdown Nav -->
      <nav :class="isMobile ? 'flex' : 'hidden'" class="flex flex-col pt-4">
        <a
          href="index.html"
          class="
            flex
            items-center
            text-white
            opacity-75
            hover:opacity-100
            py-2
            pl-4
            nav-item
          "
        >
          <i class="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </a>
        <a
          @click="logout"
          href="#"
          class="
            flex
            items-center
            text-white
            opacity-75
            hover:opacity-100
            py-2
            pl-4
            nav-item
          "
        >
          <i class="fas fa-sign-out-alt mr-3"></i>
          Keluar
        </a>
        <button
          class="
            w-full
            bg-white
            cta-btn
            font-semibold
            py-2
            mt-3
            rounded-lg
            shadow-lg
            hover:shadow-xl hover:bg-gray-300
            flex
            items-center
            justify-center
          "
        >
          <i class="fas fa-arrow-circle-up mr-3"></i> Upgrade to Pro!
        </button>
      </nav>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
  data() {
    return {
      name: null,
      isMobile: false,
      isRightNavClicked: false,
      navMobileIcon: "<i class='fas fa-bars'></i>",
    };
  },
  methods: {
    getData() {
      this.name = JSON.parse(JSON.stringify(this.loggedInUser)).name;
    },
    mobileNavClicked() {
      this.isMobile = !this.isMobile;
      this.navMobileIcon =
        this.navMobileIcon == "<i class='fas fa-bars'></i>"
          ? "<i class='fas fa-times'></i>"
          : "<i class='fas fa-bars'></i>";
    },
    async logout(e) {
      e.preventDefault();
      await this.$auth.logout();
      this.$router.push("/");
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
