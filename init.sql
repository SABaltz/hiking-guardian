-- Create the 'users' table
CREATE TABLE IF NOT EXISTS users
(
    id       SERIAL PRIMARY KEY,
    username VARCHAR(255)  NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Insert some users
INSERT INTO users (username, password)
VALUES ('john', '$2a$10$kJEanFctS/tRWtO8pnXTgON6Dzff3kCWtCRJa7f1cTeyTIvmr11SC');
INSERT INTO users (username, password)
VALUES ('jane', '$2a$10$UJDwJWWbb1fjkQhGrOjkq.oWqmNVlGFA.9XjwCGy5HtxxfUieFB0K');
