<template>
  <section id="hero" class="mt-16 sm:mt-24 mx-auto max-w-screen-xl pb-4 px-4 items-center lg:flex md:px-8">
    <div class="space-y-4 flex-1 sm:text-center lg:text-left">
      <h1 class="text-gray-800 font-bold text-3xl sm:text-4xl xl:text-5xl leading-tight">
        <span class="text-indigo-600">Schluss machen </span>
        war noch nie so einfach
      </h1>
      <p class="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 text-sm sm:text-base">
        Ob Fitnessstudio, Streaming oder Handyvertrag – sag Tschüss mit Stil und einem Schreiben per Klick.
      </p>
      <div class="flex items-start sm:items-center lg:items-start flex-col">
        <p class="text-gray-800 py-3 text-sm sm:text-base">
          Jetzt kostenlos und sicher Kündigungsschreiben generieren
        </p>
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <router-link
            to="/generator"
            class="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 text-sm sm:text-base font-medium"
          >
            <Icon name="i-heroicons-cog-8-tooth-16-solid" />
            Kündigungs-Generator starten
          </router-link>
          <router-link
            to="#features"
            class="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200 text-sm sm:text-base font-medium"
          >
            <Icon name="i-heroicons-light-bulb" />
            Mehr erfahren
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex-1 text-center mt-6 sm:mt-4 lg:mt-0 lg:ml-3">
      <video 
        src="/Vertragsfrei_demo.webm" 
        class="w-full mx-auto sm:w-10/12 lg:w-full rounded-lg shadow-lg"
        autoplay 
        loop 
        muted 
        playsinline
      ></video>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>