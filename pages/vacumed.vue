<template>
  <div>
    <NavProd />
    <section class="text-gray-900 body-font">
      <div
        class="
          container
          mx-auto
          flex
          px-5
          py-24
          items-center
          justify-center
          flex-col
        "
      >
        <nuxt-img
          class="
            lg:w-2/6
            md:w-3/6
            w-5/6
            mb-10
            object-cover object-center
            rounded
          "
          alt="hero"
          src="/img/equipos/VACUMED.PNG"
        />
        <div class="text-justify lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple"
          >
            VACUMED
          </h1>
          <br />

          <p class="mb-8 leading-relaxed">
            Terapia de Vacío Intermitente El principio funcional La alternancia
            de presiones produce múltiples efectos positivos para la salud y la
            belleza de forma 100% natural: mejora de la circulación y del
            drenaje linfático, oxigenación y purificación de los tejidos,
            favorece la eliminación de residuos metabólicos, tonificación del
            tejido conectivo, equilibra el pH favoreciendo la síntesis de
            colágeno y elastina, reduce la inflamación y el dolor ...
          </p>
          <div
            class="
              px-4
              py-16
              mx-auto
              sm:max-w-xl
              md:max-w-full
              lg:max-w-screen-xl
              md:px-24
              lg:px-8 lg:py-20
            "
          >
            <div
              class="
                grid grid-cols-2
                gap-5
                row-gap-5
                sm:grid-cols-3
                lg:grid-cols-6
              "
            >
              <div class="text-center">
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    mx-auto
                    mb-4
                    rounded-full
                    bg-indigo-50
                    sm:w-12 sm:h-12
                  "
                >
                  <font-awesome-icon
                    :icon="['fas', 'heartbeat']"
                    class="text-purple text-2xl"
                  />
                </div>
                <h6
                  class="
                    mb-2
                    text-sm
                    font-bold
                    leading-5
                    tracking-wider
                    uppercase
                  "
                >
                  Salud
                </h6>
              </div>
              <div class="text-center">
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    mx-auto
                    mb-4
                    rounded-full
                    bg-indigo-50
                    sm:w-12 sm:h-12
                  "
                >
                  <font-awesome-icon
                    :icon="['fas', 'gem']"
                    class="text-purple text-2xl"
                  />
                </div>
                <h6
                  class="
                    mb-2
                    text-sm
                    font-bold
                    leading-5
                    tracking-wider
                    uppercase
                  "
                >
                  Belleza
                </h6>
              </div>
              <div class="text-center">
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    mx-auto
                    mb-4
                    rounded-full
                    bg-indigo-50
                    sm:w-12 sm:h-12
                  "
                >
                  <font-awesome-icon
                    :icon="['fas', 'lungs']"
                    class="text-purple text-2xl"
                  />
                </div>
                <h6
                  class="
                    mb-2
                    text-sm
                    font-bold
                    leading-5
                    tracking-wider
                    uppercase
                  "
                >
                  Oxygenación
                </h6>
              </div>
              <div class="text-center">
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    mx-auto
                    mb-4
                    rounded-full
                    bg-indigo-50
                    sm:w-12 sm:h-12
                  "
                >
                  <font-awesome-icon
                    :icon="['fas', 'leaf']"
                    class="text-purple text-2xl"
                  />
                </div>
                <h6
                  class="
                    mb-2
                    text-sm
                    font-bold
                    leading-5
                    tracking-wider
                    uppercase
                  "
                >
                  Natural
                </h6>
              </div>
              <div class="text-center">
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    mx-auto
                    mb-4
                    rounded-full
                    bg-indigo-50
                    sm:w-12 sm:h-12
                  "
                >
                  <font-awesome-icon
                    :icon="['fas', 'spa']"
                    class="text-purple text-2xl"
                  />
                </div>
                <h6
                  class="
                    mb-2
                    text-sm
                    font-bold
                    leading-5
                    tracking-wider
                    uppercase
                  "
                >
                  Bienestar
                </h6>
              </div>
              <div class="text-center">
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    mx-auto
                    mb-4
                    rounded-full
                    bg-indigo-50
                    sm:w-12 sm:h-12
                  "
                >
                  <font-awesome-icon
                    :icon="['fas', 'running']"
                    class="text-purple text-2xl"
                  />
                </div>
                <h6
                  class="
                    mb-2
                    text-sm
                    font-bold
                    leading-5
                    tracking-wider
                    uppercase
                  "
                >
                  Recuperación
                </h6>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=528134421227&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20agendar%20una%20cita.%20"
              class="
                inline-flex
                text-white
                bg-purple
                border-0
                py-2
                px-6
                focus:outline-none
                hover:bg-mint
                rounded
                text-lg
              "
            >
              Agenda una cita
            </a>
            <NuxtLink
              to="/"
              class="
                ml-4
                inline-flex
                text-gray-700
                bg-gray-100
                border-0
                py-2
                px-6
                focus:outline-none
                hover:bg-gray-200
                rounded
                text-lg
              "
            >
              Inicio
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
