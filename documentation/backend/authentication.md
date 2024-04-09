# Autentikáció

Ez a rész felelős az egyes felhasználók bejelentkeztetéséért, a szerepköre eldöntéséért, illetve kijelentkeztetéséért.

## SecurityConfiguration.java

Ez az osztály felelős a Spring Security beállításainak konfigurálásáért.

### Bean-ek
- `securityFilterChain(HttpSecurity httpSecurity)`: Konfigurálja az HTTP biztonsági beállításokat.
- `userDetailsService()`: Meghatározza a felhasználói részletek szolgáltatását.
- `authenticationProvider()`: Felhasználói részletek alapján biztosít hitelesítést.
- `passwordEncoder()`: Meghatározza a jelszó kódolót.

# Swagger Konfiguráció

Ez a konfigurációs osztály felelős az OpenAPI (Swagger) beállításokért és az alkalmazásbiztonság inicializálásáért a Spring Boot projektben.

- `createAPIKeyScheme metódus`: Ez a metódus a biztonsági sémát hozza létre az API kulcs alapú hitelesítéshez.

- `openAPI metódus`: Ez a metódus inicializálja az OpenAPI objektumot, biztosítva a megfelelő biztonsági elemeket és az alkalmazás információját.

- `bCryptPasswordEncoder metódus`: Ez a metódus a BCrypt jelszó kódolót inicializálja, melyet a jelszavak biztonságos tárolására használunk.

## Felhasználás

Ezt a konfigurációs osztályt használjuk az OpenAPI dokumentáció beállítására és a biztonsági sémák inicializálására a Spring Boot alkalmazásban.

---

# JWTTokenProvider 

Ez a tokenkezelő osztály felelős a JSON Web Token (JWT) generálásáért és ellenőrzéséért a Spring Security alkalmazásban.

## Metódusok

### `generateJwtToken(UserPrincipal userPrincipal)`

Generál egy JWT tokent egy felhasználói alany alapján.

### `getAuthorities(String token)`

Visszaadja a tokennel azonosított felhasználó jogosultságait.

### `getAuthentication(String username, List<GrantedAuthority> authorities, HttpServletRequest request)`

Visszaadja a felhasználó hitelesítési adatait egy HTTP kérés alapján.

### `isTokenValid(String username, String token)`

Ellenőrzi, hogy a token érvényes-e egy adott felhasználóhoz.

### `getSubject(String token)`

Visszaadja a tokennel azonosított felhasználó azonosítóját.