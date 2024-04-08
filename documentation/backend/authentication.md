# Authentication Csomag

Ez a csomag tartalmazza az azonosítással kapcsolatos osztályokat.

## SecurityConfiguration.java

Ez az osztály felelős a Spring Security beállításainak konfigurálásáért.

### Bean-ek
- `securityFilterChain(HttpSecurity httpSecurity)`: Konfigurálja az HTTP biztonsági beállításokat.
- `userDetailsService()`: Meghatározza a felhasználói részletek szolgáltatását.
- `authenticationProvider()`: Felhasználói részletek alapján biztosít hitelesítést.
- `passwordEncoder()`: Meghatározza a jelszó kódolót.
