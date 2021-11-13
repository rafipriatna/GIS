<template>
  <div
    class="
      h-screen
      bg-white
      flex flex-col
      space-y-10
      justify-center
      items-center
    "
  >
    <!-- Layout  -->
    <div class="bg-white w-96 shadow-xl rounded p-5">
      <h1 class="text-3xl font-medium">TanGeo Admin</h1>
      <p class="text-sm">Silakan masuk 😘</p>
      <ErrorAlert v-if="error" :pesan="error" />
      <form @submit="login" method="post" class="space-y-5 mt-5">
        <input
          type="text"
          class="w-full h-12 border border-gray-800 rounded px-3 outline-none"
          placeholder="Alamat email"
          v-model="email"
        />
        <div
          class="w-full flex items-center border border-gray-800 rounded px-3"
        >
          <input
            :type="tipePassword"
            class="w-4/5 h-12 outline-none"
            placeholder="Kata sandi"
            v-model="password"
          />
          <span
            class="
              text-blue-700
              hover:bg-blue-400
              rounded-full
              px-3
              cursor-pointer
            "
            @click="tampilkankataSandi"
            >{{ tampilkansandi }}</span
          >
        </div>

        <div class="">
          <a
            href="#!"
            class="font-medium text-blue-700 hover:bg-blue-300 rounded-full p-2"
            @click="lupaKataSandi"
            >Lupa kata sandi?</a
          >
        </div>

        <button
          class="
            text-center
            w-full
            bg-blue-700
            rounded-full
            text-white
            py-3
            font-medium
          "
          @click="login"
        >
          Masuk
        </button>
      </form>
    </div>

    <!-- Footer -->
    <p>
      Bukan admin? Silakan
      <a href="/" class="text-blue-700 font-medium">balik ke halaman beranda</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  head: {
    title: "Admin Login",
  },
  middleware: "guest",
  data() {
    return {
      tipePassword: "password",
      tampilkansandi: "tampilkan",
      email: null,
      password: null,
      error: null,
    };
  },
  methods: {
    lupaKataSandi() {
      alert(
        "Lupa kata sandi? Coba diinget-inget lagi, soalnya backend devnya ga bikin fitur reset kata sandi 😅"
      );
    },
    tampilkankataSandi() {
      this.tipePassword == "password"
        ? (this.tipePassword = "text")
        : (this.tipePassword = "password");
      this.tampilkansandi == "tampilkan"
        ? (this.tampilkansandi = "sembunyikan")
        : (this.tampilkansandi = "tampilkan");
    },
    async login(e) {
      e.preventDefault();
      if (this.formValidation()) {
        await this.$auth
          .loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          .then(() => {
            this.$router.push("/admin");
          })
          .catch((e) => {
            this.error = e.response.data.message;
          });
      } else {
        this.error = "Harap isi semua form yang disediakan.";
      }
    },
    formValidation() {
      if (
        this.email == null ||
        this.email == "" ||
        this.password == null ||
        this.password == ""
      )
        return false;
      return true;
    },
  },
};
</script>
