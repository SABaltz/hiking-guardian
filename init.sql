-- Create the 'users' table
CREATE TABLE IF NOT EXISTS users
(
    id       SERIAL PRIMARY KEY,
    username VARCHAR(255)  NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Insert some users
INSERT INTO users (username, password)
VALUES ('john_doe', 'password123');
INSERT INTO users (username, password)
VALUES ('jane_doe', 'mysecurepassword');
