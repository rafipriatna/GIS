<template>
  <AdminContent title="Tambah Destinasi Wisata">
    <div class="flex gap-4 flex-col lg:flex-row">
      <div class="w-full bg-white shadow-lg lg:w-1/4">
        <div class="w-full flex-grow p-6">
          <h2 class="text-xl text-black pb-6">Thumbnail</h2>
          <img :src="imagePreview" class="object-cover rounded-lg" />
          <input
            type="file"
            class="mt-4 py-2 rounded px-2 outline-none"
            @change="onImageSelected"
          />
        </div>
      </div>
      <div class="w-full bg-white shadow-lg">
        <div class="w-full flex-grow p-6">
          <h2 class="text-xl text-black">Datail Wisata</h2>
          <div class="flex flex-wrap overflow-hidden sm:-mx-4">
            <div class="w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/3">
              <h3 class="text-lg text-black my-2">Data Wisata</h3>
              <div class="mb-4">
                <label class="block text-sm text-gray-600 pb-2"
                  >Nama Wisata</label
                >
                <input
                  class="
                    w-full
                    px-4
                    py-2
                    text-gray-700
                    bg-gray-200
                    rounded
                    outline-none
                  "
                  type="text"
                  required
                  placeholder="Nama Wisata"
                  v-model="name"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm text-gray-600 pb-2"
                  >Kategori Wisata</label
                >
                <select
                  class="
                    w-full
                    px-4
                    py-2
                    text-gray-700
                    bg-gray-200
                    rounded
                    outline-none
                  "
                  v-model="travel_category"
                >
                  <option
                    v-for="(tc, index) in travel_categories"
                    :key="index"
                    :value="tc"
                  >
                    {{ tc }}
                  </option>
                </select>
              </div>
              <div>
                <label class="block text-sm text-gray-600 pb-2"
                  >Fasilitas</label
                >
                <client-only>
                  <input-tags v-model="facilities">
                    <div
                      class="
                        w-full
                        px-4
                        py-2
                        text-gray-700
                        bg-gray-200
                        rounded
                        outline-none
                      "
                      slot-scope="{
                        removeTag,
                        inputEventHandlers,
                        inputBindings,
                      }"
                    >
                      <span
                        v-for="(facility, index) in facilities"
                        :key="index"
                        class="mr-2"
                      >
                        <span class="bg-blue-500 text-white px-2 rounded">{{
                          facility
                        }}</span>
                        <button
                          type="button"
                          class="text-red-500"
                          v-on:click="removeTag(facility)"
                        >
                          &times;
                        </button>
                      </span>
                      <input
                        placeholder="Cth: Parkir, WC Umum, ..."
                        class="bg-transparent outline-none"
                        v-on="inputEventHandlers"
                        v-bind="inputBindings"
                      />
                    </div>
                  </input-tags>
                </client-only>
              </div>
            </div>

            <div class="w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/3">
              <h3 class="text-lg text-black my-2">Lokasi Wisata</h3>
              <div class="mb-4">
                <div class="inline-block w-1/2 pr-1">
                  <label class="block text-sm text-gray-600 pb-2"
                    >Latitude</label
                  >
                  <input
                    class="
                      w-full
                      px-4
                      py-2
                      text-gray-700
                      bg-gray-200
                      rounded
                      outline-none
                    "
                    type="text"
                    required
                    placeholder="Latitude"
                    v-model="location.latitude"
                  />
                </div>
                <div class="inline-block -mx-1 pl-1 w-1/2">
                  <label class="block text-sm text-gray-600 pb-2"
                    >Longitude</label
                  >
                  <input
                    class="
                      w-full
                      px-4
                      py-2
                      text-gray-700
                      bg-gray-200
                      rounded
                      outline-none
                    "
                    type="text"
                    required
                    placeholder="Longitude"
                    v-model="location.longitude"
                  />
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-sm text-gray-600 pb-2">Daerah</label>
                <input
                  class="
                    w-full
                    px-4
                    py-2
                    text-gray-700
                    bg-gray-200
                    rounded
                    outline-none
                  "
                  type="text"
                  required
                  placeholder="Nama Daerah"
                  v-model="location.district"
                />
              </div>
              <div>
                <label class="block text-sm text-gray-600 pb-2">Alamat</label>
                <input
                  class="
                    w-full
                    px-4
                    py-2
                    text-gray-700
                    bg-gray-200
                    rounded
                    outline-none
                  "
                  type="text"
                  required
                  placeholder="Alamat Lengkap"
                  v-model="location.address"
                />
              </div>
            </div>

            <div class="w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/3">
              <h3 class="text-lg text-black my-2">Lainnya</h3>
              <div class="mb-4">
                <label class="block text-sm text-gray-600 pb-2"
                  >Keterangan</label
                >
                <textarea
                  class="
                    w-full
                    px-4
                    py-2
                    text-gray-700
                    bg-gray-200
                    rounded
                    outline-none
                  "
                  type="text"
                  required
                  v-model="description"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button
        @click="processItem"
        class="
          bg-blue-500
          w-32
          px-2
          text-white
          font-semibold
          py-2
          my-5
          shadow-lg
          rounded
          hover:shadow-xl hover:bg-blue-600
          flex
          items-center
          justify-center
        "
      >
        <i class="fas fa-save mr-3"></i> Simpan
      </button>
    </div>
  </AdminContent>
</template>

<script>
export default {
  head: {
    title: "Tambah Destinasi Wisata - TanGeo",
  },
  layout: "admin",
  middleware: ["auth"],
  data() {
    return {
      travel_categories: ["Wisata Air", "Cagar Alam", "Wisata Keluarga"],
      name: null,
      travel_category: null,
      facilities: [],
      location: {
        latitude: null,
        longitude: null,
        district: null,
        address: null,
      },
      description: null,
      thumbnail: null,
      imagePreview:
        "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",
    };
  },
  methods: {
    onImageSelected(event) {
      this.thumbnail = event.target.files[0];
      this.imagePreview =
        this.thumbnail != null
          ? URL.createObjectURL(this.thumbnail)
          : "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
    },
    processItem() {
      if (this.formValidation()) {
        const data = new FormData();

        this.facilities.forEach((item) =>
          data.append("facilities[]", item)
        );
        data.set("name", this.name);
        data.set("travel_category", this.travel_category);
        data.append("location", JSON.stringify(this.location));
        data.set("description", this.description);
        data.append("photo", this.thumbnail, this.thumbnail.name);

        this.$store.dispatch("tambahDataWisata", data).then((res) => {
          this.$swal("Mantappu");
          console.log(res);
        });
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Harap isi semua form yang telah disediakan.",
        });
      }
    },
    formValidation() {
      if (
        this.name == null ||
        this.name == "" ||
        this.travel_category == null ||
        this.travel_category == "" ||
        this.facilities == null ||
        this.facilities == "" ||
        this.location == null ||
        this.location == "" ||
        this.description == null ||
        this.description == "" ||
        (this.thumbnail == null) | (this.thumbnail == "")
      )
        return false;

      return true;
    },
  },
};
</script>
