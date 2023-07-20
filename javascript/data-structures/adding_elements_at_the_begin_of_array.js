// Agrega un elemento al inicio del array
  evilPush(item) {
    for(let i = 0; i < this.length; i++){
      this.data[this.length - i] = this.data[this.length - i - 1]
    }
    this.data[0] = item
    this.length++
    return item
  }
  // Elimina el primer item del array
  evilPop() {
    const firstItem = this.data[0]
    delete this.data[0]
    this.length--
    return firstItem
  }


  /*
  unshift(item){ //Agregar un elemento al principio
	this.length++;
	for (let  i  =  this.length -  1; i  >  0; i--) {
	this.data[i] =  this.data[i  -  1];
	}
	this.data[0] =  item;
	return  item;
}

shift(){ //Eliminar el primer elemento
	const  firstItem  =  this.data[0];
	this.shiftIndex(0);
	return  firstItem;
}

*/


/*

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      //   console.log(this.data[i]);
      //   console.log(this.data[i +1]);
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  shift() {
    const firstItem = this.data[0];
    this.shiftIndex(0);

    return firstItem;
  }
  unshift(item) {
    for (let i = 0; i < this.length; i++) {
      this.data[this.length - i] = this.data[this.length - (i + 1)];
    }
    this.data[0] = item;
    this.length++;
    return this.data;
  }
}

const myArray = new MyArray();

myArray.push("Karen");
myArray.push("Oscar");
myArray.push("María");
myArray.push("Juan");
myArray.push("Marcos");

myArray.unshift("Leandro");

myArray;

*/