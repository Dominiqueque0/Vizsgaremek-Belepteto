## Vendég használati esetek

---

| Név                        | Új Vendég felvétele                                                                                                                           |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Azonosító                  | UC-VR-CREATE                                                                                                                                  |
| Leírás                     | Egy új vendég rögzítése a rendszerben                                                                                                         |
| Kiváltó esemény            | Az egyik felhasználó (portás) egy vendéget kíván rögzíteni                                                                                    |
| Elsődleges lefutás         | A felhasználó a főoldalon a felvétel gombra nyom.<br/> Megadja az adatokat és megnyomja a felvétel gombot.<br/>A rendszer rögzítí a vendéget. | 
| Alternatívák és kivételek  | E1: A portás nem adott meg nevet. <br/> E1: A rögzítés nem került végrehajtásra.                                                              | 
| Utófelvétel                | A vendég sikeresen rögzítésre került a rendszerben.                                                                                           | 
| Eredmény                   | Az portás az új vendéget a rendszerben kezelni tudja.                                                                                         | 


| Név                        | Bejelentkezés                                                                                                                                                                          |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Azonosító                  | UC-VR-LOGIN                                                                                                                                                                            |
| Leírás                     | Bejelentkezés a rendszerbe                                                                                                                                                             |
| Kiváltó esemény            | Egy személy kíván bejelentkezni az alkalmazásba                                                                                                                                        |
| Elsődleges lefutás         | A felhasználó a bejelentezés oldaon áll.<br/> Beírja a felhasználónevet és jelszót majd megnyomja a belépés gombot.<br/>Ha a két adat megfelelő akkor bejelentkeztünk az alkalmazásba. | 
| Alternatívák és kivételek  | E1: Nem lett egy mező kitöltve. <br/>E1: Az oldal kiírja a hiba okát.<br> E2: Egy mező hibásan lett kitöltve. <br/>E2: Az oldal kiírja a hiba okát.                                    | 
| Utófelvétel                | A bejelentkezés sikeres és elérhetővé válik az oldal.                                                                                                                                  | 
| Eredmény                   | A felhaználó típusától függően az alaklmazás a megfelelő oldalra navítál.                                                                                                              | 


| Név                        | Vendégek listázása                                                      |
|----------------------------|-------------------------------------------------------------------------|
| Azonosító                  | UC-VR-List                                                              |
| Leírás                     | Az összes rendszerben található vendég kilistázása                      |
| Kiváltó esemény            | Valaki meg akarja nézni az összes vendéget aki benne van a rendszerben. |
| Elsődleges lefutás         | A személy a főoldalon áll ahol ezt alapból látja.                       | 
| Utófelvétel                | -                                                                       | 
| Alternatívák és kivételek  | -                                                                       | 
| Eredmény                   | A felhasználó látja az összes adatot.                                   | 


| Név                        | Vendég törlése                                                                             |
|----------------------------|--------------------------------------------------------------------------------------------|
| Azonosító                  | UC-VR-Delete                                                                               |
| Leírás                     | ID megadásával vendég törlése a rendszerből                                                |
| Kiváltó esemény            | Az admin kíván törölni egy vendéget a rendszerből.                                         |
| Elsődleges lefutás         | Az admin a főoldalon áll.<br/> Megnyomja a törlés gombot.<br/>A rendszer törli a vendéget. | 
| Alternatívák és kivételek  | -                                                                                          | 
| Utófelvétel                | A vendég törlésre került a rendszerben.                                                    | 
| Eredmény                   | A felhasználó nem lesz benne a rendszerben.                                                | 

---
