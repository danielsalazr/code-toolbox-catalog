import pymongo

client = pymongo.MongoClient('mongodb://localhost:27017')
#//username:password@HOSTNAME/DATABASE_NAME?authSource=admin&tls=true&tlsCAFile=<PATH_TO_CA_FILE>')


#Define DB Name
dbname = client['local']

#Define Collection
collection = dbname['registros']

registro={
    "maquina": 3,
    "datetime": "2023-02-16 16:22:23",
    "periodo": 19,
    "velocidad":27.6
}

# Insertar registro
collection.insert_one(registro)

# Leer los ducomuentos de registros 
registros_details = collection.find({})

for r in registros_details:
    print(r)