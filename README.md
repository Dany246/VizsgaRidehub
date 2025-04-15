# 🚗 Ride Hub

**Ride Hub** egy modern webes alkalmazás, amely a közös utazások szervezését teszi egyszerűvé és hatékonnyá. A projekt Laravel backendre épül, és Inertia.js-en keresztül kapcsolódik a React-alapú frontendhez.

## 🛠 Technológiák

- **Backend**: Laravel
- **Frontend**: React + Inertia.js
- **Database**: SqLite


## 🚀 Telepítés

```bash
git clone https://github.com/felhasznalonev/ride-hub.git
cd ride-hub
composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
npm run dev
