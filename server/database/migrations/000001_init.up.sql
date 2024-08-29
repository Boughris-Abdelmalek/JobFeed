CREATE TABLE job (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

INSERT INTO job (id, title)
VALUES
    (1, 'Software Engineer'),
    (2, 'Data Scientist'),
    (3, 'Product Manager'),
    (4, 'UX/UI Designer'),
    (5, 'DevOps Engineer'),
    (6, 'Sales Manager'),
    (7, 'Marketing Specialist'),
    (8, 'Customer Support Representative'),
    (9, 'Business Analyst'),
    (10, 'Full Stack Developer')