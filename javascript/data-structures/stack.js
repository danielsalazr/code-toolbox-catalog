class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if (this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;
        return this;
    }

    pop(){
        if (this.length == 0){
            console.log("no hay nodos en el stack")
            return 0
        } else {
            this.top = this.top.next
            if (this.top === null){
                console.log("No hay datos en el stack")
                this.bottom = null;
            } 
            this.length--;
            return this
        }
    }
}

const myStack = new Stack();

myStack.push(25);
myStack.push(10);
myStack.push(12);
myStack.push(7);
console.log(myStack.peek())
myStack.pop()
myStack.pop()

console.log(myStack)