CREATE TABLE visit (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    visitor_id INT,
    entry_time TIMESTAMP,
    exit_time  TIMESTAMP NULL,

    FOREIGN KEY(visitor_id) REFERENCES visitor(id)
);