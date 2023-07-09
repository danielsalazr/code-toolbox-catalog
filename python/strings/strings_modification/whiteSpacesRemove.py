# Este Programa tiene la finalidad de eliminar espacios en blanco al inicio y final
# de un Texto Ingresado por el usuario para evitar inconvenientes con la bases de datos


n= input("ingrese una referencia de producto:\n")
#n=n.strip(' ')
n=" ".join(n.split())

print(n+"/") #Imprimimos con slash contrario para verificar eliminacion de espacios 