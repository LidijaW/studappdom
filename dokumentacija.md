# Dokumentacija za studappdom

Ova aplikacija je rađena kao projekt za kolegij Inženjerstvo kompleksnih sustava i napravljena je u Vue 3 frameworku. U nastavku slijedi opis funkcionalnosti i strukture aplikacije.

---

## Pokretanje projekta

1. Instaliraj ovisnosti:
   ```
   npm install
   ```
2. Pokreni razvojni server:
   ```
   npm run dev
   ```
3. Aplikacija će biti dostupna na `http://localhost:5173` ili drugoj prikazanoj adresi.

---

## Struktura projekta

- `src/views/` — Vue view komponente (stranice)
- `src/components/` — ponovno iskoristive komponente (npr. ServiceCard)
- `src/router/` — konfiguracija ruta
- `src/store/` — Pinia store (upravljanje stanjem korisnika)
- `src/App.vue` — glavni layout aplikacije
- `public/` — statički sadržaj i HTML ulazna točka

---

## Pregled funkcionalnosti (views)

### 1. AuthView.vue
- Prijava i registracija korisnika (dummy logika, bez backend provjere).
- Koristi Pinia store za spremanje stanja korisnika.
- Validacija forme (provjera emaila i lozinke).

### 2. DashboardView.vue
- Pregled dostupnih usluga (Obroci, Prijava kvara, Rezervacija prostorije, Plaćanje smještaja).
- Navigacija prema ostalim stranicama putem ServiceCard komponente.

### 3. MealsView.vue
- Prikaz tjednog jelovnika.
- Mogućnost rezervacije obroka klikom na gumb.

### 4. ReportView.vue
- Prijava kvara u studentskom domu.
- Validacija opisa (min. 10 znakova).
- Prikaz poruke o uspješnoj prijavi nakon slanja.

### 5. RoomsView.vue
- Rezervacija učionica/prostorija.
- Odabir prostorije i datuma.
- Prikaz potvrde o rezervaciji.

### 6. PaymentView.vue
- Prikaz iznosa za plaćanje smještaja.
- Potvrda o uspješnom plaćanju klikom na gumb.

---

## Navigacija

Navigacija se postavlja u `src/router/index.js`. Ruta `/` vodi na AuthView, a ostale rute vode na odgovarajuće viewove:
- `/dashboard`
- `/meals`
- `/report`
- `/rooms`
- `/payment`

---

## Store (Pinia)

Korisničko stanje i autentifikacija se vodi u `src/store/user.js` koristeći Pinia:
- login, register, logout akcije
- korisnik se sprema u state, ali ovo je samo lokalno (nije povezano s backendom)

---

## Stilizacija

- Osnovna stilizacija je implementirana u svakoj view komponenti (scoped CSS).
- Dodatni stilovi su definirani u `src/App.vue` i globalno utječu na aplikaciju (boje, tipografija, margine).
- Responsivan dizajn za osnovno korištenje na desktopu i mobitelu.

---

## Komponente

- `ServiceCard.vue` — kartica za prikaz i navigaciju usluga na dashboardu
- `LoginForm.vue`, `RegisterForm.vue` — forme za autentifikaciju (ako se koriste)
- Sve komponente su modularne i mogu se proširivati prema potrebi.

---

## Napomena

Ova aplikacija koristi dummy podatke i alert poruke za interakciju. Nema povezivanja s pravim backendom ni bazom podataka.

---

## Prijedlog za nadogradnju

- Implementirati povezivanje s backendom za pravu autentifikaciju i pohranu podataka.
- Dodati korisničke profile i personalizaciju.
- Unaprijediti dizajn korištenjem gotovih UI frameworka (Vuetify, TailwindCSS, BootstrapVue).

---

