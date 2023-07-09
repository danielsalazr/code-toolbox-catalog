

# Ruta del archivo CSV
archivo_csv = 'items.csv'

# Abrir el archivo CSV y leer los valores de la tabla
with open(archivo_csv, 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        # Acceder a los valores de cada fila
        columna1 = row[0]
        columna2 = row[1]
        
        # Realizar las operaciones necesarias con los valores
        # Por ejemplo, imprimirlos
        print(f"Valor de columna1: {columna1}")
        print(f"Valor de columna2: {columna2}")