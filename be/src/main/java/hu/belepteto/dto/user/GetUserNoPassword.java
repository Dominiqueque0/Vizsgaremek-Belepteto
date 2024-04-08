package hu.belepteto.dto.user;

import hu.belepteto.model.UserType;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class GetUserNoPassword {
    private Integer id;
    private String name;
    private String userName;
    private UserType userType;

    public GetUserNoPassword(Integer id, String name, String userName, UserType userType) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.userType = userType;
    }

    public GetUserNoPassword() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }
}
