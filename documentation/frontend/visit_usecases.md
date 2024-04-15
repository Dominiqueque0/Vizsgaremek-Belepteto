# Látogatás használati esetek

---

| Név                        | Belépés hozzáadása                                                                                                                                                             |
|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Azonosító                  | UC_V_CREATE                                                                                                                                                                    |
| Leírás                     | Egy belépés rögzítése a rendszerben                                                                                                                                            |
| Kiváltó esemény            | Az egyik felhasználó (portás) egy ember belépését kívánja rögzíteni                                                                                                            |
| Elsődleges lefutás         | A felhasználó a főoldalon a felvétel gombra nyom.<br/> Megadja az adatokat és megnyomja a felvétel gombot.<br/>A rendszer a bent lévő személyek táblázatba átrakja a személyt. | 
| Alternatívák és kivételek  | -                                                                                                                                                                              | 
| Utófelvétel                | Az adott személy (dolgozó vagy vendég) sikeresen rögzítésre került a rendszerben.                                                                                              | 
| Eredmény                   | Az portás a személyt a rendszerben kezelni tudja.                                                                                                                              |                                                                                                                           
| Név                        | Belépések listázása                                            |
|----------------------------|----------------------------------------------------------------|
| Azonosító                  | UC_V_LIST                                                      |
| Leírás                     | Belépések listázása                                            |
| Kiváltó esemény            | A felhasználó látni szeretné kik vannak belépve                |
| Elsődleges lefutás         | A felhasználó a portás oldaon áll ahol ezt alapból látja.<br/> | 
| Alternatívák és kivételek  | -                                                              | 
| Utófelvétel                | -                                                              | 
| Eredmény                   | A felhasználó látja kik vannak belépve                         | 


| Név                        | Belépés lekérdezése                                                       |
|----------------------------|---------------------------------------------------------------------------|
| Azonosító                  | UC_V_GET                                                                  |
| Leírás                     | Belépés adatainak lekérdezése ID alapján                                  |
| Kiváltó esemény            | A felhasználó látni szeretné hogy egy adott személy be van-e lépve        |
| Elsődleges lefutás         | A felhasználó a portás oldaon áll ahol ezt alapból látja.<br/>            | 
| Alternatívák és kivételek  | E1: Nem létezik ember ilyen ID-val <br> E1: A kérés nem fut le, hibát dob | 
| Utófelvétel                | -                                                                         | 
| Eredmény                   | A felhasználó látja az adott személy adatait                              | 
 

| Név                        | Felhasználó törlése                                                                             |
|----------------------------|-------------------------------------------------------------------------------------------------|
| Azonosító                  | UC_V_Delete                                                                                     |
| Leírás                     | ID megadásával belépés törlése a rendszerből                                                    |
| Kiváltó esemény            | Az admin kíván törölni egy belépést a rendszerből.                                              |
| Elsődleges lefutás         | Az admin az admin oldalon áll.<br/> Megnyomja a törlés gombot.<br/>A rendszer törli a belépést. | 
| Alternatívák és kivételek  | E1: Nem létezik ilyen ID-val ember <br> E1: A rendszer hibát dob és a kérés nem fut le          | 
| Utófelvétel                | A belépés törlésre került a rendszerben.                                                        | 
| Eredmény                   | A belépés nem lesz benne a rendszerben.                                                         | 
 


| Név                        | Kilépés megadása                                                                                               |
|----------------------------|----------------------------------------------------------------------------------------------------------------|
| Azonosító                  | UC_V_Exit                                                                                                      |
| Leírás                     | ID és idő megadásával kilépés idejének rögzítése                                                               |
| Kiváltó esemény            | Az felhasználó kívánja valakinek a kilépési idejét megadni.                                                    |
| Elsődleges lefutás         | A felhasználó a főoldalon áll.<br/> Megnyomja a "Kilépés rögzítése" gombot.<br/>A rendszer rögzíti a kilépést. | 
| Alternatívák és kivételek  | -                                                                                                              | 
| Utófelvétel                | -                                                                                                              | 
| Eredmény                   | A kilépés rögzítésre került a rendszerben.                                                                     | 



| Név                        | Felhasználó törlése                                                                                                                                                          |
|----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Azonosító                  | UC_V_DeleteAll                                                                                                                                                               |
| Leírás                     | A belépések "nullázása"                                                                                                                                                      |
| Kiváltó esemény            | A portás vagy az admin le akarja zárni az adott napot.                                                                                                                       |
| Elsődleges lefutás         | A felhasználó a főoldalon áll.<br/> Megnyomja a mentés ikont.<br/>A rendszer törli az összes belépést miután lefutott a [UC-SD-Create](saveday_usecases.md) használati eset. | 
| Alternatívák és kivételek  | -                                                                                                                                                                            | 
| Utófelvétel                | Az összes belépés törlésre került a bal oldali "belépői" táblából .                                                                                                          | 
| Eredmény                   | A belépések nullázódnak.                                                                                                                                                     | 


---
