<template>
  <div class="font-poppins">
    <h1 class="text-4xl font-bold text-center my-20">Destinasi Wisata</h1>
    <section class="text-gray-600 body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <no-ssr>
          <l-map
            :zoom="map.zoom"
            :center="map.center"
            :options="{ attributionControl: false }"
          >
            <l-tile-layer :url="map.url"></l-tile-layer>
            <l-geo-json :geojson="map.geoJSON"></l-geo-json>
            <l-control-attribution
              position="bottomright"
              :prefix="map.attribution"
            ></l-control-attribution>
            <l-marker
              v-for="(wisata, index) in lokasiWisata"
              :key="index"
              @click="greet(wisata)"
              :lat-lng="[wisata.lokasi.lat, wisata.lokasi.long]"
            >
              <l-icon
                icon-url="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png"
              ></l-icon>
            </l-marker>
            <l-layer-group ref="marker">
              <l-popup :options="{ offset: [1, -20] }">{{
                marker.keterangan
              }}</l-popup>
            </l-layer-group>
          </l-map>
        </no-ssr>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div
          class="
            lg:w-1/3
            md:w-1/2
            bg-white
            rounded-lg
            p-8
            flex flex-col
            md:ml-auto
            w-full
            mt-10
            md:mt-0
            relative
            z-10
            shadow-md
          "
        >
          <h2 class="text-gray-900 text-lg mb-1 font-medium mb-5 text-center">
            Destinasi
          </h2>

          <input
            class="
              shadow
              appearance-none
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            type="text"
            placeholder="Cari destinasi"
            v-model="cariLokasiWisata"
          />

          <div class="overflow-auto h-64">
            <div
              v-if="filteredWisata.length > 0"
              class="
                container
                mx-auto
                max-w-sm
                flex flex-col
                justify-center
                items-center
              "
            >
              <div
                v-for="(wisata, index) in filteredWisata"
                :key="index"
                @click="greet(wisata)"
                class="
                  bg-white
                  w-full
                  flex
                  items-center
                  p-2
                  my-2
                  rounded-xl
                  shadow
                  border
                  cursor-pointer
                "
              >
                <div class="flex items-center space-x-4">
                  <img
                    :src="wisata.image"
                    :alt="wisata.nama"
                    class="w-16 h-16 rounded-lg object-cover"
                  />
                </div>
                <div class="flex-grow p-3">
                  <div class="font-semibold text-gray-700">
                    {{ wisata.nama }}
                  </div>
                  <div class="text-sm text-gray-500">Cisoka</div>
                </div>
              </div>
            </div>
            <div v-else class="my-2 text-center">Tidak ada data.</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import tangerangKotaJson from "@/assets/tangerangkotapoly.json";

export default {
  data() {
    return {
      map: {
        center: [-6.155821, 106.669354],
        zoom: 12,
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution:
          'Map oleh &copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a>. Terima kasih kepada <a target="_blank" href="https://leafletjs.com/">Leaflet</a> untuk library map Javascript yang keren ini.',
        geoJSON: tangerangKotaJson,
      },
      cariLokasiWisata: "",
      lokasiWisata: [
        {
          nama: "Telaga Cisoka",
          lokasi: {
            lat: "-6.2779955",
            long: "106.4284082",
          },
          keterangan: "Lokasi Telaga Cisoka mantap cuk.",
          image:
            "http://blog.pergi.com/wp-content/uploads/2018/08/30076248_439823839793054_924115978135011328_n.jpg",
        },
        {
          nama: "Tebing Koja",
          lokasi: {
            lat: "-6.3145481",
            long: "106.3957942",
          },
          keterangan: "Tempat ini cocok untuk melompat.",
          image:
            "https://tangselmedia.com/wp-content/uploads/2020/02/Liburan-Murah-Berwisata-ke-Tebing-Koja-Tangerang-Selatan-asle.jpg",
        },
      ],
      marker: {
        keterangan: "Keterangan ketika destinasi diklik.",
      },
    };
  },
  methods: {
    greet: function (wisata) {
      const location = [wisata.lokasi.lat, wisata.lokasi.long];

      this.map.center = location;
      this.marker.latLng = location;
      this.marker.keterangan = wisata.keterangan;
      this.$refs.marker.mapObject.openPopup(location);
    },
  },
  computed: {
    filteredWisata() {
      let tempLokasiWisata = this.lokasiWisata;

      if (this.cariLokasiWisata != "" && this.cariLokasiWisata) {
        tempLokasiWisata = tempLokasiWisata.filter((item) => {
          return item.nama
            .toUpperCase()
            .includes(this.cariLokasiWisata.toUpperCase());
        });
      }

      return tempLokasiWisata;
    },
  },
};
</script>

<style>
.vue2leaflet-map {
  z-index: 10;
}
</style>
