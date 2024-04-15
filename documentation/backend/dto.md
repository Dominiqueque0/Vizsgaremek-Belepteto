# DTO Package

Ez a csomag tartalmazza a DTO (Data Transfer Object) osztályokat, amelyek az adatok átvitelére szolgálnak az alkalmazás rétegei között.

## CreateUser.java

DTO osztály egy új felhasználó létrehozásához.

### Attribútumok
- `name`: Felhasználó teljes neve.
- `userName`: Felhasználónév.
- `password`: Jelszó.
- `userType`: Felhasználó típusa.

---

## GetUser.java

DTO osztály a felhasználói adatok lekérdezéséhez.

### Attribútumok
- `id`: Felhasználó azonosítója.
- `name`: Felhasználó teljes neve.
- `userName`: Felhasználónév.
- `password`: Jelszó.
- `userType`: Felhasználó típusa.

---

## GetUserNoPassword.java

DTO osztály a felhasználói adatok jelszó nélküli lekérdezéséhez.

### Attribútumok
- `id`: Felhasználó azonosítója.
- `name`: Felhasználó teljes neve.
- `userName`: Felhasználónév.
- `userType`: Felhasználó típusa.

---

## CreateVisit.java

Ez a DTO osztály egy új látogatás adatait reprezentálja.

### Attribútumok
- `visitorId` (Integer): Látogató azonosítója.
- `janitorId` (Integer): Intéző azonosítója.
- `entryTime` (Date): Belépés ideje.
- `exitTime` (Date): Kilépés ideje.
- `reasonId` (Integer): Ok azonosítója.

---

## GetVisit.java

Ez a DTO osztály a látogatási adatokat reprezentálja.

### Attribútumok
- `id` (Integer): Látogatás azonosítója.
- `visitorId` (Integer): Látogató azonosítója.
- `janitorId` (Integer): Intéző azonosítója.
- `entryTime` (String): Belépés ideje.
- `exitTime` (String): Kilépés ideje.
- `reasonId` (Integer): Ok azonosítója.

---

## UpdateOneVisit.java

Ez a DTO osztály egy látogatás rekord frissítését reprezentálja.

### Attribútumok
- `exitTime` (Date): Kilépés ideje.

---

## CreateVisitor.java

Ez a DTO osztály egy új látogató adatait reprezentálja.

### Attribútumok
- `name` (String): Látogató neve.
- `visitorType` (VisitorType): Látogató típusa.
- `idNumber` (String): Azonosító szám.

---

## GetVisitor.java

Ez a DTO osztály a látogató adatait reprezentálja.

### Attribútumok
- `id` (Integer): Látogató azonosítója.
- `name` (String): Látogató neve.
- `visitorType` (VisitorType): Látogató típusa.
- `idNumber` (String): Azonosító szám.

---

# CreateSavedDay.java

Ez a DTO (Data Transfer Object) osztály a mentett napok létrehozásához szükséges adatokat tartalmazza.


### Attribútumok

- `date` (Date): A mentett nap dátuma.
- `visitId` (Visit): A mentett nap látogatásához tartozó azonosító.

---

# GetSavedDay.java

Ez a DTO (Data Transfer Object) osztály a mentett napok lekérdezéséhez szükséges adatokat tartalmazza.

### Attribútumok

- `id` (Integer): A mentett nap azonosítója.
- `date` (Date): A mentett nap dátuma.
- `visitId` (Visit): A mentett nap látogatásához tartozó azonosító.
