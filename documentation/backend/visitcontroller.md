## VisitController.java

Vezérlő osztály a látogatásokkal kapcsolatos műveletek kezeléséhez.

### Végpontok
- `POST /visit`: Hozzáad egy új látogatási rekordot. A bemeneti értéke egy "RequestBody" CreateVisit és egy GetVisittel tér vissza.
- `GET /visit/{id}`: Lekéri a látogatási rekordot azonosító alapján. A bemeneti értéke egy Id és egy GetVistittel tér vissza.
- `POST /visit/list`: Felsorolja az összes látogatási rekordot. Nincs bemeneti értéke és egy Listányi GetVisittel tér vissza.
- `DELETE /visit/{id}`: Töröl egy látogatási rekordot azonosító alapján. A bemeneti értéke egy Id és egy boolean(true) értékkel tér vissza.
- `PATCH /visit/{id}`: Frissít egy látogatási rekordot azonosító alapján. A bemeneti értéke egy Id és egy GetVistittel tér vissza.
- `DELETE /visit/all`: Töröl az összes látogatási rekordot. Nincs bemeneti értéke és egy boolean(true) értékkel tér vissza.
