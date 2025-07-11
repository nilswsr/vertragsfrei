# 📝 Kündigungsschreiben-Generator

Ein moderner, benutzerfreundlicher Generator für Kündigungsschreiben verschiedener Vertragsarten. Entwickelt mit **Vue 3**, **Nuxt 3** und **TypeScript** für eine optimale Benutzererfahrung.

## ✨ Features

### 🎯 **Intelligente Vertragsauswahl**
- Unterstützung verschiedener Vertragsarten (Fitnessstudio, Streaming, Telekom, etc.)
- Automatische Anpassung der Formularfelder je nach Vertragstyp
- Vordefinierte Anbieter-Datenbank mit korrekten Adressen

### 📋 **Mehrstufiger Assistent**
- **Schritt 1**: Vertragsart auswählen
- **Schritt 2**: Anbieter auswählen oder manuell eingeben
- **Schritt 3**: Persönliche Daten eingeben (inkl. E-Mail-Adresse)
- **Schritt 4**: Vertragsdetails und Optionen konfigurieren
- **Schritt 5**: Kündigungsschreiben generieren und bearbeiten

### ✏️ **Live-Text-Bearbeitung**
- **Inline-Editor** für Betreff und Nachricht
- **Speichern/Zurücksetzen/Abbrechen** Funktionen
- **Original-Inhalt** wird automatisch gespeichert
- **Reaktive Updates** in Echtzeit

### 📧 **Direkter E-Mail-Versand**
- **Automatischer mailto-Link** mit Betreff und Nachricht
- **URL-Encoding** für Umlaute und Sonderzeichen
- **Anbieter-E-Mail** wird automatisch eingetragen
- **Fallback** bei fehlender E-Mail-Adresse

### 📄 **PDF-Generierung**
- **Professionelles Brief-Format** mit Briefkopf
- **Automatische Adressierung** (Absender/Empfänger)
- **Datum und Betreff** korrekt formatiert
- **Mehrseitige PDFs** bei langem Inhalt
- **Deutsche Briefstandards** (80px Ränder, A4-Format)

### 💾 **Intelligente Persistierung**
- **localStorage-Integration** für alle Formulardaten
- **Automatisches Speichern** bei jedem Schritt
- **Schritt-Navigation** bleibt erhalten
- **Maximale Sicherheit** (Schritt 5 wird nicht gespeichert)

### 🎨 **Modernes UI/UX**
- **Responsive Design** für alle Geräte
- **Indigo-Farbschema** für professionelles Aussehen
- **Heroicons** für intuitive Navigation
- **Loading-Animationen** und visuelle Feedback
- **Keyboard-Support** (Enter-Taste für Navigation)

### 🔧 **Erweiterte Optionen**
- **DSGVO-Datenlöschung** automatisch einbinden
- **Bestätigung anfordern** optional hinzufügen
- **Vertragsdetails** je nach Anbieter anpassbar
- **Manuelle Eingabe** für unbekannte Anbieter

## 🚀 Installation & Setup

### Voraussetzungen
- Node.js (Version 16 oder höher)
- Yarn oder npm

### Installation
```bash
# Repository klonen
git clone https://github.com/your-username/vertragsfrei.git
cd vertragsfrei

# Dependencies installieren
yarn install

# Entwicklungsserver starten
yarn dev
```

### Build für Produktion
```bash
# Production Build erstellen
yarn build

# Statische Dateien generieren
yarn generate
```

## 🛠️ Technologie-Stack

- **Frontend**: Vue 3 + Nuxt 3
- **Styling**: Tailwind CSS
- **State Management**: Pinia
- **Icons**: Heroicons
- **PDF-Generierung**: jsPDF + html2canvas
- **TypeScript**: Vollständige Typisierung
- **Deployment**: Static Site Generation

## 📁 Projektstruktur

```
vertragsfrei/
├── components/          # Vue-Komponenten
│   ├── generator-*.vue  # Generator-Schritte
│   ├── letter-editor.vue # Text-Bearbeitung
│   └── ...
├── stores/              # Pinia Stores
│   ├── generator-store.ts
│   └── letter-generator-store.ts
├── data/                # Statische Daten
│   ├── companies.ts     # Anbieter-Datenbank
│   └── contractTypes.ts # Vertragsarten
├── utils/               # Utility-Funktionen
│   └── pdf-generator.ts # PDF-Generierung
└── pages/               # Nuxt-Seiten
```

## 🎯 Verwendung

1. **Vertragsart wählen**: Wählen Sie aus der Liste der unterstützten Vertragsarten
2. **Anbieter auswählen**: Wählen Sie Ihren Anbieter oder geben Sie manuell ein
3. **Daten eingeben**: Füllen Sie Ihre persönlichen Daten aus
4. **Details konfigurieren**: Geben Sie Vertragsdetails und Optionen an
5. **Brief generieren**: Lassen Sie den Generator Ihr Kündigungsschreiben erstellen
6. **Anpassen & Versenden**: Bearbeiten Sie den Text und versenden Sie per E-Mail oder PDF

## 🔧 Konfiguration

### Neue Anbieter hinzufügen
```typescript
// data/companies.ts
export const companies = [
  {
    id: 'new-company',
    name: 'Neue Firma GmbH',
    street: 'Musterstraße 123',
    postalCode: '12345',
    city: 'Musterstadt',
    email: 'info@neue-firma.de',
    contractTypes: ['fitness', 'streaming']
  }
]
```

### Neue Vertragsarten hinzufügen
```typescript
// data/contractTypes.ts
export const contractTypes = [
  {
    id: 'new-contract',
    label: 'Neuer Vertrag',
    label_dativ: 'meines neuen Vertrags',
    label_body: 'meinen neuen Vertrag',
    fields: [
      { id: 'contractNumber', label: 'Vertragsnummer' }
    ]
  }
]
```

## 🤝 Beitragen

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe die [LICENSE](LICENSE) Datei für Details.

## 🙏 Danksagungen

- **Vue.js Team** für das großartige Framework
- **Nuxt Team** für das Full-Stack-Framework
- **Tailwind CSS** für das Utility-First CSS-Framework
- **Heroicons** für die schönen Icons

## 📞 Support

Bei Fragen oder Problemen:
- Erstelle ein [Issue](https://github.com/nilswsr/vertragsfrei/issues)
- Kontaktiere mich über [E-Mail](mailto:mail@nilsweisser.de)

---

**Entwickelt mit ❤️ für einfache und rechtssichere Kündigungen**
