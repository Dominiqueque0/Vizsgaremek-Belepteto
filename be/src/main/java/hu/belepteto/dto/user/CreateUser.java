package hu.belepteto.dto.user;

import hu.belepteto.model.UserType;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class CreateUser {
    private String name;
    private String userName;
    private String password;
    private UserType userType;

    public CreateUser(String name, String userName, String password, UserType userType) {
        this.name = name;
        this.userName = userName;
        this.password = password;
        this.userType = userType;
    }

    public CreateUser() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }
}
