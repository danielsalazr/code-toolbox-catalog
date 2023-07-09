SELECT 
	*
    --MAX(C."Name") 
FROM 
    "RDR1" A
    INNER JOIN "OITM" B ON A."ItemCode" = B."ItemCode"
    INNER JOIN "@GSP_TCCOLLECTION" C ON C."Code" LIKE '%' || B."U_GSP_COLLECTION"
    INNER JOIN "ORDR" D ON A."DocEntry" = D."DocEntry"
WHERE D."DocNum" = '2'
