<template>
  <div>
    <Navbar />
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-32 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1
              class="
                sm:text-3xl
                text-2xl
                font-medium
                title-font
                mb-2
                text-purple
              "
            >
              Los mejores equipos
            </h1>
            <div class="h-1 w-20 bg-purple-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Plataformas multifuncionales avaladas por la federación Mexicana de
            medicina del deporte, Rehabilitación e instituciones
            internacionales.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="/img/equipos/IMOOVE.png"
                alt="content"
              />

              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                IMOOVE
              </h2>
              <p class="leading-relaxed text-base text-justify">
                Es el único dispositivo que
                <strong class="text-purple">actua sobre todo el cuerpo</strong>,
                mejorando el bienestar físico. Es un método innovador de
                rehabilitación física, estética, médica y deportiva. <br />
                Imoove es para todas las edades.
              </p>
              <div class="flex mt-4">
                <NuxtLink
                  to="/imoove"
                  class="
                    mx-auto
                    inline-flex
                    text-white
                    bg-purple
                    border-0
                    py-2
                    px-6
                    focus:outline-none
                    hover:bg-mint hover:text-purple
                    rounded
                    text-lg
                  "
                >
                  Lee más
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/721x401"
                alt="content"
              />
              <h3
                class="
                  tracking-widest
                  text-purple-500 text-xs
                  font-medium
                  title-font
                "
              >
                SUBTITLE
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Colosseum Roma
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/722x402"
                alt="content"
              />
              <h3
                class="
                  tracking-widest
                  text-purple-500 text-xs
                  font-medium
                  title-font
                "
              >
                SUBTITLE
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Great Pyramid of Giza
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/723x403"
                alt="content"
              />
              <h3
                class="
                  tracking-widest
                  text-purple-500 text-xs
                  font-medium
                  title-font
                "
              >
                SUBTITLE
              </h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                San Francisco
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
