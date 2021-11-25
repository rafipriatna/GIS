<template>
  <section class="text-gray-600 body-font relative h-4/6">
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
            :lat-lng="[wisata.location.latitude, wisata.location.longitude]"
          >
            <l-icon
              icon-url="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png"
            ></l-icon>
          </l-marker>
          <l-layer-group ref="marker">
            <l-popup :options="{ offset: [1, -20] }" class="w-48">
              <div class="flex justify-center items-center">
                <div class="overflow-hidden">
                  <img :src="marker.thumbnail" class="object-cover rounded" />
                  <h1 class="mt-4 font-bold text-lg">{{ marker.nama }}</h1>
                  <h3 class="text-gray-400 text-md">{{ marker.kategori }}</h3>
                  <p class="text-gray-400 text-md">{{ marker.keterangan }}</p>

                  <button
                    class="
                      bg-transparent
                      hover:bg-blue-500
                      text-blue-700
                      font-semibold
                      hover:text-white
                      py-2
                      px-4
                      border border-blue-500
                      hover:border-transparent
                      rounded
                      w-full
                    "
                  >
                    Selengkapnya
                  </button>
                </div>
              </div>
            </l-popup>
          </l-layer-group>
        </l-map>
      </no-ssr>
    </div>
  </section>
</template>

<script>
import tangerangKotaJson from "@/assets/tangerangkotapoly.json";

export default {
  props: ["lokasiWisata"],
  data() {
    return {
      map: {
        center: [-6.1792429, 106.6527784],
        zoom: 12,
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution:
          'Map oleh &copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a>. Terima kasih kepada <a target="_blank" href="https://leafletjs.com/">Leaflet</a> untuk library map Javascript yang keren ini.',
        geoJSON: tangerangKotaJson,
      },
      marker: {
        name: "Judul",
        thumbnail: null,
        description: "Keterangan ketika destinasi diklik.",
        category: null,
      },
    };
  },
  methods: {
    greet: function (wisata) {
      const location = [wisata.location.latitude, wisata.location.longitude];

      // this.map.center = location;
      // this.marker.latLng = location;
      this.marker.nama = wisata.name;
      this.marker.thumbnail = `http://localhost:7000/images/${wisata.thumbnail}`;
      this.marker.keterangan = wisata.description;
      this.marker.kategori = wisata.category;
      this.$refs.marker.mapObject.openPopup(location);
    },
  },
};
</script>
