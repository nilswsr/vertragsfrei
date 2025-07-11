<template>
  <section>
    <div class="max-w-5xl mx-auto px-4 md:px-8">
      <div>
        <h2 class="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Fragen & Antworten
        </h2>
        <div class='mt-3 text-gray-600 dark:text-gray-400'>
          <p>
            Du kannst die Antwort, die du suchst, nicht finden? Schreibe mir gerne eine E-Mail unter
            <span class='font-semibold whitespace-nowrap'>
              mail{a}nilsweisser.de
            </span>.
          </p>
        </div>
      </div>
      <div class='mt-12 divide-y sm:mt-20'>
        <div v-for="(list, index) in faqsList" :key="index" class="py-5 gap-x-12 first:pt-0 sm:flex">
          <div class="max-w-sm pt-8 pb-6 sm:pt-0 lg:flex-grow">
            <h4 class="text-gray-500 font-semibold">
              {{ list.label }}
            </h4>
          </div>
          <ul class='flex-1 space-y-6 sm:last:pb-6 sm:space-y-8'>
            <li v-for="(item, idx) in list.qas" :key="idx">
              <div class="flex items-center justify-between font-semibold text-gray-700">
                {{ item.q }}
              </div>
              <p class='mt-3 text-gray-600 leading-relaxed'>
                {{ item.a }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faqsList: [
        {
          label: "Datenschutz",
          qas: [
            {
              q: "Werden meine Daten gespeichert?",
              a: "Nein. Alle Eingaben erfolgen lokal in deinem Browser. Es werden keine personenbezogenen Daten gespeichert oder übertragen."
            },
            {
              q: "Muss ich mich registrieren?",
              a: "Nein. Du kannst das Tool vollständig ohne Account oder Anmeldung nutzen – sofort und kostenlos."
            },
          ]
        },
        {
          label: "Kündigungsschreiben",
          qas: [
            {
              q: "Kann ich auch ohne Kundennummer kündigen?",
              a: "Ja. Die Felder sind flexibel ausfüllbar – du kannst das Schreiben auch ohne vollständige Vertragsdaten nutzen."
            },
            {
              q: "Wie kann ich mein Schreiben anpassen?",
              a: "Du kannst den Text direkt im Tool bearbeiten und anpassen. Du kannst auch die E-Mail-Adresse des Anbieters manuell hinzufügen."
            }
          ]
        },
        {
          label: "PDF & Versand",
          qas: [
            {
              q: "Wie erhalte ich mein Kündigungsschreiben?",
              a: "Du kannst dein Schreiben als PDF herunterladen oder direkt über dein E-Mail-Programm versenden."
            }
          ]
        },
        {
          label: "Vertragstypen",
          qas: [
            {
              q: "Welche Verträge kann ich kündigen?",
              a: "Mit vertragsfrei kannst du fast alle Verbraucherverträge kündigen – z.B. Mobilfunk, Streaming, Fitnessstudio, Versicherungen oder Mitgliedschaften. Explizit ausgenommen sind Mietverträge und Arbeitsverträge."
            },
            {
              q: "Was ist, wenn ich den Anbieter nicht finde?",
              a: "Kein Problem. Du kannst entweder aus der Liste wählen oder die Adresse des Unternehmens manuell eingeben."
            }
          ]
        },
        {
          label: "Rechtliches",
          qas: [
            {
              q: "Handelt es sich bei vertragsfrei um eine Rechtsberatung?",
              a: "Nein. Das Tool stellt keine individuelle Rechtsberatung dar, sondern bietet dir eine automatisch generierte Kündigungsvorlage auf Basis allgemein anerkannter Standards. Für komplexe oder strittige Fälle wende dich bitte an eine Anwältin oder einen Anwalt."
            },
            {
              q: "Ist mein Schreiben in jedem Fall wirksam?",
              a: "In der Regel ja – solange du korrekte Angaben machst. Allerdings hängt die Wirksamkeit einer Kündigung auch vom Vertrag selbst ab (z. B. Mindestlaufzeit, Kündigungsfrist). Bitte prüfe diese Punkte zusätzlich in deinen Vertragsunterlagen."
            }
          ]
        }
      ]
    }
  }
}
</script>
