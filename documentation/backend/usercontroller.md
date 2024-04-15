## UserController.java

Vezérlő osztály a felhasználókkal kapcsolatos műveletek kezeléséhez.

### Végpontok
- `POST /user/list`: Felsorolja az összes felhasználót. Egy listányi "GetUserNoPassword"-al tér vissza ami az összes felhasználó listázása jelszavak nélkül.
- `DELETE /user/{id}`: Töröl egy felhasználót azonosító alapján. A bemeneti értéke egy user egyedi aznosítója(id) és boolean (true) értékkel tér vissza.
