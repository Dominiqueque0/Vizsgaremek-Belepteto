# SavedDayService.java

Ez az osztály felelős a mentett napokkal kapcsolatos üzleti logika végrehajtásáért és az adatbázis-műveletek elvégzéséért.

### Metódusok

- `createSavedDay()`: Új mentett napok létrehozása.
- `getSavedDayByDate(Date date)`: Mentett napok lekérése egy adott dátum alapján.

  **Paraméterek:**
    - `date` (Date): A keresendő dátum.

- `deleteSavedDay(Integer id)`: Mentett nap törlése azonosító alapján.

  **Paraméterek:**
    - `id` (Integer): A törlendő mentett nap azonosítója.
