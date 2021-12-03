<template>
  <div v-if="dataLoaded">
    <nav
      class="text-black font-bold my-8 cursor-default lg:ml-4"
      aria-label="Breadcrumb"
    >
      <ol class="list-none p-0 inline-flex">
        <li class="flex items-center">
          Destinasi
          <svg
            class="fill-current w-3 h-3 mx-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </li>
        <li class="text-gray-500">Detail</li>
      </ol>
    </nav>

    <div class="flex gap-4 lg:flex-row flex-col" >
      <div class="w-full" data-aos="fade-right" data-aos-duration="2000">
        <div class="rounded border bg-white p-4">
          <div class="mb-8">
            <h1 class="text-xl font-semibold">{{ wisata.name }}</h1>
            <p class="text-gray-400 text-lg mt-1">
              {{ wisata.location.district }}
            </p>
          </div>

          <section>
            <div class="relative rounded-lg">
              <!-- large image on slides -->
              <div>
                <img
                  :src="this.slides.current"
                  class="w-full object-cover rounded-lg"
                />
              </div>

              <!-- butttons -->
              <a
                class="
                  absolute
                  left-0
                  inset-y-0
                  flex
                  items-center
                  -mt-32
                  px-4
                  text-white
                  hover:text-gray-800
                  cursor-pointer
                  text-3xl
                  font-extrabold
                "
                @click="plusSlides(-1)"
                >❮</a
              >
              <a
                class="
                  absolute
                  right-0
                  inset-y-0
                  flex
                  items-center
                  -mt-32
                  px-4
                  text-white
                  hover:text-gray-800
                  cursor-pointer
                  text-3xl
                  font-extrabold
                "
                @click="plusSlides(1)"
                >❯</a
              >

              <!-- smaller images under description -->
              <div class="flex my-4 gap-2">
                <div v-for="(item, index) in wisata.galleries" :key="index">
                  <img
                    class="
                      h-24
                      opacity-50
                      hover:opacity-100
                      cursor-pointer
                      rounded-lg
                    "
                    :src="'http://localhost:7000/images/' + item.photo"
                    @click="currentSlide(index)"
                    alt="Dog's Nose"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-lg font-semibold mt-6 mb-2">Tentang Wisata</h2>
            <p class="text-gray-400">{{ wisata.description }}</p>

            <h2 class="text-lg font-semibold mt-6 mb-2">Fasilitas</h2>
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
          </section>
        </div>
      </div>

      <div class="w-3/6" data-aos="fade-left" data-aos-duration="2000">
        <div class="rounded border bg-white p-4">
          <h1 class="text-lg font-semibold mb-4">Informasi</h1>
          <table class="w-full table-auto">
            <tbody >
              <tr class="h-10">
                <th width="50%" class="text-left">Alamat</th>
                <td width="50%" class="text-right">
                  {{ wisata.location.address }}
                </td>
              </tr>
              <tr class="h-10">
                <th width="50%" class="text-left">Lat/Long</th>
                <td width="50%" class="text-right">
                  {{ wisata.location.latitude }}/{{ wisata.location.longitude }}
                </td>
              </tr>
              <tr class="h-10">
                <th width="50%" class="text-left">Harga Tiket</th>
                <td width="50%" class="text-right">
                  {{ wisata.ticket_price }}
                </td>
              </tr>
              <tr class="h-10">
                <th width="50%" class="text-left">Operasional</th>
                <td width="50%" class="text-right">
                  {{ wisata.operational.days }}<br />Pukul
                  {{ wisata.operational.open_hour }}-{{
                    wisata.operational.close_hour
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <Loading v-else />
</template>

<script>
export default {
  layout: "visitor",
  data() {
    return {
      slug: this.$route.params.slug,
      wisata: null,
      dataLoaded: false,
      slides: {
        slideIndex: 0,
        current: null,
      },
    };
  },
  methods: {
    getData() {
      this.$store
        .dispatch("getWisataPengunjungBySlug", this.slug)
        .then((res) => {
          this.wisata = res[0];
          console.log(this.wisata);
          this.dataLoaded = true;
          this.showSlide(0);
        });
    },
    plusSlides(n) {
      this.showSlide(this.slides.slideIndex + n);
    },
    currentSlide(n) {
      this.showSlide(n);
    },
    showSlide(n) {
      const banyakFoto = this.wisata.galleries.length;
      console.log(n > banyakFoto);
      if (n >= banyakFoto || n < 0) {
        this.slides.slideIndex = 0;
      } else {
        this.slides.slideIndex = n;
      }

      this.slides.current = `http://localhost:7000/images/${
        this.wisata.galleries[this.slides.slideIndex].photo
      }`;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
