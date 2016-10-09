
CREATE TABLE users (
member_id 			INT NOT NULL,
fname 					VARCHAR(50) NOT NULL,
lname 					VARCHAR(50) NOT NULL,
city 						VARCHAR(50) NOT NULL,
state						VARCHAR(50) NOT NULL,
birthday				VARCHAR(50) NOT NULL,
email 					VARCHAR UNIQUE PRIMARY KEY NOT NULL,
password_hash 	VARCHAR NOT NULL
);

