package hu.belepteto.service;

import hu.belepteto.converter.UserConverter;
import hu.belepteto.dto.user.GetUser;
import hu.belepteto.dto.user.GetUserNoPassword;
import hu.belepteto.exception.UserNotFoundException;
import hu.belepteto.model.UserPrincipal;
import hu.belepteto.model.Users;
import hu.belepteto.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@Qualifier("userDetailsService")
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository repository;


    public static final String NO_USER_FOUND_BY_USERNAME = "No user found by username: ";


//    public GetUser createUser(CreateUser createUser) {
//        Users user = new Users();
//        user.setName(createUser.getName());
//        user.setUserName(createUser.getUserName());
//        user.setPassword(createUser.getPassword());
//        user.setUserType(createUser.getUserType());
//
//        Users created = repository.save(user);
//        return new GetUser(
//                created.getId(),
//                created.getName(),
//                created.getUserName(),
//                created.getPassword(),
//                created.getUserType()
//        );
//    }

    public List<GetUserNoPassword> listUsers() {
        List<GetUserNoPassword> getUserList = new ArrayList<>();
        List<Users> users = repository.findAll();
        for (Users user : users) {
            getUserList.add(UserConverter.convertUserToGet(user));
        }
        return getUserList;
    }

    public boolean deleteUser(java.lang.Integer id) {
        if(!repository.existsById(id))
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        repository.deleteById(id);
        return true;
    }



    public List<GetUser> getUsers() {
        List<Users> users = repository.findAll();
        List<GetUser> getUsers = new ArrayList<>();
        for (Users user : users) {
            getUsers.add(UserConverter.convertModelToDto(user));
        }
        return getUsers;
    }

    public Users findUserByUsername(String username) {
        return repository.findByUsername(username);

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = repository.findByUsername(username);
        if (user == null) {
            throw new UserNotFoundException(NO_USER_FOUND_BY_USERNAME + username);
        } else {
            UserPrincipal userPrincipal = new UserPrincipal(user);
            return userPrincipal;
        }
    }
}
