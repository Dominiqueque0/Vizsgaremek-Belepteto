CREATE TABLE saved_day(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    visit_id INT,
    savedate TIMESTAMP,

    FOREIGN KEY(visit_id) REFERENCES visit(id)
)