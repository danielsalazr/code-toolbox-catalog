IMPORT "database_name"."*" AS BINARY
FROM '/usr/sap/NDB/HDB00/work/backup_file'
WITH IGNORE EXISTING THREADS 10
RENAME SCHEMA "SCHEMA_NAME_ORIGINAL_DB"
TO "SCHEMA_NAME_TEST_DB"	
