<template>
  <div>
    <Navbar />
    <section class="text-gray-900 body-font">
      <div
        class="
          container
          mx-auto
          flex
          px-5
          pt-28
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
            data-aos="fade-in"
            data-aos-duration="2000"
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple"
          >
            Contáctanos para saber más de nuestros servicios
          </h1>
          <p
            data-aos="fade-in"
            data-aos-duration="2000"
            class="mb-8 leading-relaxed text-gray-900"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />WhatsApp:
            <strong class="text-purple"> 81-3442-1227</strong>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
