USE wmsrepruebasdin;

SELECT
  SUBSTRING_INDEX(SUBSTRING_INDEX(estanteria, ',', numbers.n), ',', -1) as nombre
FROM
  (SELECT 1 n UNION ALL
   SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4) numbers
   JOIN (SELECT estanteria FROM inventory_inventory) t
   ON CHAR_LENGTH(t.estanteria) - CHAR_LENGTH(REPLACE(t.estanteria, ',', '')) >= numbers.n - 1;
   
   
SELECT 
	*, 
	SUBSTRING_INDEX(estanteria, ' ', 1) as estante,
    SUBSTRING_INDEX(SUBSTRING_INDEX(estanteria, ' ', 2), ' ', -1) AS segundo_substring,
    sum(cantidad)
    
FROM inventory_inventory
#WHERE SUBSTRING_INDEX(estanteria, ' ', 1) = '100'
group by estante;