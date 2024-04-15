# Saveday használati esetek

---

| Név                        | Nap mentése                                                                                                                                                                    |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Azonosító                  | UC-SD-CREATE                                                                                                                                                                   |
| Leírás                     | A belépések mentése, nap zárása                                                                                                                                                |
| Kiváltó esemény            | A portás vagy az admin le akarja zárni az adott napot.                                                                                                                         |
| Elsődleges lefutás         | A felhasználó a főoldalon áll.<br/> Megnyomja a mentés ikont.<br/>A rendszer lementi az adott nap belépéseit majd lefut a [UC-V-DeleteAll](visit_usecases.md) használati eset. | 
| Alternatívák és kivételek  | -                                                                                                                                                                              | 
| Utófelvétel                | Az összes belépés törlésre került a bal oldali "belépői" táblából és rögzítésre kerülnek a nap be- és kilépései.                                                               |                  
| Eredmény                   | A belépések nullázódnak, a felhasználó nem látja a belépés táblában a korábbi belépéseket, de megtekintheti az aznapi mentett adatokat.                                        |                  | Használati eset realizáció | Technikai modell                                                                                                                                                               |                                                                                                                                                              

| Név                        | Lementett nap visszakeresés                                                                                                                  |
|----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Azonosító                  | UC-SD-FINDBYDATE                                                                                                                             |
| Leírás                     | A lementett belépések közti keresés                                                                                                          |
| Kiváltó esemény            | A portás vagy az admin vissza akarja nézni ki lépett be egy adott napon.                                                                     |
| Elsődleges lefutás         | A felhasználó a mentett táblák oldalon áll.<br/> A naptárban kiválasztja a napot.<br/>A rendszer visszakeresi az adott nap összes belépését. | 
| Alternatívák és kivételek  | -                                                                                                                                            | 
| Utófelvétel                | A nap összes belépése kiválogatásra kerül az adatbázisból.                                                                                   | 
| Eredmény                   | A felhasználó látja a belépéseket az adott napra vonatkozóan.                                                                                | 
| Használati eset realizáció | Technikai modell                                                                                                                             | 
