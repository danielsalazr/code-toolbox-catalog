select "U_GSP_TIME",* from "@GSP_TCMODELFASEOPER"
where "U_GSP_TIME" is not null;

select * from "@GSP_TCMODELPHASE";

-- consulta necesaria

select * 
	--,T2."U_GSP_REFERENCE"
from "@GSP_TCMODELTRANSF";




select T2."U_GSP_REFERENCE" 
	, T0.*
from "@GSP_TCMODELTRANSF" T0
inner join "@GSP_TCMODEL" T2 ON  T2."Code" = T0."U_GSP_MODELCODE"
where 
--"U_GSP_MODELCODE" = '008907'
--and 
WEEK(TO_VARCHAR("U_GSP_DATE", 'YYYY-MM-DD')) = WEEK('2023-03-31')
order by T2."U_GSP_REFERENCE" ,
T0."U_GSP_DATE";


---------------------------------



select * from "@GSP_ITRULESVALIDS";


select * 
	--,T2."U_GSP_REFERENCE"
from "@GSP_TCMODELPHASE" T0
inner join "@GSP_TCMODELFASEOPER" T1 ON T0."Code" = T1."Code"
--inner join "@GSP_TCMODEL" T2 ON 
where "U_GSP_ModelCode" = '008907';



SELECT TABLE_NAME, COLUMN_NAME
FROM SYS.COLUMNS
--where COLUMN_NAME = 'U_GSP_OPERATION';
--where COLUMN_NAME = 'U_GSP_EXECDATE';
where COLUMN_NAME = 'U_GSP_OPERATION';


select  *
From "@GSP_TCMODELTRANSF"
where "U_GSP_DATE" = WEEK('2023-03-31');


SELECT *
FROM "@GSP_TCMODELTRANSF"
WHERE WEEK(TO_VARCHAR("U_GSP_DATE", 'YYYY-MM-DD')) = 2;


SELECT * from "@GSP_TCMODEL";



SELECT 
--TABLE_NAME, COLUMN_NAME, 
*
FROM SYS.COLUMNS
--where COLUMN_NAME = 'U_GSP_OPERATION';
--where COLUMN_NAME = 'U_GSP_EXECDATE';
--where COLUMN_NAME = 'U_GSP_OPERATION';
where TABLE_NAME = '@GSP_TCMODELTRANSF'
order by COLUMN_NAME;