<template>
  <AdminContent title="Destinasi Wisata">
    <AdminMap :lokasiWisata="wisata" />
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
                        :src="
                          serverURL + '/images/' + wisata.thumbnail
                        "
                      />
                    </div>
                    <span class="font-medium">{{ wisata.name }}</span>
                  </div>
                </td>
                <td class="py-3 px-6">
                  <div class="flex items-center justify-start">
                    <template v-if="wisata.galleries.length > 0">
                      <img
                        v-for="(item, index) in wisata.galleries.slice(0, 3)"
                        :key="index"
                        class="
                          w-6
                          h-6
                          rounded
                          border-gray-200 border
                          transform
                          hover:scale-125
                        "
                        :src="serverURL + '/images/' + item.file"
                      />
                    </template>

                    <div
                      class="
                        w-4
                        mx-2
                        transform
                        hover:text-blue-600 hover:scale-110
                        cursor-pointer
                      "
                      title="Tambah foto galeri"
                      @click="openGallery(index)"
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
                    <nuxtLink
                      :to="'/admin/wisata/' + wisata._id"
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
                    </nuxtLink>
                    <div
                      class="
                        w-4
                        mr-2
                        transform
                        hover:text-red-600 hover:scale-110
                        cursor-pointer
                      "
                      title="Hapus wisata"
                      @click="hapusWisata(wisata._id, wisata.name)"
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

    <modal
      name="gallery"
      :min-width="200"
      :min-height="200"
      :scrollable="true"
      :reset="true"
      @closed="refreshData"
      width="60%"
      height="auto"
    >
      <div class="mx-4 my-4">
        <h1 class="text-lg">Galeri</h1>
        <VueFileAgent
          ref="vueFileAgent"
          :multiple="true"
          :deletable="true"
          :meta="false"
          :accept="'image/*'"
          :errorText="{
            type: 'Ndak bisa, cuma boleh upload gambar.',
            size: 'Files should not exceed 10MB in size',
          }"
          @select="filesSelected($event)"
          @beforedelete="onBeforeDelete($event)"
          @delete="fileDeleted($event)"
          v-model="fileRecords"
        >
          <template v-slot:file-preview-new>
            <div
              key="new"
              class="
                file-preview-wrapper
                grid-box-item grid-block
                file-preview-new
                object-none object-center
                text-blue-200
                bg-blue-600
                rounded
              "
            >
              <span class="file-preview"
                ><span
                  style="
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="h-20 w-20 mx-auto mt-20 bg-transparent"
                    style="fill: transparent"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>

                  <span>Klik atau jatuhkan foto ke sini.</span>
                </span></span
              >
            </div>
          </template>
        </VueFileAgent>
        <button
          class="
            my-4
            px-2
            py-2
            text-blue-200
            bg-blue-600
            hover:bg-blue-700
            focus:outline-none
            focus:ring-2
            focus:ring-blue-600
            focus:ring-opacity-50
          "
          :disabled="!fileRecordsForUpload.length"
          @click="uploadFiles()"
        >
          Upload {{ fileRecordsForUpload.length }} files
        </button>
      </div>
    </modal>
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
      fileRecords: [],
      fileRecordsForUpload: [],
      idWisata: null,
      serverURL: this.$config.serverURL,
    };
  },
  methods: {
    getData() {
      this.$store.dispatch("getDataWisata").then((res) => {
        res.map((item) => {
          let gallery = [];
          // Looping foto ke gallery
          item.galleries.map((file) => {
            gallery.push({
              file: file.photo,
              url: `${this.serverURL}/images/${file.photo}`,
              name: file.photo,
              type: "image/jpeg",
              ext: "jpg",
            });
          });
          this.wisata.push({
            _id: item._id,
            name: item.name,
            location: {
              latitude: item.location.latitude,
              longitude: item.location.longitude,
              district: item.location.district,
              address: item.location.address,
            },
            description: item.description,
            facilities: item.facilities,
            thumbnail: item.thumbnail,
            category: item.travel_category,
            galleries: gallery,
          });
        });
      });
    },
    filesSelected: function (fileRecordsNewlySelected) {
      var validFileRecords = fileRecordsNewlySelected.filter(
        (fileRecord) => !fileRecord.error
      );
      this.fileRecordsForUpload =
        this.fileRecordsForUpload.concat(validFileRecords);
    },
    uploadFiles() {
      const token = localStorage.getItem("auth._token.local");
      this.$refs.vueFileAgent.upload(
        `${this.serverURL}api/admin/wisata/upload/${
          this.wisata[this.idWisata]._id
        }`,
        { Authorization: token },
        this.fileRecordsForUpload
      );
      this.fileRecordsForUpload = [];
    },
    onBeforeDelete: function (fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
        var k = this.fileRecords.indexOf(fileRecord);
        if (k !== -1) this.fileRecords.splice(k, 1);
      } else {
        if (confirm("Yakin mau hapus foto ini??")) {
          this.$refs.vueFileAgent.deleteFileRecord(fileRecord);
        }
      }
    },
    fileDeleted: function (fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord);
      if (i !== -1) {
        this.fileRecordsForUpload.splice(i, 1);
      } else {
        this.deleteUploadedFile(fileRecord);
      }
    },
    deleteUploadedFile: function (fileRecord) {
      this.$axios.post(
        `/admin/wisata/delete/${this.wisata[this.idWisata]._id}`,
        fileRecord
      );
    },
    openGallery(id) {
      this.idWisata = id;
      this.fileRecords = this.wisata[id].galleries;
      this.$modal.show("gallery");
    },
    refreshData() {
      this.wisata = [];
      this.getData();
    },
    hapusWisata(id, nama) {
      this.$swal({
        title: `Hapus ${nama}?`,
        text: "Hati-hati! Data yang sudah dihapus nggak bisa dikembalikan lagi.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Iya, hapus aja",
        cancelButtonText: "Nggak jadi",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store
            .dispatch("hapusDataWisata", id)
            .then(() => {
              this.$swal(
                "Terhapus!",
                "Yay! Data kamu udah hilang 😁",
                "success"
              );
              this.refreshData();
            })
            .catch(() => {
              this.$swal(
                "Error!",
                "Waduh, nggak bisa ngehapus data kamu, nih! 😅",
                "error"
              );
            });
        }
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
