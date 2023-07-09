#Informe  de inventarios
#Total de contenedores por panal y estanteria
SELECT 
    SUBSTRING_INDEX(estanteria, ' ', 1) as Estante,
    (
		SELECT count(cantidad) FROM wmsrepruebasdin.inventory_inventory
		where SUBSTRING_INDEX(estanteria, ' ', 1)  = estante 
        and SUBSTRING_INDEX(SUBSTRING_INDEX(estanteria, ' ', 2), ' ', -1) = 1
	) as P1,
    (
		SELECT count(cantidad) FROM wmsrepruebasdin.inventory_inventory 
		where SUBSTRING_INDEX(estanteria, ' ', 1)  = estante 
        and SUBSTRING_INDEX(SUBSTRING_INDEX(estanteria, ' ', 2), ' ', -1) = 2
	) as P2,
    (
		SELECT count(cantidad) FROM wmsrepruebasdin.inventory_inventory
		where SUBSTRING_INDEX(estanteria, ' ', 1)  = estante 
        and SUBSTRING_INDEX(SUBSTRING_INDEX(estanteria, ' ', 2), ' ', -1) = 3
	) as P3,
    (
		SELECT count(cantidad) FROM wmsrepruebasdin.inventory_inventory
		where SUBSTRING_INDEX(estanteria, ' ', 1)  = estante 
        and SUBSTRING_INDEX(SUBSTRING_INDEX(estanteria, ' ', 2), ' ', -1) = 4
	) as P4,
    (
		SELECT count(cantidad) FROM wmsrepruebasdin.inventory_inventory
		where SUBSTRING_INDEX(estanteria, ' ', 1)  = estante 
        and SUBSTRING_INDEX(SUBSTRING_INDEX(estanteria, ' ', 2), ' ', -1) = 5
	) as P5,
    (
		SELECT count(cantidad) FROM wmsrepruebasdin.inventory_inventory
		where SUBSTRING_INDEX(estanteria, ' ', 1)  = estante 
        and SUBSTRING_INDEX(SUBSTRING_INDEX(estanteria, ' ', 2), ' ', -1) = 6
	) as P6,
    (
		SELECT count(cantidad) FROM wmsrepruebasdin.inventory_inventory
		where SUBSTRING_INDEX(estanteria, ' ', 1)  = estante 
	) as TOTAL
    
FROM inventory_inventory
#WHERE SUBSTRING_INDEX(estanteria, ' ', 1) = '100'
group by estante;