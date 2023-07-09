from MySQL.DB.conf import (
    # connection_object,
    connection_pool,
    select_query,
    delete_query,
)
# from mysql.connector import Error
from mysql.connector import errors

from MySQL.DB.queries import queryDelRef, queryGetAllReferenceINContingencyPlan, queryGetInfoItemCodeOfSaleOrder,  queryGetTotalNoItemsDespachadosByCollection
from MySQL.DB.queries import queryGetAllReferencesInPicking, queryGetBoxWeight, queryGetItemsInSaleOrderPicking
from MySQL.DB.queries import queryGetQantityBySize, queryGetQantityReferencesInBox, queryGetReferencesInBoxMonitor
from MySQL.DB.queries import queryGetQantityReferencesInBoxByPickingAndCodebars
from MySQL.DB.queries import queryGetQantityReferencesInBoxByReference, queryGetReferencesInBox 
from MySQL.DB.queries import queryGetQantityReferencesInBoxByPickingAndItemCode, queryGetTotalNoItemsDespachados
from MySQL.DB.queries import (
    queryGetStatusPickingCustomerByCollection, queryGetDataPickingByStatusPickingAndCollection,
    queryGetInventoryContainerUnits,
    queryGetInventoryShelfDetailed,
    # testQuery,
)

from MySQL.views import (
    deleteBoxComplete,
    deleteReference,
    getAllBoxInPicking,
    getBoxWeight,
    getReferencesInBoxMonitor,
    #TestMysqlConnection,
)

from MySQL.DB.queries import (
    queryDelRef,
    queryGetAllReferenceINContingencyPlan,
    queryGetInfoItemCodeOfSaleOrder,
    queryGetTotalNoItemsDespachadosByCollection,
    queryGetAllReferencesInPicking,
    queryGetBoxWeight,
    queryGetItemsInSaleOrderPicking,
    queryGetQantityBySize,
    queryGetQantityReferencesInBox,
    queryGetReferencesInBoxMonitor,
    queryGetQantityReferencesInBoxByPickingAndCodebars,
    queryGetQantityReferencesInBoxByReference,
    queryGetReferencesInBox,
    queryGetQantityReferencesInBoxByPickingAndItemCode,
    queryGetTotalNoItemsDespachados,
    queryGetStatusPickingCustomerByCollection,
    queryGetDataPickingByStatusPickingAndCollection,
    queryGetInventoryContainerUnits,
    queryGetInventoryShelfDetailed,
    testQuery,
)

#delete 
connection_object = connection_pool.get_connection()
cursor = connection_object.cursor()
cursor.execute('FLUSH QUERY CACHE;')
cursor.execute(queryDelRef('2004', 'PT01236'))

cursor.execute("SHOW VARIABLES LIKE 'innodb_lock_wait_timeout';")

cursor.execute("SET  innodb_lock_wait_timeout = 50;")
cursor.execute("SET GLOBAL wait_timeout = 28000;")
cursor.execute("SET GLOBAL interactive_timeout= 28000")
connection_object.commit()
cursor.close()

# consulta select
data =getBoxWeight('2003')

cursor.execute(queryGetBoxWeight(idBox))


cursor = connection_object.cursor()
cursor.execute("""SELECT T0.weight FROM picking_dimension T0 INNER JOIN picking_box T1 ON T0.idDimension = T1.idDimension_id WHERE T1.idBox = """+'2006'+""";""")
rows = cursor.fetchall()
cursor.close()

 
connection_object.reconnect()
connection_object.is_connected()


# Esto funciona
try:
    cursor = connection_object.cursor()
    cursor.execute("""SELECT * FROM picking_dimension limit 10;""")
    rows = cursor.fetchall()
    cursor.close()


except Exception as error:
    print(f"Ocurrio un error {error}")


try:
    cursor = connection_object.cursor(dictionary=True)
    cursor = connection_object.cursor()

except errors.OperationalError as e:
    print(f"Error de conexion {e}")
    cursor.close()
    connection_object.rollback()
    connection_object.close()
    connection_object = connection_pool.get_connection()




except Exception as error:
    print(f"Ocurrio un error {error}")


# Obtener una conexion del pool de conexiones
connection_object = connection_pool.get_connection()
cursor = connection_object.cursor()
cursor.execute(queryDelRef('2004', 'PT01236'))

# Iniciar una transaccion
connection_object.start_transaction()

# Verificar si hay conexion en transaccion
connection_object.in_transaction
connection_object.is_connected()


cursor.execute("SET GLOBAL wait_timeout = 28000;")
cursor.execute("SET GLOBAL interactive_timeout= 28000")
cursor.execute("SET  wait_timeout = 28000;")
cursor.execute("SET  interactive_timeout= 28000")

cursor.close()
connection_object.rollback()
connection_object.commit()
connection_object.close()



connection_object = connection_pool.get_connection()
connection_object.close()

connection_object.cmd_reset_connection()
connection_object.reset_session()

#ver id del thread
connection_object.connection_id

# Nombre del pool de conexiones
connection_pool.pool_name


# reconfigurar el pool de conexiones
connection_pool.set_config(user="pyuser")



data = select_query(queryGetBoxWeight('2006'))

#Ejemplo para caja 1
delete_query(queryDelRef('1', 'PT00492_006_1774'))

rows = select_query(queryGetReferencesInBox(1))
rows

rows2 = select_query(queryGetQantityReferencesInBox('1'))
rows2