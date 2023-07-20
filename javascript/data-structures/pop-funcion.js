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
    
    pop() {
        const lastItem = this.data[this.length-1];
        delete(this.data[this.length-1]);
        this.length--;

        return lastItem
    }

    delete (index) {
        const item = this.data[this.index]
        this.shiftIndex(index);

        return item;
    }

    shiftIndex(index) {
        for (let i= index; i < this.length; i++) {
            this.data[i] = this.data[i+1];

        }

        delete  this.data[this.length -1 ]
        this.length--;
    }
}

/*

pop_ex() {
        let auxiliar = {};
        this.length--;
        for (let i = 0; i < this.length; i++) {
            auxiliar[i] = this.data[i];
        }
        this.data = undefined;
        this.data = auxiliar;
        return this.data;
    }

    */

const myArray = new MyArray();

myArray.push("Daniel");
myArray.push("Adriana");
myArray.push("Oscar");
myArray.push("Manuel");
myArray.push("Diego");
console.log(myArray)
myArray.get(1);
myArray.pop();
console.log(myArray.get(1));
myArray.delete(2)
console.log(myArray)
//console.log(myArray);
