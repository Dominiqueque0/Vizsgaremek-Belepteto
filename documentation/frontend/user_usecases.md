# User haszálati esetek

---


| Név                        | Bejelentkezés                                                                                                                                                                          |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Azonosító                  | UC-U-LOGIN                                                                                                                                                                             |
| Leírás                     | Bejelentkezés a rendszerbe                                                                                                                                                             |
| Kiváltó esemény            | Egy személy kíván bejelentkezni az alkalmazásba                                                                                                                                        |
| Elsődleges lefutás         | A felhasználó a bejelentezés oldaon áll.<br/> Beírja a felhasználónevet és jelszót majd megnyomja a belépés gombot.<br/>Ha a két adat megfelelő akkor bejelentkeztünk az alkalmazásba. | 
| Alternatívák és kivételek  | E1: Nem lett egy mező kitöltve. <br/>E1: Az oldal kiírja a hiba okát.<br> E2: Egy mező hibásan lett kitöltve. <br/>E2: Az oldal kiírja a hiba okát.                                    | 
| Utófelvétel                | A bejelentkezés sikeres és elérhetővé válik az oldal.                                                                                                                                  | 
| Eredmény                   | A felhasználó típusától függően az alaklmazás a megfelelő oldalra navítál.                                                                                                             | 

| Név                        | Felhasználók listázása                                                                                                                                                    |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Azonosító                  | UC-U-List                                                                                                                                                                 |
| Leírás                     | Az összes rendszerben található felhasználó kilistázása a jelszava nélkül                                                                                                 |
| Kiváltó esemény            | Az admin meg akarja nézni az összes felhasználót aki regisztrálva van a rendszerben.                                                                                      |
| Elsődleges lefutás         | Az admin a főoldalon áll áll.<br/>Megadja a változtatni kívánt adatokat<br/> Megadja az adatokat és megnyomja a mentés gombot.<br/>A rendszer módosítja a vadász adatait. | 
| Utófelvétel                | -                                                                                                                                                                         | 
| Alternatívák és kivételek  | -                                                                                                                                                                         | 
| Eredmény                   | A felhasználó látja az adatokat.                                                                                                                                          | 

| Név                        | Felhasználó törlése                                                                            |
|----------------------------|------------------------------------------------------------------------------------------------|
| Azonosító                  | UC-U-Delete                                                                                    |
| Leírás                     | Felhasználó törlése egyedi ID megadásával a rendszerből véglegesen                             |
| Kiváltó esemény            | Az admin kíván törölni egy kiválasztott vadászt.                                               |
| Elsődleges lefutás         | Az admin a főoldalon áll.<br/> Megnyomja a törlés gombot.<br/>A rendszer törli a felhasználót. | 
| Alternatívák és kivételek  | -                                                                                              | 
| Utófelvétel                | A felhasznló törlésre került a rendszerben.                                                    | 
| Eredmény                   | A felhasználó nem tud bejelentkezni.                                                           | 

---
