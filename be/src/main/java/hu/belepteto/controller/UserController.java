package hu.belepteto.controller;

import hu.belepteto.converter.UserConverter;
import hu.belepteto.dto.LoginDto;
import hu.belepteto.dto.user.GetUser;
import hu.belepteto.dto.user.GetUserNoPassword;
import hu.belepteto.model.UserPrincipal;
import hu.belepteto.model.Users;
import hu.belepteto.repository.UserRepository;
import hu.belepteto.service.UserService;
import hu.belepteto.token.JWTTokenProvider;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@RestController
@Tag(name = "Felhasználó kezelés")
@RequestMapping(path = "/user")
public class UserController {
    @Autowired
    private UserService service;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private UserRepository repository;

    @Autowired
    public UserController(AuthenticationManager authenticationManager, UserService userService, JWTTokenProvider jwtTokenProvider) {
        this.authenticationManager = authenticationManager;
        this.userService = userService;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Value("${welcome.message}")
    private String welcomeMessage;
    private AuthenticationManager authenticationManager;
    private UserService userService;
    private JWTTokenProvider jwtTokenProvider;

    @PostMapping("/register")
    private Users createUser(@RequestBody Users user){
        user.setPassword(encoder.encode(user.getPassword()));
        return repository.save(user);
    }

    @PostMapping("/list")
    @Operation(summary = "Felhasználók listázása", description = "Az összes rendszerben található felhasználó kilistázása a jelszava nélkül")
    private List<GetUserNoPassword> listUsers(){
        return service.listUsers();
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Felhasználó törlése", description = "Felhasználó törlése egyedi ID megadásával a rendszerből véglegesen")
    private boolean deleteUser(@PathVariable Integer id){
        return service.deleteUser(id);
    }




    @PostMapping("/login")
    @Operation(summary = "Nyilvános végpont")
    public ResponseEntity<GetUser> login(@RequestBody LoginDto loginUser) {
        authenticate(loginUser.getUsername(), loginUser.getPassword());
        Users user = userService.findUserByUsername(loginUser.getUsername());
        UserPrincipal userPrincipal = new UserPrincipal(user);
        HttpHeaders jwtHeader = getJwtHeader(userPrincipal);
        GetUser getUser = UserConverter.convertModelToDto(user);
        return new ResponseEntity<>(getUser, jwtHeader, OK);
    }

    private HttpHeaders getJwtHeader(UserPrincipal user) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Jwt-Token", jwtTokenProvider.generateJwtToken(user));
        return headers;
    }

    private void authenticate(String username, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    }

}
