## VisitorController.java

Vezérlő osztály a látogatókkal kapcsolatos műveletek kezeléséhez.

### Végpontok
- `POST /visitor`: Hozzáad egy új látogatót. A bementi értéke egy "RequestBody"-s CreateVisitor és egy GetVistor-ral tér vissza.
- `GET /visitor/{id}`: Lekéri a látogatót azonosító alapján. A bemeneti éréke egy Visitor ID és egy GetVisitorral tér vissza.
- `POST /visitor/list`: Felsorolja az összes látogatót. Nincs bemeneti értéke és egy listányi GetVisitorral tér vissza.
- `DELETE /visitor/{id}`: Töröl egy látogatót azonosító alapján. A bemeneti értéke egy Vistor ID-ja és egy boolean(true) értékkel tér vissza.
