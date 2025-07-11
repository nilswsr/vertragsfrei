<template>
  <div class="min-h-screen bg-gray-50">


    <!-- Content -->
    <div class="max-w-4xl mx-auto px-4 py-8">
      <!-- Back to Home Link -->
      <div class="mb-6">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-150">
          <Icon name="i-heroicons-arrow-left-20-solid" size="20" />
          <span class="font-medium">Zurück zur Startseite</span>
        </NuxtLink>
      </div>
      
      <div class="bg-white rounded-lg shadow-sm p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">Impressum</h1>
        
        <div class="prose prose-gray max-w-none">
          <p class="text-gray-600 mb-6">Angaben gemäß § 5 DDG</p>
          
          <div class="space-y-6">
            <!-- Kontakt -->
            <div>
              <h2 class="text-xl font-semibold text-gray-900 mb-3">Kontakt</h2>
              <div class="text-gray-700 space-y-1">
                <p><strong>Nils Weißer</strong></p>
                <p>Grüner Ring 39</p>
                <p>38108 Braunschweig</p>
              </div>
            </div>

            <!-- Vertreten durch -->
            <div>
              <h2 class="text-xl font-semibold text-gray-900 mb-3">Vertreten durch</h2>
              <p class="text-gray-700">Nils Weißer</p>
            </div>

            <!-- Kontaktdaten -->
            <div>
              <h2 class="text-xl font-semibold text-gray-900 mb-3">Kontakt</h2>
              <div class="text-gray-700 space-y-1">
                <p><strong>Telefon:</strong> +49 157 81285325</p>
                <p><strong>E-Mail:</strong> 
                  <a href="mailto:mail@nilsweisser.de" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">
                    mail@nilsweisser.de
                  </a>
                </p>
              </div>
            </div>

            <!-- Haftungsausschluss -->
            <div>
              <h2 class="text-xl font-semibold text-gray-900 mb-3">Haftungsausschluss</h2>
              
              <div class="space-y-4">
                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-2">Haftung für Inhalte</h3>
                  <p class="text-gray-700 leading-relaxed">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                    Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten 
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als 
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                    Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                    Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von 
                    Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche 
                    Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung 
                    möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese 
                    Inhalte umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 class="text-lg font-medium text-gray-900 mb-2">Urheberrecht</h3>
                  <p class="text-gray-700 leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede 
                    Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                    Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite 
                    sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte 
                    auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
                    beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie 
                    trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
                    entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                    Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>
            </div>

            <!-- Generator Info -->
            <div class="mt-8 pt-6 border-t border-gray-200">
              <p class="text-sm text-gray-500">
                Impressum von 
                <a href="https://impressum-generator.de" target="_blank" rel="dofollow" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">
                  Impressum-Generator.de
                </a>. 
                Powered by 
                <a href="https://www.kanzlei-hasselbach.de/" target="_blank" rel="nofollow" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">
                  Franziska Hasselbach, Bonn
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Set page title
useHead({
  title: 'Impressum - Kündigungsschreiben Generator',
  meta: [
    { name: 'description', content: 'Impressum und rechtliche Informationen zum Kündigungsschreiben Generator' }
  ]
})
</script> 