CREATE TABLE visitor (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    type_id VARCHAR(50),
    id_number VARCHAR(8),
    checked_in BOOLEAN,

    FOREIGN KEY (type_id) REFERENCES visitor_type(id)
);