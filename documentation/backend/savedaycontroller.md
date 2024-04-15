# SavedDayController.java

Ez a vezérlő osztály a mentett napokkal kapcsolatos műveleteket kezeli.

## Végpontok

### Mentett nap létrehozása

- **HTTP metódus:** POST
- **URL:** /savedDay/create
- **Leírás:** Létrehoz egy új mentett napot.
- **Visszatérés:** A létrehozott mentett napok listája.

### Mentett napok lekérése dátum alapján

- **HTTP metódus:** POST
- **URL:** /savedDay
- **Leírás:** Lekéri a mentett napokat egy adott dátum alapján.
- **Kérés törzse:** Dátum objektum, amely megadja a kívánt dátumot.
- **Visszatérés:** A megadott dátumhoz tartozó mentett napok listája.
