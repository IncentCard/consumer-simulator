-- consumer simulator: IncentCard.com comuser spending simulator
-- Copyright (C) 2018  David Ulrich

-- create user and database, run this as db admin,
-- or ignore if using an existing user/db
CREATE USER incentcard WITH ENCRYPTED PASSWORD 'incentcard_pass';
CREATE DATABASE incentcard WITH OWNER = incentcard;

GRANT ALL ON DATABASE incentcard TO incentcard;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

