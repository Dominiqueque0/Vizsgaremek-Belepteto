CREATE TABLE saved_day(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    visit_id INT,
    savedate TIMESTAMP,
    visitor_id INT,
    name VARCHAR(50),
    entry_time TIMESTAMP NULL,
    exit_time TIMESTAMP NULL,

    FOREIGN KEY (visitor_id) REFERENCES visitor(id),
    CONSTRAINT fk_saved_day_visit_id FOREIGN KEY (visit_id) REFERENCES visit(id) ON DELETE SET NULL
);
