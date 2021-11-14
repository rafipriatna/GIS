<template>
  <AdminContent title="Tambah Destinasi Wisata">
    <div class="flex gap-4 flex-col lg:flex-row">
      <div class="w-full bg-white shadow-lg lg:w-1/4">
        <div class="w-full flex-grow p-6">
          <h2 class="text-xl text-black pb-6">Thumbnail</h2>
          <img
            src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
            class="object-cover rounded-lg"
          />
          <input
            type="file"
            class="mt-4 py-2 border border-gray-800 rounded px-2 outline-none"
            placeholder="Thumbnail"
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
                <label class="block text-sm text-gray-00 pb-2"
                  >Nama Wisata</label
                >
                <input
                  class="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                  type="text"
                  required
                  placeholder="Nama Wisata"
                />
              </div>
              <div class="mb-4">
                <label class="block text-sm text-gray-00 pb-2"
                  >Kategori Wisata</label
                >
                <select
                  class="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                >
                  <option value="Wisata Air">Wisata Air</option>
                  <option value="Wisata Keluarga">Wisata Keluarga</option>
                  <option value="Cagar Alam">Cagar Alam</option>
                </select>
              </div>
              <div>
                <label class="block text-sm text-gray-00 pb-2">Fasilitas</label>
                <input
                  class="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                  type="text"
                  required
                  placeholder="Cth: Parkir, WC Umum, ..."
                />
              </div>
            </div>

            <div class="w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/3">
              <h3 class="text-lg text-black my-2">Lokasi Wisata</h3>
              <div class="mb-4">
                <label class="block text-sm text-gray-00 pb-2"
                  >Latitude/Longitude</label
                >
                <div class="inline-block w-1/2 pr-1">
                  <label class="hidden block text-sm text-gray-600"
                    >Latitude</label
                  >
                  <input
                    class="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                    type="text"
                    required=""
                    placeholder="Latitude"
                  />
                </div>
                <div class="inline-block -mx-1 pl-1 w-1/2">
                  <label class="hidden block text-sm text-gray-600"
                    >Longitude</label
                  >
                  <input
                    class="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                    type="text"
                    required
                    placeholder="Longitude"
                  />
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-sm text-gray-00 pb-2">Daerah</label>
                <input
                  class="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                  type="text"
                  required
                  placeholder="Nama Daerah"
                />
              </div>
              <div>
                <label class="block text-sm text-gray-00 pb-2">Alamat</label>
                <input
                  class="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                  type="text"
                  required
                  placeholder="Alamat Lengkap"
                />
              </div>
            </div>

            <div class="w-full overflow-hidden sm:my-4 sm:px-4 sm:w-1/3">
              <h3 class="text-lg text-black my-2">Lainnya</h3>
              <div class="mb-4">
                <label class="block text-sm text-gray-00 pb-2"
                  >Keterangan</label
                >
                <textarea
                  class="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded"
                  type="text"
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button
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
};
</script>
