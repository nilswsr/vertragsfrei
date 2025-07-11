<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Back to Home Link -->
    <div class="max-w-4xl mx-auto px-4 py-8">
      <div class="mb-6">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-150">
          <Icon name="i-heroicons-arrow-left-20-solid" size="20" />
          <span class="font-medium">Zurück zur Startseite</span>
        </NuxtLink>
      </div>
      
      <div class="bg-white rounded-lg shadow-sm p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">Datenschutzerklärung</h1>
        
        <div class="prose prose-gray max-w-none">
          <p class="text-gray-600 mb-6">Stand: 12. Juli 2025</p>
          
          <div class="space-y-8">
            <!-- Inhaltsübersicht -->
            <div>
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Inhaltsübersicht</h2>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li><a href="#m3" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">Verantwortlicher</a></li>
                <li><a href="#mOverview" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">Übersicht der Verarbeitungen</a></li>
                <li><a href="#m2427" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">Maßgebliche Rechtsgrundlagen</a></li>
                <li><a href="#m27" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">Sicherheitsmaßnahmen</a></li>
                <li><a href="#m225" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">Bereitstellung des Onlineangebots und Webhosting</a></li>
                <li><a href="#m136" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">Präsenzen in sozialen Netzwerken (Social Media)</a></li>
              </ul>
            </div>

            <!-- Verantwortlicher -->
            <div id="m3">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Verantwortlicher</h2>
              <div class="text-gray-700 space-y-2">
                <p>Nils Weißer</p>
                <p>Grüner Ring 39</p>
                <p>38108 Braunschweig</p>
                <p>E-Mail-Adresse: <a href="mailto:mail@nilsweisser.de" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">mail@nilsweisser.de</a></p>
                <p>Impressum: <a href="/impressum" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">https://vertragsfrei.org/impressum</a></p>
              </div>
            </div>

            <!-- Übersicht der Verarbeitungen -->
            <div id="mOverview">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Übersicht der Verarbeitungen</h2>
              <p class="text-gray-700 mb-4">Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.</p>
              
              <h3 class="text-lg font-medium text-gray-900 mb-3">Arten der verarbeiteten Daten</h3>
              <ul class="list-disc list-inside space-y-1 text-gray-700 mb-4">
                <li>Kontaktdaten.</li>
                <li>Inhaltsdaten.</li>
                <li>Nutzungsdaten.</li>
                <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
                <li>Protokolldaten.</li>
              </ul>
              
              <h3 class="text-lg font-medium text-gray-900 mb-3">Kategorien betroffener Personen</h3>
              <ul class="list-disc list-inside space-y-1 text-gray-700 mb-4">
                <li>Nutzer.</li>
              </ul>
              
              <h3 class="text-lg font-medium text-gray-900 mb-3">Zwecke der Verarbeitung</h3>
              <ul class="list-disc list-inside space-y-1 text-gray-700">
                <li>Kommunikation.</li>
                <li>Sicherheitsmaßnahmen.</li>
                <li>Feedback.</li>
                <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.</li>
                <li>Informationstechnische Infrastruktur.</li>
                <li>Öffentlichkeitsarbeit.</li>
              </ul>
            </div>

            <!-- Maßgebliche Rechtsgrundlagen -->
            <div id="m2427">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Maßgebliche Rechtsgrundlagen</h2>
              <div class="text-gray-700 space-y-4">
                <p><strong>Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.</p>
                
                <ul class="list-disc list-inside space-y-2">
                  <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</strong> - die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht überwiegen.</li>
                </ul>
                
                <p><strong>Nationale Datenschutzregelungen in Deutschland:</strong> Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.</p>
                
                <p><strong>Hinweis auf Geltung DSGVO und Schweizer DSG:</strong> Diese Datenschutzhinweise dienen sowohl der Informationserteilung nach dem Schweizer DSG als auch nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten wir Sie zu beachten, dass aufgrund der breiteren räumlichen Anwendung und Verständlichkeit die Begriffe der DSGVO verwendet werden. Insbesondere statt der im Schweizer DSG verwendeten Begriffe „Bearbeitung" von „Personendaten", "überwiegendes Interesse" und "besonders schützenswerte Personendaten" werden die in der DSGVO verwendeten Begriffe „Verarbeitung" von „personenbezogenen Daten" sowie "berechtigtes Interesse" und "besondere Kategorien von Daten" verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.</p>
              </div>
            </div>

            <!-- Sicherheitsmaßnahmen -->
            <div id="m27">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Sicherheitsmaßnahmen</h2>
              <div class="text-gray-700 space-y-4">
                <p>Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.</p>
                
                <p>Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.</p>
                
                <p>Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL) und Transport Layer Security (TLS) sind die Eckpfeiler der sicheren Datenübertragung im Internet. Diese Technologien verschlüsseln die Informationen, die zwischen der Website oder App und dem Browser des Nutzers (oder zwischen zwei Servern) übertragen werden, wodurch die Daten vor unbefugtem Zugriff geschützt sind. TLS, als die weiterentwickelte und sicherere Version von SSL, gewährleistet, dass alle Datenübertragungen den höchsten Sicherheitsstandards entsprechen. Wenn eine Website durch ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von HTTPS in der URL signalisiert. Dies dient als ein Indikator für die Nutzer, dass ihre Daten sicher und verschlüsselt übertragen werden.</p>
              </div>
            </div>

            <!-- Bereitstellung des Onlineangebots und Webhosting -->
            <div id="m225">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Bereitstellung des Onlineangebots und Webhosting</h2>
              <div class="text-gray-700 space-y-4">
                <p>Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.</p>
                
                <ul class="list-disc list-inside space-y-2">
                  <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen). Protokolldaten (z. B. Logfiles betreffend Logins oder den Abruf von Daten oder Zugriffszeiten.).</li>
                  <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                  <li><strong>Zwecke der Verarbeitung:</strong> Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.)). Sicherheitsmaßnahmen.</li>
                  <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur Datenspeicherung und Löschung".</li>
                  <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
                </ul>
                
                <div>
                  <p class="font-medium mb-2">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</p>
                  <ul class="list-disc list-inside space-y-2">
                    <li><strong>Bereitstellung Onlineangebot auf gemietetem Speicherplatz:</strong> Für die Bereitstellung unseres Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und Software, die wir von einem entsprechenden Serveranbieter (auch "Webhoster" genannt) mieten oder anderweitig beziehen; <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
                    <li><strong>Erhebung von Zugriffsdaten und Logfiles:</strong> Der Zugriff auf unser Onlineangebot wird in Form von sogenannten "Server-Logfiles" protokolliert. Zu den Serverlogfiles können die Adresse und der Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles können zum einen zu Sicherheitszwecken eingesetzt werden, z. B. um eine Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken), und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen; <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). <strong>Löschung von Daten:</strong> Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Präsenzen in sozialen Netzwerken -->
            <div id="m136">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">Präsenzen in sozialen Netzwerken (Social Media)</h2>
              <div class="text-gray-700 space-y-4">
                <p>Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren oder Informationen über uns anzubieten.</p>
                
                <p>Wir weisen darauf hin, dass dabei Nutzerdaten außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so zum Beispiel die Durchsetzung der Nutzerrechte erschwert werden könnte.</p>
                
                <p>Ferner werden die Daten der Nutzer innerhalb sozialer Netzwerke im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können beispielsweise anhand des Nutzungsverhaltens und sich daraus ergebender Interessen der Nutzer Nutzungsprofile erstellt werden. Letztere finden möglicherweise wiederum Verwendung, um etwa Werbeanzeigen innerhalb und außerhalb der Netzwerke zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Daher werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Zudem können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräten gespeichert werden (insbesondere, wenn sie Mitglieder der jeweiligen Plattformen und dort eingeloggt sind).</p>
                
                <p>Für eine detaillierte Darstellung der jeweiligen Verarbeitungsformen und der Widerspruchsmöglichkeiten (Opt-out) verweisen wir auf die Datenschutzerklärungen und Angaben der Betreiber der jeweiligen Netzwerke.</p>
                
                <p>Auch im Fall von Auskunftsanfragen und der Geltendmachung von Betroffenenrechten weisen wir darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden können. Nur Letztere haben jeweils Zugriff auf die Nutzerdaten und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an uns wenden.</p>
                
                <ul class="list-disc list-inside space-y-2">
                  <li><strong>Verarbeitete Datenarten:</strong> Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern); Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung). Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen).</li>
                  <li><strong>Betroffene Personen:</strong> Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).</li>
                  <li><strong>Zwecke der Verarbeitung:</strong> Kommunikation; Feedback (z. B. Sammeln von Feedback via Online-Formular). Öffentlichkeitsarbeit.</li>
                  <li><strong>Aufbewahrung und Löschung:</strong> Löschung entsprechend Angaben im Abschnitt "Allgemeine Informationen zur Datenspeicherung und Löschung".</li>
                  <li><strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</li>
                </ul>
                
                <div>
                  <p class="font-medium mb-2">Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:</p>
                  <ul class="list-disc list-inside space-y-2">
                    <li><strong>LinkedIn:</strong> Soziales Netzwerk - Wir sind gemeinsam mit LinkedIn Ireland Unlimited Company für die Erhebung (jedoch nicht die weitere Verarbeitung) von Daten der Besucher verantwortlich, die zur Erstellung der „Page-Insights" (Statistiken) unserer LinkedIn-Profile genutzt werden. Zu diesen Daten gehören Informationen über die Arten von Inhalten, die Nutzer sich ansehen oder mit denen sie interagieren, sowie die von ihnen vorgenommenen Handlungen. Außerdem werden Details über die genutzten Geräte erfasst, wie z. B. IP-Adressen, Betriebssystem, Browsertyp, Spracheinstellungen und Cookie-Daten, sowie Angaben aus den Nutzerprofilen, wie Berufsfunktion, Land, Branche, Hierarchieebene, Unternehmensgröße und Beschäftigungsstatus. Datenschutzinformationen zur Verarbeitung von Nutzerdaten durch LinkedIn können den Datenschutzhinweisen von LinkedIn entnommen werden: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">https://www.linkedin.com/legal/privacy-policy.</a><br>Wir haben mit LinkedIn Ireland eine spezielle Vereinbarung geschlossen („Page Insights Joint Controller Addendum", <a href="https://legal.linkedin.com/pages-joint-controller-addendum" target="_blank" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">https://legal.linkedin.com/pages-joint-controller-addendum</a>), in der insbesondere geregelt wird, welche Sicherheitsmaßnahmen LinkedIn beachten muss und in der LinkedIn sich bereit erklärt hat, die Rechte der Betroffenen zu erfüllen (d. h. Nutzer können z. B. Auskunfts- oder Löschungsanfragen direkt an LinkedIn richten). Die Rechte der Nutzer (insbesondere das Recht auf Auskunft, Löschung, Widerspruch und Beschwerde bei der zuständigen Aufsichtsbehörde) werden durch die Vereinbarungen mit LinkedIn nicht eingeschränkt. Die gemeinsame Verantwortlichkeit beschränkt sich auf die Erhebung und Übermittlung der Daten an LinkedIn Ireland Unlimited Company, ein Unternehmen mit Sitz in der EU. Die weitere Verarbeitung der Daten obliegt ausschließlich LinkedIn Ireland Unlimited Company, insbesondere was die Übermittlung der Daten an die Muttergesellschaft LinkedIn Corporation in den USA betrifft; <strong>Dienstanbieter:</strong> LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Irland; <strong>Rechtsgrundlagen:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO); <strong>Website:</strong> <a href="https://www.linkedin.com" target="_blank" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">https://www.linkedin.com</a>; <strong>Datenschutzerklärung:</strong> <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">https://www.linkedin.com/legal/privacy-policy</a>; <strong>Grundlage Drittlandtransfers:</strong> Data Privacy Framework (DPF), Standardvertragsklauseln (<a href="https://legal.linkedin.com/dpa" target="_blank" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">https://legal.linkedin.com/dpa</a>). <strong>Widerspruchsmöglichkeit (Opt-Out):</strong> <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a>.</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Generator Info -->
            <div class="mt-8 pt-6 border-t border-gray-200">
              <p class="text-sm text-gray-500">
                <a href="https://datenschutz-generator.de/" target="_blank" rel="noopener noreferrer nofollow" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-150">
                  Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke
                </a>
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
  title: 'Datenschutzerklärung - vertragsfrei',
  meta: [
    { name: 'description', content: 'Datenschutzerklärung für vertragsfrei - Kündigungsschreiben Generator' }
  ]
})
</script> 