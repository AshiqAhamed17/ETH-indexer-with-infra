CREATE TABLE binanceUsers (
    id SERIAL PRIMARY KEY, -- Unique ID for each user
    username VARCHAR(255) NOT NULL, -- Username of the user
    password VARCHAR(255) NOT NULL, -- User's password
    depositAddress TEXT, -- Ethereum deposit address
    privateKey TEXT, -- Wallet private key
    balance NUMERIC DEFAULT 0 -- User's balance, default is 0
);