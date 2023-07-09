DROP SCHEMA IF EXISTS bancos;


CREATE SCHEMA bancos;

USE bancos;

CREATE TABLE cuenta(
	IBAN VARCHAR(5) NOT NULL,
    id_titular VARCHAR(10) NOT NULL,
    saldo FLOAT DEFAULT 0,
    PRIMARY KEY (IBAN)
) ENGINE = InnoDB;


INSERT INTO cuenta
(IBAN, id_titular, saldo) VALUES
('00001', '111H', 1000),
('00002', '222K', 2000),
('00003', '111H', 5000),
('00004', '333M', 3000),
('00005', '444T', 0);


UPDATE cuenta SET saldo = saldo-1000 WHERE IBAN ='00002';
UPDATE cuenta SET saldo = saldo+1000 WHERE IBAN ='00004';

    