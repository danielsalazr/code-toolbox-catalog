comandos MYSQL


--Hacer cambios persistentes en mysql
set persist  max_connections = 300;

--reiniciar mysql en consola linux
sudo systemctl restart mysql
sudo /etc/init.d/mysql restart

--modidficar permisos para que mysql ejecute configuracion
sudo chmod -R 664 /etc//mysql/

-- consultar archivos de configuracion en linux
sudo mysql --help | grep -A 1 'Default options'
sudo mysqld --help --verbose --log-bin-index="$(mktemp -u)" 2>/dev/null | grep -A 1 'Default options'



--Modificaciones persistentes que no se borran
set persist  max_connections = 300;


-- modificar ONLY_FULL_GROUP_BY en mysql 8.0.32
-- original
-- 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION'
SET persist sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));


--Ver esatado de Query Cache
SHOW STATUS LIKE 'Qcache%';

--ver esatado de Buffer pool:
SHOW STATUS LIKE 'Innodb_buffer_pool%';

--Ver estado de query cache
SHOW VARIABLES LIKE 'query_cache_type';

--ver tiempo de espera
SHOW VARIABLES LIKE 'wait_timeout';

--Ver el numero de hilos conectados a la bd
SHOW STATUS LIKE 'Threads_connected';

-- ver el maximo de conexiones permitidas:
SHOW variables like 'max_connections';

-- modificar el maximo de conexiones permitidas a:
SET GLOBAL max_connections = 300;

--Ver  conexiones activas a la base de datos:
SHOW PROCESSLIST;

--Ver todas las conexiones activas a la base de datos:
SHOW FULL PROCESSLIST;

--Quitar el modo full group by 
SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));


--ver logs de mysql
show variables like '%log%'; 





SET GLOBAL query_cache_type = ON;

SET GLOBAL query_cache_size = 134218864;
SET GLOBAL query_cache_limit = 134218864; -- 1048576

SHOW VARIABLES;

SET GLOBAL connect_timeout = 20;

SET GLOBAL host_cache_size = 256;


SET SQL_SAFE_UPDATES=0;


-- consultar todos los permisos de usuario
	SELECT user, host, Grant_priv, Super_priv, Select_priv, Insert_priv, Update_priv, Delete_priv, Create_priv, Drop_priv, Reload_priv, Shutdown_priv, Process_priv, File_priv, Grant_priv, References_priv, Index_priv, Alter_priv, Show_db_priv, Super_priv, Create_tmp_table_priv, Lock_tables_priv, Execute_priv, Repl_slave_priv, Repl_client_priv FROM mysql.user;


# verificar si un registro se encuentra repetido en la base de datos

SELECT * , 
COUNT(barcodeAssigned)
as count From serbarcode.SAP_reference
group by barcodeAssigned having count > 1;

# contar numero de registros en tabla de una referencia

SELECT count(*) FROM serbarcode.SAP_reference;

#Autocommit
SET autocommit = 0;
SET global autocommit = 0;


#Commits

ROLLBACK;
COMMIT;


#modificar tiempo de espera de bloqueo
#por default venia en 50 segundos
SHOW VARIABLES LIKE 'innodb_lock_wait_timeout';
SET GLOBAL innodb_lock_wait_timeout = 10;
SET  innodb_lock_wait_timeout = 10;


# Ver tablas en uso
show open tables where in_use > 0 ;

show processlist;

# Identificar threads con transaccion en curso
SELECT * FROM information_schema.INNODB_TRX;

# Matar un thread o process
kill 271;

# Ver bloqueos en base de datos
SELECT * FROM information_schema.INNODB_LOCKs;

# Ver lock  waits en db
SELECT * FROM information_schema.INNODB_LOCK_waits;

# Retornar sentencia para matar todos los procesos activos
SELECT GROUP_CONCAT(CONCAT('KILL ',id,';') SEPARATOR ' ') 'Paste the following query to kill all processes' FROM information_schema.processlist WHERE user<>'system user';
