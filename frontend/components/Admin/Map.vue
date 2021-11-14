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
  </section>
</template>

<script>
import tangerangKotaJson from "@/assets/tangerangkotapoly.json";

export default {
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
};
</script>
