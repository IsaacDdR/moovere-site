<template>
  <div>
    <Navbar />
    <transition name="home"> </transition>
    <div
      class="
        flex flex-col
        h-screen
        items-center
        justify-center
        bg-sm-background
        md:bg-lg-background
        bg-cover
      "
    >
      <MoovereLogo />
      <!--
      <div class="flex w-full">
        <div v-scroll-to="'#quienes'" class="mx-auto">
          <font-awesome-icon
            class="animated bounce infinite text-purple text-2xl"
            :icon="['fas', 'arrow-down']"
          />
        </div>
      </div>
      -->
      <p class=" text-center md:w-2/3 mx-4 font-semibold text-purple">
        Somos un centro de rehabilitación, acondicionamiento físico y
            estético. Trabajamos con equipos de última generación con tecnología
            desarrollada en Francia, Italia y Alemania.
            <br />
            <br />Los más importantes llamados:
            <strong>
              Imoove, Icoone, Inshape, Kysio y Vacumed.</strong
            >
          </p>
          <NuxtLink
                to="/quienes"
                class="
                  mt-6
                  inline-flex
                  text-white
                  bg-purple
                  border-0
                  py-2
                  px-6
                  focus:outline-none
                  hover:bg-mint
                  hover:text-purple
                  rounded
                  text-lg
                "
              >
                Lee más
              </NuxtLink>
    </div>

    <!-- QUIENES SOMOS 
    <section
      id="quienes"
      data-aos="fade-in"
      data-aos-duration="2000"
      class="text-gray-900 body-font"
    >
      <div
        class="
          container
          mx-auto
          flex
          px-5
          pt-24
          pb-12
          md:flex-row
          flex-col
          items-center
        "
      >
        <div class="lg:max-w-lg lg:w-full md:w-1/2 mx-auto w-5/6 mb-10 md:mb-0">
          <nuxt-img
            class="
              border-purple border-8
              object-cover object-center
              rounded-full
              border-opacity-40
            "
            alt="hero"
            src="/img/moovere-quienes.jpeg"
          />
        </div>

        <div
          class="
            lg:flex-grow
            md:w-1/2
            lg:pl-24
            md:pl-16
            flex flex-col
            md:items-start md:text-left
            items-center
            text-center
          "
        >
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple"
          >
            ¿Quiénes somos?
          </h1>
          <p class="mb-8 leading-relaxed text-gray-900">
            Somos un centro de rehabilitación, acondicionamiento físico y
            estético. Trabajamos con equipos de última generación con tecnología
            desarrollada en Francia, Italia y Alemania.
            <br />
            <br />Los más importantes llamados:
            <strong class="text-purple">
              Imoove, Icoone, Inshape, Kysio y Vacumed.</strong
            >
          </p>
        </div>
      </div>
    </section>

    <div
      class="
        px-4
        mx-auto
        pb-12
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
      "
    >
      <div class="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div class="px-12 text-center sm:px-0">
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
              :icon="['fas', 'hand-sparkles']"
              class="text-purple text-2xl"
            />
          </div>
          <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Transparencia
          </h6>
        </div>
        <div class="px-12 text-center sm:px-0">
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
              :icon="['fas', 'hands-helping']"
              class="text-purple text-2xl"
            />
          </div>
          <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Honestidad
          </h6>
        </div>
        <div class="px-12 text-center sm:px-0">
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
              :icon="['fas', 'universal-access']"
              class="text-purple text-2xl"
            />
          </div>
          <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Libertad
          </h6>
        </div>
        <div class="px-12 text-center sm:px-0">
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
              :icon="['fas', 'check-square']"
              class="text-purple text-2xl"
            />
          </div>
          <h6 class="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            Excelencia
          </h6>
        </div>
      </div>
    </div>
    -->


    <!-- SECCION DE PRODUCTOS 
    <section
      id="equipos"
      data-aos="fade-in"
      data-aos-duration="2000"
      class="text-gray-900 body-font"
    >
      <div class="container px-5 mx-auto">
        <div class="flex flex-col">
          <div class="h-2 bg-purple bg-opacity-40 rounded overflow-hidden">
            <div class="w-24 h-full"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-4">
            <h1
              class="
                sm:w-2/5
                text-gray-900
                font-medium
                title-font
                text-3xl text-purple
                sm:text-4xl
                mb-2
                sm:mb-0
              "
            >
              Los mejores equipos, <br />para tí
            </h1>
            <br />
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Plataformas multifuncionales avaladas por la federación Mexicana
              de medicina del deporte, Rehabilitación e instituciones
              internacionales.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="sr-only sm:not-sr-only">
      -->


      <!-- ::::::::: 1 :::::::::: 
      <section class="text-gray-900 body-font">
        <div
          class="
            container
            mx-auto
            flex
            px-5
            py-8
            md:flex-row
            flex-col
            items-center
          "
        >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <nuxt-img
              class="object-cover object-center rounded"
              alt="hero"
              src="/img/equipos/IMOOVE.png"
            />
          </div>
          <div
            class="
              lg:flex-grow
              md:w-1/2
              lg:pl-24
              md:pl-16
              flex flex-col
              md:items-start md:text-left
              items-center
              text-center
            "
          >
            <h1
              class="
                title-font
                sm:text-4xl
                text-3xl
                mb-4
                font-medium
                text-purple
              "
            >
              IMOOVE
            </h1>
            <p class="mb-8 leading-relaxed">
              Es el único dispositivo que
              <strong class="text-purple">actua sobre todo el cuerpo</strong>,
              mejorando el bienestar físico. Es un método innovador de
              rehabilitación física, estética, médica y deportiva. Imoove es
              para todas las edades. Puede utilizarse incluso post COVID.
            </p>
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
                to="/imoove"
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
                Lee más
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      -->
      

      <!-- ::::::::: 2 :::::::::: 
      <section class="text-gray-900 body-font">
        <div
          class="
            container
            mx-auto
            flex
            px-5
            py-8
            md:flex-row
            flex-col
            items-center
          "
        >
          <div
            class="
              lg:flex-grow
              md:w-1/2
              lg:pr-24
              md:pr-16
              flex flex-col
              md:items-start md:text-left
              mb-16
              md:mb-0
              items-center
              text-center
            "
          >
            <h1
              class="
                title-font
                sm:text-4xl
                text-3xl text-purple
                mb-4
                font-medium
              "
            >
              ICOONE
            </h1>
            <p class="mb-8 leading-relaxed">
              Es un nuevo
              <strong class="text-purple">tratamiento cutáneo</strong>, basado
              en el tratamiento profundo del tejido conjuntivo bajo las premisas
              del Dr. Guimberteau en sus estudios sobre Medicina Estructural.
            </p>
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
                to="/icoone"
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
                Lee más
              </NuxtLink>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <nuxt-img
              class="object-cover object-center rounded"
              alt="hero"
              src="/img/equipos/ICOONE.PNG"
            />
          </div>
        </div>
      </section>
-->

      <!-- ::::::::: 3 :::::::::: 
      <section class="text-gray-900 body-font">
        <div
          class="
            container
            mx-auto
            flex
            px-5
            py-8
            md:flex-row
            flex-col
            items-center
          "
        >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <nuxt-img
              class="object-cover object-center rounded"
              alt="hero"
              src="/img/equipos/INSHAPE.png"
            />
          </div>
          <div
            class="
              lg:flex-grow
              md:w-1/2
              lg:pl-24
              md:pl-16
              flex flex-col
              md:items-start md:text-left
              items-center
              text-center
            "
          >
            <h1
              class="
                title-font
                sm:text-4xl
                text-3xl
                mb-4
                text-purple
                font-medium
              "
            >
              INSHAPE
            </h1>
            <p class="mb-8 leading-relaxed">
              Dispositivos para
              <strong class="text-purple">moldear el cuerpo.</strong>
              Se emplea una tecnología inteligente de entrenamiento muscular
              automático, con aplicación de impulsos eléctricos, generados del
              campo electromagnético al músculo.
            </p>
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
                to="/inshape"
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
                Lee más
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
-->

      <!-- ::::::::: 4 :::::::::: 
      <section class="text-gray-900 body-font">
        <div
          class="
            container
            mx-auto
            flex
            px-5
            py-8
            md:flex-row
            flex-col
            items-center
          "
        >
          <div
            class="
              lg:flex-grow
              md:w-1/2
              lg:pr-24
              md:pr-16
              flex flex-col
              md:items-start md:text-left
              mb-16
              md:mb-0
              items-center
              text-center
            "
          >
            <h1
              class="
                title-font
                sm:text-4xl
                text-3xl
                mb-4
                font-medium
                text-purple
              "
            >
              VACUMED
            </h1>
            <p class="mb-8 leading-relaxed">
              Equipo de
              <strong class="text-purple">terapia de vacío intermitente</strong
              >. Sus orígenes tecnológicos, médicos y científicos del sistema de
              regeneración residen en la medicina espacial.
              <strong class="text-purple"
                >Uso en pacientes diabéticos y para heridas.</strong
              >
            </p>
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
                to="/vacumed"
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
                Lee más
              </NuxtLink>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <nuxt-img
              class="object-cover object-center rounded"
              alt="hero"
              src="/img/equipos/VACUMED.PNG"
            />
          </div>
        </div>
      </section>
-->

      <!-- ::::::::: 5 :::::::::: 
      <section class="text-gray-900 body-font">
        <div
          class="
            container
            mx-auto
            flex
            px-5
            py-8
            md:flex-row
            flex-col
            items-center
          "
        >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <nuxt-img
              class="object-cover object-center rounded"
              alt="hero"
              src="/img/equipos/KSYIO.png"
            />
          </div>
          <div
            class="
              lg:flex-grow
              md:w-1/2
              lg:pl-24
              md:pl-16
              flex flex-col
              md:items-start md:text-left
              items-center
              text-center
            "
          >
            <h1
              class="
                title-font
                sm:text-4xl
                text-3xl
                mb-4
                font-medium
                text-purple
              "
            >
              KYSIO
            </h1>
            <p class="mb-8 leading-relaxed">
              Ofrece la posibilidad de realizar trabajos de
              <strong class="text-purple"
                >recuperación articular y fortalecimiento muscular</strong
              >
              de forma independiente, de forma cualificada, cuantificada y
              reproducible.
            </p>
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
                to="/kysio"
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
                Lee más
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
-->
    <!--PRODUCTOS RESPONSIVO-->

    <!-- ::::::::: 1 :::::::::: 
    <div class="sm:sr-only not-sr-only">
      <section id="equipo" class="text-gray-900 body-font">
        <div
          class="
            container
            mx-auto
            flex
            px-5
            py-8
            md:flex-row
            flex-col
            items-center
          "
        >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <nuxt-img
              class="object-cover object-center rounded"
              alt="hero"
              src="/img/equipos/IMOOVE.png"
            />
          </div>
          <div
            class="
              lg:flex-grow
              md:w-1/2
              lg:pl-24
              md:pl-16
              flex flex-col
              md:items-start md:text-left
              items-center
              text-center
            "
          >
            <h1
              class="
                title-font
                sm:text-4xl
                text-3xl
                mb-4
                font-medium
                text-purple
              "
            >
              IMOOVE
            </h1>
            <p class="mb-8 leading-relaxed">
              Es el único dispositivo que
              <strong class="text-purple">actua sobre todo el cuerpo</strong>,
              mejorando el bienestar físico. Es un método innovador de
              rehabilitación física, estética, médica y deportiva. Imoove es
              para todas las edades. Puede utilizarse incluso post COVID.
            </p>
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
                to="/imoove"
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
                Lee más
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
-->
      <!-- ::::::::: 2 :::::::::: 
      <section class="text-gray-900 body-font">
        <div
          class="
            container
            mx-auto
            flex
            px-5
            py-28
            md:flex-row
            flex-col
            items-center
          "
        >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <nuxt-img
              class="object-cover object-center rounded"
              alt="hero"
              src="/img/equipos/ICOONE.PNG"
            />
          </div>
          <div
            class="
              lg:flex-grow
              md:w-1/2
              lg:pl-24
              md:pl-16
              flex flex-col
              md:items-start md:text-left
              items-center
              text-center
            "
          >
            <h1
              class="
                title-font
                sm:text-4xl
                text-3xl
                mb-4
                font-medium
                text-purple
              "
            >
              ICOONE
            </h1>
            <p class="mb-8 leading-relaxed">
              Es un nuevo
              <strong class="text-purple">tratamiento cutáneo</strong>, basado
              en el tratamiento profundo del tejido conjuntivo bajo las premisas
              del Dr. Guimberteau en sus estudios sobre Medicina Estructural.
            </p>
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
                to="/icoone"
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
                Lee más
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
-->

      <!-- ::::::::: 3 :::::::::: 
      <section class="text-gray-900 body-font">
        <div
          class="
            container
            mx-auto
            flex
            px-5
            py-10
            md:flex-row
            flex-col
            items-center
          "
        >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <nuxt-img
              class="object-cover object-center rounded"
              alt="hero"
              src="/img/equipos/INSHAPE.png"
            />
          </div>
          <div
            class="
              lg:flex-grow
              md:w-1/2
              lg:pl-24
              md:pl-16
              flex flex-col
              md:items-start md:text-left
              items-center
              text-center
            "
          >
            <h1
              class="
                title-font
                sm:text-4xl
                text-3xl
                mb-4
                font-medium
                text-purple
              "
            >
              INSHAPE
            </h1>
            <p class="mb-8 leading-relaxed">
              Dispositivos para
              <strong class="text-purple">moldear el cuerpo.</strong>
              Se emplea una tecnología inteligente de entrenamiento muscular
              automático, con aplicación de impulsos eléctricos, generados del
              campo electromagnético al músculo.
            </p>
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
                to="/inshape"
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
                Lee más
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
-->

      <!-- ::::::::: 4 :::::::::: 
      <section class="text-gray-900 body-font">
        <div
          class="
            container
            mx-auto
            flex
            px-5
            py-28
            md:flex-row
            flex-col
            items-center
          "
        >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <nuxt-img
              class="object-cover object-center rounded"
              alt="hero"
              src="/img/equipos/VACUMED.PNG"
            />
          </div>
          <div
            class="
              lg:flex-grow
              md:w-1/2
              lg:pl-24
              md:pl-16
              flex flex-col
              md:items-start md:text-left
              items-center
              text-center
            "
          >
            <h1
              class="
                title-font
                sm:text-4xl
                text-3xl
                mb-4
                font-medium
                text-purple
              "
            >
              VACUMED
            </h1>
            <p class="mb-8 leading-relaxed">
              Equipo de
              <strong class="text-purple">terapia de vacío intermitente</strong
              >. Sus orígenes tecnológicos, médicos y científicos del sistema de
              regeneración residen en la medicina espacial.
              <strong class="text-purple"
                >Uso en pacientes diabéticos y para heridas.</strong
              >
            </p>
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
                to="/vacumed"
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
                Lee más
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
-->

      <!-- ::::::::: 5 :::::::::: 
      <section class="text-gray-900 body-font">
        <div
          class="
            container
            mx-auto
            flex
            px-5
            py-16
            md:flex-row
            flex-col
            items-center
          "
        >
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <nuxt-img
              class="object-cover object-center rounded"
              alt="hero"
              src="/img/equipos/KSYIO.png"
            />
          </div>
          <div
            class="
              lg:flex-grow
              md:w-1/2
              lg:pl-24
              md:pl-16
              flex flex-col
              md:items-start md:text-left
              items-center
              text-center
            "
          >
            <h1
              class="
                title-font
                sm:text-4xl
                text-3xl
                mb-4
                font-medium
                text-purple
              "
            >
              KYSIO
            </h1>
            <p class="mb-8 leading-relaxed">
              Ofrece la posibilidad de realizar trabajos de
              <strong class="text-purple"
                >recuperación articular y fortalecimiento muscular</strong
              >
              de forma independiente, de forma cualificada, cuantificada y
              reproducible.
            </p>
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
                to="/kysio"
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
                Lee más
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </div>
    -->
  </div>
</template>

<script>
export default {}
</script>

<style>
.home-enter-active,
.home-leave-active {
  animation: slideInDown 0.5s;
}
.home-enter,
.home-leave-active {
  animation: slideInUp 0.5s;
}
</style>
