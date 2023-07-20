//   las hash tables son parecidas a los jsnon  tienen una refeetencia qie los identifica
// Manejan el contexto  de key value

//  Metodos

//      search
//      insert
//      delete

//      En javascript son los objetos

class HashTable {
    constructor (size) {
        this.data = new Array(size);
    }


    hashMethod (key) {
        let hash = 0;
        for (let i = 0; i< key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const address = this.hashMethod(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key,value]);
        return this.data;
    }

    get (key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i< currentBucket.length; i++) {
                if (currentBucket [i][0] === key){
                    return currentBucket [i][1];
                }
            }
        }

        return undefined;
    }


    getKeys() {
    return this.data.reduce((instance, value) => {
      const keys = value.map(([key]) => key);
      return instance.concat(keys)
    }, []);
  }
}


const myHashTable = new HashTable(50);  // Generar  buckets Espacions con informacion

myHashTable.set("Diego", 1990)
myHashTable.set("carolina", 1925)
myHashTable.set("maya", 1997)
myHashTable.set("sara", 1999)
myHashTable.set("apolonia", 1991)

console.log(myHashTable.get('apolonia'))

console.log(myHashTable.getKeys())