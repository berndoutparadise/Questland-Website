# Questland Website

Statische, zweisprachige Astro-Website für `questland.eu`.

## Lokal starten

```bash
pnpm install
pnpm dev
```

Danach ist die Website unter `http://localhost:4321/de/` erreichbar.

## Produktions-Build

```bash
pnpm build
pnpm preview
```

Der fertige statische Build liegt in `dist/`.

## Netlify

- Base directory: `website`
- Build command: `pnpm build`
- Publish directory: `dist`

Das Anfrageformular ist mit Netlify Forms und Honeypot-Spamschutz vorbereitet. Nach dem ersten Deployment muss in Netlify geprüft werden, ob das Formular `quest-request` erkannt wurde.

## Vor Veröffentlichung

Die Seiten für Impressum und Datenschutz enthalten bewusst nur Platzhalter und sind mit `noindex` markiert. Vor der öffentlichen Veröffentlichung müssen die endgültigen Rechtstexte ergänzt und geprüft werden.

