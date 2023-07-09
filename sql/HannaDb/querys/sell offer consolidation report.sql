SELECT 
     T10."CardCode", T10."CardName",
	 T6."U_GSP_Desc" Modelo,
	 T9."Name" ||' '||T8."Name" CATEGORY ,
	 T8."Name" "PPAL CAT",
     T6."U_GSP_REFERENCE" "STYLE NUMBER",
     T5."Name",
     sum(T1."Quantity"),
     AVG(T1."Price"),
     sum(T1."LineTotal"),
     sum(T1."TotalFrgn"),
     T2."U_GSP_REFERENCE",
     --  '\\10.126.10.2\ImagesJO\'|| T6."U_GSP_Picture" IMAGEN,
       (SELECT T5."BitmapPath" FROM "OADP" T5)||T6."U_GSP_Picture" AS "U_GSP_Picture",
       T6."U_GSP_Picture",
       	
	(SELECT  sum(T0."Quantity") as "talla1"
		FROM QUT1 T0  
		INNER JOIN OQUT T01 ON  T0."DocEntry"= T01."DocEntry" 
		INNER JOIN OITM T11 ON T0."ItemCode" = T11."ItemCode"
		LEFT JOIN  "@GSP_TCMODEL"  TX2 ON  TX2."U_GSP_REFERENCE"= T11."U_GSP_REFERENCE"
		 LEFT JOIN  "@GSP_TCSIZE"  T3 ON T11."U_GSP_Size"= T3."Code" 
		 WHERE T11."U_GSP_REFERENCE" =T2."U_GSP_REFERENCE" --and T01."DocEntry"=1168 
		AND T10."CardCode"= T01."CardCode" AND T3."U_GSP_Desc" in  ('35','XS','0'))AS "35,XS,0", 
	(SELECT  sum(T0."Quantity") as "talla1"
		FROM QUT1 T0  
		INNER JOIN OQUT T01 ON  T0."DocEntry"= T01."DocEntry" 
		INNER JOIN OITM T11 ON T0."ItemCode" = T11."ItemCode"
		LEFT JOIN  "@GSP_TCMODEL"  TX2 ON  TX2."U_GSP_REFERENCE"= T11."U_GSP_REFERENCE"
		LEFT JOIN  "@GSP_TCSIZE"  T3 ON T11."U_GSP_Size"= T3."Code"
		LEFT JOIN "ITM1" V ON V."ItemCode" = T11."ItemCode" AND V."PriceList"=1 AND V."Price">1
        LEFT JOIN "ITM1" Z ON Z."ItemCode" = T11."ItemCode" AND Z."PriceList"=2 AND Z."Price">1
		 WHERE T11."U_GSP_REFERENCE" =T2."U_GSP_REFERENCE" --and T01."DocEntry"=1168 
		and V."Price"= Q."Price"
		AND T10."CardCode"= T01."CardCode" AND T3."U_GSP_Desc" in  ('36','S','2'))AS "36,S,2", 
		
		(SELECT  sum(T0."Quantity") as "talla1"
		FROM QUT1 T0  
		INNER JOIN OQUT T01 ON  T0."DocEntry"= T01."DocEntry" 
		INNER JOIN OITM T11 ON T0."ItemCode" = T11."ItemCode"
		LEFT JOIN  "@GSP_TCMODEL"  TX2 ON  TX2."U_GSP_REFERENCE"= T11."U_GSP_REFERENCE"
		 LEFT JOIN  "@GSP_TCSIZE"  T3 ON T11."U_GSP_Size"= T3."Code" 
		 LEFT JOIN "ITM1" V ON V."ItemCode" = T11."ItemCode" AND V."PriceList"=1 AND V."Price">1
        LEFT JOIN "ITM1" Z ON Z."ItemCode" = T11."ItemCode" AND Z."PriceList"=2 AND Z."Price">1
		 WHERE T11."U_GSP_REFERENCE" =T2."U_GSP_REFERENCE" --and T01."DocEntry"=1168 
		and V."Price"= Q."Price"
		AND T10."CardCode"= T01."CardCode" AND T3."U_GSP_Desc" in  ('37','M','4'))AS "37,M,4",
		
	(SELECT  sum(T0."Quantity") as "talla1"
		FROM QUT1 T0  
		INNER JOIN OQUT T01 ON  T0."DocEntry"= T01."DocEntry" 
		INNER JOIN OITM T11 ON T0."ItemCode" = T11."ItemCode"
		LEFT JOIN "@GSP_TCMODEL"  TX2 ON  TX2."U_GSP_REFERENCE"= T11."U_GSP_REFERENCE"
		 LEFT JOIN  "@GSP_TCSIZE"  T3 ON T11."U_GSP_Size"= T3."Code" 
		 WHERE T11."U_GSP_REFERENCE" =T2."U_GSP_REFERENCE" --and T01."DocEntry"=1168 
		AND T10."CardCode"= T01."CardCode" AND T3."U_GSP_Desc" in  ('38','L','6'))AS "38,L,6",				
			
	(SELECT  sum(T0."Quantity") as "talla1"
		FROM QUT1 T0  
		INNER JOIN OQUT T01 ON  T0."DocEntry"= T01."DocEntry" 
		INNER JOIN OITM T11 ON T0."ItemCode" = T11."ItemCode"
		LEFT JOIN  "@GSP_TCMODEL"  TX2 ON  TX2."U_GSP_REFERENCE"= T11."U_GSP_REFERENCE"
		 LEFT JOIN  "@GSP_TCSIZE"  T3 ON T11."U_GSP_Size"= T3."Code" 
		 WHERE T11."U_GSP_REFERENCE" =T2."U_GSP_REFERENCE" --and T01."DocEntry"=1168 
		AND T10."CardCode"= T01."CardCode" AND T3."U_GSP_Desc" in  ('39','XL','8'))AS "39,XL,8",
	
		(SELECT  sum(T0."Quantity") as "talla1"
		FROM QUT1 T0  
		INNER JOIN OQUT T01 ON  T0."DocEntry"= T01."DocEntry" 
		INNER JOIN OITM T11 ON T0."ItemCode" = T11."ItemCode"
		LEFT JOIN  "@GSP_TCMODEL"  TX2 ON  TX2."U_GSP_REFERENCE"= T11."U_GSP_REFERENCE"
		 LEFT JOIN  "@GSP_TCSIZE"  T3 ON T11."U_GSP_Size"= T3."Code" 
		 WHERE T11."U_GSP_REFERENCE" =T2."U_GSP_REFERENCE" --and T01."DocEntry"=1168 
		AND T10."CardCode"= T01."CardCode" AND T3."U_GSP_Desc" in ('40','10'))AS "40,10",
		
		(SELECT  sum(T0."Quantity") as "talla1"
		FROM QUT1 T0  
		INNER JOIN OQUT T01 ON  T0."DocEntry"= T01."DocEntry" 
		INNER JOIN OITM T11 ON T0."ItemCode" = T11."ItemCode"
		LEFT JOIN  "@GSP_TCMODEL"  TX2 ON  TX2."U_GSP_REFERENCE"= T11."U_GSP_REFERENCE"
		LEFT JOIN  "@GSP_TCSIZE"  T3 ON T11."U_GSP_Size"= T3."Code" 
		 WHERE T11."U_GSP_REFERENCE" =T2."U_GSP_REFERENCE" --and T01."DocEntry"=1168 
		AND T10."CardCode"= T01."CardCode" AND T3."U_GSP_Desc" in ('41','12'))AS "41,12",
		
	(SELECT  sum(T0."Quantity") as "talla1"
		FROM QUT1 T0  
		INNER JOIN OQUT T01 ON  T0."DocEntry"= T01."DocEntry" 
		INNER JOIN OITM T11 ON T0."ItemCode" = T11."ItemCode"
		LEFT JOIN  "@GSP_TCMODEL"  TX2 ON  TX2."U_GSP_REFERENCE"= T11."U_GSP_REFERENCE"
		LEFT JOIN  "@GSP_TCSIZE"  T3 ON T11."U_GSP_Size"= T3."Code" 
		 WHERE T11."U_GSP_REFERENCE" =T2."U_GSP_REFERENCE" --and T01."DocEntry"=1168 
		AND T10."CardCode"= T01."CardCode" AND T3."U_GSP_Desc" in ('OS', 'U'))AS "OS",
    Q."Price" AS "WHOLESALE",
    R."Price" AS "RETAIL",
   	P."Code" AS "COLECCION"
 
	 FROM "QUT1" T1 
	 	INNER JOIN "OQUT" T10 ON  T10."DocEntry"= T1."DocEntry"	
 		INNER JOIN "OITM" T2 ON T1."ItemCode" = T2."ItemCode"
 		LEFT JOIN "@GSP_TCMODEL" T6 ON T6."U_GSP_REFERENCE"= T2."U_GSP_REFERENCE" 
    	LEFT JOIN "@GSP_TCSEASON" T5 ON T6."U_GSP_SeasonCode" = T5."Code"
		LEFT JOIN "@GSP_BSSECCION" T8 ON T8."Code" = T6."U_GSP_SECTION"
		LEFT JOIN "@GSP_TCMATERIAL" T9 ON T9."Code" = T6."U_GSP_MATERIAL"
                                LEFT JOIN "ITM1" Q ON Q."ItemCode" = T2."ItemCode" AND Q."PriceList"=1 AND Q."Price">1
                                LEFT JOIN "ITM1" R ON R."ItemCode" = T2."ItemCode" AND R."PriceList"=2 AND R."Price">1	
                               LEFT JOIN "@GSP_TCCOLLECTION" P ON T6."U_GSP_COLLECTION" = P."Code"	
		
		
	WHERE T1."ItemCode" like 'PT013%' 
	
	
	GROUP BY T10."CardName", T6."U_GSP_Desc",  T8."Name",  T6."U_GSP_REFERENCE", T2."U_GSP_REFERENCE", T6."U_GSP_Picture",
	T9."Name", T5."Name", t6."Code", T10."CardCode",
	 --Q."Price", R."Price" , 
	 P."Code"
	
	order by T10."CardName";