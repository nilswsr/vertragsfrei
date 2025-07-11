<template>
  <section id="features" class="py-10 sm:py-14">
    <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
      <div class="relative max-w-2xl mx-auto sm:text-center">
        <div class="relative z-10">
          <h2 class="text-gray-800 text-2xl sm:text-3xl font-semibold sm:text-4xl">
            Beende Verträge. Schnell. Kostenlos.
          </h2>
          <p class="mt-3 text-sm sm:text-base">
            Mit <strong>vertragsfrei</strong> erstellst du in wenigen Klicks ein rechtssicheres Kündigungsschreiben – ohne Anmeldung, ohne Bürokratie.
          </p>
        </div>
        <div
          class="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
          style="background: linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%);"        ></div>
      </div>
      <div class="relative mt-8 sm:mt-12">
        <ul class="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="feature in features"
            :key="feature.title"
            class="bg-white space-y-3 p-4 border rounded-lg"
          >
            <Icon
              class="flex items-center mb-2 text-indigo-600 sm:w-6 sm:h-6"
              :name="feature.icon"
              size="22"
            ></Icon>
            <h5 class="text-base sm:text-lg font-semibold text-gray-800">{{ feature.title }}</h5>
            <p class="mt-2 text-sm sm:text-base">{{ feature.desc }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'i-heroicons-pencil-square',
    title: 'Individuelles Kündigungsschreiben',
    desc: 'Erzeuge individualisierte Schreiben für Abo- und Vertragskündigungen – egal ob Fitnessstudio, Stromvertrag oder Streamingdienst.',
  },
  {
    icon: 'i-heroicons-document-check',
    title: 'Sofort als PDF-Download',
    desc: 'Lade dein Kündigungsschreiben als PDF herunter – ganz ohne Registrierung oder versteckte Kosten.',
  },
  {
    icon: 'i-heroicons-lock-closed',
    title: 'Deine Daten gehören dir',
    desc: 'vertragsfrei speichert keine personenbezogenen Daten. Alle Eingaben bleiben lokal in deinem Browser – es findet keine Übertragung an einen Server statt.',
  },
]
</script>
