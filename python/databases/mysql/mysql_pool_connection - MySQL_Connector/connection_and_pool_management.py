""".mysql-connector pool-connections management

    This code has been made to do a correctly use of databases querys on python projects using pool-object-connections
    to manage recurrent querys.

"""

from django.conf import settings
from mysql.connector import Error
from mysql.connector import pooling

from rich.console import Console
console = Console()

poolname="mysqlpool"

varHost='localhost'
varUser=settings.DATABASES['default']['USER']
varPasswd=settings.DATABASES['default']['PASSWORD']
varDB=settings.DATABASES['default']['NAME']


connection_pool = pooling.MySQLConnectionPool(
    pool_name="pynative_pool",
    pool_reset_session=True,
    pool_size=5,
    # auto_reconnect=True,
    host=varHost,
    database=varDB,
    user=varUser,
    password=varPasswd,
    # connection_timeout = 10

    # failover=(
    #     primary_args,
    #     failover_args,
    # )

)

try:
    print("Printing connection pool properties ")
    print("Connection Pool Name - ", connection_pool.pool_name)
    print("Connection Pool Size - ", connection_pool.pool_size)

    connection_object = connection_pool.get_connection()

    console.log(f"El estado de la conexion es: {connection_object.is_connected()}")

    if connection_object.is_connected():
        db_Info = connection_object.get_server_info()
        print("Connected to MySQL database using connection pool ... MySQL Server version on ", db_Info)

        cursor = connection_object.cursor()
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("Your connected to - ", record)
        cursor.close()

except Error as e:
    print("Error while connecting to MySQL using Connection pool ", e)
finally:
    if connection_object.is_connected():
        db_Info = connection_object.get_server_info()
        print("Connected to MySQL database using connection pool ... MySQL Server version on ", db_Info)

        cursor = connection_object.cursor()
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("Your connected to - ", record)
        cursor.close()
        connection_object.close()


# Méthods to do SELECT querys 
def select_query(query):
    connection = None
    try:
        connection = connection_pool.get_connection()
        if connection.is_connected():
            cursor = connection.cursor()
            cursor.execute('FLUSH QUERY CACHE;')
            cursor.execute(query)
            rows = cursor.fetchall()
            # connection.commit()
            return rows
    except Error as e:
        print("Error al ejecutar la consulta SELECT:", e)
    finally:
        if connection:
            connection.rollback()
            connection.close()


# Méthods to do INSERT querys
def insert_query(query, values):
    connection = None
    try:
        connection = connection_pool.get_connection()
        if connection.is_connected():
            cursor = connection.cursor()
            cursor.execute(query)
            connection.commit()
            print("Inserción exitosa.")
    except Error as e:
        print("Error al ejecutar la consulta de inserción:", e)
        if connection:
            connection.rollback()
    finally:
        if connection:
            connection.close()


# Méthods to do UPDATE querys
def update_query(query, values):
    connection = None
    try:
        connection = connection_pool.get_connection()
        if connection.is_connected():
            cursor = connection.cursor()
            cursor.execute(query)
            connection.commit()
            print("Actualización exitosa.")
    except Error as e:
        print("Error al ejecutar la actualización:", e)
        if connection:
            connection.rollback()
    finally:
        if connection:
            connection.close()


# Méthods to do DELETE querys
def delete_query(query):
    connection = None
    try:
        connection = connection_pool.get_connection()
        if connection.is_connected():
            cursor = connection.cursor()
            cursor.execute(query)
            connection.commit()
            print("Borrado exitoso.")
    except Error as e:
        print("Error al ejecutar el borrado:", e)
        if connection:
            connection.rollback()
    finally:
        if connection:
            connection.close()


# este metodo no esta funcionando actualmente pero ocasiona que se cirren ordenadamente las 
# conexiones del pool y se abran otras nuevas respetando el tamaño del pool
def reconection():
    try:
        cursor.close()
    except:
        pass
    connection_object.close()
    connection_object = connection_pool.get_connection()


#El siguiente metodo se utilizo en algun momento para hacer touch via cmd al archivo wsgi de django para
# reiniciar el proceso

# try:
#     pass

# except Exception as error:
#         print(f"Ocurrio un error {error}")
#         if operatingSystem == "Linux":
#             os.system('touch /var/www/wms/wms/wms/wsgi.py')
#             # os.system('touch/mnt/c/Users/USUARIO/Desktop/Proyectos/Produccion/wms/wms/wms/wsgi.py')
#         return []