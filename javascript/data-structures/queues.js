class Node{
    constructor(value){
        this.value = value;
        this.next =  null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first
    }

    enqueue(value){
        const newNode = new Node(value);
        if (this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue(){
        if (this.length ===0){
            console.log("No existen elementos en la fila");
        } else {
            this.first = this.first.next;
            if (this.first === null){
                this.last =  null;
            }
            this.length--;
        }
    }
}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(16);
myQueue.enqueue(74);
myQueue.enqueue(33);
console.log(myQueue)
myQueue.dequeue()
myQueue.enqueue(41);
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
//myQueue.dequeue()
console.log(myQueue);