const array = ["Diego", "Karen","Oscar"]

array.push("Ana")

console.log(array)

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {} ;
    } 

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data [this.length] =  item;
        this.length++;

        return this.data;
    }
}

const myArray = new MyArray();

myArray.push("Daniel");
myArray.push("Adriana");
myArray.get(1)
console.log(myArray.get(1));
//console.log(myArray);
