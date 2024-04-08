CREATE TABLE visit (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    visitor_id INT,
    janitor_id INT,
    entry_time TIMESTAMP,
    exit_time  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    reason_id INT,

    FOREIGN KEY(visitor_id) REFERENCES visitor(id),
    FOREIGN KEY(janitor_id) REFERENCES users(id),
    FOREIGN KEY(reason_id)  REFERENCES reason(id)
);