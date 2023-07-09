DO
BEGIN
    DECLARE I INTEGER;
    DECLARE LEN INTEGER;
    DECLARE array_vars VARCHAR(20) ARRAY = ARRAY('IN00000011','INN0009641','IN00009993','IN00009673');
    DECLARE array_quantity VARCHAR(20) ARRAY = ARRAY(2.1,5.4,3.8,4);


    
    DECLARE exist INTEGER;
    

    LEN:= CARDINALITY(:array_vars);
    CREATE LOCAL TEMPORARY TABLE #AAAB2 ("Referencia" VARCHAR(20), "TomaFisica" DOUBLE, "cantidadSAP" DOUBLE, "Resta" DOUBLE);
    
    FOR I IN 1..:LEN DO

        INSERT INTO #AAAB2 ("Referencia", "TomaFisica", "cantidadSAP", "Resta")
            select "ItemCode",
                (:array_quantity[I]) as "TomaF",
                "OnHand" as "cantidad",
                ((:array_quantity[I]) - "OnHand") as "diferencia"
            from OITW
            where 
            "OnHand" <> 0
            and 
            "WhsCode" = 'JO301'
            and 
            "ItemCode" = (:array_vars[I]);
            
            
            /*
            values( (select "WhsCode" from OITW
            where 
            "OnHand" <> 0
            and 
            "WhsCode" = 'JO301'
            and 
            "ItemCode" = (:array_vars[I])),
            (select "OnHand" from OITW
            where 
            "OnHand" <> 0
            and 
            "WhsCode" = 'JO301'
            and 
            "ItemCode" = (:array_vars[I])),
            (:array_quantity[I]));
                    */
            
        --INSERT INTO #AAAB2 () (:array_quantity[I]);
    --END IF; 
    END FOR;
    SELECT * FROM #AAAB2 ;
    DROP TABLE #AAAB2;
END;