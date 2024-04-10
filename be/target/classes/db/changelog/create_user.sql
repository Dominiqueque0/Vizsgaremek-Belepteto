CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    username VARCHAR(50),
    password VARCHAR(100),
    type_id VARCHAR(50),
    role                    varchar(100)    not null,
    authority               varchar(100)    not null,
    FOREIGN KEY (type_id) REFERENCES user_type(id)
);