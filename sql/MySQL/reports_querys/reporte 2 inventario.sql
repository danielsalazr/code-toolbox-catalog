SELECT *, estanteria, referencia, cantidad FROM wmsrepruebasdin.inventory_inventory
where SUBSTRING_INDEX(estanteria, ' ', 1)  = 100
and SUBSTRING_INDEX(SUBSTRING_INDEX(estanteria, ' ', 2), ' ', -1) = 5
order by SUBSTRING_INDEX(SUBSTRING_INDEX(estanteria, ' ', 2), ' ', -1),
SUBSTRING_INDEX(SUBSTRING_INDEX(estanteria, ' ', 3), ' ', -1);