//Son listas de nodos linkeadas en orden

//  Metodos

/*
    prepend             Agreagr un nodo al inicio
    appen               Agregar un nodo al finall
    lookup / search     Buscar un nodo
    insert              Insertar un nodo en la lista
    delete              Borrar un nodo

    */


//    1 --> 2 -->3 --> 4 -->5 --> null;
/*
let singleLinkedList {
    head : {
        value: 1,
        next: {
            value:2,
            next: {
                value:3,
                next: {
                    value: 4,
                    next :{
                        value: 5,
                        next: {
                            value: null,
                        }
                    }
                }
            }
        }
    }
}
*/
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
/*
class MyDoublyLinkedList {
    contructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }
}
*/

class MySingleLinkedlist {
    constructor (value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;        
    }
    preprend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        
        this.length++;

        return this;
    }
    insert(index, value){   //metodo para agrergar un nodo intermedio en la secuencia
        //* - * - *
        if(index >= this.length){
            return this.append(value)
        }

        const newNode  = new Node(value);
        const firsPointer = this.getTheIndex(index-1);
        const holdingPointer = firsPointer.next;
        firsPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length ++;

        return this;

    }
    getTheIndex(index){
        let counter = 0;
        let currentNode  = this.head;

        while (counter !== index){
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    remove(index){
        if(index >= this.length) {
            console.error("index is out of limits of the array");
        } else if( index == 0) {
            this.head = this.head.next;
            this.length--
        }
        else if(index  === this.length - 1){
            const firstPointer = this.getTheIndex(index - 1);
            firstPointer.next = null;
            this.tail = firstPointer;
            this.length--;
        } else {
            const firstPointer = this.getTheIndex(index - 1);
            const pointerToRemove = firstPointer.next;
            firstPointer.next = pointerToRemove.next;
            this.length--;
        }
    }
}




let myLinkedList = new MySingleLinkedlist(1);

myLinkedList.append(2)
//console.log(myLinkedList);
myLinkedList.append(3)
//console.log(myLinkedList);
myLinkedList.append(4)
myLinkedList.append(5)
//console.log(myLinkedList);

myLinkedList.preprend(6);


//console.log(myLinkedList);

myLinkedList.insert(2,18);

console.log(myLinkedList);

myLinkedList.remove(5);