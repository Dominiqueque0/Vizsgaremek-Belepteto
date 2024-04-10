package hu.belepteto.converter;

import hu.belepteto.dto.user.GetUser;
import hu.belepteto.dto.user.GetUserNoPassword;
import hu.belepteto.model.Users;

public class UserConverter {
    public static GetUserNoPassword convertUserToGet(Users users){
        GetUserNoPassword getUserNoPassword = new GetUserNoPassword();
        getUserNoPassword.setName(users.getName());
        getUserNoPassword.setUserName(users.getUsername());
        getUserNoPassword.setId(users.getId());
        getUserNoPassword.setUserType(users.getUserType());
        return getUserNoPassword;
    }

    public static GetUser convertModelToDto(Users user){
        GetUser getUser = new GetUser();
        getUser.setId(user.getId());
        getUser.setName(user.getName());
        getUser.setUsername(user.getUsername());
        getUser.setPassword(user.getPassword());
        getUser.setUserType(user.getUserType());

        return getUser;
    }
}
