<template>
<div class="font-poppins" id="destinasi-wisata" data-aos="zoom-in-left" data-aos-duration="2000">
    <section class="text-gray-600 body-font relative h-full">
        <div class="absolute inset-0 bg-gray-300">
            <no-ssr>
                <l-map :zoom="map.zoom" :center="map.center" :options="{ attributionControl: false }">
                    <l-tile-layer :url="map.url"></l-tile-layer>
                    <l-geo-json :geojson="map.geoJSON"></l-geo-json>
                    <l-control-attribution position="bottomright" :prefix="map.attribution"></l-control-attribution>
                    <l-marker v-for="(wisata, index) in lokasiWisata" :key="index" @click="greet(wisata)" :lat-lng="[wisata.location.latitude, wisata.location.longitude]">
                        <l-icon icon-url="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png"></l-icon>
                    </l-marker>
                    <l-layer-group ref="marker">
                        <l-popup :options="{ offset: [1, -20] }" class="w-48">
                            <div class="flex justify-center items-center">
                                <div class="overflow-hidden">
                                    <img :src="marker.thumbnail" class="object-cover rounded" />
                                    <h1 class="mt-4 font-bold text-lg">{{ marker.nama }}</h1>
                                    <h3 class="text-gray-400 text-md">{{ marker.kategori }}</h3>
                                    <p class="text-gray-400 text-md">{{ marker.keterangan }}</p>

                                    <button class="bg-transparent
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
                                      @click="detail">
                                        Selengkapnya
                                    </button>
                                </div>
                            </div>
                        </l-popup>
                    </l-layer-group>
                </l-map>
            </no-ssr>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
            <div class="
            lg:w-1/3
            md:w-1/2
            bg-white
            rounded-lg
            flex flex-col
            md:ml-auto
            w-full
            lg:mt-5
            relative
            shadow-md
            z-10
            p-8
          ">
                <div class="text-gray-900 text-xl font-medium cursor-pointer" @click="tampilDestinasi = !tampilDestinasi">
                    <div class="flex justify-between items-center">
                        <div>Destinasi</div>
                        <div>
                            <template v-if="tampilDestinasi">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                                </svg>
                            </template>
                            <template v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </template>
                        </div>
                    </div>
                </div>

                <div v-if="tampilDestinasi">
                    <input class="
                shadow
                appearance-none
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
                mt-8
                mb-4
              " type="text" placeholder="Cari destinasi" v-model="cariLokasiWisata" />

                    <div class="overflow-auto h-64">
                        <div v-if="filteredWisata.length > 0" class="
                  container
                  mx-auto
                  max-w-sm
                  flex flex-col
                  justify-center
                  items-center
                ">
                            <div v-for="(wisata, index) in filteredWisata" :key="index" @click="greet(wisata)" class="
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
                  ">
                                <div class="flex items-center space-x-4">
                                    <img :src="'http://localhost:7000/images/' + wisata.thumbnail" :alt="wisata.name" class="w-16 h-16 rounded-lg object-cover" />
                                </div>
                                <div class="flex-grow p-3">
                                    <div class="font-semibold text-gray-700">
                                        {{ wisata.name }}
                                    </div>
                                    <div class="text-sm text-gray-500">
                                        {{ wisata.location.district }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="my-2 text-center">Tidak ada data.</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import tangerangKotaJson from "@/assets/tangerangkotapoly.json";

export default {
    props: ["lokasiWisata"],
    data() {
        return {
            tampilDestinasi: true,
            map: {
                center: [-6.155821, 106.669354],
                zoom: 12,
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution: 'Map oleh &copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a>. Terima kasih kepada <a target="_blank" href="https://leafletjs.com/">Leaflet</a> untuk library map Javascript yang keren ini.',
                geoJSON: tangerangKotaJson,
            },
            cariLokasiWisata: "",
            marker: {
                nama: null,
                thumbnail: null,
                keterangan: "Keterangan ketika destinasi diklik.",
                kategori: null,
                url: ""
            },
        };
    },
    methods: {
        greet: function (wisata) {
            const location = [wisata.location.latitude, wisata.location.longitude];
            console.log(wisata)
            this.map.center = location;
            // this.marker.latLng = location;
            this.marker.nama = wisata.name;
            this.marker.thumbnail = `http://localhost:7000/images/${wisata.thumbnail}`;
            this.marker.keterangan = wisata.description;
            this.marker.kategori = wisata.travel_category;
            this.marker.url = `/destinasi/${wisata.slug}`;
            this.$refs.marker.mapObject.openPopup(location);
        },
        detail(){
         this.$router.push(this.marker.url);
        }
    },
    computed: {
        filteredWisata() {
            let tempLokasiWisata = this.lokasiWisata;

            if (this.cariLokasiWisata != "" && this.cariLokasiWisata) {
                tempLokasiWisata = tempLokasiWisata.filter((item) => {
                    return item.name
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
