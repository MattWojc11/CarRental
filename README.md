# Karzone Premium Cars

Strona internetowa wypożyczalni luksusowych samochodów Karzone Premium Cars we Wrocławiu.

## Opis projektu

Projekt strony internetowej dla wypożyczalni luksusowych samochodów. Strona zawiera następujące funkcjonalności:

- Strona główna z prezentacją wybranych samochodów
- Podstrona z listą dostępnych samochodów
- Strona kontaktowa z formularzem i mapą
- Strona lokalizacji z mapą Google Maps
- Strona "Jak to działa" z opisem procesu wypożyczenia
- Strona voucherów z interaktywnym formularzem

## Technologie

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Google Maps API

## Struktura projektu

- `/app` - główny katalog aplikacji Next.js
  - `/components` - reużywalne komponenty React
  - `/cars` - strony dotyczące samochodów
  - `/contact` - strona kontaktowa
  - `/locations` - strona lokalizacji
  - `/how-it-works` - strona z opisem procesu wypożyczenia
  - `/voucher` - strona z voucherami
- `/public` - zasoby statyczne (obrazy)

## Uruchomienie projektu

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev
```

Strona będzie dostępna pod adresem: `http://localhost:3000`
