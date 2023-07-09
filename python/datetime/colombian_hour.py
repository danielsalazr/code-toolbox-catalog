from datetime import datetime
import pytz

# Establecer la zona horaria de Colombia
colombia_tz = pytz.timezone('America/Bogota')

# Obtener la hora actual en Colombia
hora_actual_colombia = datetime.now(colombia_tz)

# Imprimir la hora actual en Colombia
print("La hora actual en Colombia es: ", hora_actual_colombia.strftime(' %Y-%m-%d %H:%M:%S'))