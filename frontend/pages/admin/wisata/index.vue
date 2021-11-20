<template>
  <AdminContent title="Destinasi Wisata">
    <AdminMap :lokasiWisata="markerWisata" />
    <nuxtLink
      to="/admin/wisata/tambah"
      class="
        bg-blue-500
        w-40
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
      <i class="fas fa-plus mr-3"></i> Tambah Data
    </nuxtLink>
    <div
      class="flex items-center justify-center overflow-hidden overflow-x-auto"
    >
      <div class="w-full">
        <div class="shadow-md rounded">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr
                class="
                  bg-gray-200
                  text-gray-600
                  uppercase
                  text-sm
                  leading-normal
                "
              >
                <th class="py-3 px-6 text-left">Nama Wisata</th>
                <th class="py-3 px-6 text-left">Galeri</th>
                <th class="py-3 px-6 text-left">Lat/Long</th>
                <th class="py-3 px-6 text-center">Daerah</th>
                <th class="py-3 px-6 text-center">Alamat</th>
                <th class="py-3 px-6 text-center">Fasilitas</th>
                <th class="py-3 px-6 text-center">Opsi</th>
              </tr>
            </thead>
            <tbody
              class="text-gray-600 text-sm font-light"
              v-if="wisata.length"
            >
              <tr
                class="border-b border-gray-200 hover:bg-gray-100"
                v-for="(wisata, index) in wisata"
                :key="index"
              >
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="mr-2">
                      <img
                        class="
                          w-6
                          h-6
                          rounded
                          border-gray-200 border
                          transform
                          hover:scale-125
                        "
                        :src="'http://localhost:7000/images/' + wisata.thumbnail"
                      />
                    </div>
                    <span class="font-medium">{{ wisata.name }}</span>
                  </div>
                </td>
                <td class="py-3 px-6">
                  <div class="flex items-center justify-start">
                    <img
                      class="
                        w-6
                        h-6
                        rounded
                        border-gray-200 border
                        transform
                        hover:scale-125
                      "
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                    />

                    <div
                      class="
                        w-4
                        mx-2
                        transform
                        hover:text-blue-600 hover:scale-110
                        cursor-pointer
                      "
                      title="Tambah foto galeri"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
                <td class="py-3 px-6 text-left">
                  {{ wisata.location.latitude }}/{{ wisata.location.longitude }}
                </td>
                <td class="py-3 px-6 text-center">
                  {{ wisata.location.district }}
                </td>
                <td class="py-3 px-6 text-center">
                  {{ wisata.location.address }}
                </td>
                <td class="py-3 px-6 text-center">
                  <span
                    v-for="(facility, index) in wisata.facilities"
                    :key="index"
                    class="
                      bg-gray-200
                      text-gray-600
                      py-1
                      px-3
                      rounded-full
                      text-xs
                      mx-1
                    "
                    >{{ facility }}</span
                  >
                </td>

                <td class="py-3 px-6 text-center">
                  <div class="flex item-center justify-center">
                    <div
                      class="
                        w-4
                        mr-2
                        transform
                        hover:text-blue-600 hover:scale-110
                        cursor-pointer
                      "
                      title="Lihat wisata"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <div
                      class="
                        w-4
                        mr-2
                        transform
                        hover:text-green-600 hover:scale-110
                        cursor-pointer
                      "
                      title="Ubah wisata"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                    <div
                      class="
                        w-4
                        mr-2
                        transform
                        hover:text-red-600 hover:scale-110
                        cursor-pointer
                      "
                      title="Hapus wisata"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody class="text-gray-600 text-sm font-light" v-else>
              <tr
                class="border-b border-gray-200 hover:bg-gray-100 text-center"
              >
                <td class="py-3 px-6 whitespace-nowrap" colspan="7">
                  Tidak ada data
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </AdminContent>
</template>

<script>
export default {
  head: {
    title: "Destinasi Wisata - TanGeo",
  },
  layout: "admin",
  middleware: ["auth"],
  data() {
    return {
      wisata: [],
      markerWisata: [],
    };
  },
  methods: {
    getData() {
      this.$store.dispatch("getDataWisata").then((res) => {
        this.wisata = res;

        res.map((wisata) => {
          this.markerWisata.push({
            nama: wisata.name,
            lokasi: {
              lat: wisata.location.latitude,
              long: wisata.location.longitude,
            },
            keterangan: wisata.description,
            image: wisata.thumbnail,
          });
        });
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
