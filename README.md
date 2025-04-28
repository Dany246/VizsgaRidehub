# 🚗 Ride Hub

**Ride Hub** egy modern webes alkalmazás, amely a közös utazások szervezését teszi egyszerűvé és hatékonnyá. A projekt Laravel backendre épül, és Inertia.js-en keresztül kapcsolódik a React-alapú frontendhez.

## 🗎 Dokumentáció
A **Dokumentáció** megtalálható ezen a [linken](https://github.com/Dany246/VizsgaRidehub/blob/main/Documentation/documentation.md).

## 🛠 Technológiák

- **Backend**: Laravel
- **Frontend**: React + Inertia.js
- **Database**: SqLite
- **Egyéb**: TailwindCss, Shadcn


## 🚀 Telepítés

```bash

composer install
npm install
cp .env.example .env
php artisan key:generate
php artisan migrate
ncomposer run dev

📁 Mappastruktúra
A projekt fájlszerkezete a következőképpen épül fel:
RideHub/
├── app/
├── bootstrap/
├── config/
├── cypress/
├── database/
│   ├── factories/
│   ├── migrations/
│   ├── seeders/
│   └── database.sqlite
├── Documentation/
├── node_modules/
├── public/
├── resources/
│   ├── css/
│   └── js/
│       ├── Components/
│       │   ├── AuthenticatedLayout.jsx
│       │   └── GuestLayout.jsx
│       ├── Pages/
│       │   ├── Auth/
│       │   ├── Cars/
│       │   │   └── Index.jsx
│       │   ├── Drivers/
│       │   │   ├── Drivercard.jsx
│       │   │   └── Index.jsx
│       │   ├── DriverUser/
│       │   │   └── Index.jsx
│       │   ├── Orders/
│       │   │   ├── carChoosing.jsx
│       │   │   ├── Drivercard2.jsx
│       │   │   ├── driversChoosing.jsx
│       │   │   ├── Index.jsx
│       │   │   ├── OrderButton.jsx
│       │   │   └── settlementsChoosing.jsx
│       │   └── Profile/
│       │       ├── Partials/
│       │       │   └── Edit.jsx
│       │       ├── UserOrder/
│       │       │   ├── Dashboard.jsx
│       │       │   ├── Feedback.jsx
│       │       │   ├── Feedbacktest.jsx
│       │       │   ├── Welcome.jsx
│       │       │   └── Welcome.test.jsx
│       ├── app.jsx
│       ├── bootstrap.js
│       └── ziggy.js
├── routes/
├── storage/
├── tests/
├── .env
├── .gitignore
└── package.json
