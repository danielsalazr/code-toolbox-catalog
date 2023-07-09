SELECT 	T0."DocEntry",
		T0."DocNum",
		T0."DocDate" AS "FechaContabilización",
		T0."DocDueDate" AS "FechaVencimiento",
		T0."TaxDate" AS "FechadeDocumento",
		T0."CardCode",
		T0."CardName",
		T0."U_TI_SALEORDER",
		T1."ItemCode",
		T1."Dscription",
		T1."OcrCode",
		T1."OcrCode2",
		T4."ItmsGrpNam"
FROM "OINV" T0
INNER JOIN "INV1" T1 ON T0."DocEntry" = T1."DocEntry"
INNER JOIN "OITM" T2 ON T1."ItemCode" = T2."ItemCode"
LEFT JOIN "@GSP_TCMODEL" T3 ON T2."U_GSP_REFERENCE" = T3."U_GSP_REFERENCE"
INNER JOIN "OITB" T4 ON T2."ItmsGrpCod" = T4."ItmsGrpCod"

