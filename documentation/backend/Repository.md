# Repository Package

Ez a csomag tartalmazza az adatbázis-repository interfészeket, amelyek az adatokhoz való hozzáférést biztosítják az alkalmazás számára.

## UserRepository.java

Ez az interfész felelős a `Users` entitás adatbázis-műveleteinek végrehajtásáért.

### Ez a repository által használt metódus:
- `findByUsername(String username)`: Felhasználó keresése felhasználónév alapján.

---

## VisitorRepository.java

Ez az interfész felelős a `Visitor` entitás adatbázis-műveleteinek végrehajtásáért.

---

## VisitRepository.java

Ez az interfész felelős a `Visit` entitás adatbázis-műveleteinek végrehajtásáért.

---

# SavedDayRepository.java

Ez az interfész felelős a `SavedDay` entitások adatbázisbeli műveleteinek kezeléséért.

### Ez a repository által használt metódus:
- `findByEntryTime`: Belépéseket keres dátum alapján.
